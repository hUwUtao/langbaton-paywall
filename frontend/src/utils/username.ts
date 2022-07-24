export default function username(username: String): Boolean {
  return username.match(/^[a-zA-Z0-9_]{2,16}$/gm) !== null
}
