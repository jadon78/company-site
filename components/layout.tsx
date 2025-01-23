import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/shared/footer"
import { Toaster } from "@/components/ui/toaster"
import type { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}