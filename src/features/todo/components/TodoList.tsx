import { Row, Col } from "antd";
import { TodoItem } from "../TodoMemo.mock";
import { TodoCard } from "./TodoCard";

interface TodoListProps {
  todos: TodoItem[];
  onToggle: (id: string) => void;
  onView: (todo: TodoItem) => void;
  onEdit: (todo: TodoItem) => void;
  onDelete: (id: string) => void;
}

export function TodoList({
  todos,
  onToggle,
  onView,
  onEdit,
  onDelete,
}: TodoListProps) {
  return (
    <Row gutter={[16, 16]}>
      {todos.map((todo) => (
        <Col xs={24} sm={12} lg={8} xl={6} key={todo.id}>
          <TodoCard
            todo={todo}
            onToggle={onToggle}
            onView={onView}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </Col>
      ))}
    </Row>
  );
}
