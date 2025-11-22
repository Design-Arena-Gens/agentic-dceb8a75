import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'دليل المسافر - كأس العالم 2026 | FIFA World Cup 2026 Traveler Guide',
  description: 'دليل شامل للمسافرين لنهائيات كأس العالم 2026 | Complete guide for FIFA World Cup 2026 travelers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
