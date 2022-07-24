import { useState } from 'react'
import Redirect from '../components/Redirect'
import usernameValidator from '../utils/username'

import {
  Alert,
  // CardHeader,
  CardBody,
  CardFooter,
  // Typography,
  Input,
  Button,
} from '@material-tailwind/react'

export default function Home() {
  const [username, setUsername] = useState<string>('')
  const [re, redirect] = useState<string | undefined>()
  const [invalid, setInvalid] = useState<boolean>(false)
  return (
    <>
      {/* <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">

        </Typography>
      </CardHeader> */}
      <Redirect to={re} />
      <CardBody className="flex flex-col gap-2">
        {invalid && (
          <Alert color="red" dismissible={{ onClose: () => setInvalid(false) }}>
            Tên người chơi phải dài 2-16 ký tự, chỉ bao gồm chữ, số và _
          </Alert>
        )}
        <Input
          label="Nhập tên người chơi để tiếp tục"
          size="lg"
          value={username}
          onChange={event => {
            setUsername(event.target.value)
            setInvalid(false)
          }}
          error={(username !== '' && !usernameValidator(username)) || invalid}
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          variant="gradient"
          fullWidth
          onClick={() =>
            usernameValidator(username)
              ? redirect(`/p/${username}`)
              : setInvalid(true)
          }
        >
          Xong
        </Button>
      </CardFooter>
    </>
  )
}
