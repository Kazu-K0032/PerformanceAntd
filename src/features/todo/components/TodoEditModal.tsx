import { Modal, Form, Input, Button } from "antd";

const { TextArea } = Input;

interface TodoEditModalProps {
  visible: boolean;
  editTitle: string;
  editDescription: string;
  setEditTitle: (title: string) => void;
  setEditDescription: (description: string) => void;
  onClose: () => void;
  onUpdate: () => void;
}

export function TodoEditModal({
  visible,
  editTitle,
  editDescription,
  setEditTitle,
  setEditDescription,
  onClose,
  onUpdate,
}: TodoEditModalProps) {
  return (
    <Modal
      title="TODO編集"
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          キャンセル
        </Button>,
        <Button key="update" type="primary" onClick={onUpdate}>
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
  );
}
