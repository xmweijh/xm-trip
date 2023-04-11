import xmRequest from '../request'

export function getDetailInfos(houseId) {
    return xmRequest.get({
      url: "/detail/infos",
      params: {
        houseId
      }
    })
  }
  