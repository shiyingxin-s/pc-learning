
const btn_home = require( '../assets/home/btn_home.png');
const btn_nav = require( '../assets/home/btn_nav.png');
const btn_jiaocai = require( '../assets/home/btn_jiaocai.png');
const btn_news = require( '../assets/home/btn_news.png');
const btn_concat = require( '../assets/home/btn_concat.png');
/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList: any = [
  {
    title: "首页",
    path: "/home",
    img: btn_home,
    avtive:'homeActive',
    icon: "home",
  },
  {
    title: "写字教学",
    path: "/calligraphy",
    img: btn_nav,
    avtive:'cActive',
    icon: "calligraphy",
  },
  {
    title: "教材",
    path: "/textbook",
    img: btn_jiaocai,
    avtive:'textbookActive',
    icon: "textbook",
  },
  {
    title: "新闻动态",
    path: "/news",
    img: btn_news,
    avtive:'newsActive',
    icon: "news",
  },
  {
    title: "联系我们",
    path: "/contact",
    img: btn_concat,
    avtive:'contactActive',
    icon: "contact",
  },
];
export default menuList;
