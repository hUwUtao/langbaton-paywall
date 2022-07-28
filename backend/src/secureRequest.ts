import { kvDecrypt, temporaryHash } from './hash'

export default function (request): Promise<string> {
  return new Promise(resolve => {
    request.text().then(body => {
      resolve(kvDecrypt(temporaryHash(10000), JSON.parse(body).data))
    })
  })
}
