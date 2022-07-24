import {
  // CardHeader,
  // Tabs,
  // TabsHeader,
  // TabsBody,
  // Tab,
  // TabPanel,
  // Typography,
  Input,
  Button,
  Select,
  Option,
} from '@material-tailwind/react'

export default function Card() {
  return (
    <div className="flex flex-col gap-4">
      <Select variant="outlined" label="Type">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
      <Select variant="outlined" label="Amount">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
      <Input label="Serial" size="lg" />
      <Input label="Code" size="lg" />
      <Button variant="gradient" fullWidth>
        Submit
      </Button>
    </div>
  )
}
