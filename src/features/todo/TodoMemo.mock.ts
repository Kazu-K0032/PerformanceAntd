export interface TodoItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

export const mockTodos: TodoItem[] = [
  {
    id: "1",
    title: "プロジェクト計画書の作成",
    description:
      "来週のプロジェクト開始に向けて、詳細な計画書を作成する必要があります。スケジュール、リソース、リスク管理を含める。",
    completed: false,
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "会議資料の準備",
    description:
      "月曜日のクライアント会議で使用するプレゼンテーション資料を準備する。最新の売上データとグラフを含める。",
    completed: true,
    createdAt: new Date("2024-01-14"),
  },
  {
    id: "3",
    title: "データベースの最適化",
    description:
      "パフォーマンス向上のため、データベースクエリの最適化を行う。インデックスの見直しと不要なデータの削除を実施。",
    completed: false,
    createdAt: new Date("2024-01-13"),
  },
  {
    id: "4",
    title: "コードレビューの実施",
    description:
      "チームメンバーのプルリクエストをレビューし、フィードバックを提供する。セキュリティとパフォーマンスに重点を置く。",
    completed: false,
    createdAt: new Date("2024-01-12"),
  },
  {
    id: "5",
    title: "テストケースの追加",
    description:
      "新機能に対する包括的なテストケースを作成し、自動テストに追加する。エッジケースも含める。",
    completed: true,
    createdAt: new Date("2024-01-11"),
  },
  {
    id: "6",
    title: "ドキュメントの更新",
    description:
      "API仕様書とユーザーマニュアルを最新の機能に合わせて更新する。図表も含めて分かりやすくする。",
    completed: false,
    createdAt: new Date("2024-01-10"),
  },
  {
    id: "7",
    title: "セキュリティ監査",
    description:
      "アプリケーションのセキュリティ脆弱性をチェックし、必要に応じて修正を行う。外部セキュリティ会社との連携も検討。",
    completed: false,
    createdAt: new Date("2024-01-09"),
  },
  {
    id: "8",
    title: "パフォーマンステスト",
    description:
      "高負荷時のシステム動作を確認し、ボトルネックを特定する。必要に応じてスケーリング計画を立てる。",
    completed: true,
    createdAt: new Date("2024-01-08"),
  },
  {
    id: "9",
    title: "ユーザーフィードバックの分析",
    description:
      "最近のユーザーフィードバックを分析し、改善点を特定する。優先度の高い要望を開発計画に反映する。",
    completed: false,
    createdAt: new Date("2024-01-07"),
  },
  {
    id: "10",
    title: "デプロイメント手順の見直し",
    description:
      "本番環境へのデプロイ手順を文書化し、自動化の可能性を検討する。ロールバック手順も含める。",
    completed: false,
    createdAt: new Date("2024-01-06"),
  },
  {
    id: "11",
    title: "チーム研修の企画",
    description:
      "新しい技術スタックに関するチーム研修を企画し、スケジュールを調整する。外部講師の手配も行う。",
    completed: true,
    createdAt: new Date("2024-01-05"),
  },
  {
    id: "12",
    title: "バックアップ戦略の見直し",
    description:
      "データバックアップの頻度と保存期間を見直し、災害復旧計画を更新する。クラウドバックアップの検討も含める。",
    completed: false,
    createdAt: new Date("2024-01-04"),
  },
  {
    id: "13",
    title: "API設計の改善",
    description:
      "RESTful APIの設計を見直し、一貫性と使いやすさを向上させる。バージョニング戦略も含める。",
    completed: false,
    createdAt: new Date("2024-01-03"),
  },
  {
    id: "14",
    title: "ログ監視システムの構築",
    description:
      "アプリケーションログの監視システムを構築し、異常検知の自動化を実現する。アラート設定も含める。",
    completed: true,
    createdAt: new Date("2024-01-02"),
  },
  {
    id: "15",
    title: "ユーザー認証の強化",
    description:
      "多要素認証の実装とパスワードポリシーの強化を行う。セッション管理の改善も含める。",
    completed: false,
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "16",
    title: "モバイル対応の最適化",
    description:
      "モバイルデバイスでの表示と操作性を改善し、レスポンシブデザインを最適化する。",
    completed: false,
    createdAt: new Date("2023-12-31"),
  },
  {
    id: "17",
    title: "データ分析ダッシュボード",
    description:
      "ビジネス指標を可視化するダッシュボードを作成し、リアルタイム更新機能を実装する。",
    completed: true,
    createdAt: new Date("2023-12-30"),
  },
  {
    id: "18",
    title: "国際化対応",
    description:
      "多言語対応のための国際化機能を実装し、主要言語の翻訳を準備する。",
    completed: false,
    createdAt: new Date("2023-12-29"),
  },
  {
    id: "19",
    title: "アクセシビリティの改善",
    description:
      "WCAGガイドラインに準拠したアクセシビリティ機能を実装し、スクリーンリーダー対応を強化する。",
    completed: false,
    createdAt: new Date("2023-12-28"),
  },
  {
    id: "20",
    title: "CI/CDパイプラインの改善",
    description:
      "継続的インテグレーションとデプロイメントのパイプラインを最適化し、自動テストの実行時間を短縮する。",
    completed: true,
    createdAt: new Date("2023-12-27"),
  },
];
