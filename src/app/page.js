import Image from 'next/image'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
    </main>
  )
}
