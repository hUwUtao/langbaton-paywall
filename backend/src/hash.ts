// shared
import utf8 from 'crypto-js/enc-utf8'
import SHA256 from 'crypto-js/sha256'
import AES from 'crypto-js/aes'

import publicKey from '../publicKey'

function permanentHash(key: string) {
  return SHA256(JSON.stringify({ k: key, p: publicKey() })).toString()
}

function temporaryHash(expiration: number) {
  return SHA256(JSON.stringify(Math.floor(Date.now() / expiration))).toString()
}

function kvEncrypt(key: string, value: string) {
  return AES.encrypt(value, key).toString()
}

function kvDecrypt(key: string, value: string) {
  return AES.decrypt(value, key).toString(utf8)
}

export { permanentHash, temporaryHash, kvEncrypt, kvDecrypt }
