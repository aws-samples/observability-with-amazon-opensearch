import { ReactNode } from "react";
import Footer from "./footer";

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout