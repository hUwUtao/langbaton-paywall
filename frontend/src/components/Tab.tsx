import { Tab } from '@material-tailwind/react'

interface TabProps {
  children: React.ReactNode
  value: string
}

export default function CTab({ children, value }: TabProps) {
  return (
    <Tab value={value}>
      <div className="flex flex-row items-center">{children}</div>
    </Tab>
  )
}
