import xmRequest from '../request'

export function getHomeHotSuggests() {
  return xmRequest.get({ 
    url: "/home/hotSuggests" 
  })
}

export function getHomeCategories() {
  return xmRequest.get({
    url: "/home/categories"
  })
}

export function getHomeHouselist(currentPage) {
  return xmRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}
