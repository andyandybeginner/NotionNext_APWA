const CONFIG = {
HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
HEO_LOADING_COVER: true, // 页面加载的遮罩动画

HEO_HOME_BANNER_ENABLE: true,

HEO_SITE_CREATE_TIME: '2024-12-01', // 建站日期，用于计算网站运行的第几天

// 首页顶部通知条滚动内容，如不需要可以留空 []
HEO_NOTICE_BAR: [
{ title: 'Dear Clients, Welcome Back!', url: '' },
{ title: 'Check! New promotions are available', url: '' },
],

// 英雄区左右侧组件颠倒位置
HEO_HERO_REVERSE: false,
// 博客主体区左右侧组件颠倒位置
HEO_HERO_BODY_REVERSE: false,

// 英雄区(首页顶部大卡)
HEO_HERO_TITLE_1: 'Fast & Instant!',
HEO_HERO_TITLE_2: 'Find What You Want!',
HEO_HERO_TITLE_3: 'Your One-Stop Solution!',
HEO_HERO_TITLE_4: 'Hot Deals & Offers!',
HEO_HERO_TITLE_5: 'Limited-Time Deals!',
// 英雄区遮罩文字
HEO_HERO_COVER_TITLE: 'Just Browsing?',

// 英雄区显示三个置顶分类
HEO_HERO_CATEGORY_1: { title: 'Latest Deals', url: '/tag/Latest Deals' },
HEO_HERO_CATEGORY_2: { title: 'Handy Guides', url: '/tag/Handy Guides' },
HEO_HERO_CATEGORY_3: { title: 'Singapore Buzz', url: '/tag/Singapore Buzz' },

// 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
HEO_HERO_RECOMMEND_POST_TAG: 'Promotion',
HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
//   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

// 右侧个人资料卡牌欢迎语，点击可自动切换
HEO_INFOCARD_GREETINGS: [
'Hello! I am',
'💡 Sharing & always ready to help',
'🚀 A go-getter who gets things done',
'🏆 A professional financial coach in Singapore'
],

// 个人资料底部按钮
HEO_INFO_CARD_URL1: '/about',
HEO_INFO_CARD_ICON1: 'fas fa-user',
HEO_INFO_CARD_URL2: 'https://www.linkedin.com/in/guhaoranandy/',
HEO_INFO_CARD_ICON2: 'fa-brands fa-linkedin',
HEO_INFO_CARD_URL3: '[]()',
HEO_INFO_CARD_TEXT3: 'Learn More',

// 用户技能图标
HEO_GROUP_ICONS: [
{
title_1: 'Singlife',
img_1: 'https://raw.githubusercontent.com/andyandybeginner/picture/refs/heads/main/sl-img-logo.webp',
color_1: '#ffffff',
title_2: 'Manulife',
img_2: 'https://raw.githubusercontent.com/andyandybeginner/picture/refs/heads/main//manulife.webp',
color_2: '#ffffff'
},
{
title_1: 'Income',
img_1: 'https://raw.githubusercontent.com/andyandybeginner/picture/refs/heads/main//income.webp',
color_1: '#ffffff',
title_2: 'FWD',
img_2: 'https://raw.githubusercontent.com/andyandybeginner/picture/refs/heads/main//fwd.webp',
color_2: '#ffa31a'
},
{
title_1: 'iGP',
img_1: 'https://raw.githubusercontent.com/andyandybeginner/picture/refs/heads/main/iGP512.png',
color_1: '#3385ff',
title_2: 'FWD',
img_2: 'https://raw.githubusercontent.com/andyandybeginner/picture/refs/heads/main//fwd.webp',
color_2: '#ffa31a'
},
],

HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
HEO_SOCIAL_CARD_TITLE_1: 'Get Connected',
HEO_SOCIAL_CARD_TITLE_2: 'Free to enquiery',
HEO_SOCIAL_CARD_TITLE_3: 'Click to Send WhatsApp',
HEO_SOCIAL_CARD_URL: 'https://wa.me/message/KE5RR5YOIEHOG1',

// *****  以下配置无效，只是预留开发 ****
// 菜单配置
HEO_MENU_INDEX: true, // 显示首页
HEO_MENU_CATEGORY: true, // 显示分类
HEO_MENU_TAG: true, // 显示标签
HEO_MENU_ARCHIVE: true, // 显示归档
HEO_MENU_SEARCH: true, // 显示搜索

HEO_POST_LIST_COVER: true, // 列表显示文章封面
HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
HEO_POST_LIST_SUMMARY: true, // 文章摘要
HEO_POST_LIST_PREVIEW: false, // 读取文章预览
HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
HEO_WIDGET_ANALYTICS: false, // 显示统计卡
HEO_WIDGET_TO_TOP: true,
HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
HEO_WIDGET_DARK_MODE: true, // 夜间模式
HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
