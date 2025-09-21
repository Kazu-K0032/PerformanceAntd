import { Pagination } from "antd";

interface TodoPaginationProps {
  current: number;
  total: number;
  pageSize: number;
  onChange: (page: number) => void;
}

export function TodoPagination({
  current,
  total,
  pageSize,
  onChange,
}: TodoPaginationProps) {
  return (
    <div
      style={{
        marginTop: "24px",
        marginBottom: "8px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Pagination
        current={current}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        showSizeChanger={false}
        showQuickJumper
        showTotal={(total, range) => `${range[0]}-${range[1]} / ${total} 件`}
      />
    </div>
  );
}
