import type { Dictionary } from "../types";

const BASE_INCLUDES =
  "经典全身按摩、热毛巾足部按摩、头部与面部按摩、泰式身体按摩、对女孩的温柔抚触、林伽按摩";

const EXTENDED_INCLUDES = `${BASE_INCLUDES}、自选体位、共浴，另可任选2项服务（热橙、“草莓”、毛刷、“樱花枝”）`;

export const zh: Dictionary = {
  meta: {
    title: "情侣按摩 — 莫斯科沙龙的情色按摩",
    description:
      "为情侣量身打造的情色按摩项目：经典按摩、泰式身体按摩、热毛巾足部按摩等。目录内的沙龙与按摩师。",
  },
  brand: { name: "按摩", tagline: "情侣专享" },
  nav: {
    programs: "项目",
    girls: "女孩",
    salons: "我们的沙龙",
    vacancies: "招聘",
    book: "预订",
  },
  common: { orderProgram: "预订项目" },
  header: {
    orderCall: "预约回电",
    menu: "菜单",
    close: "关闭",
    mainNav: "主导航",
    language: "语言",
  },
  hero: {
    eyebrow: "双人专属项目",
    title: "情侣情色按摩",
    included:
      "项目包含：经典按摩、热毛巾足部按摩、头部按摩、泰式身体按摩、对女孩的温柔抚触、林伽按摩、淋浴。",
    extra: "另可任选2项服务（热橙、草莓、毛刷、樱花枝）",
    sectionsNav: "网站栏目",
  },
  programs: {
    label: "情侣项目",
    minutes: "{n}分钟",
    items: {
      paradise: {
        title: "两人天堂",
        description:
          "这个项目旨在帮助情侣决定，是否愿意让一位“陌生人”加入他们的游戏。",
        girls: "1位女孩",
        includes: `${BASE_INCLUDES}、共浴`,
      },
      temptation: {
        title: "诱惑",
        description: "献给那些早已清楚自己所爱的情侣。",
        girls: "1位女孩",
        includes: `${BASE_INCLUDES}、共浴`,
      },
      youAndI: {
        title: "YOU AND I",
        description: "在一段难以置信的体验之后，共度美好时光！",
        girls: "2位女孩",
        includes: EXTENDED_INCLUDES,
      },
      sodom: {
        title: "所多玛与蛾摩拉",
        description: "屈从诱惑，打破亲密的结合。",
        girls: "2位女孩",
        includes: EXTENDED_INCLUDES,
      },
      delights: {
        title: "一千零一种享受",
        description:
          "一段难忘的体验，你和你的另一半将彻底沉浸在愉悦之中。",
        includes:
          "经典按摩、热石疗法、热毛巾足部按摩、彼此温柔的身体亲吻、所有参与者之间的相互爱抚、泰式身体按摩、共浴、窥视秀、变换体位、以及遥控玩具的爱抚与刺激",
      },
    },
  },
  girls: {
    label: "我们的女孩",
    showAll: "全部女孩",
    hide: "收起",
    height: "身高",
    weight: "体重",
    breast: "胸围",
    prevPhoto: "上一张照片",
    nextPhoto: "下一张照片",
    photoOf: "第{n}张，共{total}张",
    names: {
      annabel: "安娜贝尔",
      vera: "维拉",
      dolores: "多洛雷丝",
      seville: "塞维尔",
      diamond: "戴蒙德",
      riana: "里安娜",
      lola: "洛拉",
      lara: "拉拉",
      megan: "梅根",
      louise: "路易丝",
      dakota: "达科塔",
      stefania: "斯特凡妮娅",
      daphne: "达芙妮",
      penelope: "佩内洛普",
      blake: "布莱克",
    },
  },
  salons: {
    label: "我们的沙龙",
    tabs: "沙龙",
    priceFrom: "起价",
    prevPhoto: "上一张照片",
    nextPhoto: "下一张照片",
    showPhoto: "查看第{n}张照片",
    interior: "{name}沙龙内部，第{n}张照片",
    items: {
      barbie: {
        body: "Barbie沙龙诚邀男士们度过美好时光，尽情放松身心，暂时忘却一切烦恼与忧愁，收获无数难忘的体验。舒适的房间、温馨宜人的装饰、迷人的氛围，以及由身材曼妙的迷人女孩带来的专业情色按摩，正等待着您。",
        address: "卡兰切夫斯卡亚街32/58号1栋",
        metro: "和平大街地铁站",
      },
      vanilia: {
        body: "Vanilia是一家三层的场所，客房从标准间到VIP应有尽有。入口处音乐震耳，因为这里从不入睡，欢迎每一位客人！这里女孩众多，休闲方式同样丰富。美味的水烟与难以言喻的氛围。设有3个独立土耳其浴室，以及1个可供热闹聚会的大型浴室（最多15人）。为方便您，提供停车位。24小时营业。",
        address: "米亚斯尼茨卡亚街8/2号1栋",
        metro: "卢比扬卡站、中国城站",
      },
      podium: {
        body: "Podium是挑剔绅士的首选。只有我们拥有2个风格迥异的大厅。VIP套房配有4个独立桑拿房和4个供小团体使用的桑拿房（最多4人）、按摩浴缸、洗手间以及宽敞的榻榻米。这里的女孩不仅容貌出众，而且真正精通各种按摩技巧！酒吧的优质酒水和美味水烟免费赠送。从外面看毫不起眼，里面却会给您带来惊喜，我们保证！24小时营业。",
        address: "大莫尔恰诺夫卡街18号",
        metro: "阿尔巴特站、基辅站",
      },
      soho: {
        body: "位于莫斯科市中心的男士放松按摩会所。我们在舒适的按摩工作室套房中，以最热情的款待恭候您的光临。",
        address: "小哈里托涅夫斯基胡同9/13号5栋",
        metro: "红门站",
      },
      imperium: {
        body: "Imperium是一处三层的套房式场所，配有按摩浴缸、3个桑拿房和3个希腊风格的土耳其浴室。女孩们身着时尚的希腊女祭司装迎接您。Imperium让您走进一个任何幻想都能成真的世界！它位于莫斯科市中心风景如画的切斯特耶普鲁迪（清水塘）街区，是一座设施齐全的现代奥林匹斯。免费停车，24小时营业。",
        address: "米亚斯尼茨卡亚街41B号",
        metro: "红门站",
      },
      dacha: {
        body: "我们的工作采用个性化服务。这意味着，即使是您最大胆的愿望也将得到满足。我们的信条：沙龙里发生的一切，都留在沙龙里。DACHA会为您保守所有秘密，请您尽情放松！",
        address: "克雷拉茨卡亚街30号1栋",
        metro: "姆涅夫尼基站",
      },
    },
  },
  vacancies: {
    meta: {
      title: "招聘 — 情侣按摩",
      description: "莫斯科按摩沙龙招聘。提交申请后，我们会与您联系并介绍工作条件。",
    },
    eyebrow: "加入我们",
    title: "招聘",
    intro:
      "我们正在为莫斯科的沙龙招聘按摩师和管理人员。提交申请后，我们会与您联系，介绍工作条件并解答您的问题。",
    form: {
      labels: {
        name: "姓名",
        phone: "电话",
        email: "电子邮箱",
        role: "意向职位",
        about: "补充信息",
        consent: "我同意个人数据处理条款及隐私政策",
      },
      placeholders: {
        name: "我们该如何称呼您",
        phone: "+7 900 000-00-00",
        email: "you@example.com",
        role: "例如：按摩师",
        about: "工作经验、期望的工作时间、方便接听电话的时间",
      },
      optional: "选填",
      submit: "提交申请",
      sending: "正在提交…",
    },
    errors: {
      required: "请填写此项",
      phone: "请输入完整的电话号码",
      email: "请检查电子邮箱地址",
      consent: "需要您同意个人数据处理",
      tooLong: "内容过长",
      send: "申请提交失败。请重试或致电我们。",
    },
    success: {
      title: "申请已提交",
      text: "谢谢！我们会尽快与您联系。",
      again: "再提交一份",
    },
  },
  widget: { open: "联系我们", close: "关闭", call: "致电" },
  footer: {
    disclaimer:
      "© {year}。本目录不提供任何亲密性质的服务。访问目录中的沙龙，即表示您同意各场所的具体规则。",
    nav: "页脚导航",
    adults: "18+",
    noIntim: "我们不提供亲密服务",
  },
};
