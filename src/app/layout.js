import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Navbar />
          <div className=' mx-20 my-2 flex flex-col justify-between h-screen'>
            {children}
          </div>
          <Footer />
        </body>
      </html>

    </>


  )
}