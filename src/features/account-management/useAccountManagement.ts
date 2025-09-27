import { useState, useCallback, useEffect } from "react";
import { Account } from "@prisma/client";
import { accountClient } from "@/lib/client-account";

export const useAccountManagement = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAccountId, setSelectedAccountId] = useState<
    string | undefined
  >(undefined);

  const loadAccounts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedAccounts = await accountClient.getAccounts();
      setAccounts(fetchedAccounts);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "アカウントの読み込みに失敗しました"
      );
      console.error("アカウント読み込みエラー:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAccounts();
  }, [loadAccounts]);

  const selectAccount = useCallback((accountId: string) => {
    setSelectedAccountId(accountId);
  }, []);

  const getSelectedAccount = useCallback((): Account | undefined => {
    return accounts.find((account) => account.id === selectedAccountId);
  }, [accounts, selectedAccountId]);

  return {
    accounts,
    loading,
    error,
    selectedAccountId,
    selectedAccount: getSelectedAccount(),
    selectAccount,
    refetch: loadAccounts,
  };
};
