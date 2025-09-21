"use client";

import { useState } from "react";
import {
  Card,
  Input,
  Button,
  Checkbox,
  Modal,
  Form,
  Space,
  Typography,
  Divider,
  Row,
  Col,
  message,
  Pagination,
} from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useTodoMemo } from "./useTodoMemo";
import { TodoItem } from "./TodoMemo.mock";

const { TextArea } = Input;
const { Title, Text } = Typography;

export function TodoMemo() {
  const {
    todos,
    selectedTodo,
    editingTodo,
    isDetailModalVisible,
    isEditModalVisible,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompletedTodos,
    showTodoDetail,
    editTodo,
    updateTodo,
    closeModals,
  } = useTodoMemo();

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const handleAddTodo = () => {
    if (!newTitle.trim()) {
      message.warning("タイトルを入力してください");
      return;
    }
    addTodo(newTitle, newDescription);
    setNewTitle("");
    setNewDescription("");
    message.success("TODOを追加しました");
  };

  const handleEditTodo = (todo: TodoItem) => {
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    editTodo(todo);
  };

  const handleUpdateTodo = () => {
    if (!editTitle.trim()) {
      message.warning("タイトルを入力してください");
      return;
    }
    if (editingTodo) {
      updateTodo(editingTodo.id, editTitle, editDescription);
      message.success("TODOを更新しました");
    }
  };

  const handleDeleteCompleted = () => {
    const completedCount = todos.filter((todo) => todo.completed).length;
    if (completedCount === 0) {
      message.info("完了済みのTODOがありません");
      return;
    }
    deleteCompletedTodos();
    message.success(`${completedCount}個の完了済みTODOを削除しました`);
  };

  // ページネーション用のデータ計算
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentTodos = todos.slice(startIndex, endIndex);
  const totalPages = Math.ceil(todos.length / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <Title level={2}>TODO管理アプリ</Title>

      {/* TODO追加フォーム */}
      <Card title="新しいTODOを追加" style={{ marginBottom: "24px" }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Input
            placeholder="TODOのタイトルを入力"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onPressEnter={handleAddTodo}
          />
          <TextArea
            placeholder="TODOの詳細を入力（任意）"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            rows={3}
          />
          <Button type="primary" onClick={handleAddTodo}>
            追加
          </Button>
        </Space>
      </Card>

      {/* アクションボタン */}
      <div style={{ marginBottom: "16px" }}>
        <Button
          danger
          onClick={handleDeleteCompleted}
          disabled={todos.filter((todo) => todo.completed).length === 0}
        >
          完了済みTODOを削除
        </Button>
      </div>

      {/* ページネーション */}
      <div style={{ marginTop: "24px", marginBottom: "8px", display: "flex", justifyContent: "flex-end" }}>
        <Pagination
          current={currentPage}
          total={todos.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
          showQuickJumper
          showTotal={(total, range) => `${range[0]}-${range[1]} / ${total} 件`}
        />
      </div>

      {/* TODO一覧 */}
      <Row gutter={[16, 16]}>
        {currentTodos.map((todo) => (
          <Col xs={24} sm={12} lg={8} xl={6} key={todo.id}>
            <Card
              hoverable
              style={{
                height: "100%",
                opacity: todo.completed ? 0.6 : 1,
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              actions={[
                <EyeOutlined
                  key="view"
                  onClick={() => showTodoDetail(todo)}
                  style={{ color: "#1890ff" }}
                />,
                <EditOutlined
                  key="edit"
                  onClick={() => handleEditTodo(todo)}
                  style={{ color: "#52c41a" }}
                />,
                <DeleteOutlined
                  key="delete"
                  onClick={() => deleteTodo(todo.id)}
                  style={{ color: "#ff4d4f" }}
                />,
              ]}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <Checkbox
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <div style={{ flex: 1 }}>
                  <Text
                    strong={!todo.completed}
                    style={{
                      fontSize: "16px",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    {todo.title}
                  </Text>
                  <Text
                    type="secondary"
                    style={{
                      fontSize: "12px",
                      display: "block",
                    }}
                  >
                    {todo.description.length > 50
                      ? `${todo.description.substring(0, 50)}...`
                      : todo.description}
                  </Text>
                  <Text
                    type="secondary"
                    style={{
                      fontSize: "10px",
                      display: "block",
                      marginTop: "4px",
                    }}
                  >
                    {todo.createdAt.toLocaleDateString("ja-JP")}
                  </Text>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 詳細モーダル */}
      <Modal
        title="TODO詳細"
        open={isDetailModalVisible}
        onCancel={closeModals}
        footer={[
          <Button key="close" onClick={closeModals}>
            閉じる
          </Button>,
        ]}
      >
        {selectedTodo && (
          <div>
            <Title level={4}>{selectedTodo.title}</Title>
            <Divider />
            <Text>{selectedTodo.description}</Text>
            <Divider />
            <Text type="secondary">
              作成日: {selectedTodo.createdAt.toLocaleString("ja-JP")}
            </Text>
            <br />
            <Text type="secondary">
              ステータス: {selectedTodo.completed ? "完了" : "未完了"}
            </Text>
          </div>
        )}
      </Modal>

      {/* 編集モーダル */}
      <Modal
        title="TODO編集"
        open={isEditModalVisible}
        onCancel={closeModals}
        footer={[
          <Button key="cancel" onClick={closeModals}>
            キャンセル
          </Button>,
          <Button key="update" type="primary" onClick={handleUpdateTodo}>
            変更
          </Button>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="タイトル">
            <Input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="TODOのタイトルを入力"
            />
          </Form.Item>
          <Form.Item label="詳細">
            <TextArea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              placeholder="TODOの詳細を入力"
              rows={4}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
