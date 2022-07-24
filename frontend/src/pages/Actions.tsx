import {
  // useState,
  lazy,
} from 'react'
// import stated from '../utils/stated';

import Favicon from '../components/Favicon'
import Tab from '../components/Tab'

import momo_favicon from '../assets/momo_icon_square_pinkbg.svg'
import sim_favicon from '../assets/sim_icon.svg'

import {
  CardHeader,
  Tabs,
  TabsHeader,
  TabsBody,
  // Tab,
  TabPanel,
  // Typography,
  // Input,
  // Button,
  // Select,
  // Option,
} from '@material-tailwind/react'

const Card = lazy(() => import('./ActionPages/Card'))
const Momo = lazy(() => import('./ActionPages/Momo'))

export default function Actions() {
  // const [serial, setSerial] = useState('');
  // const [code, setCode] = useState('');

  return (
    <>
      <Tabs value="card" className="overflow-visible">
        <CardHeader
          variant="gradient"
          color="white"
          className="overflow-visible"
        >
          <TabsHeader color="red" className=" bg-opacity-100">
            <Tab value="card">
              <Favicon src={sim_favicon} alt="" /> Card
            </Tab>
            <Tab value="momo">
              <Favicon src={momo_favicon} alt="" /> Momo
            </Tab>
          </TabsHeader>
        </CardHeader>
        <TabsBody className="p-2">
          <TabPanel value="card">
            <Card />
          </TabPanel>
          <TabPanel value="momo">
            <Momo />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </>
  )
}
