import { Nunito } from 'next/font/google';

import './globals.css'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Footer from './components/Footer';


export const metadata = {
  title: 'Bonke Sam',
  description: 'Bonke Sam Portfolio',
}

const font = Nunito({
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
            <Navbar />
        </ClientOnly>
        <div>
          {children}
        </div>
        <Footer />  
        </body>
    </html>
  )
}
