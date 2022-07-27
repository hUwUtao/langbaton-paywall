// import { Suspense } from 'react';
import {
  Card,
  // Alert,
  // CardHeader,
  // CardBody,
  // CardFooter,
  // Typography,
} from '@material-tailwind/react'
import Theme from './Theme'
import Wallpaper from './Wallpaper'
// import SuspenseWrapper from './Suspense';

interface WrapperProps {
  children: React.ReactNode
}

function Page({ children }: WrapperProps) {
  return (
    <div className="block">
      <Card className="w-96 h-fit bg-white overflow-visible mt-10">
        {children}
      </Card>
    </div>
  )
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <Theme>
      <div className="w-full h-full flex justify-center items-center bg-deep-purple-600">
        <Wallpaper />
        <Page>{children}</Page>
      </div>
    </Theme>
  )
}
