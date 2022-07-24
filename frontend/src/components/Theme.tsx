import { ThemeProvider } from '@material-tailwind/react'

interface ThemeProps {
  children: React.ReactNode
}

export default function Theme({ children }: ThemeProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}
