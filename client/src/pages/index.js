import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import MainComponent from '@/components/mainCompnent/MainComponent'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <MainComponent/>
    </main>
  )
}
