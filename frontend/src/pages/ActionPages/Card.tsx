import { useEffect, useState } from 'react'
// import Recaptcha from 'react-recaptcha'
import ReCAPTCHA from 'react-google-recaptcha'
import { cards } from '../../utils/card'
import { thousandComma } from '../../utils/thousand'
import {
  // CardHeader,
  // Tabs,
  // TabsHeader,
  // TabsBody,
  // Tab,
  // TabPanel,
  // Typography,
  Alert,
  Input,
  Button,
  Select,
  Option,
} from '@material-tailwind/react'
import coinIcon from '../../assets/coin.twemoji.svg'

// import Favicon from '../../components/Favicon'

const boostFormula = (value: number, ratio: number, boost: number) =>
  Math.floor((value / 1000) * ((100 - ratio) / 100) * boost)

export default function Card() {
  // Post fetch data
  const [boost, setBoost] = useState<number>(0)
  const [til, setTil] = useState<Date>(new Date())

  // Form data
  const [cvar, setcvar] = useState<number>(0)
  const [cval, setcval] = useState<number>(cards[0].values[0])
  const [fcser, setfcser] = useState<boolean>(false)
  const [fcode, setfcode] = useState<boolean>(false)
  const [cser, setcser] = useState<string>('')
  const [code, setcode] = useState<string>('')
  const [cptc, setcptc] = useState<string | null>(null)

  function prefilter(str: string) {
    return str.match(/^[0-9]{0,24}$/gm) === null
  }

  function onSubmit() {
    const data = collectFormData()
  }

  function collectFormData() {
    return {
      variant: cvar,
      value: cval,
      serial: cser,
      code: code,
      captcha: cptc,
    }
  }

  useEffect(() => {
    fetch('/api/boost')
      .then(res => res.json())
      .then(res => {
        setBoost(Number(res.default.ratio))
        setTil(new Date(res.default.until))
      })
      .catch(e => console.error(e))
  }, [])

  function onCaptcha(value: string | null) {
    setcptc(value)
  }

  return (
    <div className="flex flex-col gap-4">
      {boost > 1 ? (
        <Alert>
          <span className="font-bold">x{boost}</span> giá trị nạp
          <br />
          <span>
            đến {til.toLocaleDateString('vi-VN')}{' '}
            {til.toLocaleTimeString('vi-VN')}
          </span>
        </Alert>
      ) : null}
      <Select
        variant="outlined"
        label="Type"
        value={String(cvar)}
        onChange={e => setcvar(Number(e?.toString()))}
      >
        {cards.map((card, index) => (
          <Option key={index} value={String(index)}>
            <div className="flex items-center">
              {/* <img src={card.icon} alt="" className="w-12 pr-2" /> */}
              {card.name}
            </div>
          </Option>
        ))}
      </Select>
      <Select
        variant="outlined"
        label="Amount"
        value={String(cval)}
        className="z-10"
        onChange={e => setcval(Number(e?.toString()))}
      >
        {cards[cvar].values.map((value, index) => (
          <Option key={index} value={String(value)}>
            {thousandComma(value)}đ
            <span className="float-right pl-2 flex items-center">
              {boost > 1 ? (
                <>
                  <span className="line-through opacity-50 pr-1">
                    {boostFormula(value, cards[cvar].ratio, 1)}
                  </span>{' '}
                </>
              ) : null}
              <span className="font-bold">
                {boostFormula(value, cards[cvar].ratio, boost)}
              </span>{' '}
              <img src={coinIcon} alt="" className="h-4 items-center pl-1" />
            </span>
          </Option>
        ))}
      </Select>
      <Input
        label="Serial"
        size="lg"
        value={cser}
        onChange={e => setcser(e.target.value)}
        error={prefilter(cser)}
      />
      <Input
        label="Code"
        size="lg"
        value={code}
        onChange={e => setcode(e.target.value)}
        error={prefilter(code)}
      />
      {/* <Recaptcha sitekey={window.env.CAPTCHA_SITE} /> */}
      <ReCAPTCHA
        sitekey={window.env.CAPTCHA_SITE}
        onChange={onCaptcha}
        hl="vi"
      />
      <Button variant="gradient" fullWidth onSubmit={onSubmit}>
        Submit
      </Button>
    </div>
  )
}
