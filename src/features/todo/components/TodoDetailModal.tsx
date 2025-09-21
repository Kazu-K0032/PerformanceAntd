import { Modal, Typography, Divider, Button } from "antd";
import { TodoItem } from "../TodoMemo.mock";

const { Title, Text } = Typography;

interface TodoDetailModalProps {
  visible: boolean;
  todo: TodoItem | null;
  onClose: () => void;
}

export function TodoDetailModal({
  visible,
  todo,
  onClose,
}: TodoDetailModalProps) {
  return (
    <Modal
      title="TODO詳細"
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          閉じる
        </Button>,
      ]}
    >
      {todo && (
        <div>
          <Title level={4}>{todo.title}</Title>
          <Divider />
          <Text>{todo.description}</Text>
          <Divider />
          <Text type="secondary">
            作成日: {todo.createdAt.toLocaleString("ja-JP")}
          </Text>
          <br />
          <Text type="secondary">
            ステータス: {todo.completed ? "完了" : "未完了"}
          </Text>
        </div>
      )}
    </Modal>
  );
}
