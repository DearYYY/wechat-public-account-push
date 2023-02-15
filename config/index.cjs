/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx3ddee16a479d27ab',oL_N-6e39vdE8TZsaYiBVP8g76bU

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd4f88aba7aa8576efc87ddf20bca043c',

  PROVINCE: '广东',
  CITY: '珠海',

  USERS: [
    {
      // 想要发送的人的名字
      name: '琳琳大小姐',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oL_N-6bZEh1pqYAW7dewzmHCq8XU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '2Yf8PYlD2mMQXFH-q6AqDW7yQSUTKavTn8VfvUGa4H8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
     horoscopeDate: '02-19',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '琳琳大小姐', year: '2002', date: '03-12',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '嘉林`', year: '2001', date: '08-12',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '12-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-02-14' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-02-14' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'yd3P3ozu1WKkL4iRo6qv6mYy_s7Frhmjcswc2OG6pP8',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oL_N-6e39vdE8TZsaYiBVP8g76bU',
    }
  ],

}

module.exports = USER_CONFIG

