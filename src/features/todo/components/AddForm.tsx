import { Card, Space, Input, Button } from "antd";

const { TextArea } = Input;

interface AddFormProps {
  newTitle: string;
  newDescription: string;
  setNewTitle: (title: string) => void;
  setNewDescription: (description: string) => void;
  handleAddTodo: () => void;
}

export function AddForm({
  newTitle,
  newDescription,
  setNewTitle,
  setNewDescription,
  handleAddTodo,
}: AddFormProps) {
  return (
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
  );
}
