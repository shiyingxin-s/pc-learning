/**
 * 底部菜单
 * icon:菜单项图标
 */
const menuList: any = [
  {
    title: "关于我们",
    path: "",
    img:'',
    avtive:'',
    icon: "home",
    children: [
      {
        title: "公司介绍",
        path: "/contact",
      }
    ]
  },
  {
    title: "联系我们",
    path: "",
    img:'',
    avtive:'',
    icon: "home",
    children: [
      {
        title: "电话：029-25891234",
        path: "",
      },
      {
        title: "公司名称:234",
        path: "",
      },
      {
        title: "联系人：某某某",
        path: "",
      },
      {
        title: "公司地址: 陕西省西安市雁塔区鱼化寨地铁口",
        path: "",
      }
    ]
  },
  {
    title: "课程安排",
    path: "",
    img:'',
    avtive:'',
    icon: "home",
    children: [
      {
        title: "写字教学",
        path: "/calligraphy",
      },
      {
        title: "教材",
        path: "/textbook",
      }
    ]
  },
  {
    title: "其他信息",
    path: "",
    img:'',
    avtive:'',
    icon: "home",
    children: [
      {
        title: "行业动态",
        path: "/news/HDynamic",
      },
      {
        title: "公司动态",
        path: "/news/GDynamic",
      }
    ]
  },
];
export default menuList;

