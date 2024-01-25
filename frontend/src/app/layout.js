'use client'
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { QueryClient,QueryClientProvider,} from '@tanstack/react-query'

const queryClient=new QueryClient()

export default function RootLayout({ children }) {
  const location=usePathname()
  return (
    <html lang="en">
      <body className={'w-full min-h-screen bg-gradient-conic from-slate-800 to-gray-700'}>
        <QueryClientProvider client={queryClient} >
          {!location.includes("auth")&&<Navbar />}
            {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
