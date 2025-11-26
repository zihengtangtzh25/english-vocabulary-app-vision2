/**
 * 初始化词源数据
 * 存储所有默认分类的单词数据
 */

const INIT_WORDS_DATA = {
  "default": [
    {
      "word": "abandon",
      "partOfSpeech": "v.",
      "chinese": "抛弃，放弃",
      "english": "to leave somebody or something that you are responsible for, usually permanently"
    },
    {
      "word": "accompany",
      "partOfSpeech": "v.",
      "chinese": "陪伴，伴随",
      "english": "to travel or go somewhere with somebody"
    }
  ],
  "必修三unit1、2":[
    {
    "word": "nationality",
    "partOfSpeech": "n.",
    "chinese": "国籍",
    "english": "one's legal right to belong to a nation"
    },
    {
    "word": "journal",
    "partOfSpeech": "n.",
    "chinese": "日志；日记；报纸；刊物；杂志",
    "english": "a written record of the things you do, see, etc. every day；a newspaper or magazine"
    },
    {
    "word": "authority",
    "partOfSpeech": "n.",
    "chinese": "权力；权威；威信；影响力",
    "english": "the power to give orders to people；the power to influence people because they respect your knowledge or official position"
    },
    {
    "word": "journalist",
    "partOfSpeech": "n.",
    "chinese": "新闻记者；新闻工作者",
    "english": "a reporter"
    },
    {
    "word": "annual",
    "partOfSpeech": "adj.",
    "chinese": "每年的；一年一次的",
    "english": "happening or done once every year"
    },
    {
    "word": "spot",
    "partOfSpeech": "v.",
    "chinese": "看见；看出；发现",
    "english": "to see or notice a person or thing, especially suddenly or when it is not easy to do so"
    },
    {
    "word": "entirely",
    "partOfSpeech": "adv.",
    "chinese": "全部地；完整地；完全地",
    "english": "in every way possible; completely"
    },
    {
    "word": "error",
    "partOfSpeech": "n.",
    "chinese": "错误；差误",
    "english": "a mistake, especially one that causes problems or affects the result of something"
    },
    {
    "word": "emotion",
    "partOfSpeech": "n.",
    "chinese": "强烈的感情；情绪",
    "english": "a strong feeling such as love, fear or anger"
    },
    {
    "word": "female",
    "partOfSpeech": "adj.",
    "chinese": "女的；女性的",
    "english": "being a woman or a girl"
    },
    {
    "word": "illustrate",
    "partOfSpeech": "v.",
    "chinese": "（用示例、图画等）说明，解释；加插图于；给（书等）做图表",
    "english": "to make the meaning of something clearer by using examples, pictures, etc.；to use pictures, photographs, diagrams, etc. in a book, etc."
    },
    {
    "word": "ensure",
    "partOfSpeech": "v.",
    "chinese": "保证；担保；确保",
    "english": "to make sure that something happens or is definite"
    },
    {
    "word": "affect",
    "partOfSpeech": "v.",
    "chinese": "影响",
    "english": "to produce a change in somebody / something"
    },
    {
    "word": "permission",
    "partOfSpeech": "n.",
    "chinese": "准许；许可；批准",
    "english": "the act of allowing somebody to do something"
    },
    {
    "word": "subway",
    "partOfSpeech": "n.",
    "chinese": "地铁；地铁交通",
    "english": "an underground railway / railroad system in a city"
    },
    {
    "word": "average",
    "partOfSpeech": "adj.",
    "chinese": "普通的；平常的；一般的；典型的；正常的",
    "english": "ordinary; not special；typical or normal"
    },
    {
    "word": "confirm",
    "partOfSpeech": "v.",
    "chinese": "（尤指提供证据来）证实，证明，确认",
    "english": "to state or show that something is definitely true or correct, especially by providing evidence"
    },
    {
    "word": "click",
    "partOfSpeech": "v.",
    "chinese": "点击；（使）发出咔哒声",
    "english": "to press a button on the mouse to choose something on the computer screen；to make or cause something to make a short sharp sound"
    },
    {
    "word": "flexible",
    "partOfSpeech": "adj.",
    "chinese": "能适应新情况的；灵活的",
    "english": "able to change to suit new conditions or situations"
    },
    {
    "word": "perceive",
    "partOfSpeech": "v.",
    "chinese": "注意到；意识到；察觉到",
    "english": "to notice or become aware of something"
    },
    {
    "word": "soccer",
    "partOfSpeech": "n.",
    "chinese": "足球运动",
    "english": "(American English) football"
    },
    {
    "word": "horrible",
    "partOfSpeech": "adj.",
    "chinese": "极坏的；十分讨厌的；可恶的",
    "english": "very bad or unpleasant"
    },
    {
    "word": "joyfully",
    "partOfSpeech": "adv.",
    "chinese": "高兴地；快乐地",
    "english": "happily"
    },
    {
    "word": "calm",
    "partOfSpeech": "adj.",
    "chinese": "宁静的",
    "english": "quiet and peaceful"
    },
    {
    "word": "breathe",
    "partOfSpeech": "v.",
    "chinese": "呼吸",
    "english": "to take air into your lungs and send it out again through your nose or mouth"
    },
    {
    "word": "merrily",
    "partOfSpeech": "adv.",
    "chinese": "高兴地；愉快地",
    "english": "in a happy, cheerful way"
    },
    {
    "word": "release",
    "partOfSpeech": "n.",
    "chinese": "公开；发行",
    "english": "the act of making something available to the public"
    },
    {
    "word": "release",
    "partOfSpeech": "v.",
    "chinese": "发布（新闻等）",
    "english": "to allow (news, etc) to be made known"
    },
    {
    "word": "innovation",
    "partOfSpeech": "n.",
    "chinese": "（新事物、思想或方法的）创造；创新；改革",
    "english": "the introduction of new things, ideas or ways of doing something"
    },
    {
    "word": "outline",
    "partOfSpeech": "v.",
    "chinese": "概述；略述",
    "english": "to give a description of the main facts or points involved in something"
    },
    {
    "word": "collection",
    "partOfSpeech": "n.",
    "chinese": "（常指同类的）收集物，收藏品",
    "english": "a group of objects, often of the same sort, that have been collected"
    },
    {
    "word": "committee",
    "partOfSpeech": "n.",
    "chinese": "委员会",
    "english": "a group of people chosen to do a particular job, make decisions, etc."
    },
    {
    "word": "announce",
    "partOfSpeech": "v.",
    "chinese": "宣布",
    "english": "to make something known publicly"
    },
    {
    "word": "entry",
    "partOfSpeech": "n.",
    "chinese": "参赛作品",
    "english": "something that you do, write or make to take part in a competition"
    },
    {
    "word": "publish",
    "partOfSpeech": "v.",
    "chinese": "出版；发行",
    "english": "to produce a book, magazine, CD - ROM, etc. and sell it to the public"
    },
    {
    "word": "plot",
    "partOfSpeech": "n.",
    "chinese": "故事情节；布局",
    "english": "the series of events that form the story of a novel, play, film / movie, etc."
    },
    {
    "word": "super",
    "partOfSpeech": "adv.",
    "chinese": "非常；极",
    "english": "extremely"
    },
    {
    "word": "soundtrack",
    "partOfSpeech": "n.",
    "chinese": "（电影的）声迹，声带",
    "english": "all the music, speech and sounds that are recorded for a film / movie"
    },
    {
    "word": "character",
    "partOfSpeech": "n.",
    "chinese": "（书籍、戏剧或电影中的）人物，角色",
    "english": "a person or an animal in a book, play or film / movie"
    },
    {
    "word": "civilization",
    "partOfSpeech": "n.",
    "chinese": "文明",
    "english": "a state of human society that is very developed and organized"
    },
    {
    "word": "novel",
    "partOfSpeech": "n.",
    "chinese": "（长篇）小说",
    "english": "a story long enough to fill a complete book, in which the characters and events are usually imaginary"
    },
    {
    "word": "astronaut",
    "partOfSpeech": "n.",
    "chinese": "宇航员；航天员",
    "english": "a person whose job involves travelling and working in a spacecraft"
    },
    {
    "word": "system",
    "partOfSpeech": "n.",
    "chinese": "系统；（思想或理论）体系；体制",
    "english": "a group of things, pieces of equipment, etc. that are connected or work together；an organized set of ideas or theories or a particular way of doing something"
    },
    {
    "word": "crash",
    "partOfSpeech": "v.",
    "chinese": "（使）猛撞；碰撞",
    "english": "to hit something hard while moving, causing noise and / or damage"
    },
    {
    "word": "disaster",
    "partOfSpeech": "n.",
    "chinese": "灾难；灾祸",
    "english": "an unexpected event, such as a very bad accident, a flood or a fire, that kills a lot of people or causes a lot of damage"
    },
    {
    "word": "pack",
    "partOfSpeech": "v.",
    "chinese": "塞进；装（箱）",
    "english": "to fill something with a lot of people or things；to put clothes, etc. into a bag"
    },
    {
    "word": "entertaining",
    "partOfSpeech": "adj.",
    "chinese": "有趣的；娱乐的；使人愉快的",
    "english": "interesting and amusing"
    },
    {
    "word": "throughout",
    "partOfSpeech": "prep.",
    "chinese": "自始至终；贯穿整个时期",
    "english": "during the whole period of time of something"
    },
    {
    "word": "photographer",
    "partOfSpeech": "n.",
    "chinese": "拍照者；摄影师",
    "english": "a person who takes photographs, especially as a job"
    },
    {
    "word": "rare",
    "partOfSpeech": "adj.",
    "chinese": "稀少的；稀罕的",
    "english": "not done, seen, happening, etc. very often"
    },
    {
    "word": "region",
    "partOfSpeech": "n.",
    "chinese": "地区；区域；地方",
    "english": "a large area of land"
    },
    {
    "word": "custom",
    "partOfSpeech": "n.",
    "chinese": "风俗；习俗",
    "english": "an accepted way of behaving or of doing things in a society or a community"
    },
    {
    "word": "overall",
    "partOfSpeech": "adv.",
    "chinese": "全部；总计；一般来说；大致上；总体上",
    "english": "including everything or everyone; in total；generally"
    },
    {
    "word": "ordinary",
    "partOfSpeech": "adj.",
    "chinese": "普通的；平常的；平凡的",
    "english": "not unusual or different in any way"
    },
    {
    "word": "province",
    "partOfSpeech": "n.",
    "chinese": "省份；（某些国家的）一级行政区",
    "english": "one of the areas that some countries are divided into with its own local government"
    },
    {
    "word": "flour",
    "partOfSpeech": "n.",
    "chinese": "（尤指小麦的）面粉；（谷物磨成的）粉",
    "english": "a fine white or brown powder made from grain, especially wheat, and used in cooking for making bread, cakes, etc."
    },
    {
    "word": "application",
    "partOfSpeech": "n.",
    "chinese": "申请；请求；申请书",
    "english": "a formal (often written) request for something, such as a job, permission to do something or a place at a college or university"
    },
    {
    "word": "equipment",
    "partOfSpeech": "n.",
    "chinese": "设备；器材",
    "english": "the things that are needed for a particular purpose or activity"
    },
    {
    "word": "overseas",
    "partOfSpeech": "adv.",
    "chinese": "在国外；向海外",
    "english": "to or in a foreign country, especially those separated from your country by the sea or ocean"
    },
    {
    "word": "overseas",
    "partOfSpeech": "adj.",
    "chinese": "外国的；海外的",
    "english": "connected with foreign countries, especially those separated from your country by the sea or ocean"
    },
    {
    "word": "remarkable",
    "partOfSpeech": "adj.",
    "chinese": "非凡的；奇异的；显著的",
    "english": "unusual or surprising in a way that causes people to take notice"
    },
    {
    "word": "mission",
    "partOfSpeech": "n.",
    "chinese": "太空飞行任务；官方使命",
    "english": "a flight into space；an important official job that a person or group of people is given to do, especially when they are sent to another country"
    },
    {
    "word": "in spite of",
    "partOfSpeech": "phr.",
    "chinese": "不管；尽管",
    "english": "if you say that somebody did something in spite of a fact, you mean it is surprising that that fact did not prevent them from doing it"
    },
    {
    "word": "chewing gum",
    "partOfSpeech": "phr.",
    "chinese": "口香糖",
    "english": "a sweet / candy that you chew but do not swallow"
    },
    {
    "word": "participate in",
    "partOfSpeech": "phr.",
    "chinese": "参加；参与",
    "english": "to take part in or become involved in an activity"
    },
    {
    "word": "ought to",
    "partOfSpeech": "phr.",
    "chinese": "应该；应当",
    "english": "used to say what is the right thing to do"
    },
    {
    "word": "appeal to",
    "partOfSpeech": "phr.",
    "chinese": "有吸引力；有感染力；引起兴趣",
    "english": "to attract or interest somebody"
    },
    {
    "word": "stewed beef",
    "partOfSpeech": "phr.",
    "chinese": "炖牛肉",
    "english": "a dish in which beef is slowly cooked in liquid, which results in a thick, soup - like food"
    },
    {
    "word": "soy sauce",
    "partOfSpeech": "phr.",
    "chinese": "酱油",
    "english": "a thin dark brown sauce that is made from soya beans and has a salty taste"
    },
    {
    "word": "steamed bun",
    "partOfSpeech": "phr.",
    "chinese": "馒头",
    "english": "a flour dish that is cooked by hot steam"
    },
    {
    "word": "staple food",
    "partOfSpeech": "phr.",
    "chinese": "基本食物；主食",
    "english": "a basic type of food"
    },
    {
    "word": "focus on",
    "partOfSpeech": "phr.",
    "chinese": "集中（注意力、精力等）于",
    "english": "to give attention, effort, etc. to one particular subject, situation or person"
    },
    {
    "word": "flood",
    "partOfSpeech": "v.",
    "chinese": "（使）充斥，充满",
    "english": "to become or make something become available in a place in large numbers"
    },
    {
    "word": "cotton",
    "partOfSpeech": "n.",
    "chinese": "棉；棉花；棉布",
    "english": "a plant grown in warm countries for the soft white hairs around its seeds that are used to make cloth and thread；the cloth made from the cotton plant"
    },
    {
    "word": "guy",
    "partOfSpeech": "n.",
    "chinese": "男人；小伙子；家伙",
    "english": "a man"
    },
    {
    "word": "insect",
    "partOfSpeech": "n.",
    "chinese": "昆虫",
    "english": "any small creature with six legs and a body divided into three parts"
    },
    {
    "word": "sweat",
    "partOfSpeech": "v.",
    "chinese": "出汗；流汗",
    "english": "produce liquid on skin / surface"
    },
    {
    "word": "sweat",
    "partOfSpeech": "n.",
    "chinese": "汗",
    "english": "drops of liquid that appear on the surface of your skin when you are hot, ill / sick or afraid"
    },
    {
    "word": "port",
    "partOfSpeech": "n.",
    "chinese": "港口；避风港",
    "english": "a place where ships load and unload goods or shelter from storms"
    },
    {
    "word": "discount",
    "partOfSpeech": "n.",
    "chinese": "折扣",
    "english": "an amount of money that is taken off the usual cost of something"
    },
    {
    "word": "iron",
    "partOfSpeech": "v.",
    "chinese": "（用熨斗）熨，烫平",
    "english": "to make clothes, etc. smooth by using an iron"
    },
    {
    "word": "iron",
    "partOfSpeech": "n.",
    "chinese": "熨斗",
    "english": "a tool with a flat metal base that can be heated and used to make clothes smooth"
    },
    {
    "word": "export",
    "partOfSpeech": "n.",
    "chinese": "出口；输出",
    "english": "the selling of goods or services to another country"
    },
    {
    "word": "export",
    "partOfSpeech": "v.",
    "chinese": "出口；输出",
    "english": "to sell goods or services to another country"
    },
    {
    "word": "hesitate",
    "partOfSpeech": "v.",
    "chinese": "（对某事）犹豫，迟疑不决",
    "english": "to be slow to speak or act because you feel uncertain or nervous"
    },
    {
    "word": "cash",
    "partOfSpeech": "n.",
    "chinese": "现金",
    "english": "money in the form of coins or notes / bills"
    },
    {
    "word": "profit",
    "partOfSpeech": "v.",
    "chinese": "获益；得到好处",
    "english": "to get something useful from a situation; to be useful to somebody or give them an advantage"
    },
    {
    "word": "profit",
    "partOfSpeech": "n.",
    "chinese": "利润；收益；赢利",
    "english": "the money that you make in business or by selling things, especially after paying the costs involved"
    },
    {
    "word": "living",
    "partOfSpeech": "n.",
    "chinese": "生计；谋生；收入",
    "english": "money to buy the things that you need in life"
    },
    {
    "word": "living",
    "partOfSpeech": "adj.",
    "chinese": "活着的；活的",
    "english": "alive now"
    },
    {
    "word": "wine",
    "partOfSpeech": "n.",
    "chinese": "葡萄酒",
    "english": "an alcoholic drink made from the juice of grapes"
    },
    {
    "word": "jeans",
    "partOfSpeech": "n.",
    "chinese": "牛仔裤；粗斜纹棉布裤",
    "english": "trousers / pants made of strong cotton, especially denim"
    },
    {
    "word": "economic",
    "partOfSpeech": "adj.",
    "chinese": "经济的；经济上的；经济学的",
    "english": "connected with the trade, industry, and development of wealth of a country, an area or a society"
    },
    {
    "word": "involve",
    "partOfSpeech": "v.",
    "chinese": "包含；需要；使成为必然部分（或结果）",
    "english": "to include something as an important or necessary part or result of it"
    },
    {
    "word": "income",
    "partOfSpeech": "n.",
    "chinese": "收入；收益；所得",
    "english": "the money that a person, a region, a country, etc. earns from work, from investing money, from business, etc."
    },
    {
    "word": "treatment",
    "partOfSpeech": "n.",
    "chinese": "处理；讨论",
    "english": "a way of dealing with or discussing a subject, work of art, etc."
    },
    {
    "word": "quantity",
    "partOfSpeech": "n.",
    "chinese": "数量",
    "english": "an amount or a number of something"
    },
    {
    "word": "kit",
    "partOfSpeech": "n.",
    "chinese": "全套衣服及装备；成套工具；成套设备",
    "english": "a set of clothes and equipment that you use for a particular activity；a set of tools or equipment that you use for a particular purpose"
    },
    {
    "word": "gym",
    "partOfSpeech": "n.",
    "chinese": "健身房；体育馆",
    "english": "a room or hall with equipment for doing physical exercise, for example in a school"
    },
    {
    "word": "breath",
    "partOfSpeech": "n.",
    "chinese": "呼吸的空气",
    "english": "the air that you take into your lungs and send out again"
    },
    {
    "word": "habitat",
    "partOfSpeech": "n.",
    "chinese": "（动植物的）生活环境；栖息地",
    "english": "the place where a particular type of animal or plant is normally found"
    },
    {
    "word": "import",
    "partOfSpeech": "v.",
    "chinese": "进口；输入；引进",
    "english": "to bring a product, service, an idea, etc. into one country from another"
    },
    {
    "word": "replace",
    "partOfSpeech": "v.",
    "chinese": "代替；取代",
    "english": "to be used instead of something / somebody else; to do something instead of something / somebody else"
    },
    {
    "word": "certify",
    "partOfSpeech": "v.",
    "chinese": "（尤指书面）证明；证实",
    "english": "(formal) to state officially, especially in writing, that something is true"
    },
    {
    "word": "protest",
    "partOfSpeech": "v.",
    "chinese": "（公开）反对；抗议",
    "english": "to say or do something to show that you disagree with or disapprove of something, especially publicly"
    },
    {
    "word": "awkward",
    "partOfSpeech": "adj.",
    "chinese": "令人尴尬的；使人难堪的",
    "english": "making you feel embarrassed"
    },
    {
    "word": "majority",
    "partOfSpeech": "n.",
    "chinese": "大部分；大多数",
    "english": "the largest part of a group of people or things"
    },
    {
    "word": "smog",
    "partOfSpeech": "n.",
    "chinese": "烟雾",
    "english": "a form of air pollution that is or looks like a mixture of smoke and fog, especially in cities"
    },
    {
    "word": "slide",
    "partOfSpeech": "n.",
    "chinese": "幻灯片",
    "english": "one page of an electronic presentation, that may contain text and images, that is usually viewed on a computer screen or projected onto a larger screen"
    },
    {
    "word": "harvest",
    "partOfSpeech": "v.",
    "chinese": "收割（庄稼）",
    "english": "to cut and gather a crop"
    },
    {
    "word": "honey",
    "partOfSpeech": "n.",
    "chinese": "蜂蜜",
    "english": "a sweet sticky yellow substance made by bees that is spread on bread, etc. like jam"
    },
    {
    "word": "bitter",
    "partOfSpeech": "adj.",
    "chinese": "（食物等）味苦的；（争论、分歧等）激烈而不愉快的；充满愤怒与仇恨的",
    "english": "(of food, etc.) having a strong, unpleasant taste; not sweet；(of arguments, disagreements, etc.) very serious and unpleasant, with a lot of anger and hatred involved"
    },
    {
    "word": "flavour",
    "partOfSpeech": "n.",
    "chinese": "（食物或饮料的）味道",
    "english": "how food or drink tastes"
    },
    {
    "word": "roast",
    "partOfSpeech": "v.",
    "chinese": "烘烤，焙，炒（坚果、豆子等）；烘，烤，焙（肉等）",
    "english": "to cook nuts, beans, etc. in order to dry them and turn them brown; to be cooked in this way；to cook food, especially meat, without liquid in an oven or over a fire; to be cooked in this way"
    },
    {
    "word": "liquid",
    "partOfSpeech": "n.",
    "chinese": "液体",
    "english": "a substance that flows freely and is not a solid or a gas, for example water or oil"
    },
    {
    "word": "liquid",
    "partOfSpeech": "adj.",
    "chinese": "液体的",
    "english": "in the form of a liquid"
    },
    {
    "word": "bar",
    "partOfSpeech": "n.",
    "chinese": "（长方形）条，块；酒吧",
    "english": "a piece of something with straight sides；a place where you can buy and drink alcoholic and other drinks"
    },
    {
    "word": "calculate",
    "partOfSpeech": "v.",
    "chinese": "计算；核算",
    "english": "to use numbers to find out a total number, amount, distance, etc."
    },
    {
    "word": "operation",
    "partOfSpeech": "n.",
    "chinese": "运转；运行；操作",
    "english": "the way that parts of a machine or a system work; the process of making something work"
    },
    {
    "word": "advanced",
    "partOfSpeech": "adj.",
    "chinese": "先进的；（课程）高级的；高等的",
    "english": "having the most modern and recently developed ideas, methods, etc.；(of a course of study) at a high or difficult level"
    },
    {
    "word": "version",
    "partOfSpeech": "n.",
    "chinese": "变体；变种；型式",
    "english": "a form of something that is slightly different from an earlier form or from other forms of the same thing"
    },
    {
    "word": "dozen",
    "partOfSpeech": "n.",
    "chinese": "（一）打；十二个",
    "english": "a group of twelve of the same thing"
    },
    {
    "word": "accurate",
    "partOfSpeech": "adj.",
    "chinese": "正确无误的",
    "english": "correct and true in every detail"
    },
    {
    "word": "rescue",
    "partOfSpeech": "n.",
    "chinese": "救援；营救；抢救；获救",
    "english": "the act of saving something / somebody from a dangerous or difficult situation; the fact of being saved"
    },
    {
    "word": "application",
    "partOfSpeech": "n.",
    "chinese": "（尤指理论、发现等的）应用，运用；申请",
    "english": "the practical use of something, especially a theory, discovery, etc.；a formal (often written) request for something, such as a job, permission to do something or a place at a college or university"
    }
  ],
  "必修unit3unit4":[
        {
        "word": "sum up",
        "partOfSpeech": "phr.v.",
        "chinese": "总结；概括",
        "english": "to summarize"
        },
        {
        "word": "fade away",
        "partOfSpeech": "phr.v.",
        "chinese": "（人）衰弱；病重死亡",
        "english": "(of a person) to become very weak or ill and die"
        },
        {
        "word": "climate",
        "partOfSpeech": "n.",
        "chinese": "气候",
        "english": "the regular pattern of weather conditions of a particular place"
        },
        {
        "word": "billion",
        "partOfSpeech": "n.",
        "chinese": "十亿",
        "english": "one thousand million"
        },
        {
        "word": "alarming",
        "partOfSpeech": "adj.",
        "chinese": "使人惊恐的；令人惊慌的",
        "english": "causing worry and fear"
        },
        {
        "word": "rate",
        "partOfSpeech": "n.",
        "chinese": "速度；进度",
        "english": "a measurement of the speed"
        },
        {
        "word": "predict",
        "partOfSpeech": "v.",
        "chinese": "预言；预告；预报",
        "english": "to say that something will happen in the future"
        },
        {
        "word": "chain",
        "partOfSpeech": "n.",
        "chinese": "一系列，一连串（人或事）；链子；锁链",
        "english": "a series of connected things or people; a series of connected metal rings, used for pulling or fastening things"
        },
        {
        "word": "hunt",
        "partOfSpeech": "v.",
        "chinese": "打猎；猎杀",
        "english": "to chase wild animals or birds in order to catch or kill them for food, sport or to make money"
        },
        {
        "word": "agriculture",
        "partOfSpeech": "n.",
        "chinese": "农业；农学",
        "english": "the science or practice of farming"
        },
        {
        "word": "figure",
        "partOfSpeech": "n.",
        "chinese": "（代表数量，尤指官方资料中的）数字",
        "english": "a number representing a particular amount, especially one given in official information"
        },
        {
        "word": "significantly",
        "partOfSpeech": "adv.",
        "chinese": "有重大意义地；显著地；明显地",
        "english": "being important enough to have an effect on something or to be noticed"
        },
        {
        "word": "unfamiliar",
        "partOfSpeech": "adj.",
        "chinese": "陌生的；不熟悉的",
        "english": "strange"
        },
        {
        "word": "youth",
        "partOfSpeech": "n.",
        "chinese": "（统称）青年，年轻人；青年时期（尤指成年以前）",
        "english": "young people considered as a group; the time of life when a person is young, especially the time before a child becomes an adult"
        },
        {
        "word": "threaten",
        "partOfSpeech": "v.",
        "chinese": "危及；对……构成威胁",
        "english": "to be a danger to something"
        },
        {
        "word": "extinction",
        "partOfSpeech": "n.",
        "chinese": "灭绝，绝种",
        "english": "a situation where a plant, an animal, a way of life, etc. no longer exists"
        },
        {
        "word": "admit",
        "partOfSpeech": "v.",
        "chinese": "（常指勉强）承认",
        "english": "to agree, often unwillingly, that something is true"
        },
        {
        "word": "somehow",
        "partOfSpeech": "adv.",
        "chinese": "不知为什么；以某种方式",
        "english": "for a reason that you don't know or understand; in a way that is not known or certain"
        },
        {
        "word": "measure",
        "partOfSpeech": "n.",
        "chinese": "措施；方法",
        "english": "an official action that is done in order to achieve a particular aim"
        },
        {
        "word": "absolutely",
        "partOfSpeech": "adv.",
        "chinese": "（强调真实无误）绝对地，完全地",
        "english": "used to emphasize that something is completely true"
        },
        {
        "word": "contrast",
        "partOfSpeech": "v.",
        "chinese": "对比；对照",
        "english": "to compare two things in order to show the differences between them"
        },
        {
        "word": "imply",
        "partOfSpeech": "v.",
        "chinese": "暗示；暗指",
        "english": "to suggest that something is true or that you feel or think something, without saying so directly"
        },
        {
        "word": "major",
        "partOfSpeech": "adj.",
        "chinese": "主要的；重要的",
        "english": "very large or important"
        },
        {
        "word": "available",
        "partOfSpeech": "adj.",
        "chinese": "可获得的；可购得的；可找到的",
        "english": "that you can get, buy or find easily"
        },
        {
        "word": "option",
        "partOfSpeech": "n.",
        "chinese": "选择；可选择的事物",
        "english": "choice"
        },
        {
        "word": "desire",
        "partOfSpeech": "n.",
        "chinese": "愿望；欲望；渴望",
        "english": "a strong wish to have or do something"
        },
        {
        "word": "reduce",
        "partOfSpeech": "v.",
        "chinese": "减少，缩小（尺寸、数量、价格等）",
        "english": "to make something less or smaller in size, quantity, price, etc."
        },
        {
        "word": "design",
        "partOfSpeech": "v.",
        "chinese": "设计；制图；构思",
        "english": "to decide how something will look, work, etc., especially by drawing plans or making models"
        },
        {
        "word": "balance",
        "partOfSpeech": "v.",
        "chinese": "同等重视（相对的两个事物或方面）",
        "english": "to give equal importance to two contrasting things or parts of something"
        },
        {
        "word": "graduate",
        "partOfSpeech": "v./n.",
        "chinese": "大学毕业；大学毕业生",
        "english": "to get a degree from a university or college; a person who has a university degree"
        },
        {
        "word": "plus",
        "partOfSpeech": "conj.",
        "chinese": "而且；此外；况且",
        "english": "used to add more information"
        },
        {
        "word": "eventually",
        "partOfSpeech": "adv.",
        "chinese": "最后；终于",
        "english": "at the end of a period of time"
        },
        {
        "word": "concerned",
        "partOfSpeech": "adj.",
        "chinese": "感兴趣的；关切的；关注的",
        "english": "interested in something"
        },
        {
        "word": "fund",
        "partOfSpeech": "v.",
        "chinese": "为……提供资金；拨款给",
        "english": "to provide money for something, usually something official"
        },
        {
        "word": "mirror",
        "partOfSpeech": "n.",
        "chinese": "镜子",
        "english": "a piece of special flat glass that reflects images"
        },
        {
        "word": "tear",
        "partOfSpeech": "n.",
        "chinese": "眼泪；泪珠；泪水",
        "english": "a drop of liquid that comes out of your eye when you cry"
        },
        {
        "word": "net",
        "partOfSpeech": "n.",
        "chinese": "网；网状物",
        "english": "a type of material that is made of string, thread or wire tied together, with small spaces in between"
        },
        {
        "word": "string",
        "partOfSpeech": "n.",
        "chinese": "细绳；线；带子",
        "english": "material made of several threads twisted together, used for tying things together"
        },
        {
        "word": "mud",
        "partOfSpeech": "n.",
        "chinese": "泥；淤泥",
        "english": "wet earth that is soft and sticky"
        },
        {
        "word": "cloth",
        "partOfSpeech": "n.",
        "chinese": "织物；布料",
        "english": "material made by weaving or knitting cotton, wool, silk, etc."
        },
        {
        "word": "process",
        "partOfSpeech": "n.",
        "chinese": "（为达到某一目标的）过程；进程",
        "english": "a series of things that are done in order to achieve a particular result"
        },
        {
        "word": "contact",
        "partOfSpeech": "v.",
        "chinese": "联系，联络（如用电话或信件）",
        "english": "to communicate with somebody, for example by telephone or letter"
        },
        {
        "word": "madam",
        "partOfSpeech": "n.",
        "chinese": "夫人；女士",
        "english": "a formal way of speaking or writing to a woman"
        },
        {
        "word": "advertise",
        "partOfSpeech": "v.",
        "chinese": "做广告；登广告",
        "english": "to make something known to the public in order to encourage people to buy or to use it"
        },
        {
        "word": "therefore",
        "partOfSpeech": "adv.",
        "chinese": "因此；所以；因而",
        "english": "used to introduce the logical result of something that has just been mentioned"
        },
        {
        "word": "advertisement",
        "partOfSpeech": "n.",
        "chinese": "广告；启事",
        "english": "a notice, picture or film telling people about a product, job or service"
        },
        {
        "word": "flight",
        "partOfSpeech": "n.",
        "chinese": "航班飞机；班机；空中航行，航程",
        "english": "a plane making a particular journey; a journey made by air, especially in a plane"
        },
        {
        "word": "grateful",
        "partOfSpeech": "adj.",
        "chinese": "感激的；表示感谢的",
        "english": "feeling or showing thanks because somebody has done something kind for you"
        },
        {
        "word": "faithfully",
        "partOfSpeech": "adv.",
        "chinese": "忠实地；忠诚地；准确地；如实地",
        "english": "in a loyal way; accurately; carefully"
        },
        {
        "word": "official",
        "partOfSpeech": "adj.",
        "chinese": "正式的；官方的；官方授权的",
        "english": "agreed to, said, done, etc. by somebody who is in a position of authority"
        },
        {
        "word": "fluent",
        "partOfSpeech": "adj.",
        "chinese": "（尤指外语）流利的，流畅的；熟练的",
        "english": "able to speak, read or write a language, especially a foreign language, easily and well"
        },
        {
        "word": "exchange",
        "partOfSpeech": "v.",
        "chinese": "交换；交流",
        "english": "to give something to somebody and at the same time receive the same type of thing from them"
        },
        {
        "word": "range",
        "partOfSpeech": "n.",
        "chinese": "一系列",
        "english": "a variety of things of a particular type"
        },
        {
        "word": "brick",
        "partOfSpeech": "n.",
        "chinese": "砖；砖块",
        "english": "something used for building walls, houses and other buildings"
        },
        {
        "word": "gain",
        "partOfSpeech": "n.",
        "chinese": "好处；利益；改进",
        "english": "an advantage or improvement"
        },
        {
        "word": "attract",
        "partOfSpeech": "v.",
        "chinese": "吸引；使喜爱",
        "english": "to interest you and make you want it"
        },
        {
        "word": "shark",
        "partOfSpeech": "n.",
        "chinese": "鲨鱼",
        "english": "a large sea fish with very sharp teeth and a pointed fin on its back"
        },
        {
        "word": "target",
        "partOfSpeech": "n.",
        "chinese": "（攻击的）目标，对象；目标；指标",
        "english": "an object, a person or a place that people aim at when attacking; a result that you try to achieve"
        },
        {
        "word": "approach",
        "partOfSpeech": "v.",
        "chinese": "（在距离或时间上）靠近，接近",
        "english": "to come near to somebody /something in distance or time"
        },
        {
        "word": "attack",
        "partOfSpeech": "n./v.",
        "chinese": "袭击；攻击",
        "english": "an act of using violence to try to hurt or kill somebody; to use violence to try to hurt or kill somebody"
        },
        {
        "word": "sharp",
        "partOfSpeech": "adj.",
        "chinese": "锋利的；尖的",
        "english": "having a fine edge or point, especially of something that can cut or make a hole in something"
        },
        {
        "word": "skin",
        "partOfSpeech": "n.",
        "chinese": "皮；皮肤",
        "english": "the layer of tissue that covers the body"
        },
        {
        "word": "strength",
        "partOfSpeech": "n.",
        "chinese": "体力；力气；力量",
        "english": "the quality of being physically strong"
        },
        {
        "word": "wrap",
        "partOfSpeech": "v.",
        "chinese": "用……缠绕（或圈紧）；包，裹（礼物等）",
        "english": "to put something firmly around something /somebody; to cover something completely in paper or other material"
        },
        {
        "word": "bleed",
        "partOfSpeech": "v.",
        "chinese": "流血；失血",
        "english": "(bled, bled) to lose blood, especially from a wound or an injury"
        },
        {
        "word": "bite",
        "partOfSpeech": "v.",
        "chinese": "咬",
        "english": "(bit, bitten) to use your teeth to cut into or through something"
        },
        {
        "word": "defeat",
        "partOfSpeech": "n./v.",
        "chinese": "失败；击败，战胜",
        "english": "failure to win or to be successful; to win against somebody in a war, competition, sports game, etc."
        },
        {
        "word": "destroy",
        "partOfSpeech": "v.",
        "chinese": "摧毁",
        "english": "to damage something so badly that it no longer exists, works, etc."
        },
        {
        "word": "intelligent",
        "partOfSpeech": "adj.",
        "chinese": "（动物、生物等）有智力的；有理解和学习能力的；有才智的；聪明的",
        "english": "(of an animal, a being, etc.) able to understand and learn things; good at learning, understanding"
        },
        {
        "word": "struggle",
        "partOfSpeech": "v.",
        "chinese": "搏斗；扭打；挣扎脱身；奋斗；努力",
        "english": "to fight somebody or try to get away from them; to try very hard to do something when it is difficult"
        },
        {
        "word": "sink",
        "partOfSpeech": "v.",
        "chinese": "下沉",
        "english": "(sank, sunk) to go down below the surface or towards the bottom of a liquid or soft substance"
        },
        {
        "word": "ahead",
        "partOfSpeech": "adv.",
        "chinese": "（时间、空间）向前面，在前面",
        "english": "further forward in space or time; in front"
        },
        {
        "word": "maintain",
        "partOfSpeech": "v.",
        "chinese": "维持；保持；坚持（意见），固执己见",
        "english": "to make something continue at the same level, standard, etc.; to keep stating that something is true, even though other people do not agree"
        },
        {
        "word": "dramatically",
        "partOfSpeech": "adv.",
        "chinese": "巨大地",
        "english": "by a strikingly large amount or to a strikingly large extent; greatly"
        },
        {
        "word": "curious",
        "partOfSpeech": "adj.",
        "chinese": "求知欲强的；好奇的",
        "english": "having a strong desire to know about something"
        },
        {
        "word": "shortage",
        "partOfSpeech": "n.",
        "chinese": "不足；缺少；短缺",
        "english": "a situation when there is not enough of the people or things that are needed"
        },
        {
        "word": "grain",
        "partOfSpeech": "n.",
        "chinese": "谷物；谷粒",
        "english": "the small hard seeds of food plants such as wheat, rice, etc.; a single seed of such a plant"
        },
        {
        "word": "decade",
        "partOfSpeech": "n.",
        "chinese": "十年，十年期（尤指一个年代）",
        "english": "a period of ten years"
        },
        {
        "word": "self-sufficient",
        "partOfSpeech": "adj.",
        "chinese": "自给自足；自立的",
        "english": "able to do or produce everything that you need without the help of other people"
        },
        {
        "word": "medal",
        "partOfSpeech": "n.",
        "chinese": "奖章；勋章",
        "english": "a flat piece of metal, usually shaped like a coin, that is given to the winner of a competition"
        },
        {
        "word": "outstanding",
        "partOfSpeech": "adj.",
        "chinese": "优秀的；杰出的；出色的",
        "english": "extremely good; excellent"
        },
        {
        "word": "institute",
        "partOfSpeech": "n.",
        "chinese": "（教育、专业等）机构",
        "english": "an organization that has a particular purpose, especially one that is connected with education or a particular profession"
        },
        {
        "word": "request",
        "partOfSpeech": "n.",
        "chinese": "（正式或礼貌的）要求，请求",
        "english": "the action of asking for something formally and politely"
        },
        {
        "word": "atmosphere",
        "partOfSpeech": "n.",
        "chinese": "（围绕地球的）大气，大气层",
        "english": "the mixture of gases that surrounds the Earth"
        },
        {
        "word": "lack",
        "partOfSpeech": "n.",
        "chinese": "缺乏；匮乏；短缺",
        "english": "the state of not having something or not having enough of something"
        },
        {
        "word": "clue",
        "partOfSpeech": "n.",
        "chinese": "提示词语，解答提示",
        "english": "some words or a piece of information that helps you find the answers to a game or a question"
        },
        {
        "word": "literature",
        "partOfSpeech": "n.",
        "chinese": "文学；文学作品",
        "english": "pieces of writing that are valued as works of art"
        },
        {
        "word": "failure",
        "partOfSpeech": "n.",
        "chinese": "失败的人（或事物）；失败",
        "english": "a person or thing that is not successful; lack of success in doing or achieving something"
        },
        {
        "word": "realistic",
        "partOfSpeech": "adj.",
        "chinese": "现实的；实际的；实事求是的",
        "english": "accepting in a sensible way what it is actually possible to do or achieve in a particular situation"
        },
        {
        "word": "professional",
        "partOfSpeech": "adj.",
        "chinese": "专业的；职业的",
        "english": "doing something as a paid job rather than as a hobby"
        },
        {
        "word": "false",
        "partOfSpeech": "adj.",
        "chinese": "错误的；不正确的",
        "english": "wrong; not correct or true"
        },
        {
        "word": "permanently",
        "partOfSpeech": "adv.",
        "chinese": "永久地；永恒地",
        "english": "lasting for a long time or for all time in the future"
        },
        {
        "word": "setback",
        "partOfSpeech": "n.",
        "chinese": "挫折；阻碍",
        "english": "a difficulty or problem that delays or prevents something or makes a situation worse"
        },
        {
        "word": "title",
        "partOfSpeech": "n.",
        "chinese": "（书、诗歌、图画、乐曲等的）名称，标题，题目",
        "english": "the name of a book, poem, painting, piece of music, etc."
        },
        {
        "word": "spring roll",
        "partOfSpeech": "n.",
        "chinese": "春卷",
        "english": "a type of Chinese fried food consisting of a tube of thin pastry, filled with vegetables or meat"
        },
        {
        "word": "silicon chip",
        "partOfSpeech": "n.",
        "chinese": "硅片",
        "english": "a very small piece of silicon used to carry a complicated electronic circuit"
        },
        {
        "word": "solar-power battery",
        "partOfSpeech": "n.",
        "chinese": "太阳能电池",
        "english": "a kind of battery using the sun's energy"
        },
        {
        "word": "look forward to",
        "partOfSpeech": "phr.v.",
        "chinese": "期待；盼望",
        "english": "to be thinking with pleasure about something that is going to happen"
        },
        {
        "word": "mother tongue",
        "partOfSpeech": "n.",
        "chinese": "母语",
        "english": "one's first language"
        },
        {
        "word": "cell phone",
        "partOfSpeech": "n.",
        "chinese": "移动电话；手机",
        "english": "(American English) a mobile phone"
        },
        {
        "word": "in addition",
        "partOfSpeech": "phr.",
        "chinese": "除……以外（还）",
        "english": "used when you want to mention another person or thing after something else"
        },
        {
        "word": "formal",
        "partOfSpeech": "adj.",
        "chinese": "（穿着、言语、行为等）适合正式场合的；正规的；庄重的",
        "english": "(of a style of dress, speech, writing, behaviour, etc.) very correct and suitable for official or important occasions"
        }
  ]
};

// 导出到全局作用域
if (typeof window !== 'undefined') {
  window.INIT_WORDS_DATA = INIT_WORDS_DATA;
}

// 用于模块化环境
if (typeof module !== 'undefined' && module.exports) {
  module.exports = INIT_WORDS_DATA;
}
