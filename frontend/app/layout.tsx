import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavbarNew from '@/components/NavbarNew' // 🎯 Usar el nuevo Navbar
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PharmaTorres - Tu Farmacia Online de Confianza',
  description: 'Farmacia online con medicamentos seguros, atención farmacéutica profesional y entrega rápida. Más de 15 años cuidando tu salud.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavbarNew />
        {children}
        <Footer />
      </body>
    </html>
  )
}
