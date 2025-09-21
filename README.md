# PerformanceAntd

[English](./docs/lang/en.md) | 日本語

Next.js/Antd における高パフォーマンスな設計を考えるリポジトリ

## 実装 UI

<img src="./docs/images/image.png" />

## パフォーマンスを上げる工夫

### LCP（Largest Contentful Paint）改善

- ページネーションを導入し DOM 要素を減らす
- コンポーネント分割による再レンダリング範囲の最適化
- useCallback/useMemo による不要な再計算の防止

### CLS（Cumulative Layout Shift）改善

- カード要素に固定の高さとサイズを設定
- CSS contain プロパティによるレイアウト安定化
- ページネーション要素の高さ固定
- box-sizing: border-box による要素サイズの安定化

### フォント最適化

- font-display: swap によるフォント読み込み最適化
- preload: true でフォントの事前読み込み
- fallback フォントの指定による初期レンダリング安定化

### DOM 最適化

- text-rendering: optimizeSpeed による描画速度向上
- overflow 制御による不要なスクロール防止
- 要素の最小・最大サイズ指定による安定したレイアウト
