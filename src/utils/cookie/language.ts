import cookie from '@/utils/cookie'
import { CookieKey } from '@/common/enums'

/**
 * 设置语言
 * **/
function set(lang: string) {
  cookie.set(CookieKey.Language, lang)
}

/**
 * 获取语言
 * **/
function get() {
  return cookie.get(CookieKey.Language)
}

/**
 * 移除语言
 * **/
function remove() {
  cookie.remove(CookieKey.Language)
}

const language = {
  get,
  set,
  remove
}

export { language as default, get, set, remove }
