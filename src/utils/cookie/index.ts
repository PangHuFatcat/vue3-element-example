import jsCookie from 'js-cookie'
import token from './token'
import language from './language'

const cookie = {
  token,
  language
}

export { jsCookie as default, cookie }
