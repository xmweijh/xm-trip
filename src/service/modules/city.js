import xmRequest from '../request'

export function getCityAll() {
  return xmRequest.get({
    url: "/city/all"
  })
}
