import '../styles/Suspense.css'

function Spinner() {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

function Overlay() {
  return (
    <div className="suspense">
      <Spinner />
    </div>
  )
}

export default function Suspense() {
  return <Overlay />
}
