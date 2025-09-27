"use client";

import { Layout, Typography } from "antd";
import { AccountManagement } from "@/features/account-management";
import { AccountManagementProps } from "@/features/account-management/AccountManagement.types";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

interface HeaderProps extends AccountManagementProps {
  title?: string;
}

export function Header({
  title = "Performance Antd App",
  selectedAccountId,
  onAccountSelect,
}: HeaderProps) {
  return (
    <AntHeader
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px",
        background: "#fff",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Title level={3} style={{ margin: 0, color: "#1890ff" }}>
        {title}
      </Title>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <AccountManagement
          selectedAccountId={selectedAccountId}
          onAccountSelect={onAccountSelect}
        />
      </div>
    </AntHeader>
  );
}
