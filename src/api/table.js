import request from '@/utils/request'

export function getResult(params) {
  return request({
    url: '/getAnalysisResult',
    method: 'get',
    params
  })
}
