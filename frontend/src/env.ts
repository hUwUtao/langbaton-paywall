declare global {
  interface Window {
    env: {
      [key: string]: string
    }
  }
}
window.env = {}
const env = (k: string, v: string) => (window['env'][k] = v)

env('CAPTCHA_SITE', '6LesIxshAAAAAMn5R6mb-1uLiPO_NCyVMM_XZeCF')

export default env
