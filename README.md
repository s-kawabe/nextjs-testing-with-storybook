# Next.js Testing demo

## テストをやる意味

Props や State に任意の値を入れてコンポーネントの整合成を見るテスト
よりも
ユーザに操作された後の状態がどのようになっているか
どのように見えて、操作されるかをトレースできるテスト

## instllation

1. インストールモジュール

```
yarn add jest ts-jest @testing-library/react @storybook/addon-storyshots @types/jest --dev
```

and more?

```
yarn add @testing-library/react-hooks @testing-library/jest-dom
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
