import request from '@/utils/request'

export const login = (params) => {
  return request({
    url: '/login',
    method: 'get',
    params
  })
}
