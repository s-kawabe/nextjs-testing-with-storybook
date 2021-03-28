# Next.js Testing demo

# Introduction

## Jest

JavaScript のテストランナー
Jest はモジュールやタイマーのモックのような機能を組み合わせて
高速にイテレーションを回すことができ、コードをどう実行するかをよりコントロールできる。
多くの場合、ユニットテストとインテグレーションテストの境界線は曖昧である。

- npm test(npm scripts でテスト実行)
- test case(テストケースの追加)
- expect(期待値と実績値の比較)

## ReactTestingLibrary

実装の詳細に依存せずに React コンポーネントをテストすることができるツールセットです。
このアプローチはリファクタリングを容易にし、さらにアクセシビリティのベスト・プラクティスへと手向けてくれます。
コンポーネントを children 抜きに「浅く」レンダーする方法は提供していませんが、
Jest のようなテストランナーで モック することで可能です。
TestingLibrary は 2018 年リリースで Enzyme に取って代わるライブラリとなった。
**ユーザ視点でのテストが可能**

- userEvent
- render
- custome hook 　
  など

## テストをやる意味

Props や State に任意の値を入れてコンポーネントの整合成を見るテスト
よりも
ユーザに操作された後の状態がどのようになっているか
どのように見えて、操作されるかをトレースできるテスト

## Jest の test と it の違い

同じ

# instllation

1. インストールモジュール

```
yarn add jest ts-jest @testing-library/react @storybook/addon-storyshots @types/jest --dev
```

and more?

```
yarn add @testing-library/react-hooks @testing-library/jest-dom react-test-renderer
```

- @testing-library/react-hooks ： React が提供する Hooks テストのためのユーティリティ・ヘルパー
- @testing-library/jest-dom : DOM チェックのために Jest のマッチャーを拡張

[参考記事](https://zenn.dev/tkdn/books/react-testing-patterns/viewer/quick-install)

> TypeScript support in Babel is just transpilation, Jest will not type-check your tests as they are ran. If you want that, you can use ts-jest.

(Babel での TypeScript サポートは単なるトランスパイルである。Jest 実行時に型チェックを行いたい場合は ts-jest を使用します。)
→ babel-jest より ts-jest を使用する。

2. Storybook によるスナップショットテスト

**@storybook/addon-storyshots**を使用する。
これが storybook 本体のバージョンを一致していることを確認する。

## jest の設定

`package.json`に記述、または`jest.config.js`などにファイル化する。
今回は package.json に直書きで試した。

```json
{
  // ...
  "jest": {
    "setupFilesAfterEnv": ["./jest.setup.js"],
    "testMatch": ["**/*.test.ts", "**/*.test.tsx"],
    "verbose": true,
    "moduleNameMapper": {
      "^~/(.*)": "<rootDir>/src/$1"
    }
  }
  // ...
}
```

ルートに`jest.setup.js`を一応用意しておく

```js
import '@testing-library/jest-dom'

import fetch from 'node-fetch'

if (!globalThis.fetch) {
  globalThis.fetch = fetch
}
```

# practice

## storyshots を用いたスナップショットテスト

## 同期的カウンターコンポーネントテスト(基本の構文)

```tsx
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import { Counter } from './Counter'

// Counterというテストグループ名の記載
describe('Counter', () => {
  // テストケース終了毎にReactコンポーネントを画面からunmountするためのクリーンナップ用ヘルパー関数を呼ぶ
  // 仮にテストが失敗した場合でもクリーンアップコードを実装するべき
  afterEach(() => {
    cleanup()
  })
  // テストケース① (実際のケース命名はよりわかりやすくする)
  // スナップショットテスト
  test('render', () => {
    const { asFragment } = render(<Counter />)
    expect(asFragment()).toMatchSnapshot()
  })
  // テストケース②
  // 実際にユーザが触るのと同じ動作をさせるテスト
  test('click:count', () => {
    render(<Counter />)
    const button = screen.getByText('Increment')
    fireEvent.click(button)
    fireEvent.click(button)
    screen.getByText('Count: 2')
  })
})
```
