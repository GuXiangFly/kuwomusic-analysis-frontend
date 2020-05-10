import request from '@/utils/request'

export function getResult(params) {
  return request({
    url: '/getAnalysisResult',
    method: 'get',
    params
  })
}

export function getMusicTypeResult(params) {
  return request({
    url: '/getMusicTypeResult',
    method: 'get',
    params
  })
}

export function getMusicTop30CommentResult(params) {
  return request({
    url: '/getMusicTop30CommentResult',
    method: 'get',
    params
  })
}
