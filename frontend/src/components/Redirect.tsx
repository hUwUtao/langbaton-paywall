import { Navigate } from 'react-router-dom'
interface RedirectProps {
  to?: string
}

export default function Redirect({ to }: RedirectProps) {
  return <>{to && <Navigate to={to} />}</>
}
