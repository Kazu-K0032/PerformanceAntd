import { Card, Checkbox, Typography } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { TodoItem } from "../TodoMemo.mock";

const { Text } = Typography;

interface TodoCardProps {
  todo: TodoItem;
  onToggle: (id: string) => void;
  onView: (todo: TodoItem) => void;
  onEdit: (todo: TodoItem) => void;
  onDelete: (id: string) => void;
}

export function TodoCard({
  todo,
  onToggle,
  onView,
  onEdit,
  onDelete,
}: TodoCardProps) {
  const handleToggle = () => onToggle(todo.id);
  const handleView = () => onView(todo);
  const handleEdit = () => onEdit(todo);
  const handleDelete = () => onDelete(todo.id);

  const cardStyle = useMemo(
    () => ({
      minHeight: "160px",
      maxHeight: "200px",
      width: "100%",
      maxWidth: "280px",
      opacity: todo.completed ? 0.6 : 1,
      textDecoration: todo.completed ? "line-through" : "none",
      overflow: "auto",
    }),
    [todo.completed]
  );

  const actions = useMemo(
    () => [
      <EyeOutlined
        key="view"
        onClick={handleView}
        style={{ color: "#1890ff" }}
      />,
      <EditOutlined
        key="edit"
        onClick={handleEdit}
        style={{ color: "#52c41a" }}
      />,
      <DeleteOutlined
        key="delete"
        onClick={handleDelete}
        style={{ color: "#ff4d4f" }}
      />,
    ],
    [handleView, handleEdit, handleDelete]
  );

  const fullDescription = todo.description;

  const formattedDate = todo.createdAt.toLocaleDateString("ja-JP");

  return (
    <Card hoverable style={cardStyle} actions={actions}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "8px",
          height: "100%", // 親の高さに合わせる
        }}
      >
        <Checkbox checked={todo.completed} onChange={handleToggle} />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Text
            strong={!todo.completed}
            style={{
              fontSize: "16px",
              display: "block",
              marginBottom: "8px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {todo.title}
          </Text>
          <Text
            type="secondary"
            style={{
              fontSize: "12px",
              display: "block",
              minHeight: "28px",
              maxHeight: "48px",
              overflow: "auto",
              lineHeight: "1.3",
            }}
          >
            {fullDescription}
          </Text>
          <Text
            type="secondary"
            style={{
              fontSize: "10px",
              display: "block",
              marginTop: "auto",
              paddingTop: "2px",
              marginBottom: "0px",
            }}
          >
            {formattedDate}
          </Text>
        </div>
      </div>
    </Card>
  );
}
