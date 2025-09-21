import { Card, Checkbox, Typography } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
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
  return (
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
          onClick={() => onView(todo)}
          style={{ color: "#1890ff" }}
        />,
        <EditOutlined
          key="edit"
          onClick={() => onEdit(todo)}
          style={{ color: "#52c41a" }}
        />,
        <DeleteOutlined
          key="delete"
          onClick={() => onDelete(todo.id)}
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
        <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />
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
  );
}
