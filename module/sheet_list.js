// 乐谱列表
module.exports = (query, request) => {
  const data = {
    id: query.id,
    abTest: query.ab || 'b',
  }
  return request(
    'POST',
    `https://interface3.music.163.com/eapi/music/sheet/list/v1`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/music/sheet/list/v1',
    },
  )
}
