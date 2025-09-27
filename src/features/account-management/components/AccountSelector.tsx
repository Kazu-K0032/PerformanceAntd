"use client";

import { Select, Avatar } from "antd";
import { Account } from "@prisma/client";

interface AccountSelectorProps {
  accounts: Account[];
  selectedAccountId?: string;
  onAccountSelect: (accountId: string) => void;
  loading?: boolean;
  error?: string | null;
}

export function AccountSelector({
  accounts,
  selectedAccountId,
  onAccountSelect,
  loading = false,
  error = null,
}: AccountSelectorProps) {
  const options = accounts.map((account) => ({
    value: account.id,
    label: (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Avatar size="small" src={account.icon} />
        <span>{account.accountName}</span>
      </div>
    ),
  }));

  if (error) {
    return (
      <Select
        disabled
        placeholder="エラー: アカウントの読み込みに失敗"
        style={{ minWidth: 200 }}
      />
    );
  }

  return (
    <Select
      value={selectedAccountId}
      onChange={onAccountSelect}
      placeholder={loading ? "読み込み中..." : "アカウントを選択"}
      loading={loading}
      disabled={loading}
      style={{ minWidth: 200 }}
      options={options}
    />
  );
}
