import Navbar from "./Navbar"

interface MainProps {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  return (
    <main className="w-full h-screen bg-[#f5f5f5]">
      <Navbar />
      {children}
    </main>
  )
}