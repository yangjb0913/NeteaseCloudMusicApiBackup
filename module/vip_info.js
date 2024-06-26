// 获取 VIP 信息

module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/music-vip-membership/front/vip/info`,
    {
      userId: query.uid || '',
    },
    {
      crypto: 'weapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
