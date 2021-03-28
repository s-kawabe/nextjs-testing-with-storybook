import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import { Counter } from './Counter'

// Counterというテストグループ名の記載
describe('Counter', () => {
  // テストケース終了毎にReactコンポーネントを画面からunmountするためのクリーンナップ用ヘルパー関数を呼ぶ
  afterEach(() => {
    cleanup()
  })
  // テストケース① (実際のケース命名はよりわかりやすくする)
  // スナップショットテスト
  it('render', () => {
    const { asFragment } = render(<Counter />)
    expect(asFragment()).toMatchSnapshot()
  })
  // テストケース②
  // 実際にユーザが触るのと同じ動作をさせるテスト
  it('click:count', () => {
    render(<Counter />)
    const button = screen.getByText('Increment')
    fireEvent.click(button)
    fireEvent.click(button)
    screen.getByText('Count: 2')
  })
})
