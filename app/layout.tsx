import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Cinzel, Lora } from 'next/font/google'

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '600', '700'] })
const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600'] })

export const metadata = {
  title: 'Shivraage Legal - Compliance-Focused Legal Advisory',
  description: 'Professional legal services specializing in corporate law, POSH compliance, and business advisory for modern organizations.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cinzel.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
