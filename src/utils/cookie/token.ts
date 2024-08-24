import dayjs from 'dayjs'
import cookie from '@/utils/cookie'
import { CookieKey } from '@/common/enums'

/**
 * 设置登录凭证
 * **/
function set(token: string, expires: Date | null) {
  const exp = expires || dayjs().add(2, 'day').toDate()

  cookie.set(CookieKey.Token, token, { expires: exp })
}

/**
 * 获取登录凭证
 * **/
function get() {
  return cookie.get(CookieKey.Token)
}

/**
 * 移除登录凭证
 * **/
function remove() {
  cookie.remove(CookieKey.Token)
}

const token = {
  get,
  set,
  remove
}

export { token as default, get, set, remove }
