"use client";

import { useState } from "react";
import { Typography, message } from "antd";
import { useTodoMemo } from "./useTodoMemo";
import { TodoItem } from "./TodoMemo.mock";
import {
  AddForm,
  TodoList,
  ActionButtons,
  TodoPagination,
  TodoDetailModal,
  TodoEditModal,
} from "./components";

const { Title } = Typography;

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

      <AddForm
        newTitle={newTitle}
        newDescription={newDescription}
        setNewTitle={setNewTitle}
        setNewDescription={setNewDescription}
        handleAddTodo={handleAddTodo}
      />

      <ActionButtons
        completedCount={todos.filter((todo) => todo.completed).length}
        onDeleteCompleted={handleDeleteCompleted}
      />

      <TodoPagination
        current={currentPage}
        total={todos.length}
        pageSize={pageSize}
        onChange={handlePageChange}
      />

      <TodoList
        todos={currentTodos}
        onToggle={toggleTodo}
        onView={showTodoDetail}
        onEdit={handleEditTodo}
        onDelete={deleteTodo}
      />

      <TodoDetailModal
        visible={isDetailModalVisible}
        todo={selectedTodo}
        onClose={closeModals}
      />

      <TodoEditModal
        visible={isEditModalVisible}
        editTitle={editTitle}
        editDescription={editDescription}
        setEditTitle={setEditTitle}
        setEditDescription={setEditDescription}
        onClose={closeModals}
        onUpdate={handleUpdateTodo}
      />
    </div>
  );
}
