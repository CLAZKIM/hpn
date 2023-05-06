// import './globals.css'
import '../assets/scss/style.scss'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'

export const metadata = {
  title: '어사이',
  description: '어떻게 사람 이름이?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <body>
        <div id="doc-layout">
        <Header />
        <Navbar />
              {children}
        </div>
      </body>
    </html>
  )
}
