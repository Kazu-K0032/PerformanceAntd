"use client";

import { useState } from "react";
import { Layout } from "antd";
import { TodoMemo } from "@/features/todo";
import { Header } from "./Header";

const { Content } = Layout;

export default function Home() {
  const [selectedAccountId, setSelectedAccountId] = useState<
    string | undefined
  >(undefined);

  const handleAccountSelect = (accountId: string) => {
    setSelectedAccountId(accountId);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        selectedAccountId={selectedAccountId}
        onAccountSelect={handleAccountSelect}
      />
      <Content style={{ padding: "24px" }}>
        <TodoMemo accountId={selectedAccountId} />
      </Content>
    </Layout>
  );
}
