import type { Metadata } from "next"
import "./globals.css"

import Navigation from "@/components/navigation"
import QueryClientProvider from "@/providers/query-client-provider"

export const metadata: Metadata = {
  title: "Design System Playground",
  description: "A playground for experimenting with design systems",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <QueryClientProvider>
      <html lang="en">
        <body className="bg-primary-500 w-full">
          <div className="p-16 min-h-screen flex flex-col">
            <Navigation />
            <main className="bg-neutral-0 rounded-b-12 p-40 !pt-0 tablet:p-64 grow">
              {children}
            </main>
          </div>
        </body>
      </html>
    </QueryClientProvider>
  )
}
