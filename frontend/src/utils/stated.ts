export default function stated(
  call: React.Dispatch<React.SetStateAction<any>>
) {
  return function (event: React.ChangeEvent<HTMLInputElement>) {
    call(event.target.value)
  }
}
