import { headers } from 'next/headers'
import './globals.css'
import Headers from '@/common/Heades'
import { Login } from '@/common/Login'


export const metadata = {
  title : "hoddy  .com "
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Headers/>
        <Login title = "Sign-up"/>
        <Login title ="Log-in" />
        {children}</body>
    </html>
  )
}
