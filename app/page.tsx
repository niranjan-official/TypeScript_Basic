import Calculator from '@/app/calculator/page'
import Login from '@/app/login/page'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Login/>
      <Calculator/>
    </main>
  )
}
