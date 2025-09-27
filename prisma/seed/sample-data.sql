-- Accountテーブルのサンプルデータ
INSERT INTO accounts (id, account_name, icon, created_at, updated_at, deleted_at) VALUES
('clx1admin1234567890abcdef', '管理者アカウント', 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin', NOW(), NOW(), NULL),
('clx2user1234567890abcdef', '一般ユーザー', 'https://api.dicebear.com/7.x/avataaars/svg?seed=user', NOW(), NOW(), NULL),
('clx3guest1234567890abcdef', 'ゲストアカウント', 'https://api.dicebear.com/7.x/avataaars/svg?seed=guest', NOW(), NOW(), NULL);

-- Taskテーブルのサンプルデータ（管理者アカウント）
INSERT INTO tasks (id, account_id, title, description, status, "createdAt", "updatedAt", "deletedAt") VALUES
('clxtask1admin1234567890', 'clx1admin1234567890abcdef', 'プロジェクト計画書の作成', '来週のプロジェクト開始に向けて、詳細な計画書を作成する必要があります。スケジュール、リソース、リスク管理を含める。', 'TODO', NOW(), NOW(), NULL),
('clxtask2admin1234567890', 'clx1admin1234567890abcdef', '会議資料の準備', '月曜日のクライアント会議で使用するプレゼンテーション資料を準備する。最新の売上データとグラフを含める。', 'DONE', NOW(), NOW(), NULL),
('clxtask3admin1234567890', 'clx1admin1234567890abcdef', 'データベースの最適化', 'パフォーマンス向上のため、データベースクエリの最適化を行う。インデックスの見直しと不要なデータの削除を実施。', 'IN_PROGRESS', NOW(), NOW(), NULL),
('clxtask4admin1234567890', 'clx1admin1234567890abcdef', 'コードレビューの実施', 'チームメンバーのプルリクエストをレビューし、フィードバックを提供する。セキュリティとパフォーマンスに重点を置く。', 'TODO', NOW(), NOW(), NULL),
('clxtask5admin1234567890', 'clx1admin1234567890abcdef', 'テストケースの追加', '新機能に対する包括的なテストケースを作成し、自動テストに追加する。エッジケースも含める。', 'DONE', NOW(), NOW(), NULL);

-- Taskテーブルのサンプルデータ（一般ユーザー）
INSERT INTO tasks (id, account_id, title, description, status, "createdAt", "updatedAt", "deletedAt") VALUES
('clxtask1user1234567890', 'clx2user1234567890abcdef', 'ドキュメントの更新', 'API仕様書とユーザーマニュアルを最新の機能に合わせて更新する。図表も含めて分かりやすくする。', 'TODO', NOW(), NOW(), NULL),
('clxtask2user1234567890', 'clx2user1234567890abcdef', 'セキュリティ監査', 'アプリケーションのセキュリティ脆弱性をチェックし、必要に応じて修正を行う。外部セキュリティ会社との連携も検討。', 'IN_PROGRESS', NOW(), NOW(), NULL),
('clxtask3user1234567890', 'clx2user1234567890abcdef', 'パフォーマンステスト', '高負荷時のシステム動作を確認し、ボトルネックを特定する。必要に応じてスケーリング計画を立てる。', 'DONE', NOW(), NOW(), NULL),
('clxtask4user1234567890', 'clx2user1234567890abcdef', 'ユーザーフィードバックの分析', '最近のユーザーフィードバックを分析し、改善点を特定する。優先度の高い要望を開発計画に反映する。', 'TODO', NOW(), NOW(), NULL),
('clxtask5user1234567890', 'clx2user1234567890abcdef', 'デプロイメント手順の見直し', '本番環境へのデプロイ手順を文書化し、自動化の可能性を検討する。ロールバック手順も含める。', 'IN_PROGRESS', NOW(), NOW(), NULL);

-- Taskテーブルのサンプルデータ（ゲストアカウント）
INSERT INTO tasks (id, account_id, title, description, status, "createdAt", "updatedAt", "deletedAt") VALUES
('clxtask1guest1234567890', 'clx3guest1234567890abcdef', 'チーム研修の企画', '新しい技術スタックに関するチーム研修を企画し、スケジュールを調整する。外部講師の手配も行う。', 'DONE', NOW(), NOW(), NULL),
('clxtask2guest1234567890', 'clx3guest1234567890abcdef', 'バックアップ戦略の見直し', 'データバックアップの頻度と保存期間を見直し、災害復旧計画を更新する。クラウドバックアップの検討も含める。', 'TODO', NOW(), NOW(), NULL),
('clxtask3guest1234567890', 'clx3guest1234567890abcdef', 'API設計の改善', 'RESTful APIの設計を見直し、一貫性と使いやすさを向上させる。バージョニング戦略も含める。', 'IN_PROGRESS', NOW(), NOW(), NULL),
('clxtask4guest1234567890', 'clx3guest1234567890abcdef', 'ログ監視システムの構築', 'アプリケーションログの監視システムを構築し、異常検知の自動化を実現する。アラート設定も含める。', 'DONE', NOW(), NOW(), NULL),
('clxtask5guest1234567890', 'clx3guest1234567890abcdef', 'ユーザー認証の強化', '多要素認証の実装とパスワードポリシーの強化を行う。セッション管理の改善も含める。', 'TODO', NOW(), NOW(), NULL);
