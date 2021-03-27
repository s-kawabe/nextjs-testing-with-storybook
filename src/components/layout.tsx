import type { ReactNode } from 'react'
import { Footer } from 'src/components/footer'

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
