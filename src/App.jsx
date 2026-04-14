import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './App.css'

const INITIAL_MARKDOWN = `# Markdown Viewer

左側にMarkdownを書くと、右側にプレビューが表示されます。

## 機能

- **太字**、*斜体*、~~取り消し線~~
- [リンク](https://example.com)
- コードブロック
- テーブル
- チェックリスト

## コード例

\`\`\`javascript
function hello(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

## テーブル

| 列1 | 列2 | 列3 |
|-----|-----|-----|
| A   | B   | C   |
| D   | E   | F   |

## チェックリスト

- [x] Markdownエディタ
- [x] リアルタイムプレビュー
- [ ] GitHub Pagesで公開
`

export default function App() {
  const [markdown, setMarkdown] = useState(INITIAL_MARKDOWN)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Markdown Viewer</h1>
      </header>
      <div className="editor-container">
        <div className="pane editor-pane">
          <div className="pane-header">Editor</div>
          <textarea
            className="editor"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="ここにMarkdownを入力..."
            spellCheck={false}
          />
        </div>
        <div className="pane preview-pane">
          <div className="pane-header">Preview</div>
          <div className="preview">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}
