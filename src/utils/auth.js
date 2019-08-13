import Cookies from 'js-cookie'

export const setToken = (token, tokenName = 'login') => {
  return Cookies.set(tokenName, token)
}

export const getToken = (tokenName = 'login') => {
  return Cookies.get(tokenName)
}

export const removeToken = (tokenName = 'login') => {
  return Cookies.remove(tokenName)
}
