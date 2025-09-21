import { Modal, Typography, Divider, Button } from "antd";
import { useMemo } from "react";
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
  const footer = useMemo(
    () => [
      <Button key="close" onClick={onClose}>
        閉じる
      </Button>,
    ],
    [onClose]
  );

  const formattedDate = useMemo(() => {
    return todo?.createdAt.toLocaleString("ja-JP") || "";
  }, [todo?.createdAt]);

  const statusText = useMemo(() => {
    return todo?.completed ? "完了" : "未完了";
  }, [todo?.completed]);

  return (
    <Modal
      title="TODO詳細"
      open={visible}
      onCancel={onClose}
      footer={footer}
    >
      {todo && (
        <div>
          <Title level={4}>{todo.title}</Title>
          <Divider />
          <Text>{todo.description}</Text>
          <Divider />
          <Text type="secondary">作成日: {formattedDate}</Text>
          <br />
          <Text type="secondary">ステータス: {statusText}</Text>
        </div>
      )}
    </Modal>
  );
}
