const DICTIONARY_DATA = [
    {
        "word": "adult",
        "pos": "n.",
        "meaning": "成年人",
        "theme": "身分",
        "sentence": "You have to buy an adult ticket if you are over 18.",
        "sentenceZh": "如果你超過18歲，就必須買全票（成人票）。",
        "otherForms": "adults (複數型)"
    },
    {
        "word": "American",
        "pos": "n.",
        "meaning": "美國人",
        "theme": "身分",
        "sentence": "My new English teacher is an American.",
        "sentenceZh": "我的新英文老師是美國人。",
        "otherForms": "Americans (複數型)"
    },
    {
        "word": "angel",
        "pos": "n.",
        "meaning": "天使",
        "theme": "身分",
        "sentence": "The little girl sleeping in the bed looks like an angel.",
        "sentenceZh": "睡在床上的小女孩看起來像個天使。",
        "otherForms": "angels (複數型)"
    },
    {
        "word": "Asian",
        "pos": "n.",
        "meaning": "亞洲人",
        "theme": "身分",
        "sentence": "Rice is a very important food for many Asian people.",
        "sentenceZh": "米飯對許多亞洲人來說是非常重要的食物。",
        "otherForms": "Asians (複數型)"
    },
    {
        "word": "baby",
        "pos": "n.",
        "meaning": "嬰兒",
        "theme": "身分",
        "sentence": "Please be quiet; the baby is sleeping.",
        "sentenceZh": "請保持安靜，嬰兒正在睡覺。",
        "otherForms": "babies (複數型(去y加ies))"
    },
    {
        "word": "beginner",
        "pos": "n.",
        "meaning": "初學者",
        "theme": "身分",
        "sentence": "This racket is perfect for a beginner learning how to swing.",
        "sentenceZh": "這支球拍非常適合正在學習揮拍的初學者。",
        "otherForms": "beginners (複數型)"
    },
    {
        "word": "boy",
        "pos": "n.",
        "meaning": "男孩",
        "theme": "身分",
        "sentence": "The boy playing basketball over there is my classmate.",
        "sentenceZh": "在那邊打籃球的男孩是我的同班同學。",
        "otherForms": "boys (複數型)"
    },
    {
        "word": "character",
        "pos": "n.",
        "meaning": "角色；性格",
        "theme": "身分",
        "sentence": "We need a cute character for our new vocabulary game.",
        "sentenceZh": "我們的單字新遊戲需要一個可愛的角色。",
        "otherForms": "characters (複數型)"
    },
    {
        "word": "chief",
        "pos": "adj. / n.",
        "meaning": "主要的；首領",
        "theme": "身分",
        "sentence": "He is the chief of the police department.",
        "sentenceZh": "他是警察局的局長。",
        "otherForms": "chiefs (複數型), chiefly (副詞 (主要地))"
    },
    {
        "word": "child",
        "pos": "n.",
        "meaning": "小孩",
        "theme": "身分",
        "sentence": "Every child needs love and care from their family.",
        "sentenceZh": "每個小孩都需要家人的愛與關懷。",
        "otherForms": "children (複數型(不規則))"
    },
    {
        "word": "couple",
        "pos": "n.",
        "meaning": "情侶；夫妻",
        "theme": "身分",
        "sentence": "The old couple walks in the park every morning.",
        "sentenceZh": "那對老夫妻每天早上都在公園散步。",
        "otherForms": "couples (複數型)"
    },
    {
        "word": "crowd",
        "pos": "n.",
        "meaning": "人群",
        "theme": "身分",
        "sentence": "There was a large crowd waiting for the train at the station.",
        "sentenceZh": "車站裡有一大群人在等火車。",
        "otherForms": "crowds (複數型)"
    },
    {
        "word": "customer",
        "pos": "n.",
        "meaning": "顧客",
        "theme": "身分",
        "sentence": "The shopkeeper smiled and said hello to the customer.",
        "sentenceZh": "店老闆微笑著向顧客打招呼。",
        "otherForms": "customers (複數型)"
    },
    {
        "word": "enemy",
        "pos": "n.",
        "meaning": "敵人",
        "theme": "身分",
        "sentence": "In the game, you have to defeat the enemy to win.",
        "sentenceZh": "在遊戲中，你必須打敗敵人才能獲勝。",
        "otherForms": "enemies (複數型(去y加ies))"
    },
    {
        "word": "female",
        "pos": "n. / adj.",
        "meaning": "女性",
        "theme": "身分",
        "sentence": "There are twenty male students and fifteen female students in my class.",
        "sentenceZh": "我的班上有二十個男學生和十五個女學生。",
        "otherForms": "females (複數型)"
    },
    {
        "word": "fool",
        "pos": "n.",
        "meaning": "傻瓜",
        "theme": "身分",
        "sentence": "Don't be a fool and believe everything on the Internet.",
        "sentenceZh": "別當傻瓜去相信網路上的每一件事。",
        "otherForms": "fools (複數型)"
    },
    {
        "word": "foreigner",
        "pos": "n.",
        "meaning": "外國人",
        "theme": "身分",
        "sentence": "It is polite to help a foreigner if they are lost.",
        "sentenceZh": "如果外國人迷路了，幫助他們是一種禮貌。",
        "otherForms": "foreigners (複數型)"
    },
    {
        "word": "friend",
        "pos": "n.",
        "meaning": "朋友",
        "theme": "身分",
        "sentence": "A good friend will always listen to you when you are sad.",
        "sentenceZh": "當你難過時，好朋友總是會傾聽你說話。",
        "otherForms": "friends (複數型)"
    },
    {
        "word": "genius",
        "pos": "n.",
        "meaning": "天才",
        "theme": "身分",
        "sentence": "Albert Einstein was a genius in science.",
        "sentenceZh": "阿爾伯特·愛因斯坦是科學界的天才。",
        "otherForms": "geniuses (複數型)"
    },
    {
        "word": "gentleman",
        "pos": "n.",
        "meaning": "紳士",
        "theme": "身分",
        "sentence": "A true gentleman is always polite to others.",
        "sentenceZh": "真正的紳士總是對他人很有禮貌。",
        "otherForms": "gentlemen (複數型(不規則))"
    },
    {
        "word": "giant",
        "pos": "n.",
        "meaning": "巨人",
        "theme": "身分",
        "sentence": "The giant tree in the forest is over one hundred years old.",
        "sentenceZh": "森林裡那棵巨大的樹已經有一百多歲了。",
        "otherForms": "giants (複數型)"
    },
    {
        "word": "girl",
        "pos": "n.",
        "meaning": "女孩",
        "theme": "身分",
        "sentence": "The girl with short hair is my younger sister.",
        "sentenceZh": "那個短頭髮的女孩是我的妹妹。",
        "otherForms": "girls (複數型)"
    },
    {
        "word": "god",
        "pos": "n.",
        "meaning": "神",
        "theme": "身分",
        "sentence": "Many ancient stories are about the weather gods.",
        "sentenceZh": "許多古代故事都與天氣的神明有關。",
        "otherForms": "gods (複數型)"
    },
    {
        "word": "guest",
        "pos": "n.",
        "meaning": "客人",
        "theme": "身分",
        "sentence": "My mother is cooking dinner for our guests tonight.",
        "sentenceZh": "我媽媽正在為今晚的客人煮晚餐。",
        "otherForms": "guests (複數型)"
    },
    {
        "word": "guy",
        "pos": "n.",
        "meaning": "夥計",
        "theme": "身分",
        "sentence": "He is a nice guy, and everyone likes him.",
        "sentenceZh": "他是個好人，大家都喜歡他。",
        "otherForms": "guys (複數型)"
    },
    {
        "word": "hero",
        "pos": "n.",
        "meaning": "英雄",
        "theme": "身分",
        "sentence": "The firefighter who saved the cat from the tree is a hero.",
        "sentenceZh": "從樹上救下貓咪的消防員是個英雄。",
        "otherForms": "heroes (複數型(加es))"
    },
    {
        "word": "honey",
        "pos": "n.",
        "meaning": "蜂蜜；親愛的",
        "theme": "身分",
        "sentence": "I like to add some honey to my tea.",
        "sentenceZh": "我喜歡在我的茶裡加一些蜂蜜。",
        "otherForms": ""
    },
    {
        "word": "host",
        "pos": "n.",
        "meaning": "主人",
        "theme": "身分",
        "sentence": "The host of the party prepared a lot of delicious food.",
        "sentenceZh": "派對的主人準備了許多美味的食物。",
        "otherForms": "hosts (複數型)"
    },
    {
        "word": "human",
        "pos": "n.",
        "meaning": "人類",
        "theme": "身分",
        "sentence": "Clean water is very important for human health.",
        "sentenceZh": "乾淨的水對人類健康非常重要。",
        "otherForms": "humans (複數型)"
    },
    {
        "word": "Japanese",
        "pos": "n.",
        "meaning": "日本人",
        "theme": "身分",
        "sentence": "She is learning Japanese because she loves their culture.",
        "sentenceZh": "她正在學日文，因為她熱愛他們的文化。",
        "otherForms": "Japanese (單複數同型)"
    },
    {
        "word": "kid",
        "pos": "n.",
        "meaning": "小孩",
        "theme": "身分",
        "sentence": "The kids are playing happily in the schoolyard.",
        "sentenceZh": "孩子們正在校園裡開心地玩耍。",
        "otherForms": "kids (複數型)"
    },
    {
        "word": "king",
        "pos": "n.",
        "meaning": "國王",
        "theme": "身分",
        "sentence": "The king lived in a very large and beautiful castle.",
        "sentenceZh": "國王住在一個非常大又美麗的城堡裡。",
        "otherForms": "kings (複數型)"
    },
    {
        "word": "Korean",
        "pos": "n.",
        "meaning": "韓國人",
        "theme": "身分",
        "sentence": "We went to a Korean restaurant for lunch yesterday.",
        "sentenceZh": "我們昨天去了一家韓國餐廳吃午餐。",
        "otherForms": "Koreans (複數型)"
    },
    {
        "word": "lady",
        "pos": "n.",
        "meaning": "女士",
        "theme": "身分",
        "sentence": "The old lady needs help crossing the busy street.",
        "sentenceZh": "這位老太太需要幫忙過這條繁忙的馬路。",
        "otherForms": "ladies (複數型(去y加ies))"
    },
    {
        "word": "leader",
        "pos": "n.",
        "meaning": "領袖",
        "theme": "身分",
        "sentence": "A good class leader helps the teacher and students.",
        "sentenceZh": "一位好的班長會協助老師和同學。",
        "otherForms": "leaders (複數型)"
    },
    {
        "word": "loser",
        "pos": "n.",
        "meaning": "輸家",
        "theme": "身分",
        "sentence": "Don't give up! A true loser is someone who stops trying.",
        "sentenceZh": "別放棄！真正的輸家是停止嘗試的人。",
        "otherForms": "losers (複數型)"
    },
    {
        "word": "lover",
        "pos": "n.",
        "meaning": "愛人；愛好者",
        "theme": "身分",
        "sentence": "She is a great animal lover.",
        "sentenceZh": "她是一個熱愛動物的人。",
        "otherForms": "lovers (複數型)"
    },
    {
        "word": "ma'am",
        "pos": "n.",
        "meaning": "女士",
        "theme": "身分",
        "sentence": "\"Can I help you, ma'am?\" the clerk asked politely.",
        "sentenceZh": "「女士，需要幫忙嗎？」店員有禮貌地問。",
        "otherForms": "ma'ams (複數型)"
    },
    {
        "word": "male",
        "pos": "n. / adj.",
        "meaning": "男性",
        "theme": "身分",
        "sentence": "The male bird usually has more colorful feathers.",
        "sentenceZh": "雄鳥通常有更鮮豔的羽毛。",
        "otherForms": "males (複數型)"
    },
    {
        "word": "man",
        "pos": "n.",
        "meaning": "男人",
        "theme": "身分",
        "sentence": "The tall man standing by the door is my uncle.",
        "sentenceZh": "站在門邊的高大男人是我的叔叔。",
        "otherForms": "men (複數型(不規則))"
    },
    {
        "word": "master",
        "pos": "n.",
        "meaning": "主人；大師",
        "theme": "身分",
        "sentence": "It takes a lot of practice to become a master of English.",
        "sentenceZh": "要成為英文大師需要大量的練習。",
        "otherForms": "masters (複數型)"
    },
    {
        "word": "member",
        "pos": "n.",
        "meaning": "成員",
        "theme": "身分",
        "sentence": "Every member of the team worked hard to win the game.",
        "sentenceZh": "隊伍裡的每個成員都很努力以贏得比賽。",
        "otherForms": "members (複數型)"
    },
    {
        "word": "Miss",
        "pos": "n.",
        "meaning": "小姐(已婚未婚都可用)",
        "theme": "身分",
        "sentence": "Miss Chen is always kind to her students.",
        "sentenceZh": "陳小姐對她的學生總是很親切。",
        "otherForms": "Misses (複數型(加es))"
    },
    {
        "word": "Mr.",
        "pos": "n.",
        "meaning": "先生",
        "theme": "身分",
        "sentence": "Mr. Lin is our new math teacher this semester.",
        "sentenceZh": "林先生是我們這學期的新數學老師。",
        "otherForms": ""
    },
    {
        "word": "Mrs.",
        "pos": "n.",
        "meaning": "太太(已婚)",
        "theme": "身分",
        "sentence": "Mrs. Wang makes the best cookies in town.",
        "sentenceZh": "王太太做的餅乾是鎮上最棒的。",
        "otherForms": ""
    },
    {
        "word": "Ms.",
        "pos": "n.",
        "meaning": "小姐(未婚)",
        "theme": "身分",
        "sentence": "Ms. Lee is going to teach us English this year.",
        "sentenceZh": "李小姐今年將要教我們英文。",
        "otherForms": ""
    },
    {
        "word": "neighbor",
        "pos": "n.",
        "meaning": "鄰居",
        "theme": "身分",
        "sentence": "Our new neighbor brought us some cookies yesterday.",
        "sentenceZh": "我們的新鄰居昨天帶了一些餅乾給我們。",
        "otherForms": "neighbors (複數型)"
    },
    {
        "word": "partner",
        "pos": "n.",
        "meaning": "夥伴；伴侶",
        "theme": "身分",
        "sentence": "You and your partner need to work together in this badminton game.",
        "sentenceZh": "你和你的夥伴必須在這場羽球比賽中合作。",
        "otherForms": "partners (複數型)"
    },
    {
        "word": "person",
        "pos": "n.",
        "meaning": "人",
        "theme": "身分",
        "sentence": "He is a very kind person who always helps others.",
        "sentenceZh": "他是個非常善良的人，總是幫助別人。",
        "otherForms": "people/persons (複數型(不規則))"
    },
    {
        "word": "player",
        "pos": "n.",
        "meaning": "玩家；球員",
        "theme": "身分",
        "sentence": "Jeremy Lin is a very famous basketball player.",
        "sentenceZh": "林書豪是一位非常有名的籃球員。",
        "otherForms": "players (複數型)"
    },
    {
        "word": "prince",
        "pos": "n.",
        "meaning": "王子",
        "theme": "身分",
        "sentence": "The young prince rode a white horse through the forest.",
        "sentenceZh": "年輕的王子騎著白馬穿過森林。",
        "otherForms": "princes (複數型)"
    },
    {
        "word": "princess",
        "pos": "n.",
        "meaning": "公主",
        "theme": "身分",
        "sentence": "The princess lives in a beautiful castle.",
        "sentenceZh": "公主住在一個美麗的城堡裡。",
        "otherForms": "princesses (複數型)"
    },
    {
        "word": "queen",
        "pos": "n.",
        "meaning": "女王",
        "theme": "身分",
        "sentence": "The queen wore a shiny gold crown on her head.",
        "sentenceZh": "女王頭上戴著閃亮的金皇冠。",
        "otherForms": "queens (複數型)"
    },
    {
        "word": "role",
        "pos": "n.",
        "meaning": "角色",
        "theme": "身分",
        "sentence": "Everyone plays an important role in our class.",
        "sentenceZh": "每個人在我們班上都扮演著重要的角色。",
        "otherForms": "roles (複數型)"
    },
    {
        "word": "sir",
        "pos": "n.",
        "meaning": "男士",
        "theme": "身分",
        "sentence": "\"Excuse me, sir, is this your bag?\"",
        "sentenceZh": "「先生不好意思，這是你的包包嗎？」",
        "otherForms": "sirs (複數型)"
    },
    {
        "word": "snowman",
        "pos": "n.",
        "meaning": "雪人",
        "theme": "身分",
        "sentence": "The kids built a big snowman in the yard during winter.",
        "sentenceZh": "孩子們在冬天時於院子裡堆了一個大雪人。",
        "otherForms": "snowmen (複數型(不規則))"
    },
    {
        "word": "stranger",
        "pos": "n.",
        "meaning": "陌生人",
        "theme": "身分",
        "sentence": "Never open the door for a stranger when you are alone.",
        "sentenceZh": "當你獨自一人時，千萬別幫陌生人開門。",
        "otherForms": "strangers (複數型)"
    },
    {
        "word": "Taiwanese",
        "pos": "n.",
        "meaning": "台灣人",
        "theme": "身分",
        "sentence": "Bubble tea is a very popular drink among Taiwanese people.",
        "sentenceZh": "珍珠奶茶在台灣人之中是非常受歡迎的飲料。",
        "otherForms": "Taiwanese (單複數同型)"
    },
    {
        "word": "teenager",
        "pos": "n.",
        "meaning": "青少年",
        "theme": "身分",
        "sentence": "Being a teenager is not always easy, but it is fun.",
        "sentenceZh": "當個青少年並不總是容易的，但也很有趣。",
        "otherForms": "teenagers (複數型)"
    },
    {
        "word": "user",
        "pos": "n.",
        "meaning": "使用者",
        "theme": "身分",
        "sentence": "This app has millions of users worldwide.",
        "sentenceZh": "這個應用程式在全世界有數百萬的使用者。",
        "otherForms": "users (複數型), use (動詞(使用)), useful (形容詞 (有用的))"
    },
    {
        "word": "visitor",
        "pos": "n.",
        "meaning": "訪客",
        "theme": "身分",
        "sentence": "The museum has thousands of visitors every weekend.",
        "sentenceZh": "這間博物館每個週末都有成千上萬的訪客。",
        "otherForms": "visitors (複數型)"
    },
    {
        "word": "winner",
        "pos": "n.",
        "meaning": "贏家",
        "theme": "身分",
        "sentence": "The winner of the race will get a gold medal.",
        "sentenceZh": "賽跑的贏家將會獲得一面金牌。",
        "otherForms": "winners (複數型)"
    },
    {
        "word": "woman",
        "pos": "n.",
        "meaning": "女人",
        "theme": "身分",
        "sentence": "The woman in the red dress is my aunt.",
        "sentenceZh": "穿著紅洋裝的那個女人是我阿姨。",
        "otherForms": "women (複數型)"
    },
    {
        "word": "youth",
        "pos": "n.",
        "meaning": "青年",
        "theme": "身分",
        "sentence": "The camp is a great place for the local youth to make friends.",
        "sentenceZh": "這個營隊是當地青年交朋友的好地方。",
        "otherForms": "youths (複數型)"
    },
    {
        "word": "aunt",
        "pos": "n.",
        "meaning": "阿姨",
        "theme": "親戚",
        "sentence": "My aunt lives in Taipei with her family.",
        "sentenceZh": "我阿姨和她的家人住在台北。",
        "otherForms": "aunts (複數型)"
    },
    {
        "word": "brother",
        "pos": "n.",
        "meaning": "兄弟",
        "theme": "親戚",
        "sentence": "I have one older brother and two younger sisters.",
        "sentenceZh": "我有一個哥哥和兩個妹妹。",
        "otherForms": "brothers (複數型)"
    },
    {
        "word": "cousin",
        "pos": "n.",
        "meaning": "堂(表)兄弟姊妹",
        "theme": "親戚",
        "sentence": "My cousin and I are the same age.",
        "sentenceZh": "我表哥和我同年紀。",
        "otherForms": "cousins (複數型)"
    },
    {
        "word": "daughter",
        "pos": "n.",
        "meaning": "女兒",
        "theme": "親戚",
        "sentence": "Mr. Smith is very proud of his hardworking daughter.",
        "sentenceZh": "史密斯先生非常以他認真的女兒為榮。",
        "otherForms": "daughters (複數型)"
    },
    {
        "word": "elder",
        "pos": "n.",
        "meaning": "長輩",
        "theme": "親戚",
        "sentence": "We should always show respect to our elders.",
        "sentenceZh": "我們應該永遠對長輩展現尊重。",
        "otherForms": "elders (複數型)"
    },
    {
        "word": "family",
        "pos": "n.",
        "meaning": "家庭",
        "theme": "親戚",
        "sentence": "I love spending the weekend with my family.",
        "sentenceZh": "我喜歡和家人一起度過週末。",
        "otherForms": "families (複數型(去y加ies))"
    },
    {
        "word": "father (dad, daddy)",
        "pos": "n.",
        "meaning": "父親",
        "theme": "親戚",
        "sentence": "My father drives me to school every morning.",
        "sentenceZh": "我爸爸每天早上開車送我上學。",
        "otherForms": "fathers (複數型)"
    },
    {
        "word": "granddaughter",
        "pos": "n.",
        "meaning": "孫女",
        "theme": "親戚",
        "sentence": "The old man bought a cute toy for his granddaughter.",
        "sentenceZh": "那位老爺爺買了一個可愛的玩具給他的孫女。",
        "otherForms": "granddaughters (複數型)"
    },
    {
        "word": "grandfather (grandpa)",
        "pos": "n.",
        "meaning": "祖父",
        "theme": "親戚",
        "sentence": "My grandfather likes to read the newspaper after breakfast.",
        "sentenceZh": "我爺爺喜歡在吃完早餐後看報紙。",
        "otherForms": "grandfathers (複數型)"
    },
    {
        "word": "grandmother (grandma)",
        "pos": "n.",
        "meaning": "祖母",
        "theme": "親戚",
        "sentence": "My grandmother tells the best bedtime stories.",
        "sentenceZh": "我奶奶講的床邊故事最棒了。",
        "otherForms": "grandmothers (複數型)"
    },
    {
        "word": "grandson",
        "pos": "n.",
        "meaning": "孫子",
        "theme": "親戚",
        "sentence": "She baked a chocolate cake for her grandson's birthday.",
        "sentenceZh": "她為孫子的生日烤了一個巧克力蛋糕。",
        "otherForms": "grandsons (複數型)"
    },
    {
        "word": "husband",
        "pos": "n.",
        "meaning": "丈夫",
        "theme": "親戚",
        "sentence": "Her husband works at the hospital as a doctor.",
        "sentenceZh": "她的丈夫在醫院當醫生。",
        "otherForms": "husbands (複數型)"
    },
    {
        "word": "mother (mother, mom)",
        "pos": "n.",
        "meaning": "母親",
        "theme": "親戚",
        "sentence": "My mother cooked a delicious meal for us tonight.",
        "sentenceZh": "我媽媽今晚為我們煮了一頓美味的飯菜。",
        "otherForms": "mothers (複數型)"
    },
    {
        "word": "nephew",
        "pos": "n.",
        "meaning": "侄子；外甥",
        "theme": "親戚",
        "sentence": "His nephew often visits him to play video games on weekends.",
        "sentenceZh": "他的姪子週末常來找他玩電動遊戲。",
        "otherForms": "nephews (複數型)"
    },
    {
        "word": "niece",
        "pos": "n.",
        "meaning": "姪女；外甥女",
        "theme": "親戚",
        "sentence": "My niece just started kindergarten this year.",
        "sentenceZh": "我的姪女今年剛開始上幼兒園。",
        "otherForms": "nieces (複數型)"
    },
    {
        "word": "parent",
        "pos": "n.",
        "meaning": "父母",
        "theme": "親戚",
        "sentence": "You need your parents' signature on this form.",
        "sentenceZh": "你需要父母親在這份表單上簽名。",
        "otherForms": "parents (複數型)"
    },
    {
        "word": "relative",
        "pos": "n.",
        "meaning": "親戚",
        "theme": "親戚",
        "sentence": "We visit our relatives during the Chinese New Year.",
        "sentenceZh": "我們在農曆新年期間會去拜訪親戚。",
        "otherForms": "relatives (複數型)"
    },
    {
        "word": "sister",
        "pos": "n.",
        "meaning": "姊妹",
        "theme": "親戚",
        "sentence": "My younger sister likes to draw cute animals.",
        "sentenceZh": "我妹妹喜歡畫可愛的動物。",
        "otherForms": "sisters (複數型)"
    },
    {
        "word": "son",
        "pos": "n.",
        "meaning": "兒子",
        "theme": "親戚",
        "sentence": "Their son is studying in a senior high school now.",
        "sentenceZh": "他們的兒子現在就讀高中。",
        "otherForms": "sons (複數型)"
    },
    {
        "word": "uncle",
        "pos": "n.",
        "meaning": "叔叔；舅舅",
        "theme": "親戚",
        "sentence": "My uncle gave me a new watch for my birthday.",
        "sentenceZh": "我叔叔送我一隻新手錶當生日禮物。",
        "otherForms": "uncles (複數型)"
    },
    {
        "word": "wife",
        "pos": "n.",
        "meaning": "妻子",
        "theme": "親戚",
        "sentence": "He bought some red roses for his wife.",
        "sentenceZh": "他買了一些紅玫瑰給他的妻子。",
        "otherForms": "wives (複數型(去f/fe加ves))"
    },
    {
        "word": "actor",
        "pos": "n.",
        "meaning": "男演員",
        "theme": "職業",
        "sentence": "The actor in that new movie is very handsome.",
        "sentenceZh": "那部新電影裡的男演員非常英俊。",
        "otherForms": "actors (複數型)"
    },
    {
        "word": "actress",
        "pos": "n.",
        "meaning": "女演員",
        "theme": "職業",
        "sentence": "She is a famous actress who won many awards.",
        "sentenceZh": "她是一位贏過許多獎項的知名女演員。",
        "otherForms": "actresses (複數型)"
    },
    {
        "word": "army",
        "pos": "n.",
        "meaning": "軍隊",
        "theme": "職業",
        "sentence": "He decided to join the army after finishing high school.",
        "sentenceZh": "他決定在高中畢業後從軍。",
        "otherForms": "armies (複數型(去y加ies))"
    },
    {
        "word": "artist",
        "pos": "n.",
        "meaning": "藝術家",
        "theme": "職業",
        "sentence": "The artist drew a beautiful picture of the ocean.",
        "sentenceZh": "這位藝術家畫了一幅美麗的海洋圖。",
        "otherForms": "artists (複數型)"
    },
    {
        "word": "assistant",
        "pos": "n.",
        "meaning": "助理",
        "theme": "職業",
        "sentence": "The teacher's assistant helps hand out the worksheets.",
        "sentenceZh": "教學助理幫忙發放學習單。",
        "otherForms": "assistants (複數型)"
    },
    {
        "word": "baby sitter",
        "pos": "n.",
        "meaning": "保母",
        "theme": "職業",
        "sentence": "We hired a baby sitter to look after the kids tonight.",
        "sentenceZh": "我們今晚請了一位保母來照顧孩子們。",
        "otherForms": "baby sitters (複數型)"
    },
    {
        "word": "band",
        "pos": "n.",
        "meaning": "樂隊；帶子",
        "theme": "職業",
        "sentence": "My favorite 80s band is coming to Taiwan for a concert!",
        "sentenceZh": "我最愛的 80 年代樂團要來台灣開演唱會了！",
        "otherForms": "bands (複數型)"
    },
    {
        "word": "barber",
        "pos": "n.",
        "meaning": "理髮師",
        "theme": "職業",
        "sentence": "The barber cut my hair too short this time.",
        "sentenceZh": "理髮師這次把我的頭髮剪得太短了。",
        "otherForms": "barbers (複數型)"
    },
    {
        "word": "boss",
        "pos": "n.",
        "meaning": "老闆",
        "theme": "職業",
        "sentence": "Her boss told her to finish the report by Friday.",
        "sentenceZh": "她的老闆叫她在星期五前完成報告。",
        "otherForms": "bosses (複數型(加es))"
    },
    {
        "word": "business",
        "pos": "n.",
        "meaning": "商業；生意",
        "theme": "職業",
        "sentence": "My father travels a lot for business.",
        "sentenceZh": "我爸爸因為生意經常出差。",
        "otherForms": "businesses (複數型(加es))"
    },
    {
        "word": "businessman",
        "pos": "n.",
        "meaning": "商人",
        "theme": "職業",
        "sentence": "The successful businessman gave a speech at our school.",
        "sentenceZh": "那位成功的商人在我們學校發表演講。",
        "otherForms": "businessmen (複數型(不規則))"
    },
    {
        "word": "captain",
        "pos": "n.",
        "meaning": "隊長；船長",
        "theme": "職業",
        "sentence": "The captain of the badminton team plays very well.",
        "sentenceZh": "羽毛球隊的隊長打得非常好。",
        "otherForms": "captains (複數型)"
    },
    {
        "word": "cheerleader",
        "pos": "n.",
        "meaning": "啦啦隊",
        "theme": "職業",
        "sentence": "The cheerleaders danced energetically during the basketball game.",
        "sentenceZh": "啦啦隊在籃球比賽時充滿活力地跳舞。",
        "otherForms": "cheerleaders (複數型)"
    },
    {
        "word": "class leader",
        "pos": "n.",
        "meaning": "班長",
        "theme": "職業",
        "sentence": "As the class leader, he has to keep the classroom quiet.",
        "sentenceZh": "身為班長，他必須維持教室的安靜。",
        "otherForms": "class leaders (複數型)"
    },
    {
        "word": "classmate",
        "pos": "n.",
        "meaning": "同學",
        "theme": "職業",
        "sentence": "I usually walk to the train station with my classmate.",
        "sentenceZh": "我通常和我的同學一起走到火車站。",
        "otherForms": "classmates (複數型)"
    },
    {
        "word": "clerk",
        "pos": "n.",
        "meaning": "店員；職員",
        "theme": "職業",
        "sentence": "The clerk at the convenience store is very polite.",
        "sentenceZh": "便利商店的店員非常有禮貌。",
        "otherForms": "clerks (複數型)"
    },
    {
        "word": "coach",
        "pos": "n.",
        "meaning": "教練",
        "theme": "職業",
        "sentence": "Our badminton coach teaches us how to swing correctly.",
        "sentenceZh": "我們的羽球教練教我們如何正確揮拍。",
        "otherForms": "coaches (複數型)"
    },
    {
        "word": "cook",
        "pos": "n.",
        "meaning": "廚師",
        "theme": "職業",
        "sentence": "My father is a great cook; he makes the best fried rice.",
        "sentenceZh": "我爸爸是個很棒的廚師，他炒的飯最好吃。",
        "otherForms": "cooks (複數型)"
    },
    {
        "word": "cowboy",
        "pos": "n.",
        "meaning": "牛仔",
        "theme": "職業",
        "sentence": "The cowboy rode his horse quickly across the field.",
        "sentenceZh": "牛仔騎著馬快速地穿過原野。",
        "otherForms": "cowboys (複數型)"
    },
    {
        "word": "dentist",
        "pos": "n.",
        "meaning": "牙醫",
        "theme": "職業",
        "sentence": "You should visit the dentist if you have a toothache.",
        "sentenceZh": "如果你牙痛，就應該去看牙醫。",
        "otherForms": "dentists (複數型)"
    },
    {
        "word": "diplomat",
        "pos": "n.",
        "meaning": "外交官",
        "theme": "職業",
        "sentence": "The diplomat traveled to many countries to talk about peace.",
        "sentenceZh": "外交官到許多國家去談論和平。",
        "otherForms": "diplomats (複數型)"
    },
    {
        "word": "doctor",
        "pos": "n.",
        "meaning": "醫生",
        "theme": "職業",
        "sentence": "The doctor told me to drink more water and get some rest.",
        "sentenceZh": "醫生告訴我要多喝水並多休息。",
        "otherForms": "doctors (複數型)"
    },
    {
        "word": "driver",
        "pos": "n.",
        "meaning": "司機",
        "theme": "職業",
        "sentence": "The bus driver drives very carefully on rainy days.",
        "sentenceZh": "公車司機在雨天開車非常小心。",
        "otherForms": "drivers (複數型)"
    },
    {
        "word": "engineer",
        "pos": "n.",
        "meaning": "工程師",
        "theme": "職業",
        "sentence": "The software engineer is writing code for a new vocabulary game.",
        "sentenceZh": "軟體工程師正在為一個新的單字遊戲寫程式碼。",
        "otherForms": "engineers (複數型)"
    },
    {
        "word": "farmer",
        "pos": "n.",
        "meaning": "農夫",
        "theme": "職業",
        "sentence": "The farmer grows sweet potatoes and rice on his farm.",
        "sentenceZh": "農夫在他的農場裡種植地瓜和稻米。",
        "otherForms": "farmers (複數型)"
    },
    {
        "word": "fisherman",
        "pos": "n.",
        "meaning": "漁夫",
        "theme": "職業",
        "sentence": "The fisherman caught a big fish in the sea this morning.",
        "sentenceZh": "漁夫今天早上在海裡捕到了一條大魚。",
        "otherForms": "fishermen (複數型)"
    },
    {
        "word": "guide",
        "pos": "n.",
        "meaning": "導遊",
        "theme": "職業",
        "sentence": "The tour guide showed us the old temple in the town.",
        "sentenceZh": "導遊帶我們參觀了鎮上的古老寺廟。",
        "otherForms": "guides (複數型)"
    },
    {
        "word": "hair dresser",
        "pos": "n.",
        "meaning": "髮型師",
        "theme": "職業",
        "sentence": "The hair dresser helped me try a new hairstyle.",
        "sentenceZh": "髮型師幫我嘗試了一個新髮型。",
        "otherForms": "hair dressers (複數型)"
    },
    {
        "word": "housewife",
        "pos": "n.",
        "meaning": "家庭主婦",
        "theme": "職業",
        "sentence": "She is a busy housewife who takes care of three children.",
        "sentenceZh": "她是個忙碌的家庭主婦，照顧三個孩子。",
        "otherForms": "housewives (複數型)"
    },
    {
        "word": "hunter",
        "pos": "n.",
        "meaning": "獵人",
        "theme": "職業",
        "sentence": "The hunter walked quietly in the forest to find animals.",
        "sentenceZh": "獵人安靜地在森林裡走動尋找動物。",
        "otherForms": "hunters (複數型)"
    },
    {
        "word": "job",
        "pos": "n.",
        "meaning": "工作",
        "theme": "職業",
        "sentence": "Teaching English is a hard but meaningful job.",
        "sentenceZh": "教英文是一份辛苦但有意義的工作。",
        "otherForms": "jobs (複數型)"
    },
    {
        "word": "journalist",
        "pos": "n.",
        "meaning": "記者",
        "theme": "職業",
        "sentence": "The journalist wrote a news report about the typhoon.",
        "sentenceZh": "記者寫了一篇關於颱風的新聞報導。",
        "otherForms": "journalists (複數型)"
    },
    {
        "word": "judge",
        "pos": "n.",
        "meaning": "法官",
        "theme": "職業",
        "sentence": "The judge listened carefully to both sides of the story.",
        "sentenceZh": "法官仔細聆聽雙方的說法。",
        "otherForms": "judges (複數型)"
    },
    {
        "word": "lawyer",
        "pos": "n.",
        "meaning": "律師",
        "theme": "職業",
        "sentence": "The lawyer helped his client understand the rules.",
        "sentenceZh": "律師幫助他的客戶了解規定。",
        "otherForms": "lawyers (複數型)"
    },
    {
        "word": "magician",
        "pos": "n.",
        "meaning": "魔術師",
        "theme": "職業",
        "sentence": "The magician pulled a white rabbit out of his black hat.",
        "sentenceZh": "魔術師從他的黑帽子裡拉出一隻白兔。",
        "otherForms": "magicians (複數型)"
    },
    {
        "word": "mailman",
        "pos": "n.",
        "meaning": "郵差",
        "theme": "職業",
        "sentence": "The mailman delivers letters to our house every morning.",
        "sentenceZh": "郵差每天早上送信到我們家。",
        "otherForms": "mailmen (複數型(不規則))"
    },
    {
        "word": "mail carrier",
        "pos": "n.",
        "meaning": "郵差",
        "theme": "職業",
        "sentence": "The mail carrier brought a heavy package today.",
        "sentenceZh": "郵差今天送來了一個很重的包裹。",
        "otherForms": "mail carriers (複數型)"
    },
    {
        "word": "manager",
        "pos": "n.",
        "meaning": "經理",
        "theme": "職業",
        "sentence": "The manager had a meeting with all the store clerks.",
        "sentenceZh": "經理與所有的店員開會。",
        "otherForms": "managers (複數型)"
    },
    {
        "word": "mechanic",
        "pos": "n.",
        "meaning": "技工",
        "theme": "職業",
        "sentence": "The mechanic fixed our broken car in just two hours.",
        "sentenceZh": "技工只花了兩小時就修好了我們故障的車。",
        "otherForms": "mechanics (複數型)"
    },
    {
        "word": "model",
        "pos": "n.",
        "meaning": "模特兒",
        "theme": "職業",
        "sentence": "The fashion model wore a beautiful dress on the stage.",
        "sentenceZh": "時尚模特兒在舞台上穿著一件美麗的洋裝。",
        "otherForms": "models (複數型)"
    },
    {
        "word": "musician",
        "pos": "n.",
        "meaning": "音樂家",
        "theme": "職業",
        "sentence": "He is a talented musician who can play the piano and the guitar.",
        "sentenceZh": "他是個有才華的音樂家，會彈鋼琴和吉他。",
        "otherForms": "musicians (複數型)"
    },
    {
        "word": "nurse",
        "pos": "n.",
        "meaning": "護士",
        "theme": "職業",
        "sentence": "The nurse checked my temperature and gave me some medicine.",
        "sentenceZh": "護士幫我量體溫並給我一些藥。",
        "otherForms": "nurses (複數型)"
    },
    {
        "word": "officer",
        "pos": "n.",
        "meaning": "公務員",
        "theme": "職業",
        "sentence": "The police officer helped the lost child find his parents.",
        "sentenceZh": "警官幫助迷路的小孩找到父母。",
        "otherForms": "officers (複數型)"
    },
    {
        "word": "owner",
        "pos": "n.",
        "meaning": "持有者",
        "theme": "職業",
        "sentence": "The owner of this restaurant is a very kind lady.",
        "sentenceZh": "這家餐廳的老闆是一位非常親切的女士。",
        "otherForms": "owners (複數型)"
    },
    {
        "word": "painter",
        "pos": "n.",
        "meaning": "畫家",
        "theme": "職業",
        "sentence": "The painter mixed blue and yellow to make green paint.",
        "sentenceZh": "畫家混合了藍色和黃色來調出綠色顏料。",
        "otherForms": "painters (複數型)"
    },
    {
        "word": "poet",
        "pos": "n.",
        "meaning": "詩人",
        "theme": "職業",
        "sentence": "Li Bai is a famous poet in Chinese history.",
        "sentenceZh": "李白是中國歷史上著名的詩人。",
        "otherForms": "poets (複數型), poem (詩 - 名詞)"
    },
    {
        "word": "police",
        "pos": "n.",
        "meaning": "警方",
        "theme": "職業",
        "sentence": "We called the police when we saw the thief.",
        "sentenceZh": "當我們看到小偷時，我們報了警。",
        "otherForms": "police (單複數同型)"
    },
    {
        "word": "police officer",
        "pos": "n.",
        "meaning": "警察",
        "theme": "職業",
        "sentence": "The police officer asked the driver to stop the car.",
        "sentenceZh": "警察要求司機停車。",
        "otherForms": "police officers (複數型)"
    },
    {
        "word": "president",
        "pos": "n.",
        "meaning": "總統",
        "theme": "職業",
        "sentence": "The president gave an important speech on TV last night.",
        "sentenceZh": "總統昨晚在電視上發表了重要的演講。",
        "otherForms": "presidents (複數型)"
    },
    {
        "word": "priest",
        "pos": "n.",
        "meaning": "神父",
        "theme": "職業",
        "sentence": "The village priest in the story told the people to be kind.",
        "sentenceZh": "故事中村莊裡的神父告訴人們要保持善良。",
        "otherForms": "priests (複數型)"
    },
    {
        "word": "principal",
        "pos": "n.",
        "meaning": "校長",
        "theme": "職業",
        "sentence": "Our school principal shook hands with all the graduating students.",
        "sentenceZh": "我們的校長和所有即將畢業的學生握手。",
        "otherForms": "principals (複數型)"
    },
    {
        "word": "professor",
        "pos": "n.",
        "meaning": "教授",
        "theme": "職業",
        "sentence": "The university professor teaches a class on web development.",
        "sentenceZh": "大學教授教了一門網頁開發的課程。",
        "otherForms": "professors (複數型)"
    },
    {
        "word": "reporter",
        "pos": "n.",
        "meaning": "記者",
        "theme": "職業",
        "sentence": "The reporter interviewed the famous singer after the concert.",
        "sentenceZh": "記者在演唱會後採訪了那位知名歌手。",
        "otherForms": "reporters (複數型)"
    },
    {
        "word": "sailor",
        "pos": "n.",
        "meaning": "水手",
        "theme": "職業",
        "sentence": "The brave sailor spent many months traveling on the ocean.",
        "sentenceZh": "勇敢的水手花了幾個月的時間在海洋上航行。",
        "otherForms": "sailors (複數型)"
    },
    {
        "word": "salesman",
        "pos": "n.",
        "meaning": "銷售員",
        "theme": "職業",
        "sentence": "The car salesman showed us their newest model.",
        "sentenceZh": "汽車銷售員向我們展示了他們最新款的車。",
        "otherForms": "salesmen (複數型(不規則))"
    },
    {
        "word": "scientist",
        "pos": "n.",
        "meaning": "科學家",
        "theme": "職業",
        "sentence": "The scientist is doing an experiment in the laboratory.",
        "sentenceZh": "科學家正在實驗室裡做實驗。",
        "otherForms": "scientists (複數型)"
    },
    {
        "word": "secretary",
        "pos": "n.",
        "meaning": "秘書",
        "theme": "職業",
        "sentence": "The secretary helped the boss answer the phone and write emails.",
        "sentenceZh": "秘書幫老闆接電話和寫電子郵件。",
        "otherForms": "secretaries (複數型)"
    },
    {
        "word": "servant",
        "pos": "n.",
        "meaning": "僕人",
        "theme": "職業",
        "sentence": "The servant cleaned the large house for the rich family.",
        "sentenceZh": "僕人為富有的家庭打掃大房子。",
        "otherForms": "servants (複數型)"
    },
    {
        "word": "shopkeeper",
        "pos": "n.",
        "meaning": "店主",
        "theme": "職業",
        "sentence": "The shopkeeper smiled and said thank you to the customer.",
        "sentenceZh": "店老闆微笑著向顧客說謝謝。",
        "otherForms": "shopkeepers (複數型)"
    },
    {
        "word": "singer",
        "pos": "n.",
        "meaning": "歌手",
        "theme": "職業",
        "sentence": "The singer's voice sounds amazing when she sings live.",
        "sentenceZh": "這位歌手唱現場時的聲音聽起來棒極了。",
        "otherForms": "singers (複數型)"
    },
    {
        "word": "soldier",
        "pos": "n.",
        "meaning": "士兵",
        "theme": "職業",
        "sentence": "The soldier was very brave and protected his country.",
        "sentenceZh": "這名士兵非常勇敢，保護了他的國家。",
        "otherForms": "soldiers (複數型)"
    },
    {
        "word": "student",
        "pos": "n.",
        "meaning": "學生",
        "theme": "職業",
        "sentence": "A good student always finishes their homework on time.",
        "sentenceZh": "好學生總是準時完成他們的回家作業。",
        "otherForms": "students (複數型)"
    },
    {
        "word": "teacher",
        "pos": "n.",
        "meaning": "老師",
        "theme": "職業",
        "sentence": "Our English teacher uses fun games to help us learn vocabulary.",
        "sentenceZh": "我們的英文老師用有趣的遊戲來幫助我們學單字。",
        "otherForms": "teachers (複數型)"
    },
    {
        "word": "thief",
        "pos": "n.",
        "meaning": "小偷",
        "theme": "職業",
        "sentence": "The thief stole a bicycle from the park yesterday.",
        "sentenceZh": "小偷昨天從公園裡偷走了一輛腳踏車。",
        "otherForms": "thieves (複數型(去f/fe加ves))"
    },
    {
        "word": "vendor",
        "pos": "n.",
        "meaning": "小販",
        "theme": "職業",
        "sentence": "We bought some delicious snacks from the street vendor.",
        "sentenceZh": "我們向街邊小販買了一些美味的點心。",
        "otherForms": "vendors (複數型)"
    },
    {
        "word": "waiter",
        "pos": "n.",
        "meaning": "服務生（男性）",
        "theme": "職業",
        "sentence": "The waiter brought us the menu and a glass of water.",
        "sentenceZh": "男服務生為我們送上菜單和一杯水。",
        "otherForms": "waiters (複數型)"
    },
    {
        "word": "waitress",
        "pos": "n.",
        "meaning": "服務生（女性）",
        "theme": "職業",
        "sentence": "The waitress asked if we wanted to order dessert.",
        "sentenceZh": "女服務生問我們是否想點甜點。",
        "otherForms": "waitresses (複數型)"
    },
    {
        "word": "work",
        "pos": "n. / v.",
        "meaning": "工作",
        "theme": "職業",
        "sentence": "I have a lot of work to do this weekend.",
        "sentenceZh": "我這個週末有很多工作要做。",
        "otherForms": ""
    },
    {
        "word": "worker",
        "pos": "n.",
        "meaning": "工人",
        "theme": "職業",
        "sentence": "The construction worker wears a hard hat for safety.",
        "sentenceZh": "建築工人為了安全戴著安全帽。",
        "otherForms": "workers (複數型)"
    },
    {
        "word": "writer",
        "pos": "n.",
        "meaning": "作家",
        "theme": "職業",
        "sentence": "J.K. Rowling is the famous writer of the Harry Potter books.",
        "sentenceZh": "J.K. 羅琳是《哈利波特》系列書籍的知名作家。",
        "otherForms": "writers (複數型)"
    },
    {
        "word": "ankle",
        "pos": "n.",
        "meaning": "腳踝",
        "theme": "身體部位",
        "sentence": "He twisted his ankle while playing basketball.",
        "sentenceZh": "他打籃球時扭傷了腳踝。",
        "otherForms": "ankles (複數型)"
    },
    {
        "word": "arm",
        "pos": "n.",
        "meaning": "手臂",
        "theme": "身體部位",
        "sentence": "She carried the heavy books in her left arm.",
        "sentenceZh": "她用左手臂抱著那些重書。",
        "otherForms": "arms (複數型)"
    },
    {
        "word": "back",
        "pos": "n. / adv.",
        "meaning": "背部",
        "theme": "身體部位",
        "sentence": "My grandfather's back hurts when it rains.",
        "sentenceZh": "我爺爺的背在下雨時會痛。",
        "otherForms": "backs (複數型)"
    },
    {
        "word": "beard",
        "pos": "n.",
        "meaning": "鬍鬚",
        "theme": "身體部位",
        "sentence": "The old man has a long white beard.",
        "sentenceZh": "那位老人留著長長的白鬍鬚。",
        "otherForms": "beards (複數型)"
    },
    {
        "word": "blood",
        "pos": "n.",
        "meaning": "血液",
        "theme": "身體部位",
        "sentence": "Your heart pumps blood around your body.",
        "sentenceZh": "你的心臟將血液輸送到全身。",
        "otherForms": ""
    },
    {
        "word": "body",
        "pos": "n.",
        "meaning": "身體",
        "theme": "身體部位",
        "sentence": "Exercise is good for both your mind and your body.",
        "sentenceZh": "運動對你的身心都有好處。",
        "otherForms": "bodies (複數型)"
    },
    {
        "word": "bone",
        "pos": "n.",
        "meaning": "骨頭",
        "theme": "身體部位",
        "sentence": "The dog buried a bone in the garden.",
        "sentenceZh": "狗在花園裡埋了一根骨頭。",
        "otherForms": "bones (複數型)"
    },
    {
        "word": "brain",
        "pos": "n.",
        "meaning": "大腦",
        "theme": "身體部位",
        "sentence": "The human brain is very complex.",
        "sentenceZh": "人類的大腦非常複雜。",
        "otherForms": "brains (複數型)"
    },
    {
        "word": "chin",
        "pos": "n.",
        "meaning": "下巴",
        "theme": "身體部位",
        "sentence": "He rested his chin on his hand while thinking.",
        "sentenceZh": "他思考時用手托著下巴。",
        "otherForms": "chins (複數型)"
    },
    {
        "word": "ear",
        "pos": "n.",
        "meaning": "耳朵",
        "theme": "身體部位",
        "sentence": "Elephants have very large ears.",
        "sentenceZh": "大象有非常大的耳朵。",
        "otherForms": "ears (複數型)"
    },
    {
        "word": "eye",
        "pos": "n.",
        "meaning": "眼睛",
        "theme": "身體部位",
        "sentence": "She has big brown eyes and long hair.",
        "sentenceZh": "她有雙棕色的大眼睛和長頭髮。",
        "otherForms": "eyes (複數型)"
    },
    {
        "word": "eyebrow",
        "pos": "n.",
        "meaning": "眉毛",
        "theme": "身體部位",
        "sentence": "He raised his left eyebrow in surprise.",
        "sentenceZh": "他驚訝地挑起左眉。",
        "otherForms": "eyebrows (複數型)"
    },
    {
        "word": "face",
        "pos": "n.",
        "meaning": "臉",
        "theme": "身體部位",
        "sentence": "Wash your face before you go to bed.",
        "sentenceZh": "睡前要洗臉。",
        "otherForms": "faces (複數型)"
    },
    {
        "word": "finger",
        "pos": "n.",
        "meaning": "手指",
        "theme": "身體部位",
        "sentence": "He cut his finger while cooking dinner.",
        "sentenceZh": "他煮晚餐時切到了手指。",
        "otherForms": "fingers (複數型)"
    },
    {
        "word": "foot",
        "pos": "n.",
        "meaning": "腳",
        "theme": "身體部位",
        "sentence": "I have a blister on my left foot.",
        "sentenceZh": "我的左腳起了一個水泡。",
        "otherForms": "feet (複數型)"
    },
    {
        "word": "gesture",
        "pos": "n.",
        "meaning": "手勢",
        "theme": "身體部位",
        "sentence": "Thumbs up is a friendly gesture in many countries.",
        "sentenceZh": "豎起大拇指在許多國家是友善的手勢。",
        "otherForms": "gestures (複數型(不規則))"
    },
    {
        "word": "hair",
        "pos": "n.",
        "meaning": "頭髮",
        "theme": "身體部位",
        "sentence": "She brushed her long black hair in front of the mirror.",
        "sentenceZh": "她在鏡子前梳理她烏黑的長髮。",
        "otherForms": ""
    },
    {
        "word": "hand",
        "pos": "n.",
        "meaning": "手",
        "theme": "身體部位",
        "sentence": "Please raise your hand if you know the answer.",
        "sentenceZh": "如果你知道答案請舉手。",
        "otherForms": "hands (複數型)"
    },
    {
        "word": "head",
        "pos": "n.",
        "meaning": "頭",
        "theme": "身體部位",
        "sentence": "He nodded his head to show that he agreed.",
        "sentenceZh": "他點頭表示同意。",
        "otherForms": "heads (複數型)"
    },
    {
        "word": "heart",
        "pos": "n.",
        "meaning": "心臟",
        "theme": "身體部位",
        "sentence": "Running makes your heart beat faster.",
        "sentenceZh": "跑步會讓你的心跳加快。",
        "otherForms": "hearts (複數型)"
    },
    {
        "word": "hip",
        "pos": "n.",
        "meaning": "臀部",
        "theme": "身體部位",
        "sentence": "She stood with her hands on her hips.",
        "sentenceZh": "她雙手叉腰站著。",
        "otherForms": "hips (複數型)"
    },
    {
        "word": "knee",
        "pos": "n.",
        "meaning": "膝蓋",
        "theme": "身體部位",
        "sentence": "He scraped his knee when he fell off the bike.",
        "sentenceZh": "他從腳踏車上摔下來時擦傷了膝蓋。",
        "otherForms": "knees (複數型)"
    },
    {
        "word": "leg",
        "pos": "n.",
        "meaning": "腿",
        "theme": "身體部位",
        "sentence": "The table is wobbly because one leg is shorter.",
        "sentenceZh": "桌子搖搖晃晃的，因為有一隻桌腳比較短。",
        "otherForms": "legs (複數型)"
    },
    {
        "word": "lip",
        "pos": "n.",
        "meaning": "嘴唇",
        "theme": "身體部位",
        "sentence": "She bit her lip because she was nervous.",
        "sentenceZh": "她因為緊張而咬了咬嘴唇。",
        "otherForms": "lips (複數型)"
    },
    {
        "word": "mouth",
        "pos": "n.",
        "meaning": "嘴巴",
        "theme": "身體部位",
        "sentence": "Keep your mouth closed when you chew your food.",
        "sentenceZh": "咀嚼食物時請閉上嘴巴。",
        "otherForms": "mouths (複數型)"
    },
    {
        "word": "nail",
        "pos": "n.",
        "meaning": "指甲",
        "theme": "身體部位",
        "sentence": "You should cut your fingernails every week.",
        "sentenceZh": "你應該每週修剪指甲。",
        "otherForms": "nails (複數型)"
    },
    {
        "word": "neck",
        "pos": "n.",
        "meaning": "脖子",
        "theme": "身體部位",
        "sentence": "Giraffes have a very long neck to reach high leaves.",
        "sentenceZh": "長頸鹿有很長的脖子，可以吃到高處的樹葉。",
        "otherForms": "necks (複數型)"
    },
    {
        "word": "nose",
        "pos": "n.",
        "meaning": "鼻子",
        "theme": "身體部位",
        "sentence": "He blew his nose because he had a bad cold.",
        "sentenceZh": "他因為重感冒而擤鼻涕。",
        "otherForms": "noses (複數型)"
    },
    {
        "word": "organ",
        "pos": "n.",
        "meaning": "器官",
        "theme": "身體部位",
        "sentence": "The heart is an important organ in our body.",
        "sentenceZh": "心臟是我們體內一個重要的器官。",
        "otherForms": "organs (複數型)"
    },
    {
        "word": "shoulder",
        "pos": "n.",
        "meaning": "肩膀",
        "theme": "身體部位",
        "sentence": "My backpack is so heavy that my shoulders hurt.",
        "sentenceZh": "我的背包太重了，弄得我肩膀很痛。",
        "otherForms": "shoulders (複數型)"
    },
    {
        "word": "skin",
        "pos": "n.",
        "meaning": "皮膚",
        "theme": "身體部位",
        "sentence": "Use sunscreen to protect your skin from the sun.",
        "sentenceZh": "塗防曬乳來保護你的皮膚免受陽光傷害。",
        "otherForms": "skins (複數型)"
    },
    {
        "word": "stomach",
        "pos": "n.",
        "meaning": "胃",
        "theme": "身體部位",
        "sentence": "I am so hungry that my stomach is making noises.",
        "sentenceZh": "我餓到肚子都在咕嚕叫了。",
        "otherForms": "stomachs (複數型)"
    },
    {
        "word": "throat",
        "pos": "n.",
        "meaning": "喉嚨",
        "theme": "身體部位",
        "sentence": "I have a sore throat and cannot speak loudly.",
        "sentenceZh": "我喉嚨痛，沒辦法大聲講話。",
        "otherForms": "throats (複數型)"
    },
    {
        "word": "thumb",
        "pos": "n.",
        "meaning": "拇指",
        "theme": "身體部位",
        "sentence": "The baby likes to suck his thumb when he is sleepy.",
        "sentenceZh": "小嬰兒想睡覺時喜歡吸拇指。",
        "otherForms": "thumbs (複數型)"
    },
    {
        "word": "toe",
        "pos": "n.",
        "meaning": "腳趾",
        "theme": "身體部位",
        "sentence": "I stubbed my toe on the chair and it hurts!",
        "sentenceZh": "我的腳趾踢到椅子，好痛！",
        "otherForms": "toes (複數型)"
    },
    {
        "word": "tongue",
        "pos": "n.",
        "meaning": "舌頭",
        "theme": "身體部位",
        "sentence": "The dog stuck out its tongue to cool down.",
        "sentenceZh": "狗伸出舌頭來散熱。",
        "otherForms": "tongues (複數型)"
    },
    {
        "word": "tooth",
        "pos": "n.",
        "meaning": "牙齒",
        "theme": "身體部位",
        "sentence": "You must brush your teeth twice a day.",
        "sentenceZh": "你必須每天刷兩次牙。",
        "otherForms": "teeth (複數型)"
    },
    {
        "word": "waist",
        "pos": "n.",
        "meaning": "腰部",
        "theme": "身體部位",
        "sentence": "He tied a jacket around his waist.",
        "sentenceZh": "他把夾克綁在腰上。",
        "otherForms": "waists (複數型(不規則))"
    },
    {
        "word": "wrist",
        "pos": "n.",
        "meaning": "手腕",
        "theme": "身體部位",
        "sentence": "She wore a beautiful silver watch on her wrist.",
        "sentenceZh": "她手腕上戴著一隻美麗的銀色手錶。",
        "otherForms": "wrists (複數型)"
    },
    {
        "word": "wound",
        "pos": "n.",
        "meaning": "創傷；傷口",
        "theme": "醫療健康",
        "sentence": "The nurse carefully cleaned the wound on his arm.",
        "sentenceZh": "護士小心地清理他手臂上的傷口。",
        "otherForms": "wounds (複數型)"
    },
    {
        "word": "cancer",
        "pos": "n.",
        "meaning": "癌症",
        "theme": "醫療健康",
        "sentence": "Smoking increases the risk of getting lung cancer.",
        "sentenceZh": "抽菸會增加罹患肺癌的風險。",
        "otherForms": "cancers (複數型)"
    },
    {
        "word": "cold",
        "pos": "n. / adj.",
        "meaning": "感冒；冷的；冷漠的",
        "theme": "醫療健康",
        "sentence": "Catching a cold is common in winter, so keep warm.",
        "sentenceZh": "冬天很容易感冒，所以要保暖。",
        "otherForms": "colds (複數型), colder (比較級), coldest (最高級), coldly (副詞)"
    },
    {
        "word": "flu",
        "pos": "n.",
        "meaning": "流行性感冒",
        "theme": "醫療健康",
        "sentence": "He had to stay home from school because he caught the flu.",
        "sentenceZh": "他因為得了流感，只好請假待在家裡。",
        "otherForms": ""
    },
    {
        "word": "headache",
        "pos": "n.",
        "meaning": "頭痛",
        "theme": "醫療健康",
        "sentence": "The loud noise gave me a terrible headache.",
        "sentenceZh": "巨大的噪音讓我頭痛欲裂。",
        "otherForms": "headaches (複數型)"
    },
    {
        "word": "stomachache",
        "pos": "n.",
        "meaning": "胃痛",
        "theme": "醫療健康",
        "sentence": "Eating too much ice cream gave her a stomachache.",
        "sentenceZh": "吃太多冰淇淋讓她胃痛。",
        "otherForms": "stomachaches (複數型)"
    },
    {
        "word": "toothache",
        "pos": "n.",
        "meaning": "牙痛",
        "theme": "醫療健康",
        "sentence": "He has a bad toothache and needs to see the dentist.",
        "sentenceZh": "他牙痛得很厲害，需要去看牙醫。",
        "otherForms": "toothaches (複數型)"
    },
    {
        "word": "cough",
        "pos": "n. / v.",
        "meaning": "咳嗽",
        "theme": "醫療健康",
        "sentence": "She has a bad cough and needs to drink more warm water.",
        "sentenceZh": "她咳得很嚴重，需要多喝溫水。",
        "otherForms": "coughs (複數型)"
    },
    {
        "word": "fever",
        "pos": "n.",
        "meaning": "發燒",
        "theme": "醫療健康",
        "sentence": "The baby has a high fever, so they took him to the hospital.",
        "sentenceZh": "嬰兒發高燒，所以他們帶他去了醫院。",
        "otherForms": "fevers (複數型)"
    },
    {
        "word": "pain",
        "pos": "n.",
        "meaning": "疼痛",
        "theme": "醫療健康",
        "sentence": "He felt a sharp pain in his knee after the fall.",
        "sentenceZh": "他跌倒後覺得膝蓋一陣劇痛。",
        "otherForms": "pains (複數型)"
    },
    {
        "word": "sore throat",
        "pos": "n.",
        "meaning": "喉嚨痛",
        "theme": "醫療健康",
        "sentence": "Honey and lemon tea is good for a sore throat.",
        "sentenceZh": "蜂蜜檸檬茶對喉嚨痛有幫助。",
        "otherForms": "sore throats (複數型)"
    },
    {
        "word": "death",
        "pos": "n.",
        "meaning": "死亡",
        "theme": "醫療健康",
        "sentence": "The death of his pet dog made him very sad.",
        "sentenceZh": "寵物狗的死亡讓他非常難過。",
        "otherForms": "deaths (複數型)"
    },
    {
        "word": "health",
        "pos": "n.",
        "meaning": "健康",
        "theme": "醫療健康",
        "sentence": "Eating vegetables and exercising every day is good for your health.",
        "sentenceZh": "每天吃蔬菜和運動對你的健康有益。",
        "otherForms": ""
    },
    {
        "word": "life",
        "pos": "n.",
        "meaning": "生命",
        "theme": "醫療健康",
        "sentence": "We only have one life, so we should live it happily.",
        "sentenceZh": "我們只有一次生命，所以應該快樂地度過。",
        "otherForms": "lives (複數型(去fe加ves))"
    },
    {
        "word": "medicine",
        "pos": "n.",
        "meaning": "藥物；醫學",
        "theme": "醫療健康",
        "sentence": "Remember to take your medicine after meals.",
        "sentenceZh": "記得飯後要吃藥。",
        "otherForms": "medicines (複數型)"
    },
    {
        "word": "operation",
        "pos": "n.",
        "meaning": "操作；手術",
        "theme": "醫療健康",
        "sentence": "The doctor performed a successful operation to fix his leg.",
        "sentenceZh": "醫生進行了一次成功的手術來治療他的腿。",
        "otherForms": "operations (複數型)"
    },
    {
        "word": "comfortable",
        "pos": "adj.",
        "meaning": "舒服的",
        "theme": "醫療健康",
        "sentence": "This sofa is very soft and comfortable to sit on.",
        "sentenceZh": "這張沙發很軟，坐起來非常舒服。",
        "otherForms": "more comfortable (比較級), most comfortable (最高級), comfortably (副詞)"
    },
    {
        "word": "dizzy",
        "pos": "adj.",
        "meaning": "頭暈的",
        "theme": "醫療健康",
        "sentence": "I feel dizzy when I stand up too quickly.",
        "sentenceZh": "我站起來太快時會覺得頭暈。",
        "otherForms": "dizzier (比較級(去y加ier)), dizziest (最高級(去y加iest)), dizzily (副詞(去y加ily))"
    },
    {
        "word": "healthy",
        "pos": "adj.",
        "meaning": "健康的",
        "theme": "醫療健康",
        "sentence": "To stay healthy, you should get enough sleep every night.",
        "sentenceZh": "為了保持健康，你應該每天晚上有充足的睡眠。",
        "otherForms": "healthier (比較級(去y加ier)), healthiest (最高級(去y加iest)), healthily (副詞(去y加ily))"
    },
    {
        "word": "painful",
        "pos": "adj.",
        "meaning": "疼痛的",
        "theme": "醫療健康",
        "sentence": "It was a painful experience, but he learned a lot from it.",
        "sentenceZh": "這是一個痛苦的經驗，但他從中學到了很多。",
        "otherForms": "more painful (比較級), most painful (最高級), painfully (副詞)"
    },
    {
        "word": "pale",
        "pos": "adj.",
        "meaning": "蒼白的",
        "theme": "醫療健康",
        "sentence": "You look pale; are you feeling sick?",
        "sentenceZh": "你看起來臉色蒼白，你生病了嗎？",
        "otherForms": "paler (比較級), palest (最高級), palely (副詞)"
    },
    {
        "word": "sick",
        "pos": "adj.",
        "meaning": "生病的",
        "theme": "醫療健康",
        "sentence": "She felt sick and had to leave work early.",
        "sentenceZh": "她覺得不舒服，只好提早下班。",
        "otherForms": "sicker (比較級), sickest (最高級), sickly (副詞)"
    },
    {
        "word": "strong",
        "pos": "adj.",
        "meaning": "強壯的",
        "theme": "醫療健康",
        "sentence": "He is strong enough to lift the heavy box.",
        "sentenceZh": "他夠強壯，搬得動那個重箱子。",
        "otherForms": "stronger (比較級), strongest (最高級), strongly (副詞)"
    },
    {
        "word": "tired",
        "pos": "adj.",
        "meaning": "疲倦的",
        "theme": "醫療健康",
        "sentence": "I am very tired after running the relay race.",
        "sentenceZh": "跑完大隊接力後我非常累。",
        "otherForms": "more tired (比較級), most tired (最高級), tiredly (副詞)"
    },
    {
        "word": "weak",
        "pos": "adj.",
        "meaning": "虛弱的",
        "theme": "醫療健康",
        "sentence": "The old man was too weak to get out of bed.",
        "sentenceZh": "老人太虛弱了，無法下床。",
        "otherForms": "weaker (比較級), weakest (最高級), weakly (副詞)"
    },
    {
        "word": "well",
        "pos": "adj. / adv.",
        "meaning": "好地；身體健康的",
        "theme": "醫療健康",
        "sentence": "She did not sleep well last night.",
        "sentenceZh": "她昨晚沒睡好。",
        "otherForms": "better (比較級(不規則)), best (最高級(不規則)), well (形副同型)"
    },
    {
        "word": "ill",
        "pos": "adj.",
        "meaning": "生病的",
        "theme": "醫療健康",
        "sentence": "He fell ill during the trip and had to rest in the hotel.",
        "sentenceZh": "他在旅行途中生病了，必須在飯店休息。",
        "otherForms": "worse (比較級(不規則)), worst (最高級(不規則))"
    },
    {
        "word": "sore",
        "pos": "adj.",
        "meaning": "痠痛的",
        "theme": "醫療健康",
        "sentence": "My legs are sore after playing badminton all afternoon.",
        "sentenceZh": "打了一整個下午的羽毛球後，我的腿很痠痛。",
        "otherForms": "sorer (比較級), sorest (最高級), sorely (副詞)"
    },
    {
        "word": "cure",
        "pos": "v. / n.",
        "meaning": "治癒",
        "theme": "醫療健康",
        "sentence": "There is still no cure for this rare disease.",
        "sentenceZh": "這種罕見疾病目前仍沒有治癒的方法。",
        "otherForms": "cures (三單), curing (ing型(去e加ing)), cured (過去式), cured (過去分詞)"
    },
    {
        "word": "recover",
        "pos": "v.",
        "meaning": "恢復；痊癒",
        "theme": "醫療健康",
        "sentence": "It will take a few weeks for her to recover from the surgery.",
        "sentenceZh": "她的手術需要幾個禮拜才能痊癒。",
        "otherForms": "recovers (三單), recovering (ing型), recovered (過去式), recovered (過去分詞)"
    },
    {
        "word": "badminton",
        "pos": "n.",
        "meaning": "羽毛球",
        "theme": "運動",
        "sentence": "Badminton is a fast sport that requires a good racket and quick feet.",
        "sentenceZh": "羽毛球是一項講求速度的運動，需要一把好球拍和靈活的腳步。",
        "otherForms": ""
    },
    {
        "word": "ball",
        "pos": "n.",
        "meaning": "球",
        "theme": "運動",
        "sentence": "Throw the ball to me!",
        "sentenceZh": "把球丟給我！",
        "otherForms": "balls (複數型)"
    },
    {
        "word": "baseball",
        "pos": "n.",
        "meaning": "棒球",
        "theme": "運動",
        "sentence": "Baseball is one of the most popular sports in Taiwan.",
        "sentenceZh": "棒球是台灣最受歡迎的運動之一。",
        "otherForms": "baseballs (複數型)"
    },
    {
        "word": "basketball",
        "pos": "n.",
        "meaning": "籃球",
        "theme": "運動",
        "sentence": "They play basketball on the school court every evening.",
        "sentenceZh": "他們每天傍晚在學校球場打籃球。",
        "otherForms": "basketballs (複數型)"
    },
    {
        "word": "bowling",
        "pos": "n.",
        "meaning": "保齡球",
        "theme": "運動",
        "sentence": "We went bowling to celebrate my friend's birthday.",
        "sentenceZh": "我們去打保齡球來慶祝朋友的生日。",
        "otherForms": ""
    },
    {
        "word": "dodge ball",
        "pos": "n.",
        "meaning": "躲避球",
        "theme": "運動",
        "sentence": "The students love playing dodge ball in PE class.",
        "sentenceZh": "學生們喜歡在體育課打躲避球。",
        "otherForms": "dodge balls (複數型)"
    },
    {
        "word": "football",
        "pos": "n.",
        "meaning": "美式足球",
        "theme": "運動",
        "sentence": "American football is a very exciting but dangerous sport.",
        "sentenceZh": "美式足球是一項非常刺激但危險的運動。",
        "otherForms": "footballs (複數型)"
    },
    {
        "word": "frisbee",
        "pos": "n.",
        "meaning": "飛盤",
        "theme": "運動",
        "sentence": "We played frisbee with our dog in the park.",
        "sentenceZh": "我們在公園和我們的狗玩飛盤。",
        "otherForms": "frisbees (複數型)"
    },
    {
        "word": "golf",
        "pos": "n.",
        "meaning": "高爾夫球",
        "theme": "運動",
        "sentence": "Playing golf requires a lot of patience and practice.",
        "sentenceZh": "打高爾夫球需要很多的耐心和練習。",
        "otherForms": ""
    },
    {
        "word": "race",
        "pos": "n. / v.",
        "meaning": "賽跑；競賽",
        "theme": "運動",
        "sentence": "He ran as fast as he could and won the race.",
        "sentenceZh": "他盡全力跑，贏得了比賽。",
        "otherForms": "races (複數型)"
    },
    {
        "word": "roller skate (roller blade)",
        "pos": "n. / v.",
        "meaning": "溜冰",
        "theme": "運動",
        "sentence": "Remember to wear a helmet when you roller skate.",
        "sentenceZh": "溜冰時記得要戴安全帽。",
        "otherForms": "roller skates (複數型)"
    },
    {
        "word": "soccer",
        "pos": "n.",
        "meaning": "足球",
        "theme": "運動",
        "sentence": "You are not allowed to touch the ball with your hands in soccer.",
        "sentenceZh": "踢足球時不允許用手碰到球。",
        "otherForms": ""
    },
    {
        "word": "softball",
        "pos": "n.",
        "meaning": "壘球",
        "theme": "運動",
        "sentence": "The girls' softball team practiced hard for the championship.",
        "sentenceZh": "女子壘球隊為了冠軍賽努力練習。",
        "otherForms": "softballs (複數型)"
    },
    {
        "word": "sport",
        "pos": "n.",
        "meaning": "運動",
        "theme": "運動",
        "sentence": "Playing sports is a great way to stay healthy and make friends.",
        "sentenceZh": "做運動是保持健康和交朋友的好方法。",
        "otherForms": "sports (複數型)"
    },
    {
        "word": "table tennis",
        "pos": "n.",
        "meaning": "桌球",
        "theme": "運動",
        "sentence": "We have a table tennis table in the basement.",
        "sentenceZh": "我們地下室有一張桌球桌。",
        "otherForms": ""
    },
    {
        "word": "tennis",
        "pos": "n.",
        "meaning": "網球",
        "theme": "運動",
        "sentence": "She hits the tennis ball with a lot of power.",
        "sentenceZh": "她擊打網球的力道很大。",
        "otherForms": ""
    },
    {
        "word": "volleyball",
        "pos": "n.",
        "meaning": "排球",
        "theme": "運動",
        "sentence": "We need six players on the court to play a volleyball game.",
        "sentenceZh": "我們需要六名球員在場上才能打排球比賽。",
        "otherForms": "volleyballs (複數型)"
    },
    {
        "word": "birthday",
        "pos": "n.",
        "meaning": "生日",
        "theme": "節慶",
        "sentence": "Happy birthday! Here is a present for you.",
        "sentenceZh": "生日快樂！這是一份給你的禮物。",
        "otherForms": "birthdays (複數型)"
    },
    {
        "word": "celebrate",
        "pos": "v.",
        "meaning": "慶祝",
        "theme": "節慶",
        "sentence": "We will celebrate his graduation with a big dinner.",
        "sentenceZh": "我們將用一頓大餐來慶祝他畢業。",
        "otherForms": "celebrates (三單), celebrating (ing型(去e加ing)), celebrated (過去式), celebrated (過去分詞)"
    },
    {
        "word": "Chinese New Year",
        "pos": "n.",
        "meaning": "春節",
        "theme": "節慶",
        "sentence": "Children often receive red envelopes during Chinese New Year.",
        "sentenceZh": "孩子們在春節期間通常會收到紅包。",
        "otherForms": ""
    },
    {
        "word": "Christmas",
        "pos": "n.",
        "meaning": "聖誕節",
        "theme": "節慶",
        "sentence": "We decorated the Christmas tree with beautiful lights.",
        "sentenceZh": "我們用美麗的燈飾裝飾了聖誕樹。",
        "otherForms": "Christmases (複數型(加es))"
    },
    {
        "word": "congratulation",
        "pos": "n.",
        "meaning": "祝賀",
        "theme": "節慶",
        "sentence": "Congratulations on winning the first prize!",
        "sentenceZh": "恭喜你贏得第一名！",
        "otherForms": "congratulations (複數型)"
    },
    {
        "word": "culture",
        "pos": "n.",
        "meaning": "文化",
        "theme": "節慶",
        "sentence": "Learning a new language helps you understand a different culture.",
        "sentenceZh": "學習新語言能幫助你了解不同的文化。",
        "otherForms": "cultures (複數型)"
    },
    {
        "word": "custom",
        "pos": "n.",
        "meaning": "習俗",
        "theme": "節慶",
        "sentence": "Giving red envelopes is a traditional Chinese custom.",
        "sentenceZh": "發紅包是傳統的華人習俗。",
        "otherForms": "customs (複數型)"
    },
    {
        "word": "Double Tenth Day",
        "pos": "n.",
        "meaning": "雙十節",
        "theme": "節慶",
        "sentence": "There are always beautiful fireworks on Double Tenth Day.",
        "sentenceZh": "雙十節總是有美麗的煙火。",
        "otherForms": ""
    },
    {
        "word": "Dragon-boat Festival",
        "pos": "n.",
        "meaning": "端午節",
        "theme": "節慶",
        "sentence": "People eat zongzi during the Dragon-boat Festival.",
        "sentenceZh": "人們在端午節時會吃粽子。",
        "otherForms": ""
    },
    {
        "word": "Easter",
        "pos": "n.",
        "meaning": "復活節",
        "theme": "節慶",
        "sentence": "We painted eggs in bright colors for Easter.",
        "sentenceZh": "我們為了復活節把彩蛋畫上鮮豔的顏色。",
        "otherForms": ""
    },
    {
        "word": "eve",
        "pos": "n.",
        "meaning": "前夕",
        "theme": "節慶",
        "sentence": "We stayed up late on New Year's Eve to watch the fireworks.",
        "sentenceZh": "我們在跨年夜熬夜看煙火。",
        "otherForms": "eves (複數型)"
    },
    {
        "word": "Father’s Day",
        "pos": "n.",
        "meaning": "父親節",
        "theme": "節慶",
        "sentence": "We bought a tie for Dad to celebrate Father's Day.",
        "sentenceZh": "我們買了一條領帶給爸爸慶祝父親節。",
        "otherForms": ""
    },
    {
        "word": "festival",
        "pos": "n.",
        "meaning": "節慶",
        "theme": "節慶",
        "sentence": "The Lantern Festival is an important traditional event.",
        "sentenceZh": "元宵節是一個重要的傳統節慶。",
        "otherForms": "festivals (複數型)"
    },
    {
        "word": "Halloween",
        "pos": "n.",
        "meaning": "萬聖節",
        "theme": "節慶",
        "sentence": "Kids wear scary costumes to go trick-or-treating on Halloween.",
        "sentenceZh": "孩子們在萬聖節穿上恐怖的服裝去玩「不給糖就搗蛋」。",
        "otherForms": ""
    },
    {
        "word": "holiday",
        "pos": "n.",
        "meaning": "假日",
        "theme": "節慶",
        "sentence": "Where are you planning to go for your summer holiday?",
        "sentenceZh": "你暑假計畫去哪裡？",
        "otherForms": "holidays (複數型)"
    },
    {
        "word": "lantern",
        "pos": "n.",
        "meaning": "燈籠",
        "theme": "節慶",
        "sentence": "We made paper lanterns in art class today.",
        "sentenceZh": "我們今天在美術課做了紙燈籠。",
        "otherForms": "lanterns (複數型)"
    },
    {
        "word": "Lantern Festival",
        "pos": "n.",
        "meaning": "元宵節",
        "theme": "節慶",
        "sentence": "Let's go to the park to see the beautiful lights for the Lantern Festival.",
        "sentenceZh": "我們去公園看元宵節美麗的花燈吧。",
        "otherForms": ""
    },
    {
        "word": "memory",
        "pos": "n.",
        "meaning": "記憶；回憶",
        "theme": "節慶",
        "sentence": "The trip to Japan is my favorite childhood memory.",
        "sentenceZh": "日本之旅是我最愛的童年回憶。",
        "otherForms": "memories (複數型(去y加ies))"
    },
    {
        "word": "Moon Festival",
        "pos": "n.",
        "meaning": "中秋節",
        "theme": "節慶",
        "sentence": "We usually have a barbecue with our family on Moon Festival.",
        "sentenceZh": "我們中秋節通常會和家人一起烤肉。",
        "otherForms": ""
    },
    {
        "word": "Mother’s Day",
        "pos": "n.",
        "meaning": "母親節",
        "theme": "節慶",
        "sentence": "I wrote a card to tell my mom I love her on Mother's Day.",
        "sentenceZh": "母親節時我寫了一張卡片告訴媽媽我愛她。",
        "otherForms": ""
    },
    {
        "word": "New Year’s Day",
        "pos": "n.",
        "meaning": "元旦",
        "theme": "節慶",
        "sentence": "We woke up early on New Year’s Day to see the sunrise.",
        "sentenceZh": "我們在元旦早起看日出。",
        "otherForms": ""
    },
    {
        "word": "New Year’s Eve",
        "pos": "n.",
        "meaning": "除夕",
        "theme": "節慶",
        "sentence": "We always have a big family dinner on New Year’s Eve.",
        "sentenceZh": "我們除夕夜總會吃一頓豐盛的年夜飯。",
        "otherForms": ""
    },
    {
        "word": "party",
        "pos": "n.",
        "meaning": "派對；政黨",
        "theme": "節慶",
        "sentence": "They had a pool party on a hot summer afternoon.",
        "sentenceZh": "他們在炎熱的夏日午後辦了一場泳池派對。",
        "otherForms": "parties (複數型(去y加ies))"
    },
    {
        "word": "Teacher’s Day",
        "pos": "n.",
        "meaning": "教師節",
        "theme": "節慶",
        "sentence": "We made a thank-you card for our English teacher on Teacher’s Day.",
        "sentenceZh": "教師節時我們做了一張感謝卡給英文老師。",
        "otherForms": ""
    },
    {
        "word": "Thanksgiving",
        "pos": "n.",
        "meaning": "感恩節",
        "theme": "節慶",
        "sentence": "We had a big turkey dinner with our family on Thanksgiving.",
        "sentenceZh": "我們在感恩節和家人吃了一頓豐盛的火雞大餐。",
        "otherForms": ""
    },
    {
        "word": "tradition",
        "pos": "n.",
        "meaning": "傳統",
        "theme": "節慶",
        "sentence": "It is a tradition in our school to sing songs before graduation.",
        "sentenceZh": "畢業前唱歌是我們學校的傳統。",
        "otherForms": "traditions (複數型)"
    },
    {
        "word": "vacation",
        "pos": "n.",
        "meaning": "假期",
        "theme": "節慶",
        "sentence": "I can't wait for the winter vacation to start!",
        "sentenceZh": "我等不及寒假開始了！",
        "otherForms": "vacations (複數型)"
    },
    {
        "word": "Valentine’s Day",
        "pos": "n.",
        "meaning": "情人節",
        "theme": "節慶",
        "sentence": "He gave his girlfriend chocolate on Valentine’s Day.",
        "sentenceZh": "他在情人節送巧克力給女朋友。",
        "otherForms": ""
    },
    {
        "word": "wedding",
        "pos": "n.",
        "meaning": "婚禮",
        "theme": "節慶",
        "sentence": "The bride looked beautiful in her white dress at the wedding.",
        "sentenceZh": "新娘在婚禮上穿著白紗，看起來非常美麗。",
        "otherForms": "weddings (複數型)"
    },
    {
        "word": "picnic",
        "pos": "n. / v.",
        "meaning": "野餐",
        "theme": "嗜好",
        "sentence": "Let's pack some sandwiches and have a picnic in the park.",
        "sentenceZh": "我們打包一些三明治，去公園野餐吧。",
        "otherForms": "picnics (複數型)"
    },
    {
        "word": "stamp",
        "pos": "n.",
        "meaning": "郵票",
        "theme": "嗜好",
        "sentence": "She collects stamps from different countries.",
        "sentenceZh": "她收集來自不同國家的郵票。",
        "otherForms": "stamps (複數型)"
    },
    {
        "word": "trip",
        "pos": "n.",
        "meaning": "旅行",
        "theme": "嗜好",
        "sentence": "Our family is planning a short trip to Dounan next weekend.",
        "sentenceZh": "我們家計畫下週末去斗南來趟小旅行。",
        "otherForms": "trips (複數型)"
    },
    {
        "word": "hobby",
        "pos": "n.",
        "meaning": "嗜好",
        "theme": "嗜好",
        "sentence": "My favorite hobby is listening to 1980s synth-pop music.",
        "sentenceZh": "我最喜歡的嗜好是聽 80 年代的合成器流行樂。",
        "otherForms": "hobbies (複數型(去y加ies))"
    },
    {
        "word": "habit",
        "pos": "n.",
        "meaning": "習慣",
        "theme": "嗜好",
        "sentence": "Reading a little English every day is a good learning habit.",
        "sentenceZh": "每天讀一點英文是個好習慣。",
        "otherForms": "habits (複數型)"
    },
    {
        "word": "interest",
        "pos": "n. / v.",
        "meaning": "興趣",
        "theme": "嗜好",
        "sentence": "He has a strong interest in learning how to write computer code.",
        "sentenceZh": "他對學習寫電腦程式碼有濃厚的興趣。",
        "otherForms": "interests (複數型)"
    },
    {
        "word": "camp",
        "pos": "n. / v.",
        "meaning": "露營",
        "theme": "嗜好",
        "sentence": "We slept in tents and made a fire at the summer camp.",
        "sentenceZh": "我們在夏令營時睡在帳篷裡並生了火。",
        "otherForms": "camps (三單), camping (ing型), camped (過去式), camped (過去分詞)"
    },
    {
        "word": "climb",
        "pos": "v. / n.",
        "meaning": "攀爬",
        "theme": "嗜好",
        "sentence": "The monkey quickly climbed to the top of the tree.",
        "sentenceZh": "猴子迅速地爬到了樹頂。",
        "otherForms": "climbs (三單), climbing (ing型), climbed (過去式), climbed (過去分詞)"
    },
    {
        "word": "dance",
        "pos": "v. / n.",
        "meaning": "跳舞",
        "theme": "嗜好",
        "sentence": "The students will dance on stage for the school festival.",
        "sentenceZh": "學生們將在校慶時在台上跳舞。",
        "otherForms": "dances (三單), dancing (ing型(去e加ing)), danced (過去式), danced (過去分詞)"
    },
    {
        "word": "draw",
        "pos": "v.",
        "meaning": "畫畫",
        "theme": "嗜好",
        "sentence": "She likes to draw pictures of cute animals in her notebook.",
        "sentenceZh": "她喜歡在筆記本上畫可愛動物的圖。",
        "otherForms": "draws (三單), drawing (ing型), drew (過去式(不規則)), drawn (過去分詞(不規則))"
    },
    {
        "word": "exercise",
        "pos": "n. / v.",
        "meaning": "運動",
        "theme": "嗜好",
        "sentence": "You should exercise for at least 30 minutes a day.",
        "sentenceZh": "你每天應該運動至少 30 分鐘。",
        "otherForms": "exercises (三單), exercising (ing型(去e加ing)), exercised (過去式), exercised (過去分詞)"
    },
    {
        "word": "fish",
        "pos": "v. / n.",
        "meaning": "釣魚",
        "theme": "嗜好",
        "sentence": "My grandfather taught me how to fish by the river.",
        "sentenceZh": "我爺爺教我如何在河邊釣魚。",
        "otherForms": "fishes (三單(加es)), fishing (ing型), fished (過去式), fished (過去分詞)"
    },
    {
        "word": "hike",
        "pos": "v. / n.",
        "meaning": "健行／遠足",
        "theme": "嗜好",
        "sentence": "We plan to hike up the mountain early tomorrow morning.",
        "sentenceZh": "我們計畫明天一早去爬山健行。",
        "otherForms": "hikes (三單), hiking (ing型(去e加ing)), hiked (過去式), hiked (過去分詞)"
    },
    {
        "word": "jog",
        "pos": "v. / n.",
        "meaning": "慢跑",
        "theme": "嗜好",
        "sentence": "I jog in the park every morning to stay healthy.",
        "sentenceZh": "為了保持健康，我每天早上在公園慢跑。",
        "otherForms": "jogs (三單), jogging (ing型(重複字尾)), jogged (過去式(重複字尾)), jogged (過去分詞(重複字尾))"
    },
    {
        "word": "roller blade",
        "pos": "v. / n.",
        "meaning": "溜直排輪",
        "theme": "嗜好",
        "sentence": "It is fun to roller blade along the riverbank.",
        "sentenceZh": "沿著河岸溜直排輪很有趣。",
        "otherForms": "roller blades (三單), roller blading (ing型(去e加ing)), roller bladed (過去式), roller bladed (過去分詞)"
    },
    {
        "word": "roller skate",
        "pos": "v. / n.",
        "meaning": "溜輪鞋",
        "theme": "嗜好",
        "sentence": "She learned how to roller skate when she was five.",
        "sentenceZh": "她五歲時就學會了溜輪鞋。",
        "otherForms": "roller skates (三單), roller skating (ing型(去e加ing)), roller skated (過去式), roller skated (過去分詞)"
    },
    {
        "word": "run",
        "pos": "v. / n.",
        "meaning": "跑步",
        "theme": "嗜好",
        "sentence": "You shouldn't run in the hallways at school.",
        "sentenceZh": "你不應該在學校走廊上跑步。",
        "otherForms": "runs (三單), running (ing型(重複字尾)), ran (過去式(不規則)), run (過去分詞(不規則))"
    },
    {
        "word": "sail",
        "pos": "v. / n.",
        "meaning": "航行",
        "theme": "嗜好",
        "sentence": "The boat will sail across the ocean to another country.",
        "sentenceZh": "這艘船將航行過海洋到另一個國家。",
        "otherForms": "sails (三單), sailing (ing型), sailed (過去式), sailed (過去分詞)"
    },
    {
        "word": "sing",
        "pos": "v.",
        "meaning": "唱歌",
        "theme": "嗜好",
        "sentence": "Let's sing a famous 80s song together!",
        "sentenceZh": "我們一起來唱一首著名的 80 年代歌曲吧！",
        "otherForms": "sings (三單), singing (ing型), sang (過去式(不規則)), sung (過去分詞(不規則))"
    },
    {
        "word": "skate",
        "pos": "v. / n.",
        "meaning": "溜冰",
        "theme": "嗜好",
        "sentence": "The kids love to skate at the park on weekends.",
        "sentenceZh": "孩子們週末喜歡在公園溜冰。",
        "otherForms": "skates (三單), skating (ing型(去e加ing)), skated (過去式), skated (過去分詞)"
    },
    {
        "word": "ski",
        "pos": "v. / n.",
        "meaning": "滑雪",
        "theme": "嗜好",
        "sentence": "We went to Japan to ski last winter.",
        "sentenceZh": "我們去年冬天去日本滑雪。",
        "otherForms": "skis (三單), skiing (ing型), skied (過去式), skied (過去分詞)"
    },
    {
        "word": "surf",
        "pos": "v. / n.",
        "meaning": "衝浪",
        "theme": "嗜好",
        "sentence": "It is very exciting to surf on the big ocean waves.",
        "sentenceZh": "在大海浪上衝浪非常刺激。",
        "otherForms": "surfs (三單), surfing (ing型), surfed (過去式), surfed (過去分詞)"
    },
    {
        "word": "swim",
        "pos": "v. / n.",
        "meaning": "游泳",
        "theme": "嗜好",
        "sentence": "I usually swim in the pool every Tuesday afternoon.",
        "sentenceZh": "我通常每個星期二下午在游泳池游泳。",
        "otherForms": "swims (三單), swimming (ing型(重複字尾)), swam (過去式(不規則)), swum (過去分詞(不規則))"
    },
    {
        "word": "travel",
        "pos": "v. / n.",
        "meaning": "旅行",
        "theme": "嗜好",
        "sentence": "Our family plans to travel to Dounan and Huwei next weekend.",
        "sentenceZh": "我們家計畫下週末去斗南和虎尾旅行。",
        "otherForms": "travels (三單), traveling (ing型), traveled (過去式), traveled (過去分詞)"
    },
    {
        "word": "barbecue",
        "pos": "n. / v.",
        "meaning": "烤肉",
        "theme": "嗜好",
        "sentence": "We had a barbecue in the backyard for the Moon Festival.",
        "sentenceZh": "我們為了中秋節在後院烤肉。",
        "otherForms": "barbecues (複數型)"
    },
    {
        "word": "album",
        "pos": "n.",
        "meaning": "相冊；專輯",
        "theme": "娛樂",
        "sentence": "I love listening to this 1980s synth-pop music album.",
        "sentenceZh": "我很喜歡聽這張 80 年代的合成器流行音樂專輯。",
        "otherForms": "albums (複數型)"
    },
    {
        "word": "band",
        "pos": "n.",
        "meaning": "樂團",
        "theme": "娛樂",
        "sentence": "My favorite 80s band is going to have a concert.",
        "sentenceZh": "我最喜歡的 80 年代樂團要開演唱會了。",
        "otherForms": "bands (複數型)"
    },
    {
        "word": "card",
        "pos": "n.",
        "meaning": "卡片",
        "theme": "娛樂",
        "sentence": "The teacher designed some beautiful phonics cards for the students.",
        "sentenceZh": "老師為學生設計了一些美麗的自然發音字卡。",
        "otherForms": "cards (複數型)"
    },
    {
        "word": "cartoon",
        "pos": "n.",
        "meaning": "卡通",
        "theme": "娛樂",
        "sentence": "My little sister watches a cartoon on TV every morning.",
        "sentenceZh": "我妹妹每天早上都在電視上看卡通。",
        "otherForms": "cartoons (複數型)"
    },
    {
        "word": "chess",
        "pos": "n.",
        "meaning": "西洋棋",
        "theme": "娛樂",
        "sentence": "Playing chess helps you practice how to think deeply.",
        "sentenceZh": "下西洋棋能幫助你練習如何深入思考。",
        "otherForms": ""
    },
    {
        "word": "comic",
        "pos": "n.",
        "meaning": "漫書",
        "theme": "娛樂",
        "sentence": "He borrowed a funny comic book from the library.",
        "sentenceZh": "他從圖書館借了一本好笑的漫畫書。",
        "otherForms": "comics (複數型)"
    },
    {
        "word": "computer game",
        "pos": "n.",
        "meaning": "電腦遊戲",
        "theme": "娛樂",
        "sentence": "The Syntax Repair computer game makes learning English grammar fun.",
        "sentenceZh": "「語法修復」電腦遊戲讓學習英文文法變有趣了。",
        "otherForms": "computer games (複數型)"
    },
    {
        "word": "doll",
        "pos": "n.",
        "meaning": "洋娃娃",
        "theme": "娛樂",
        "sentence": "She dressed her favorite doll in a pretty pink dress.",
        "sentenceZh": "她幫她最愛的洋娃娃穿上漂亮的粉紅洋裝。",
        "otherForms": "dolls (複數型)"
    },
    {
        "word": "drama",
        "pos": "n.",
        "meaning": "戲劇",
        "theme": "娛樂",
        "sentence": "The school drama club will perform a play next month.",
        "sentenceZh": "學校話劇社下個月將表演一齣戲。",
        "otherForms": "dramas (複數型)"
    },
    {
        "word": "drum",
        "pos": "n.",
        "meaning": "鼓",
        "theme": "娛樂",
        "sentence": "He plays the drums in a rock band.",
        "sentenceZh": "他在一個搖滾樂團裡打鼓。",
        "otherForms": "drums (複數型)"
    },
    {
        "word": "fan",
        "pos": "n.",
        "meaning": "粉絲；愛好者",
        "theme": "娛樂",
        "sentence": "He is a big fan of the band a-ha.",
        "sentenceZh": "他是 a-ha 樂團的超級粉絲。",
        "otherForms": "fans (複數型)"
    },
    {
        "word": "film",
        "pos": "n.",
        "meaning": "電影",
        "theme": "娛樂",
        "sentence": "We went to the theater to watch a new action film.",
        "sentenceZh": "我們去電影院看了一部新的動作電影。",
        "otherForms": "films (複數型)"
    },
    {
        "word": "flute",
        "pos": "n.",
        "meaning": "長笛",
        "theme": "娛樂",
        "sentence": "She plays the flute beautifully in the music class.",
        "sentenceZh": "她在音樂課上把長笛吹得非常優美。",
        "otherForms": "flutes (複數型)"
    },
    {
        "word": "game",
        "pos": "n.",
        "meaning": "遊戲",
        "theme": "娛樂",
        "sentence": "In the Weather Combat game, you have to build a civilization.",
        "sentenceZh": "在「天氣大戰」遊戲中，你必須建立一個文明。",
        "otherForms": "games (複數型)"
    },
    {
        "word": "guitar",
        "pos": "n.",
        "meaning": "吉他",
        "theme": "娛樂",
        "sentence": "He is learning how to play the guitar by watching videos.",
        "sentenceZh": "他正在看影片學習如何彈吉他。",
        "otherForms": "guitars (複數型)"
    },
    {
        "word": "instrument",
        "pos": "n.",
        "meaning": "樂器",
        "theme": "娛樂",
        "sentence": "The piano is my favorite musical instrument.",
        "sentenceZh": "鋼琴是我最喜歡的樂器。",
        "otherForms": "instruments (複數型)"
    },
    {
        "word": "jazz",
        "pos": "n.",
        "meaning": "爵士樂",
        "theme": "娛樂",
        "sentence": "My father likes to listen to jazz when he is reading.",
        "sentenceZh": "我爸爸看書時喜歡聽爵士樂。",
        "otherForms": ""
    },
    {
        "word": "movie",
        "pos": "n.",
        "meaning": "電影",
        "theme": "娛樂",
        "sentence": "Let's buy some popcorn before the movie starts.",
        "sentenceZh": "電影開始前我們先去買些爆米花吧。",
        "otherForms": "movies (複數型)"
    },
    {
        "word": "music",
        "pos": "n.",
        "meaning": "音樂",
        "theme": "娛樂",
        "sentence": "I have a playlist with over 2,000 music tracks on Spotify.",
        "sentenceZh": "我的 Spotify 播放清單裡有超過 2000 首音樂。",
        "otherForms": ""
    },
    {
        "word": "novel",
        "pos": "n.",
        "meaning": "小說",
        "theme": "娛樂",
        "sentence": "The Harry Potter novel is very popular around the world.",
        "sentenceZh": "哈利波特小說在全世界非常受歡迎。",
        "otherForms": "novels (複數型)"
    },
    {
        "word": "paint",
        "pos": "n. / v.",
        "meaning": "繪畫",
        "theme": "娛樂",
        "sentence": "She likes to paint pictures of flowers in her free time.",
        "sentenceZh": "她喜歡在空閒時間畫花朵的圖。",
        "otherForms": "paints (三單), painting (ing型), painted (過去式), painted (過去分詞)"
    },
    {
        "word": "piano",
        "pos": "n.",
        "meaning": "鋼琴",
        "theme": "娛樂",
        "sentence": "He practices playing the piano for an hour every day.",
        "sentenceZh": "他每天練習彈鋼琴一個小時。",
        "otherForms": "pianos (複數型)"
    },
    {
        "word": "pop music",
        "pos": "n.",
        "meaning": "流行音樂",
        "theme": "娛樂",
        "sentence": "Many teenagers love listening to Korean pop music.",
        "sentenceZh": "許多青少年喜歡聽韓國流行音樂。",
        "otherForms": ""
    },
    {
        "word": "puzzle",
        "pos": "n.",
        "meaning": "拼圖；謎題",
        "theme": "娛樂",
        "sentence": "This 1,000-piece puzzle is very difficult to finish.",
        "sentenceZh": "這個一千片的拼圖非常難完成。",
        "otherForms": "puzzles (複數型)"
    },
    {
        "word": "song",
        "pos": "n.",
        "meaning": "歌曲",
        "theme": "娛樂",
        "sentence": "The singer sang a beautiful 80s love song.",
        "sentenceZh": "歌手唱了一首優美的 80 年代情歌。",
        "otherForms": "songs (複數型)"
    },
    {
        "word": "stage",
        "pos": "n.",
        "meaning": "舞台；階段",
        "theme": "娛樂",
        "sentence": "The singer walked onto the stage.",
        "sentenceZh": "那位歌手走上了舞台。",
        "otherForms": "stages (複數型)"
    },
    {
        "word": "tale",
        "pos": "n.",
        "meaning": "故事；傳說",
        "theme": "娛樂",
        "sentence": "My grandfather told me an old fairy tale.",
        "sentenceZh": "我爺爺跟我說了一個古老的童話故事。",
        "otherForms": "tales (複數型)"
    },
    {
        "word": "team",
        "pos": "n.",
        "meaning": "隊伍",
        "theme": "娛樂",
        "sentence": "The badminton team practices swinging their rackets after school.",
        "sentenceZh": "羽球隊放學後練習揮拍。",
        "otherForms": "teams (複數型)"
    },
    {
        "word": "tent",
        "pos": "n.",
        "meaning": "帳篷",
        "theme": "娛樂",
        "sentence": "We set up our tent near the river for the camping trip.",
        "sentenceZh": "為了露營之旅，我們在河邊搭起帳篷。",
        "otherForms": "tents (複數型)"
    },
    {
        "word": "toy",
        "pos": "n.",
        "meaning": "玩具",
        "theme": "娛樂",
        "sentence": "The baby is playing with a colorful wooden toy.",
        "sentenceZh": "小嬰兒正在玩一個彩色的木製玩具。",
        "otherForms": "toys (複數型)"
    },
    {
        "word": "trumpet",
        "pos": "n.",
        "meaning": "小喇叭",
        "theme": "娛樂",
        "sentence": "He blew the trumpet loudly during the parade.",
        "sentenceZh": "他在遊行時大聲吹奏小喇叭。",
        "otherForms": "trumpets (複數型)"
    },
    {
        "word": "violin",
        "pos": "n.",
        "meaning": "小提琴",
        "theme": "娛樂",
        "sentence": "She won first prize in the violin competition.",
        "sentenceZh": "她在小提琴比賽中獲得第一名。",
        "otherForms": "violins (複數型)"
    },
    {
        "word": "time",
        "pos": "n.",
        "meaning": "時間",
        "theme": "時間",
        "sentence": "What time does the English class start?",
        "sentenceZh": "英文課幾點開始？",
        "otherForms": "times (複數型)"
    },
    {
        "word": "century",
        "pos": "n.",
        "meaning": "世紀",
        "theme": "時間",
        "sentence": "We are living in the 21st century.",
        "sentenceZh": "我們生活在 21 世紀。",
        "otherForms": "centuries (複數型(去y加ies))"
    },
    {
        "word": "year",
        "pos": "n.",
        "meaning": "年",
        "theme": "時間",
        "sentence": "There are 365 days in a common year.",
        "sentenceZh": "平年有 365 天。",
        "otherForms": "years (複數型)"
    },
    {
        "word": "season",
        "pos": "n.",
        "meaning": "季節",
        "theme": "時間",
        "sentence": "Summer is my favorite season because I can eat ice cream.",
        "sentenceZh": "夏天是我最喜歡的季節，因為可以吃冰淇淋。",
        "otherForms": "seasons (複數型)"
    },
    {
        "word": "month",
        "pos": "n.",
        "meaning": "月",
        "theme": "時間",
        "sentence": "My birthday is in the month of August.",
        "sentenceZh": "我的生日在八月。",
        "otherForms": "months (複數型)"
    },
    {
        "word": "day",
        "pos": "n.",
        "meaning": "天",
        "theme": "時間",
        "sentence": "I spend an hour writing HTML code every day.",
        "sentenceZh": "我每天花一個小時寫 HTML 程式碼。",
        "otherForms": "days (複數型)"
    },
    {
        "word": "hour",
        "pos": "n.",
        "meaning": "小時",
        "theme": "時間",
        "sentence": "The bus trip to Taipei takes about three hours.",
        "sentenceZh": "到台北的公車車程大約需要三個小時。",
        "otherForms": "hours (複數型)"
    },
    {
        "word": "minute",
        "pos": "n.",
        "meaning": "分鐘",
        "theme": "時間",
        "sentence": "The quiz will start in five minutes.",
        "sentenceZh": "小考將在五分鐘後開始。",
        "otherForms": "minutes (複數型)"
    },
    {
        "word": "second",
        "pos": "n.",
        "meaning": "秒",
        "theme": "時間",
        "sentence": "He ran 100 meters in just 12 seconds.",
        "sentenceZh": "他只花了 12 秒就跑完 100 公尺。",
        "otherForms": "seconds (複數型)"
    },
    {
        "word": "dawn",
        "pos": "n.",
        "meaning": "黎明",
        "theme": "時間",
        "sentence": "The farmer wakes up at dawn to work in the field.",
        "sentenceZh": "農夫在黎明時分起床去田裡工作。",
        "otherForms": "dawns (複數型)"
    },
    {
        "word": "morning",
        "pos": "n.",
        "meaning": "早晨",
        "theme": "時間",
        "sentence": "Good morning! Did you sleep well last night?",
        "sentenceZh": "早安！你昨晚睡得好嗎？",
        "otherForms": "mornings (複數型)"
    },
    {
        "word": "noon",
        "pos": "n.",
        "meaning": "中午",
        "theme": "時間",
        "sentence": "We usually have lunch at noon.",
        "sentenceZh": "我們通常在中午吃午餐。",
        "otherForms": "noons (複數型)"
    },
    {
        "word": "afternoon",
        "pos": "n.",
        "meaning": "下午",
        "theme": "時間",
        "sentence": "Let's play badminton this afternoon.",
        "sentenceZh": "我們今天下午來打羽毛球吧。",
        "otherForms": "afternoons (複數型)"
    },
    {
        "word": "evening",
        "pos": "n.",
        "meaning": "傍晚",
        "theme": "時間",
        "sentence": "My family eats dinner together every evening.",
        "sentenceZh": "我們家每天傍晚都會一起吃晚餐。",
        "otherForms": "evenings (複數型)"
    },
    {
        "word": "night",
        "pos": "n.",
        "meaning": "夜晚",
        "theme": "時間",
        "sentence": "The stars look very bright in the sky at night.",
        "sentenceZh": "夜晚天空中的星星看起來非常明亮。",
        "otherForms": "nights (複數型)"
    },
    {
        "word": "midnight",
        "pos": "n.",
        "meaning": "午夜",
        "theme": "時間",
        "sentence": "You shouldn't stay up playing games until midnight.",
        "sentenceZh": "你不應該熬夜玩遊戲到午夜。",
        "otherForms": "midnights (複數型)"
    },
    {
        "word": "Monday",
        "pos": "n.",
        "meaning": "星期一",
        "theme": "時間",
        "sentence": "We have a school assembly every Monday morning.",
        "sentenceZh": "我們每個星期一早上都有學校朝會。",
        "otherForms": "Mondays (複數型)"
    },
    {
        "word": "Tuesday",
        "pos": "n.",
        "meaning": "星期二",
        "theme": "時間",
        "sentence": "I have a piano lesson on Tuesday afternoon.",
        "sentenceZh": "我星期二下午有鋼琴課。",
        "otherForms": "Tuesdays (複數型)"
    },
    {
        "word": "Wednesday",
        "pos": "n.",
        "meaning": "星期三",
        "theme": "時間",
        "sentence": "We only go to school for half a day on Wednesday.",
        "sentenceZh": "我們星期三只上半天學。",
        "otherForms": "Wednesdays (複數型)"
    },
    {
        "word": "Thursday",
        "pos": "n.",
        "meaning": "星期四",
        "theme": "時間",
        "sentence": "Our English test is scheduled for next Thursday.",
        "sentenceZh": "我們的英文考試安排在下星期四。",
        "otherForms": "Thursdays (複數型)"
    },
    {
        "word": "Friday",
        "pos": "n.",
        "meaning": "星期五",
        "theme": "時間",
        "sentence": "Everyone is happy when Friday arrives.",
        "sentenceZh": "星期五到來時每個人都很開心。",
        "otherForms": "Fridays (複數型)"
    },
    {
        "word": "Saturday",
        "pos": "n.",
        "meaning": "星期六",
        "theme": "時間",
        "sentence": "I am going to the movies with my friends this Saturday.",
        "sentenceZh": "這個星期六我要和朋友去看電影。",
        "otherForms": "Saturdays (複數型)"
    },
    {
        "word": "Sunday",
        "pos": "n.",
        "meaning": "星期日",
        "theme": "時間",
        "sentence": "My family goes to church every Sunday morning.",
        "sentenceZh": "我的家人每個星期日早上都去教堂。",
        "otherForms": "Sundays (複數型)"
    },
    {
        "word": "week",
        "pos": "n.",
        "meaning": "星期；週",
        "theme": "時間",
        "sentence": "There are seven days in a week.",
        "sentenceZh": "一個星期有七天。",
        "otherForms": "weeks (複數型)"
    },
    {
        "word": "weekday",
        "pos": "n.",
        "meaning": "平日（週一至週五）",
        "theme": "時間",
        "sentence": "I am very busy studying on weekdays.",
        "sentenceZh": "我在平日非常忙於學習。",
        "otherForms": "weekdays (複數型)"
    },
    {
        "word": "weekend",
        "pos": "n.",
        "meaning": "週末",
        "theme": "時間",
        "sentence": "What are your plans for the weekend?",
        "sentenceZh": "你週末有什麼計畫？",
        "otherForms": "weekends (複數型)"
    },
    {
        "word": "January",
        "pos": "n.",
        "meaning": "一月",
        "theme": "時間",
        "sentence": "January is the first month of the year.",
        "sentenceZh": "一月是一年中的第一個月。",
        "otherForms": ""
    },
    {
        "word": "February",
        "pos": "n.",
        "meaning": "二月",
        "theme": "時間",
        "sentence": "February usually has only 28 days.",
        "sentenceZh": "二月通常只有 28 天。",
        "otherForms": ""
    },
    {
        "word": "March",
        "pos": "n.",
        "meaning": "三月",
        "theme": "時間",
        "sentence": "The weather starts to get warmer in March.",
        "sentenceZh": "天氣在三月開始變暖。",
        "otherForms": ""
    },
    {
        "word": "April",
        "pos": "n.",
        "meaning": "四月",
        "theme": "時間",
        "sentence": "It often rains a lot during April.",
        "sentenceZh": "四月期間經常下雨。",
        "otherForms": ""
    },
    {
        "word": "May",
        "pos": "n.",
        "meaning": "五月",
        "theme": "時間",
        "sentence": "Mother's Day is usually celebrated in May.",
        "sentenceZh": "母親節通常在五月慶祝。",
        "otherForms": ""
    },
    {
        "word": "June",
        "pos": "n.",
        "meaning": "六月",
        "theme": "時間",
        "sentence": "Many junior high school students graduate in June.",
        "sentenceZh": "許多國中生在六月畢業。",
        "otherForms": ""
    },
    {
        "word": "July",
        "pos": "n.",
        "meaning": "七月",
        "theme": "時間",
        "sentence": "Summer vacation begins in July.",
        "sentenceZh": "暑假在七月開始。",
        "otherForms": ""
    },
    {
        "word": "August",
        "pos": "n.",
        "meaning": "八月",
        "theme": "時間",
        "sentence": "It is very hot and sunny in August.",
        "sentenceZh": "八月非常炎熱且陽光普照。",
        "otherForms": ""
    },
    {
        "word": "September",
        "pos": "n.",
        "meaning": "九月",
        "theme": "時間",
        "sentence": "The new school semester starts in September.",
        "sentenceZh": "新學期在九月開始。",
        "otherForms": ""
    },
    {
        "word": "October",
        "pos": "n.",
        "meaning": "十月",
        "theme": "時間",
        "sentence": "We celebrate Double Tenth Day in October.",
        "sentenceZh": "我們在十月慶祝雙十節。",
        "otherForms": ""
    },
    {
        "word": "November",
        "pos": "n.",
        "meaning": "十一月",
        "theme": "時間",
        "sentence": "The weather turns cool in November.",
        "sentenceZh": "天氣在十一月轉涼。",
        "otherForms": ""
    },
    {
        "word": "December",
        "pos": "n.",
        "meaning": "十二月",
        "theme": "時間",
        "sentence": "Christmas is celebrated on the 25th of December.",
        "sentenceZh": "聖誕節在十二月二十五日慶祝。",
        "otherForms": ""
    },
    {
        "word": "spring",
        "pos": "n.",
        "meaning": "春天",
        "theme": "時間",
        "sentence": "The flowers start to bloom in spring.",
        "sentenceZh": "花朵在春天開始綻放。",
        "otherForms": "springs (複數型)"
    },
    {
        "word": "summer",
        "pos": "n.",
        "meaning": "夏天",
        "theme": "時間",
        "sentence": "We like to go swimming in the hot summer.",
        "sentenceZh": "我們喜歡在炎熱的夏天去游泳。",
        "otherForms": "summers (複數型)"
    },
    {
        "word": "autumn",
        "pos": "n.",
        "meaning": "秋天",
        "theme": "時間",
        "sentence": "The leaves turn red and fall from the trees in autumn.",
        "sentenceZh": "樹葉在秋天變紅並從樹上掉落。",
        "otherForms": "autumns (複數型)"
    },
    {
        "word": "winter",
        "pos": "n.",
        "meaning": "冬天",
        "theme": "時間",
        "sentence": "It is cold enough to wear a heavy coat in winter.",
        "sentenceZh": "冬天天氣冷到需要穿厚外套。",
        "otherForms": "winters (複數型)"
    },
    {
        "word": "today",
        "pos": "n.",
        "meaning": "今天",
        "theme": "時間",
        "sentence": "What are we going to learn in English class today?",
        "sentenceZh": "我們今天英文課要學什麼？",
        "otherForms": ""
    },
    {
        "word": "tonight",
        "pos": "n.",
        "meaning": "今晚",
        "theme": "時間",
        "sentence": "Don't forget to finish your homework tonight.",
        "sentenceZh": "今晚別忘了寫完回家作業。",
        "otherForms": ""
    },
    {
        "word": "tomorrow",
        "pos": "n.",
        "meaning": "明天",
        "theme": "時間",
        "sentence": "We will have a badminton game tomorrow.",
        "sentenceZh": "我們明天有一場羽球比賽。",
        "otherForms": ""
    },
    {
        "word": "yesterday",
        "pos": "n.",
        "meaning": "昨天",
        "theme": "時間",
        "sentence": "I saw a funny video on YouTube yesterday.",
        "sentenceZh": "我昨天在 YouTube 上看到一部搞笑的影片。",
        "otherForms": ""
    },
    {
        "word": "p.m.",
        "pos": "n.",
        "meaning": "晚上時間",
        "theme": "時間",
        "sentence": "The store closes at 10:00 p.m.",
        "sentenceZh": "這家店在晚上十點關門。",
        "otherForms": ""
    },
    {
        "word": "a.m.",
        "pos": "n.",
        "meaning": "早上時間",
        "theme": "時間",
        "sentence": "The first class starts at 8:15 a.m.",
        "sentenceZh": "第一節課在早上 8:15 開始。",
        "otherForms": ""
    },
    {
        "word": "o'clock",
        "pos": "n.",
        "meaning": "…點鐘",
        "theme": "時間",
        "sentence": "I usually go to bed at ten o'clock.",
        "sentenceZh": "我通常在十點鐘睡覺。",
        "otherForms": ""
    },
    {
        "word": "past",
        "pos": "n.",
        "meaning": "過（用於時間）",
        "theme": "時間",
        "sentence": "It is a quarter past three right now.",
        "sentenceZh": "現在是三點十五分。",
        "otherForms": ""
    },
    {
        "word": "quarter",
        "pos": "n.",
        "meaning": "一刻鐘；四分之一",
        "theme": "時間",
        "sentence": "Cut the apple into four quarters.",
        "sentenceZh": "把蘋果切成四等分。",
        "otherForms": "quarters (複數型)"
    },
    {
        "word": "half",
        "pos": "n.",
        "meaning": "一半",
        "theme": "時間",
        "sentence": "He ate half of the pizza by himself.",
        "sentenceZh": "他自己吃掉了一半的披薩。",
        "otherForms": "halves (複數型(去f加ves))"
    },
    {
        "word": "age",
        "pos": "n.",
        "meaning": "年齡；時代",
        "theme": "時間",
        "sentence": "We live in the age of computers and the Internet.",
        "sentenceZh": "我們生活在電腦與網路的時代。",
        "otherForms": "ages (複數型)"
    },
    {
        "word": "period",
        "pos": "n.",
        "meaning": "時期",
        "theme": "時間",
        "sentence": "We have a short rest period between classes.",
        "sentenceZh": "我們在兩節課之間有短暫的休息時期。",
        "otherForms": "periods (複數型)"
    },
    {
        "word": "childhood",
        "pos": "n.",
        "meaning": "童年",
        "theme": "時間",
        "sentence": "Playing outside was my favorite part of childhood.",
        "sentenceZh": "在外面玩耍是我童年最喜歡的部分。",
        "otherForms": "childhoods (複數型)"
    },
    {
        "word": "moment",
        "pos": "n.",
        "meaning": "片刻",
        "theme": "時間",
        "sentence": "Please wait a moment; the teacher will be right back.",
        "sentenceZh": "請等一下，老師馬上回來。",
        "otherForms": "moments (複數型)"
    },
    {
        "word": "calendar",
        "pos": "n.",
        "meaning": "日曆",
        "theme": "時間",
        "sentence": "I marked the exam date on my wall calendar.",
        "sentenceZh": "我把考試日期標記在牆上的日曆上。",
        "otherForms": "calendars (複數型)"
    },
    {
        "word": "clock",
        "pos": "n.",
        "meaning": "時鐘",
        "theme": "時間",
        "sentence": "The clock on the wall says it is time to go home.",
        "sentenceZh": "牆上的時鐘顯示該回家了。",
        "otherForms": "clocks (複數型)"
    },
    {
        "word": "watch",
        "pos": "n.",
        "meaning": "手錶",
        "theme": "時間",
        "sentence": "He checked his smart watch to see how many steps he walked.",
        "sentenceZh": "他查看智慧手錶看自己走了幾步。",
        "otherForms": "watches (複數型(加es))"
    },
    {
        "word": "stopwatch",
        "pos": "n.",
        "meaning": "碼表",
        "theme": "時間",
        "sentence": "The PE teacher used a stopwatch to time our running.",
        "sentenceZh": "體育老師用碼表來為我們的跑步計時。",
        "otherForms": "stopwatches (複數型(加es))"
    },
    {
        "word": "future",
        "pos": "n.",
        "meaning": "未來",
        "theme": "時間",
        "sentence": "I want to be a software engineer in the future.",
        "sentenceZh": "我未來想成為一名軟體工程師。",
        "otherForms": "futures (複數型)"
    },
    {
        "word": "current",
        "pos": "adj.",
        "meaning": "當前的",
        "theme": "時間",
        "sentence": "Our current lesson is about grammar rules.",
        "sentenceZh": "我們當前的課程是關於文法規則。",
        "otherForms": "currently (副詞)"
    },
    {
        "word": "early",
        "pos": "adj. / adv.",
        "meaning": "早的",
        "theme": "時間",
        "sentence": "You should sleep early so you won't be late for school.",
        "sentenceZh": "你應該早點睡，這樣上學才不會遲到。",
        "otherForms": "earlier (比較級(去y加ier)), earliest (最高級(去y加iest)), early (形副同型)"
    },
    {
        "word": "last",
        "pos": "adj. / adv.",
        "meaning": "上一個的；最後的",
        "theme": "時間",
        "sentence": "I passed the English test last week!",
        "sentenceZh": "我上週通過了英文考試！",
        "otherForms": ""
    },
    {
        "word": "late",
        "pos": "adj. / adv.",
        "meaning": "晚的",
        "theme": "時間",
        "sentence": "Don't be late for the badminton practice.",
        "sentenceZh": "羽球練習別遲到。",
        "otherForms": "later (比較級), latest (最高級), late (形副同型)"
    },
    {
        "word": "next",
        "pos": "adj. / adv.",
        "meaning": "下一個的",
        "theme": "時間",
        "sentence": "I will see you in the next class.",
        "sentenceZh": "我們下節課見。",
        "otherForms": ""
    },
    {
        "word": "daily",
        "pos": "adj. / adv.",
        "meaning": "每日的",
        "theme": "時間",
        "sentence": "Reading vocabulary cards is my daily routine.",
        "sentenceZh": "讀單字卡是我的每日例行公事。",
        "otherForms": "daily (形副同型)"
    },
    {
        "word": "ago",
        "pos": "adv.",
        "meaning": "以前",
        "theme": "時間",
        "sentence": "I started learning HTML coding a few months ago.",
        "sentenceZh": "我幾個月前開始學習寫 HTML 程式碼。",
        "otherForms": ""
    },
    {
        "word": "already",
        "pos": "adv.",
        "meaning": "已經",
        "theme": "時間",
        "sentence": "She has already finished the grammar game.",
        "sentenceZh": "她已經完成了文法遊戲。",
        "otherForms": ""
    },
    {
        "word": "later",
        "pos": "adv.",
        "meaning": "稍後",
        "theme": "時間",
        "sentence": "I will finish building the web page later.",
        "sentenceZh": "我稍後會把網頁做完。",
        "otherForms": ""
    },
    {
        "word": "now",
        "pos": "adv. / n.",
        "meaning": "現在",
        "theme": "時間",
        "sentence": "We are listening to the teacher now.",
        "sentenceZh": "我們現在正在聽老師說話。",
        "otherForms": ""
    },
    {
        "word": "once",
        "pos": "adv. / conj.",
        "meaning": "曾經；一次",
        "theme": "時間",
        "sentence": "I brush my teeth at least once after every meal.",
        "sentenceZh": "我每餐飯後至少刷一次牙。",
        "otherForms": ""
    },
    {
        "word": "soon",
        "pos": "adv.",
        "meaning": "很快；不久",
        "theme": "時間",
        "sentence": "The school bell will ring very soon.",
        "sentenceZh": "學校的鐘聲很快就會響了。",
        "otherForms": "sooner (比較級), soonest (最高級)"
    },
    {
        "word": "world",
        "pos": "n.",
        "meaning": "世界",
        "theme": "地方位置",
        "sentence": "English is spoken by many people around the world.",
        "sentenceZh": "全世界有很多人說英文。",
        "otherForms": "worlds (複數型)"
    },
    {
        "word": "nation",
        "pos": "n.",
        "meaning": "國度",
        "theme": "地方位置",
        "sentence": "Our nation has a lot of beautiful mountains.",
        "sentenceZh": "我們的國家有許多美麗的高山。",
        "otherForms": "nations (複數型)"
    },
    {
        "word": "China",
        "pos": "n.",
        "meaning": "中國",
        "theme": "地方位置",
        "sentence": "The Great Wall is located in China.",
        "sentenceZh": "萬里長城位於中國。",
        "otherForms": ""
    },
    {
        "word": "R.O.C./ROC",
        "pos": "n.",
        "meaning": "中華民國",
        "theme": "地方位置",
        "sentence": "R.O.C. stands for the Republic of China.",
        "sentenceZh": "R.O.C. 是中華民國的縮寫。",
        "otherForms": ""
    },
    {
        "word": "Taiwan",
        "pos": "n.",
        "meaning": "台灣",
        "theme": "地方位置",
        "sentence": "Yunlin County is located in the middle of Taiwan.",
        "sentenceZh": "雲林縣位於台灣的中部。",
        "otherForms": ""
    },
    {
        "word": "U.S.A./ USA",
        "pos": "n.",
        "meaning": "美國",
        "theme": "地方位置",
        "sentence": "The USA is a very large country in North America.",
        "sentenceZh": "美國是北美洲一個非常大的國家。",
        "otherForms": ""
    },
    {
        "word": "position",
        "pos": "n.",
        "meaning": "位置",
        "theme": "地方位置",
        "sentence": "In badminton, your foot position is very important.",
        "sentenceZh": "在羽球運動中，你腳的位置非常重要。",
        "otherForms": "positions (複數型)"
    },
    {
        "word": "back",
        "pos": "adj. / n.",
        "meaning": "後面的",
        "theme": "地方位置",
        "sentence": "Please sit in the back row of the classroom.",
        "sentenceZh": "請坐在教室的後排。",
        "otherForms": "backs (複數型)"
    },
    {
        "word": "front",
        "pos": "adj. / n.",
        "meaning": "前面的",
        "theme": "地方位置",
        "sentence": "The teacher stands in the front of the class.",
        "sentenceZh": "老師站在全班的前面。",
        "otherForms": "fronts (複數型)"
    },
    {
        "word": "upper",
        "pos": "adj. / n.",
        "meaning": "上面的",
        "theme": "地方位置",
        "sentence": "The books are on the upper shelf of the bookcase.",
        "sentenceZh": "書在書櫃上面的架子上。",
        "otherForms": ""
    },
    {
        "word": "backward",
        "pos": "adv. / adj.",
        "meaning": "向後",
        "theme": "地方位置",
        "sentence": "He took a step backward to look at the big picture.",
        "sentenceZh": "他向後退了一步來看這幅大圖。",
        "otherForms": "backwards (副詞)"
    },
    {
        "word": "forward",
        "pos": "adv. / adj.",
        "meaning": "向前",
        "theme": "地方位置",
        "sentence": "Please step forward when I call your name.",
        "sentenceZh": "叫到你的名字時請向前走一步。",
        "otherForms": "forwards (副詞)"
    },
    {
        "word": "here",
        "pos": "adv. / n.",
        "meaning": "這裡",
        "theme": "地方位置",
        "sentence": "Put your homework on my desk right here.",
        "sentenceZh": "把你的作業放在我書桌這裡。",
        "otherForms": ""
    },
    {
        "word": "there",
        "pos": "adv. / n.",
        "meaning": "那裡",
        "theme": "地方位置",
        "sentence": "Look over there; the train is coming!",
        "sentenceZh": "看那裡，火車來了！",
        "otherForms": ""
    },
    {
        "word": "center",
        "pos": "n.",
        "meaning": "中心",
        "theme": "地方位置",
        "sentence": "The basketball court is in the center of the school.",
        "sentenceZh": "籃球場在學校的中心。",
        "otherForms": "centers (複數型)"
    },
    {
        "word": "central",
        "pos": "adj.",
        "meaning": "中心的",
        "theme": "地方位置",
        "sentence": "Taichung is a big city in central Taiwan.",
        "sentenceZh": "台中是台灣中部的一個大城市。",
        "otherForms": "centrally (副詞)"
    },
    {
        "word": "middle",
        "pos": "adj. / n.",
        "meaning": "中間的",
        "theme": "地方位置",
        "sentence": "He wrote his name in the middle of the paper.",
        "sentenceZh": "他把名字寫在紙的中間。",
        "otherForms": "middles (複數型)"
    },
    {
        "word": "edge",
        "pos": "n.",
        "meaning": "邊緣",
        "theme": "地方位置",
        "sentence": "Don't place your glass on the edge of the table.",
        "sentenceZh": "別把你的杯子放在桌子邊緣。",
        "otherForms": "edges (複數型)"
    },
    {
        "word": "side",
        "pos": "n.",
        "meaning": "邊；側",
        "theme": "地方位置",
        "sentence": "There are tall trees on both sides of the road.",
        "sentenceZh": "馬路兩側都有高大的樹木。",
        "otherForms": "sides (複數型)"
    },
    {
        "word": "corner",
        "pos": "n.",
        "meaning": "角落",
        "theme": "地方位置",
        "sentence": "The convenience store is right at the street corner.",
        "sentenceZh": "便利商店就在街角。",
        "otherForms": "corners (複數型)"
    },
    {
        "word": "direction",
        "pos": "n.",
        "meaning": "方向",
        "theme": "地方位置",
        "sentence": "The map will show you the right direction.",
        "sentenceZh": "地圖會為你指引正確的方向。",
        "otherForms": "directions (複數型)"
    },
    {
        "word": "east",
        "pos": "n. / adj. / adv.",
        "meaning": "東方的",
        "theme": "地方位置",
        "sentence": "The sun always rises in the east.",
        "sentenceZh": "太陽總是從東方升起。",
        "otherForms": ""
    },
    {
        "word": "west",
        "pos": "n. / adj. / adv.",
        "meaning": "西方的",
        "theme": "地方位置",
        "sentence": "Look at the beautiful sunset in the west.",
        "sentenceZh": "看西方那美麗的夕陽。",
        "otherForms": ""
    },
    {
        "word": "south",
        "pos": "n. / adj. / adv.",
        "meaning": "南方的",
        "theme": "地方位置",
        "sentence": "Tainan is a famous city in south Taiwan.",
        "sentenceZh": "台南是南台灣一座有名的城市。",
        "otherForms": ""
    },
    {
        "word": "north",
        "pos": "n. / adj. / adv.",
        "meaning": "北方的",
        "theme": "地方位置",
        "sentence": "Taipei is located in the north of Taiwan.",
        "sentenceZh": "台北位於台灣北部。",
        "otherForms": ""
    },
    {
        "word": "left",
        "pos": "n. / adj. / adv.",
        "meaning": "左邊的",
        "theme": "地方位置",
        "sentence": "Turn left at the next traffic light.",
        "sentenceZh": "在下一個紅綠燈左轉。",
        "otherForms": ""
    },
    {
        "word": "right",
        "pos": "n. / adj. / adv.",
        "meaning": "右邊的；正確的",
        "theme": "地方位置",
        "sentence": "Keep to the right side when walking on the stairs.",
        "sentenceZh": "走樓梯時請靠右邊走。",
        "otherForms": "rightly (副詞)"
    },
    {
        "word": "top",
        "pos": "n. / adj.",
        "meaning": "頂部(的)",
        "theme": "地方位置",
        "sentence": "The hiker climbed to the top of the mountain.",
        "sentenceZh": "登山者爬到了山頂。",
        "otherForms": "tops (複數型)"
    },
    {
        "word": "bottom",
        "pos": "n.",
        "meaning": "底部",
        "theme": "地方位置",
        "sentence": "You can find the page number at the bottom of the book.",
        "sentenceZh": "你可以在書的底部找到頁碼。",
        "otherForms": "bottoms (複數型)"
    },
    {
        "word": "area",
        "pos": "n.",
        "meaning": "區域",
        "theme": "地方位置",
        "sentence": "This area is known for growing delicious fruit.",
        "sentenceZh": "這個區域以種植美味的水果聞名。",
        "otherForms": "areas (複數型)"
    },
    {
        "word": "universe",
        "pos": "n.",
        "meaning": "宇宙",
        "theme": "大自然",
        "sentence": "There are billions of stars in the universe.",
        "sentenceZh": "宇宙中有數十億顆星星。",
        "otherForms": "universes (複數型)"
    },
    {
        "word": "nature",
        "pos": "n.",
        "meaning": "大自然",
        "theme": "大自然",
        "sentence": "We should do our best to protect nature.",
        "sentenceZh": "我們應該盡力保護大自然。",
        "otherForms": ""
    },
    {
        "word": "natural",
        "pos": "adj.",
        "meaning": "自然的",
        "theme": "大自然",
        "sentence": "Honey is a natural sweetener for tea.",
        "sentenceZh": "蜂蜜是泡茶的自然甜味劑。",
        "otherForms": "naturally (副詞)"
    },
    {
        "word": "scene",
        "pos": "n.",
        "meaning": "場景",
        "theme": "大自然",
        "sentence": "The fighting scene in the movie was very exciting.",
        "sentenceZh": "電影裡的打鬥場景非常刺激。",
        "otherForms": "scenes (複數型)"
    },
    {
        "word": "scenery",
        "pos": "n.",
        "meaning": "風景",
        "theme": "大自然",
        "sentence": "The mountain scenery along the road is beautiful.",
        "sentenceZh": "沿路的群山風景很美。",
        "otherForms": ""
    },
    {
        "word": "sight",
        "pos": "n.",
        "meaning": "景象",
        "theme": "大自然",
        "sentence": "The colorful hot air balloons were an amazing sight.",
        "sentenceZh": "色彩繽紛的熱氣球是個驚人的景象。",
        "otherForms": "sights (複數型)"
    },
    {
        "word": "environment",
        "pos": "n.",
        "meaning": "環境",
        "theme": "大自然",
        "sentence": "Planting trees is a good way to save our environment.",
        "sentenceZh": "種樹是拯救我們環境的好方法。",
        "otherForms": "environments (複數型)"
    },
    {
        "word": "ground",
        "pos": "n.",
        "meaning": "地面",
        "theme": "大自然",
        "sentence": "The apple fell from the tree to the ground.",
        "sentenceZh": "蘋果從樹上掉到了地面。",
        "otherForms": "grounds (複數型)"
    },
    {
        "word": "desert",
        "pos": "n.",
        "meaning": "沙漠",
        "theme": "大自然",
        "sentence": "Camels can walk for days in the hot desert.",
        "sentenceZh": "駱駝能在炎熱的沙漠中走上好幾天。",
        "otherForms": "deserts (複數型)"
    },
    {
        "word": "hill",
        "pos": "n.",
        "meaning": "山丘",
        "theme": "大自然",
        "sentence": "The children enjoyed rolling down the green hill.",
        "sentenceZh": "孩子們喜歡從綠色的山丘上滾下來。",
        "otherForms": "hills (複數型)"
    },
    {
        "word": "island",
        "pos": "n.",
        "meaning": "島嶼",
        "theme": "大自然",
        "sentence": "They took a boat to a beautiful small island.",
        "sentenceZh": "他們搭船去了一個美麗的小島嶼。",
        "otherForms": "islands (複數型)"
    },
    {
        "word": "mountain",
        "pos": "n.",
        "meaning": "山",
        "theme": "大自然",
        "sentence": "We went hiking in the mountains during the vacation.",
        "sentenceZh": "我們假期時去山裡健行。",
        "otherForms": "mountains (複數型)"
    },
    {
        "word": "plain",
        "pos": "n. / adj.",
        "meaning": "平原",
        "theme": "大自然",
        "sentence": "Horses like to run freely on the wide plain.",
        "sentenceZh": "馬兒喜歡在寬廣的平原上自由奔跑。",
        "otherForms": "plains (複數型)"
    },
    {
        "word": "valley",
        "pos": "n.",
        "meaning": "山谷",
        "theme": "大自然",
        "sentence": "There is a quiet little village down in the valley.",
        "sentenceZh": "山谷下有一個寧靜的小村莊。",
        "otherForms": "valleys (複數型)"
    },
    {
        "word": "sea",
        "pos": "n.",
        "meaning": "海",
        "theme": "大自然",
        "sentence": "Many kinds of fish live deep under the sea.",
        "sentenceZh": "海底深處住著許多種類的魚。",
        "otherForms": "seas (複數型)"
    },
    {
        "word": "ocean",
        "pos": "n.",
        "meaning": "海洋",
        "theme": "大自然",
        "sentence": "The Pacific is the largest ocean in the world.",
        "sentenceZh": "太平洋是世界上最大的海洋。",
        "otherForms": "oceans (複數型)"
    },
    {
        "word": "beach",
        "pos": "n.",
        "meaning": "海灘",
        "theme": "大自然",
        "sentence": "We played with the sand on the beach.",
        "sentenceZh": "我們在海灘上玩沙子。",
        "otherForms": "beaches (複數型(加es))"
    },
    {
        "word": "coast",
        "pos": "n.",
        "meaning": "海岸",
        "theme": "大自然",
        "sentence": "The weather on the coast is often very windy.",
        "sentenceZh": "海岸邊的天氣通常風很大。",
        "otherForms": "coasts (複數型)"
    },
    {
        "word": "lake",
        "pos": "n.",
        "meaning": "湖泊",
        "theme": "大自然",
        "sentence": "We rented a small boat to row on the lake.",
        "sentenceZh": "我們租了一艘小船在湖泊上划。",
        "otherForms": "lakes (複數型)"
    },
    {
        "word": "pond",
        "pos": "n.",
        "meaning": "池塘",
        "theme": "大自然",
        "sentence": "There are many cute frogs jumping by the pond.",
        "sentenceZh": "池塘邊有許多可愛的青蛙在跳。",
        "otherForms": "ponds (複數型)"
    },
    {
        "word": "pool",
        "pos": "n.",
        "meaning": "水池",
        "theme": "大自然",
        "sentence": "Please don't run around the swimming pool.",
        "sentenceZh": "請不要在游泳池畔奔跑。",
        "otherForms": "pools (複數型)"
    },
    {
        "word": "river",
        "pos": "n.",
        "meaning": "河流",
        "theme": "大自然",
        "sentence": "We rode our bicycles along the long river.",
        "sentenceZh": "我們沿著長長的河流騎腳踏車。",
        "otherForms": "rivers (複數型)"
    },
    {
        "word": "spring",
        "pos": "n.",
        "meaning": "泉水",
        "theme": "大自然",
        "sentence": "The water from the mountain spring is very clean and cold.",
        "sentenceZh": "高山泉水非常乾淨且冰涼。",
        "otherForms": "springs (複數型)"
    },
    {
        "word": "stream",
        "pos": "n.",
        "meaning": "溪流",
        "theme": "大自然",
        "sentence": "The little boy caught a small fish in the stream.",
        "sentenceZh": "小男孩在溪流裡抓到了一條小魚。",
        "otherForms": "streams (複數型)"
    },
    {
        "word": "waterfall",
        "pos": "n.",
        "meaning": "瀑布",
        "theme": "大自然",
        "sentence": "We took a picture in front of a beautiful waterfall.",
        "sentenceZh": "我們在一個美麗的瀑布前拍了照。",
        "otherForms": "waterfalls (複數型)"
    },
    {
        "word": "bank",
        "pos": "n.",
        "meaning": "河岸",
        "theme": "大自然",
        "sentence": "We sat on the river bank to enjoy the view.",
        "sentenceZh": "我們坐在河岸上欣賞風景。",
        "otherForms": "banks (複數型)"
    },
    {
        "word": "shore",
        "pos": "n.",
        "meaning": "岸",
        "theme": "大自然",
        "sentence": "The waves crashed loudly against the shore.",
        "sentenceZh": "海浪大聲地拍打著岸邊。",
        "otherForms": "shores (複數型)"
    },
    {
        "word": "water",
        "pos": "n. / v.",
        "meaning": "水/澆水、流口水",
        "theme": "大自然",
        "sentence": "You should drink more water after playing sports.",
        "sentenceZh": "運動後你應該多喝水。",
        "otherForms": ""
    },
    {
        "word": "ice",
        "pos": "n.",
        "meaning": "冰",
        "theme": "大自然",
        "sentence": "Would you like some ice in your juice?",
        "sentenceZh": "你的果汁裡要加些冰塊嗎？",
        "otherForms": ""
    },
    {
        "word": "steam",
        "pos": "n.",
        "meaning": "蒸汽",
        "theme": "大自然",
        "sentence": "Steam rises from the pot when the water is boiling.",
        "sentenceZh": "水滾時鍋子會冒出蒸汽。",
        "otherForms": ""
    },
    {
        "word": "cloud",
        "pos": "n.",
        "meaning": "雲",
        "theme": "大自然",
        "sentence": "Look at that big dark cloud; it is going to rain.",
        "sentenceZh": "看那大烏雲，快要下雨了。",
        "otherForms": "clouds (複數型)"
    },
    {
        "word": "fire",
        "pos": "n.",
        "meaning": "火",
        "theme": "大自然",
        "sentence": "We sat around the camp fire to keep warm.",
        "sentenceZh": "我們圍繞著營火取暖。",
        "otherForms": "fires (複數型)"
    },
    {
        "word": "heat",
        "pos": "n.",
        "meaning": "熱",
        "theme": "大自然",
        "sentence": "The heat from the sun makes me sweat.",
        "sentenceZh": "太陽的熱度讓我流汗。",
        "otherForms": ""
    },
    {
        "word": "stone",
        "pos": "n.",
        "meaning": "石頭",
        "theme": "大自然",
        "sentence": "The old bridge is made entirely of stone.",
        "sentenceZh": "那座古老的橋完全是用石頭建造的。",
        "otherForms": "stones (複數型)"
    },
    {
        "word": "rock",
        "pos": "n.",
        "meaning": "岩石",
        "theme": "大自然",
        "sentence": "The hikers climbed carefully over the large rocks.",
        "sentenceZh": "健行者小心地爬過大岩石。",
        "otherForms": "rocks (複數型)"
    },
    {
        "word": "sand",
        "pos": "n.",
        "meaning": "沙子",
        "theme": "大自然",
        "sentence": "The children are building a castle with sand.",
        "sentenceZh": "孩子們正在用沙子堆城堡。",
        "otherForms": "sands (複數型)"
    },
    {
        "word": "mud",
        "pos": "n.",
        "meaning": "泥巴",
        "theme": "大自然",
        "sentence": "Try not to step in the mud after the rain.",
        "sentenceZh": "下雨後盡量別踩到泥巴。",
        "otherForms": ""
    },
    {
        "word": "clay",
        "pos": "n.",
        "meaning": "黏土",
        "theme": "大自然",
        "sentence": "The students are making cups out of clay.",
        "sentenceZh": "學生們正在用黏土做杯子。",
        "otherForms": ""
    },
    {
        "word": "metal",
        "pos": "n.",
        "meaning": "金屬",
        "theme": "大自然",
        "sentence": "This strong door is made of solid metal.",
        "sentenceZh": "這扇堅固的門是用實心金屬做的。",
        "otherForms": "metals (複數型)"
    },
    {
        "word": "wood",
        "pos": "n.",
        "meaning": "木材",
        "theme": "大自然",
        "sentence": "My father built a birdhouse out of wood.",
        "sentenceZh": "我爸爸用木材做了一個鳥屋。",
        "otherForms": "woods (複數型)"
    },
    {
        "word": "rubber",
        "pos": "n.",
        "meaning": "橡膠",
        "theme": "大自然",
        "sentence": "The tires on a car are made of thick rubber.",
        "sentenceZh": "汽車的輪胎是用厚橡膠做的。",
        "otherForms": "rubbers (複數型)"
    },
    {
        "word": "poison",
        "pos": "n. / v.",
        "meaning": "毒/下毒",
        "theme": "大自然",
        "sentence": "Never eat a wild mushroom, it might contain poison.",
        "sentenceZh": "千萬別吃野菇，它可能含有毒素。",
        "otherForms": "poisons (複數型)"
    },
    {
        "word": "gas",
        "pos": "n.",
        "meaning": "氣態；瓦斯；汽油",
        "theme": "大自然",
        "sentence": "We stopped at the station to put more gas in the car.",
        "sentenceZh": "我們在加油站停下來為汽車加汽油。",
        "otherForms": "gases (複數型(加es))"
    },
    {
        "word": "liquid",
        "pos": "n.",
        "meaning": "液體",
        "theme": "大自然",
        "sentence": "Water and milk are both examples of liquids.",
        "sentenceZh": "水和牛奶都是液體的例子。",
        "otherForms": "liquids (複數型)"
    },
    {
        "word": "temperature",
        "pos": "n.",
        "meaning": "溫度",
        "theme": "大自然",
        "sentence": "The temperature will drop below 10 degrees tonight.",
        "sentenceZh": "今晚的溫度將降到 10 度以下。",
        "otherForms": "temperatures (複數型)"
    },
    {
        "word": "air",
        "pos": "n.",
        "meaning": "空氣",
        "theme": "大自然",
        "sentence": "The fresh air in the mountains is very good for you.",
        "sentenceZh": "山上的新鮮空氣對你很好。",
        "otherForms": ""
    },
    {
        "word": "nest",
        "pos": "n.",
        "meaning": "鳥巢",
        "theme": "大自然",
        "sentence": "The mother bird is feeding her babies in the nest.",
        "sentenceZh": "母鳥正在鳥巢裡餵寶寶。",
        "otherForms": "nests (複數型)"
    },
    {
        "word": "sky",
        "pos": "n.",
        "meaning": "天空",
        "theme": "大自然",
        "sentence": "The clear blue sky makes everyone feel happy.",
        "sentenceZh": "晴朗湛藍的天空讓每個人都覺得開心。",
        "otherForms": "skies (複數型(去y加ies))"
    },
    {
        "word": "planet",
        "pos": "n.",
        "meaning": "行星",
        "theme": "大自然",
        "sentence": "Earth is the third planet from the sun.",
        "sentenceZh": "地球是距離太陽第三近的行星。",
        "otherForms": "planets (複數型)"
    },
    {
        "word": "earth",
        "pos": "n.",
        "meaning": "地球",
        "theme": "大自然",
        "sentence": "We must work together to protect the earth.",
        "sentenceZh": "我們必須一起努力保護地球。",
        "otherForms": "earths (複數型)"
    },
    {
        "word": "moon",
        "pos": "n.",
        "meaning": "月亮",
        "theme": "大自然",
        "sentence": "The full moon looks beautiful on the Moon Festival.",
        "sentenceZh": "中秋節的滿月看起來很美。",
        "otherForms": "moons (複數型)"
    },
    {
        "word": "sun",
        "pos": "n.",
        "meaning": "太陽",
        "theme": "大自然",
        "sentence": "The sun gives us light and warmth every day.",
        "sentenceZh": "太陽每天給予我們光和溫暖。",
        "otherForms": "suns (複數型)"
    },
    {
        "word": "star",
        "pos": "n.",
        "meaning": "星星",
        "theme": "大自然",
        "sentence": "You can see many stars in the dark night sky.",
        "sentenceZh": "在漆黑的夜空中你能看到許多星星。",
        "otherForms": "stars (複數型)"
    },
    {
        "word": "earthquake",
        "pos": "n.",
        "meaning": "地震",
        "theme": "大自然",
        "sentence": "We practice hiding under our desks during an earthquake drill.",
        "sentenceZh": "我們在地震演習時練習躲在書桌下。",
        "otherForms": "earthquakes (複數型)"
    },
    {
        "word": "plant",
        "pos": "n. / v.",
        "meaning": "植物；種植",
        "theme": "大自然",
        "sentence": "I am going to plant some tomatoes in the garden.",
        "sentenceZh": "我打算在花園裡種植一些番茄。",
        "otherForms": "plants (複數型), plants (三單), planting (ing型), planted (過去式/分詞)"
    },
    {
        "word": "forest",
        "pos": "n.",
        "meaning": "森林",
        "theme": "大自然",
        "sentence": "There are many wild animals living in the deep forest.",
        "sentenceZh": "森林深處住著許多野生動物。",
        "otherForms": "forests (複數型)"
    },
    {
        "word": "tree",
        "pos": "n.",
        "meaning": "樹",
        "theme": "大自然",
        "sentence": "We sat under the big tree to read books.",
        "sentenceZh": "我們坐在大樹下看書。",
        "otherForms": "trees (複數型)"
    },
    {
        "word": "grass",
        "pos": "n.",
        "meaning": "草",
        "theme": "大自然",
        "sentence": "Please do not walk on the green grass.",
        "sentenceZh": "請不要踐踏綠草皮。",
        "otherForms": "grasses (複數型(加es))"
    },
    {
        "word": "woods",
        "pos": "n.",
        "meaning": "樹林",
        "theme": "大自然",
        "sentence": "We took a quiet walk through the woods.",
        "sentenceZh": "我們在樹林裡安靜地散步。",
        "otherForms": "woods (單複數同型)"
    },
    {
        "word": "branch",
        "pos": "n.",
        "meaning": "樹枝；分支",
        "theme": "大自然",
        "sentence": "The monkey swung from one branch to another.",
        "sentenceZh": "猴子從一根樹枝盪到另一根樹枝。",
        "otherForms": "branches (複數型(加es))"
    },
    {
        "word": "flower",
        "pos": "n.",
        "meaning": "花",
        "theme": "大自然",
        "sentence": "She bought a beautiful red flower for her mother.",
        "sentenceZh": "她買了一朵美麗的紅花給她媽媽。",
        "otherForms": "flowers (複數型)"
    },
    {
        "word": "leaf",
        "pos": "n.",
        "meaning": "葉子",
        "theme": "大自然",
        "sentence": "Look at this green leaf I found in the garden.",
        "sentenceZh": "看我在花園找到的這片綠葉。",
        "otherForms": "leaves (複數型(去f加ves))"
    },
    {
        "word": "root",
        "pos": "n.",
        "meaning": "根",
        "theme": "大自然",
        "sentence": "A tree gets water from the ground through its roots.",
        "sentenceZh": "樹木透過根從地下吸收水分。",
        "otherForms": "roots (複數型)"
    },
    {
        "word": "seed",
        "pos": "n.",
        "meaning": "種子",
        "theme": "大自然",
        "sentence": "We put a little sunflower seed into the soil.",
        "sentenceZh": "我們把一顆小小的向日葵種子放進土壤裡。",
        "otherForms": "seeds (複數型)"
    },
    {
        "word": "rose",
        "pos": "n.",
        "meaning": "玫瑰",
        "theme": "大自然",
        "sentence": "The red rose is a symbol of true love.",
        "sentenceZh": "紅玫瑰是真愛的象徵。",
        "otherForms": "roses (複數型)"
    },
    {
        "word": "voice",
        "pos": "n.",
        "meaning": "聲音",
        "theme": "大自然",
        "sentence": "The teacher has a very clear and loud voice.",
        "sentenceZh": "老師的聲音非常清晰宏亮。",
        "otherForms": "voices (複數型)"
    },
    {
        "word": "noise",
        "pos": "n.",
        "meaning": "噪音",
        "theme": "大自然",
        "sentence": "Please stop making that loud noise in the library.",
        "sentenceZh": "請不要在圖書館製造巨大的噪音。",
        "otherForms": "noises (複數型)"
    },
    {
        "word": "pollution",
        "pos": "n.",
        "meaning": "污染",
        "theme": "大自然",
        "sentence": "Riding bicycles is a good way to reduce air pollution.",
        "sentenceZh": "騎腳踏車是減少空氣污染的好方法。",
        "otherForms": ""
    },
    {
        "word": "trace",
        "pos": "n. / v.",
        "meaning": "痕跡；追蹤",
        "theme": "大自然",
        "sentence": "We found animal traces on the wet mud.",
        "sentenceZh": "我們在溼泥巴上發現了動物的痕跡。",
        "otherForms": "traces (複數型), traces (三單), tracing (ing型(去e加ing)), traced (過去式/分詞)"
    },
    {
        "word": "basket",
        "pos": "n.",
        "meaning": "籃子",
        "theme": "居家",
        "sentence": "Put the dirty clothes in the laundry basket.",
        "sentenceZh": "把髒衣服放進洗衣籃裡。",
        "otherForms": "baskets (複數型)"
    },
    {
        "word": "brick",
        "pos": "n.",
        "meaning": "磚塊",
        "theme": "居家",
        "sentence": "The little pig built a strong house made of bricks.",
        "sentenceZh": "小豬用磚塊蓋了一間堅固的房子。",
        "otherForms": "bricks (複數型)"
    },
    {
        "word": "bucket",
        "pos": "n.",
        "meaning": "水桶",
        "theme": "居家",
        "sentence": "We used a red bucket to carry water.",
        "sentenceZh": "我們用一個紅水桶來提水。",
        "otherForms": "buckets (複數型)"
    },
    {
        "word": "candle",
        "pos": "n.",
        "meaning": "蠟燭",
        "theme": "居家",
        "sentence": "He blew out the candles on his birthday cake.",
        "sentenceZh": "他吹熄了生日蛋糕上的蠟燭。",
        "otherForms": "candles (複數型)"
    },
    {
        "word": "hammer",
        "pos": "n.",
        "meaning": "鐵鎚",
        "theme": "居家",
        "sentence": "You need a hammer to hit the nail into the wood.",
        "sentenceZh": "你需要一把鐵鎚把釘子釘進木頭裡。",
        "otherForms": "hammers (複數型), hammers (三單), hammering (ing型), hammered (過去式/分詞)"
    },
    {
        "word": "housework",
        "pos": "n.",
        "meaning": "家事",
        "theme": "居家",
        "sentence": "Helping with housework makes parents very happy.",
        "sentenceZh": "幫忙做家事會讓父母很開心。",
        "otherForms": ""
    },
    {
        "word": "key",
        "pos": "n.",
        "meaning": "鑰匙",
        "theme": "居家",
        "sentence": "I cannot open the door without my key.",
        "sentenceZh": "沒有鑰匙我打不開門。",
        "otherForms": "keys (複數型)"
    },
    {
        "word": "mat",
        "pos": "n.",
        "meaning": "地墊",
        "theme": "居家",
        "sentence": "Please wipe your shoes on the door mat before coming in.",
        "sentenceZh": "進來前請在門邊的地墊上擦拭你的鞋子。",
        "otherForms": "mats (複數型)"
    },
    {
        "word": "needle",
        "pos": "n.",
        "meaning": "針",
        "theme": "居家",
        "sentence": "She used a needle and thread to fix my shirt.",
        "sentenceZh": "她用針線修補了我的襯衫。",
        "otherForms": "needles (複數型)"
    },
    {
        "word": "toilet",
        "pos": "n.",
        "meaning": "馬桶",
        "theme": "居家",
        "sentence": "Please remember to flush the toilet after using it.",
        "sentenceZh": "使用後請記得沖馬桶。",
        "otherForms": "toilets (複數型)"
    },
    {
        "word": "trash can",
        "pos": "n.",
        "meaning": "垃圾桶",
        "theme": "居家",
        "sentence": "Throw the paper cup into the trash can, please.",
        "sentenceZh": "請把紙杯丟進垃圾桶。",
        "otherForms": "trash cans (複數型)"
    },
    {
        "word": "tube",
        "pos": "n.",
        "meaning": "管子",
        "theme": "居家",
        "sentence": "The toothpaste comes out of a plastic tube.",
        "sentenceZh": "牙膏從塑膠管裡擠出來。",
        "otherForms": "tubes (複數型)"
    },
    {
        "word": "umbrella",
        "pos": "n.",
        "meaning": "雨傘",
        "theme": "居家",
        "sentence": "Don't forget to take an umbrella; it might rain later.",
        "sentenceZh": "別忘了帶雨傘，等一下可能會下雨。",
        "otherForms": "umbrellas (複數型)"
    },
    {
        "word": "build",
        "pos": "v.",
        "meaning": "建造",
        "theme": "居家",
        "sentence": "We are going to build a sandbox in the garden.",
        "sentenceZh": "我們打算在花園裡建造一個沙坑。",
        "otherForms": "builds (三單), building (ing型), built (過去式(不規則)), built (過去分詞(不規則))"
    },
    {
        "word": "clean",
        "pos": "v. / adj.",
        "meaning": "清潔",
        "theme": "居家",
        "sentence": "It is time to clean the blackboard after class.",
        "sentenceZh": "下課後該把黑板清潔乾淨了。",
        "otherForms": "cleaner (比較級), cleanest (最高級), cleanly (副詞), cleans (三單)"
    },
    {
        "word": "decorate",
        "pos": "v.",
        "meaning": "裝飾",
        "theme": "居家",
        "sentence": "We will decorate the classroom for the Halloween party.",
        "sentenceZh": "我們將為了萬聖節派對裝飾教室。",
        "otherForms": "decorates (三單), decorating (ing型(去e加ing)), decorated (過去式/分詞)"
    },
    {
        "word": "design",
        "pos": "v. / n.",
        "meaning": "設計",
        "theme": "居家",
        "sentence": "I want to design an interactive web game for my students.",
        "sentenceZh": "我想為我的學生設計一款互動網頁遊戲。",
        "otherForms": "designs (複數型), designs (三單), designing (ing型), designed (過去式/分詞)"
    },
    {
        "word": "fix",
        "pos": "v.",
        "meaning": "修理",
        "theme": "居家",
        "sentence": "Can you help me fix my broken bicycle?",
        "sentenceZh": "你能幫我修理壞掉的腳踏車嗎？",
        "otherForms": "fixes (三單(加es)), fixing (ing型), fixed (過去式/分詞)"
    },
    {
        "word": "repair",
        "pos": "v. / n.",
        "meaning": "修復",
        "theme": "居家",
        "sentence": "The Syntax Repair game helps you fix wrong sentences.",
        "sentenceZh": "「語法修復」遊戲能幫助你修正錯誤的句子。",
        "otherForms": "repairs (複數型), repairs (三單), repairing (ing型), repaired (過去式/分詞)"
    },
    {
        "word": "sweep",
        "pos": "v.",
        "meaning": "清掃",
        "theme": "居家",
        "sentence": "Please sweep the floor until it is completely clean.",
        "sentenceZh": "請清掃地板直到它完全乾淨。",
        "otherForms": "sweeps (三單), sweeping (ing型), swept (過去式(不規則)), swept (過去分詞(不規則))"
    },
    {
        "word": "wash",
        "pos": "v.",
        "meaning": "清洗",
        "theme": "居家",
        "sentence": "You must wash your hands before eating dinner.",
        "sentenceZh": "吃晚餐前你必須清洗雙手。",
        "otherForms": "washes (三單(加es)), washing (ing型), washed (過去式/分詞)"
    },
    {
        "word": "apartment",
        "pos": "n.",
        "meaning": "公寓",
        "theme": "廳室",
        "sentence": "My aunt lives in a nice apartment in Taipei.",
        "sentenceZh": "我阿姨住在台北一間很棒的公寓裡。",
        "otherForms": "apartments (複數型)"
    },
    {
        "word": "balcony",
        "pos": "n.",
        "meaning": "陽台",
        "theme": "廳室",
        "sentence": "She stood on the balcony to enjoy the night breeze.",
        "sentenceZh": "她站在陽台上享受晚風。",
        "otherForms": "balconies (複數型(去y加ies))"
    },
    {
        "word": "basement",
        "pos": "n.",
        "meaning": "地下室",
        "theme": "廳室",
        "sentence": "We keep our old toys in a box in the basement.",
        "sentenceZh": "我們把舊玩具放在地下室的箱子裡。",
        "otherForms": "basements (複數型)"
    },
    {
        "word": "bathroom",
        "pos": "n.",
        "meaning": "浴室",
        "theme": "廳室",
        "sentence": "I am going to take a hot shower in the bathroom.",
        "sentenceZh": "我打算去浴室洗個熱水澡。",
        "otherForms": "bathrooms (複數型)"
    },
    {
        "word": "bedroom",
        "pos": "n.",
        "meaning": "臥室",
        "theme": "廳室",
        "sentence": "Your bedroom is very messy; you need to clean it up.",
        "sentenceZh": "你的臥室很亂，你需要把它整理乾淨。",
        "otherForms": "bedrooms (複數型)"
    },
    {
        "word": "building",
        "pos": "n.",
        "meaning": "建築物",
        "theme": "廳室",
        "sentence": "Taipei 101 is one of the tallest buildings in the world.",
        "sentenceZh": "台北 101 是世界上最高的建築物之一。",
        "otherForms": "buildings (複數型)"
    },
    {
        "word": "ceiling",
        "pos": "n.",
        "meaning": "天花板",
        "theme": "廳室",
        "sentence": "The fan is hanging from the middle of the ceiling.",
        "sentenceZh": "電風扇掛在天花板中央。",
        "otherForms": "ceilings (複數型)"
    },
    {
        "word": "dining room",
        "pos": "n.",
        "meaning": "餐廳",
        "theme": "廳室",
        "sentence": "Our family eats dinner together in the dining room.",
        "sentenceZh": "我們一家人在餐廳一起吃晚餐。",
        "otherForms": "dining rooms (複數型)"
    },
    {
        "word": "door",
        "pos": "n.",
        "meaning": "門",
        "theme": "廳室",
        "sentence": "Please close the door quietly when you leave.",
        "sentenceZh": "你離開時請輕輕關上門。",
        "otherForms": "doors (複數型)"
    },
    {
        "word": "downstairs",
        "pos": "adv. / n.",
        "meaning": "樓下",
        "theme": "廳室",
        "sentence": "I ran downstairs quickly when I smelled the breakfast.",
        "sentenceZh": "我聞到早餐香味就快速地跑下樓。",
        "otherForms": ""
    },
    {
        "word": "fence",
        "pos": "n.",
        "meaning": "柵欄",
        "theme": "廳室",
        "sentence": "The dog jumped over the wooden fence and ran away.",
        "sentenceZh": "狗跳過木柵欄跑走了。",
        "otherForms": "fences (複數型)"
    },
    {
        "word": "floor",
        "pos": "n.",
        "meaning": "地板；樓層",
        "theme": "廳室",
        "sentence": "Our classroom is located on the third floor.",
        "sentenceZh": "我們的教室位於三樓。",
        "otherForms": "floors (複數型)"
    },
    {
        "word": "garage",
        "pos": "n.",
        "meaning": "車庫",
        "theme": "廳室",
        "sentence": "My father parked his car inside the garage.",
        "sentenceZh": "我爸爸把車停進車庫裡。",
        "otherForms": "garages (複數型)"
    },
    {
        "word": "garden",
        "pos": "n.",
        "meaning": "花園",
        "theme": "廳室",
        "sentence": "My mother grows beautiful roses in the front garden.",
        "sentenceZh": "我媽媽在前院花園種了美麗的玫瑰花。",
        "otherForms": "gardens (複數型)"
    },
    {
        "word": "gate",
        "pos": "n.",
        "meaning": "大門",
        "theme": "廳室",
        "sentence": "The school gate will close at 7:30 a.m.",
        "sentenceZh": "學校大門將在早上 7:30 關閉。",
        "otherForms": "gates (複數型)"
    },
    {
        "word": "hall",
        "pos": "n.",
        "meaning": "走廊；大廳",
        "theme": "廳室",
        "sentence": "Please don't run in the school hall.",
        "sentenceZh": "請不要在學校走廊奔跑。",
        "otherForms": "halls (複數型)"
    },
    {
        "word": "home",
        "pos": "n. / adv.",
        "meaning": "家",
        "theme": "廳室",
        "sentence": "It feels so good to be back home after a long day.",
        "sentenceZh": "漫長的一天後回到家感覺真好。",
        "otherForms": "homes (複數型)"
    },
    {
        "word": "house",
        "pos": "n.",
        "meaning": "房子",
        "theme": "廳室",
        "sentence": "They just bought a new house in Dounan.",
        "sentenceZh": "他們剛在斗南買了一間新房子。",
        "otherForms": "houses (複數型)"
    },
    {
        "word": "kitchen",
        "pos": "n.",
        "meaning": "廚房",
        "theme": "廳室",
        "sentence": "The smell of fried rice is coming from the kitchen.",
        "sentenceZh": "炒飯的香味從廚房飄了出來。",
        "otherForms": "kitchens (複數型)"
    },
    {
        "word": "living room",
        "pos": "n.",
        "meaning": "客廳",
        "theme": "廳室",
        "sentence": "We sit in the living room to watch TV together.",
        "sentenceZh": "我們坐在客廳一起看電視。",
        "otherForms": "living rooms (複數型)"
    },
    {
        "word": "roof",
        "pos": "n.",
        "meaning": "屋頂",
        "theme": "廳室",
        "sentence": "The heavy rain was hitting hard on the roof.",
        "sentenceZh": "大雨重重地打在屋頂上。",
        "otherForms": "roofs (複數型)"
    },
    {
        "word": "room",
        "pos": "n.",
        "meaning": "房間",
        "theme": "廳室",
        "sentence": "Can you help me carry these books to my room?",
        "sentenceZh": "你能幫我把這些書搬到我房間嗎？",
        "otherForms": "rooms (複數型)"
    },
    {
        "word": "stairs",
        "pos": "n.",
        "meaning": "樓梯",
        "theme": "廳室",
        "sentence": "Be careful when you walk up the wet stairs.",
        "sentenceZh": "走上潮濕的樓梯時要小心。",
        "otherForms": "stairs (複數型)"
    },
    {
        "word": "upstairs",
        "pos": "adv. / n.",
        "meaning": "樓上",
        "theme": "廳室",
        "sentence": "His bedroom is located upstairs.",
        "sentenceZh": "他的臥室位在樓上。",
        "otherForms": ""
    },
    {
        "word": "wall",
        "pos": "n.",
        "meaning": "牆",
        "theme": "廳室",
        "sentence": "The teacher put a big world map on the wall.",
        "sentenceZh": "老師在牆上貼了一張大世界地圖。",
        "otherForms": "walls (複數型)"
    },
    {
        "word": "window",
        "pos": "n.",
        "meaning": "窗戶",
        "theme": "廳室",
        "sentence": "Open the window to let some fresh air in.",
        "sentenceZh": "打開窗戶讓一些新鮮空氣進來。",
        "otherForms": "windows (複數型)"
    },
    {
        "word": "yard",
        "pos": "n.",
        "meaning": "院子",
        "theme": "廳室",
        "sentence": "My dog loves to run and play in the back yard.",
        "sentenceZh": "我的狗喜歡在後院奔跑玩耍。",
        "otherForms": "yards (複數型)"
    },
    {
        "word": "weather",
        "pos": "n.",
        "meaning": "天氣",
        "theme": "天氣",
        "sentence": "We should check the weather before we play badminton outside.",
        "sentenceZh": "我們去戶外打羽球前應該先確認天氣。",
        "otherForms": ""
    },
    {
        "word": "climate",
        "pos": "n.",
        "meaning": "氣候",
        "theme": "天氣",
        "sentence": "The climate in southern Taiwan is usually warm and sunny.",
        "sentenceZh": "台灣南部的氣候通常是溫暖且陽光普照的。",
        "otherForms": "climates (複數型)"
    },
    {
        "word": "clear",
        "pos": "adj. / v.",
        "meaning": "晴朗的；使淨空",
        "theme": "天氣",
        "sentence": "The sky is very clear and blue today.",
        "sentenceZh": "今天的天空非常晴朗湛藍。",
        "otherForms": "clearer (比較級), clearest (最高級), clearly (副詞(很清楚地)), clears (三單), clearing (現在分詞), cleared (過去/ 過去分詞)"
    },
    {
        "word": "cloudy",
        "pos": "adj.",
        "meaning": "多雲的",
        "theme": "天氣",
        "sentence": "It is cloudy right now; I think it might rain later.",
        "sentenceZh": "現在多雲，我覺得等一下可能會下雨。",
        "otherForms": "cloudier (比較級(去y加ier)), cloudiest (最高級(去y加iest))"
    },
    {
        "word": "cold",
        "pos": "adj. / n.",
        "meaning": "寒冷的",
        "theme": "天氣",
        "sentence": "I need to wear a heavy coat when the weather is cold.",
        "sentenceZh": "天氣寒冷時我需要穿厚外套。",
        "otherForms": "colder (比較級), coldest (最高級), coldly (副詞)"
    },
    {
        "word": "cool",
        "pos": "adj. / v.",
        "meaning": "涼爽的；酷的",
        "theme": "天氣",
        "sentence": "The autumn breeze feels very cool and comfortable.",
        "sentenceZh": "秋天的微風吹起來非常涼爽舒服。",
        "otherForms": "cooler (比較級), coolest (最高級)"
    },
    {
        "word": "dry",
        "pos": "adj. / v.",
        "meaning": "乾燥的；使乾燥",
        "theme": "天氣",
        "sentence": "The land is very dry because it hasn't rained for months.",
        "sentenceZh": "因為幾個月沒下雨了，土地非常乾燥。",
        "otherForms": "drier (比較級(去y加ier)), driest (最高級(去y加iest)), dries (三單(去y加ies)), drying (現在分詞), dried (過去/ 過去分詞 (去y加ied))"
    },
    {
        "word": "foggy",
        "pos": "adj.",
        "meaning": "有霧的",
        "theme": "天氣",
        "sentence": "It is dangerous to drive a car when it is highly foggy.",
        "sentenceZh": "起大霧時開車是很危險的。",
        "otherForms": "foggier (比較級(去y加ier)), foggiest (最高級(去y加iest))"
    },
    {
        "word": "freezing",
        "pos": "adj.",
        "meaning": "極冷的",
        "theme": "天氣",
        "sentence": "Put on your gloves; it is freezing outside!",
        "sentenceZh": "戴上你的手套，外面冷極了！",
        "otherForms": "more freezing (比較級), most freezing (最高級)"
    },
    {
        "word": "hot",
        "pos": "adj.",
        "meaning": "炎熱的",
        "theme": "天氣",
        "sentence": "It is too hot to run on the playground at noon.",
        "sentenceZh": "中午在操場上跑步太熱了。",
        "otherForms": "hotter (比較級(重複字尾)), hottest (最高級(重複字尾)), hotly (副詞)"
    },
    {
        "word": "humid",
        "pos": "adj.",
        "meaning": "潮濕的",
        "theme": "天氣",
        "sentence": "The air feels very heavy and humid before a summer storm.",
        "sentenceZh": "夏日暴風雨前，空氣感覺非常沉重潮濕。",
        "otherForms": "more humid (比較級), most humid (最高級)"
    },
    {
        "word": "rainy",
        "pos": "adj.",
        "meaning": "下雨的",
        "theme": "天氣",
        "sentence": "You should take an umbrella with you on a rainy day.",
        "sentenceZh": "在下雨天你應該隨身攜帶雨傘。",
        "otherForms": "rainier (比較級(去y加ier)), rainiest (最高級(去y加iest))"
    },
    {
        "word": "snowy",
        "pos": "adj.",
        "meaning": "下雪的",
        "theme": "天氣",
        "sentence": "We built a big snowman together on a snowy morning.",
        "sentenceZh": "我們在一個下雪的早晨一起堆了個大雪人。",
        "otherForms": "snowier (比較級(去y加ier)), snowiest (最高級(去y加iest))"
    },
    {
        "word": "stormy",
        "pos": "adj.",
        "meaning": "暴風雨的",
        "theme": "天氣",
        "sentence": "The fishing boats cannot go out to sea in stormy weather.",
        "sentenceZh": "漁船在暴風雨的天氣無法出海。",
        "otherForms": "stormier (比較級(去y加ier)), stormiest (最高級(去y加iest))"
    },
    {
        "word": "sunny",
        "pos": "adj.",
        "meaning": "陽光充足的",
        "theme": "天氣",
        "sentence": "Let's ride our bikes to the park on this sunny day.",
        "sentenceZh": "我們在這個陽光普照的日子騎腳踏車去公園吧。",
        "otherForms": "sunnier (比較級(去y加ier)), sunniest (最高級(去y加iest))"
    },
    {
        "word": "warm",
        "pos": "adj. / v.",
        "meaning": "溫暖的；使溫暖",
        "theme": "天氣",
        "sentence": "The warm sunlight feels so good in the winter.",
        "sentenceZh": "冬天裡溫暖的陽光感覺真好。",
        "otherForms": "warmer (比較級), warmest (最高級), warmly (副詞), warms (三單), warming (現在分詞), warmed (過去/過去分詞)"
    },
    {
        "word": "wet",
        "pos": "adj.",
        "meaning": "潮濕的",
        "theme": "天氣",
        "sentence": "My shoes got wet in the heavy rain.",
        "sentenceZh": "我的鞋子在傾盆大雨中弄濕了。",
        "otherForms": "wetter (比較級(重複字尾)), wettest (最高級(重複字尾))"
    },
    {
        "word": "windy",
        "pos": "adj.",
        "meaning": "多風的",
        "theme": "天氣",
        "sentence": "It is too windy to play badminton outdoors today.",
        "sentenceZh": "今天風太大，不適合在戶外打羽球。",
        "otherForms": "windier (比較級(去y加ier)), windiest (最高級(去y加iest))"
    },
    {
        "word": "fog",
        "pos": "n.",
        "meaning": "霧",
        "theme": "天氣",
        "sentence": "The thick fog makes it hard to see the road clearly.",
        "sentenceZh": "濃霧讓人很難看清楚道路。",
        "otherForms": "fogs (複數型)"
    },
    {
        "word": "lightning",
        "pos": "n.",
        "meaning": "閃電",
        "theme": "天氣",
        "sentence": "We saw a bright flash of lightning in the dark sky.",
        "sentenceZh": "我們在漆黑的天空中看見一道明亮的閃電。",
        "otherForms": ""
    },
    {
        "word": "rainbow",
        "pos": "n.",
        "meaning": "彩虹",
        "theme": "天氣",
        "sentence": "A beautiful rainbow appeared after the afternoon shower.",
        "sentenceZh": "午後陣雨過後出現了一道美麗的彩虹。",
        "otherForms": "rainbows (複數型)"
    },
    {
        "word": "shower",
        "pos": "n. / v.",
        "meaning": "陣雨",
        "theme": "天氣",
        "sentence": "We got completely wet in the sudden afternoon shower.",
        "sentenceZh": "我們在突如其來的午後陣雨中全身都濕透了。",
        "otherForms": "showers (複數型), showers (三單), showering (ing型), showered (過去式/分詞)"
    },
    {
        "word": "snow",
        "pos": "n. / v.",
        "meaning": "雪",
        "theme": "天氣",
        "sentence": "The kids love to play and jump in the soft white snow.",
        "sentenceZh": "孩子們喜歡在柔軟的白雪中玩耍跳躍。",
        "otherForms": "snows (三單), snowing (ing型), snowed (過去式/分詞)"
    },
    {
        "word": "storm",
        "pos": "n.",
        "meaning": "暴風雨",
        "theme": "天氣",
        "sentence": "The heavy storm broke many tree branches last night.",
        "sentenceZh": "昨晚的強烈暴風雨折斷了許多樹枝。",
        "otherForms": "storms (複數型), storms (三單), storming (ing型), stormed (過去式/分詞)"
    },
    {
        "word": "flood",
        "pos": "n. / v.",
        "meaning": "洪水；淹水",
        "theme": "天氣",
        "sentence": "The heavy rain caused a terrible flood.",
        "sentenceZh": "大雨造成了可怕的洪水。",
        "otherForms": "floods (複數/三單), flooded (過去/過去分詞), flooding (現在分詞)"
    },
    {
        "word": "thunder",
        "pos": "n.",
        "meaning": "雷聲",
        "theme": "天氣",
        "sentence": "The loud thunder scared my little dog.",
        "sentenceZh": "巨大的雷聲嚇到了我的小狗。",
        "otherForms": "thunders (三單), thundering (ing型), thundered (過去式/分詞)"
    },
    {
        "word": "typhoon",
        "pos": "n.",
        "meaning": "颱風",
        "theme": "天氣",
        "sentence": "We have to stay home when a typhoon hits Taiwan.",
        "sentenceZh": "當颱風侵襲台灣時我們必須待在家裡。",
        "otherForms": "typhoons (複數型)"
    },
    {
        "word": "wind",
        "pos": "n.",
        "meaning": "風",
        "theme": "天氣",
        "sentence": "The strong wind blew my hat away.",
        "sentenceZh": "強風把我的帽子吹走了。",
        "otherForms": "winds (複數型)"
    },
    {
        "word": "blow",
        "pos": "v.",
        "meaning": "吹",
        "theme": "天氣",
        "sentence": "The electric fan blows cool air into the classroom.",
        "sentenceZh": "電風扇將冷空氣吹進教室裡。",
        "otherForms": "blows (三單), blowing (ing型), blew (過去式(不規則)), blown (過去分詞(不規則))"
    },
    {
        "word": "rain",
        "pos": "v. / n.",
        "meaning": "下雨；雨",
        "theme": "天氣",
        "sentence": "It will rain heavily tomorrow, so don't forget your umbrella.",
        "sentenceZh": "明天會下大雨，所以別忘了帶傘。",
        "otherForms": "rains (三單), raining (ing型), rained (過去式/分詞)"
    },
    {
        "word": "shine",
        "pos": "v.",
        "meaning": "照耀",
        "theme": "天氣",
        "sentence": "The sun shines brightly in the blue sky.",
        "sentenceZh": "太陽在藍天中明亮地照耀著。",
        "otherForms": "shines (三單), shining (ing型(去e加ing)), shined/shone (過去式(不規則)), shined/shone (過去分詞(不規則))"
    },
    {
        "word": "air conditioner",
        "pos": "n.",
        "meaning": "空調",
        "theme": "家具家電",
        "sentence": "Please turn on the air conditioner; it is very hot in here.",
        "sentenceZh": "請打開冷氣，這裡面很熱。",
        "otherForms": "air conditioners (複數型)"
    },
    {
        "word": "alarm",
        "pos": "n.",
        "meaning": "鬧鐘；警報",
        "theme": "家具家電",
        "sentence": "My alarm clock wakes me up at 6:30 a.m. every morning.",
        "sentenceZh": "我的鬧鐘每天早上六點半叫我起床。",
        "otherForms": "alarms (複數型)"
    },
    {
        "word": "armchair",
        "pos": "n.",
        "meaning": "扶手椅",
        "theme": "家具家電",
        "sentence": "Grandfather likes to sit in his comfortable armchair and read.",
        "sentenceZh": "爺爺喜歡坐在他舒服的扶手椅上看書。",
        "otherForms": "armchairs (複數型)"
    },
    {
        "word": "bath",
        "pos": "n.",
        "meaning": "浴缸",
        "theme": "家具家電",
        "sentence": "I like to take a warm bath after a long day at school.",
        "sentenceZh": "在學校漫長的一天後，我喜歡泡個熱水澡。",
        "otherForms": "baths (複數型)"
    },
    {
        "word": "bed",
        "pos": "n.",
        "meaning": "床",
        "theme": "家具家電",
        "sentence": "You should go to bed early if you are tired.",
        "sentenceZh": "如果你累了就應該早點上床睡覺。",
        "otherForms": "beds (複數型)"
    },
    {
        "word": "bench",
        "pos": "n.",
        "meaning": "長凳",
        "theme": "家具家電",
        "sentence": "We sat on a wooden bench in the park to rest.",
        "sentenceZh": "我們坐在公園的木長凳上休息。",
        "otherForms": "benches (複數型(加es))"
    },
    {
        "word": "blanket",
        "pos": "n.",
        "meaning": "毯子",
        "theme": "家具家電",
        "sentence": "Put an extra blanket on the bed if you feel cold tonight.",
        "sentenceZh": "如果今晚覺得冷，在床上多加一條毯子。",
        "otherForms": "blankets (複數型)"
    },
    {
        "word": "bookcase",
        "pos": "n.",
        "meaning": "書櫃",
        "theme": "家具家電",
        "sentence": "There are many English storybooks in that tall bookcase.",
        "sentenceZh": "那個高高的書櫃裡有許多英文故事書。",
        "otherForms": "bookcases (複數型)"
    },
    {
        "word": "cable",
        "pos": "n.",
        "meaning": "電纜",
        "theme": "家具家電",
        "sentence": "I need a USB cable to charge my smartphone.",
        "sentenceZh": "我需要一條 USB 線來充我的智慧型手機。",
        "otherForms": "cables (複數型)"
    },
    {
        "word": "carpet",
        "pos": "n.",
        "meaning": "地毯",
        "theme": "家具家電",
        "sentence": "The little baby is crawling on the soft living room carpet.",
        "sentenceZh": "小嬰兒正在客廳柔軟的地毯上爬行。",
        "otherForms": "carpets (複數型)"
    },
    {
        "word": "chair",
        "pos": "n.",
        "meaning": "椅子",
        "theme": "家具家電",
        "sentence": "Pull up a chair and sit down next to me.",
        "sentenceZh": "拉把椅子坐在我旁邊吧。",
        "otherForms": "chairs (複數型)"
    },
    {
        "word": "closet",
        "pos": "n.",
        "meaning": "衣櫥",
        "theme": "家具家電",
        "sentence": "Please hang your new winter coat in the closet.",
        "sentenceZh": "請把你的新冬裝外套掛進衣櫥裡。",
        "otherForms": "closets (複數型)"
    },
    {
        "word": "couch",
        "pos": "n.",
        "meaning": "長沙發",
        "theme": "家具家電",
        "sentence": "We sat on the couch to watch a funny movie together.",
        "sentenceZh": "我們坐在長沙發上一起看搞笑電影。",
        "otherForms": "couches (複數型(加es))"
    },
    {
        "word": "curtain",
        "pos": "n.",
        "meaning": "窗簾",
        "theme": "家具家電",
        "sentence": "Open the curtain to let the morning sunlight in.",
        "sentenceZh": "打開窗簾讓早晨的陽光照進來。",
        "otherForms": "curtains (複數型)"
    },
    {
        "word": "desk",
        "pos": "n.",
        "meaning": "書桌",
        "theme": "家具家電",
        "sentence": "He is writing a letter to his pen pal at his desk.",
        "sentenceZh": "他正在書桌前寫信給他的筆友。",
        "otherForms": "desks (複數型)"
    },
    {
        "word": "drawer",
        "pos": "n.",
        "meaning": "抽屜",
        "theme": "家具家電",
        "sentence": "I keep all my pens and pencils in the top drawer.",
        "sentenceZh": "我把所有的筆都收在最上層的抽屜裡。",
        "otherForms": "drawers (複數型)"
    },
    {
        "word": "dresser",
        "pos": "n.",
        "meaning": "梳妝台",
        "theme": "家具家電",
        "sentence": "She looked at herself in the mirror on the dresser.",
        "sentenceZh": "她看著梳妝台鏡子裡的自己。",
        "otherForms": "dressers (複數型)"
    },
    {
        "word": "dryer",
        "pos": "n.",
        "meaning": "烘乾機",
        "theme": "家具家電",
        "sentence": "Put the wet towels into the clothes dryer.",
        "sentenceZh": "把濕毛巾放進烘乾機裡。",
        "otherForms": "dryers (複數型)"
    },
    {
        "word": "engine",
        "pos": "n.",
        "meaning": "引擎",
        "theme": "家具家電",
        "sentence": "The car engine is making a very strange noise.",
        "sentenceZh": "這輛車的引擎正在發出非常奇怪的噪音。",
        "otherForms": "engines (複數型)"
    },
    {
        "word": "fan",
        "pos": "n.",
        "meaning": "電風扇",
        "theme": "家具家電",
        "sentence": "Turn on the electric fan if you are feeling warm.",
        "sentenceZh": "如果你覺得熱，打開電風扇。",
        "otherForms": "fans (複數型)"
    },
    {
        "word": "faucet",
        "pos": "n.",
        "meaning": "水龍頭",
        "theme": "家具家電",
        "sentence": "Remember to turn off the faucet when you brush your teeth.",
        "sentenceZh": "刷牙時記得關掉水龍頭。",
        "otherForms": "faucets (複數型)"
    },
    {
        "word": "flashlight",
        "pos": "n.",
        "meaning": "手電筒",
        "theme": "家具家電",
        "sentence": "We need a flashlight because the lights suddenly went out.",
        "sentenceZh": "我們需要手電筒，因為突然停電了。",
        "otherForms": "flashlights (複數型)"
    },
    {
        "word": "freezer",
        "pos": "n.",
        "meaning": "冷凍庫",
        "theme": "家具家電",
        "sentence": "We keep the meat and ice cream in the freezer.",
        "sentenceZh": "我們把肉和冰淇淋放在冷凍庫裡。",
        "otherForms": "freezers (複數型)"
    },
    {
        "word": "furniture",
        "pos": "n.",
        "meaning": "家具",
        "theme": "家具家電",
        "sentence": "They bought some new wooden furniture for their new house.",
        "sentenceZh": "他們為新家買了一些新的木製家具。",
        "otherForms": ""
    },
    {
        "word": "hanger",
        "pos": "n.",
        "meaning": "衣架",
        "theme": "家具家電",
        "sentence": "Put your shirt on a hanger so it won't get wrinkled.",
        "sentenceZh": "把你的襯衫掛在衣架上，這樣才不會起皺。",
        "otherForms": "hangers (複數型)"
    },
    {
        "word": "heater",
        "pos": "n.",
        "meaning": "暖氣",
        "theme": "家具家電",
        "sentence": "We use a small heater to keep the room warm in winter.",
        "sentenceZh": "我們在冬天使用小暖氣機讓房間保持溫暖。",
        "otherForms": "heaters (複數型)"
    },
    {
        "word": "lamp",
        "pos": "n.",
        "meaning": "燈",
        "theme": "家具家電",
        "sentence": "Turn on the desk lamp when you are reading a book.",
        "sentenceZh": "看書時請打開檯燈。",
        "otherForms": "lamps (複數型)"
    },
    {
        "word": "light",
        "pos": "n. / v.",
        "meaning": "燈、光；點燃",
        "theme": "家具家電",
        "sentence": "Turn off the classroom lights before you leave.",
        "sentenceZh": "離開前請關掉教室的燈。",
        "otherForms": "lights (複數型/ 三單), lighting (現在分詞), lit (過去/過去分詞(不規則))"
    },
    {
        "word": "machine",
        "pos": "n.",
        "meaning": "機器",
        "theme": "家具家電",
        "sentence": "A computer is a very useful learning machine.",
        "sentenceZh": "電腦是一台非常有用的學習機器。",
        "otherForms": "machines (複數型)"
    },
    {
        "word": "microwave",
        "pos": "n.",
        "meaning": "微波爐",
        "theme": "家具家電",
        "sentence": "You can heat up your cold soup in the microwave.",
        "sentenceZh": "你可以用微波爐加熱你冷掉的湯。",
        "otherForms": "microwaves (複數型)"
    },
    {
        "word": "mirror",
        "pos": "n.",
        "meaning": "鏡子",
        "theme": "家具家電",
        "sentence": "She brushed her hair in front of the bathroom mirror.",
        "sentenceZh": "她在浴室的鏡子前梳理頭髮。",
        "otherForms": "mirrors (複數型)"
    },
    {
        "word": "oven",
        "pos": "n.",
        "meaning": "烤箱",
        "theme": "家具家電",
        "sentence": "My mom is baking a delicious chocolate cake in the oven.",
        "sentenceZh": "我媽媽正在烤箱裡烤一顆美味的巧克力蛋糕。",
        "otherForms": "ovens (複數型)"
    },
    {
        "word": "pillow",
        "pos": "n.",
        "meaning": "枕頭",
        "theme": "家具家電",
        "sentence": "This soft pillow helps me sleep very well at night.",
        "sentenceZh": "這顆柔軟的枕頭幫助我晚上睡得很好。",
        "otherForms": "pillows (複數型)"
    },
    {
        "word": "pipe",
        "pos": "n.",
        "meaning": "管子",
        "theme": "家具家電",
        "sentence": "The dirty water flows away through the plastic pipe.",
        "sentenceZh": "髒水透過塑膠管流走。",
        "otherForms": "pipes (複數型)"
    },
    {
        "word": "refrigerator (fridge)",
        "pos": "n.",
        "meaning": "冰箱",
        "theme": "家具家電",
        "sentence": "Keep the fresh milk and fruit in the refrigerator.",
        "sentenceZh": "把鮮奶和水果保存在冰箱裡。",
        "otherForms": "refrigerators (複數型)"
    },
    {
        "word": "sheet",
        "pos": "n.",
        "meaning": "床單",
        "theme": "家具家電",
        "sentence": "We need to wash and change the bed sheet every week.",
        "sentenceZh": "我們每週都需要清洗並更換床單。",
        "otherForms": "sheets (複數型)"
    },
    {
        "word": "shelf",
        "pos": "n.",
        "meaning": "架子",
        "theme": "家具家電",
        "sentence": "Put the heavy dictionary back on the bottom shelf.",
        "sentenceZh": "把厚重的字典放回最下層的架子上。",
        "otherForms": "shelves (複數型(去f加ves))"
    },
    {
        "word": "sink",
        "pos": "n.",
        "meaning": "水槽",
        "theme": "家具家電",
        "sentence": "Put your dirty dishes in the kitchen sink after eating.",
        "sentenceZh": "吃完飯後把你的髒碗盤放在廚房水槽裡。",
        "otherForms": "sinks (複數型)"
    },
    {
        "word": "soap",
        "pos": "n.",
        "meaning": "肥皂",
        "theme": "家具家電",
        "sentence": "Wash your hands with soap before you eat anything.",
        "sentenceZh": "吃任何東西前要用肥皂洗手。",
        "otherForms": "soaps (複數型)"
    },
    {
        "word": "sofa",
        "pos": "n.",
        "meaning": "沙發",
        "theme": "家具家電",
        "sentence": "I was so tired that I fell asleep on the sofa.",
        "sentenceZh": "我太累了，所以在沙發上睡著了。",
        "otherForms": "sofas (複數型)"
    },
    {
        "word": "speaker",
        "pos": "n.",
        "meaning": "喇叭",
        "theme": "家具家電",
        "sentence": "The 80s pop music is playing loudly from the Bluetooth speaker.",
        "sentenceZh": "藍牙喇叭正大聲播放著 80 年代的流行音樂。",
        "otherForms": "speakers (複數型)"
    },
    {
        "word": "stove",
        "pos": "n.",
        "meaning": "爐子",
        "theme": "家具家電",
        "sentence": "The pot of hot soup is boiling on the stove.",
        "sentenceZh": "那鍋熱湯正在爐子上沸騰。",
        "otherForms": "stoves (複數型)"
    },
    {
        "word": "table",
        "pos": "n.",
        "meaning": "桌子",
        "theme": "家具家電",
        "sentence": "We sit around the dining table to talk and eat dinner.",
        "sentenceZh": "我們圍繞著餐桌聊天吃晚餐。",
        "otherForms": "tables (複數型)"
    },
    {
        "word": "telephone",
        "pos": "n.",
        "meaning": "電話",
        "theme": "家具家電",
        "sentence": "The telephone is ringing loudly; can someone answer it?",
        "sentenceZh": "電話響得很大聲，有人可以接一下嗎？",
        "otherForms": "telephones (複數型)"
    },
    {
        "word": "television",
        "pos": "n.",
        "meaning": "電視",
        "theme": "家具家電",
        "sentence": "Don't sit too close to the television when you watch a movie.",
        "sentenceZh": "看電影時不要坐得離電視太近。",
        "otherForms": "televisions (複數型)"
    },
    {
        "word": "toothbrush",
        "pos": "n.",
        "meaning": "牙刷",
        "theme": "家具家電",
        "sentence": "You must change your toothbrush every three months.",
        "sentenceZh": "你必須每三個月更換一次牙刷。",
        "otherForms": "toothbrushes (複數型(加es))"
    },
    {
        "word": "towel",
        "pos": "n.",
        "meaning": "毛巾",
        "theme": "家具家電",
        "sentence": "Use a clean, dry towel to wipe your face after washing it.",
        "sentenceZh": "洗完臉後用乾淨乾燥的毛巾擦臉。",
        "otherForms": "towels (複數型)"
    },
    {
        "word": "tub",
        "pos": "n.",
        "meaning": "浴缸",
        "theme": "家具家電",
        "sentence": "The baby is playing with his rubber duck in the bath tub.",
        "sentenceZh": "小嬰兒正在浴缸裡玩他的橡皮鴨。",
        "otherForms": "tubs (複數型)"
    },
    {
        "word": "school",
        "pos": "n.",
        "meaning": "學校",
        "theme": "學校",
        "sentence": "I ride my bicycle to school with my classmates every morning.",
        "sentenceZh": "我每天早上和同學一起騎腳踏車上學。",
        "otherForms": "schools (複數型)"
    },
    {
        "word": "kindergarten",
        "pos": "n.",
        "meaning": "幼兒園",
        "theme": "學校",
        "sentence": "My little niece is five years old and goes to kindergarten.",
        "sentenceZh": "我的小姪女五歲，在上幼兒園。",
        "otherForms": "kindergartens (複數型)"
    },
    {
        "word": "elementary school",
        "pos": "n.",
        "meaning": "小學",
        "theme": "學校",
        "sentence": "I met my best friend when we were in elementary school.",
        "sentenceZh": "我在小學時認識了我最好的朋友。",
        "otherForms": "elementary schools (複數型)"
    },
    {
        "word": "junior high school",
        "pos": "n.",
        "meaning": "國中",
        "theme": "學校",
        "sentence": "English is a very important subject in junior high school.",
        "sentenceZh": "英文在國中是一門非常重要的科目。",
        "otherForms": "junior high schools (複數型)"
    },
    {
        "word": "senior high school",
        "pos": "n.",
        "meaning": "高中",
        "theme": "學校",
        "sentence": "He studies very hard to enter a good senior high school.",
        "sentenceZh": "他為了考上好高中而非常努力讀書。",
        "otherForms": "senior high schools (複數型)"
    },
    {
        "word": "university",
        "pos": "n.",
        "meaning": "大學",
        "theme": "學校",
        "sentence": "She wants to study computer science at the university.",
        "sentenceZh": "她想在大學裡修讀資訊科學。",
        "otherForms": "universities (複數型(去y加ies))"
    },
    {
        "word": "college",
        "pos": "n.",
        "meaning": "大學",
        "theme": "學校",
        "sentence": "My older brother is currently a student at a local college.",
        "sentenceZh": "我哥哥目前是當地一所大學的學生。",
        "otherForms": "colleges (複數型)"
    },
    {
        "word": "department",
        "pos": "n.",
        "meaning": "部門；系",
        "theme": "學校",
        "sentence": "Mr. Wang teaches in the English department.",
        "sentenceZh": "王先生在英文系教書。",
        "otherForms": "departments (複數型)"
    },
    {
        "word": "term",
        "pos": "n.",
        "meaning": "學期",
        "theme": "學校",
        "sentence": "We will have a big math test at the end of this term.",
        "sentenceZh": "我們在這學期末會有一個大型數學考試。",
        "otherForms": "terms (複數型)"
    },
    {
        "word": "semester",
        "pos": "n.",
        "meaning": "學期",
        "theme": "學校",
        "sentence": "The new school semester will officially begin in September.",
        "sentenceZh": "新學期將在九月正式開始。",
        "otherForms": "semesters (複數型)"
    },
    {
        "word": "campus",
        "pos": "n.",
        "meaning": "校園",
        "theme": "學校",
        "sentence": "Our school campus is very large and full of green trees.",
        "sentenceZh": "我們的校園非常大，而且種滿了綠樹。",
        "otherForms": "campuses (複數型(加es))"
    },
    {
        "word": "guard",
        "pos": "n. / v.",
        "meaning": "警衛；守護",
        "theme": "學校",
        "sentence": "The friendly security guard stands at the school gate.",
        "sentenceZh": "友善的警衛站在學校大門口。",
        "otherForms": "guards (複數型), guards (三單), guarding (ing型), guarded (過去式/分詞)"
    },
    {
        "word": "gym",
        "pos": "n.",
        "meaning": "體育館",
        "theme": "學校",
        "sentence": "We play badminton in the school gym when it rains outside.",
        "sentenceZh": "外面下雨時，我們在學校體育館打羽毛球。",
        "otherForms": "gyms (複數型)"
    },
    {
        "word": "library",
        "pos": "n.",
        "meaning": "圖書館",
        "theme": "學校",
        "sentence": "Please keep your voice down when you are in the library.",
        "sentenceZh": "在圖書館時請降低音量。",
        "otherForms": "libraries (複數型(去y加ies))"
    },
    {
        "word": "court",
        "pos": "n.",
        "meaning": "法庭；球場",
        "theme": "學校",
        "sentence": "The basketball court is full of students playing after school.",
        "sentenceZh": "放學後籃球場上擠滿了打球的學生。",
        "otherForms": "courts (複數型)"
    },
    {
        "word": "entrance",
        "pos": "n.",
        "meaning": "入口",
        "theme": "學校",
        "sentence": "The main entrance of the museum is right over there.",
        "sentenceZh": "博物館的主要入口就在那邊。",
        "otherForms": "entrances (複數型)"
    },
    {
        "word": "exit",
        "pos": "n.",
        "meaning": "出口",
        "theme": "學校",
        "sentence": "Walk toward the green sign to find the emergency exit.",
        "sentenceZh": "朝著綠色標誌走去尋找緊急出口。",
        "otherForms": "exits (複數型)"
    },
    {
        "word": "club",
        "pos": "n.",
        "meaning": "俱樂部、社團",
        "theme": "學校",
        "sentence": "I joined the English club to practice my speaking skills.",
        "sentenceZh": "我加入了英文社團來練習我的口說技巧。",
        "otherForms": "clubs (複數型)"
    },
    {
        "word": "locker",
        "pos": "n.",
        "meaning": "鎖櫃",
        "theme": "學校",
        "sentence": "Put your heavy books and backpack in your personal locker.",
        "sentenceZh": "把你厚重的書和背包放進你的個人置物櫃裡。",
        "otherForms": "lockers (複數型)"
    },
    {
        "word": "playground",
        "pos": "n.",
        "meaning": "操場；遊樂場",
        "theme": "學校",
        "sentence": "The children are running happily on the playground.",
        "sentenceZh": "孩子們正在操場上開心地奔跑。",
        "otherForms": "playgrounds (複數型)"
    },
    {
        "word": "seesaw",
        "pos": "n.",
        "meaning": "翹翹板",
        "theme": "學校",
        "sentence": "Two kids are playing on the wooden seesaw in the park.",
        "sentenceZh": "兩個小孩在公園裡玩木製的翹翹板。",
        "otherForms": "seesaws (複數型)"
    },
    {
        "word": "slide",
        "pos": "n. / v.",
        "meaning": "溜滑梯；滑",
        "theme": "學校",
        "sentence": "The little boy went down the slide very fast.",
        "sentenceZh": "小男孩溜滑梯溜得非常快。",
        "otherForms": "slides (複數型/ 三單), sliding (ing型(去e加ing)), slid (過去/ 過去分詞(不規則))"
    },
    {
        "word": "swing",
        "pos": "n. / v.",
        "meaning": "鞦韆；搖擺",
        "theme": "學校",
        "sentence": "She loves to sit on the swing and fly high into the air.",
        "sentenceZh": "她喜歡坐在鞦韆上盪得高高的。",
        "otherForms": "swings (複數型/ 三單), swings (ing型), swung (過去/ 過去分詞(不規則))"
    },
    {
        "word": "course",
        "pos": "n.",
        "meaning": "課程",
        "theme": "學校",
        "sentence": "I am taking an online course to learn HTML coding.",
        "sentenceZh": "我正在上線上課程學習寫 HTML 程式碼。",
        "otherForms": "courses (複數型)"
    },
    {
        "word": "art",
        "pos": "n.",
        "meaning": "藝術",
        "theme": "學校",
        "sentence": "We will learn how to paint a beautiful picture in art class.",
        "sentenceZh": "我們在美術課將學習如何畫出一幅美麗的畫。",
        "otherForms": "arts (複數型)"
    },
    {
        "word": "Chinese",
        "pos": "n.",
        "meaning": "中文",
        "theme": "學校",
        "sentence": "We recite beautiful traditional poems in Chinese class.",
        "sentenceZh": "我們在國文課背誦美麗的傳統詩詞。",
        "otherForms": "Chinese (單複數同型)"
    },
    {
        "word": "English",
        "pos": "n.",
        "meaning": "英文",
        "theme": "學校",
        "sentence": "Learning English vocabulary can be very fun if we play games.",
        "sentenceZh": "如果我們玩遊戲，學習英文單字會非常有趣。",
        "otherForms": ""
    },
    {
        "word": "geography",
        "pos": "n.",
        "meaning": "地理",
        "theme": "學校",
        "sentence": "We study world maps and different countries in geography class.",
        "sentenceZh": "我們在地理課學習世界地圖和不同國家。",
        "otherForms": ""
    },
    {
        "word": "history",
        "pos": "n.",
        "meaning": "歷史",
        "theme": "學校",
        "sentence": "Learning about Taiwan's history helps us understand our home.",
        "sentenceZh": "學習台灣的歷史幫助我們了解我們的家鄉。",
        "otherForms": "histories (複數型(去y加ies))"
    },
    {
        "word": "biology",
        "pos": "n.",
        "meaning": "生物",
        "theme": "學校",
        "sentence": "We use a microscope to look at small cells in biology class.",
        "sentenceZh": "我們在生物課用顯微鏡觀察小細胞。",
        "otherForms": ""
    },
    {
        "word": "chemistry",
        "pos": "n.",
        "meaning": "化學",
        "theme": "學校",
        "sentence": "The students mixed two liquids together in the chemistry lab.",
        "sentenceZh": "學生們在化學實驗室把兩種液體混合在一起。",
        "otherForms": ""
    },
    {
        "word": "physics",
        "pos": "n.",
        "meaning": "物理",
        "theme": "學校",
        "sentence": "We learned about the rules of gravity in today's physics lesson.",
        "sentenceZh": "我們在今天的物理課學到了地心引力的規則。",
        "otherForms": ""
    },
    {
        "word": "language",
        "pos": "n.",
        "meaning": "語言",
        "theme": "學校",
        "sentence": "English is a very useful international language to learn.",
        "sentenceZh": "英文是一門非常實用且值得學習的國際語言。",
        "otherForms": "languages (複數型)"
    },
    {
        "word": "law",
        "pos": "n.",
        "meaning": "法律",
        "theme": "學校",
        "sentence": "Everyone in the country must obey the traffic laws.",
        "sentenceZh": "國家裡的每一個人都必須遵守交通法規。",
        "otherForms": "laws (複數型)"
    },
    {
        "word": "math",
        "pos": "n.",
        "meaning": "數學",
        "theme": "學校",
        "sentence": "You have to practice a lot to solve difficult math problems.",
        "sentenceZh": "你必須多練習才能解開困難的數學題。",
        "otherForms": ""
    },
    {
        "word": "music",
        "pos": "n.",
        "meaning": "音樂",
        "theme": "學校",
        "sentence": "We sing 80s songs and play the recorder in music class.",
        "sentenceZh": "我們在音樂課唱 80 年代的歌並吹直笛。",
        "otherForms": ""
    },
    {
        "word": "science",
        "pos": "n.",
        "meaning": "科學",
        "theme": "學校",
        "sentence": "The students are doing a cool experiment in the science class.",
        "sentenceZh": "學生們正在科學課做一個很酷的實驗。",
        "otherForms": "sciences (複數型)"
    },
    {
        "word": "social science",
        "pos": "n.",
        "meaning": "社會科學",
        "theme": "學校",
        "sentence": "We learn about our community in the social science class.",
        "sentenceZh": "我們在社會課學習關於我們社區的事物。",
        "otherForms": "social sciences (複數型)"
    },
    {
        "word": "education",
        "pos": "n.",
        "meaning": "教育",
        "theme": "學校",
        "sentence": "A good education is very important for a child's future.",
        "sentenceZh": "良好的教育對孩子的未來非常重要。",
        "otherForms": ""
    },
    {
        "word": "class",
        "pos": "n.",
        "meaning": "班級；課程",
        "theme": "學校",
        "sentence": "Our class is planning a trip to the zoo.",
        "sentenceZh": "我們班正在計畫去動物園玩。",
        "otherForms": "classes (複數型)"
    },
    {
        "word": "lesson",
        "pos": "n.",
        "meaning": "課",
        "theme": "學校",
        "sentence": "Today's English lesson is about the names of different animals.",
        "sentenceZh": "今天的英文課是關於各種動物的名字。",
        "otherForms": "lessons (複數型)"
    },
    {
        "word": "knowledge",
        "pos": "n.",
        "meaning": "知識",
        "theme": "學校",
        "sentence": "Reading many books is the best way to get new knowledge.",
        "sentenceZh": "廣泛閱讀是獲取新知識最好的方法。",
        "otherForms": ""
    },
    {
        "word": "memory",
        "pos": "n.",
        "meaning": "記憶",
        "theme": "學校",
        "sentence": "You need a good memory to learn 2,000 vocabulary words!",
        "sentenceZh": "你需要有好的記憶力才能記住兩千個單字！",
        "otherForms": "memories (複數型(去y加ies))"
    },
    {
        "word": "alphabet",
        "pos": "n.",
        "meaning": "字母表",
        "theme": "學校",
        "sentence": "There are 26 letters in the English alphabet.",
        "sentenceZh": "英文字母表有26個字母。",
        "otherForms": "alphabets (複數型)"
    },
    {
        "word": "word",
        "pos": "n.",
        "meaning": "字詞",
        "theme": "學校",
        "sentence": "Look up this new word in the dictionary if you don't know it.",
        "sentenceZh": "如果你不懂這個新單字，就去查字典。",
        "otherForms": "words (複數型)"
    },
    {
        "word": "vocabulary",
        "pos": "n.",
        "meaning": "字彙",
        "theme": "學校",
        "sentence": "Check your vocabulary passport to practice these words every day.",
        "sentenceZh": "每天查看你的單字護照來練習這些字。",
        "otherForms": "vocabularies (複數型(去y加ies))"
    },
    {
        "word": "sentence",
        "pos": "n.",
        "meaning": "句子",
        "theme": "學校",
        "sentence": "Try to write a complete sentence using this new grammar rule.",
        "sentenceZh": "試著用這個新文法規則寫一個完整的句子。",
        "otherForms": "sentences (複數型)"
    },
    {
        "word": "poem",
        "pos": "n.",
        "meaning": "詩",
        "theme": "學校",
        "sentence": "The student wrote a beautiful English poem for her mother.",
        "sentenceZh": "這位學生為她母親寫了一首美麗的英文詩。",
        "otherForms": "poems (複數型)"
    },
    {
        "word": "story",
        "pos": "n.",
        "meaning": "故事",
        "theme": "學校",
        "sentence": "The teacher told us a very funny story about a clever monkey.",
        "sentenceZh": "老師告訴我們一個關於聰明猴子的有趣故事。",
        "otherForms": "stories (複數型(去y加ies))"
    },
    {
        "word": "example",
        "pos": "n.",
        "meaning": "例子",
        "theme": "學校",
        "sentence": "Let me give you an example of how to play this grammar game.",
        "sentenceZh": "讓我舉個例子示範怎麼玩這個文法遊戲。",
        "otherForms": "examples (複數型)"
    },
    {
        "word": "exam",
        "pos": "n.",
        "meaning": "考試",
        "theme": "學校",
        "sentence": "Good luck on your final English exam tomorrow!",
        "sentenceZh": "祝你明天的英文期末考順利！",
        "otherForms": "exams (複數型)"
    },
    {
        "word": "quiz",
        "pos": "n. / v.",
        "meaning": "小考",
        "theme": "學校",
        "sentence": "We will have a short spelling quiz in class tomorrow morning.",
        "sentenceZh": "我們明天早上的課堂會有個簡短的拼字小考。",
        "otherForms": "quizzes (複數型(重複字尾加es))"
    },
    {
        "word": "test",
        "pos": "n. / v.",
        "meaning": "測驗",
        "theme": "學校",
        "sentence": "Make sure you review your notes carefully before the test.",
        "sentenceZh": "考試前務必仔細複習你的筆記。",
        "otherForms": "tests (複數型), tests (三單), testing (ing型), tested (過去式/分詞)"
    },
    {
        "word": "exercise",
        "pos": "n.",
        "meaning": "練習",
        "theme": "學校",
        "sentence": "Doing these grammar exercises will help you write better.",
        "sentenceZh": "做這些文法練習會幫助你寫得更好。",
        "otherForms": "exercises (複數型), exercises (三單), exercising (ing型(去e加ing)), exercised (過去式/分詞)"
    },
    {
        "word": "homework",
        "pos": "n.",
        "meaning": "家庭作業",
        "theme": "學校",
        "sentence": "Did you finish your math homework before you played video games?",
        "sentenceZh": "你打電動前寫完數學作業了嗎？",
        "otherForms": ""
    },
    {
        "word": "report",
        "pos": "n. / v.",
        "meaning": "報告",
        "theme": "學校",
        "sentence": "I have to write a long book report for my English reading class.",
        "sentenceZh": "我必須為我的英文閱讀課寫一份長篇的讀書報告。",
        "otherForms": "reports (複數型), reports (三單), reporting (ing型), reported (過去式/分詞)"
    },
    {
        "word": "grade",
        "pos": "n.",
        "meaning": "年級；成績；批改",
        "theme": "學校",
        "sentence": "He studied hard and got a very good grade on his science test.",
        "sentenceZh": "他努力讀書，在科學考試中獲得了很好的成績。",
        "otherForms": "grades (複數型), grades (三單), grading (ing型(去e加ing)), graded (過去式/分詞)"
    },
    {
        "word": "record",
        "pos": "n. / v.",
        "meaning": "紀錄",
        "theme": "學校",
        "sentence": "The fast runner broke the school record in the 100-meter race.",
        "sentenceZh": "那位跑得快的選手打破了學校一百公尺賽跑的紀錄。",
        "otherForms": "records (複數型), records (三單), recording (ing型), recorded (過去式/分詞)"
    },
    {
        "word": "score",
        "pos": "n.",
        "meaning": "分數",
        "theme": "學校",
        "sentence": "The winning team got a high score in the badminton game.",
        "sentenceZh": "獲勝的隊伍在羽球比賽中獲得了高分。",
        "otherForms": "scores (複數型), scores (三單), scoring (ing型(去e加ing)), scored (過去式/分詞)"
    },
    {
        "word": "book",
        "pos": "n.",
        "meaning": "書本",
        "theme": "學校",
        "sentence": "Open your English book to page 15, please.",
        "sentenceZh": "請把英文課本翻到第十五頁。",
        "otherForms": "books (複數型)"
    },
    {
        "word": "diary",
        "pos": "n.",
        "meaning": "日記",
        "theme": "學校",
        "sentence": "She writes her thoughts in her secret diary every night.",
        "sentenceZh": "她每天晚上把想法寫在秘密日記裡。",
        "otherForms": "diaries (複數型(去y加ies))"
    },
    {
        "word": "dictionary",
        "pos": "n.",
        "meaning": "字典",
        "theme": "學校",
        "sentence": "You can find the meaning of the word in an English-Chinese dictionary.",
        "sentenceZh": "你可以在英漢字典裡找到這個字的意思。",
        "otherForms": "dictionaries (複數型(去y加ies))"
    },
    {
        "word": "magazine",
        "pos": "n.",
        "meaning": "雜誌",
        "theme": "學校",
        "sentence": "My sister likes to read sports and fashion magazines.",
        "sentenceZh": "我姐姐喜歡看體育和時尚雜誌。",
        "otherForms": "magazines (複數型)"
    },
    {
        "word": "map",
        "pos": "n.",
        "meaning": "地圖",
        "theme": "學校",
        "sentence": "We used a paper map to find our way in the big city.",
        "sentenceZh": "我們用了一張紙本地圖在大城市裡找路。",
        "otherForms": "maps (複數型)"
    },
    {
        "word": "notebook",
        "pos": "n.",
        "meaning": "筆記本",
        "theme": "學校",
        "sentence": "Write down the important grammar rules in your notebook.",
        "sentenceZh": "把重要的文法規則寫在你的筆記本上。",
        "otherForms": "notebooks (複數型)"
    },
    {
        "word": "page",
        "pos": "n.",
        "meaning": "頁",
        "theme": "學校",
        "sentence": "Please turn the page and continue reading the story.",
        "sentenceZh": "請翻頁並繼續閱讀故事。",
        "otherForms": "pages (複數型)"
    },
    {
        "word": "paper",
        "pos": "n.",
        "meaning": "紙",
        "theme": "學校",
        "sentence": "Do you have a piece of blank paper that I can use to draw?",
        "sentenceZh": "你有一張我可以畫畫用的空白紙嗎？",
        "otherForms": "papers (複數型)"
    },
    {
        "word": "sheet",
        "pos": "n.",
        "meaning": "一張（紙）",
        "theme": "學校",
        "sentence": "Hand me a sheet of paper so I can write down the phone number.",
        "sentenceZh": "遞給我一張紙，這樣我就可以把電話號碼寫下來。",
        "otherForms": "sheets (複數型)"
    },
    {
        "word": "textbook",
        "pos": "n.",
        "meaning": "教科書",
        "theme": "學校",
        "sentence": "We have to bring our math textbook to class every day.",
        "sentenceZh": "我們每天都必須帶數學教科書來上課。",
        "otherForms": "textbooks (複數型)"
    },
    {
        "word": "workbook",
        "pos": "n.",
        "meaning": "練習本",
        "theme": "學校",
        "sentence": "Please finish the matching exercises in your English workbook.",
        "sentenceZh": "請完成你英文練習本裡的連連看練習。",
        "otherForms": "workbooks (複數型)"
    },
    {
        "word": "note",
        "pos": "n. / v.",
        "meaning": "筆記；音符",
        "theme": "學校",
        "sentence": "I left a yellow sticky note on the teacher's desk.",
        "sentenceZh": "我在老師的書桌上留了一張黃色便利貼。",
        "otherForms": "notes (複數型)"
    },
    {
        "word": "stationery",
        "pos": "n.",
        "meaning": "文具",
        "theme": "學校",
        "sentence": "I bought some new pens and cute erasers at the stationery store.",
        "sentenceZh": "我在文具店買了一些新筆和可愛的橡皮擦。",
        "otherForms": ""
    },
    {
        "word": "tape",
        "pos": "n.",
        "meaning": "膠帶；錄影帶",
        "theme": "學校",
        "sentence": "Use some clear tape to stick the poster on the wall.",
        "sentenceZh": "用一些透明膠帶把海報貼在牆上。",
        "otherForms": "tapes (複數型)"
    },
    {
        "word": "envelope",
        "pos": "n.",
        "meaning": "信封",
        "theme": "學校",
        "sentence": "Put the letter in the envelope before you mail it at the post office.",
        "sentenceZh": "在去郵局寄信前，先把信裝進信封裡。",
        "otherForms": "envelopes (複數型)"
    },
    {
        "word": "eraser",
        "pos": "n.",
        "meaning": "橡皮擦",
        "theme": "學校",
        "sentence": "Use an eraser to rub out the wrong spelling and try again.",
        "sentenceZh": "用橡皮擦擦掉拼錯的地方再試一次。",
        "otherForms": "erasers (複數型)"
    },
    {
        "word": "glasses",
        "pos": "n.",
        "meaning": "眼鏡",
        "theme": "學校",
        "sentence": "My grandfather wears reading glasses when he looks at his phone.",
        "sentenceZh": "我爺爺看手機時會戴老花眼鏡。",
        "otherForms": "glasses (複數型(常以複數出現))"
    },
    {
        "word": "glue",
        "pos": "n.",
        "meaning": "膠水",
        "theme": "學校",
        "sentence": "We used liquid glue to stick the paper parts together.",
        "sentenceZh": "我們用膠水把紙張零件黏在一起。",
        "otherForms": "glues (複數型)"
    },
    {
        "word": "ink",
        "pos": "n.",
        "meaning": "墨水",
        "theme": "學校",
        "sentence": "I need a new pen because this one is out of blue ink.",
        "sentenceZh": "我需要一支新筆，因為這支的藍色墨水用完了。",
        "otherForms": "inks (複數型)"
    },
    {
        "word": "letter",
        "pos": "n.",
        "meaning": "信件；字母",
        "theme": "學校",
        "sentence": "I wrote a long letter to my pen pal who lives in the USA.",
        "sentenceZh": "我寫了一封長信給住在美國的筆友。",
        "otherForms": "letters (複數型)"
    },
    {
        "word": "marker",
        "pos": "n.",
        "meaning": "麥克筆",
        "theme": "學校",
        "sentence": "The teacher writes clearly on the whiteboard with a black marker.",
        "sentenceZh": "老師用黑色的麥克筆在白板上清楚地寫字。",
        "otherForms": "markers (複數型)"
    },
    {
        "word": "pen",
        "pos": "n.",
        "meaning": "筆",
        "theme": "學校",
        "sentence": "Please sign your name at the bottom with a blue or black pen.",
        "sentenceZh": "請在底部用藍色或黑色原子筆簽名。",
        "otherForms": "pens (複數型)"
    },
    {
        "word": "pencil",
        "pos": "n.",
        "meaning": "鉛筆",
        "theme": "學校",
        "sentence": "Write your answers with a pencil so you can erase them later.",
        "sentenceZh": "用鉛筆寫答案，這樣你等一下才能擦掉。",
        "otherForms": "pencils (複數型)"
    },
    {
        "word": "pencil box",
        "pos": "n.",
        "meaning": "鉛筆盒",
        "theme": "學校",
        "sentence": "I keep all my pens, rulers, and erasers inside my pencil box.",
        "sentenceZh": "我把我所有的筆、尺和橡皮擦都收在鉛筆盒裡。",
        "otherForms": "pencil boxes (複數型(加es))"
    },
    {
        "word": "crayon",
        "pos": "n.",
        "meaning": "蠟筆",
        "theme": "學校",
        "sentence": "The little girl is drawing a big rainbow with colorful crayons.",
        "sentenceZh": "小女孩正在用彩色蠟筆畫一個大彩虹。",
        "otherForms": "crayons (複數型)"
    },
    {
        "word": "postcard",
        "pos": "n.",
        "meaning": "明信片",
        "theme": "學校",
        "sentence": "I will send you a beautiful postcard when I travel to Japan.",
        "sentenceZh": "我去日本旅行時會寄一張美麗的明信片給你。",
        "otherForms": "postcards (複數型)"
    },
    {
        "word": "present",
        "pos": "n.",
        "meaning": "禮物",
        "theme": "學校",
        "sentence": "This special birthday present is for you; open it!",
        "sentenceZh": "這份特別的生日禮物是給你的，打開它吧！",
        "otherForms": "presents (複數型)"
    },
    {
        "word": "ruler",
        "pos": "n.",
        "meaning": "尺",
        "theme": "學校",
        "sentence": "Use a plastic ruler to draw a perfectly straight line.",
        "sentenceZh": "用一把塑膠尺畫出一條完美的直線。",
        "otherForms": "rulers (複數型)"
    },
    {
        "word": "backpack",
        "pos": "n.",
        "meaning": "背包",
        "theme": "學校",
        "sentence": "I put my heavy textbooks and lunchbox in my school backpack.",
        "sentenceZh": "我把厚重的教科書和午餐盒放進學校背包裡。",
        "otherForms": "backpacks (複數型)"
    },
    {
        "word": "pin",
        "pos": "n.",
        "meaning": "大頭針",
        "theme": "學校",
        "sentence": "Use a small metal pin to fix the notice on the board.",
        "sentenceZh": "用一根金屬小圖釘把通知單固定在佈告欄上。",
        "otherForms": "pins (複數型)"
    },
    {
        "word": "classroom",
        "pos": "n.",
        "meaning": "教室",
        "theme": "學校",
        "sentence": "Please help keep our classroom clean and tidy every day.",
        "sentenceZh": "請幫忙讓我們的教室每天保持乾淨整潔。",
        "otherForms": "classrooms (複數型)"
    },
    {
        "word": "board",
        "pos": "n.",
        "meaning": "板子",
        "theme": "學校",
        "sentence": "Look at the English sentences written on the board.",
        "sentenceZh": "看寫在板子上的英文句子。",
        "otherForms": "boards (複數型)"
    },
    {
        "word": "blackboard",
        "pos": "n.",
        "meaning": "黑板",
        "theme": "學校",
        "sentence": "The teacher used white chalk to write grammar rules on the blackboard.",
        "sentenceZh": "老師用白粉筆在黑板上寫文法規則。",
        "otherForms": "blackboards (複數型)"
    },
    {
        "word": "chalk",
        "pos": "n.",
        "meaning": "粉筆",
        "theme": "學校",
        "sentence": "We need to buy a new box of colored chalk for the art class.",
        "sentenceZh": "我們需要為美術課買一盒新的彩色粉筆。",
        "otherForms": "chalks (複數型)"
    },
    {
        "word": "picture",
        "pos": "n.",
        "meaning": "圖片",
        "theme": "學校",
        "sentence": "Draw a cute picture of the noun character on your worksheet.",
        "sentenceZh": "在你的學習單上畫出這個名詞角色的可愛圖片。",
        "otherForms": "pictures (複數型)"
    },
    {
        "word": "problem",
        "pos": "n.",
        "meaning": "問題",
        "theme": "學校",
        "sentence": "I can help you solve this difficult math problem.",
        "sentenceZh": "我能幫你解開這道困難的數學題。",
        "otherForms": "problems (複數型)"
    },
    {
        "word": "question",
        "pos": "n. / v.",
        "meaning": "問題；質疑",
        "theme": "學校",
        "sentence": "Raise your hand if you have a question about the vocabulary game.",
        "sentenceZh": "如果你對這個單字遊戲有問題請舉手。",
        "otherForms": "questions (複數型), questions (三單), questioning (ing型), questioned (過去式/分詞)"
    },
    {
        "word": "conversation",
        "pos": "n.",
        "meaning": "對話",
        "theme": "學校",
        "sentence": "We had a long conversation about our favorite badminton players.",
        "sentenceZh": "我們針對最喜歡的羽球選手進行了很長的對話。",
        "otherForms": "conversations (複數型)"
    },
    {
        "word": "seat",
        "pos": "n.",
        "meaning": "座位",
        "theme": "學校",
        "sentence": "Please go back to your own seat and sit down quietly.",
        "sentenceZh": "請回到你自己的座位並安靜坐下。",
        "otherForms": "seats (複數型)"
    },
    {
        "word": "answer",
        "pos": "n. / v.",
        "meaning": "回答；答案",
        "theme": "學校",
        "sentence": "Who knows the correct answer to this grammar question?",
        "sentenceZh": "誰知道這道文法題的正確答案？",
        "otherForms": "answers (複數型), answers (三單), answering (ing型), answered (過去式/分詞)"
    },
    {
        "word": "ask",
        "pos": "v.",
        "meaning": "詢問",
        "theme": "學校",
        "sentence": "Don't be afraid to ask the teacher for help if you don't understand.",
        "sentenceZh": "如果不懂，別害怕向老師尋求協助。",
        "otherForms": "asks (三單), asking (ing型), asked (過去式/分詞)"
    },
    {
        "word": "behave",
        "pos": "v.",
        "meaning": "守規矩",
        "theme": "學校",
        "sentence": "Good students know how to behave well in the classroom.",
        "sentenceZh": "好學生知道在教室裡該如何守規矩。",
        "otherForms": "behaves (三單), behaving (ing型(去e加ing)), behaved (過去式/分詞)"
    },
    {
        "word": "explain",
        "pos": "v.",
        "meaning": "解釋",
        "theme": "學校",
        "sentence": "Can you explain this difficult sentence structure to me again?",
        "sentenceZh": "你能再向我解釋一次這個困難的句型結構嗎？",
        "otherForms": "explains (三單), explaining (ing型), explained (過去式/分詞)"
    },
    {
        "word": "learn",
        "pos": "v.",
        "meaning": "學習",
        "theme": "學校",
        "sentence": "We will learn how to write simple code for a web page today.",
        "sentenceZh": "我們今天將學習如何為網頁寫簡單的程式碼。",
        "otherForms": "learns (三單), learning (ing型), learned/learnt (過去式(不規則)), learned/learnt (過去分詞(不規則))"
    },
    {
        "word": "listen",
        "pos": "v.",
        "meaning": "聆聽",
        "theme": "學校",
        "sentence": "Please listen carefully to the instructions before you start the game.",
        "sentenceZh": "遊戲開始前請仔細聆聽指示。",
        "otherForms": "listens (三單), listening (ing型), listened (過去式/分詞)"
    },
    {
        "word": "mark",
        "pos": "n. / v.",
        "meaning": "做記號；記號",
        "theme": "學校",
        "sentence": "The teacher used a red pen to mark my spelling mistakes.",
        "sentenceZh": "老師用紅筆批改了我的拼字錯誤。",
        "otherForms": "marks (複數型), marks (三單), marking (ing型), marked (過去式/分詞)"
    },
    {
        "word": "pass",
        "pos": "v.",
        "meaning": "通過",
        "theme": "學校",
        "sentence": "Study hard, review the words, and you will pass the test.",
        "sentenceZh": "努力讀書、複習單字，你就會通過考試。",
        "otherForms": "passes (三單(加es)), passing (ing型), passed (過去式/分詞)"
    },
    {
        "word": "practice",
        "pos": "n. / v.",
        "meaning": "練習",
        "theme": "學校",
        "sentence": "If you want to play well, you must practice your badminton swing.",
        "sentenceZh": "如果你想打得好，你必須練習揮拍。",
        "otherForms": "practices (三單), practicing (ing型(去e加ing)), practiced (過去式/分詞)"
    },
    {
        "word": "prepare",
        "pos": "v.",
        "meaning": "準備",
        "theme": "學校",
        "sentence": "You should prepare well for the big vocabulary test tomorrow.",
        "sentenceZh": "你應該為明天的單字大考好好準備。",
        "otherForms": "prepares (三單), preparing (ing型(去e加ing)), prepared (過去式/分詞)"
    },
    {
        "word": "pronounce",
        "pos": "v.",
        "meaning": "發音",
        "theme": "學校",
        "sentence": "Mr. Wang taught us how to pronounce the new word correctly.",
        "sentenceZh": "王老師教我們如何正確地發音這個新單字。",
        "otherForms": "pronounces (三單(加es)), pronouncing (ing型(去e加ing)), pronounced (過去式/分詞)"
    },
    {
        "word": "punish",
        "pos": "v.",
        "meaning": "懲罰",
        "theme": "學校",
        "sentence": "The teacher will not punish you if you are honest and tell the truth.",
        "sentenceZh": "如果你誠實說出真相，老師不會懲罰你。",
        "otherForms": "punishes (三單(加es)), punishing (ing型), punished (過去式/分詞)"
    },
    {
        "word": "read",
        "pos": "v.",
        "meaning": "閱讀",
        "theme": "學校",
        "sentence": "We will read a story about the weather gods today.",
        "sentenceZh": "我們今天要讀一個關於天氣神明的故事。",
        "otherForms": "reads (三單), reading (ing型), read (過去式(不規則同型)), read (過去分詞(不規則同型))"
    },
    {
        "word": "repeat",
        "pos": "v.",
        "meaning": "重複",
        "theme": "學校",
        "sentence": "Please repeat after me: \"Vocabulary passport.\"",
        "sentenceZh": "請跟著我唸一次：「單字護照」。",
        "otherForms": "repeats (三單), repeating (ing型), repeated (過去式/分詞)"
    },
    {
        "word": "review",
        "pos": "v. / n.",
        "meaning": "複習",
        "theme": "學校",
        "sentence": "Let's take ten minutes to review the words we learned yesterday.",
        "sentenceZh": "我們花十分鐘來複習昨天學的單字吧。",
        "otherForms": "reviews (三單), reviewing (ing型), reviewed (過去式/分詞)"
    },
    {
        "word": "say",
        "pos": "v.",
        "meaning": "說",
        "theme": "學校",
        "sentence": "What did you say? I couldn't hear you over the loud noise.",
        "sentenceZh": "你說什麼？噪音太大我聽不見。",
        "otherForms": "says (三單), saying (ing型), said (過去式(不規則)), said (過去分詞(不規則))"
    },
    {
        "word": "speak",
        "pos": "v.",
        "meaning": "說話",
        "theme": "學校",
        "sentence": "Don't be afraid to speak English loudly in class!",
        "sentenceZh": "別害怕在課堂上大聲說英文！",
        "otherForms": "speaks (三單), speaking (ing型), spoke (過去式(不規則)), spoken (過去分詞(不規則))"
    },
    {
        "word": "spell",
        "pos": "v.",
        "meaning": "拼寫",
        "theme": "學校",
        "sentence": "Can you tell me how to spell your English name?",
        "sentenceZh": "你能告訴我你的英文名字怎麼拼嗎？",
        "otherForms": "spells (三單), spelling (ing型), spelled/spelt (過去式/分詞(不規則))"
    },
    {
        "word": "study",
        "pos": "n. / v.",
        "meaning": "研讀",
        "theme": "學校",
        "sentence": "We usually study together in the library after school ends.",
        "sentenceZh": "我們通常在放學後一起在圖書館讀書。",
        "otherForms": "studies (三單(去y加ies)), studying (ing型), studied (過去式/分詞(去y加ied))"
    },
    {
        "word": "talk",
        "pos": "v. / n.",
        "meaning": "談話",
        "theme": "學校",
        "sentence": "Please do not talk to your classmates when the teacher is explaining.",
        "sentenceZh": "老師在講解時請不要和同學說話。",
        "otherForms": "talks (三單), talking (ing型), talked (過去式/分詞)"
    },
    {
        "word": "teach",
        "pos": "v.",
        "meaning": "教學",
        "theme": "學校",
        "sentence": "Our teacher uses interactive games to teach us grammar.",
        "sentenceZh": "我們的老師用互動遊戲來教我們文法。",
        "otherForms": "teaches (三單(加es)), teaching (ing型), taught (過去式(不規則)), taught (過去分詞(不規則))"
    },
    {
        "word": "underline",
        "pos": "v. / n.",
        "meaning": "畫底線",
        "theme": "學校",
        "sentence": "Please use a red pen to underline the verb in this sentence.",
        "sentenceZh": "請用紅筆在這個句子裡的動詞下方畫底線。",
        "otherForms": "underlines (三單), underlining (ing型(去e加ing)), underlined (過去式/分詞)"
    },
    {
        "word": "understand",
        "pos": "v.",
        "meaning": "理解",
        "theme": "學校",
        "sentence": "Do you understand what the rules of this game are?",
        "sentenceZh": "你懂這個遊戲的規則是什麼嗎？",
        "otherForms": "understands (三單), understanding (ing型), understood (過去式(不規則)), understood (過去分詞(不規則))"
    },
    {
        "word": "write",
        "pos": "v.",
        "meaning": "書寫",
        "theme": "學校",
        "sentence": "We have to write down all the correct answers on the worksheet.",
        "sentenceZh": "我們必須在學習單上寫下所有正確的答案。",
        "otherForms": "writes (三單), writing (ing型(去e加ing)), wrote (過去式(不規則)), written (過去分詞(不規則))"
    },
    {
        "word": "draw",
        "pos": "v.",
        "meaning": "畫畫",
        "theme": "學校",
        "sentence": "Use a pencil to draw a big circle on the blank paper.",
        "sentenceZh": "用鉛筆在空白紙上畫一個大圓圈。",
        "otherForms": "draws (三單), drawing (ing型), drew (過去式(不規則)), drown (過去分詞(不規則))"
    },
    {
        "word": "bakery",
        "pos": "n.",
        "meaning": "麵包店",
        "theme": "城鎮",
        "sentence": "I bought some fresh bread from the local bakery.",
        "sentenceZh": "我從當地的麵包店買了一些新鮮的麵包。",
        "otherForms": "bakeries (複數型(去y加ies))"
    },
    {
        "word": "bank",
        "pos": "n.",
        "meaning": "銀行",
        "theme": "城鎮",
        "sentence": "My mother went to the bank to get some cash.",
        "sentenceZh": "我媽媽去銀行領一些現金。",
        "otherForms": "banks (複數型)"
    },
    {
        "word": "beach",
        "pos": "n.",
        "meaning": "海灘",
        "theme": "城鎮",
        "sentence": "We played volleyball on the beautiful sandy beach.",
        "sentenceZh": "我們在美麗的沙灘上打排球。",
        "otherForms": "beaches (複數型(加es))"
    },
    {
        "word": "bookstore",
        "pos": "n.",
        "meaning": "書店",
        "theme": "城鎮",
        "sentence": "I found a good English dictionary at the bookstore.",
        "sentenceZh": "我在書店找到了一本很棒的英文字典。",
        "otherForms": "bookstores (複數型)"
    },
    {
        "word": "buffet",
        "pos": "n.",
        "meaning": "自助餐",
        "theme": "城鎮",
        "sentence": "We ate a lot of seafood at the buffet restaurant.",
        "sentenceZh": "我們在自助餐廳吃了很多海鮮。",
        "otherForms": "buffets (複數型)"
    },
    {
        "word": "cafeteria",
        "pos": "n.",
        "meaning": "自助餐廳",
        "theme": "城鎮",
        "sentence": "Students usually eat their lunch in the school cafeteria.",
        "sentenceZh": "學生通常在學校自助餐廳吃午餐。",
        "otherForms": "cafeterias (複數型)"
    },
    {
        "word": "castle",
        "pos": "n.",
        "meaning": "城堡",
        "theme": "城鎮",
        "sentence": "The king and queen lived in a huge stone castle.",
        "sentenceZh": "國王和女王住在一座巨大的石頭城堡裡。",
        "otherForms": "castles (複數型)"
    },
    {
        "word": "church",
        "pos": "n.",
        "meaning": "教堂",
        "theme": "城鎮",
        "sentence": "We saw a beautiful old church in the center of the town.",
        "sentenceZh": "我們在鎮中心看到了一座美麗的古老教堂。",
        "otherForms": "churches (複數型(加es))"
    },
    {
        "word": "city",
        "pos": "n.",
        "meaning": "城市",
        "theme": "城鎮",
        "sentence": "Douliu is a very convenient city to live in.",
        "sentenceZh": "斗六是個生活非常便利的城市。",
        "otherForms": "cities (複數型(去y加ies))"
    },
    {
        "word": "company",
        "pos": "n.",
        "meaning": "公司",
        "theme": "城鎮",
        "sentence": "His father works for a large computer company.",
        "sentenceZh": "他爸爸在一家大型電腦公司上班。",
        "otherForms": "companies (複數型(去y加ies))"
    },
    {
        "word": "convenience store",
        "pos": "n.",
        "meaning": "便利商店",
        "theme": "城鎮",
        "sentence": "I bought a cold drink from the convenience store.",
        "sentenceZh": "我在便利商店買了一杯冷飲。",
        "otherForms": "convenience stores (複數型)"
    },
    {
        "word": "country",
        "pos": "n.",
        "meaning": "國家；鄉下",
        "theme": "城鎮",
        "sentence": "Taiwan is a very beautiful country with friendly people.",
        "sentenceZh": "台灣是一個非常美麗且人民友善的國家。",
        "otherForms": "countries (複數型(去y加ies))"
    },
    {
        "word": "culture center",
        "pos": "n.",
        "meaning": "文化中心",
        "theme": "城鎮",
        "sentence": "We watched a dance show at the culture center.",
        "sentenceZh": "我們在文化中心看了一場舞蹈表演。",
        "otherForms": "culture centers (複數型)"
    },
    {
        "word": "department store",
        "pos": "n.",
        "meaning": "百貨公司",
        "theme": "城鎮",
        "sentence": "My sister bought a new dress at the department store.",
        "sentenceZh": "我姐姐在百貨公司買了一件新洋裝。",
        "otherForms": "department stores (複數型)"
    },
    {
        "word": "downtown",
        "pos": "n. / adv.",
        "meaning": "市中心",
        "theme": "城鎮",
        "sentence": "There are many shops and restaurants downtown.",
        "sentenceZh": "市中心有許多商店和餐廳。",
        "otherForms": ""
    },
    {
        "word": "drugstore",
        "pos": "n.",
        "meaning": "藥局",
        "theme": "城鎮",
        "sentence": "You can buy basic medicine at the drugstore.",
        "sentenceZh": "你可以在藥局買到基本藥物。",
        "otherForms": "drugstores (複數型)"
    },
    {
        "word": "factory",
        "pos": "n.",
        "meaning": "工廠",
        "theme": "城鎮",
        "sentence": "They make sports shoes in that large factory.",
        "sentenceZh": "他們在那間大工廠裡製造運動鞋。",
        "otherForms": "factories (複數型(去y加ies))"
    },
    {
        "word": "farm",
        "pos": "n.",
        "meaning": "農場",
        "theme": "城鎮",
        "sentence": "The farmer grows cabbages and sweet potatoes on his farm.",
        "sentenceZh": "農夫在他的農場裡種高麗菜和地瓜。",
        "otherForms": "farms (複數型)"
    },
    {
        "word": "fast food restaurant",
        "pos": "n.",
        "meaning": "速食餐廳",
        "theme": "城鎮",
        "sentence": "Kids love eating French fries at the fast food restaurant.",
        "sentenceZh": "孩子們喜歡在速食餐廳吃薯條。",
        "otherForms": "fast food restaurants (複數型)"
    },
    {
        "word": "fire station",
        "pos": "n.",
        "meaning": "消防局",
        "theme": "城鎮",
        "sentence": "The red fire trucks rushed out of the fire station.",
        "sentenceZh": "紅色的消防車從消防局衝了出來。",
        "otherForms": "fire stations (複數型)"
    },
    {
        "word": "flower shop",
        "pos": "n.",
        "meaning": "花店",
        "theme": "城鎮",
        "sentence": "He bought some red roses at the flower shop.",
        "sentenceZh": "他在花店買了一些紅玫瑰。",
        "otherForms": "flower shops (複數型)"
    },
    {
        "word": "hospital",
        "pos": "n.",
        "meaning": "醫院",
        "theme": "城鎮",
        "sentence": "The doctors and nurses work long hours in the hospital.",
        "sentenceZh": "醫生和護士在醫院裡長時間工作。",
        "otherForms": "hospitals (複數型)"
    },
    {
        "word": "hotel",
        "pos": "n.",
        "meaning": "飯店",
        "theme": "城鎮",
        "sentence": "We stayed in a nice hotel during our trip to Japan.",
        "sentenceZh": "我們去日本旅行時住在一間很棒的飯店。",
        "otherForms": "hotels (複數型)"
    },
    {
        "word": "kingdom",
        "pos": "n.",
        "meaning": "王國",
        "theme": "城鎮",
        "sentence": "The brave prince saved the kingdom from the giant.",
        "sentenceZh": "勇敢的王子從巨人手中拯救了王國。",
        "otherForms": "kingdoms (複數型)"
    },
    {
        "word": "mall",
        "pos": "n.",
        "meaning": "購物中心",
        "theme": "城鎮",
        "sentence": "We spent the whole afternoon shopping at the big mall.",
        "sentenceZh": "我們整個下午都在大型購物中心裡逛街。",
        "otherForms": "malls (複數型)"
    },
    {
        "word": "market",
        "pos": "n.",
        "meaning": "市場",
        "theme": "城鎮",
        "sentence": "My mom goes to the traditional market to buy fresh vegetables.",
        "sentenceZh": "我媽媽去傳統市場買新鮮的蔬菜。",
        "otherForms": "markets (複數型)"
    },
    {
        "word": "men’s room",
        "pos": "n.",
        "meaning": "男廁",
        "theme": "城鎮",
        "sentence": "The men’s room is on the right side of the hall.",
        "sentenceZh": "男廁在走廊的右側。",
        "otherForms": "men's rooms (複數型)"
    },
    {
        "word": "movie theater",
        "pos": "n.",
        "meaning": "電影院",
        "theme": "城鎮",
        "sentence": "We bought popcorn before entering the movie theater.",
        "sentenceZh": "我們進電影院前買了爆米花。",
        "otherForms": "movie theaters (複數型)"
    },
    {
        "word": "museum",
        "pos": "n.",
        "meaning": "博物館",
        "theme": "城鎮",
        "sentence": "We saw many old dinosaur bones in the museum.",
        "sentenceZh": "我們在博物館裡看到許多古老的恐龍骨頭。",
        "otherForms": "museums (複數型)"
    },
    {
        "word": "office",
        "pos": "n.",
        "meaning": "辦公室",
        "theme": "城鎮",
        "sentence": "The teachers are working hard to prepare lessons in the office.",
        "sentenceZh": "老師們正在辦公室裡努力準備課程。",
        "otherForms": "offices (複數型)"
    },
    {
        "word": "park",
        "pos": "n. / v.",
        "meaning": "公園/ 停車",
        "theme": "城鎮",
        "sentence": "I jog and play badminton in the park every evening.",
        "sentenceZh": "我每天傍晚都在公園慢跑和打羽毛球。",
        "otherForms": "parks (複數型)"
    },
    {
        "word": "place",
        "pos": "n.",
        "meaning": "地方",
        "theme": "城鎮",
        "sentence": "This coffee shop is a great place to sit down and read a book.",
        "sentenceZh": "這家咖啡廳是個坐下來看書的好地方。",
        "otherForms": "places (複數型)"
    },
    {
        "word": "police station",
        "pos": "n.",
        "meaning": "警察局",
        "theme": "城鎮",
        "sentence": "You can ask for help at the police station if you are lost.",
        "sentenceZh": "如果你迷路了，可以去警察局尋求協助。",
        "otherForms": "police stations (複數型)"
    },
    {
        "word": "pool",
        "pos": "n.",
        "meaning": "游泳池",
        "theme": "城鎮",
        "sentence": "We went swimming in the public pool yesterday afternoon.",
        "sentenceZh": "我們昨天下午去公共游泳池游泳。",
        "otherForms": "pools (複數型)"
    },
    {
        "word": "post office",
        "pos": "n.",
        "meaning": "郵局",
        "theme": "城鎮",
        "sentence": "I need to buy some stamps to mail a letter at the post office.",
        "sentenceZh": "我需要去郵局買些郵票來寄信。",
        "otherForms": "post offices (複數型)"
    },
    {
        "word": "prison",
        "pos": "n.",
        "meaning": "監獄",
        "theme": "城鎮",
        "sentence": "The bad guy was sent to prison for ten years.",
        "sentenceZh": "那個壞人被送進監獄十年。",
        "otherForms": "prisons (複數型), prisoner (囚犯 - 名詞)"
    },
    {
        "word": "restaurant",
        "pos": "n.",
        "meaning": "餐廳",
        "theme": "城鎮",
        "sentence": "We celebrated my birthday at a nice Italian restaurant.",
        "sentenceZh": "我們在一家很棒的義大利餐廳慶祝我的生日。",
        "otherForms": "restaurants (複數型)"
    },
    {
        "word": "restroom",
        "pos": "n.",
        "meaning": "洗手間",
        "theme": "城鎮",
        "sentence": "Excuse me, where is the nearest restroom?",
        "sentenceZh": "不好意思，請問最近的洗手間在哪裡？",
        "otherForms": "restrooms (複數型)"
    },
    {
        "word": "road",
        "pos": "n.",
        "meaning": "陸",
        "theme": "城鎮",
        "sentence": "Please look both ways when you cross the busy road.",
        "sentenceZh": "過這條繁忙的馬路時請看左右兩邊。",
        "otherForms": "roads (複數型)"
    },
    {
        "word": "shop",
        "pos": "n. / v.",
        "meaning": "商店/ 購物",
        "theme": "城鎮",
        "sentence": "There is a new stationery shop near our school.",
        "sentenceZh": "學校附近有一間新的文具店。",
        "otherForms": "shops (複數型)"
    },
    {
        "word": "stationery store",
        "pos": "n.",
        "meaning": "文具店",
        "theme": "城鎮",
        "sentence": "I bought two red pens and an eraser at the stationery store.",
        "sentenceZh": "我在文具店買了兩支紅筆和一個橡皮擦。",
        "otherForms": "stationery stores (複數型)"
    },
    {
        "word": "store",
        "pos": "n.",
        "meaning": "商店",
        "theme": "城鎮",
        "sentence": "This store sells a lot of cool 80s music albums.",
        "sentenceZh": "這家商店賣很多酷炫的 80 年代音樂專輯。",
        "otherForms": "stores (複數型)"
    },
    {
        "word": "street",
        "pos": "n.",
        "meaning": "街",
        "theme": "城鎮",
        "sentence": "The street in front of my house is very quiet at night.",
        "sentenceZh": "我家門前的街道在晚上非常安靜。",
        "otherForms": "streets (複數型)"
    },
    {
        "word": "supermarket",
        "pos": "n.",
        "meaning": "超市",
        "theme": "城鎮",
        "sentence": "We bought milk and fresh eggs at the supermarket.",
        "sentenceZh": "我們在超市買了牛奶和新鮮雞蛋。",
        "otherForms": "supermarkets (複數型)"
    },
    {
        "word": "temple",
        "pos": "n.",
        "meaning": "寺廟",
        "theme": "城鎮",
        "sentence": "Many people visit the temple to pray during the Chinese New Year.",
        "sentenceZh": "許多人在春節期間會去寺廟拜拜。",
        "otherForms": "temples (複數型)"
    },
    {
        "word": "theater",
        "pos": "n.",
        "meaning": "劇院",
        "theme": "城鎮",
        "sentence": "We watched a wonderful play at the national theater.",
        "sentenceZh": "我們在國家劇院看了一齣精彩的戲劇。",
        "otherForms": "theaters (複數型)"
    },
    {
        "word": "tower",
        "pos": "n.",
        "meaning": "塔",
        "theme": "城鎮",
        "sentence": "Taipei 101 is a very famous and tall tower.",
        "sentenceZh": "台北 101 是一座非常有名且高聳的塔。",
        "otherForms": "towers (複數型)"
    },
    {
        "word": "town",
        "pos": "n.",
        "meaning": "城鎮",
        "theme": "城鎮",
        "sentence": "Dounan is a lovely little town.",
        "sentenceZh": "斗南是個可愛的小鎮。",
        "otherForms": "towns (複數型)"
    },
    {
        "word": "tunnel",
        "pos": "n.",
        "meaning": "隧道",
        "theme": "城鎮",
        "sentence": "The fast train went through a long dark tunnel.",
        "sentenceZh": "高鐵穿過了一條長長黑黑的隧道。",
        "otherForms": "tunnels (複數型)"
    },
    {
        "word": "village",
        "pos": "n.",
        "meaning": "村莊",
        "theme": "城鎮",
        "sentence": "My grandparents live in a quiet little village by the sea.",
        "sentenceZh": "我祖父母住在海邊一個安靜的小村莊。",
        "otherForms": "villages (複數型)"
    },
    {
        "word": "waterfalls",
        "pos": "n.",
        "meaning": "瀑布",
        "theme": "城鎮",
        "sentence": "The tall waterfalls deep in the mountains are beautiful.",
        "sentenceZh": "深山裡高聳的瀑布非常美麗。",
        "otherForms": "waterfalls (複數型)"
    },
    {
        "word": "women’s room",
        "pos": "n.",
        "meaning": "女廁",
        "theme": "城鎮",
        "sentence": "The women’s room is right next to the elevator.",
        "sentenceZh": "女廁就在電梯旁邊。",
        "otherForms": "women's rooms (複數型)"
    },
    {
        "word": "zoo",
        "pos": "n.",
        "meaning": "動物園",
        "theme": "城鎮",
        "sentence": "We saw lions, monkeys, and giraffes at the city zoo.",
        "sentenceZh": "我們在市立動物園看到了獅子、猴子和長頸鹿。",
        "otherForms": "zoos (複數型)"
    },
    {
        "word": "address",
        "pos": "n.",
        "meaning": "地址；處理",
        "theme": "城鎮",
        "sentence": "Please write down your name and address.",
        "sentenceZh": "請寫下你的名字和地址。",
        "otherForms": "addresses (複數/三單), addressed (過去/過去分詞), addressing (現在分詞)"
    },
    {
        "word": "airlines",
        "pos": "n.",
        "meaning": "航空公司",
        "theme": "交通",
        "sentence": "Which airlines are you taking to fly to America?",
        "sentenceZh": "你打算搭哪家航空公司的飛機去美國？",
        "otherForms": "airlines (單複數同型)"
    },
    {
        "word": "airplane",
        "pos": "n.",
        "meaning": "飛機",
        "theme": "交通",
        "sentence": "The huge airplane took off safely into the blue sky.",
        "sentenceZh": "巨大的飛機安全地起飛進入藍天中。",
        "otherForms": "airplanes (複數型)"
    },
    {
        "word": "airport",
        "pos": "n.",
        "meaning": "機場",
        "theme": "交通",
        "sentence": "We arrived at the airport two hours early for our flight.",
        "sentenceZh": "為了搭機，我們提早兩小時抵達機場。",
        "otherForms": "airports (複數型)"
    },
    {
        "word": "ambulance",
        "pos": "n.",
        "meaning": "救護車",
        "theme": "交通",
        "sentence": "The ambulance quickly took the sick man to the hospital.",
        "sentenceZh": "救護車迅速地把病人送往醫院。",
        "otherForms": "ambulances (複數型)"
    },
    {
        "word": "bicycle",
        "pos": "n.",
        "meaning": "腳踏車",
        "theme": "交通",
        "sentence": "I ride my bicycle to school with my classmates every day.",
        "sentenceZh": "我每天和同學一起騎腳踏車上學。",
        "otherForms": "bicycles (複數型)"
    },
    {
        "word": "bike",
        "pos": "n.",
        "meaning": "腳踏車",
        "theme": "交通",
        "sentence": "Don't forget to lock your bike when you park it.",
        "sentenceZh": "停好腳踏車時別忘了上鎖。",
        "otherForms": "bikes (複數型)"
    },
    {
        "word": "block",
        "pos": "n. / v.",
        "meaning": "街區/ 阻擋",
        "theme": "交通",
        "sentence": "Walk straight for one block and then turn left.",
        "sentenceZh": "往前直走一個街區，然後左轉。",
        "otherForms": "blocks (複數型)"
    },
    {
        "word": "boat",
        "pos": "n.",
        "meaning": "船",
        "theme": "交通",
        "sentence": "We rented a small boat to row on the beautiful lake.",
        "sentenceZh": "我們租了一艘小船在美麗的湖上划。",
        "otherForms": "boats (複數型)"
    },
    {
        "word": "bridge",
        "pos": "n.",
        "meaning": "橋樑",
        "theme": "交通",
        "sentence": "The train slowly crossed the long iron bridge.",
        "sentenceZh": "火車緩慢地駛過長長的鐵橋。",
        "otherForms": "bridges (複數型)"
    },
    {
        "word": "bus",
        "pos": "n.",
        "meaning": "公車",
        "theme": "交通",
        "sentence": "I ran fast because I almost missed the school bus this morning.",
        "sentenceZh": "我跑得很快，因為今天早上我差點錯過校車。",
        "otherForms": "buses (複數型(加es))"
    },
    {
        "word": "bus stop",
        "pos": "n.",
        "meaning": "公車站",
        "theme": "交通",
        "sentence": "There are many people standing and waiting at the bus stop.",
        "sentenceZh": "許多人站著在公車站等車。",
        "otherForms": "bus stops (複數型)"
    },
    {
        "word": "car",
        "pos": "n.",
        "meaning": "汽車",
        "theme": "交通",
        "sentence": "My dad washed his white car carefully on Sunday morning.",
        "sentenceZh": "我爸爸在星期日早上仔細地洗了他的白車。",
        "otherForms": "cars (複數型)"
    },
    {
        "word": "flat tire",
        "pos": "n.",
        "meaning": "爆胎",
        "theme": "交通",
        "sentence": "We couldn't drive to Taipei because the car had a flat tire.",
        "sentenceZh": "我們無法開車去台北，因為汽車爆胎了。",
        "otherForms": "flat tires (複數型)"
    },
    {
        "word": "flight",
        "pos": "n.",
        "meaning": "飛行；航班",
        "theme": "交通",
        "sentence": "Our flight to Japan was delayed by the strong typhoon.",
        "sentenceZh": "我們飛往日本的航班因為強烈颱風而延誤了。",
        "otherForms": "flights (複數型)"
    },
    {
        "word": "helicopter",
        "pos": "n.",
        "meaning": "直升機",
        "theme": "交通",
        "sentence": "The rescue helicopter flew low over the mountains.",
        "sentenceZh": "救援直升機低空飛過群山。",
        "otherForms": "helicopters (複數型)"
    },
    {
        "word": "highway",
        "pos": "n.",
        "meaning": "高速公路",
        "theme": "交通",
        "sentence": "Cars are allowed to drive very fast on the highway.",
        "sentenceZh": "汽車在高速公路上可以開得非常快。",
        "otherForms": "highways (複數型)"
    },
    {
        "word": "jeep",
        "pos": "n.",
        "meaning": "吉普車",
        "theme": "交通",
        "sentence": "They drove a strong green jeep through the jungle.",
        "sentenceZh": "他們開著一輛堅固的綠色吉普車穿過叢林。",
        "otherForms": "jeeps (複數型)"
    },
    {
        "word": "metro",
        "pos": "n.",
        "meaning": "地鐵",
        "theme": "交通",
        "sentence": "The metro is a very fast and clean way to travel in the city.",
        "sentenceZh": "地鐵是城市裡非常快速且乾淨的旅行方式。",
        "otherForms": "metros (複數型)"
    },
    {
        "word": "motorcycle",
        "pos": "n.",
        "meaning": "摩托車",
        "theme": "交通",
        "sentence": "You must wear a helmet to protect your head when riding a motorcycle.",
        "sentenceZh": "騎摩托車時必須戴安全帽來保護頭部。",
        "otherForms": "motorcycles (複數型)"
    },
    {
        "word": "MRT",
        "pos": "n.",
        "meaning": "捷運",
        "theme": "交通",
        "sentence": "I often take the MRT when I visit my relatives in Taipei.",
        "sentenceZh": "我去台北拜訪親戚時經常搭捷運。",
        "otherForms": "MRTs (複數型)"
    },
    {
        "word": "overpass",
        "pos": "n.",
        "meaning": "天橋；陸橋",
        "theme": "交通",
        "sentence": "Use the overpass to cross the busy street safely.",
        "sentenceZh": "請走天橋以安全地穿越這條繁忙的街道。",
        "otherForms": "overpasses (複數型(加es))"
    },
    {
        "word": "parking lot",
        "pos": "n.",
        "meaning": "停車場",
        "theme": "交通",
        "sentence": "The supermarket parking lot is totally full on weekends.",
        "sentenceZh": "超市的停車場在週末總是全滿。",
        "otherForms": "parking lots (複數型)"
    },
    {
        "word": "passenger",
        "pos": "n.",
        "meaning": "乘客",
        "theme": "交通",
        "sentence": "The train had many passengers going home for the holidays.",
        "sentenceZh": "火車上有許多要回家過節的乘客。",
        "otherForms": "passengers (複數型)"
    },
    {
        "word": "path",
        "pos": "n.",
        "meaning": "小徑",
        "theme": "交通",
        "sentence": "We walked along a small dirt path in the woods.",
        "sentenceZh": "我們沿著樹林裡的一條小泥巴路走。",
        "otherForms": "paths (複數型)"
    },
    {
        "word": "platform",
        "pos": "n.",
        "meaning": "月台",
        "theme": "交通",
        "sentence": "The express train will arrive at platform number two soon.",
        "sentenceZh": "快速列車很快就會抵達第二月台。",
        "otherForms": "platforms (複數型)"
    },
    {
        "word": "railroad",
        "pos": "n.",
        "meaning": "鐵路",
        "theme": "交通",
        "sentence": "The railroad connects many small towns in Taiwan together.",
        "sentenceZh": "鐵路將台灣許多小鎮連接在一起。",
        "otherForms": "railroads (複數型)"
    },
    {
        "word": "railway",
        "pos": "n.",
        "meaning": "鐵道",
        "theme": "交通",
        "sentence": "Taking a trip on the Taiwan railway is very relaxing.",
        "sentenceZh": "搭乘台灣鐵道旅行非常令人放鬆。",
        "otherForms": "railways (複數型)"
    },
    {
        "word": "scooter",
        "pos": "n.",
        "meaning": "速克達；小摩托車",
        "theme": "交通",
        "sentence": "Many teachers ride scooters to get to school quickly.",
        "sentenceZh": "許多老師騎機車以快速抵達學校。",
        "otherForms": "scooters (複數型)"
    },
    {
        "word": "ship",
        "pos": "n.",
        "meaning": "船（大船）",
        "theme": "交通",
        "sentence": "The huge cargo ship sailed slowly across the ocean.",
        "sentenceZh": "巨大的貨輪緩慢地航行過海洋。",
        "otherForms": "ships (複數型)"
    },
    {
        "word": "sidewalk",
        "pos": "n.",
        "meaning": "人行道",
        "theme": "交通",
        "sentence": "Please walk carefully on the sidewalk for your own safety.",
        "sentenceZh": "為了你的安全，請小心走在人行道上。",
        "otherForms": "sidewalks (複數型)"
    },
    {
        "word": "station",
        "pos": "n.",
        "meaning": "車站",
        "theme": "交通",
        "sentence": "I will meet you at the Dounan train station at five o'clock.",
        "sentenceZh": "我五點在斗南火車站跟你碰面。",
        "otherForms": "stations (複數型)"
    },
    {
        "word": "subway",
        "pos": "n.",
        "meaning": "地鐵",
        "theme": "交通",
        "sentence": "Taking the subway is very easy when you travel in New York.",
        "sentenceZh": "去紐約旅行時，搭地鐵非常簡單。",
        "otherForms": "subways (複數型)"
    },
    {
        "word": "tank",
        "pos": "n.",
        "meaning": "坦克車",
        "theme": "交通",
        "sentence": "We saw a heavy military tank displayed in the museum.",
        "sentenceZh": "我們在博物館看到展示著一輛重型軍事坦克車。",
        "otherForms": "tanks (複數型)"
    },
    {
        "word": "taxi",
        "pos": "n.",
        "meaning": "計程車",
        "theme": "交通",
        "sentence": "We took a yellow taxi because it was raining heavily outside.",
        "sentenceZh": "因為外面下大雨，我們搭了一輛黃色計程車。",
        "otherForms": "taxis (複數型)"
    },
    {
        "word": "track",
        "pos": "n. / v.",
        "meaning": "軌道；追蹤",
        "theme": "交通",
        "sentence": "The police are trying to track the bad guy.",
        "sentenceZh": "警察正試圖追蹤那個壞人。",
        "otherForms": "tracks (三單), tracked (過去/過去分詞), tracking (現在分詞)"
    },
    {
        "word": "traffic",
        "pos": "n.",
        "meaning": "交通",
        "theme": "交通",
        "sentence": "The traffic is always very bad during the morning rush hour.",
        "sentenceZh": "早上尖峰時間的交通總是非常糟。",
        "otherForms": ""
    },
    {
        "word": "train",
        "pos": "n. / v.",
        "meaning": "火車/ 訓練",
        "theme": "交通",
        "sentence": "The fast train arrived in Taichung in just forty minutes.",
        "sentenceZh": "快車只花了四十分鐘就抵達台中。",
        "otherForms": "trains (複數型)"
    },
    {
        "word": "train station",
        "pos": "n.",
        "meaning": "火車站",
        "theme": "交通",
        "sentence": "Dounan train station is a beautiful historic building.",
        "sentenceZh": "斗南火車站是一棟美麗的歷史建築。",
        "otherForms": "train stations (複數型)"
    },
    {
        "word": "truck",
        "pos": "n.",
        "meaning": "卡車",
        "theme": "交通",
        "sentence": "The big delivery truck carried a lot of fresh vegetables.",
        "sentenceZh": "大貨車載了很多新鮮蔬菜。",
        "otherForms": "trucks (複數型)"
    },
    {
        "word": "underpass",
        "pos": "n.",
        "meaning": "地下道",
        "theme": "交通",
        "sentence": "We walked through the dark underpass to get to the other side.",
        "sentenceZh": "我們走過昏暗的地下道來到另一邊。",
        "otherForms": "underpasses (複數型(加es))"
    },
    {
        "word": "wheel",
        "pos": "n.",
        "meaning": "輪子",
        "theme": "交通",
        "sentence": "My bicycle front wheel is broken and needs to be fixed.",
        "sentenceZh": "我的腳踏車前輪壞了，需要修理。",
        "otherForms": "wheels (複數型)"
    },
    {
        "word": "arrive",
        "pos": "v.",
        "meaning": "到達",
        "theme": "交通",
        "sentence": "Director Lee will arrive at our school tomorrow morning.",
        "sentenceZh": "李主任明天早上會抵達我們學校。",
        "otherForms": "arrives (三單), arriving (ing型(去e加ing)), arrived (過去式/分詞)"
    },
    {
        "word": "cross",
        "pos": "v. / n.",
        "meaning": "穿越/ 十字架",
        "theme": "交通",
        "sentence": "Look both left and right before you cross the street.",
        "sentenceZh": "過馬路前要先看左邊和右邊。",
        "otherForms": "crosses (三單(加es)), crossing (ing型), crossed (過去式/分詞)"
    },
    {
        "word": "drive",
        "pos": "v.",
        "meaning": "開車",
        "theme": "交通",
        "sentence": "My uncle learned how to drive a car when he was 18.",
        "sentenceZh": "我叔叔十八歲時學會了如何開車。",
        "otherForms": "drives (三單), driving (ing型(去e加ing)), drove (過去式(不規則)), driven (過去分詞(不規則))"
    },
    {
        "word": "fly",
        "pos": "v. / n.",
        "meaning": "飛行/ 蒼蠅",
        "theme": "交通",
        "sentence": "Birds use their strong wings to fly high in the sky.",
        "sentenceZh": "鳥類用強壯的翅膀在高空飛行。",
        "otherForms": "flies (三單(去y加ies)), flying (ing型), flew (過去式(不規則)), flown (過去分詞(不規則))"
    },
    {
        "word": "land",
        "pos": "v. / n.",
        "meaning": "降落/ 土地",
        "theme": "交通",
        "sentence": "The airplane will land at the airport in ten minutes.",
        "sentenceZh": "飛機將在十分鐘後降落於機場。",
        "otherForms": "lands (三單), landing (ing型), landed (過去式/分詞)"
    },
    {
        "word": "ride",
        "pos": "v. / n.",
        "meaning": "騎乘；搭乘",
        "theme": "交通",
        "sentence": "I like to ride my bike along the riverbank on weekends.",
        "sentenceZh": "我週末喜歡沿著河岸騎腳踏車。",
        "otherForms": "rides (三單), riding (ing型(去e加ing)), rode (過去式(不規則)), ridden (過去分詞(不規則))"
    },
    {
        "word": "sail",
        "pos": "v. / n.",
        "meaning": "航行",
        "theme": "交通",
        "sentence": "The small boat will sail out to the sea early tomorrow.",
        "sentenceZh": "小船明早將航向大海。",
        "otherForms": "sails (三單), sailing (ing型), sailed (過去式/分詞)"
    },
    {
        "word": "turn",
        "pos": "v. / n.",
        "meaning": "轉彎/ 彎",
        "theme": "交通",
        "sentence": "Keep walking straight and turn right at the next corner.",
        "sentenceZh": "繼續直走，然後在下一個路口右轉。",
        "otherForms": "turns (三單), turning (ing型), turned (過去式/分詞)"
    },
    {
        "word": "beef",
        "pos": "n.",
        "meaning": "牛肉",
        "theme": "食物",
        "sentence": "I ordered a big bowl of beef noodles for lunch today.",
        "sentenceZh": "我今天午餐點了一大碗牛肉麵。",
        "otherForms": ""
    },
    {
        "word": "bread",
        "pos": "n.",
        "meaning": "麵包",
        "theme": "食物",
        "sentence": "I usually eat some bread and drink milk for breakfast.",
        "sentenceZh": "我早餐通常吃一些麵包並喝牛奶。",
        "otherForms": ""
    },
    {
        "word": "breakfast",
        "pos": "n.",
        "meaning": "早餐",
        "theme": "食物",
        "sentence": "Eating a healthy breakfast gives you energy for the morning.",
        "sentenceZh": "吃一頓健康的早餐能為你的早晨帶來活力。",
        "otherForms": "breakfasts (複數型)"
    },
    {
        "word": "brunch",
        "pos": "n.",
        "meaning": "早午餐",
        "theme": "食物",
        "sentence": "We had a nice brunch together late on Sunday morning.",
        "sentenceZh": "我們星期日快中午時一起吃了頓美好的早午餐。",
        "otherForms": "brunches (複數型(加es))"
    },
    {
        "word": "bun",
        "pos": "n.",
        "meaning": "小圓麵包",
        "theme": "食物",
        "sentence": "My grandmother makes delicious steamed pork buns.",
        "sentenceZh": "我奶奶做的豬肉包子非常美味。",
        "otherForms": "buns (複數型)"
    },
    {
        "word": "burger",
        "pos": "n.",
        "meaning": "漢堡",
        "theme": "食物",
        "sentence": "He was so hungry that he ate a huge cheese burger.",
        "sentenceZh": "他餓到吃下了一個巨大的起司漢堡。",
        "otherForms": "burgers (複數型)"
    },
    {
        "word": "cereal",
        "pos": "n.",
        "meaning": "穀物麥片",
        "theme": "食物",
        "sentence": "I usually have chocolate cereal with cold milk in the morning.",
        "sentenceZh": "我早上通常吃巧克力麥片配冷牛奶。",
        "otherForms": "cereals (複數型)"
    },
    {
        "word": "chicken",
        "pos": "n.",
        "meaning": "雞肉",
        "theme": "食物",
        "sentence": "We had fried chicken and rice for dinner last night.",
        "sentenceZh": "我們昨晚晚餐吃了炸雞和白飯。",
        "otherForms": "chickens (複數型(當雞))"
    },
    {
        "word": "dinner",
        "pos": "n.",
        "meaning": "晚餐",
        "theme": "食物",
        "sentence": "Let's cook a delicious family dinner together tonight.",
        "sentenceZh": "我們今晚一起煮一頓美味的家庭晚餐吧。",
        "otherForms": "dinners (複數型)"
    },
    {
        "word": "dumpling",
        "pos": "n.",
        "meaning": "餃子",
        "theme": "食物",
        "sentence": "People in Taiwan often eat dumplings during the Chinese New Year.",
        "sentenceZh": "台灣人經常在農曆新年時吃水餃。",
        "otherForms": "dumplings (複數型)"
    },
    {
        "word": "egg",
        "pos": "n.",
        "meaning": "蛋",
        "theme": "食物",
        "sentence": "I need two eggs and some flour to make this cake.",
        "sentenceZh": "我需要兩顆蛋和一些麵粉來做這個蛋糕。",
        "otherForms": "eggs (複數型)"
    },
    {
        "word": "fast food",
        "pos": "n.",
        "meaning": "速食",
        "theme": "食物",
        "sentence": "Eating too much fast food is bad for your health.",
        "sentenceZh": "吃太多速食對你的健康不好。",
        "otherForms": ""
    },
    {
        "word": "fish",
        "pos": "n. / v.",
        "meaning": "魚/ 釣魚",
        "theme": "食物",
        "sentence": "My grandfather likes to eat steamed fish with ginger.",
        "sentenceZh": "我爺爺喜歡吃清蒸薑絲魚。",
        "otherForms": "fish (單複數同型)"
    },
    {
        "word": "flour",
        "pos": "n.",
        "meaning": "麵粉",
        "theme": "食物",
        "sentence": "You need water and white flour to make fresh bread.",
        "sentenceZh": "你需要水和白麵粉來做新鮮麵包。",
        "otherForms": ""
    },
    {
        "word": "food",
        "pos": "n.",
        "meaning": "食物",
        "theme": "食物",
        "sentence": "The food at this night market is very famous and delicious.",
        "sentenceZh": "這個夜市的食物非常有名且美味。",
        "otherForms": "foods (複數型(指種類))"
    },
    {
        "word": "fries",
        "pos": "n.",
        "meaning": "薯條",
        "theme": "食物",
        "sentence": "Would you like some hot fries with your hamburger?",
        "sentenceZh": "你的漢堡要配一點熱薯條嗎？",
        "otherForms": ""
    },
    {
        "word": "French fries",
        "pos": "n.",
        "meaning": "薯條",
        "theme": "食物",
        "sentence": "Kids love to eat crispy French fries with sweet ketchup.",
        "sentenceZh": "孩子們喜歡吃酥脆的薯條配甜甜的番茄醬。",
        "otherForms": ""
    },
    {
        "word": "ham",
        "pos": "n.",
        "meaning": "火腿",
        "theme": "食物",
        "sentence": "I made a simple ham and cheese sandwich for my lunch.",
        "sentenceZh": "我為我的午餐做了一個簡單的火腿起司三明治。",
        "otherForms": "hams (複數型(指種類))"
    },
    {
        "word": "hamburger",
        "pos": "n.",
        "meaning": "漢堡",
        "theme": "食物",
        "sentence": "He ordered a big beef hamburger and a cola at the restaurant.",
        "sentenceZh": "他在餐廳點了一個大牛肉漢堡和一杯可樂。",
        "otherForms": "hamburgers (複數型)"
    },
    {
        "word": "hot dog",
        "pos": "n.",
        "meaning": "熱狗",
        "theme": "食物",
        "sentence": "We bought a hot dog on a stick at the convenience store.",
        "sentenceZh": "我們在便利商店買了一支熱狗。",
        "otherForms": "hot dogs (複數型)"
    },
    {
        "word": "instant noodle",
        "pos": "n.",
        "meaning": "泡麵",
        "theme": "食物",
        "sentence": "I cooked some instant noodles because I was hungry late at night.",
        "sentenceZh": "因為深夜肚子餓，我煮了一些泡麵。",
        "otherForms": "instant noodles (複數型)"
    },
    {
        "word": "lunch",
        "pos": "n.",
        "meaning": "午餐",
        "theme": "食物",
        "sentence": "We usually finish the fourth class and have lunch at twelve o'clock.",
        "sentenceZh": "我們通常上完第四節課後在十二點吃午餐。",
        "otherForms": "lunches (複數型(加es))"
    },
    {
        "word": "meal",
        "pos": "n.",
        "meaning": "一餐",
        "theme": "食物",
        "sentence": "Breakfast is considered the most important meal of the day.",
        "sentenceZh": "早餐被認為是一天中最重要的一餐。",
        "otherForms": "meals (複數型)"
    },
    {
        "word": "meat",
        "pos": "n.",
        "meaning": "肉",
        "theme": "食物",
        "sentence": "Do you prefer to eat meat or vegetables for dinner?",
        "sentenceZh": "你晚餐比較喜歡吃肉還是蔬菜？",
        "otherForms": "meats (複數型(指種類))"
    },
    {
        "word": "noodle",
        "pos": "n.",
        "meaning": "麵條",
        "theme": "食物",
        "sentence": "This bowl of beef noodles is a little bit too spicy for me.",
        "sentenceZh": "這碗牛肉麵對我來說有點太辣了。",
        "otherForms": "noodles (複數型)"
    },
    {
        "word": "pizza",
        "pos": "n.",
        "meaning": "披薩",
        "theme": "食物",
        "sentence": "We ordered a large pizza with extra cheese for the party.",
        "sentenceZh": "我們為了派對點了一個加起司的大披薩。",
        "otherForms": "pizzas (複數型)"
    },
    {
        "word": "pork",
        "pos": "n.",
        "meaning": "豬肉",
        "theme": "食物",
        "sentence": "My mother bought some fresh pork at the traditional market.",
        "sentenceZh": "我媽媽在傳統市場買了一些新鮮豬肉。",
        "otherForms": ""
    },
    {
        "word": "rice",
        "pos": "n.",
        "meaning": "米飯",
        "theme": "食物",
        "sentence": "People in Taiwan eat a lot of rice every day.",
        "sentenceZh": "台灣人每天吃很多米飯。",
        "otherForms": ""
    },
    {
        "word": "salad",
        "pos": "n.",
        "meaning": "沙拉",
        "theme": "食物",
        "sentence": "She ordered a fruit salad because she wants to eat healthy.",
        "sentenceZh": "她點了一份水果沙拉因為她想吃得健康。",
        "otherForms": "salads (複數型)"
    },
    {
        "word": "sandwich",
        "pos": "n.",
        "meaning": "三明治",
        "theme": "食物",
        "sentence": "I brought a chicken sandwich in my lunchbox today.",
        "sentenceZh": "我今天午餐盒裡帶了一個雞肉三明治。",
        "otherForms": "sandwiches (複數型(加es))"
    },
    {
        "word": "seafood",
        "pos": "n.",
        "meaning": "海鮮",
        "theme": "食物",
        "sentence": "I love eating shrimp, fish, and other fresh seafood.",
        "sentenceZh": "我喜歡吃蝦子、魚和其他新鮮海鮮。",
        "otherForms": "seafoods (複數型(指種類))"
    },
    {
        "word": "shrimp",
        "pos": "n.",
        "meaning": "蝦",
        "theme": "食物",
        "sentence": "We had some delicious grilled shrimp for dinner.",
        "sentenceZh": "我們晚餐吃了美味的烤蝦。",
        "otherForms": "shrimp/shrimps (複數型)"
    },
    {
        "word": "snack",
        "pos": "n.",
        "meaning": "點心",
        "theme": "食物",
        "sentence": "I always have a little snack after finishing my homework.",
        "sentenceZh": "我寫完作業後總會吃點小點心。",
        "otherForms": "snacks (複數型)"
    },
    {
        "word": "soup",
        "pos": "n.",
        "meaning": "湯",
        "theme": "食物",
        "sentence": "This hot chicken soup is perfect for a cold winter night.",
        "sentenceZh": "這碗熱雞湯非常適合寒冷的冬夜。",
        "otherForms": "soups (複數型)"
    },
    {
        "word": "spaghetti",
        "pos": "n.",
        "meaning": "義大利麵",
        "theme": "食物",
        "sentence": "They serve great Italian spaghetti at that corner restaurant.",
        "sentenceZh": "轉角那家餐廳供應很棒的義大利麵。",
        "otherForms": ""
    },
    {
        "word": "steak",
        "pos": "n.",
        "meaning": "牛排",
        "theme": "食物",
        "sentence": "He ate a big piece of steak to celebrate his good test score.",
        "sentenceZh": "他吃了一大塊牛排來慶祝他考了高分。",
        "otherForms": "steaks (複數型)"
    },
    {
        "word": "supper",
        "pos": "n.",
        "meaning": "消夜",
        "theme": "食物",
        "sentence": "We had a late supper after watching the midnight movie.",
        "sentenceZh": "我們看完午夜場電影後吃了一頓消夜。",
        "otherForms": "suppers (複數型)"
    },
    {
        "word": "peanut",
        "pos": "n.",
        "meaning": "花生",
        "theme": "食物",
        "sentence": "My little brother loves peanut butter.",
        "sentenceZh": "我弟弟很喜歡花生醬。",
        "otherForms": "peanuts (複數型)"
    },
    {
        "word": "tofu",
        "pos": "n.",
        "meaning": "豆腐",
        "theme": "食物",
        "sentence": "Stinky tofu is a very famous street food in Taiwan night markets.",
        "sentenceZh": "臭豆腐是台灣夜市非常有名的街邊小吃。",
        "otherForms": ""
    },
    {
        "word": "bitter",
        "pos": "adj.",
        "meaning": "苦的",
        "theme": "食物",
        "sentence": "This black coffee is too bitter; I need to add some sugar.",
        "sentenceZh": "這杯黑咖啡太苦了，我需要加點糖。",
        "otherForms": "more bitter (比較級), most bitter (最高級), bitterly (副詞)"
    },
    {
        "word": "delicious",
        "pos": "adj.",
        "meaning": "美味的",
        "theme": "食物",
        "sentence": "The chocolate cake your mother baked was very delicious.",
        "sentenceZh": "你媽媽烤的巧克力蛋糕非常美味。",
        "otherForms": "more delicious (比較級), most delicious (最高級), deliciously (副詞)"
    },
    {
        "word": "full",
        "pos": "adj.",
        "meaning": "飽的",
        "theme": "食物",
        "sentence": "I can't eat another piece of pizza; I am already full.",
        "sentenceZh": "我吃不下另一片披薩了，我已經很飽了。",
        "otherForms": "fuller (比較級), fullest (最高級), fully (副詞)"
    },
    {
        "word": "hot",
        "pos": "adj.",
        "meaning": "辣的；熱的",
        "theme": "食物",
        "sentence": "Be careful, the soup is very hot, don't burn your tongue!",
        "sentenceZh": "小心，湯非常熱，別燙到舌頭！",
        "otherForms": "hotter (比較級(重複字尾)), hottest (最高級(重複字尾)), hotly (副詞)"
    },
    {
        "word": "hungry",
        "pos": "adj.",
        "meaning": "餓的",
        "theme": "食物",
        "sentence": "I feel very hungry after running the 100-meter relay race.",
        "sentenceZh": "跑完一百公尺接力賽後我覺得非常餓。",
        "otherForms": "hungrier (比較級(去y加ier)), hungriest (最高級(去y加iest)), hungrily (副詞(去y加ily))"
    },
    {
        "word": "sour",
        "pos": "adj.",
        "meaning": "酸的",
        "theme": "食物",
        "sentence": "The yellow lemon is way too sour to eat directly.",
        "sentenceZh": "黃檸檬直接吃實在太酸了。",
        "otherForms": "sourer (比較級), sourest (最高級), sourly (副詞)"
    },
    {
        "word": "sweet",
        "pos": "adj. / n.",
        "meaning": "甜的/ 甜食",
        "theme": "食物",
        "sentence": "This dessert is a little bit too sweet for my taste.",
        "sentenceZh": "這個甜點對我的口味來說有點太甜了。",
        "otherForms": "sweeter (比較級), sweetest (最高級), sweetly (副詞)"
    },
    {
        "word": "thirsty",
        "pos": "adj.",
        "meaning": "渴的",
        "theme": "食物",
        "sentence": "Drink some water right now if you feel thirsty.",
        "sentenceZh": "如果你覺得渴，現在就喝點水。",
        "otherForms": "thirstier (比較級(去y加ier)), thirstiest (最高級(去y加iest)), thirstily (副詞(去y加ily))"
    },
    {
        "word": "yummy",
        "pos": "adj.",
        "meaning": "好吃的",
        "theme": "食物",
        "sentence": "The fried chicken smells really yummy; I want some!",
        "sentenceZh": "炸雞聞起來真的好好吃，我想要吃一點！",
        "otherForms": "yummier (比較級(去y加ier)), yummiest (最高級(去y加iest))"
    },
    {
        "word": "butter",
        "pos": "n.",
        "meaning": "奶油",
        "theme": "調味料與茶點",
        "sentence": "She spread some yellow butter on her warm morning toast.",
        "sentenceZh": "她在她溫熱的早晨吐司上抹了一些黃奶油。",
        "otherForms": ""
    },
    {
        "word": "cream",
        "pos": "n.",
        "meaning": "鮮奶油",
        "theme": "調味料與茶點",
        "sentence": "I like to put some sweet cream on top of my coffee.",
        "sentenceZh": "我喜歡在我的咖啡上面加一些鮮奶油。",
        "otherForms": ""
    },
    {
        "word": "jam",
        "pos": "n.",
        "meaning": "果醬",
        "theme": "調味料與茶點",
        "sentence": "I like strawberry jam better than butter on my bread.",
        "sentenceZh": "在麵包上，我喜歡草莓果醬勝過奶油。",
        "otherForms": ""
    },
    {
        "word": "sauce",
        "pos": "n.",
        "meaning": "醬汁",
        "theme": "調味料與茶點",
        "sentence": "I like to eat noodles with some hot sauce.",
        "sentenceZh": "我喜歡吃麵配一點辣醬。",
        "otherForms": "sauces (複數型)"
    },
    {
        "word": "ketchup",
        "pos": "n.",
        "meaning": "番茄醬",
        "theme": "調味料與茶點",
        "sentence": "Do you want to dip your French fries in some ketchup?",
        "sentenceZh": "你的薯條想沾點番茄醬嗎？",
        "otherForms": ""
    },
    {
        "word": "oil",
        "pos": "n.",
        "meaning": "油",
        "theme": "調味料與茶點",
        "sentence": "Add a little cooking oil to the pan before frying the egg.",
        "sentenceZh": "煎蛋前在平底鍋裡加一點食用油。",
        "otherForms": ""
    },
    {
        "word": "pepper",
        "pos": "n.",
        "meaning": "胡椒",
        "theme": "調味料與茶點",
        "sentence": "Can you pass me the salt and black pepper, please?",
        "sentenceZh": "麻煩你把鹽和黑胡椒遞給我好嗎？",
        "otherForms": ""
    },
    {
        "word": "powder",
        "pos": "n.",
        "meaning": "粉末",
        "theme": "調味料與茶點",
        "sentence": "We added some cocoa powder to make delicious chocolate milk.",
        "sentenceZh": "我們加了一些可可粉來做美味的巧克力牛奶。",
        "otherForms": ""
    },
    {
        "word": "salt",
        "pos": "n.",
        "meaning": "鹽",
        "theme": "調味料與茶點",
        "sentence": "This chicken soup is a bit boring; it needs a little more salt.",
        "sentenceZh": "這碗雞湯有點沒味道，需要再加點鹽。",
        "otherForms": ""
    },
    {
        "word": "soy sauce",
        "pos": "n.",
        "meaning": "醬油",
        "theme": "調味料與茶點",
        "sentence": "Boiled dumplings taste great when you dip them in soy sauce.",
        "sentenceZh": "水餃沾醬油吃起來味道很棒。",
        "otherForms": ""
    },
    {
        "word": "sugar",
        "pos": "n.",
        "meaning": "糖",
        "theme": "調味料與茶點",
        "sentence": "Eating too much sugar is very bad for your teeth.",
        "sentenceZh": "吃太多糖對你的牙齒非常不好。",
        "otherForms": ""
    },
    {
        "word": "vinegar",
        "pos": "n.",
        "meaning": "醋",
        "theme": "調味料與茶點",
        "sentence": "You can add some black vinegar to the hot soup to make it tasty.",
        "sentenceZh": "你可以加一些黑醋到熱湯裡讓它更美味。",
        "otherForms": ""
    },
    {
        "word": "beer",
        "pos": "n.",
        "meaning": "啤酒",
        "theme": "調味料與茶點",
        "sentence": "Remember, only adults are allowed to drink beer.",
        "sentenceZh": "記住，只有成年人才被允許喝啤酒。",
        "otherForms": ""
    },
    {
        "word": "coffee",
        "pos": "n.",
        "meaning": "咖啡",
        "theme": "調味料與茶點",
        "sentence": "My teacher drinks a hot cup of coffee every morning to wake up.",
        "sentenceZh": "我的老師每天早上喝一杯熱咖啡來提神。",
        "otherForms": ""
    },
    {
        "word": "cola",
        "pos": "n.",
        "meaning": "可樂",
        "theme": "調味料與茶點",
        "sentence": "He drank a cold can of cola after the exciting basketball game.",
        "sentenceZh": "他在刺激的籃球比賽後喝了一罐冰可樂。",
        "otherForms": ""
    },
    {
        "word": "juice",
        "pos": "n.",
        "meaning": "果汁",
        "theme": "調味料與茶點",
        "sentence": "Fresh orange juice has a lot of vitamin C to keep you healthy.",
        "sentenceZh": "新鮮柳橙汁有許多維他命C能讓你保持健康。",
        "otherForms": ""
    },
    {
        "word": "milk",
        "pos": "n.",
        "meaning": "牛奶",
        "theme": "調味料與茶點",
        "sentence": "Children should drink warm milk every day to grow taller.",
        "sentenceZh": "孩子們每天應該喝溫牛奶才能長高。",
        "otherForms": ""
    },
    {
        "word": "milk shake",
        "pos": "n.",
        "meaning": "奶昔",
        "theme": "調味料與茶點",
        "sentence": "I ordered a sweet strawberry milk shake at the fast food restaurant.",
        "sentenceZh": "我在速食餐廳點了一杯甜甜的草莓奶昔。",
        "otherForms": ""
    },
    {
        "word": "soda",
        "pos": "n.",
        "meaning": "汽水",
        "theme": "調味料與茶點",
        "sentence": "Drinking too much sweet soda will make you gain weight easily.",
        "sentenceZh": "喝太多甜汽水會讓你容易變胖。",
        "otherForms": ""
    },
    {
        "word": "soft drink",
        "pos": "n.",
        "meaning": "軟性飲料",
        "theme": "調味料與茶點",
        "sentence": "Can I get a soft drink to go with my hamburger meal?",
        "sentenceZh": "我的漢堡餐可以配一杯軟性飲料嗎？",
        "otherForms": ""
    },
    {
        "word": "tea",
        "pos": "n.",
        "meaning": "茶",
        "theme": "調味料與茶點",
        "sentence": "Many older people in Taiwan like to sit and drink hot tea together.",
        "sentenceZh": "台灣許多長輩喜歡坐在一起喝熱茶。",
        "otherForms": ""
    },
    {
        "word": "wine",
        "pos": "n.",
        "meaning": "葡萄酒",
        "theme": "調味料與茶點",
        "sentence": "He had a glass of red wine with his dinner.",
        "sentenceZh": "他吃晚餐時喝了一杯紅葡萄酒。",
        "otherForms": ""
    },
    {
        "word": "cake",
        "pos": "n.",
        "meaning": "蛋糕",
        "theme": "調味料與茶點",
        "sentence": "We baked a big chocolate cake to celebrate her 15th birthday.",
        "sentenceZh": "我們烤了一個大巧克力蛋糕來慶祝她的十五歲生日。",
        "otherForms": ""
    },
    {
        "word": "candy",
        "pos": "n.",
        "meaning": "糖果",
        "theme": "調味料與茶點",
        "sentence": "Mom said I cannot eat too much candy right before dinner.",
        "sentenceZh": "媽媽說我不能在晚餐前吃太多糖果。",
        "otherForms": ""
    },
    {
        "word": "cheese",
        "pos": "n.",
        "meaning": "起司",
        "theme": "調味料與茶點",
        "sentence": "This Italian pizza has a lot of extra cheese on top of it.",
        "sentenceZh": "這個義大利披薩上面加了很多起司。",
        "otherForms": ""
    },
    {
        "word": "chocolate",
        "pos": "n.",
        "meaning": "巧克力",
        "theme": "調味料與茶點",
        "sentence": "She bought a box of sweet chocolate as a present for her friend.",
        "sentenceZh": "她買了一盒甜巧克力當作給朋友的禮物。",
        "otherForms": ""
    },
    {
        "word": "cookie",
        "pos": "n.",
        "meaning": "餅乾",
        "theme": "調味料與茶點",
        "sentence": "My grandmother baked some delicious chocolate chip cookies.",
        "sentenceZh": "我奶奶烤了一些美味的巧克力豆餅乾。",
        "otherForms": "cookies (複數型)"
    },
    {
        "word": "dessert",
        "pos": "n.",
        "meaning": "甜點",
        "theme": "調味料與茶點",
        "sentence": "We ordered a slice of cake for dessert after the big meal.",
        "sentenceZh": "吃完大餐後，我們點了一塊蛋糕當甜點。",
        "otherForms": ""
    },
    {
        "word": "doughnut",
        "pos": "n.",
        "meaning": "甜甜圈",
        "theme": "調味料與茶點",
        "sentence": "I ate a sweet, round doughnut with my afternoon coffee.",
        "sentenceZh": "我下午喝咖啡時配了一個甜甜圓圓的甜甜圈。",
        "otherForms": ""
    },
    {
        "word": "ice cream",
        "pos": "n.",
        "meaning": "冰淇淋",
        "theme": "調味料與茶點",
        "sentence": "It feels great to eat vanilla ice cream on a hot summer day.",
        "sentenceZh": "在炎熱的夏日吃香草冰淇淋感覺棒極了。",
        "otherForms": ""
    },
    {
        "word": "moon cake",
        "pos": "n.",
        "meaning": "月餅",
        "theme": "調味料與茶點",
        "sentence": "We share delicious moon cakes with our family during the Moon Festival.",
        "sentenceZh": "我們在中秋節和家人分享美味的月餅。",
        "otherForms": "moon cakes (複數型)"
    },
    {
        "word": "pie",
        "pos": "n.",
        "meaning": "派",
        "theme": "調味料與茶點",
        "sentence": "My mother knows how to make the best apple pie in the world.",
        "sentenceZh": "我媽媽知道如何做出世界上最棒的蘋果派。",
        "otherForms": "pies (複數型)"
    },
    {
        "word": "popcorn",
        "pos": "n.",
        "meaning": "爆米花",
        "theme": "調味料與茶點",
        "sentence": "We love to eat hot, salty popcorn when watching movies in the theater.",
        "sentenceZh": "我們在電影院看電影時喜歡吃熱騰騰鹹鹹的爆米花。",
        "otherForms": ""
    },
    {
        "word": "toast",
        "pos": "n.",
        "meaning": "吐司",
        "theme": "調味料與茶點",
        "sentence": "I usually have two warm pieces of toast for breakfast.",
        "sentenceZh": "我早餐通常吃兩片溫熱的吐司。",
        "otherForms": ""
    },
    {
        "word": "apple",
        "pos": "n.",
        "meaning": "蘋果",
        "theme": "蔬果",
        "sentence": "They say that an apple a day keeps the doctor away.",
        "sentenceZh": "人們說一天一蘋果，醫生遠離我。",
        "otherForms": "apples (複數型)"
    },
    {
        "word": "banana",
        "pos": "n.",
        "meaning": "香蕉",
        "theme": "蔬果",
        "sentence": "Monkeys in the zoo really love to eat sweet yellow bananas.",
        "sentenceZh": "動物園裡的猴子真的很喜歡吃甜甜的黃香蕉。",
        "otherForms": "bananas (複數型)"
    },
    {
        "word": "soy",
        "pos": "n.",
        "meaning": "大豆",
        "theme": "蔬果",
        "sentence": "Soy milk is a very healthy drink.",
        "sentenceZh": "豆漿是非常健康的飲品。",
        "otherForms": "soybean (常用名詞)"
    },
    {
        "word": "bean",
        "pos": "n.",
        "meaning": "豆子",
        "theme": "蔬果",
        "sentence": "Eating green beans is very good for your daily health.",
        "sentenceZh": "吃四季豆對你每天的健康很有好處。",
        "otherForms": "beans (複數型)"
    },
    {
        "word": "cabbage",
        "pos": "n.",
        "meaning": "高麗菜",
        "theme": "蔬果",
        "sentence": "We grew some big, fresh cabbages on our small farm.",
        "sentenceZh": "我們在小農場裡種了一些新鮮的大高麗菜。",
        "otherForms": "cabbages (複數型)"
    },
    {
        "word": "carrot",
        "pos": "n.",
        "meaning": "胡蘿蔔",
        "theme": "蔬果",
        "sentence": "Rabbits love to eat crunchy orange carrots.",
        "sentenceZh": "兔子喜歡吃清脆的橘色胡蘿蔔。",
        "otherForms": "carrots (複數型)"
    },
    {
        "word": "corn",
        "pos": "n.",
        "meaning": "玉米",
        "theme": "蔬果",
        "sentence": "We had sweet yellow corn and beef for dinner tonight.",
        "sentenceZh": "我們今晚晚餐吃了甜甜的黃玉米和牛肉。",
        "otherForms": "corns (複數型(指根數))"
    },
    {
        "word": "fruit",
        "pos": "n.",
        "meaning": "水果",
        "theme": "蔬果",
        "sentence": "You should eat more fresh fruit every day to get vitamins.",
        "sentenceZh": "你每天應該吃更多新鮮水果來補充維他命。",
        "otherForms": ""
    },
    {
        "word": "grape",
        "pos": "n.",
        "meaning": "葡萄",
        "theme": "蔬果",
        "sentence": "I bought a bag of sweet purple grapes at the night market.",
        "sentenceZh": "我在夜市買了一袋甜甜的紫葡萄。",
        "otherForms": "grapes (複數型)"
    },
    {
        "word": "guava",
        "pos": "n.",
        "meaning": "番石榴",
        "theme": "蔬果",
        "sentence": "Taiwan produces very delicious green guavas.",
        "sentenceZh": "台灣盛產非常美味的綠色芭樂。",
        "otherForms": "guavas (複數型)"
    },
    {
        "word": "lemon",
        "pos": "n.",
        "meaning": "檸檬",
        "theme": "蔬果",
        "sentence": "This yellow lemon is too sour for me to eat directly!",
        "sentenceZh": "這顆黃檸檬對我來說太酸了，沒辦法直接吃！",
        "otherForms": "lemons (複數型)"
    },
    {
        "word": "lettuce",
        "pos": "n.",
        "meaning": "生菜",
        "theme": "蔬果",
        "sentence": "We use fresh, green lettuce to make a healthy fruit salad.",
        "sentenceZh": "我們用新鮮綠色的生菜來做健康的生菜沙拉。",
        "otherForms": "lettuces (複數型(指顆數))"
    },
    {
        "word": "mango",
        "pos": "n.",
        "meaning": "芒果",
        "theme": "蔬果",
        "sentence": "Summer is definitely the best season to eat sweet mangoes.",
        "sentenceZh": "夏天絕對是吃甜芒果最好的季節。",
        "otherForms": "mangoes (複數型(加es))"
    },
    {
        "word": "nut",
        "pos": "n.",
        "meaning": "堅果",
        "theme": "蔬果",
        "sentence": "Cute little squirrels collect nuts before the cold winter comes.",
        "sentenceZh": "可愛的小松鼠在寒冬來臨前收集堅果。",
        "otherForms": "nuts (複數型)"
    },
    {
        "word": "onion",
        "pos": "n.",
        "meaning": "洋蔥",
        "theme": "蔬果",
        "sentence": "Cutting raw onions always makes my eyes water.",
        "sentenceZh": "切生洋蔥總是讓我的眼睛流淚。",
        "otherForms": "onions (複數型)"
    },
    {
        "word": "orange",
        "pos": "n.",
        "meaning": "柳橙",
        "theme": "蔬果",
        "sentence": "I peeled a juicy orange to eat after finishing my lunch.",
        "sentenceZh": "我吃完午餐後剝了一顆多汁的柳橙來吃。",
        "otherForms": "oranges (複數型)"
    },
    {
        "word": "papaya",
        "pos": "n.",
        "meaning": "木瓜",
        "theme": "蔬果",
        "sentence": "Papaya milk is a very popular and famous drink in Taiwan.",
        "sentenceZh": "木瓜牛奶在台灣是非常受歡迎且有名的飲料。",
        "otherForms": "papayas (複數型)"
    },
    {
        "word": "peach",
        "pos": "n.",
        "meaning": "桃子",
        "theme": "蔬果",
        "sentence": "This pink peach looks very sweet, soft, and juicy.",
        "sentenceZh": "這顆粉紅色的桃子看起來非常甜、柔軟又多汁。",
        "otherForms": "peaches (複數型(加es))"
    },
    {
        "word": "pear",
        "pos": "n.",
        "meaning": "梨子",
        "theme": "蔬果",
        "sentence": "I ate a sweet, juicy yellow pear after having dinner.",
        "sentenceZh": "我吃完晚餐後吃了一顆甜甜多汁的黃梨子。",
        "otherForms": "pears (複數型)"
    },
    {
        "word": "pineapple",
        "pos": "n.",
        "meaning": "鳳梨",
        "theme": "蔬果",
        "sentence": "The pineapple is sweet inside, but its skin is very spiky.",
        "sentenceZh": "鳳梨裡面很甜，但它的外皮充滿尖刺。",
        "otherForms": "pineapples (複數型)"
    },
    {
        "word": "potato",
        "pos": "n.",
        "meaning": "馬鈴薯",
        "theme": "蔬果",
        "sentence": "We make delicious French fries out of simple potatoes.",
        "sentenceZh": "我們用簡單的馬鈴薯做出美味的薯條。",
        "otherForms": "potatoes (複數型(加es))"
    },
    {
        "word": "pumpkin",
        "pos": "n.",
        "meaning": "南瓜",
        "theme": "蔬果",
        "sentence": "We use orange pumpkins to make scary Halloween lanterns.",
        "sentenceZh": "我們用橘色南瓜來製作可怕的萬聖節燈籠。",
        "otherForms": "pumpkins (複數型)"
    },
    {
        "word": "strawberry",
        "pos": "n.",
        "meaning": "草莓",
        "theme": "蔬果",
        "sentence": "She carefully put a red strawberry right on top of the cake.",
        "sentenceZh": "她小心地把一顆紅草莓放在蛋糕正上方。",
        "otherForms": "strawberries (複數型(去y加ies))"
    },
    {
        "word": "tangerine",
        "pos": "n.",
        "meaning": "橘子",
        "theme": "蔬果",
        "sentence": "We eat a lot of sweet tangerines during the Chinese New Year.",
        "sentenceZh": "我們在農曆新年期間吃了很多甜橘子。",
        "otherForms": "tangerines (複數型)"
    },
    {
        "word": "tomato",
        "pos": "n.",
        "meaning": "番茄",
        "theme": "蔬果",
        "sentence": "Are tomatoes considered fruits or are they vegetables?",
        "sentenceZh": "番茄被認為是水果還是蔬菜呢？",
        "otherForms": "tomatoes (複數型(加es))"
    },
    {
        "word": "vegetable",
        "pos": "n.",
        "meaning": "蔬菜",
        "theme": "蔬果",
        "sentence": "You must eat your green vegetables to grow up strong.",
        "sentenceZh": "你必須吃綠色蔬菜才能長得強壯。",
        "otherForms": "vegetables (複數型)"
    },
    {
        "word": "watermelon",
        "pos": "n.",
        "meaning": "西瓜",
        "theme": "蔬果",
        "sentence": "A big, cold watermelon is the best fruit for summer.",
        "sentenceZh": "一顆又大又冰涼的西瓜是夏天最棒的水果。",
        "otherForms": "watermelons (複數型)"
    },
    {
        "word": "bowl",
        "pos": "n.",
        "meaning": "碗",
        "theme": "餐具",
        "sentence": "I ate a big bowl of beef noodles in Douliu for lunch.",
        "sentenceZh": "我午餐在斗六吃了一大碗牛肉麵。",
        "otherForms": "bowls (複數型)"
    },
    {
        "word": "chopsticks",
        "pos": "n.",
        "meaning": "筷子",
        "theme": "餐具",
        "sentence": "It is a little hard for foreigners to use chopsticks at first.",
        "sentenceZh": "對外國人來說，一開始使用筷子有點困難。",
        "otherForms": "chopsticks (複數型(常以複數出現))"
    },
    {
        "word": "cup",
        "pos": "n.",
        "meaning": "杯子",
        "theme": "餐具",
        "sentence": "Would you like a hot cup of tea or coffee?",
        "sentenceZh": "你想要來杯熱茶還是熱咖啡？",
        "otherForms": "cups (複數型)"
    },
    {
        "word": "diet",
        "pos": "n. / v.",
        "meaning": "飲食 / 節食",
        "theme": "餐具",
        "sentence": "Eating a healthy diet is very important for a badminton player.",
        "sentenceZh": "健康的飲食對羽球選手來說非常重要。",
        "otherForms": "diets (複數型)"
    },
    {
        "word": "dish",
        "pos": "n.",
        "meaning": "盤子；菜餚",
        "theme": "餐具",
        "sentence": "This is my favorite dish on the restaurant's menu.",
        "sentenceZh": "這是這家餐廳菜單上我最愛的一道菜。",
        "otherForms": "dishes (複數型(加es))"
    },
    {
        "word": "fork",
        "pos": "n.",
        "meaning": "叉子",
        "theme": "餐具",
        "sentence": "We usually eat Italian spaghetti with a fork.",
        "sentenceZh": "我們通常用叉子吃義大利麵。",
        "otherForms": "forks (複數型)"
    },
    {
        "word": "glass",
        "pos": "n.",
        "meaning": "玻璃杯",
        "theme": "餐具",
        "sentence": "Please give me a glass of cold water, I am very thirsty.",
        "sentenceZh": "請給我一杯冷水，我非常渴。",
        "otherForms": "glasses (複數型(加es))"
    },
    {
        "word": "knife",
        "pos": "n.",
        "meaning": "刀子",
        "theme": "餐具",
        "sentence": "Be careful not to cut your finger with that sharp knife.",
        "sentenceZh": "小心別被那把鋒利的刀子割到手指。",
        "otherForms": "knives (複數型(去fe加ves))"
    },
    {
        "word": "menu",
        "pos": "n.",
        "meaning": "菜單",
        "theme": "餐具",
        "sentence": "The waiter handed us the menu to order our dinner.",
        "sentenceZh": "服務生遞給我們菜單來點晚餐。",
        "otherForms": "menus (複數型)"
    },
    {
        "word": "napkin",
        "pos": "n.",
        "meaning": "餐巾",
        "theme": "餐具",
        "sentence": "Use a paper napkin to wipe your mouth after eating.",
        "sentenceZh": "吃完東西後用紙餐巾擦嘴。",
        "otherForms": "napkins (複數型)"
    },
    {
        "word": "pan",
        "pos": "n.",
        "meaning": "平底鍋",
        "theme": "餐具",
        "sentence": "My mother is frying eggs in the pan right now.",
        "sentenceZh": "我媽媽現在正在平底鍋裡煎蛋。",
        "otherForms": "pans (複數型)"
    },
    {
        "word": "plate",
        "pos": "n.",
        "meaning": "平盤",
        "theme": "餐具",
        "sentence": "He put a big piece of steak on his plate.",
        "sentenceZh": "他把一大塊牛排放在他的盤子上。",
        "otherForms": "plates (複數型)"
    },
    {
        "word": "pot",
        "pos": "n.",
        "meaning": "鍋子",
        "theme": "餐具",
        "sentence": "The hot chicken soup is boiling in the pot.",
        "sentenceZh": "熱雞湯正在鍋子裡沸騰。",
        "otherForms": "pots (複數型)"
    },
    {
        "word": "saucer",
        "pos": "n.",
        "meaning": "碟子",
        "theme": "餐具",
        "sentence": "Put the coffee cup on the small saucer.",
        "sentenceZh": "把咖啡杯放在小碟子上。",
        "otherForms": "saucers (複數型)"
    },
    {
        "word": "spoon",
        "pos": "n.",
        "meaning": "湯匙",
        "theme": "餐具",
        "sentence": "You need a spoon to drink this hot corn soup.",
        "sentenceZh": "你需要一把湯匙來喝這碗熱玉米湯。",
        "otherForms": "spoons (複數型)"
    },
    {
        "word": "straw",
        "pos": "n.",
        "meaning": "吸管",
        "theme": "餐具",
        "sentence": "He used a plastic straw to drink his papaya milk.",
        "sentenceZh": "他用一根塑膠吸管喝木瓜牛奶。",
        "otherForms": "straws (複數型)"
    },
    {
        "word": "teapot",
        "pos": "n.",
        "meaning": "茶壺",
        "theme": "餐具",
        "sentence": "Grandmother put some hot water into the traditional teapot.",
        "sentenceZh": "奶奶把熱水倒進傳統茶壺裡。",
        "otherForms": "teapots (複數型)"
    },
    {
        "word": "wok",
        "pos": "n.",
        "meaning": "炒鍋",
        "theme": "餐具",
        "sentence": "My father cooks the best fried rice in his old wok.",
        "sentenceZh": "我爸爸用他的舊炒鍋炒出最棒的炒飯。",
        "otherForms": "woks (複數型)"
    },
    {
        "word": "bill",
        "pos": "n.",
        "meaning": "帳單；紙鈔",
        "theme": "金融",
        "sentence": "Let's pay the bill and go to the movie theater.",
        "sentenceZh": "我們結帳然後去電影院吧。",
        "otherForms": "bills (複數型)"
    },
    {
        "word": "cash",
        "pos": "n.",
        "meaning": "現金",
        "theme": "金融",
        "sentence": "You can only pay with cash at this small night market stall.",
        "sentenceZh": "在這個小夜市攤位你只能付現金。",
        "otherForms": ""
    },
    {
        "word": "cent",
        "pos": "n.",
        "meaning": "分（貨幣單位）",
        "theme": "金融",
        "sentence": "One hundred cents make one US dollar.",
        "sentenceZh": "一百美分等於一美元。",
        "otherForms": "cents (複數型)"
    },
    {
        "word": "change",
        "pos": "n. / v.",
        "meaning": "零錢 / 改變",
        "theme": "金融",
        "sentence": "Here is your hot dog, and here is your change.",
        "sentenceZh": "這是你的熱狗，這是找你的零錢。",
        "otherForms": "changes (複數型(零錢不可數)), changes (三單), changing (ing型(去e加ing)), changed (過去式/分詞)"
    },
    {
        "word": "coin",
        "pos": "n.",
        "meaning": "硬幣",
        "theme": "金融",
        "sentence": "I dropped a ten-dollar coin on the floor.",
        "sentenceZh": "我掉了一枚十元硬幣在地上。",
        "otherForms": "coins (複數型)"
    },
    {
        "word": "credit card",
        "pos": "n.",
        "meaning": "信用卡",
        "theme": "金融",
        "sentence": "My dad paid for the new television with his credit card.",
        "sentenceZh": "我爸爸用信用卡付了新電視的錢。",
        "otherForms": "credit cards (複數型)"
    },
    {
        "word": "dollar",
        "pos": "n.",
        "meaning": "元（貨幣單位）",
        "theme": "金融",
        "sentence": "The cute pen in the stationery store only costs twenty dollars.",
        "sentenceZh": "文具店裡那支可愛的筆只要二十元。",
        "otherForms": "dollars (複數型)"
    },
    {
        "word": "money",
        "pos": "n.",
        "meaning": "錢",
        "theme": "金融",
        "sentence": "You should save some money to buy the things you want.",
        "sentenceZh": "你應該存些錢來買你想要的東西。",
        "otherForms": ""
    },
    {
        "word": "price",
        "pos": "n.",
        "meaning": "價格",
        "theme": "金融",
        "sentence": "The price of this badminton racket is too high for me.",
        "sentenceZh": "這支羽球拍的價格對我來說太高了。",
        "otherForms": "prices (複數型)"
    },
    {
        "word": "fee",
        "pos": "n.",
        "meaning": "費用",
        "theme": "金融",
        "sentence": "We need to pay a small fee to join the English club.",
        "sentenceZh": "我們需要付一小筆費用來加入英文社團。",
        "otherForms": "fees (複數型)"
    },
    {
        "word": "income",
        "pos": "n.",
        "meaning": "收入",
        "theme": "金融",
        "sentence": "His father has a good income from his company.",
        "sentenceZh": "他爸爸在公司有一份不錯的收入。",
        "otherForms": "incomes (複數型)"
    },
    {
        "word": "tip",
        "pos": "n. / v.",
        "meaning": "小費；提示 / 給小費",
        "theme": "金融",
        "sentence": "The teacher gave us a useful tip to remember this grammar rule.",
        "sentenceZh": "老師給了我們一個有用的提示來記住這個文法規則。",
        "otherForms": "tips (複數型), tips (三單), tipping (ing型(重複字尾)), tipped (過去式/分詞(重複字尾))"
    },
    {
        "word": "borrow",
        "pos": "v.",
        "meaning": "借入",
        "theme": "金融",
        "sentence": "Can I borrow your eraser for a minute, please?",
        "sentenceZh": "請問我可以借用你的橡皮擦一分鐘嗎？",
        "otherForms": "borrows (三單), borrowing (ing型), borrowed (過去式/分詞)"
    },
    {
        "word": "buy",
        "pos": "v.",
        "meaning": "購買",
        "theme": "金融",
        "sentence": "I want to buy a new comic book this weekend.",
        "sentenceZh": "我這個週末想買一本新漫畫書。",
        "otherForms": "buys (三單), buying (ing型), bought (過去式(不規則)), bought (過去分詞(不規則))"
    },
    {
        "word": "charge",
        "pos": "n. / v.",
        "meaning": "收費；充電",
        "theme": "金融",
        "sentence": "How much does the hotel charge for one night?",
        "sentenceZh": "這間飯店住一晚怎麼收費？",
        "otherForms": "charges (複數型), charges (三單), charging (ing型(去e加ing)), charged (過去式/分詞)"
    },
    {
        "word": "cost",
        "pos": "v. / n.",
        "meaning": "花費 / 成本",
        "theme": "金融",
        "sentence": "It costs a lot of money to fly to the USA.",
        "sentenceZh": "飛去美國要花很多錢。",
        "otherForms": "costs (三單), costing (ing型), cost (過去式/分詞(不規則同型))"
    },
    {
        "word": "earn",
        "pos": "v.",
        "meaning": "賺取",
        "theme": "金融",
        "sentence": "She works hard every day to earn money for her family.",
        "sentenceZh": "她每天努力工作為家人賺錢。",
        "otherForms": "earns (三單), earning (ing型), earned (過去式/分詞)"
    },
    {
        "word": "lend",
        "pos": "v.",
        "meaning": "借出",
        "theme": "金融",
        "sentence": "I can lend you my umbrella if it rains later.",
        "sentenceZh": "如果等一下下雨，我可以把雨傘借給你。",
        "otherForms": "lends (三單), lending (ing型), lent (過去式(不規則)), lent (過去分詞(不規則))"
    },
    {
        "word": "pay",
        "pos": "v. / n.",
        "meaning": "支付 / 薪水",
        "theme": "金融",
        "sentence": "You have to pay for your ticket before getting on the train.",
        "sentenceZh": "上火車前你必須先支付車票錢。",
        "otherForms": "pays (三單), paying (ing型), paid (過去式(不規則)), paid (過去分詞(不規則))"
    },
    {
        "word": "spend",
        "pos": "v.",
        "meaning": "花費",
        "theme": "金融",
        "sentence": "Don't spend too much time playing video games.",
        "sentenceZh": "不要花太多時間打電動遊戲。",
        "otherForms": "spends (三單), spending (ing型), spent (過去式(不規則)), spent (過去分詞(不規則))"
    },
    {
        "word": "animal",
        "pos": "n.",
        "meaning": "動物",
        "theme": "動物",
        "sentence": "The dog is a very friendly and smart animal.",
        "sentenceZh": "狗是非常友善且聰明的動物。",
        "otherForms": "animals (複數型)"
    },
    {
        "word": "ant",
        "pos": "n.",
        "meaning": "螞蟻",
        "theme": "動物",
        "sentence": "The hardworking ants carried the sweet food away.",
        "sentenceZh": "勤勞的螞蟻把甜食搬走了。",
        "otherForms": "ants (複數型)"
    },
    {
        "word": "bat",
        "pos": "n.",
        "meaning": "蝙蝠；球棒",
        "theme": "動物",
        "sentence": "A bat is not a bird; it is an animal that sleeps during the day.",
        "sentenceZh": "蝙蝠不是鳥類，牠是一種在白天睡覺的動物。",
        "otherForms": "bats (複數型)"
    },
    {
        "word": "bear",
        "pos": "n. / v.",
        "meaning": "熊 / 忍受",
        "theme": "動物",
        "sentence": "The brown bear is sleeping in the cave for the winter.",
        "sentenceZh": "棕熊正在洞穴裡冬眠。",
        "otherForms": "bears (複數型/ 三單), bearing (ing型), bore (過去式(不規則)), borne (過去分詞(不規則))"
    },
    {
        "word": "bee",
        "pos": "n.",
        "meaning": "蜜蜂",
        "theme": "動物",
        "sentence": "The busy bee is collecting sweet honey from the red flower.",
        "sentenceZh": "忙碌的蜜蜂正在從紅花上收集甜美的蜂蜜。",
        "otherForms": "bees (複數型)"
    },
    {
        "word": "bird",
        "pos": "n.",
        "meaning": "鳥",
        "theme": "動物",
        "sentence": "A little blue bird is singing a beautiful song in the tree.",
        "sentenceZh": "一隻藍色小鳥正在樹上唱著美麗的歌。",
        "otherForms": "birds (複數型)"
    },
    {
        "word": "bug",
        "pos": "n.",
        "meaning": "小蟲",
        "theme": "動物",
        "sentence": "I have to fix a bug in my HTML game code before tomorrow.",
        "sentenceZh": "我明天之前必須修好我 HTML 遊戲程式碼裡的一個小錯誤(bug)。",
        "otherForms": "bugs (複數型)"
    },
    {
        "word": "butterfly",
        "pos": "n.",
        "meaning": "蝴蝶",
        "theme": "動物",
        "sentence": "The colorful butterfly landed softly on the pink rose.",
        "sentenceZh": "色彩繽紛的蝴蝶輕柔地停在粉紅玫瑰上。",
        "otherForms": "butterflies (複數型(去y加ies))"
    },
    {
        "word": "cat",
        "pos": "n.",
        "meaning": "貓",
        "theme": "動物",
        "sentence": "My cute cat likes to sleep on the soft sofa.",
        "sentenceZh": "我可愛的貓喜歡睡在柔軟的沙發上。",
        "otherForms": "cats (複數型)"
    },
    {
        "word": "chicken",
        "pos": "n.",
        "meaning": "雞",
        "theme": "動物",
        "sentence": "We feed the chickens on the farm every morning.",
        "sentenceZh": "我們每天早上在農場餵雞。",
        "otherForms": "chickens (複數型(當雞可數))"
    },
    {
        "word": "cockroach",
        "pos": "n.",
        "meaning": "蟑螂",
        "theme": "動物",
        "sentence": "She screamed loudly when she saw a cockroach in the kitchen.",
        "sentenceZh": "當她在廚房看到一隻蟑螂時，她大聲尖叫。",
        "otherForms": "cockroaches (複數型(加es))"
    },
    {
        "word": "cow",
        "pos": "n.",
        "meaning": "牛",
        "theme": "動物",
        "sentence": "The black and white cow is eating grass in the field.",
        "sentenceZh": "那頭黑白相間的牛正在田裡吃草。",
        "otherForms": "cows (複數型)"
    },
    {
        "word": "crab",
        "pos": "n.",
        "meaning": "螃蟹",
        "theme": "動物",
        "sentence": "The crab uses its big claws to protect itself on the beach.",
        "sentenceZh": "螃蟹在海灘上用牠的大螯來保護自己。",
        "otherForms": "crabs (複數型)"
    },
    {
        "word": "deer",
        "pos": "n.",
        "meaning": "鹿",
        "theme": "動物",
        "sentence": "We saw a wild deer running fast in the woods.",
        "sentenceZh": "我們看到一隻野鹿在樹林裡跑得飛快。",
        "otherForms": "deer (單複數同型)"
    },
    {
        "word": "dinosaur",
        "pos": "n.",
        "meaning": "恐龍",
        "theme": "動物",
        "sentence": "The T-Rex was a very large and scary dinosaur.",
        "sentenceZh": "暴龍是一種非常巨大且可怕的恐龍。",
        "otherForms": "dinosaurs (複數型)"
    },
    {
        "word": "dog",
        "pos": "n.",
        "meaning": "狗",
        "theme": "動物",
        "sentence": "Remember to walk the dog in the park after dinner.",
        "sentenceZh": "記得晚餐後去公園遛狗。",
        "otherForms": "dogs (複數型)"
    },
    {
        "word": "dolphin",
        "pos": "n.",
        "meaning": "海豚",
        "theme": "動物",
        "sentence": "The smart dolphin jumped high out of the ocean water.",
        "sentenceZh": "聰明的海豚從海水中跳得高高的。",
        "otherForms": "dolphins (複數型)"
    },
    {
        "word": "donkey",
        "pos": "n.",
        "meaning": "驢",
        "theme": "動物",
        "sentence": "The strong donkey carried heavy bags on its back.",
        "sentenceZh": "強壯的驢子背上載著重重的袋子。",
        "otherForms": "donkeys (複數型)"
    },
    {
        "word": "dove",
        "pos": "n.",
        "meaning": "鴿子",
        "theme": "動物",
        "sentence": "A white dove is a symbol of peace.",
        "sentenceZh": "白鴿是和平的象徵。",
        "otherForms": "doves (複數型), pigeon (別稱)"
    },
    {
        "word": "dragon",
        "pos": "n.",
        "meaning": "龍",
        "theme": "動物",
        "sentence": "In Chinese culture, the dragon is a symbol of great power.",
        "sentenceZh": "在中華文化裡，龍是強大力量的象徵。",
        "otherForms": "dragons (複數型)"
    },
    {
        "word": "duck",
        "pos": "n.",
        "meaning": "鴨",
        "theme": "動物",
        "sentence": "The yellow duck is swimming happily in the pond.",
        "sentenceZh": "黃色小鴨正在池塘裡開心地游泳。",
        "otherForms": "ducks (複數型)"
    },
    {
        "word": "eagle",
        "pos": "n.",
        "meaning": "老鷹",
        "theme": "動物",
        "sentence": "The brave eagle flies high in the blue sky.",
        "sentenceZh": "勇敢的老鷹在藍天中高飛。",
        "otherForms": "eagles (複數型)"
    },
    {
        "word": "elephant",
        "pos": "n.",
        "meaning": "大象",
        "theme": "動物",
        "sentence": "The elephant uses its long trunk to drink water.",
        "sentenceZh": "大象用牠長長的鼻子喝水。",
        "otherForms": "elephants (複數型)"
    },
    {
        "word": "fish",
        "pos": "n. / v.",
        "meaning": "魚 / 釣魚",
        "theme": "動物",
        "sentence": "There are many colorful fish swimming in this large pond.",
        "sentenceZh": "有許多色彩繽紛的魚在這個大池塘裡游來游去。",
        "otherForms": "fish (單複數同型)"
    },
    {
        "word": "fox",
        "pos": "n.",
        "meaning": "狐狸",
        "theme": "動物",
        "sentence": "The red fox quietly caught a small mouse in the field.",
        "sentenceZh": "紅狐狸悄悄地在田野裡抓住了一隻小老鼠。",
        "otherForms": "foxes (複數型(加es))"
    },
    {
        "word": "frog",
        "pos": "n.",
        "meaning": "青蛙",
        "theme": "動物",
        "sentence": "The green frog jumped into the water with a splash.",
        "sentenceZh": "綠色青蛙撲通一聲跳進了水裡。",
        "otherForms": "frogs (複數型)"
    },
    {
        "word": "goat",
        "pos": "n.",
        "meaning": "山羊",
        "theme": "動物",
        "sentence": "The goat easily climbed to the top of the rocks.",
        "sentenceZh": "山羊輕鬆地爬到了岩石頂端。",
        "otherForms": "goats (複數型)"
    },
    {
        "word": "goose",
        "pos": "n.",
        "meaning": "鵝",
        "theme": "動物",
        "sentence": "The white goose made a loud noise when we walked near it.",
        "sentenceZh": "當我們走近時，白鵝發出了很大的叫聲。",
        "otherForms": "geese (複數型(不規則))"
    },
    {
        "word": "hen",
        "pos": "n.",
        "meaning": "母雞",
        "theme": "動物",
        "sentence": "The brown hen laid a fresh egg this morning.",
        "sentenceZh": "那隻棕色母雞今天早上生了一顆新鮮的蛋。",
        "otherForms": "hens (複數型)"
    },
    {
        "word": "hippo",
        "pos": "n.",
        "meaning": "河馬",
        "theme": "動物",
        "sentence": "The big hippo loves to stay in the water all day.",
        "sentenceZh": "大河馬喜歡整天待在水裡。",
        "otherForms": "hippos (複數型)"
    },
    {
        "word": "horse",
        "pos": "n.",
        "meaning": "馬",
        "theme": "動物",
        "sentence": "He likes to ride his brown horse on the wide plain.",
        "sentenceZh": "他喜歡在寬廣的平原上騎他那匹棕馬。",
        "otherForms": "horses (複數型)"
    },
    {
        "word": "insect",
        "pos": "n.",
        "meaning": "昆蟲",
        "theme": "動物",
        "sentence": "A butterfly is a very beautiful kind of flying insect.",
        "sentenceZh": "蝴蝶是一種非常美麗的飛行昆蟲。",
        "otherForms": "insects (複數型)"
    },
    {
        "word": "kangaroo",
        "pos": "n.",
        "meaning": "袋鼠",
        "theme": "動物",
        "sentence": "A mother kangaroo carries her baby in her front pocket.",
        "sentenceZh": "kangaroo 媽媽把寶寶裝在她前面的育兒袋裡。",
        "otherForms": "kangaroos (複數型)"
    },
    {
        "word": "kitten",
        "pos": "n.",
        "meaning": "小貓",
        "theme": "動物",
        "sentence": "The little kitten is playing with a ball of yarn.",
        "sentenceZh": "小貓正在玩毛線球。",
        "otherForms": "kittens (複數型)"
    },
    {
        "word": "koala",
        "pos": "n.",
        "meaning": "無尾熊",
        "theme": "動物",
        "sentence": "The cute koala sleeps in the tree for many hours a day.",
        "sentenceZh": "可愛無尾熊一天在樹上睡好幾個小時。",
        "otherForms": "koalas (複數型)"
    },
    {
        "word": "lamb",
        "pos": "n.",
        "meaning": "小羊",
        "theme": "動物",
        "sentence": "The little white lamb followed its mother everywhere.",
        "sentenceZh": "小白羊走到哪都跟著牠媽媽。",
        "otherForms": "lambs (複數型)"
    },
    {
        "word": "lion",
        "pos": "n.",
        "meaning": "獅子",
        "theme": "動物",
        "sentence": "The strong lion is the king of the wild animals.",
        "sentenceZh": "強壯的獅子是野生動物之王。",
        "otherForms": "lions (複數型)"
    },
    {
        "word": "monkey",
        "pos": "n.",
        "meaning": "猴子",
        "theme": "動物",
        "sentence": "The clever monkey learned how to open the box.",
        "sentenceZh": "聰明的猴子學會了如何打開盒子。",
        "otherForms": "monkeys (複數型)"
    },
    {
        "word": "monster",
        "pos": "n.",
        "meaning": "怪物",
        "theme": "動物",
        "sentence": "In this vocabulary game, you must spell the word correctly to defeat the monster.",
        "sentenceZh": "在這個單字遊戲裡，你必須正確拼寫單字才能打敗怪物。",
        "otherForms": "monsters (複數型)"
    },
    {
        "word": "mosquito",
        "pos": "n.",
        "meaning": "蚊子",
        "theme": "動物",
        "sentence": "A mosquito bit me on the arm and now it is very itchy.",
        "sentenceZh": "一隻蚊子咬了我的手臂，現在非常癢。",
        "otherForms": "mosquitoes (複數型(加es))"
    },
    {
        "word": "mouse",
        "pos": "n.",
        "meaning": "老鼠",
        "theme": "動物",
        "sentence": "The cat quickly ran after the small mouse.",
        "sentenceZh": "貓迅速地追趕那隻小老鼠。",
        "otherForms": "mice (複數型(不規則))"
    },
    {
        "word": "ox",
        "pos": "n.",
        "meaning": "公牛",
        "theme": "動物",
        "sentence": "The strong ox helped the farmer work in the muddy field.",
        "sentenceZh": "強壯的公牛幫助農夫在泥濘的田裡工作。",
        "otherForms": "oxen (複數型(不規則))"
    },
    {
        "word": "panda",
        "pos": "n.",
        "meaning": "熊貓",
        "theme": "動物",
        "sentence": "The black and white panda is eating green bamboo.",
        "sentenceZh": "黑白相間的貓熊正在吃綠竹子。",
        "otherForms": "pandas (複數型)"
    },
    {
        "word": "parrot",
        "pos": "n.",
        "meaning": "鸚鵡",
        "theme": "動物",
        "sentence": "This smart parrot can repeat what you say!",
        "sentenceZh": "這隻聰明的鸚鵡能重複你說的話！",
        "otherForms": "parrots (複數型)"
    },
    {
        "word": "pet",
        "pos": "n.",
        "meaning": "寵物",
        "theme": "動物",
        "sentence": "Many people treat their pets like their own family members.",
        "sentenceZh": "許多人把他們的寵物當作自己的家人對待。",
        "otherForms": "pets (複數型), pets"
    },
    {
        "word": "pig",
        "pos": "n.",
        "meaning": "豬",
        "theme": "動物",
        "sentence": "The little pig is happily eating its food in the farm.",
        "sentenceZh": "小豬正在農場裡開心地吃著食物。",
        "otherForms": "pigs (複數型)"
    },
    {
        "word": "pigeon",
        "pos": "n.",
        "meaning": "鴿子",
        "theme": "動物",
        "sentence": "A gray pigeon flew down to eat the bread crumbs on the floor.",
        "sentenceZh": "一隻灰鴿子飛下來吃地上的麵包屑。",
        "otherForms": "pigeons (複數型)"
    },
    {
        "word": "puppy",
        "pos": "n.",
        "meaning": "小狗",
        "theme": "動物",
        "sentence": "The cute puppy wagged its tail when I came home.",
        "sentenceZh": "當我回家時，可愛的小狗搖了搖尾巴。",
        "otherForms": "puppies (複數型(去y加ies))"
    },
    {
        "word": "rabbit",
        "pos": "n.",
        "meaning": "兔子",
        "theme": "動物",
        "sentence": "The white rabbit has very long ears and soft hair.",
        "sentenceZh": "白兔有著很長的耳朵和柔軟的毛。",
        "otherForms": "rabbits (複數型)"
    },
    {
        "word": "rat",
        "pos": "n.",
        "meaning": "大鼠",
        "theme": "動物",
        "sentence": "A big rat ran across the dark street last night.",
        "sentenceZh": "昨晚一隻大老鼠跑過了昏暗的街道。",
        "otherForms": "rats (複數型)"
    },
    {
        "word": "shark",
        "pos": "n.",
        "meaning": "鯊魚",
        "theme": "動物",
        "sentence": "The dangerous shark has many rows of very sharp teeth.",
        "sentenceZh": "危險的鯊魚有多排非常銳利的牙齒。",
        "otherForms": "sharks (複數型)"
    },
    {
        "word": "sheep",
        "pos": "n.",
        "meaning": "綿羊",
        "theme": "動物",
        "sentence": "The farmer uses the wool from the sheep to make warm clothes.",
        "sentenceZh": "農夫用綿羊的羊毛來做保暖的衣服。",
        "otherForms": "sheep (單複數同型)"
    },
    {
        "word": "shrimp",
        "pos": "n.",
        "meaning": "蝦",
        "theme": "動物",
        "sentence": "I like to order fried rice with egg and fresh shrimp.",
        "sentenceZh": "我喜歡點加了蛋和新鮮蝦子的炒飯。",
        "otherForms": "shrimp/shrimps (複數型)"
    },
    {
        "word": "snail",
        "pos": "n.",
        "meaning": "蝸牛",
        "theme": "動物",
        "sentence": "The little snail moves very slowly across the wet leaf.",
        "sentenceZh": "小蝸牛在濕葉子上移動得非常緩慢。",
        "otherForms": "snails (複數型)"
    },
    {
        "word": "snake",
        "pos": "n.",
        "meaning": "蛇",
        "theme": "動物",
        "sentence": "Be careful of the poisonous snake when you hike in the woods.",
        "sentenceZh": "在樹林裡健行時要小心毒蛇。",
        "otherForms": "snakes (複數型)"
    },
    {
        "word": "spider",
        "pos": "n.",
        "meaning": "蜘蛛",
        "theme": "動物",
        "sentence": "The spider is making a large web in the corner of the room.",
        "sentenceZh": "蜘蛛正在房間角落結一張大網。",
        "otherForms": "spiders (複數型)"
    },
    {
        "word": "swan",
        "pos": "n.",
        "meaning": "天鵝",
        "theme": "動物",
        "sentence": "The beautiful white swan swam gracefully on the calm lake.",
        "sentenceZh": "美麗的白天鵝在平靜的湖面上優雅地游著。",
        "otherForms": "swans (複數型)"
    },
    {
        "word": "tail",
        "pos": "n.",
        "meaning": "尾巴",
        "theme": "動物",
        "sentence": "My happy dog always wags its tail when I play with it.",
        "sentenceZh": "我的狗很開心，當我和牠玩時牠總是搖尾巴。",
        "otherForms": "tails (複數型)"
    },
    {
        "word": "tiger",
        "pos": "n.",
        "meaning": "老虎",
        "theme": "動物",
        "sentence": "The fierce tiger ran quickly to catch its food.",
        "sentenceZh": "兇猛的老虎快速奔跑去抓食物。",
        "otherForms": "tigers (複數型)"
    },
    {
        "word": "turkey",
        "pos": "n.",
        "meaning": "火雞",
        "theme": "動物",
        "sentence": "We eat a large roast turkey to celebrate Thanksgiving.",
        "sentenceZh": "我們吃一大隻烤火雞來慶祝感恩節。",
        "otherForms": "turkeys (複數型)"
    },
    {
        "word": "turtle",
        "pos": "n.",
        "meaning": "烏龜",
        "theme": "動物",
        "sentence": "The heavy turtle walked slowly across the sand to the sea.",
        "sentenceZh": "笨重的烏龜緩慢地走過沙灘回到海裡。",
        "otherForms": "turtles (複數型)"
    },
    {
        "word": "whale",
        "pos": "n.",
        "meaning": "鯨魚",
        "theme": "動物",
        "sentence": "The blue whale is the largest living animal in the world.",
        "sentenceZh": "藍鯨是世界上現存體型最大的動物。",
        "otherForms": "whales (複數型)"
    },
    {
        "word": "wing",
        "pos": "n.",
        "meaning": "翅膀",
        "theme": "動物",
        "sentence": "The bird hurt its left wing and couldn't fly away.",
        "sentenceZh": "這隻鳥傷到了左邊的翅膀，沒辦法飛走。",
        "otherForms": "wings (複數型)"
    },
    {
        "word": "wolf",
        "pos": "n.",
        "meaning": "狼",
        "theme": "動物",
        "sentence": "The gray wolf howled loudly at the full moon.",
        "sentenceZh": "灰狼對著滿月大聲嚎叫。",
        "otherForms": "wolves (複數型(去f加ves))"
    },
    {
        "word": "worm",
        "pos": "n.",
        "meaning": "蠕蟲",
        "theme": "動物",
        "sentence": "The early bird catches the little worm.",
        "sentenceZh": "早起的鳥兒有蟲吃。",
        "otherForms": "worms (複數型)"
    },
    {
        "word": "zebra",
        "pos": "n.",
        "meaning": "斑馬",
        "theme": "動物",
        "sentence": "The zebra has black and white stripes on its body.",
        "sentenceZh": "斑馬身上有黑白相間的條紋。",
        "otherForms": "zebras (複數型)"
    },
    {
        "word": "belt",
        "pos": "n.",
        "meaning": "皮帶",
        "theme": "穿搭配件",
        "sentence": "Your pants are too loose; you need to wear a leather belt.",
        "sentenceZh": "你的褲子太鬆了，你需要繫條皮帶。",
        "otherForms": "belts (複數型)"
    },
    {
        "word": "blouse",
        "pos": "n.",
        "meaning": "女裝上衣",
        "theme": "穿搭配件",
        "sentence": "My teacher wore a beautiful white blouse to work today.",
        "sentenceZh": "我的老師今天穿了一件美麗的白色女用襯衫去上班。",
        "otherForms": "blouses (複數型)"
    },
    {
        "word": "button",
        "pos": "n.",
        "meaning": "鈕扣",
        "theme": "穿搭配件",
        "sentence": "You need to push this red button to turn on the computer.",
        "sentenceZh": "你需要按下這顆紅色的按鈕來開啟電腦。",
        "otherForms": "buttons (複數型)"
    },
    {
        "word": "cap",
        "pos": "n.",
        "meaning": "棒球帽",
        "theme": "穿搭配件",
        "sentence": "He wore a blue baseball cap to protect his eyes from the sun.",
        "sentenceZh": "他戴著一頂藍色棒球帽來保護眼睛免受陽光照射。",
        "otherForms": "caps (複數型)"
    },
    {
        "word": "clothes",
        "pos": "n.",
        "meaning": "衣服（總稱）",
        "theme": "穿搭配件",
        "sentence": "Please fold your clean clothes and put them in the closet.",
        "sentenceZh": "請把乾淨的衣服摺好並放進衣櫥裡。",
        "otherForms": "clothes (複數型(常以複數出現))"
    },
    {
        "word": "coat",
        "pos": "n.",
        "meaning": "外套",
        "theme": "穿搭配件",
        "sentence": "It is freezing outside, so make sure you wear a heavy coat.",
        "sentenceZh": "外面冷極了，所以務必穿上一件厚外套。",
        "otherForms": "coats (複數型)"
    },
    {
        "word": "comb",
        "pos": "n. / v.",
        "meaning": "梳子 / 梳理",
        "theme": "穿搭配件",
        "sentence": "She used a plastic comb to make her long hair neat.",
        "sentenceZh": "她用一把塑膠梳子把長頭髮梳整齊。",
        "otherForms": "combs (複數型)"
    },
    {
        "word": "contact lens",
        "pos": "n.",
        "meaning": "隱形眼鏡",
        "theme": "穿搭配件",
        "sentence": "I usually wear contact lenses instead of glasses when I play badminton.",
        "sentenceZh": "我打羽球時通常會戴隱形眼鏡而不是一般眼鏡。",
        "otherForms": "contact lenses (複數型(加es))"
    },
    {
        "word": "cotton",
        "pos": "n.",
        "meaning": "棉",
        "theme": "穿搭配件",
        "sentence": "This T-shirt is very comfortable because it is made of 100% cotton.",
        "sentenceZh": "這件 T 恤非常舒服，因為它是百分之百純棉做的。",
        "otherForms": ""
    },
    {
        "word": "diamond",
        "pos": "n.",
        "meaning": "鑽石",
        "theme": "穿搭配件",
        "sentence": "Her husband gave her a beautiful ring with a shiny diamond.",
        "sentenceZh": "她丈夫給了她一隻鑲著閃亮鑽石的美麗戒指。",
        "otherForms": "diamonds (複數型)"
    },
    {
        "word": "dress",
        "pos": "n. / v.",
        "meaning": "連身裙 / 穿衣",
        "theme": "穿搭配件",
        "sentence": "She wore a pretty red dress to the summer party.",
        "sentenceZh": "她穿了一件漂亮的紅洋裝去參加夏日派對。",
        "otherForms": "dresses (複數型(加es)), dresses (三單(加es)), dressing (ing型), dressed (過去式/分詞)"
    },
    {
        "word": "earring",
        "pos": "n.",
        "meaning": "耳環",
        "theme": "穿搭配件",
        "sentence": "My mother got a pair of gold earrings for her birthday.",
        "sentenceZh": "我媽媽得到了一副金耳環作為生日禮物。",
        "otherForms": "earrings (複數型(常以複數出現))"
    },
    {
        "word": "fashion",
        "pos": "n.",
        "meaning": "時尚；流行",
        "theme": "穿搭配件",
        "sentence": "Short skirts are back in fashion this summer.",
        "sentenceZh": "短裙在今年夏天又重新流行起來了。",
        "otherForms": "fashions (複數型), fashionable (流行的 - 形容詞)"
    },
    {
        "word": "glove",
        "pos": "n.",
        "meaning": "手套",
        "theme": "穿搭配件",
        "sentence": "Wear a thick glove when you take the hot pot out of the oven.",
        "sentenceZh": "從烤箱拿出熱鍋子時要戴上厚手套。",
        "otherForms": "gloves (複數型)"
    },
    {
        "word": "gold",
        "pos": "n.",
        "meaning": "黃金",
        "theme": "穿搭配件",
        "sentence": "The champion of the badminton race won a real gold medal.",
        "sentenceZh": "這場羽球競賽的冠軍贏得了一面真金獎牌。",
        "otherForms": ""
    },
    {
        "word": "haircut",
        "pos": "n.",
        "meaning": "理髮",
        "theme": "穿搭配件",
        "sentence": "Your hair is getting too long; you should get a haircut soon.",
        "sentenceZh": "你的頭髮越來越長了，你應該快點去理髮。",
        "otherForms": "haircuts (複數型)"
    },
    {
        "word": "handkerchief",
        "pos": "n.",
        "meaning": "手帕",
        "theme": "穿搭配件",
        "sentence": "The gentleman gave her a clean handkerchief to wipe her tears.",
        "sentenceZh": "這位紳士給她一條乾淨的手帕來擦眼淚。",
        "otherForms": "handkerchiefs (複數型)"
    },
    {
        "word": "hat",
        "pos": "n.",
        "meaning": "帽子",
        "theme": "穿搭配件",
        "sentence": "Don't forget to take off your hat when you go inside the classroom.",
        "sentenceZh": "進教室時別忘了脫帽。",
        "otherForms": "hats (複數型)"
    },
    {
        "word": "hole",
        "pos": "n.",
        "meaning": "破洞",
        "theme": "穿搭配件",
        "sentence": "There is a big hole in my right sock!",
        "sentenceZh": "我的右腳襪子上破了一個大洞！",
        "otherForms": "holes (複數型)"
    },
    {
        "word": "jacket",
        "pos": "n.",
        "meaning": "夾克",
        "theme": "穿搭配件",
        "sentence": "Put on your jacket; it is getting cold this evening.",
        "sentenceZh": "穿上你的夾克，今晚天氣變冷了。",
        "otherForms": "jackets (複數型)"
    },
    {
        "word": "jeans",
        "pos": "n.",
        "meaning": "牛仔褲",
        "theme": "穿搭配件",
        "sentence": "He almost always wears a simple white T-shirt and blue jeans.",
        "sentenceZh": "他幾乎總是穿著簡單的白色 T 恤和藍色牛仔褲。",
        "otherForms": "jeans (複數型(常以複數出現))"
    },
    {
        "word": "mask",
        "pos": "n.",
        "meaning": "口罩；面具",
        "theme": "穿搭配件",
        "sentence": "We have to wear a face mask if we catch a bad cold.",
        "sentenceZh": "如果我們得了重感冒就必須戴口罩。",
        "otherForms": "masks (複數型)"
    },
    {
        "word": "necklace",
        "pos": "n.",
        "meaning": "項鍊",
        "theme": "穿搭配件",
        "sentence": "She bought a silver necklace to match her beautiful dress.",
        "sentenceZh": "她買了一條銀項鍊來搭配她美麗的洋裝。",
        "otherForms": "necklaces (複數型)"
    },
    {
        "word": "pajama",
        "pos": "n.",
        "meaning": "睡衣",
        "theme": "穿搭配件",
        "sentence": "Put on your comfortable pajamas and get ready for bed.",
        "sentenceZh": "穿上你舒適的睡衣並準備睡覺。",
        "otherForms": "pajamas (複數型(常以複數出現))"
    },
    {
        "word": "pants",
        "pos": "n.",
        "meaning": "褲子",
        "theme": "穿搭配件",
        "sentence": "I need to buy a new pair of black pants for my new job.",
        "sentenceZh": "我需要為了新工作買一條新的黑褲子。",
        "otherForms": "pants (複數型(常以複數出現))"
    },
    {
        "word": "pocket",
        "pos": "n.",
        "meaning": "口袋",
        "theme": "穿搭配件",
        "sentence": "He put his keys and cellphone in his jacket pocket.",
        "sentenceZh": "他把鑰匙和手機放進夾克口袋裡。",
        "otherForms": "pockets (複數型)"
    },
    {
        "word": "purse",
        "pos": "n.",
        "meaning": "錢包（女用）",
        "theme": "穿搭配件",
        "sentence": "My mom forgot to bring her purse to the supermarket.",
        "sentenceZh": "我媽媽去超市忘了帶她的皮包。",
        "otherForms": "purses (複數型)"
    },
    {
        "word": "raincoat",
        "pos": "n.",
        "meaning": "雨衣",
        "theme": "穿搭配件",
        "sentence": "Wear your yellow raincoat so you don't get wet in the heavy rain.",
        "sentenceZh": "穿上你的黃色雨衣，這樣在大雨中才不會淋濕。",
        "otherForms": "raincoats (複數型)"
    },
    {
        "word": "ring",
        "pos": "n. / v.",
        "meaning": "戒指 / 響鈴；按鈴",
        "theme": "穿搭配件",
        "sentence": "The beautiful silver ring fits perfectly on her finger.",
        "sentenceZh": "這只美麗的銀戒指完美地戴在她的手指上。",
        "otherForms": "rings (複數型/ 三單), ringing (ing型), rang (過去式(不規則)), rung (過去分詞(不規則))"
    },
    {
        "word": "scarf",
        "pos": "n.",
        "meaning": "圍巾",
        "theme": "穿搭配件",
        "sentence": "Wrap a warm scarf around your neck in the cold winter.",
        "sentenceZh": "在寒冷的冬天用一條溫暖的圍巾圍住你的脖子。",
        "otherForms": "scarves/scarfs (複數型(去f加ves))"
    },
    {
        "word": "shirt",
        "pos": "n.",
        "meaning": "襯衫",
        "theme": "穿搭配件",
        "sentence": "He needs to wear a white shirt and a red tie to the meeting.",
        "sentenceZh": "他必須穿白襯衫繫紅領帶去開會。",
        "otherForms": "shirts (複數型)"
    },
    {
        "word": "shoes",
        "pos": "n.",
        "meaning": "鞋子",
        "theme": "穿搭配件",
        "sentence": "Take off your dirty shoes before you enter the living room.",
        "sentenceZh": "進客廳前請脫掉你髒兮兮的鞋子。",
        "otherForms": "shoes (複數型(常以複數出現))"
    },
    {
        "word": "shorts",
        "pos": "n.",
        "meaning": "短褲",
        "theme": "穿搭配件",
        "sentence": "It is cool and comfortable to wear shorts in the hot summer.",
        "sentenceZh": "炎熱的夏天穿短褲既涼爽又舒服。",
        "otherForms": "shorts (複數型(常以複數出現))"
    },
    {
        "word": "silver",
        "pos": "n.",
        "meaning": "銀",
        "theme": "穿搭配件",
        "sentence": "She uses a beautiful silver spoon to eat her dessert.",
        "sentenceZh": "她用一把美麗的銀湯匙吃甜點。",
        "otherForms": ""
    },
    {
        "word": "skirt",
        "pos": "n.",
        "meaning": "裙子",
        "theme": "穿搭配件",
        "sentence": "The girls in our school have to wear a blue skirt on Mondays.",
        "sentenceZh": "我們學校的女生星期一必須穿藍色裙子。",
        "otherForms": "skirts (複數型)"
    },
    {
        "word": "slipper",
        "pos": "n.",
        "meaning": "拖鞋",
        "theme": "穿搭配件",
        "sentence": "Put on your slippers so your feet won't feel cold on the floor.",
        "sentenceZh": "穿上拖鞋，這樣你的腳在地上才不會覺得冷。",
        "otherForms": "slippers (複數型(常以複數出現))"
    },
    {
        "word": "sneaker",
        "pos": "n.",
        "meaning": "運動鞋",
        "theme": "穿搭配件",
        "sentence": "I need a good pair of sneakers for jogging in the park.",
        "sentenceZh": "我需要一雙好穿的運動鞋去公園慢跑。",
        "otherForms": "sneakers (複數型(常以複數出現))"
    },
    {
        "word": "sock",
        "pos": "n.",
        "meaning": "襪子",
        "theme": "穿搭配件",
        "sentence": "Remember to wash your dirty socks after playing sports.",
        "sentenceZh": "運動後記得洗你髒掉的襪子。",
        "otherForms": "socks (複數型(常以複數出現))"
    },
    {
        "word": "spot",
        "pos": "n. / v.",
        "meaning": "污點；地點 / 發現",
        "theme": "穿搭配件",
        "sentence": "There is a coffee spot on your white shirt!",
        "sentenceZh": "你的白襯衫上有個咖啡污點！",
        "otherForms": "spots (複數型), spots (三單), spotting (ing型(重複字尾)), spotted (過去式/分詞(重複字尾))"
    },
    {
        "word": "suit",
        "pos": "n. / v.",
        "meaning": "西裝 / 適合",
        "theme": "穿搭配件",
        "sentence": "The businessman wore a black suit to the important meeting.",
        "sentenceZh": "商人穿了一套黑西裝去參加重要會議。",
        "otherForms": "suits (複數型), suits (三單), suiting (ing型), suited (過去式/分詞)"
    },
    {
        "word": "sweater",
        "pos": "n.",
        "meaning": "毛衣",
        "theme": "穿搭配件",
        "sentence": "Grandmother knitted a warm red sweater for me.",
        "sentenceZh": "奶奶為我織了一件溫暖的紅毛衣。",
        "otherForms": "sweaters (複數型)"
    },
    {
        "word": "swimsuit",
        "pos": "n.",
        "meaning": "泳衣",
        "theme": "穿搭配件",
        "sentence": "Don't forget to pack your swimsuit if we are going to the beach.",
        "sentenceZh": "如果我們要去海灘，別忘了把你的泳衣收進行李。",
        "otherForms": "swimsuits (複數型)"
    },
    {
        "word": "tie",
        "pos": "n. / v.",
        "meaning": "領帶 / 綁",
        "theme": "穿搭配件",
        "sentence": "He wore a funny blue tie with his formal suit.",
        "sentenceZh": "他的正式西裝搭配了一條有趣的藍領帶。",
        "otherForms": "ties (複數型), ties (三單), tying (ing型(去ie加ying)), tied (過去式/分詞)"
    },
    {
        "word": "trouser",
        "pos": "n.",
        "meaning": "長褲",
        "theme": "穿搭配件",
        "sentence": "The school uniform requires boys to wear long dark trousers.",
        "sentenceZh": "學校制服規定男生要穿深色長褲。",
        "otherForms": "trousers (複數型(常以複數出現))"
    },
    {
        "word": "T-shirt",
        "pos": "n.",
        "meaning": "T恤",
        "theme": "穿搭配件",
        "sentence": "She gave me a cool T-shirt with my favorite 80s band on it.",
        "sentenceZh": "她送我一件印有我最愛的 80 年代樂團的酷炫 T 恤。",
        "otherForms": "T-shirts (複數型)"
    },
    {
        "word": "umbrella",
        "pos": "n.",
        "meaning": "雨傘",
        "theme": "穿搭配件",
        "sentence": "You had better take an umbrella; the sky looks very dark.",
        "sentenceZh": "你最好帶把雨傘，天空看起來非常暗。",
        "otherForms": "umbrellas (複數型)"
    },
    {
        "word": "underwear",
        "pos": "n.",
        "meaning": "內衣",
        "theme": "穿搭配件",
        "sentence": "Pack enough clean underwear for our three-day trip.",
        "sentenceZh": "為我們三天的旅行打包足夠的乾淨內衣褲。",
        "otherForms": ""
    },
    {
        "word": "uniform",
        "pos": "n.",
        "meaning": "制服",
        "theme": "穿搭配件",
        "sentence": "Students have to wear their school uniform from Monday to Friday.",
        "sentenceZh": "學生星期一到星期五都必須穿學校制服。",
        "otherForms": "uniforms (複數型)"
    },
    {
        "word": "vest",
        "pos": "n.",
        "meaning": "背心",
        "theme": "穿搭配件",
        "sentence": "The police officer wore a heavy bulletproof vest for safety.",
        "sentenceZh": "警官為了安全穿了一件厚重的防彈背心。",
        "otherForms": "vests (複數型)"
    },
    {
        "word": "wallet",
        "pos": "n.",
        "meaning": "皮夾（男用）",
        "theme": "穿搭配件",
        "sentence": "My dad keeps his credit cards and cash in his brown leather wallet.",
        "sentenceZh": "我爸爸把信用卡和現金放在他的棕色真皮皮夾裡。",
        "otherForms": "wallets (複數型)"
    },
    {
        "word": "camera",
        "pos": "n.",
        "meaning": "相機",
        "theme": "電子產品",
        "sentence": "He used a professional camera to take beautiful photos of nature.",
        "sentenceZh": "他用專業相機拍下美麗的大自然照片。",
        "otherForms": "cameras (複數型)"
    },
    {
        "word": "cellphone",
        "pos": "n.",
        "meaning": "手機",
        "theme": "電子產品",
        "sentence": "You must turn off your cellphone when the class begins.",
        "sentenceZh": "上課時你必須關掉手機。",
        "otherForms": "cellphones (複數型)"
    },
    {
        "word": "computer",
        "pos": "n.",
        "meaning": "電腦",
        "theme": "電子產品",
        "sentence": "I use my computer to practice writing HTML game code every day.",
        "sentenceZh": "我每天用電腦練習寫 HTML 遊戲程式碼。",
        "otherForms": "computers (複數型)"
    },
    {
        "word": "e-mail",
        "pos": "n. / v.",
        "meaning": "電子郵件 / 寄電子郵件",
        "theme": "電子產品",
        "sentence": "The teacher sent an e-mail to our parents about the test.",
        "sentenceZh": "老師發了一封電子郵件給我們父母告知考試的事。",
        "otherForms": "e-mails (複數型)"
    },
    {
        "word": "file",
        "pos": "n. / v.",
        "meaning": "檔案 / 歸檔",
        "theme": "電子產品",
        "sentence": "Don't forget to save your game file before closing the program.",
        "sentenceZh": "關閉程式前別忘了儲存你的遊戲檔案。",
        "otherForms": "files (複數型)"
    },
    {
        "word": "Internet (Net)",
        "pos": "n.",
        "meaning": "網路",
        "theme": "電子產品",
        "sentence": "You can learn almost anything you want on the Internet.",
        "sentenceZh": "你可以在網路上學到幾乎任何你想學的東西。",
        "otherForms": ""
    },
    {
        "word": "link",
        "pos": "n. / v.",
        "meaning": "連結",
        "theme": "電子產品",
        "sentence": "Click on this blue link to open the vocabulary game website.",
        "sentenceZh": "點擊這個藍色連結來開啟單字遊戲網站。",
        "otherForms": "links (複數型), links (三單), linking (ing型), linked (過去式/分詞)"
    },
    {
        "word": "mail",
        "pos": "n. / v.",
        "meaning": "郵件 / 郵寄",
        "theme": "電子產品",
        "sentence": "The postman delivered some important mail to our house today.",
        "sentenceZh": "郵差今天送了一些重要的郵件到我們家。",
        "otherForms": "mails (複數型)"
    },
    {
        "word": "net",
        "pos": "n.",
        "meaning": "網",
        "theme": "電子產品",
        "sentence": "The badminton player hit the ball right into the net.",
        "sentenceZh": "羽球選手把球直接打到了網子上。",
        "otherForms": "nets (複數型)"
    },
    {
        "word": "printer",
        "pos": "n.",
        "meaning": "印表機",
        "theme": "電子產品",
        "sentence": "The teacher used the printer to make 30 copies of the worksheet.",
        "sentenceZh": "老師用印表機印了 30 份學習單。",
        "otherForms": "printers (複數型)"
    },
    {
        "word": "radio",
        "pos": "n.",
        "meaning": "收音機",
        "theme": "電子產品",
        "sentence": "My grandfather still listens to the morning news on his old radio.",
        "sentenceZh": "我爺爺仍然用他的舊收音機聽晨間新聞。",
        "otherForms": "radios (複數型)"
    },
    {
        "word": "robot",
        "pos": "n.",
        "meaning": "機器人",
        "theme": "電子產品",
        "sentence": "The students built a smart robot that can clean the floor.",
        "sentenceZh": "學生們做了一個能打掃地板的聰明機器人。",
        "otherForms": "robots (複數型)"
    },
    {
        "word": "screen",
        "pos": "n.",
        "meaning": "螢幕",
        "theme": "電子產品",
        "sentence": "Look at the computer screen carefully to find the correct answer.",
        "sentenceZh": "仔細看電腦螢幕找出正確答案。",
        "otherForms": "screens (複數型)"
    },
    {
        "word": "telephone (phone)",
        "pos": "n.",
        "meaning": "電話",
        "theme": "電子產品",
        "sentence": "Please answer the telephone if it rings while I am out.",
        "sentenceZh": "如果我不在時電話響了請接聽。",
        "otherForms": "telephones (複數型)"
    },
    {
        "word": "video",
        "pos": "n.",
        "meaning": "影片；錄影機",
        "theme": "電子產品",
        "sentence": "We watched a funny YouTube video together and laughed loudly.",
        "sentenceZh": "我們一起看了一部有趣的 YouTube 影片，大聲笑了出來。",
        "otherForms": "videos (複數型)"
    },
    {
        "word": "wire",
        "pos": "n.",
        "meaning": "電線；金屬線",
        "theme": "電子產品",
        "sentence": "Be careful not to touch the broken wire.",
        "sentenceZh": "小心不要碰到那根斷掉的電線。",
        "otherForms": "wires (複數型)"
    },
    {
        "word": "advertisement",
        "pos": "n.",
        "meaning": "廣告",
        "theme": "社會與媒體",
        "sentence": "I saw a cool TV advertisement for a new 80s music album.",
        "sentenceZh": "我在電視上看到一個很酷的 80 年代新音樂專輯廣告。",
        "otherForms": "advertisements (複數型)"
    },
    {
        "word": "channel",
        "pos": "n.",
        "meaning": "頻道；海峽",
        "theme": "社會與媒體",
        "sentence": "Can you switch the TV channel to watch the badminton game?",
        "sentenceZh": "你能轉電視頻道看羽球比賽嗎？",
        "otherForms": "channels (複數型)"
    },
    {
        "word": "crime",
        "pos": "n.",
        "meaning": "犯罪",
        "theme": "社會與媒體",
        "sentence": "Stealing a bicycle from the park is a serious crime.",
        "sentenceZh": "在公園偷腳踏車是嚴重的犯罪。",
        "otherForms": "crimes (複數型)"
    },
    {
        "word": "data",
        "pos": "n.",
        "meaning": "資料；數據",
        "theme": "社會與媒體",
        "sentence": "We need more data to finish the report.",
        "sentenceZh": "我們需要更多數據來完成報告。",
        "otherForms": "datum (單數型(較少用))"
    },
    {
        "word": "debate",
        "pos": "n. / v.",
        "meaning": "辯論",
        "theme": "社會與媒體",
        "sentence": "The students had a fierce debate about the new school rules.",
        "sentenceZh": "學生們對新校規進行了激烈的辯論。",
        "otherForms": "debates (複數型), debates (三單), debating (ing型(去e加ing)), debated (過去式/分詞)"
    },
    {
        "word": "government",
        "pos": "n.",
        "meaning": "政府",
        "theme": "社會與媒體",
        "sentence": "The government will build a new hospital in our city next year.",
        "sentenceZh": "政府明年將在我們城市建一家新醫院。",
        "otherForms": "governments (複數型)"
    },
    {
        "word": "information",
        "pos": "n.",
        "meaning": "資訊",
        "theme": "社會與媒體",
        "sentence": "You can find a lot of useful information for your report online.",
        "sentenceZh": "你可以在網路上找到很多對你報告有用的資訊。",
        "otherForms": ""
    },
    {
        "word": "Internet",
        "pos": "n.",
        "meaning": "網際網路",
        "theme": "社會與媒體",
        "sentence": "We use the Internet every day to communicate with our friends.",
        "sentenceZh": "我們每天用網際網路與朋友交流。",
        "otherForms": ""
    },
    {
        "word": "legal",
        "pos": "adj.",
        "meaning": "合法的",
        "theme": "社會與媒體",
        "sentence": "It is not legal to drive without a license.",
        "sentenceZh": "無照駕駛是不合法的。",
        "otherForms": "legally (合法地 - 副詞), illegal (反義詞 (非法的))"
    },
    {
        "word": "media",
        "pos": "n.",
        "meaning": "媒體",
        "theme": "社會與媒體",
        "sentence": "The news was all over the mass media.",
        "sentenceZh": "這則新聞在各大媒體上廣為流傳。",
        "otherForms": "medium (單數型 - 媒介)"
    },
    {
        "word": "news",
        "pos": "n.",
        "meaning": "新聞",
        "theme": "社會與媒體",
        "sentence": "I just read some exciting news about our school team winning the game.",
        "sentenceZh": "我剛讀到我們校隊贏得比賽的令人振奮的新聞。",
        "otherForms": ""
    },
    {
        "word": "newspaper",
        "pos": "n.",
        "meaning": "報紙",
        "theme": "社會與媒體",
        "sentence": "My father likes to read the morning newspaper while drinking coffee.",
        "sentenceZh": "我爸爸喜歡一邊喝咖啡一邊看早報。",
        "otherForms": "newspapers (複數型)"
    },
    {
        "word": "organization",
        "pos": "n.",
        "meaning": "組織；機構",
        "theme": "社會與媒體",
        "sentence": "She works for a charity organization.",
        "sentenceZh": "她在一家慈善機構工作。",
        "otherForms": "organizations (複數型), organize (組織 - 動詞)"
    },
    {
        "word": "photo",
        "pos": "n.",
        "meaning": "照片",
        "theme": "社會與媒體",
        "sentence": "Let's take a group photo together to remember this happy trip!",
        "sentenceZh": "我們一起拍張團體照來紀念這趟快樂的旅行吧！",
        "otherForms": "photos (複數型)"
    },
    {
        "word": "population",
        "pos": "n.",
        "meaning": "人口",
        "theme": "社會與媒體",
        "sentence": "The population of Taiwan is over twenty-three million people.",
        "sentenceZh": "台灣的人口超過兩千三百萬人。",
        "otherForms": "populations (複數型)"
    },
    {
        "word": "post",
        "pos": "n. / v.",
        "meaning": "郵件 / 張貼",
        "theme": "社會與媒體",
        "sentence": "She posted a picture of her dog on Facebook.",
        "sentenceZh": "她在臉書上張貼了她愛犬的照片。",
        "otherForms": "posts (三單), posted (過去/過去分詞), posting (現在分詞)"
    },
    {
        "word": "program",
        "pos": "n. / v.",
        "meaning": "節目；程式 / 撰寫程式",
        "theme": "社會與媒體",
        "sentence": "My brother is learning how to write a computer program.",
        "sentenceZh": "我哥哥正在學習如何寫電腦程式。",
        "otherForms": "programs (複數型)"
    },
    {
        "word": "rule",
        "pos": "n. / v.",
        "meaning": "規則 / 統治",
        "theme": "社會與媒體",
        "sentence": "In our Syntax Repair game, both American and British spellings fit the rules!",
        "sentenceZh": "在我們的「語法修復」遊戲中，美式和英式拼寫都符合規則！",
        "otherForms": "rules (複數型), rules (三單), ruling (ing型(去e加ing)), ruled (過去式/分詞)"
    },
    {
        "word": "society",
        "pos": "n.",
        "meaning": "社會",
        "theme": "社會與媒體",
        "sentence": "Everyone has to work together to make our society better.",
        "sentenceZh": "每個人都必須共同努力讓我們的社會變得更好。",
        "otherForms": "societies (複數型(去y加ies))"
    },
    {
        "word": "speech",
        "pos": "n.",
        "meaning": "演講",
        "theme": "社會與媒體",
        "sentence": "The principal gave a very long speech on graduation day.",
        "sentenceZh": "校長在畢業典禮當天發表了很長的演講。",
        "otherForms": "speeches (複數型(加es))"
    },
    {
        "word": "story",
        "pos": "n.",
        "meaning": "故事",
        "theme": "社會與媒體",
        "sentence": "Let me tell you an interesting story about the history of badminton.",
        "sentenceZh": "讓我告訴你一個關於羽球歷史的有趣故事。",
        "otherForms": "stories (複數型(去y加ies))"
    },
    {
        "word": "system",
        "pos": "n.",
        "meaning": "系統",
        "theme": "社會與媒體",
        "sentence": "Our school has a new computer system to track grades.",
        "sentenceZh": "我們學校有一個新的電腦系統來追蹤成績。",
        "otherForms": "systems (複數型)"
    },
    {
        "word": "title",
        "pos": "n.",
        "meaning": "標題",
        "theme": "社會與媒體",
        "sentence": "The title of my English book report is \"The Brave Prince.\"",
        "sentenceZh": "我的英文讀書報告標題是《勇敢的王子》。",
        "otherForms": "titles (複數型)"
    },
    {
        "word": "topic",
        "pos": "n.",
        "meaning": "話題",
        "theme": "社會與媒體",
        "sentence": "The main topic of today's lesson is about artificial intelligence (AI).",
        "sentenceZh": "今天課程的主題是關於人工智慧 (AI)。",
        "otherForms": "topics (複數型)"
    },
    {
        "word": "war",
        "pos": "n.",
        "meaning": "戰爭",
        "theme": "社會與媒體",
        "sentence": "We should learn from history and always hope there is no more war.",
        "sentenceZh": "我們應該從歷史中學習，並永遠希望不再有戰爭。",
        "otherForms": "wars (複數型)"
    },
    {
        "word": "weapon",
        "pos": "n.",
        "meaning": "武器",
        "theme": "社會與媒體",
        "sentence": "Guns and knives are dangerous weapons.",
        "sentenceZh": "槍和刀都是危險的武器。",
        "otherForms": "weapons (複數型)"
    },
    {
        "word": "activity",
        "pos": "n.",
        "meaning": "活動",
        "theme": "商業",
        "sentence": "The English camp has many fun outdoor activities for students.",
        "sentenceZh": "英語營隊為學生準備了許多有趣的戶外活動。",
        "otherForms": "activities (複數型(去y加ies))"
    },
    {
        "word": "brand",
        "pos": "n.",
        "meaning": "品牌",
        "theme": "商業",
        "sentence": "What brand of smartphone do you use?",
        "sentenceZh": "你用哪個品牌的智慧型手機？",
        "otherForms": "brands (複數型)"
    },
    {
        "word": "case",
        "pos": "n.",
        "meaning": "案例；箱子",
        "theme": "商業",
        "sentence": "The police officer quickly solved the difficult robbery case.",
        "sentenceZh": "警官迅速破了這件困難的搶劫案。",
        "otherForms": "cases (複數型)"
    },
    {
        "word": "chart",
        "pos": "n.",
        "meaning": "圖表",
        "theme": "商業",
        "sentence": "Look at the vocabulary chart on page 10 to see the differences.",
        "sentenceZh": "看第十頁的單字圖表來了解差異。",
        "otherForms": "charts (複數型)"
    },
    {
        "word": "command",
        "pos": "n. / v.",
        "meaning": "命令",
        "theme": "商業",
        "sentence": "The soldier obeyed the captain's command without asking why.",
        "sentenceZh": "士兵服從隊長的命令，沒有問為什麼。",
        "otherForms": "commands (複數型), commands (三單), commanding (ing型), commanded (過去式/分詞)"
    },
    {
        "word": "contract",
        "pos": "n. / v.",
        "meaning": "合約 / 訂契約",
        "theme": "商業",
        "sentence": "They signed an important business contract at the meeting today.",
        "sentenceZh": "他們在今天的會議上簽署了一份重要的商業合約。",
        "otherForms": "contracts (複數型)"
    },
    {
        "word": "discussion",
        "pos": "n.",
        "meaning": "討論",
        "theme": "商業",
        "sentence": "We had a long discussion about how to design the class badge.",
        "sentenceZh": "我們對於如何設計班級徽章進行了長時間的討論。",
        "otherForms": "discussions (複數型)"
    },
    {
        "word": "event",
        "pos": "n.",
        "meaning": "事件",
        "theme": "商業",
        "sentence": "The school sports day is the most exciting event of the year.",
        "sentenceZh": "學校運動會是一年中最令人興奮的活動。",
        "otherForms": "events (複數型)"
    },
    {
        "word": "group",
        "pos": "n.",
        "meaning": "群組",
        "theme": "商業",
        "sentence": "The teacher divided the class into five small study groups.",
        "sentenceZh": "老師把全班分成五個學習小組。",
        "otherForms": "groups (複數型)"
    },
    {
        "word": "interview",
        "pos": "n. / v.",
        "meaning": "面試；訪談 / 採訪",
        "theme": "商業",
        "sentence": "He wore his best suit to the job interview at the bank.",
        "sentenceZh": "他穿了他最棒的西裝去銀行的工作面試。",
        "otherForms": "interviews (複數型), interviews (三單), interviewing (ing型), interviewed (過去式/分詞)"
    },
    {
        "word": "invitation",
        "pos": "n.",
        "meaning": "邀請",
        "theme": "商業",
        "sentence": "We sent an invitation to Director Lee for our AI teaching seminar.",
        "sentenceZh": "我們發了邀請函給李主任，請他參加我們的 AI 教學研討會。",
        "otherForms": "invitations (複數型)"
    },
    {
        "word": "item",
        "pos": "n.",
        "meaning": "項目",
        "theme": "商業",
        "sentence": "Please check each item on your shopping list before you leave.",
        "sentenceZh": "離開前請檢查你購物清單上的每一個項目。",
        "otherForms": "items (複數型)"
    },
    {
        "word": "matter",
        "pos": "n. / v.",
        "meaning": "事情 / 要緊",
        "theme": "商業",
        "sentence": "What is the matter? Why are you looking so sad today?",
        "sentenceZh": "怎麼了？你今天為什麼看起來這麼難過？",
        "otherForms": "matters (複數型)"
    },
    {
        "word": "meeting",
        "pos": "n.",
        "meaning": "會議",
        "theme": "商業",
        "sentence": "The teachers had a long meeting to discuss the English curriculum.",
        "sentenceZh": "老師們開了個長會來討論英文課程。",
        "otherForms": "meetings (複數型)"
    },
    {
        "word": "order",
        "pos": "n. / v.",
        "meaning": "命令；訂單 / 點餐；命令",
        "theme": "商業",
        "sentence": "The teacher gave an order to everyone to finish their homework quietly.",
        "sentenceZh": "老師命令每個人安靜地寫完作業。",
        "otherForms": "orders (複數型), orders (三單), ordering (ing型), ordered (過去式/分詞)"
    },
    {
        "word": "project",
        "pos": "n.",
        "meaning": "專案",
        "theme": "商業",
        "sentence": "The students are working on a science project about the environment.",
        "sentenceZh": "學生們正在進行一個關於環境的科學專案。",
        "otherForms": "projects (複數型)"
    },
    {
        "word": "sale",
        "pos": "n.",
        "meaning": "拍賣；銷售",
        "theme": "商業",
        "sentence": "The department store is having a big winter sale next week.",
        "sentenceZh": "百貨公司下週將有一場盛大的冬季拍賣。",
        "otherForms": "sales (複數型)"
    },
    {
        "word": "sample",
        "pos": "n.",
        "meaning": "樣品",
        "theme": "商業",
        "sentence": "The lady gave us a free sample of the new cake to try.",
        "sentenceZh": "那位女士給我們一塊新蛋糕的免費樣品試吃。",
        "otherForms": "samples (複數型)"
    },
    {
        "word": "service",
        "pos": "n.",
        "meaning": "服務",
        "theme": "商業",
        "sentence": "The waiter provided excellent service at the Italian restaurant.",
        "sentenceZh": "這位服務生在義大利餐廳提供了極佳的服務。",
        "otherForms": "services (複數型)"
    },
    {
        "word": "supply",
        "pos": "n. / v.",
        "meaning": "供應",
        "theme": "商業",
        "sentence": "They supply food and water to the people in need.",
        "sentenceZh": "他們向需要的人供應食物和水。",
        "otherForms": "supplies (三單), supplied (過去/過去分詞), supplying (現在分詞)"
    },
    {
        "word": "ticket",
        "pos": "n.",
        "meaning": "票",
        "theme": "商業",
        "sentence": "I bought two movie tickets online for us tonight.",
        "sentenceZh": "我在網路上買了兩張我們今晚的電影票。",
        "otherForms": "tickets (複數型)"
    },
    {
        "word": "trade",
        "pos": "n. / v.",
        "meaning": "貿易",
        "theme": "商業",
        "sentence": "The two countries agreed to increase their international trade.",
        "sentenceZh": "這兩個國家同意增加他們的國際貿易。",
        "otherForms": "trades (複數型), trades (三單), trading (ing型(去e加ing)), traded (過去式/分詞)"
    },
    {
        "word": "zero",
        "pos": "num.",
        "meaning": "零",
        "theme": "數量數字",
        "sentence": "I checked my HTML code twice and found zero mistakes.",
        "sentenceZh": "我檢查了兩次 HTML 程式碼，發現零錯誤。",
        "otherForms": ""
    },
    {
        "word": "one",
        "pos": "num.",
        "meaning": "一",
        "theme": "數量數字",
        "sentence": "We just need one more player for the badminton game.",
        "sentenceZh": "我們打羽球只需要再一名玩家。",
        "otherForms": ""
    },
    {
        "word": "two",
        "pos": "num.",
        "meaning": "二",
        "theme": "數量數字",
        "sentence": "He drinks two glasses of warm milk every day.",
        "sentenceZh": "他每天喝兩杯溫牛奶。",
        "otherForms": ""
    },
    {
        "word": "three",
        "pos": "num.",
        "meaning": "三",
        "theme": "數量數字",
        "sentence": "A triangle has three straight lines and three angles.",
        "sentenceZh": "三角形有三條直線和三個角。",
        "otherForms": ""
    },
    {
        "word": "four",
        "pos": "num.",
        "meaning": "四",
        "theme": "數量數字",
        "sentence": "A square has four equal sides.",
        "sentenceZh": "正方形有四個相等的邊。",
        "otherForms": ""
    },
    {
        "word": "five",
        "pos": "num.",
        "meaning": "五",
        "theme": "數量數字",
        "sentence": "Our school badminton team won five games this season.",
        "sentenceZh": "我們學校的羽球隊這賽季贏了五場比賽。",
        "otherForms": ""
    },
    {
        "word": "six",
        "pos": "num.",
        "meaning": "六",
        "theme": "數量數字",
        "sentence": "There are six students taking the remedial English class.",
        "sentenceZh": "有六名學生正在上英文補救教學課。",
        "otherForms": ""
    },
    {
        "word": "seven",
        "pos": "num.",
        "meaning": "七",
        "theme": "數量數字",
        "sentence": "There are seven days in a week.",
        "sentenceZh": "一個星期有七天。",
        "otherForms": ""
    },
    {
        "word": "eight",
        "pos": "num.",
        "meaning": "八",
        "theme": "數量數字",
        "sentence": "You should try to sleep for eight hours every night.",
        "sentenceZh": "你每天晚上應該盡量睡滿八小時。",
        "otherForms": ""
    },
    {
        "word": "nine",
        "pos": "num.",
        "meaning": "九",
        "theme": "數量數字",
        "sentence": "I usually brush my teeth and go to bed at nine o'clock.",
        "sentenceZh": "我通常在九點鐘刷牙睡覺。",
        "otherForms": ""
    },
    {
        "word": "ten",
        "pos": "num.",
        "meaning": "十",
        "theme": "數量數字",
        "sentence": "This new vocabulary passport has ten pages.",
        "sentenceZh": "這本新的單字護照有十頁。",
        "otherForms": ""
    },
    {
        "word": "eleven",
        "pos": "num.",
        "meaning": "十一",
        "theme": "數量數字",
        "sentence": "My younger brother is eleven years old.",
        "sentenceZh": "我的弟弟十一歲。",
        "otherForms": ""
    },
    {
        "word": "twelve",
        "pos": "num.",
        "meaning": "十二",
        "theme": "數量數字",
        "sentence": "There are twelve months in a year.",
        "sentenceZh": "一年有十二個月。",
        "otherForms": ""
    },
    {
        "word": "thirteen",
        "pos": "num.",
        "meaning": "十三",
        "theme": "數量數字",
        "sentence": "Thirteen comes after twelve and before fourteen.",
        "sentenceZh": "十三在十二之後，十四之前。",
        "otherForms": ""
    },
    {
        "word": "fourteen",
        "pos": "num.",
        "meaning": "十四",
        "theme": "數量數字",
        "sentence": "He is fourteen years old and studies in junior high school.",
        "sentenceZh": "他十四歲，就讀國中。",
        "otherForms": ""
    },
    {
        "word": "fifteen",
        "pos": "num.",
        "meaning": "十五",
        "theme": "數量數字",
        "sentence": "We have a fifteen-minute break between classes.",
        "sentenceZh": "我們兩節課之間有十五分鐘的休息時間。",
        "otherForms": ""
    },
    {
        "word": "sixteen",
        "pos": "num.",
        "meaning": "十六",
        "theme": "數量數字",
        "sentence": "You must be sixteen to ride a scooter in some countries.",
        "sentenceZh": "在某些國家你必須滿十六歲才能騎機車。",
        "otherForms": ""
    },
    {
        "word": "seventeen",
        "pos": "num.",
        "meaning": "十七",
        "theme": "數量數字",
        "sentence": "My older sister just turned seventeen last month.",
        "sentenceZh": "我姐姐上個月剛滿十七歲。",
        "otherForms": ""
    },
    {
        "word": "eighteen",
        "pos": "num.",
        "meaning": "十八",
        "theme": "數量數字",
        "sentence": "You become an adult when you are eighteen years old.",
        "sentenceZh": "當你十八歲時，你就成為成年人了。",
        "otherForms": ""
    },
    {
        "word": "nineteen",
        "pos": "num.",
        "meaning": "十九",
        "theme": "數量數字",
        "sentence": "Nineteen students passed the grammar test today.",
        "sentenceZh": "今天有十九名學生通過了文法考試。",
        "otherForms": ""
    },
    {
        "word": "twenty",
        "pos": "num.",
        "meaning": "二十",
        "theme": "數量數字",
        "sentence": "There are exactly twenty desks in our classroom.",
        "sentenceZh": "我們教室裡剛好有二十張書桌。",
        "otherForms": ""
    },
    {
        "word": "thirty",
        "pos": "num.",
        "meaning": "三十",
        "theme": "數量數字",
        "sentence": "The English class is usually forty-five or thirty minutes long.",
        "sentenceZh": "英文課通常是四十五或三十分鐘長。",
        "otherForms": ""
    },
    {
        "word": "forty",
        "pos": "num.",
        "meaning": "四十",
        "theme": "數量數字",
        "sentence": "He read forty pages of the storybook last night.",
        "sentenceZh": "他昨晚讀了四十頁的故事書。",
        "otherForms": ""
    },
    {
        "word": "fifty",
        "pos": "num.",
        "meaning": "五十",
        "theme": "數量數字",
        "sentence": "A half-century means a period of fifty years.",
        "sentenceZh": "半世紀指的是五十年的時期。",
        "otherForms": ""
    },
    {
        "word": "sixty",
        "pos": "num.",
        "meaning": "六十",
        "theme": "數量數字",
        "sentence": "There are sixty seconds in one minute.",
        "sentenceZh": "一分鐘有六十秒。",
        "otherForms": ""
    },
    {
        "word": "seventy",
        "pos": "num.",
        "meaning": "七十",
        "theme": "數量數字",
        "sentence": "My grandfather will be seventy years old next year.",
        "sentenceZh": "我爺爺明年就七十歲了。",
        "otherForms": ""
    },
    {
        "word": "eighty",
        "pos": "num.",
        "meaning": "八十",
        "theme": "數量數字",
        "sentence": "I have exactly eighty songs on my 1980s music playlist.",
        "sentenceZh": "我的 1980 年代音樂播放清單裡剛好有八十首歌。",
        "otherForms": ""
    },
    {
        "word": "ninety",
        "pos": "num.",
        "meaning": "九十",
        "theme": "數量數字",
        "sentence": "The weather is very hot; it is almost ninety degrees today!",
        "sentenceZh": "天氣非常熱，今天幾乎有九十度（華氏）！",
        "otherForms": ""
    },
    {
        "word": "hundred",
        "pos": "num.",
        "meaning": "百",
        "theme": "數量數字",
        "sentence": "He got one hundred points on his final English exam.",
        "sentenceZh": "他的英文期末考得了一百分。",
        "otherForms": ""
    },
    {
        "word": "thousand",
        "pos": "num.",
        "meaning": "千",
        "theme": "數量數字",
        "sentence": "You need two thousand points to win the Weather Combat game.",
        "sentenceZh": "你需要兩千分才能贏得「天氣大戰」遊戲。",
        "otherForms": ""
    },
    {
        "word": "million",
        "pos": "num.",
        "meaning": "百萬",
        "theme": "數量數字",
        "sentence": "A million people watched the famous singer's concert online.",
        "sentenceZh": "有一百萬人在網路上觀看了這位知名歌手的演唱會。",
        "otherForms": ""
    },
    {
        "word": "first",
        "pos": "num.",
        "meaning": "第一",
        "theme": "數量數字",
        "sentence": "She won the first prize in the school spelling contest.",
        "sentenceZh": "她在學校拼字比賽中贏得第一名。",
        "otherForms": ""
    },
    {
        "word": "second",
        "pos": "num.",
        "meaning": "第二",
        "theme": "數量數字",
        "sentence": "This is my second time playing this interactive grammar game.",
        "sentenceZh": "這是我第二次玩這個互動文法遊戲。",
        "otherForms": ""
    },
    {
        "word": "third",
        "pos": "num.",
        "meaning": "第三",
        "theme": "數量數字",
        "sentence": "Our English classroom is located on the third floor.",
        "sentenceZh": "我們的英文教室位於三樓。",
        "otherForms": ""
    },
    {
        "word": "last",
        "pos": "num.",
        "meaning": "最後的",
        "theme": "數量數字",
        "sentence": "This is the last question on the math test.",
        "sentenceZh": "這是數學考試的最後一個問題。",
        "otherForms": ""
    },
    {
        "word": "a few",
        "pos": "num.",
        "meaning": "一些（用於可數）",
        "theme": "數量數字",
        "sentence": "I have a few friends who also like synth-pop music.",
        "sentenceZh": "我有一些朋友也喜歡合成器流行音樂。",
        "otherForms": ""
    },
    {
        "word": "a little",
        "pos": "num.",
        "meaning": "一點（用於不可數）",
        "theme": "數量數字",
        "sentence": "Please add just a little sugar to my hot tea.",
        "sentenceZh": "請在我的熱茶裡加一點點糖就好。",
        "otherForms": ""
    },
    {
        "word": "a lot of",
        "pos": "num.",
        "meaning": "很多(可屬不可數都能用)",
        "theme": "數量數字",
        "sentence": "We spent a lot of time writing the code for the web page.",
        "sentenceZh": "我們花了很多時間寫網頁程式碼。",
        "otherForms": ""
    },
    {
        "word": "any",
        "pos": "num.",
        "meaning": "任何",
        "theme": "數量數字",
        "sentence": "Do you have any questions about how to use this tool?",
        "sentenceZh": "關於如何使用這個工具有任何問題嗎？",
        "otherForms": ""
    },
    {
        "word": "both",
        "pos": "num.",
        "meaning": "兩者都",
        "theme": "數量數字",
        "sentence": "Both American and British spellings are correct in this game.",
        "sentenceZh": "在這款遊戲中，美式和英式拼寫都是正確的。",
        "otherForms": ""
    },
    {
        "word": "few",
        "pos": "num.",
        "meaning": "很少（用於可數）",
        "theme": "數量數字",
        "sentence": "Very few people know the secret answer to this puzzle.",
        "sentenceZh": "很少人知道這個謎題的秘密答案。",
        "otherForms": "fewer (比較級), fewest (最高級)"
    },
    {
        "word": "less",
        "pos": "num.",
        "meaning": "更少（用於不可數）",
        "theme": "數量數字",
        "sentence": "We have very little time left before the school bus arrives.",
        "sentenceZh": "在校車到達前，我們剩下很少的時間了。",
        "otherForms": "less (比較級(不規則)), least (最高級(不規則))"
    },
    {
        "word": "little",
        "pos": "num.",
        "meaning": "很少（不可數）",
        "theme": "數量數字",
        "sentence": "You should spend less time watching TV and more time reading.",
        "sentenceZh": "你應該少花點時間看電視，多花點時間閱讀。",
        "otherForms": ""
    },
    {
        "word": "number",
        "pos": "num.",
        "meaning": "數字 / 數量",
        "theme": "數量數字",
        "sentence": "The number of students in our class is twenty-five.",
        "sentenceZh": "我們班上的學生數量是二十五人。",
        "otherForms": "numbers (複數型)"
    },
    {
        "word": "quantity",
        "pos": "num.",
        "meaning": "數量",
        "theme": "數量數字",
        "sentence": "We need a large quantity of food for the party.",
        "sentenceZh": "派對需要大量的食物。",
        "otherForms": "quantities (複數型)"
    },
    {
        "word": "several",
        "pos": "num.",
        "meaning": "幾個",
        "theme": "數量數字",
        "sentence": "I tried several times to fix the bug in the program.",
        "sentenceZh": "我嘗試了好幾次去修復程式裡的錯誤。",
        "otherForms": ""
    },
    {
        "word": "much",
        "pos": "num.",
        "meaning": "多的(不可數)",
        "theme": "數量數字",
        "sentence": "I don't have much money in my wallet today.",
        "sentenceZh": "我今天皮夾裡沒有很多錢。",
        "otherForms": "more (比較級(不規則)), most (最高級(不規則))"
    },
    {
        "word": "most",
        "pos": "num.",
        "meaning": "最多的",
        "theme": "數量數字",
        "sentence": "Most students in our class have finished their vocabulary passports.",
        "sentenceZh": "我們班上大多數的學生都完成了單字護照。",
        "otherForms": ""
    },
    {
        "word": "plus",
        "pos": "num.",
        "meaning": "加號",
        "theme": "數量數字",
        "sentence": "Five plus three equals eight.",
        "sentenceZh": "五加三等於八。",
        "otherForms": ""
    },
    {
        "word": "minus",
        "pos": "num.",
        "meaning": "負號",
        "theme": "數量數字",
        "sentence": "Ten minus four equals six.",
        "sentenceZh": "十減四等於六。",
        "otherForms": ""
    },
    {
        "word": "total",
        "pos": "num.",
        "meaning": "總數 / 完全的",
        "theme": "數量數字",
        "sentence": "The total score for the English test is one hundred points.",
        "sentenceZh": "英文考試的總分是一百分。",
        "otherForms": "totals (複數型), totally (副詞)"
    },
    {
        "word": "rectangle",
        "pos": "n.",
        "meaning": "長方形",
        "theme": "形狀",
        "sentence": "A badminton court is shaped like a big rectangle.",
        "sentenceZh": "羽球場的形狀像一個大長方形。",
        "otherForms": "rectangles (複數型)"
    },
    {
        "word": "shape",
        "pos": "n.",
        "meaning": "形狀",
        "theme": "形狀",
        "sentence": "What shape is the start button in your new game?",
        "sentenceZh": "你新遊戲裡的開始按鈕是什麼形狀？",
        "otherForms": "shapes (複數型)"
    },
    {
        "word": "square",
        "pos": "n. / adj.",
        "meaning": "正方形",
        "theme": "形狀",
        "sentence": "Draw a perfect square on the blank piece of paper.",
        "sentenceZh": "在空白紙上畫一個完美的正方形。",
        "otherForms": "squares (複數型)"
    },
    {
        "word": "triangle",
        "pos": "n.",
        "meaning": "三角形",
        "theme": "形狀",
        "sentence": "The roof of that small doghouse looks like a triangle.",
        "sentenceZh": "那間小狗屋的屋頂看起來像個三角形。",
        "otherForms": "triangles (複數型)"
    },
    {
        "word": "circle",
        "pos": "n.",
        "meaning": "圓形",
        "theme": "形狀",
        "sentence": "The students sat in a large circle on the classroom floor.",
        "sentenceZh": "學生們在教室地板上圍坐成一個大圓圈。",
        "otherForms": "circles (複數型)"
    },
    {
        "word": "dot",
        "pos": "n.",
        "meaning": "點",
        "theme": "形狀",
        "sentence": "Put a small black dot at the end of your sentence.",
        "sentenceZh": "在你的句尾點上一個小黑點。",
        "otherForms": "dots (複數型)"
    },
    {
        "word": "line",
        "pos": "n.",
        "meaning": "線",
        "theme": "形狀",
        "sentence": "Please draw a straight line under the correct answer.",
        "sentenceZh": "請在正確答案下方畫一條直線。",
        "otherForms": "lines (複數型)"
    },
    {
        "word": "point",
        "pos": "n. / v.",
        "meaning": "點；尖端 / 指向",
        "theme": "形狀",
        "sentence": "He won the final point with a great smash in the match.",
        "sentenceZh": "他在比賽中以一記漂亮的殺球贏得了最後一分。",
        "otherForms": "points (複數型)"
    },
    {
        "word": "angle",
        "pos": "n.",
        "meaning": "角度",
        "theme": "形狀",
        "sentence": "You must hit the badminton ball from the right angle.",
        "sentenceZh": "你必須從正確的角度擊打羽毛球。",
        "otherForms": "angles (複數型)"
    },
    {
        "word": "straight",
        "pos": "adj.",
        "meaning": "直的",
        "theme": "形狀",
        "sentence": "Go straight down the street and you will see the station.",
        "sentenceZh": "沿著街道直走你就會看到車站。",
        "otherForms": "straighter (比較級), straightest (最高級), straight (形副同型)"
    },
    {
        "word": "round",
        "pos": "adj.",
        "meaning": "圓形的",
        "theme": "形狀",
        "sentence": "A baseball is completely round, but a football is not.",
        "sentenceZh": "棒球是完全圓形的，但美式足球不是。",
        "otherForms": "rounder (比較級), roundest (最高級), roundly (副詞)"
    },
    {
        "word": "centimeter",
        "pos": "n.",
        "meaning": "公分",
        "theme": "單位與度量",
        "sentence": "This short blue pencil is only ten centimeters long.",
        "sentenceZh": "這支短藍筆只有十公分長。",
        "otherForms": "centimeters (複數型)"
    },
    {
        "word": "foot",
        "pos": "n.",
        "meaning": "英尺",
        "theme": "單位與度量",
        "sentence": "One foot is equal to about thirty centimeters.",
        "sentenceZh": "一英尺大約等於三十公分。",
        "otherForms": "feet (複數型(不規則))"
    },
    {
        "word": "gram",
        "pos": "n.",
        "meaning": "公克",
        "theme": "單位與度量",
        "sentence": "This fresh red apple weighs about two hundred grams.",
        "sentenceZh": "這顆新鮮的紅蘋果大約重兩百公克。",
        "otherForms": "grams (複數型)"
    },
    {
        "word": "inch",
        "pos": "n.",
        "meaning": "英吋",
        "theme": "單位與度量",
        "sentence": "The large television screen in the living room is fifty inches.",
        "sentenceZh": "客廳裡的大電視螢幕有五十英吋。",
        "otherForms": "inches (複數型(加es))"
    },
    {
        "word": "kilogram",
        "pos": "n.",
        "meaning": "公斤",
        "theme": "單位與度量",
        "sentence": "My golden retriever dog weighs about thirty kilograms.",
        "sentenceZh": "我的黃金獵犬大約重三十公斤。",
        "otherForms": "kilograms (複數型)"
    },
    {
        "word": "kilometer",
        "pos": "n.",
        "meaning": "公里",
        "theme": "單位與度量",
        "sentence": "I jogged for three kilometers in Douliu Park this morning.",
        "sentenceZh": "我今天早上在斗六公園慢跑了三公里。",
        "otherForms": "kilometers (複數型)"
    },
    {
        "word": "liter",
        "pos": "n.",
        "meaning": "公升",
        "theme": "單位與度量",
        "sentence": "You should drink at least two liters of water every day.",
        "sentenceZh": "你每天應該喝至少兩公升的水。",
        "otherForms": "liters (複數型)"
    },
    {
        "word": "meter",
        "pos": "n.",
        "meaning": "公尺",
        "theme": "單位與度量",
        "sentence": "He ran one hundred meters in just thirteen seconds.",
        "sentenceZh": "他只花了十三秒就跑完一百公尺。",
        "otherForms": "meters (複數型)"
    },
    {
        "word": "mile",
        "pos": "n.",
        "meaning": "英里",
        "theme": "單位與度量",
        "sentence": "The small village is about ten miles away from the city.",
        "sentenceZh": "這個小村莊距離城市大約十英里。",
        "otherForms": "miles (複數型)"
    },
    {
        "word": "pound",
        "pos": "n.",
        "meaning": "磅",
        "theme": "單位與度量",
        "sentence": "This heavy box of books weighs more than twenty pounds.",
        "sentenceZh": "這箱厚重的書重達二十多磅。",
        "otherForms": "pounds (複數型)"
    },
    {
        "word": "yard",
        "pos": "n.",
        "meaning": "碼",
        "theme": "單位與度量",
        "sentence": "He hit the golf ball more than fifty yards away.",
        "sentenceZh": "他把高爾夫球擊出了五十碼遠。",
        "otherForms": "yards (複數型)"
    },
    {
        "word": "degree",
        "pos": "n.",
        "meaning": "度數",
        "theme": "單位與度量",
        "sentence": "The water temperature is over ninety degrees.",
        "sentenceZh": "水溫超過了九十度。",
        "otherForms": "degrees (複數型)"
    },
    {
        "word": "row",
        "pos": "n.",
        "meaning": "排 / 行",
        "theme": "單位與度量",
        "sentence": "We sat in the first row to see the movie clearly.",
        "sentenceZh": "我們坐在第一排以便清楚地看電影。",
        "otherForms": "rows (複數型)"
    },
    {
        "word": "bottle",
        "pos": "n.",
        "meaning": "瓶",
        "theme": "單位與度量",
        "sentence": "I bought a cold bottle of water after playing badminton.",
        "sentenceZh": "打完羽球後我買了一瓶冷水。",
        "otherForms": "bottles (複數型)"
    },
    {
        "word": "cup",
        "pos": "n.",
        "meaning": "杯",
        "theme": "單位與度量",
        "sentence": "My father drinks a cup of hot coffee every morning.",
        "sentenceZh": "我爸爸每天早上喝一杯熱咖啡。",
        "otherForms": "cups (複數型)"
    },
    {
        "word": "dozen",
        "pos": "n.",
        "meaning": "一打（十二個）",
        "theme": "單位與度量",
        "sentence": "My mother bought a dozen fresh eggs at the supermarket.",
        "sentenceZh": "我媽媽在超市買了一打新鮮雞蛋。",
        "otherForms": "dozens (複數型)"
    },
    {
        "word": "glass",
        "pos": "n.",
        "meaning": "玻璃杯",
        "theme": "單位與度量",
        "sentence": "Would you please pass me that empty glass?",
        "sentenceZh": "可以請你把那個空玻璃杯遞給我嗎？",
        "otherForms": "glasses (複數型(加es))"
    },
    {
        "word": "loaf",
        "pos": "n.",
        "meaning": "條（麵包）",
        "theme": "單位與度量",
        "sentence": "We need to buy a loaf of bread to make sandwiches.",
        "sentenceZh": "我們需要買一條麵包來做三明治。",
        "otherForms": "loaves (複數型(去f加ves))"
    },
    {
        "word": "pack",
        "pos": "n. / v.",
        "meaning": "包 / 打包",
        "theme": "單位與度量",
        "sentence": "He ate a whole pack of chocolate cookies by himself.",
        "sentenceZh": "他自己吃掉了一整包巧克力餅乾。",
        "otherForms": "packs (複數型), packs (三單), packing (ing型), packed (過去式/分詞)"
    },
    {
        "word": "package",
        "pos": "n.",
        "meaning": "包裹",
        "theme": "單位與度量",
        "sentence": "The mail carrier delivered a big package to our door.",
        "sentenceZh": "郵差送了一個大包裹到我們門口。",
        "otherForms": "packages (複數型)"
    },
    {
        "word": "pair",
        "pos": "n.",
        "meaning": "一雙 / 一對",
        "theme": "單位與度量",
        "sentence": "I need a new pair of sports shoes for the race.",
        "sentenceZh": "我需要一雙新的運動鞋來參加賽跑。",
        "otherForms": "pairs (複數型)"
    },
    {
        "word": "piece",
        "pos": "n.",
        "meaning": "片 / 塊 / 件",
        "theme": "單位與度量",
        "sentence": "Would you like to eat a piece of sweet strawberry cake?",
        "sentenceZh": "你想吃一塊甜甜的草莓蛋糕嗎？",
        "otherForms": "pieces (複數型)"
    },
    {
        "word": "bundle",
        "pos": "n.",
        "meaning": "捆 / 束",
        "theme": "單位與度量",
        "sentence": "We tied the old newspapers into a neat bundle.",
        "sentenceZh": "我們把舊報紙綁成整齊的一捆。",
        "otherForms": "bundles (複數型)"
    },
    {
        "word": "curve",
        "pos": "n.",
        "meaning": "曲線",
        "theme": "單位與度量",
        "sentence": "The mountain road has a very sharp curve ahead.",
        "sentenceZh": "前方的山路有一個非常彎的曲線。",
        "otherForms": "curves (複數型)"
    },
    {
        "word": "section",
        "pos": "n.",
        "meaning": "部分",
        "theme": "單位與度量",
        "sentence": "The reading section of the English test was quite difficult.",
        "sentenceZh": "英文考試的閱讀部分滿難的。",
        "otherForms": "sections (複數型)"
    },
    {
        "word": "mass",
        "pos": "n.",
        "meaning": "團 / 大量",
        "theme": "單位與度量",
        "sentence": "The dark clouds formed a huge mass in the sky.",
        "sentenceZh": "烏雲在天空中形成了一大團。",
        "otherForms": "masses (複數型(加es))"
    },
    {
        "word": "pile",
        "pos": "n.",
        "meaning": "堆",
        "theme": "單位與度量",
        "sentence": "There is a big pile of dirty clothes on his bedroom floor.",
        "sentenceZh": "他臥室的地板上有一大堆髒衣服。",
        "otherForms": "piles (複數型)"
    },
    {
        "word": "set",
        "pos": "n.",
        "meaning": "一套",
        "theme": "單位與度量",
        "sentence": "The teacher gave us a new set of vocabulary cards.",
        "sentenceZh": "老師給了我們一套新的單字卡。",
        "otherForms": "sets (複數型)"
    },
    {
        "word": "box",
        "pos": "n.",
        "meaning": "盒子",
        "theme": "單位與度量",
        "sentence": "The cute little cat is hiding inside the cardboard box.",
        "sentenceZh": "可愛的小貓躲在紙箱裡。",
        "otherForms": "boxes (複數型(加es))"
    },
    {
        "word": "can",
        "pos": "n. / aux.",
        "meaning": "罐頭 / 能夠",
        "theme": "單位與度量",
        "sentence": "Please throw the empty cola can into the recycling bin.",
        "sentenceZh": "請把空的可樂罐丟進回收桶。",
        "otherForms": "cans (複數型)"
    },
    {
        "word": "slice",
        "pos": "n. / v.",
        "meaning": "片 / 切片",
        "theme": "單位與度量",
        "sentence": "He ate a large slice of cheese pizza for his lunch.",
        "sentenceZh": "他午餐吃了一大片起司披薩。",
        "otherForms": "slices (複數型), slices (三單), slicing (ing型(去e加ing)), sliced (過去式/分詞)"
    },
    {
        "word": "size",
        "pos": "n.",
        "meaning": "尺寸",
        "theme": "單位與度量",
        "sentence": "What size T-shirt do you usually wear?",
        "sentenceZh": "你通常穿什麼尺寸的 T 恤？",
        "otherForms": "sizes (複數型)"
    },
    {
        "word": "height",
        "pos": "n.",
        "meaning": "高度",
        "theme": "單位與度量",
        "sentence": "The height of Taipei 101 is 508 meters.",
        "sentenceZh": "台北 101 的高度是 508 公尺。",
        "otherForms": "heights (複數型)"
    },
    {
        "word": "distance",
        "pos": "n.",
        "meaning": "距離",
        "theme": "單位與度量",
        "sentence": "The distance from my home to the school is very short.",
        "sentenceZh": "從我家到學校的距離非常短。",
        "otherForms": "distances (複數型)"
    },
    {
        "word": "weight",
        "pos": "n.",
        "meaning": "重量",
        "theme": "單位與度量",
        "sentence": "You can check your weight on the machine in the hospital.",
        "sentenceZh": "你可以在醫院的機器上量你的重量。",
        "otherForms": "weights (複數型)"
    },
    {
        "word": "range",
        "pos": "n.",
        "meaning": "範圍",
        "theme": "單位與度量",
        "sentence": "The price range for these phones is quite wide.",
        "sentenceZh": "這些手機的價格範圍相當廣。",
        "otherForms": "ranges (複數)"
    },
    {
        "word": "amount",
        "pos": "n.",
        "meaning": "數量",
        "theme": "單位與度量",
        "sentence": "You only need a small amount of salt for this soup.",
        "sentenceZh": "這碗湯你只需要少量的鹽。",
        "otherForms": "amounts (複數型)"
    },
    {
        "word": "measure",
        "pos": "n. / v.",
        "meaning": "測量 / 措施",
        "theme": "單位與度量",
        "sentence": "The nurse will measure your height and weight first.",
        "sentenceZh": "護理師會先測量你的身高和體重。",
        "otherForms": "measures (複數型), measures (三單), measuring (ing型(去e加ing)), measured (過去式/分詞)"
    },
    {
        "word": "accident",
        "pos": "n.",
        "meaning": "事故",
        "theme": "抽象概念",
        "sentence": "He hurt his leg in a bad motorcycle accident yesterday.",
        "sentenceZh": "他昨天在一場嚴重的機車事故中傷了腿。",
        "otherForms": "accidents (複數型)"
    },
    {
        "word": "action",
        "pos": "n.",
        "meaning": "行動",
        "theme": "抽象概念",
        "sentence": "We must take action now to protect the earth.",
        "sentenceZh": "我們現在必須採取行動來保護地球。",
        "otherForms": "actions (複數型)"
    },
    {
        "word": "advice",
        "pos": "n.",
        "meaning": "建議",
        "theme": "抽象概念",
        "sentence": "The teacher gave me some good advice on how to learn English.",
        "sentenceZh": "老師給了我一些關於如何學英文的好建議。",
        "otherForms": ""
    },
    {
        "word": "aim",
        "pos": "n. / v.",
        "meaning": "目標 / 瞄準",
        "theme": "抽象概念",
        "sentence": "His main aim is to become a successful software engineer.",
        "sentenceZh": "他的主要目標是成為一名成功的軟體工程師。",
        "otherForms": "aims (複數型), aims (三單), aiming (ing型), aimed (過去式/分詞)"
    },
    {
        "word": "base",
        "pos": "n.",
        "meaning": "基礎 / 基地",
        "theme": "抽象概念",
        "sentence": "The Syntax Repair game is based on English grammar rules.",
        "sentenceZh": "「語法修復」遊戲是建立在英文文法規則的基礎上。",
        "otherForms": "bases (複數型)"
    },
    {
        "word": "beauty",
        "pos": "n.",
        "meaning": "美麗",
        "theme": "抽象概念",
        "sentence": "The natural beauty of the mountains is truly amazing.",
        "sentenceZh": "群山的自然之美真是令人驚嘆。",
        "otherForms": "beauties (複數型(去y加ies))"
    },
    {
        "word": "beginning",
        "pos": "n.",
        "meaning": "開始",
        "theme": "抽象概念",
        "sentence": "The beginning of the movie was a little bit boring.",
        "sentenceZh": "這部電影的開頭有點無聊。",
        "otherForms": "beginnings (複數型)"
    },
    {
        "word": "blank",
        "pos": "n. / adj.",
        "meaning": "空白 / 空白的",
        "theme": "抽象概念",
        "sentence": "Please write the correct word in the blank space.",
        "sentenceZh": "請在空白處寫上正確的單字。",
        "otherForms": "blanks (複數型)"
    },
    {
        "word": "cause",
        "pos": "n. / v.",
        "meaning": "原因 / 導致",
        "theme": "抽象概念",
        "sentence": "The heavy rain was the main cause of the flood.",
        "sentenceZh": "大雨是造成淹水的主要原因。",
        "otherForms": "causes (複數型), causes (三單), causing (ing型(去e加ing)), caused (過去式/分詞)"
    },
    {
        "word": "chance",
        "pos": "n.",
        "meaning": "機會",
        "theme": "抽象概念",
        "sentence": "Everyone deserves a second chance to try again.",
        "sentenceZh": "每個人都值得擁有第二次重試的機會。",
        "otherForms": "chances (複數型)"
    },
    {
        "word": "choice",
        "pos": "n.",
        "meaning": "選擇",
        "theme": "抽象概念",
        "sentence": "You have to make a choice between the red or blue shirt.",
        "sentenceZh": "你必須在紅襯衫或藍襯衫之間做個選擇。",
        "otherForms": "choices (複數型)"
    },
    {
        "word": "conflict",
        "pos": "n. / v.",
        "meaning": "衝突",
        "theme": "抽象概念",
        "sentence": "There is a conflict between the two countries.",
        "sentenceZh": "這兩個國家之間發生了衝突。",
        "otherForms": "conflicts (複數/三單), conflicted (過去/過去分詞), conflicting (現在分詞)"
    },
    {
        "word": "courage",
        "pos": "n.",
        "meaning": "勇氣",
        "theme": "抽象概念",
        "sentence": "It takes a lot of courage to speak English on the stage.",
        "sentenceZh": "在台上說英文需要很大的勇氣。",
        "otherForms": ""
    },
    {
        "word": "damage",
        "pos": "n. / v.",
        "meaning": "傷害 / 損害",
        "theme": "抽象概念",
        "sentence": "The strong typhoon caused a lot of damage to the trees.",
        "sentenceZh": "強烈颱風對樹木造成了很大的損害。",
        "otherForms": "damages (複數型), damages (三單), damaging (ing型(去e加ing)), damaged (過去式/分詞)"
    },
    {
        "word": "danger",
        "pos": "n.",
        "meaning": "危險",
        "theme": "抽象概念",
        "sentence": "The red sign warns us of the hidden danger ahead.",
        "sentenceZh": "紅色的標誌警告我們前方有隱藏的危險。",
        "otherForms": "dangers (複數型)"
    },
    {
        "word": "decision",
        "pos": "n.",
        "meaning": "決定",
        "theme": "抽象概念",
        "sentence": "I have made the decision to join the school badminton team.",
        "sentenceZh": "我已經決定要加入學校羽球隊。",
        "otherForms": "decisions (複數型)"
    },
    {
        "word": "difference",
        "pos": "n.",
        "meaning": "差異",
        "theme": "抽象概念",
        "sentence": "Can you tell the difference between these two vocabulary words?",
        "sentenceZh": "你能分辨這兩個單字的差異嗎？",
        "otherForms": "differences (複數型)"
    },
    {
        "word": "difficulty",
        "pos": "n.",
        "meaning": "困難",
        "theme": "抽象概念",
        "sentence": "He had some difficulty fixing the bug in his computer code.",
        "sentenceZh": "他在修復電腦程式碼錯誤時遇到了一些困難。",
        "otherForms": "difficulties (複數型(去y加ies))"
    },
    {
        "word": "dream",
        "pos": "n. / v.",
        "meaning": "夢想 / 作夢",
        "theme": "抽象概念",
        "sentence": "Her biggest dream is to travel around the world someday.",
        "sentenceZh": "她最大的夢想是有朝一日能環遊世界。",
        "otherForms": "dreams (複數型), dreams (三單), dreaming (ing型), dreamed/dreamt (過去式/分詞(不規則))"
    },
    {
        "word": "duty",
        "pos": "n.",
        "meaning": "責任",
        "theme": "抽象概念",
        "sentence": "It is the duty of a police officer to protect the people.",
        "sentenceZh": "保護人民是警察的責任。",
        "otherForms": "duties (複數型(去y加ies))"
    },
    {
        "word": "effect",
        "pos": "n.",
        "meaning": "效果 / 影響",
        "theme": "抽象概念",
        "sentence": "The medicine had a good effect on her health.",
        "sentenceZh": "這種藥對她的健康有很好的效果。",
        "otherForms": "effects (複數型), effective (有效的 - 形容詞), affect (影響 - 動詞)"
    },
    {
        "word": "effort",
        "pos": "n.",
        "meaning": "努力",
        "theme": "抽象概念",
        "sentence": "He put a lot of effort into designing the vocabulary game.",
        "sentenceZh": "他投入了很多努力在設計單字遊戲上。",
        "otherForms": "efforts (複數型)"
    },
    {
        "word": "energy",
        "pos": "n.",
        "meaning": "能量",
        "theme": "抽象概念",
        "sentence": "You need a lot of energy to play a full badminton game.",
        "sentenceZh": "你需要很多能量才能打完一整場羽球比賽。",
        "otherForms": "energies (複數型(去y加ies))"
    },
    {
        "word": "error",
        "pos": "n.",
        "meaning": "錯誤",
        "theme": "抽象概念",
        "sentence": "I found a spelling error in my sentence and fixed it.",
        "sentenceZh": "我在句子裡發現了一個拼字錯誤並修正了它。",
        "otherForms": "errors (複數型)"
    },
    {
        "word": "excuse",
        "pos": "n. / v.",
        "meaning": "藉口 / 原諒",
        "theme": "抽象概念",
        "sentence": "Being late because you overslept is not a good excuse.",
        "sentenceZh": "因為睡過頭而遲到不是個好藉口。",
        "otherForms": "excuses (複數型), excuses"
    },
    {
        "word": "experience",
        "pos": "n. / v.",
        "meaning": "經驗 / 體驗",
        "theme": "抽象概念",
        "sentence": "He has a lot of experience in teaching English grammar.",
        "sentenceZh": "他在教英文文法方面有很多經驗。",
        "otherForms": "experiences (複數型), experiences (三單), experiencing (ing型(去e加ing)), experienced (過去式/分詞)"
    },
    {
        "word": "fact",
        "pos": "n.",
        "meaning": "事實",
        "theme": "抽象概念",
        "sentence": "It is a well-known fact that the earth is round.",
        "sentenceZh": "地球是圓的是一個眾所周知的事實。",
        "otherForms": "facts (複數型)"
    },
    {
        "word": "fault",
        "pos": "n.",
        "meaning": "過錯",
        "theme": "抽象概念",
        "sentence": "It was my fault that we lost the basketball game.",
        "sentenceZh": "我們輸了籃球比賽是我的錯。",
        "otherForms": "faults (複數型)"
    },
    {
        "word": "freedom",
        "pos": "n.",
        "meaning": "自由",
        "theme": "抽象概念",
        "sentence": "The wild birds in the sky have the freedom to fly anywhere.",
        "sentenceZh": "天空中的野鳥有飛往任何地方的自由。",
        "otherForms": "freedoms (複數型)"
    },
    {
        "word": "friendship",
        "pos": "n.",
        "meaning": "友誼",
        "theme": "抽象概念",
        "sentence": "We hope that our strong friendship will last forever.",
        "sentenceZh": "我們希望我們堅固的友誼能持續永遠。",
        "otherForms": "friendships (複數型)"
    },
    {
        "word": "fun",
        "pos": "n.",
        "meaning": "樂趣",
        "theme": "抽象概念",
        "sentence": "Playing the interactive web game is so much fun.",
        "sentenceZh": "玩互動網頁遊戲非常有樂趣。",
        "otherForms": ""
    },
    {
        "word": "function",
        "pos": "n. / v.",
        "meaning": "功能 / 運作",
        "theme": "抽象概念",
        "sentence": "What is the function of this button?",
        "sentenceZh": "這個按鈕的功能是什麼？",
        "otherForms": "functions (複數/三單), functioned (過去/過去分詞), functioning (現在分詞)"
    },
    {
        "word": "ghost",
        "pos": "n.",
        "meaning": "鬼魂",
        "theme": "抽象概念",
        "sentence": "The kids dressed up as scary ghosts for the Halloween party.",
        "sentenceZh": "孩子們為了萬聖節派對打扮成可怕的鬼魂。",
        "otherForms": "ghosts (複數型)"
    },
    {
        "word": "goal",
        "pos": "n.",
        "meaning": "目標",
        "theme": "抽象概念",
        "sentence": "My goal this semester is to memorize 2000 English words.",
        "sentenceZh": "我這學期的目標是記住兩千個英文單字。",
        "otherForms": "goals (複數型)"
    },
    {
        "word": "honesty",
        "pos": "n.",
        "meaning": "誠實",
        "theme": "抽象概念",
        "sentence": "The teacher told us that honesty is the best policy.",
        "sentenceZh": "老師告訴我們誠實為上策。",
        "otherForms": ""
    },
    {
        "word": "humor",
        "pos": "n.",
        "meaning": "幽默",
        "theme": "抽象概念",
        "sentence": "Our English teacher has a great sense of humor.",
        "sentenceZh": "我們的英文老師很有幽默感。",
        "otherForms": "humors (複數型)"
    },
    {
        "word": "idea",
        "pos": "n.",
        "meaning": "主意",
        "theme": "抽象概念",
        "sentence": "I have a great idea for the new class badge design!",
        "sentenceZh": "關於新班級徽章的設計我有一個好主意！",
        "otherForms": "ideas (複數型)"
    },
    {
        "word": "importance",
        "pos": "n.",
        "meaning": "重要性",
        "theme": "抽象概念",
        "sentence": "Do you understand the importance of passing the test?",
        "sentenceZh": "你了解通過考試的重要性嗎？",
        "otherForms": ""
    },
    {
        "word": "influence",
        "pos": "n. / v.",
        "meaning": "影響",
        "theme": "抽象概念",
        "sentence": "The 80s pop music had a huge influence on his music style.",
        "sentenceZh": "80年代流行音樂對他的音樂風格有巨大的影響。",
        "otherForms": "influences (複數型), influences (三單), influencing (ing型(去e加ing)), influenced (過去式/分詞)"
    },
    {
        "word": "lack",
        "pos": "n. / v.",
        "meaning": "缺乏",
        "theme": "抽象概念",
        "sentence": "The poor plants died because of a lack of water.",
        "sentenceZh": "那些可憐的植物因為缺乏水分而枯死了。",
        "otherForms": "lacks (複數型), lacks (三單), lacking (ing型), lacked (過去式/分詞)"
    },
    {
        "word": "level",
        "pos": "n.",
        "meaning": "水平",
        "theme": "抽象概念",
        "sentence": "This vocabulary game has three different difficulty levels.",
        "sentenceZh": "這個單字遊戲有三個不同的難度關卡。",
        "otherForms": "levels"
    },
    {
        "word": "luck",
        "pos": "n.",
        "meaning": "運氣",
        "theme": "抽象概念",
        "sentence": "Wish me luck on my test tomorrow!",
        "sentenceZh": "祝我明天的考試好運！",
        "otherForms": "lucky (幸運的 - 形容詞), luckily (幸運地 - 副詞)"
    },
    {
        "word": "manner",
        "pos": "n.",
        "meaning": "禮貌 / 方式",
        "theme": "抽象概念",
        "sentence": "It is bad manners to talk loudly with food in your mouth.",
        "sentenceZh": "嘴裡含著食物大聲說話是很沒禮貌的。",
        "otherForms": "manners (複數型(常以複數出現))"
    },
    {
        "word": "meaning",
        "pos": "n.",
        "meaning": "意思",
        "theme": "抽象概念",
        "sentence": "Can you look up the meaning of this word in the dictionary?",
        "sentenceZh": "你能在字典裡查一下這個字的意思嗎？",
        "otherForms": "meanings (複數型)"
    },
    {
        "word": "message",
        "pos": "n.",
        "meaning": "訊息",
        "theme": "抽象概念",
        "sentence": "Please leave a message if I do not answer my phone.",
        "sentenceZh": "如果我沒接電話請留言。",
        "otherForms": "messages (複數型)"
    },
    {
        "word": "method",
        "pos": "n.",
        "meaning": "方法",
        "theme": "抽象概念",
        "sentence": "We need to find a better learning method for English.",
        "sentenceZh": "我們需要為英文找到一個更好的學習方法。",
        "otherForms": "methods (複數型)"
    },
    {
        "word": "mind",
        "pos": "n. / v.",
        "meaning": "心智 / 介意",
        "theme": "抽象概念",
        "sentence": "Keep your mind calm and clear when you take the final exam.",
        "sentenceZh": "考期末考時保持心智冷靜清晰。",
        "otherForms": "minds (複數型), minds (三單), minding (ing型), minded (過去式/分詞)"
    },
    {
        "word": "mistake",
        "pos": "n. / v.",
        "meaning": "錯誤 / 搞錯",
        "theme": "抽象概念",
        "sentence": "Don't be afraid to make a mistake when speaking English!",
        "sentenceZh": "開口說英文時別害怕犯錯！",
        "otherForms": "mistakes (複數型)"
    },
    {
        "word": "motion",
        "pos": "n.",
        "meaning": "動作",
        "theme": "抽象概念",
        "sentence": "The slow motion video shows you how to jump correctly.",
        "sentenceZh": "慢動作影片示範給你如何正確跳躍。",
        "otherForms": "motions (複數型)"
    },
    {
        "word": "movement",
        "pos": "n.",
        "meaning": "運動",
        "theme": "抽象概念",
        "sentence": "The cat carefully watched the movement of the small mouse.",
        "sentenceZh": "貓仔細地看著小老鼠的動作。",
        "otherForms": "movements (複數型)"
    },
    {
        "word": "opinion",
        "pos": "n.",
        "meaning": "意見",
        "theme": "抽象概念",
        "sentence": "What is your opinion on the new rules of the grammar game?",
        "sentenceZh": "你對文法遊戲的新規則有什麼意見？",
        "otherForms": "opinions (複數型)"
    },
    {
        "word": "pattern",
        "pos": "n.",
        "meaning": "模式",
        "theme": "抽象概念",
        "sentence": "Her new dress has a very beautiful flower pattern.",
        "sentenceZh": "她的新洋裝有著非常美麗的花朵圖案。",
        "otherForms": "patterns (複數型)"
    },
    {
        "word": "peace",
        "pos": "n.",
        "meaning": "和平",
        "theme": "抽象概念",
        "sentence": "Everyone in the country hopes for peace and safety.",
        "sentenceZh": "國家裡的每個人都希望擁有和平與安全。",
        "otherForms": ""
    },
    {
        "word": "power",
        "pos": "n.",
        "meaning": "力量 / 電力",
        "theme": "抽象概念",
        "sentence": "The ancient king had the power to change all the laws.",
        "sentenceZh": "古代的國王擁有改變所有法律的權力。",
        "otherForms": "powers (複數型)"
    },
    {
        "word": "pressure",
        "pos": "n.",
        "meaning": "壓力",
        "theme": "抽象概念",
        "sentence": "Students often feel a lot of pressure before a big exam.",
        "sentenceZh": "學生在大考前經常感到很大的壓力。",
        "otherForms": "pressures (複數型)"
    },
    {
        "word": "principle",
        "pos": "n.",
        "meaning": "原則",
        "theme": "抽象概念",
        "sentence": "Always telling the truth is an important principle in his life.",
        "sentenceZh": "永遠說實話是他生活中一個重要的原則。",
        "otherForms": "principles (複數型)"
    },
    {
        "word": "production",
        "pos": "n.",
        "meaning": "生產",
        "theme": "抽象概念",
        "sentence": "The large factory increased its production of sports shoes.",
        "sentenceZh": "那間大工廠增加了運動鞋的生產。",
        "otherForms": "productions (複數型)"
    },
    {
        "word": "progress",
        "pos": "n. / v.",
        "meaning": "進步",
        "theme": "抽象概念",
        "sentence": "He made a lot of progress in his English reading skills.",
        "sentenceZh": "他的英文閱讀技巧有了很大的進步。",
        "otherForms": "progresses (複數型(加es))"
    },
    {
        "word": "purpose",
        "pos": "n.",
        "meaning": "目的",
        "theme": "抽象概念",
        "sentence": "What is the main purpose of playing this vocabulary game?",
        "sentenceZh": "玩這個單字遊戲的主要目的是什麼？",
        "otherForms": "purposes (複數型)"
    },
    {
        "word": "quality",
        "pos": "n.",
        "meaning": "品質",
        "theme": "抽象概念",
        "sentence": "This pair of shoes is of very high quality.",
        "sentenceZh": "這雙鞋的品質非常高。",
        "otherForms": "qualities (複數型)"
    },
    {
        "word": "reason",
        "pos": "n.",
        "meaning": "理由",
        "theme": "抽象概念",
        "sentence": "He politely explained the reason why he was late for school.",
        "sentenceZh": "他有禮貌地解釋了他上學遲到的理由。",
        "otherForms": "reasons (複數型)"
    },
    {
        "word": "relation",
        "pos": "n.",
        "meaning": "關係",
        "theme": "抽象概念",
        "sentence": "They have a good relation with their neighbors.",
        "sentenceZh": "他們和鄰居關係良好。",
        "otherForms": "relations (複數型)"
    },
    {
        "word": "result",
        "pos": "n. / v.",
        "meaning": "結果 / 導致",
        "theme": "抽象概念",
        "sentence": "He was very happy with the final result of his math test.",
        "sentenceZh": "他對數學考試的最終結果感到非常開心。",
        "otherForms": "results (複數型)"
    },
    {
        "word": "safety",
        "pos": "n.",
        "meaning": "安全",
        "theme": "抽象概念",
        "sentence": "You must wear a helmet for your own safety when riding a bike.",
        "sentenceZh": "騎腳踏車時為了你自己的安全必須戴安全帽。",
        "otherForms": ""
    },
    {
        "word": "secret",
        "pos": "n. / adj.",
        "meaning": "秘密 / 秘密的",
        "theme": "抽象概念",
        "sentence": "Please promise me that you won't tell my secret to anyone.",
        "sentenceZh": "請答應我你不會把我的秘密告訴任何人。",
        "otherForms": "secrets (複數型), secretly (副詞)"
    },
    {
        "word": "silence",
        "pos": "n.",
        "meaning": "寂靜",
        "theme": "抽象概念",
        "sentence": "The teacher waited for total silence before she started speaking.",
        "sentenceZh": "老師等到了全場寂靜後才開始說話。",
        "otherForms": "silences (複數型)"
    },
    {
        "word": "skill",
        "pos": "n.",
        "meaning": "技能",
        "theme": "抽象概念",
        "sentence": "Writing HTML code is a very useful skill for the future.",
        "sentenceZh": "寫 HTML 程式碼是未來一項非常實用的技能。",
        "otherForms": "skills (複數型)"
    },
    {
        "word": "soul",
        "pos": "n.",
        "meaning": "靈魂",
        "theme": "抽象概念",
        "sentence": "Some people say that beautiful music is good for the soul.",
        "sentenceZh": "有些人說美妙的音樂對靈魂有益。",
        "otherForms": "souls (複數型)"
    },
    {
        "word": "source",
        "pos": "n.",
        "meaning": "來源",
        "theme": "抽象概念",
        "sentence": "The internet is a great source of information.",
        "sentenceZh": "網路是一個很棒的資訊來源。",
        "otherForms": "sources (複數型)"
    },
    {
        "word": "space",
        "pos": "n.",
        "meaning": "空間",
        "theme": "抽象概念",
        "sentence": "There is still an empty space for your bag on the top shelf.",
        "sentenceZh": "最上層架子上還有一個空位可以放你的包包。",
        "otherForms": "spaces (複數型)"
    },
    {
        "word": "speed",
        "pos": "n. / v.",
        "meaning": "速度 / 加速",
        "theme": "抽象概念",
        "sentence": "The bullet train travels across the country at a very high speed.",
        "sentenceZh": "子彈列車以極高的速度穿梭全國。",
        "otherForms": "speeds (複數型)"
    },
    {
        "word": "spirit",
        "pos": "n.",
        "meaning": "精神",
        "theme": "抽象概念",
        "sentence": "The students showed great team spirit during the relay race.",
        "sentenceZh": "學生們在大隊接力中展現了極佳的團隊精神。",
        "otherForms": "spirits (複數型)"
    },
    {
        "word": "state",
        "pos": "n.",
        "meaning": "狀態 / 州",
        "theme": "抽象概念",
        "sentence": "Water can naturally exist in a solid, liquid, or gas state.",
        "sentenceZh": "水在自然界中能以固態、液態或氣態存在。",
        "otherForms": "states (複數型)"
    },
    {
        "word": "style",
        "pos": "n.",
        "meaning": "風格",
        "theme": "抽象概念",
        "sentence": "I really love the cool style of 1980s synth-pop music.",
        "sentenceZh": "我真的很愛 80 年代合成器流行樂那種酷炫的風格。",
        "otherForms": "styles (複數型)"
    },
    {
        "word": "subject",
        "pos": "n.",
        "meaning": "主題 / 科目",
        "theme": "抽象概念",
        "sentence": "English is my favorite subject in junior high school.",
        "sentenceZh": "英文是我在國中最喜歡的科目。",
        "otherForms": "subjects (複數型)"
    },
    {
        "word": "success",
        "pos": "n.",
        "meaning": "成功",
        "theme": "抽象概念",
        "sentence": "The new vocabulary passport plan was a great success.",
        "sentenceZh": "新的單字護照計畫是個巨大的成功。",
        "otherForms": "successes (複數型(加es))"
    },
    {
        "word": "surface",
        "pos": "n.",
        "meaning": "表面",
        "theme": "抽象概念",
        "sentence": "The surface of the table is very smooth.",
        "sentenceZh": "這張桌子的表面非常光滑。",
        "otherForms": "surfaces (複數型)"
    },
    {
        "word": "symbol",
        "pos": "n.",
        "meaning": "符號",
        "theme": "抽象概念",
        "sentence": "The white dove is often seen as a symbol of world peace.",
        "sentenceZh": "白鴿常被視為世界和平的象徵。",
        "otherForms": "symbols (複數型)"
    },
    {
        "word": "talent",
        "pos": "n.",
        "meaning": "天賦",
        "theme": "抽象概念",
        "sentence": "She has a special talent for drawing cute game characters.",
        "sentenceZh": "她對於畫可愛的遊戲角色有特別的天賦。",
        "otherForms": "talents (複數型)"
    },
    {
        "word": "task",
        "pos": "n.",
        "meaning": "任務",
        "theme": "抽象概念",
        "sentence": "Your task is to finish the homework before 9 PM.",
        "sentenceZh": "你的任務是在晚上9點前完成作業。",
        "otherForms": "tasks (複數型)"
    },
    {
        "word": "thought",
        "pos": "n.",
        "meaning": "想法",
        "theme": "抽象概念",
        "sentence": "I just had a brilliant thought about how to fix the code.",
        "sentenceZh": "關於如何修復程式碼，我剛好有一個聰明的想法。",
        "otherForms": "thoughts (複數型)"
    },
    {
        "word": "trouble",
        "pos": "n. / v.",
        "meaning": "麻煩",
        "theme": "抽象概念",
        "sentence": "He got into trouble because he didn't finish his homework.",
        "sentenceZh": "他因為沒寫完作業惹上了麻煩。",
        "otherForms": "troubles (複數型)"
    },
    {
        "word": "truth",
        "pos": "n.",
        "meaning": "真相",
        "theme": "抽象概念",
        "sentence": "A brave and honest student should always tell the truth.",
        "sentenceZh": "勇敢又誠實的學生應該永遠說出真相。",
        "otherForms": "truths (複數型)"
    },
    {
        "word": "value",
        "pos": "n. / v.",
        "meaning": "價值 / 重視",
        "theme": "抽象概念",
        "sentence": "Good health is of great value to everyone in the world.",
        "sentenceZh": "良好的健康對世上每個人都有極大的價值。",
        "otherForms": "values (複數型), values (三單), valuing (ing型(去e加ing)), valued (過去式/分詞)"
    },
    {
        "word": "victory",
        "pos": "n.",
        "meaning": "勝利",
        "theme": "抽象概念",
        "sentence": "The badminton team celebrated their sweet victory after the game.",
        "sentenceZh": "羽球隊在比賽後慶祝了他們甜美的勝利。",
        "otherForms": "victories (複數型(去y加ies))"
    },
    {
        "word": "way",
        "pos": "n.",
        "meaning": "方式 / 道路",
        "theme": "抽象概念",
        "sentence": "Can you please show me the correct way to the train station?",
        "sentenceZh": "能請你告訴我前往火車站的正確道路嗎？",
        "otherForms": "ways (複數型)"
    },
    {
        "word": "balloon",
        "pos": "n.",
        "meaning": "氣球",
        "theme": "雜物",
        "sentence": "We bought some colorful balloons for the birthday party.",
        "sentenceZh": "我們買了一些色彩繽紛的氣球來佈置生日派對。",
        "otherForms": "balloons (複數型)"
    },
    {
        "word": "bag",
        "pos": "n.",
        "meaning": "袋子 / 包包",
        "theme": "雜物",
        "sentence": "Don't forget to take your bag with you.",
        "sentenceZh": "別忘了帶著你的包包。",
        "otherForms": "bags (複數型)"
    },
    {
        "word": "bell",
        "pos": "n.",
        "meaning": "鈴鐺",
        "theme": "雜物",
        "sentence": "The school bell rings loudly at exactly eight o'clock.",
        "sentenceZh": "學校鐘聲在八點整大聲響起。",
        "otherForms": "bells (複數型)"
    },
    {
        "word": "bomb",
        "pos": "n.",
        "meaning": "炸彈",
        "theme": "雜物",
        "sentence": "The brave police officer safely stopped the bomb from exploding.",
        "sentenceZh": "勇敢的警察安全地阻止了炸彈爆炸。",
        "otherForms": "bombs (複數型)"
    },
    {
        "word": "cage",
        "pos": "n.",
        "meaning": "籠子",
        "theme": "雜物",
        "sentence": "The beautiful parrot is locked inside a small metal cage.",
        "sentenceZh": "那隻美麗的鸚鵡被關在一個小金屬籠子裡。",
        "otherForms": "cages (複數型)"
    },
    {
        "word": "chemical",
        "pos": "n. / adj.",
        "meaning": "化學物質 / 化學的",
        "theme": "雜物",
        "sentence": "Be careful when you use these chemical products.",
        "sentenceZh": "使用這些化學產品時請小心。",
        "otherForms": "chemicals (複數型), chemistry (化學 - 名詞)"
    },
    {
        "word": "flag",
        "pos": "n.",
        "meaning": "旗幟",
        "theme": "雜物",
        "sentence": "The students raised the national flag at the morning assembly.",
        "sentenceZh": "學生們在早會時升起了國旗。",
        "otherForms": "flags (複數型)"
    },
    {
        "word": "garbage",
        "pos": "n.",
        "meaning": "垃圾",
        "theme": "雜物",
        "sentence": "Please remember to take out the garbage before you leave.",
        "sentenceZh": "離開前請記得倒垃圾。",
        "otherForms": ""
    },
    {
        "word": "gift",
        "pos": "n.",
        "meaning": "禮物",
        "theme": "雜物",
        "sentence": "I received a very special gift from my aunt in Taipei.",
        "sentenceZh": "我收到了台北阿姨送的一份非常特別的禮物。",
        "otherForms": "gifts (複數型)"
    },
    {
        "word": "gun",
        "pos": "n.",
        "meaning": "槍",
        "theme": "雜物",
        "sentence": "The police officer carries a gun to protect the people.",
        "sentenceZh": "警察配戴槍枝以保護人民。",
        "otherForms": "guns (複數型)"
    },
    {
        "word": "kite",
        "pos": "n.",
        "meaning": "風箏",
        "theme": "雜物",
        "sentence": "We flew a beautiful red kite high in the clear blue sky.",
        "sentenceZh": "我們在湛藍晴空中放飛了一個美麗的紅風箏。",
        "otherForms": "kites (複數型)"
    },
    {
        "word": "lid",
        "pos": "n.",
        "meaning": "蓋子",
        "theme": "雜物",
        "sentence": "Don't forget to put the plastic lid back on the box.",
        "sentenceZh": "別忘了把塑膠蓋子蓋回盒子上。",
        "otherForms": "lids (複數型)"
    },
    {
        "word": "material",
        "pos": "n.",
        "meaning": "材料 / 物質",
        "theme": "雜物",
        "sentence": "Cotton is a soft material.",
        "sentenceZh": "棉花是一種柔軟的材料。",
        "otherForms": "materials (複數型)"
    },
    {
        "word": "name",
        "pos": "n. / v.",
        "meaning": "名字 / 命名",
        "theme": "雜物",
        "sentence": "Please write your English name clearly on the worksheet.",
        "sentenceZh": "請在學習單上清楚寫下你的英文名字。",
        "otherForms": "names (複數型)"
    },
    {
        "word": "object",
        "pos": "n. / v.",
        "meaning": "物品 / 反對",
        "theme": "雜物",
        "sentence": "The teacher put a strange, shiny object on her desk.",
        "sentenceZh": "老師在書桌上放了一個奇怪、閃亮的物品。",
        "otherForms": "objects (複數型)"
    },
    {
        "word": "prize",
        "pos": "n.",
        "meaning": "獎品",
        "theme": "雜物",
        "sentence": "He won the first prize in the national spelling bee contest.",
        "sentenceZh": "他在全國拼字比賽中贏得了第一名獎品。",
        "otherForms": "prizes (複數型)"
    },
    {
        "word": "rope",
        "pos": "n.",
        "meaning": "繩子",
        "theme": "雜物",
        "sentence": "We need a long, strong rope to play a game of tug-of-war.",
        "sentenceZh": "我們需要一條又長又堅固的繩子來玩拔河遊戲。",
        "otherForms": "ropes (複數型)"
    },
    {
        "word": "step",
        "pos": "n. / v.",
        "meaning": "步驟 / 腳步；踩",
        "theme": "雜物",
        "sentence": "Watch your step carefully when you walk down the wet stairs.",
        "sentenceZh": "走下潮濕的樓梯時要小心你的腳步。",
        "otherForms": "steps (複數型)"
    },
    {
        "word": "string",
        "pos": "n.",
        "meaning": "細繩",
        "theme": "雜物",
        "sentence": "I tied the small box nicely with a piece of red string.",
        "sentenceZh": "我用一條紅細繩把小盒子綁得很漂亮。",
        "otherForms": "strings (複數型)"
    },
    {
        "word": "thing",
        "pos": "n.",
        "meaning": "東西",
        "theme": "雜物",
        "sentence": "Keeping your body healthy is the most important thing in life.",
        "sentenceZh": "保持身體健康是生命中最重要的事。",
        "otherForms": "things (複數型)"
    },
    {
        "word": "tool",
        "pos": "n.",
        "meaning": "工具",
        "theme": "雜物",
        "sentence": "A computer is a very powerful tool for learning new things.",
        "sentenceZh": "電腦是學習新事物非常強大的工具。",
        "otherForms": "tools (複數型)"
    },
    {
        "word": "trap",
        "pos": "n. / v.",
        "meaning": "陷阱 / 困住",
        "theme": "雜物",
        "sentence": "The small mouse was finally caught in the wooden trap.",
        "sentenceZh": "那隻小老鼠最後被抓進了木製陷阱裡。",
        "otherForms": "traps (複數型), traps (三單), trapping (ing型(重複字尾)), trapped (過去式/分詞(重複字尾))"
    },
    {
        "word": "trash",
        "pos": "n.",
        "meaning": "垃圾",
        "theme": "雜物",
        "sentence": "Don't throw your trash on the floor; put it in the can.",
        "sentenceZh": "不要把垃圾丟在地上，把它丟進垃圾桶裡。",
        "otherForms": ""
    },
    {
        "word": "treasure",
        "pos": "n. / v.",
        "meaning": "寶藏 / 珍惜",
        "theme": "雜物",
        "sentence": "The pirates found a hidden box of gold treasure on the island.",
        "sentenceZh": "海盜在島上找到了一箱隱藏的黃金寶藏。",
        "otherForms": "treasures (複數型), treasures (三單), treasuring (ing型(去e加ing)), treasured (過去式/分詞)"
    },
    {
        "word": "trick",
        "pos": "n. / v.",
        "meaning": "詭計 / 詐欺",
        "theme": "雜物",
        "sentence": "The street magician showed us a very cool card trick.",
        "sentenceZh": "街頭魔術師表演了一個非常酷的撲克牌戲法。",
        "otherForms": "tricks (複數型), tricks (三單), tricking (ing型), tricked (過去式/分詞)"
    },
    {
        "word": "good-bye (goodbye, bye)",
        "pos": "phr.",
        "meaning": "再見",
        "theme": "會話",
        "sentence": "Wave your hand and say good-bye to your classmates.",
        "sentenceZh": "揮揮手並向你的同學們說再見。",
        "otherForms": ""
    },
    {
        "word": "goodness",
        "pos": "phr.",
        "meaning": "天啊",
        "theme": "會話",
        "sentence": "My goodness! The wind is blowing so strong today!",
        "sentenceZh": "我的天啊！今天的風吹得好大！",
        "otherForms": ""
    },
    {
        "word": "hello",
        "pos": "phr.",
        "meaning": "哈囉",
        "theme": "會話",
        "sentence": "Please smile and say hello to the new student in our class.",
        "sentenceZh": "請微笑並向我們班上的新同學說哈囉。",
        "otherForms": ""
    },
    {
        "word": "hey",
        "pos": "phr.",
        "meaning": "嘿",
        "theme": "會話",
        "sentence": "Hey! Don't forget to take your umbrella, it is raining outside!",
        "sentenceZh": "嘿！別忘了帶傘，外面在下雨！",
        "otherForms": ""
    },
    {
        "word": "hi",
        "pos": "phr.",
        "meaning": "嗨",
        "theme": "會話",
        "sentence": "Hi, how are you doing with your homework today?",
        "sentenceZh": "嗨，你今天的功課做得怎麼樣了？",
        "otherForms": ""
    },
    {
        "word": "no",
        "pos": "phr. / adv.",
        "meaning": "不",
        "theme": "會話",
        "sentence": "He shook his head slowly and said no to the question.",
        "sentenceZh": "他慢慢地搖搖頭，對這個問題說不。",
        "otherForms": ""
    },
    {
        "word": "Of course",
        "pos": "phr.",
        "meaning": "當然",
        "theme": "會話",
        "sentence": "\"Can you help me fix this bug?\" \"Of course I can!\"",
        "sentenceZh": "「你能幫我修這個程式錯誤嗎？」「我當然可以！」",
        "otherForms": ""
    },
    {
        "word": "OK",
        "pos": "phr.",
        "meaning": "ok",
        "theme": "會話",
        "sentence": "Are you OK? You look a little bit pale today.",
        "sentenceZh": "你還OK嗎？你今天看起來有點蒼白。",
        "otherForms": ""
    },
    {
        "word": "pardon",
        "pos": "phr. / v.",
        "meaning": "不好意思 / 原諒",
        "theme": "會話",
        "sentence": "Pardon me, could you please repeat that English word again?",
        "sentenceZh": "不好意思，能請您再重複一次那個英文單字嗎？",
        "otherForms": ""
    },
    {
        "word": "sorry",
        "pos": "adj. / phr.",
        "meaning": "抱歉的 / 難過的",
        "theme": "會話",
        "sentence": "I am very sorry for breaking your favorite coffee cup.",
        "sentenceZh": "打破了你最愛的咖啡杯我感到非常抱歉。",
        "otherForms": ""
    },
    {
        "word": "sure",
        "pos": "adj. / adv.",
        "meaning": "當然；確定的",
        "theme": "會話",
        "sentence": "Are you sure this is the right way to the train station?",
        "sentenceZh": "你確定這是前往火車站的正確道路嗎？",
        "otherForms": ""
    },
    {
        "word": "yes (yeah)",
        "pos": "phr. / adv.",
        "meaning": "好；是的",
        "theme": "會話",
        "sentence": "Yes, I have already finished my English reading homework.",
        "sentenceZh": "是的，我已經寫完我的英文閱讀作業了。",
        "otherForms": ""
    },
    {
        "word": "sound",
        "pos": "n. / v.",
        "meaning": "聲音 / 聽起來",
        "theme": "五官動詞",
        "sentence": "That 1980s synth-pop song sounds really wonderful.",
        "sentenceZh": "那首 80 年代的合成器流行歌聽起來真的很棒。",
        "otherForms": "sounds (複數型), sounds (三單), sounding (ing型), sounded (過去式/分詞)"
    },
    {
        "word": "taste",
        "pos": "n. / v.",
        "meaning": "口味 / 嘗起來",
        "theme": "五官動詞",
        "sentence": "The beef noodles in Douliu taste very delicious.",
        "sentenceZh": "斗六的牛肉麵嘗起來非常美味。",
        "otherForms": "tastes (複數型), tastes (三單), tasting (ing型(去e加ing)), tasted (過去式/分詞)"
    },
    {
        "word": "look",
        "pos": "n. / v.",
        "meaning": "外表 / 看",
        "theme": "五官動詞",
        "sentence": "You look very tired after the long badminton practice.",
        "sentenceZh": "漫長的羽球練習後你看起來非常累。",
        "otherForms": "looks (複數型), looks (三單), looking (ing型), looked (過去式/分詞)"
    },
    {
        "word": "feel",
        "pos": "v.",
        "meaning": "感覺到 / 感覺起來",
        "theme": "五官動詞",
        "sentence": "The soft blanket feels very warm and comfortable.",
        "sentenceZh": "柔軟的毯子感覺起來非常溫暖舒適。",
        "otherForms": "feels (三單), feeling (ing型), felt (過去式(不規則)), felt (過去分詞(不規則))"
    },
    {
        "word": "smell",
        "pos": "n. / v.",
        "meaning": "味道 / 聞到；聞起來",
        "theme": "五官動詞",
        "sentence": "The fried chicken in the night market smells so good.",
        "sentenceZh": "夜市裡的炸雞聞起來好香。",
        "otherForms": "smells (複數型), smells (三單), smelling (ing型), smelled/smelt (過去式/分詞(不規則))"
    },
    {
        "word": "see",
        "pos": "v.",
        "meaning": "看到",
        "theme": "五官動詞",
        "sentence": "I can see a beautiful rainbow in the clear sky.",
        "sentenceZh": "我能在晴朗的天空中看到一道美麗的彩虹。",
        "otherForms": "sees (三單), seeing (ing型), saw (過去式(不規則)), seen (過去分詞(不規則))"
    },
    {
        "word": "hear",
        "pos": "v.",
        "meaning": "聽到",
        "theme": "五官動詞",
        "sentence": "Did you hear the school bell ringing just now?",
        "sentenceZh": "你剛才有聽到學校的鐘聲響嗎？",
        "otherForms": "hears (三單), hearing (ing型), heard (過去式(不規則)), heard (過去分詞(不規則))"
    },
    {
        "word": "listen",
        "pos": "v.",
        "meaning": "聆聽",
        "theme": "五官動詞",
        "sentence": "Please listen carefully to the teacher's instructions.",
        "sentenceZh": "請仔細聆聽老師的指示。",
        "otherForms": "listens (三單), listening (ing型), listened (過去式/分詞)"
    },
    {
        "word": "watch",
        "pos": "v. / n.",
        "meaning": "觀看 / 手錶",
        "theme": "五官動詞",
        "sentence": "We watched an exciting badminton game on TV last night.",
        "sentenceZh": "我們昨晚在電視上觀看了一場刺激的羽球比賽。",
        "otherForms": "watches (複數型(加es)), watches (三單(加es)), watching (ing型), watched (過去式/分詞)"
    },
    {
        "word": "beat",
        "pos": "v. / n.",
        "meaning": "打擊 / 節拍",
        "theme": "手部動作",
        "sentence": "In the game, you have to beat the boss to win.",
        "sentenceZh": "在遊戲中，你必須打敗魔王才能獲勝。",
        "otherForms": "beats (三單), beating (ing型), beat (過去式(不規則同型)), beaten (過去分詞(不規則))"
    },
    {
        "word": "brush",
        "pos": "v. / n.",
        "meaning": "刷 / 刷子",
        "theme": "手部動作",
        "sentence": "Remember to brush your teeth twice a day.",
        "sentenceZh": "記得每天刷兩次牙。",
        "otherForms": "brushes (複數型(加es)), brushes (三單(加es)), brushing (ing型), brushed (過去式/分詞)"
    },
    {
        "word": "catch",
        "pos": "v.",
        "meaning": "抓住",
        "theme": "手部動作",
        "sentence": "He ran fast to catch the school bus this morning.",
        "sentenceZh": "他今天早上跑得很快去趕校車。",
        "otherForms": "catches (三單(加es)), catching (ing型), caught (過去式(不規則)), caught (過去分詞(不規則))"
    },
    {
        "word": "clap",
        "pos": "v. / n.",
        "meaning": "拍手",
        "theme": "手部動作",
        "sentence": "The students began to clap after the great speech.",
        "sentenceZh": "精彩的演講過後，學生們開始拍手。",
        "otherForms": "claps (三單), clapping (ing型(重複字尾)), clapped (過去式/分詞(重複字尾))"
    },
    {
        "word": "dial",
        "pos": "v.",
        "meaning": "撥號",
        "theme": "手部動作",
        "sentence": "You can dial 119 if there is a fire.",
        "sentenceZh": "如果發生火災你可以撥打 119。",
        "otherForms": "dials (三單), dialing (ing型), dialed (過去式/分詞)"
    },
    {
        "word": "dig",
        "pos": "v.",
        "meaning": "挖掘",
        "theme": "手部動作",
        "sentence": "The dog likes to dig holes in the garden.",
        "sentenceZh": "那隻狗喜歡在花園裡挖洞。",
        "otherForms": "digs (三單), digging (ing型(重複字尾)), dug (過去式(不規則)), dug (過去分詞(不規則))"
    },
    {
        "word": "drag",
        "pos": "v.",
        "meaning": "拖拉",
        "theme": "手部動作",
        "sentence": "Don't drag the chair on the floor.",
        "sentenceZh": "不要在地上拖拉椅子。",
        "otherForms": "drags (三單), dragged (過去/過去分詞), dragging (現在分詞)"
    },
    {
        "word": "give",
        "pos": "v.",
        "meaning": "給予",
        "theme": "手部動作",
        "sentence": "My uncle gave me a new watch for my birthday.",
        "sentenceZh": "我叔叔給了我一隻新手錶當生日禮物。",
        "otherForms": "gives (三單), giving (ing型(去e加ing)), gave (過去式(不規則)), given (過去分詞(不規則))"
    },
    {
        "word": "hit",
        "pos": "v. / n.",
        "meaning": "擊打",
        "theme": "手部動作",
        "sentence": "You must hit the badminton ball hard to get a point.",
        "sentenceZh": "你必須用力擊打羽球才能得分。",
        "otherForms": "hits (三單), hitting (ing型(重複字尾)), hit (過去式(不規則同型)), hit (過去分詞(不規則同型))"
    },
    {
        "word": "hold",
        "pos": "v.",
        "meaning": "握住",
        "theme": "手部動作",
        "sentence": "Please hold my hand when we cross the street.",
        "sentenceZh": "過馬路時請握住我的手。",
        "otherForms": "holds (三單), holding (ing型), held (過去式(不規則)), held (過去分詞(不規則))"
    },
    {
        "word": "hug",
        "pos": "v. / n.",
        "meaning": "擁抱",
        "theme": "手部動作",
        "sentence": "She gave her mother a big hug on Mother's Day.",
        "sentenceZh": "母親節時她給了媽媽一個大大的擁抱。",
        "otherForms": "hugs (複數型), hugs (三單), hugging (ing型(重複字尾)), hugged (過去式/分詞(重複字尾))"
    },
    {
        "word": "knock",
        "pos": "v. / n.",
        "meaning": "敲",
        "theme": "手部動作",
        "sentence": "Someone is knocking on the classroom door.",
        "sentenceZh": "有人正在敲教室的門。",
        "otherForms": "knocks (複數型), knocks (三單), knocking (ing型), knocked (過去式/分詞)"
    },
    {
        "word": "lay",
        "pos": "v.",
        "meaning": "放置；產卵",
        "theme": "手部動作",
        "sentence": "The brown hen lays a fresh egg every morning.",
        "sentenceZh": "那隻棕色母雞每天早上都會生一顆新鮮的蛋。",
        "otherForms": "lays (三單), laying (ing型), laid (過去式(不規則)), laid (過去分詞(不規則))"
    },
    {
        "word": "lift",
        "pos": "v. / n.",
        "meaning": "舉起 / 電梯",
        "theme": "手部動作",
        "sentence": "The box is too heavy for me to lift.",
        "sentenceZh": "這個箱子對我來說太重了，舉不起來。",
        "otherForms": "lifts (三單), lifting (ing型), lifted (過去式/分詞)"
    },
    {
        "word": "operate",
        "pos": "v.",
        "meaning": "操作 / 運作",
        "theme": "手部動作",
        "sentence": "Do you know how to operate this machine?",
        "sentenceZh": "你知道如何操作這台機器嗎？",
        "otherForms": "operates (三單), operated (過去/過去分詞), operating (現在分詞), operation (名詞(手術))"
    },
    {
        "word": "pick",
        "pos": "v.",
        "meaning": "撿起 / 選擇",
        "theme": "手部動作",
        "sentence": "Please pick up the trash on the floor.",
        "sentenceZh": "請撿起地上的垃圾。",
        "otherForms": "picks (三單), picking (ing型), picked (過去式/分詞)"
    },
    {
        "word": "pull",
        "pos": "v. / n.",
        "meaning": "拉",
        "theme": "手部動作",
        "sentence": "Push the door to open it, don't pull it.",
        "sentenceZh": "推門來打開它，不要拉。",
        "otherForms": "pulls (三單), pulling (ing型), pulled (過去式/分詞)"
    },
    {
        "word": "push",
        "pos": "v. / n.",
        "meaning": "推",
        "theme": "手部動作",
        "sentence": "The boy tried to push the heavy desk to the corner.",
        "sentenceZh": "男孩試著把笨重的書桌推到角落。",
        "otherForms": "pushes (三單(加es)), pushing (ing型), pushed (過去式/分詞)"
    },
    {
        "word": "put",
        "pos": "v.",
        "meaning": "放",
        "theme": "手部動作",
        "sentence": "Put your vocabulary passport on the desk, please.",
        "sentenceZh": "請把你的單字護照放在桌上。",
        "otherForms": "puts (三單), putting (ing型(重複字尾)), put (過去式(不規則同型)), put (過去分詞(不規則同型))"
    },
    {
        "word": "sign",
        "pos": "v. / n.",
        "meaning": "簽名 / 標誌",
        "theme": "手部動作",
        "sentence": "Please sign your name at the bottom of the test paper.",
        "sentenceZh": "請在考卷底部簽名。",
        "otherForms": "signs (複數型), signs (三單), signing (ing型), signed (過去式/分詞)"
    },
    {
        "word": "throw",
        "pos": "v. / n.",
        "meaning": "丟擲",
        "theme": "手部動作",
        "sentence": "Don't throw the ball inside the classroom.",
        "sentenceZh": "不要把球丟在教室裡。",
        "otherForms": "throws (三單), throwing (ing型), threw (過去式(不規則)), thrown (過去分詞(不規則))"
    },
    {
        "word": "touch",
        "pos": "v. / n.",
        "meaning": "觸摸",
        "theme": "手部動作",
        "sentence": "Don't touch the hot pot, you might burn yourself.",
        "sentenceZh": "不要碰那個熱鍋子，你可能會燙傷自己。",
        "otherForms": "touches (三單(加es)), touching (ing型), touched (過去式/分詞)"
    },
    {
        "word": "type",
        "pos": "v. / n.",
        "meaning": "打字 / 類型",
        "theme": "手部動作",
        "sentence": "She can type English words very fast on the computer.",
        "sentenceZh": "她能在電腦上把英文單字打得非常快。",
        "otherForms": "types (三單), typing (ing型(去e加ing)), typed (過去式/分詞)"
    },
    {
        "word": "wave",
        "pos": "v. / n.",
        "meaning": "揮手 / 波浪",
        "theme": "手部動作",
        "sentence": "She smiled and waved goodbye to her good friend.",
        "sentenceZh": "她微笑著向她的好朋友揮手道別。",
        "otherForms": "waves (複數型), waves (三單), waving (ing型(去e加ing)), waved (過去式/分詞)"
    },
    {
        "word": "chase",
        "pos": "v. / n.",
        "meaning": "追逐",
        "theme": "腳部動作",
        "sentence": "The dog loves to chase the cat around the yard.",
        "sentenceZh": "那隻狗喜歡在院子裡追著貓跑。",
        "otherForms": "chases (三單(加es)), chasing (ing型(去e加ing)), chased (過去式/分詞)"
    },
    {
        "word": "come",
        "pos": "v.",
        "meaning": "來",
        "theme": "腳部動作",
        "sentence": "Come here and look at this funny picture!",
        "sentenceZh": "來這裡看看這張好笑的圖片！",
        "otherForms": "comes (三單), coming (ing型(去e加ing)), came (過去式(不規則)), come (過去分詞(不規則))"
    },
    {
        "word": "enter",
        "pos": "v.",
        "meaning": "進入",
        "theme": "腳部動作",
        "sentence": "Please knock on the door before you enter the office.",
        "sentenceZh": "進入辦公室前請先敲門。",
        "otherForms": "enters (三單), entering (ing型), entered (過去式/分詞)"
    },
    {
        "word": "exist",
        "pos": "v.",
        "meaning": "存在",
        "theme": "腳部動作",
        "sentence": "Do you believe that ghosts really exist?",
        "sentenceZh": "你相信鬼魂真的存在嗎？",
        "otherForms": "exists (三單), existing (ing型), existed (過去式/分詞)"
    },
    {
        "word": "follow",
        "pos": "v.",
        "meaning": "跟隨",
        "theme": "腳部動作",
        "sentence": "Follow me, and I will show you the way to the library.",
        "sentenceZh": "跟著我，我會帶你去圖書館。",
        "otherForms": "follows (三單), following (ing型), followed (過去式/分詞)"
    },
    {
        "word": "go",
        "pos": "v.",
        "meaning": "去",
        "theme": "腳部動作",
        "sentence": "We usually go to the movies on Saturday afternoon.",
        "sentenceZh": "我們通常在星期六下午去看電影。",
        "otherForms": "goes (三單(加es)), going (ing型), went (過去式(不規則)), gone (過去分詞(不規則))"
    },
    {
        "word": "hop",
        "pos": "v. / n.",
        "meaning": "單腳跳",
        "theme": "腳部動作",
        "sentence": "The little rabbit hopped across the green grass.",
        "sentenceZh": "小兔子跳過了綠草地。",
        "otherForms": "hops (三單), hopping (ing型(重複字尾)), hopped (過去式/分詞(重複字尾))"
    },
    {
        "word": "jump",
        "pos": "v. / n.",
        "meaning": "跳躍",
        "theme": "腳部動作",
        "sentence": "He jumped high to catch the basketball.",
        "sentenceZh": "他跳得很高去接籃球。",
        "otherForms": "jumps (三單), jumping (ing型), jumped (過去式/分詞)"
    },
    {
        "word": "kick",
        "pos": "v. / n.",
        "meaning": "踢",
        "theme": "腳部動作",
        "sentence": "He kicked the soccer ball right into the net.",
        "sentenceZh": "他把足球直接踢進了網子裡。",
        "otherForms": "kicks (三單), kicking (ing型), kicked (過去式/分詞)"
    },
    {
        "word": "leave",
        "pos": "v.",
        "meaning": "離開 / 留下",
        "theme": "腳部動作",
        "sentence": "Remember to turn off the lights before you leave.",
        "sentenceZh": "離開前記得關燈。",
        "otherForms": "leaves (三單), leaving (ing型(去e加ing)), left (過去式(不規則)), left (過去分詞(不規則))"
    },
    {
        "word": "move",
        "pos": "v. / n.",
        "meaning": "移動 / 感動",
        "theme": "腳部動作",
        "sentence": "Can you help me move this heavy sofa?",
        "sentenceZh": "你能幫我移動這張笨重的沙發嗎？",
        "otherForms": "moves (三單), moving (ing型(去e加ing)), moved (過去式/分詞)"
    },
    {
        "word": "run",
        "pos": "v. / n.",
        "meaning": "跑 / 經營",
        "theme": "腳部動作",
        "sentence": "Don't run in the hallway, it is dangerous.",
        "sentenceZh": "不要在走廊上奔跑，這很危險。",
        "otherForms": "runs (三單), running (ing型(重複字尾)), ran (過去式(不規則)), run (過去分詞(不規則))"
    },
    {
        "word": "stand",
        "pos": "v. / n.",
        "meaning": "站立 / 攤位",
        "theme": "腳部動作",
        "sentence": "Please stand up when the principal comes in.",
        "sentenceZh": "校長進來時請起立。",
        "otherForms": "stands (三單), standing (ing型), stood (過去式(不規則)), stood (過去分詞(不規則))"
    },
    {
        "word": "walk",
        "pos": "v. / n.",
        "meaning": "走路 / 散步",
        "theme": "腳部動作",
        "sentence": "I usually walk to school because it is very close.",
        "sentenceZh": "我通常走路去上學因為距離很近。",
        "otherForms": "walks (三單), walking (ing型), walked (過去式/分詞)"
    },
    {
        "word": "bark",
        "pos": "v. / n.",
        "meaning": "吠叫 / 樹皮",
        "theme": "臉部動作",
        "sentence": "The dog will bark loudly when a stranger comes near.",
        "sentenceZh": "當陌生人靠近時，這隻狗會大聲吠叫。",
        "otherForms": "barks (三單), barking (ing型), barked (過去式/分詞)"
    },
    {
        "word": "bite",
        "pos": "v. / n.",
        "meaning": "咬",
        "theme": "臉部動作",
        "sentence": "Don't put your hand there; the spider might bite you.",
        "sentenceZh": "不要把手放在那裡，蜘蛛可能會咬你。",
        "otherForms": "bites (三單), biting (ing型(去e加ing)), bit (過去式(不規則)), bitten (過去分詞(不規則))"
    },
    {
        "word": "blow",
        "pos": "v. / n.",
        "meaning": "吹",
        "theme": "臉部動作",
        "sentence": "The wind is blowing hard today.",
        "sentenceZh": "今天的風吹得很大。",
        "otherForms": "blows (三單), blowing (ing型), blew (過去式(不規則)), blown (過去分詞(不規則))"
    },
    {
        "word": "cry",
        "pos": "v. / n.",
        "meaning": "哭 / 叫喊",
        "theme": "臉部動作",
        "sentence": "The little baby began to cry because he was hungry.",
        "sentenceZh": "小嬰兒因為肚子餓開始哭。",
        "otherForms": "cries (三單(去y加ies)), crying (ing型), cried (過去式/分詞(去y加ied))"
    },
    {
        "word": "describe",
        "pos": "v.",
        "meaning": "描述",
        "theme": "臉部動作",
        "sentence": "Can you describe what the thief looked like?",
        "sentenceZh": "你能描述一下那個小偷長什麼樣子嗎？",
        "otherForms": "describes (三單), describing (ing型(去e加ing)), described (過去式/分詞)"
    },
    {
        "word": "kiss",
        "pos": "v. / n.",
        "meaning": "親吻",
        "theme": "臉部動作",
        "sentence": "She kissed her mother goodnight before going to sleep.",
        "sentenceZh": "她睡前給了媽媽一個晚安吻。",
        "otherForms": "kisses (複數型(加es)), kisses (三單(加es)), kissing (ing型), kissed (過去式/分詞)"
    },
    {
        "word": "lick",
        "pos": "v. / n.",
        "meaning": "舔",
        "theme": "臉部動作",
        "sentence": "The cat licked its paw to clean itself.",
        "sentenceZh": "貓舔了舔爪子來清潔自己。",
        "otherForms": "licks (三單), licking (ing型), licked (過去式/分詞)"
    },
    {
        "word": "meet",
        "pos": "v.",
        "meaning": "遇見",
        "theme": "臉部動作",
        "sentence": "I will meet you at the station at five o'clock.",
        "sentenceZh": "我五點會在車站跟你碰面。",
        "otherForms": "meets (三單), meeting (ing型), met (過去式(不規則)), met (過去分詞(不規則))"
    },
    {
        "word": "nod",
        "pos": "v. / n.",
        "meaning": "點頭",
        "theme": "臉部動作",
        "sentence": "The student nodded to show that he understood the grammar.",
        "sentenceZh": "學生點點頭表示他懂這個文法了。",
        "otherForms": "nods (三單), nodding (ing型(重複字尾)), nodded (過去式/分詞(重複字尾))"
    },
    {
        "word": "promise",
        "pos": "v. / n.",
        "meaning": "承諾",
        "theme": "臉部動作",
        "sentence": "I promise I will finish writing the HTML code tomorrow.",
        "sentenceZh": "我承諾我明天會寫完 HTML 程式碼。",
        "otherForms": "promises (複數型), promises (三單), promising (ing型(去e加ing)), promised (過去式/分詞)"
    },
    {
        "word": "swallow",
        "pos": "v. / n.",
        "meaning": "吞嚥 / 燕子",
        "theme": "臉部動作",
        "sentence": "Take some water to help you swallow the medicine.",
        "sentenceZh": "喝點水來幫你吞下這顆藥。",
        "otherForms": "swallows (三單), swallowing (ing型), swallowed (過去式/分詞)"
    },
    {
        "word": "drink",
        "pos": "v. / n.",
        "meaning": "喝 / 飲料",
        "theme": "臉部動作",
        "sentence": "You should drink a lot of water after exercising.",
        "sentenceZh": "運動後你應該多喝水。",
        "otherForms": "drinks (三單), drinking (ing型), drank (過去式(不規則)), drunk (過去分詞(不規則))"
    },
    {
        "word": "eat",
        "pos": "v.",
        "meaning": "吃",
        "theme": "臉部動作",
        "sentence": "We eat dinner together as a family every evening.",
        "sentenceZh": "我們每天傍晚一家人會一起吃晚餐。",
        "otherForms": "eats (三單), eating (ing型), ate (過去式(不規則)), eaten (過去分詞(不規則))"
    },
    {
        "word": "advise",
        "pos": "v.",
        "meaning": "建議",
        "theme": "言語動作",
        "sentence": "I advise you to practice your vocabulary every day.",
        "sentenceZh": "我建議你每天練習單字。",
        "otherForms": "advises (三單), advising (ing型(去e加ing)), advised (過去式/分詞)"
    },
    {
        "word": "apologize",
        "pos": "v.",
        "meaning": "道歉",
        "theme": "言語動作",
        "sentence": "You should apologize for being late to class.",
        "sentenceZh": "你應該為上課遲到而道歉。",
        "otherForms": "apologizes (三單), apologizing (ing型(去e加ing)), apologized (過去式/分詞)"
    },
    {
        "word": "argue",
        "pos": "v.",
        "meaning": "爭論",
        "theme": "言語動作",
        "sentence": "The two boys started to argue about the game rules.",
        "sentenceZh": "那兩個男孩開始為遊戲規則爭論。",
        "otherForms": "argues (三單), arguing (ing型(去e加ing)), argued (過去式/分詞)"
    },
    {
        "word": "cheat",
        "pos": "v. / n.",
        "meaning": "欺騙 / 騙子",
        "theme": "言語動作",
        "sentence": "It is very wrong to cheat on an English test.",
        "sentenceZh": "在英文考試中作弊是非常不對的。",
        "otherForms": "cheats (三單), cheating (ing型), cheated (過去式/分詞)"
    },
    {
        "word": "claim",
        "pos": "v. / n.",
        "meaning": "宣稱 / 要求",
        "theme": "言語動作",
        "sentence": "He claimed that he didn't break the window.",
        "sentenceZh": "他宣稱自己沒有打破窗戶。",
        "otherForms": "claims (三單), claimed (過去/過去分詞), claiming (現在分詞)"
    },
    {
        "word": "comment",
        "pos": "v. / n.",
        "meaning": "評論",
        "theme": "言語動作",
        "sentence": "Please leave a comment below if you like this video.",
        "sentenceZh": "如果你喜歡這支影片，請在下方留言評論。",
        "otherForms": "comments (複數型), comments (三單), commenting (ing型), commented (過去式/分詞)"
    },
    {
        "word": "compare",
        "pos": "v.",
        "meaning": "比較",
        "theme": "言語動作",
        "sentence": "Let's compare these two cellphones to see which is better.",
        "sentenceZh": "我們來比較這兩支手機看看哪支比較好。",
        "otherForms": "compares (三單), comparing (ing型(去e加ing)), compared (過去式/分詞)"
    },
    {
        "word": "complain",
        "pos": "v.",
        "meaning": "抱怨",
        "theme": "言語動作",
        "sentence": "Don't complain about the homework; just do it.",
        "sentenceZh": "別抱怨作業了，做就對了。",
        "otherForms": "complains (三單), complaining (ing型), complained (過去式/分詞)"
    },
    {
        "word": "deny",
        "pos": "v.",
        "meaning": "否認",
        "theme": "言語動作",
        "sentence": "The boy denied stealing the money.",
        "sentenceZh": "那男孩否認偷了錢。",
        "otherForms": "denies (三單), denied (過去/過去分詞), denying (現在分詞)"
    },
    {
        "word": "discuss",
        "pos": "v.",
        "meaning": "討論",
        "theme": "言語動作",
        "sentence": "The teachers will discuss the new teaching plan today.",
        "sentenceZh": "老師們今天將討論新的教學計畫。",
        "otherForms": "discusses (三單(加es)), discussing (ing型), discussed (過去式/分詞)"
    },
    {
        "word": "explain",
        "pos": "v.",
        "meaning": "解釋",
        "theme": "言語動作",
        "sentence": "Can you explain why you didn't finish your reading report?",
        "sentenceZh": "你能解釋一下為什麼你沒寫完讀書報告嗎？",
        "otherForms": "explains (三單), explaining (ing型), explained (過去式/分詞)"
    },
    {
        "word": "express",
        "pos": "v. / adj.",
        "meaning": "表達 / 快速的",
        "theme": "言語動作",
        "sentence": "The beautiful poem expresses his deep love for his mother.",
        "sentenceZh": "這首美麗的詩表達了他對母親深厚的愛。",
        "otherForms": "expresses (三單(加es)), expressing (ing型), expressed (過去式/分詞)"
    },
    {
        "word": "greet",
        "pos": "v.",
        "meaning": "問候",
        "theme": "言語動作",
        "sentence": "The polite student always greets the teacher with a smile.",
        "sentenceZh": "這位有禮貌的學生總是用微笑問候老師。",
        "otherForms": "greets (三單), greeting (ing型), greeted (過去式/分詞)"
    },
    {
        "word": "introduce",
        "pos": "v.",
        "meaning": "介紹",
        "theme": "言語動作",
        "sentence": "Let me introduce my new friend, Jason, to you.",
        "sentenceZh": "讓我把我的新朋友 Jason 介紹給你。",
        "otherForms": "introduces (三單), introducing (ing型(去e加ing)), introduced (過去式/分詞)"
    },
    {
        "word": "lie",
        "pos": "v. / n.",
        "meaning": "說謊 / 躺；謊言",
        "theme": "言語動作",
        "sentence": "A good friend should never lie to you.",
        "sentenceZh": "好朋友絕不應該對你說謊。",
        "otherForms": "lies (三單), lying (ing型(去ie加ying)), lied/lay (過去式(不規則)), lied/lain (過去分詞(不規則))"
    },
    {
        "word": "praise",
        "pos": "v. / n.",
        "meaning": "讚美",
        "theme": "言語動作",
        "sentence": "The teacher praised him for his hard work on the project.",
        "sentenceZh": "老師讚美他在這項專案上的努力。",
        "otherForms": "praises (三單), praising (ing型(去e加ing)), praised (過去式/分詞)"
    },
    {
        "word": "pray",
        "pos": "v.",
        "meaning": "祈禱",
        "theme": "言語動作",
        "sentence": "They went to the temple to pray for good luck.",
        "sentenceZh": "他們去寺廟祈求好運。",
        "otherForms": "prays (三單), praying (ing型), prayed (過去式/分詞)"
    },
    {
        "word": "prove",
        "pos": "v.",
        "meaning": "證明",
        "theme": "言語動作",
        "sentence": "He can prove that he was at home last night.",
        "sentenceZh": "他能證明昨晚他在家。",
        "otherForms": "proves (三單), proved (過去式), proven (過去分詞), proving (現在分詞)"
    },
    {
        "word": "reply",
        "pos": "v. / n.",
        "meaning": "回覆",
        "theme": "言語動作",
        "sentence": "I sent him an email, but he hasn't replied yet.",
        "sentenceZh": "我寄了一封電子郵件給他，但他還沒回覆。",
        "otherForms": "replies (三單), replied (過去/過去分詞), replying (現在分詞)"
    },
    {
        "word": "require",
        "pos": "v.",
        "meaning": "需要 / 要求",
        "theme": "言語動作",
        "sentence": "This job requires good English skills.",
        "sentenceZh": "這份工作需要良好的英文能力。",
        "otherForms": "requires (三單), required (過去/過去分詞), requiring (現在分詞)"
    },
    {
        "word": "shout",
        "pos": "v. / n.",
        "meaning": "喊叫",
        "theme": "言語動作",
        "sentence": "Please don't shout in the library; people are reading.",
        "sentenceZh": "請不要在圖書館大聲喊叫，人們正在看書。",
        "otherForms": "shouts (三單), shouting (ing型), shouted (過去式/分詞)"
    },
    {
        "word": "suggest",
        "pos": "v.",
        "meaning": "建議",
        "theme": "言語動作",
        "sentence": "I suggest we take a bus instead of walking in the rain.",
        "sentenceZh": "我建議我們搭公車，而不是在雨中走路。",
        "otherForms": "suggests (三單), suggesting (ing型), suggested (過去式/分詞)"
    },
    {
        "word": "tell",
        "pos": "v.",
        "meaning": "告訴 / 分辨",
        "theme": "言語動作",
        "sentence": "Can you tell me the correct answer to this problem?",
        "sentenceZh": "你能告訴我這個問題的正確答案嗎？",
        "otherForms": "tells (三單), telling (ing型), told (過去式(不規則)), told (過去分詞(不規則))"
    },
    {
        "word": "thank",
        "pos": "v. / n.",
        "meaning": "感謝",
        "theme": "言語動作",
        "sentence": "I want to thank you for helping me with my math homework.",
        "sentenceZh": "我想感謝你幫我做數學作業。",
        "otherForms": "thanks (三單/複數), thanking (ing型), thanked (過去式/分詞)"
    },
    {
        "word": "yell",
        "pos": "v. / n.",
        "meaning": "大叫",
        "theme": "言語動作",
        "sentence": "The angry man yelled loudly at the driver.",
        "sentenceZh": "生氣的男人對著司機大叫。",
        "otherForms": "yells (三單), yelling (ing型), yelled (過去式/分詞)"
    },
    {
        "word": "accept",
        "pos": "v.",
        "meaning": "接受",
        "theme": "心智動作",
        "sentence": "She happily accepted the invitation to the birthday party.",
        "sentenceZh": "她開心地接受了生日派對的邀請。",
        "otherForms": "accepts (三單), accepting (ing型), accepted (過去式/分詞)"
    },
    {
        "word": "admire",
        "pos": "v.",
        "meaning": "欽佩",
        "theme": "心智動作",
        "sentence": "I really admire the way he plays badminton.",
        "sentenceZh": "我真的很欽佩他打羽球的方式。",
        "otherForms": "admires (三單), admiring (ing型(去e加ing)), admired (過去式/分詞)"
    },
    {
        "word": "agree",
        "pos": "v.",
        "meaning": "同意",
        "theme": "心智動作",
        "sentence": "I completely agree with your great idea.",
        "sentenceZh": "我完全同意你這個好主意。",
        "otherForms": "agrees (三單), agreeing (ing型), agreed (過去式/分詞)"
    },
    {
        "word": "allow",
        "pos": "v.",
        "meaning": "允許",
        "theme": "心智動作",
        "sentence": "We are not allowed to eat food in the computer room.",
        "sentenceZh": "我們不被允許在電腦教室吃東西。",
        "otherForms": "allows (三單), allowing (ing型), allowed (過去式/分詞)"
    },
    {
        "word": "appreciate",
        "pos": "v.",
        "meaning": "欣賞 / 感謝",
        "theme": "心智動作",
        "sentence": "I really appreciate your help with the interactive game.",
        "sentenceZh": "我真的很感謝你在互動遊戲上的幫忙。",
        "otherForms": "appreciates (三單), appreciating (ing型(去e加ing)), appreciated (過去式/分詞)"
    },
    {
        "word": "assume",
        "pos": "v.",
        "meaning": "假設",
        "theme": "心智動作",
        "sentence": "I assume you have already finished writing the sentences.",
        "sentenceZh": "我假設你已經寫完這些句子了。",
        "otherForms": "assumes (三單), assuming (ing型(去e加ing)), assumed (過去式/分詞)"
    },
    {
        "word": "believe",
        "pos": "v.",
        "meaning": "相信",
        "theme": "心智動作",
        "sentence": "I believe that you can pass the test if you study hard.",
        "sentenceZh": "我相信只要你努力讀書就能通過考試。",
        "otherForms": "believes (三單), believing (ing型(去e加ing)), believed (過去式/分詞)"
    },
    {
        "word": "blame",
        "pos": "v. / n.",
        "meaning": "責備",
        "theme": "心智動作",
        "sentence": "Don't blame him; it was not his fault.",
        "sentenceZh": "別責備他，那不是他的錯。",
        "otherForms": "blames (三單), blaming (ing型(去e加ing)), blamed (過去式/分詞)"
    },
    {
        "word": "bless",
        "pos": "v.",
        "meaning": "祝福",
        "theme": "心智動作",
        "sentence": "May God bless you with good health and happiness.",
        "sentenceZh": "願上帝賜福你健康快樂。",
        "otherForms": "blesses (三單(加es)), blessing (ing型), blessed (過去式/分詞)"
    },
    {
        "word": "choose",
        "pos": "v.",
        "meaning": "選擇",
        "theme": "心智動作",
        "sentence": "You can choose either the red pen or the blue pen.",
        "sentenceZh": "你可以選擇紅筆或藍筆。",
        "otherForms": "chooses (三單), choosing (ing型(去e加ing)), chose (過去式(不規則)), chosen (過去分詞(不規則))"
    },
    {
        "word": "consider",
        "pos": "v.",
        "meaning": "考慮",
        "theme": "心智動作",
        "sentence": "We need to consider the weather before we go camping.",
        "sentenceZh": "我們去露營前需要考慮天氣狀況。",
        "otherForms": "considers (三單), considering (ing型), considered (過去式/分詞)"
    },
    {
        "word": "control",
        "pos": "v. / n.",
        "meaning": "控制",
        "theme": "心智動作",
        "sentence": "You use the mouse to control the character in the game.",
        "sentenceZh": "你用滑鼠來控制遊戲裡的角色。",
        "otherForms": "controls (三單), controlling (ing型(重複字尾)), controlled (過去式/分詞(重複字尾))"
    },
    {
        "word": "count",
        "pos": "v. / n.",
        "meaning": "數數 / 重要",
        "theme": "心智動作",
        "sentence": "Can you count from one to one hundred in English?",
        "sentenceZh": "你能用英文從一數到一百嗎？",
        "otherForms": "counts (三單), counting (ing型), counted (過去式/分詞)"
    },
    {
        "word": "decide",
        "pos": "v.",
        "meaning": "決定",
        "theme": "心智動作",
        "sentence": "I haven't decided what I want to eat for dinner yet.",
        "sentenceZh": "我還沒決定晚餐想吃什麼。",
        "otherForms": "decides (三單), deciding (ing型(去e加ing)), decided (過去式/分詞)"
    },
    {
        "word": "define",
        "pos": "v.",
        "meaning": "定義",
        "theme": "心智動作",
        "sentence": "Please use the dictionary to define this new vocabulary word.",
        "sentenceZh": "請用字典來定義這個新單字。",
        "otherForms": "defines (三單), defining (ing型(去e加ing)), defined (過去式/分詞)"
    },
    {
        "word": "detect",
        "pos": "v.",
        "meaning": "偵測",
        "theme": "心智動作",
        "sentence": "The game program can detect if your spelling is correct.",
        "sentenceZh": "遊戲程式能偵測你的拼寫是否正確。",
        "otherForms": "detects (三單), detecting (ing型), detected (過去式/分詞)"
    },
    {
        "word": "elect",
        "pos": "v.",
        "meaning": "選舉",
        "theme": "心智動作",
        "sentence": "The class voted to elect him as the new class leader.",
        "sentenceZh": "全班投票選舉他為新班長。",
        "otherForms": "elects (三單), electing (ing型), elected (過去式/分詞)"
    },
    {
        "word": "expect",
        "pos": "v.",
        "meaning": "預期",
        "theme": "心智動作",
        "sentence": "I didn't expect the math test to be this difficult.",
        "sentenceZh": "我沒預期數學考試會這麼難。",
        "otherForms": "expects (三單), expecting (ing型), expected (過去式/分詞)"
    },
    {
        "word": "focus",
        "pos": "v.",
        "meaning": "聚焦",
        "theme": "心智動作",
        "sentence": "You need to focus your mind on studying for the exam.",
        "sentenceZh": "你需要把心思專注在準備考試上。",
        "otherForms": "focuses (三單(加es)), focusing (ing型), focused (過去式/分詞)"
    },
    {
        "word": "forget",
        "pos": "v.",
        "meaning": "忘記",
        "theme": "心智動作",
        "sentence": "Don't forget to bring your umbrella tomorrow morning!",
        "sentenceZh": "明天早上別忘了帶傘！",
        "otherForms": "forgets (三單), forgetting (ing型(重複字尾)), forgot (過去式(不規則)), forgotten (過去分詞(不規則))"
    },
    {
        "word": "forgive",
        "pos": "v.",
        "meaning": "原諒",
        "theme": "心智動作",
        "sentence": "She decided to forgive him for his honest mistake.",
        "sentenceZh": "她決定原諒他無心之過的錯誤。",
        "otherForms": "forgives (三單), forgiving (ing型(去e加ing)), forgave (過去式(不規則)), forgiven (過去分詞(不規則))"
    },
    {
        "word": "guess",
        "pos": "v. / n.",
        "meaning": "猜測",
        "theme": "心智動作",
        "sentence": "Can you guess what is inside this beautiful gift box?",
        "sentenceZh": "你能猜到這精美禮物盒裡裝了什麼嗎？",
        "otherForms": "guesses (三單(加es)), guessing (ing型), guessed (過去式/分詞)"
    },
    {
        "word": "help",
        "pos": "v. / n.",
        "meaning": "幫助",
        "theme": "心智動作",
        "sentence": "My teacher always helps me when I don't understand the grammar.",
        "sentenceZh": "當我不懂文法時，我的老師總是會幫助我。",
        "otherForms": "helps (三單), helping (ing型), helped (過去式/分詞)"
    },
    {
        "word": "hope",
        "pos": "v. / n.",
        "meaning": "希望",
        "theme": "心智動作",
        "sentence": "I hope the weather will be sunny for our picnic tomorrow.",
        "sentenceZh": "我希望明天野餐的天氣會是晴朗的。",
        "otherForms": "hopes (三單), hoping (ing型(去e加ing)), hoped (過去式/分詞)"
    },
    {
        "word": "ignore",
        "pos": "v.",
        "meaning": "忽略",
        "theme": "心智動作",
        "sentence": "She tried to ignore the loud noise outside her window.",
        "sentenceZh": "她試著忽略窗外的巨大噪音。",
        "otherForms": "ignores (三單), ignoring (ing型(去e加ing)), ignored (過去式/分詞)"
    },
    {
        "word": "imagine",
        "pos": "v.",
        "meaning": "想像",
        "theme": "心智動作",
        "sentence": "Try to imagine what the world will look like in the future.",
        "sentenceZh": "試著想像未來的世界會是什麼樣子。",
        "otherForms": "imagines (三單), imagining (ing型(去e加ing)), imagined (過去式/分詞)"
    },
    {
        "word": "insist",
        "pos": "v.",
        "meaning": "堅持",
        "theme": "心智動作",
        "sentence": "He insisted on paying for everyone's dinner.",
        "sentenceZh": "他堅持要付大家吃晚餐的錢。",
        "otherForms": "insists (三單), insisting (ing型), insisted (過去式/分詞)"
    },
    {
        "word": "inspire",
        "pos": "v.",
        "meaning": "激勵",
        "theme": "心智動作",
        "sentence": "His great speech inspired many students to work harder.",
        "sentenceZh": "他精彩的演講激勵了許多學生更努力。",
        "otherForms": "inspires (三單), inspiring (ing型(去e加ing)), inspired (過去式/分詞)"
    },
    {
        "word": "judge",
        "pos": "v. / n.",
        "meaning": "判斷",
        "theme": "心智動作",
        "sentence": "You shouldn't judge a book by its cover.",
        "sentenceZh": "你不應該以貌取人（勿以書封評斷一本書）。",
        "otherForms": "judges (複數型), judges (三單), judging (ing型(去e加ing)), judged (過去式/分詞)"
    },
    {
        "word": "know",
        "pos": "v.",
        "meaning": "知道",
        "theme": "心智動作",
        "sentence": "Do you know how to play this grammar repair game?",
        "sentenceZh": "你知道怎麼玩這個語法修復遊戲嗎？",
        "otherForms": "knows (三單), knowing (ing型), knew (過去式(不規則)), known (過去分詞(不規則))"
    },
    {
        "word": "mind",
        "pos": "v. / n.",
        "meaning": "介意",
        "theme": "心智動作",
        "sentence": "Do you mind if I sit in this empty seat?",
        "sentenceZh": "你介意我坐這個空位嗎？",
        "otherForms": "minds (複數型), minds (三單), minding (ing型), minded (過去式/分詞)"
    },
    {
        "word": "miss",
        "pos": "v.",
        "meaning": "想念 / 未擊中",
        "theme": "心智動作",
        "sentence": "I really miss my old friends from elementary school.",
        "sentenceZh": "我真的很想念我小學的老朋友。",
        "otherForms": "misses (三單(加es)), missing (ing型), missed (過去式/分詞)"
    },
    {
        "word": "notice",
        "pos": "v. / n.",
        "meaning": "注意到",
        "theme": "心智動作",
        "sentence": "Did you notice his cool new shoes today?",
        "sentenceZh": "你今天有注意到他酷炫的新鞋子嗎？",
        "otherForms": "notices (三單), noticing (ing型(去e加ing)), noticed (過去式/分詞)"
    },
    {
        "word": "obey",
        "pos": "v.",
        "meaning": "服從",
        "theme": "心智動作",
        "sentence": "Everyone must obey the traffic rules for safety.",
        "sentenceZh": "為了安全每個人都必須遵守交通規則。",
        "otherForms": "obeys (三單), obeying (ing型), obeyed (過去式/分詞)"
    },
    {
        "word": "plan",
        "pos": "v. / n.",
        "meaning": "計劃",
        "theme": "心智動作",
        "sentence": "We plan to visit Japan during the summer vacation.",
        "sentenceZh": "我們計畫暑假去日本玩。",
        "otherForms": "plans (複數型), plans (三單), planning (ing型(重複字尾)), planned (過去式/分詞(重複字尾))"
    },
    {
        "word": "prefer",
        "pos": "v.",
        "meaning": "偏好 / 更喜歡",
        "theme": "心智動作",
        "sentence": "I prefer tea to coffee.",
        "sentenceZh": "比起咖啡，我更喜歡茶。",
        "otherForms": "prefers (三單), preferred (過去/過去分詞), preferring (現在分詞)"
    },
    {
        "word": "prepare",
        "pos": "v.",
        "meaning": "準備",
        "theme": "心智動作",
        "sentence": "The mother is preparing a rich dinner for her family.",
        "sentenceZh": "媽媽正在為家人準備一頓豐盛的晚餐。",
        "otherForms": "prepares (三單), preparing (ing型(去e加ing)), prepared (過去式/分詞)"
    },
    {
        "word": "realize",
        "pos": "v.",
        "meaning": "意識到",
        "theme": "心智動作",
        "sentence": "He finally realized that he had made a big mistake.",
        "sentenceZh": "他終於意識到他犯了一個大錯。",
        "otherForms": "realizes (三單), realizing (ing型(去e加ing)), realized (過去式/分詞)"
    },
    {
        "word": "refuse",
        "pos": "v.",
        "meaning": "拒絕",
        "theme": "心智動作",
        "sentence": "He refused to take the money because it wasn't his.",
        "sentenceZh": "他拒絕拿那些錢因為那不是他的。",
        "otherForms": "refuses (三單), refusing (ing型(去e加ing)), refused (過去式/分詞)"
    },
    {
        "word": "reject",
        "pos": "v.",
        "meaning": "拒絕",
        "theme": "心智動作",
        "sentence": "The company rejected his design for the new game character.",
        "sentenceZh": "公司拒絕了他對新遊戲角色的設計。",
        "otherForms": "rejects (三單), rejecting (ing型), rejected (過去式/分詞)"
    },
    {
        "word": "remember",
        "pos": "v.",
        "meaning": "記得",
        "theme": "心智動作",
        "sentence": "Do you remember the vocabulary words we learned yesterday?",
        "sentenceZh": "你記得我們昨天學的單字嗎？",
        "otherForms": "remembers (三單), remembering (ing型), remembered (過去式/分詞)"
    },
    {
        "word": "respect",
        "pos": "v.",
        "meaning": "尊重",
        "theme": "心智動作",
        "sentence": "You should always respect your teachers and parents.",
        "sentenceZh": "你應該永遠尊重你的老師和父母。",
        "otherForms": "respects (三單), respecting (ing型), respected (過去式/分詞)"
    },
    {
        "word": "select",
        "pos": "v.",
        "meaning": "選擇",
        "theme": "心智動作",
        "sentence": "Please select the correct answer from the list below.",
        "sentenceZh": "請從下面的清單中選擇正確的答案。",
        "otherForms": "selects (三單), selecting (ing型), selected (過去式/分詞)"
    },
    {
        "word": "support",
        "pos": "v.",
        "meaning": "支持",
        "theme": "心智動作",
        "sentence": "A good friend will always support you when you are sad.",
        "sentenceZh": "當你難過時，好朋友總會支持你。",
        "otherForms": "supports (三單), supporting (ing型), supported (過去式/分詞)"
    },
    {
        "word": "think",
        "pos": "v.",
        "meaning": "思考",
        "theme": "心智動作",
        "sentence": "I think this interactive game is very helpful for learning.",
        "sentenceZh": "我覺得這個互動遊戲對學習很有幫助。",
        "otherForms": "thinks (三單), thinking (ing型), thought (過去式(不規則)), thought (過去分詞(不規則))"
    },
    {
        "word": "trust",
        "pos": "v. / n.",
        "meaning": "信任",
        "theme": "心智動作",
        "sentence": "You can trust him; he never tells lies.",
        "sentenceZh": "你可以信任他，他從不說謊。",
        "otherForms": "trusts (三單), trusting (ing型), trusted (過去式/分詞)"
    },
    {
        "word": "try",
        "pos": "v.",
        "meaning": "嘗試",
        "theme": "心智動作",
        "sentence": "Don't give up! Just try your best to swing the racket.",
        "sentenceZh": "別放棄！盡全力去揮拍試試看。",
        "otherForms": "tries (三單(去y加ies)), trying (ing型), tried (過去式/分詞(去y加ied))"
    },
    {
        "word": "wake",
        "pos": "v.",
        "meaning": "醒來",
        "theme": "心智動作",
        "sentence": "My alarm clock usually wakes me up at six o'clock.",
        "sentenceZh": "我的鬧鐘通常在六點叫我醒來。",
        "otherForms": "wakes (三單), waking (ing型(去e加ing)), woke (過去式(不規則)), woken (過去分詞(不規則))"
    },
    {
        "word": "want",
        "pos": "v.",
        "meaning": "想要",
        "theme": "心智動作",
        "sentence": "I want to be an English teacher when I grow up.",
        "sentenceZh": "我長大後想要當一名英文老師。",
        "otherForms": "wants (三單), wanting (ing型), wanted (過去式/分詞)"
    },
    {
        "word": "wish",
        "pos": "v. / n.",
        "meaning": "希望",
        "theme": "心智動作",
        "sentence": "Make a wish before you blow out the birthday candles!",
        "sentenceZh": "吹熄生日蠟燭前先許個願吧！",
        "otherForms": "wishes (複數型(加es)), wishes (三單(加es)), wishing (ing型), wished (過去式/分詞)"
    },
    {
        "word": "wonder",
        "pos": "v.",
        "meaning": "想知道",
        "theme": "心智動作",
        "sentence": "I wonder how you can pass the test without studying.",
        "sentenceZh": "我想知道為什麼你能沒讀書通過考試。",
        "otherForms": "wonders (三單), wondering (ing型), wondered (過去式/分詞)"
    },
    {
        "word": "affect",
        "pos": "v.",
        "meaning": "影響",
        "theme": "狀態動作",
        "sentence": "The bad weather will affect our plans to play basketball.",
        "sentenceZh": "壞天氣將會影響我們打籃球的計畫。",
        "otherForms": "affects (三單), affecting (ing型), affected (過去式/分詞)"
    },
    {
        "word": "appear",
        "pos": "v.",
        "meaning": "出現",
        "theme": "狀態動作",
        "sentence": "A beautiful rainbow appeared in the sky after the rain.",
        "sentenceZh": "雨後天空中出現了一道美麗的彩虹。",
        "otherForms": "appears (三單), appearing (ing型), appeared (過去式/分詞)"
    },
    {
        "word": "become",
        "pos": "v.",
        "meaning": "變成",
        "theme": "狀態動作",
        "sentence": "The little green caterpillar will become a butterfly.",
        "sentenceZh": "綠色小毛毛蟲將會變成蝴蝶。",
        "otherForms": "becomes (三單), becoming (ing型(去e加ing)), became (過去式(不規則)), become (過去分詞(不規則))"
    },
    {
        "word": "begin",
        "pos": "v.",
        "meaning": "開始",
        "theme": "狀態動作",
        "sentence": "The English class will begin in five minutes.",
        "sentenceZh": "英文課將在五分鐘後開始。",
        "otherForms": "begins (三單), beginning (ing型(重複字尾)), began (過去式(不規則)), begun (過去分詞(不規則))"
    },
    {
        "word": "belong",
        "pos": "v.",
        "meaning": "屬於",
        "theme": "狀態動作",
        "sentence": "This red dictionary belongs to the school library.",
        "sentenceZh": "這本紅字典屬於學校圖書館。",
        "otherForms": "belongs (三單), belonging (ing型), belonged (過去式/分詞)"
    },
    {
        "word": "burst",
        "pos": "v.",
        "meaning": "爆發",
        "theme": "狀態動作",
        "sentence": "The balloon burst loudly when he sat on it.",
        "sentenceZh": "當他坐上去時，氣球發出很大聲的爆破。",
        "otherForms": "bursts (三單), bursting (ing型), burst (過去式(不規則同型)), burst (過去分詞(不規則同型))"
    },
    {
        "word": "cancel",
        "pos": "v.",
        "meaning": "取消",
        "theme": "狀態動作",
        "sentence": "The school sports day was canceled because of the typhoon.",
        "sentenceZh": "學校運動會因為颱風被取消了。",
        "otherForms": "cancels (三單), canceling (ing型), canceled (過去式/分詞)"
    },
    {
        "word": "complete",
        "pos": "v. / adj.",
        "meaning": "完成 / 完整的",
        "theme": "狀態動作",
        "sentence": "You must complete the vocabulary test by Friday.",
        "sentenceZh": "你必須在星期五前完成單字測驗。",
        "otherForms": "completes (三單), completing (ing型(去e加ing)), completed (過去式/分詞)"
    },
    {
        "word": "continue",
        "pos": "v.",
        "meaning": "繼續",
        "theme": "狀態動作",
        "sentence": "Please continue reading the story on page twenty.",
        "sentenceZh": "請繼續閱讀第二十頁的故事。",
        "otherForms": "continues (三單), continuing (ing型(去e加ing)), continued (過去式/分詞)"
    },
    {
        "word": "cover",
        "pos": "n. / v.",
        "meaning": "覆蓋",
        "theme": "狀態動作",
        "sentence": "Snow covered the mountains during the cold winter.",
        "sentenceZh": "寒冬時雪覆蓋了群山。",
        "otherForms": "covers (複數型), covers (三單), covering (ing型), covered (過去式/分詞)"
    },
    {
        "word": "cut",
        "pos": "v.",
        "meaning": "切割",
        "theme": "狀態動作",
        "sentence": "She used a sharp knife to cut the birthday cake.",
        "sentenceZh": "她用一把利刀切生日蛋糕。",
        "otherForms": "cuts (三單), cutting (ing型(重複字尾)), cut (過去式(不規則同型)), cut (過去分詞(不規則同型))"
    },
    {
        "word": "decrease",
        "pos": "v.",
        "meaning": "減少",
        "theme": "狀態動作",
        "sentence": "The number of students in the school is decreasing every year.",
        "sentenceZh": "學校裡的學生人數每年都在減少。",
        "otherForms": "decreases (三單), decreasing (ing型(去e加ing)), decreased (過去式/分詞)"
    },
    {
        "word": "depend",
        "pos": "v.",
        "meaning": "依賴",
        "theme": "狀態動作",
        "sentence": "Our picnic tomorrow will depend on the weather.",
        "sentenceZh": "我們明天的野餐將取決於天氣。",
        "otherForms": "depends (三單), depending (ing型), depended (過去式/分詞)"
    },
    {
        "word": "develop",
        "pos": "v.",
        "meaning": "發展",
        "theme": "狀態動作",
        "sentence": "He wants to develop a fun web game for his English class.",
        "sentenceZh": "他想為他的英文課開發一個有趣的網頁遊戲。",
        "otherForms": "develops (三單), developing (ing型), developed (過去式/分詞)"
    },
    {
        "word": "die",
        "pos": "v.",
        "meaning": "死亡",
        "theme": "狀態動作",
        "sentence": "The plants will die if you don't give them water.",
        "sentenceZh": "如果你不給植物澆水，它們會死亡。",
        "otherForms": "dies (三單), dying (ing型(去ie加ying)), died (過去式/分詞)"
    },
    {
        "word": "disappear",
        "pos": "v.",
        "meaning": "消失",
        "theme": "狀態動作",
        "sentence": "The sun slowly disappeared behind the high mountains.",
        "sentenceZh": "太陽慢慢地消失在高山後方。",
        "otherForms": "disappears (三單), disappearing (ing型), disappeared (過去式/分詞)"
    },
    {
        "word": "divide",
        "pos": "v.",
        "meaning": "分割",
        "theme": "狀態動作",
        "sentence": "The teacher divided the class into four small groups.",
        "sentenceZh": "老師把全班分成四個小組。",
        "otherForms": "divides (三單), dividing (ing型(去e加ing)), divided (過去式/分詞)"
    },
    {
        "word": "ease",
        "pos": "v.",
        "meaning": "緩和",
        "theme": "狀態動作",
        "sentence": "The medicine helped to ease the pain in his leg.",
        "sentenceZh": "藥物幫助緩和了他腿部的疼痛。",
        "otherForms": "eases (三單), easing (ing型(去e加ing)), eased (過去式/分詞)"
    },
    {
        "word": "end",
        "pos": "n. / v.",
        "meaning": "結束",
        "theme": "狀態動作",
        "sentence": "The movie will end in about twenty minutes.",
        "sentenceZh": "電影大約二十分鐘後會結束。",
        "otherForms": "ends (複數型), ends (三單), ending (ing型), ended (過去式/分詞)"
    },
    {
        "word": "fail",
        "pos": "v.",
        "meaning": "失敗",
        "theme": "狀態動作",
        "sentence": "If you don't review your words, you might fail the test.",
        "sentenceZh": "如果你不複習單字，你考試可能會不及格。",
        "otherForms": "fails (三單), failing (ing型), failed (過去式/分詞)"
    },
    {
        "word": "fall",
        "pos": "v. / n.",
        "meaning": "掉落",
        "theme": "狀態動作",
        "sentence": "The beautiful red leaves fall from the trees in autumn.",
        "sentenceZh": "美麗的紅葉在秋天從樹上掉落。",
        "otherForms": "falls (三單), falling (ing型), fell (過去式(不規則)), fallen (過去分詞(不規則))"
    },
    {
        "word": "fill",
        "pos": "v.",
        "meaning": "填滿",
        "theme": "狀態動作",
        "sentence": "Please fill this glass with cold water.",
        "sentenceZh": "請把這個杯子裝滿冷水。",
        "otherForms": "fills (三單), filling (ing型), filled (過去式/分詞)"
    },
    {
        "word": "finish",
        "pos": "v.",
        "meaning": "完成",
        "theme": "狀態動作",
        "sentence": "He finished his math homework before dinner time.",
        "sentenceZh": "他在晚餐時間前完成了數學作業。",
        "otherForms": "finishes (三單(加es)), finishing (ing型), finished (過去式/分詞)"
    },
    {
        "word": "fit",
        "pos": "v.",
        "meaning": "適合",
        "theme": "狀態動作",
        "sentence": "These old shoes are too small; they don't fit me anymore.",
        "sentenceZh": "這些舊鞋太小了，它們不再適合我了。",
        "otherForms": "fits (三單), fitting (ing型(重複字尾)), fit/fitted (過去式/分詞(不規則))"
    },
    {
        "word": "flash",
        "pos": "v. / n.",
        "meaning": "閃光 / 閃爍",
        "theme": "狀態動作",
        "sentence": "Did you see a flash of lightning?",
        "sentenceZh": "你有看到閃電的閃光嗎？",
        "otherForms": "flashes (複數/三單), flashed (過去/過去分詞), flashing (現在分詞)"
    },
    {
        "word": "form",
        "pos": "n. / v.",
        "meaning": "形成",
        "theme": "狀態動作",
        "sentence": "The dark clouds began to form a huge storm.",
        "sentenceZh": "烏雲開始形成一場巨大的暴風雨。",
        "otherForms": "forms (複數型), forms (三單), forming (ing型), formed (過去式/分詞)"
    },
    {
        "word": "gain",
        "pos": "v.",
        "meaning": "增加",
        "theme": "狀態動作",
        "sentence": "Eating too much fast food will make you gain weight.",
        "sentenceZh": "吃太多速食會讓你增加體重（變胖）。",
        "otherForms": "gains (三單), gaining (ing型), gained (過去式/分詞)"
    },
    {
        "word": "get",
        "pos": "v.",
        "meaning": "得到",
        "theme": "狀態動作",
        "sentence": "I got a perfect score on my English grammar test!",
        "sentenceZh": "我的英文文法考試得到了滿分！",
        "otherForms": "gets (三單), getting (ing型(重複字尾)), got (過去式(不規則)), gotten/got (過去分詞(不規則))"
    },
    {
        "word": "grow",
        "pos": "v.",
        "meaning": "成長 / 生長",
        "theme": "狀態動作",
        "sentence": "Trees need sunlight and water to grow tall and strong.",
        "sentenceZh": "樹木需要陽光和水分才能長得高大強壯。",
        "otherForms": "grows (三單), growing (ing型), grew (過去式(不規則)), grown (過去分詞(不規則))"
    },
    {
        "word": "happen",
        "pos": "v.",
        "meaning": "發生",
        "theme": "狀態動作",
        "sentence": "I don't know what happened to my computer screen.",
        "sentenceZh": "我不知道我的電腦螢幕發生了什麼事。",
        "otherForms": "happens (三單), happening (ing型), happened (過去式/分詞)"
    },
    {
        "word": "hurry",
        "pos": "v.",
        "meaning": "匆忙",
        "theme": "狀態動作",
        "sentence": "We must hurry up, or we will miss the train!",
        "sentenceZh": "我們必須快一點，否則會錯過火車！",
        "otherForms": "hurries (三單(去y加ies)), hurrying (ing型), hurried (過去式/分詞(去y加ied))"
    },
    {
        "word": "improve",
        "pos": "v.",
        "meaning": "改善",
        "theme": "狀態動作",
        "sentence": "Reading every day is a good way to improve your English.",
        "sentenceZh": "每天閱讀是改善英文的好方法。",
        "otherForms": "improves (三單), improving (ing型(去e加ing)), improved (過去式/分詞)"
    },
    {
        "word": "increase",
        "pos": "v.",
        "meaning": "增加",
        "theme": "狀態動作",
        "sentence": "The price of fresh vegetables increased after the typhoon.",
        "sentenceZh": "颱風過後新鮮蔬菜的價格增加了。",
        "otherForms": "increases (三單), increasing (ing型(去e加ing)), increased (過去式/分詞)"
    },
    {
        "word": "indicate",
        "pos": "v.",
        "meaning": "指出 / 暗示",
        "theme": "狀態動作",
        "sentence": "The sign indicates that you should turn left here.",
        "sentenceZh": "標誌指出你應該在這裡左轉。",
        "otherForms": "indicates (三單), indicating (ing型(去e加ing)), indicated (過去式/分詞)"
    },
    {
        "word": "keep",
        "pos": "v.",
        "meaning": "保持",
        "theme": "狀態動作",
        "sentence": "Please keep quiet while taking the final exam.",
        "sentenceZh": "考期末考時請保持安靜。",
        "otherForms": "keeps (三單), keeping (ing型), kept (過去式(不規則)), kept (過去分詞(不規則))"
    },
    {
        "word": "live",
        "pos": "v.",
        "meaning": "居住 / 生活",
        "theme": "狀態動作",
        "sentence": "My grandparents live in a quiet town in Yunlin County.",
        "sentenceZh": "我祖父母住在雲林縣一個安靜的城鎮。",
        "otherForms": "lives (三單), living (ing型(去e加ing)), lived (過去式/分詞)"
    },
    {
        "word": "lose",
        "pos": "v.",
        "meaning": "輸掉 / 失去",
        "theme": "狀態動作",
        "sentence": "The team felt sad because they lost the final game.",
        "sentenceZh": "隊伍感到難過因為他們輸了最後一場比賽。",
        "otherForms": "loses (三單), losing (ing型(去e加ing)), lost (過去式(不規則)), lost (過去分詞(不規則))"
    },
    {
        "word": "maintain",
        "pos": "v.",
        "meaning": "維持 / 保養",
        "theme": "狀態動作",
        "sentence": "It's important to maintain a healthy weight.",
        "sentenceZh": "維持健康的體重很重要。",
        "otherForms": "maintains (三單), maintained (過去/過去分詞), maintaining (現在分詞)"
    },
    {
        "word": "match",
        "pos": "v. / n.",
        "meaning": "匹配",
        "theme": "狀態動作",
        "sentence": "Please match the English words with their Chinese meanings.",
        "sentenceZh": "請把英文單字和它們的中文意思配對。",
        "otherForms": "matches (複數型(加es)), matches (三單(加es)), matching (ing型), matched (過去式/分詞)"
    },
    {
        "word": "mean",
        "pos": "v.",
        "meaning": "意思是",
        "theme": "狀態動作",
        "sentence": "What does this difficult vocabulary word mean?",
        "sentenceZh": "這個困難的單字是什麼意思？",
        "otherForms": "means (三單), meaning (ing型), meant (過去式(不規則)), meant (過去分詞(不規則))"
    },
    {
        "word": "need",
        "pos": "v. / n.",
        "meaning": "需要",
        "theme": "狀態動作",
        "sentence": "You need a good racket to play badminton well.",
        "sentenceZh": "你需要一把好球拍才能把羽球打好。",
        "otherForms": "needs (複數型), needs (三單), needing (ing型), needed (過去式/分詞)"
    },
    {
        "word": "own",
        "pos": "v. / adj.",
        "meaning": "擁有",
        "theme": "狀態動作",
        "sentence": "I finally have my very own cell phone.",
        "sentenceZh": "我終於擁有了我自己專屬的手機。",
        "otherForms": "owns (三單), owning (ing型), owned (過去式/分詞)"
    },
    {
        "word": "pause",
        "pos": "v.",
        "meaning": "暫停",
        "theme": "狀態動作",
        "sentence": "Please pause the video so I can copy the sentence.",
        "sentenceZh": "請暫停影片讓我能抄寫這個句子。",
        "otherForms": "pauses (複數型), pauses (三單), pausing (ing型(去e加ing)), paused (過去式/分詞)"
    },
    {
        "word": "pop",
        "pos": "v.",
        "meaning": "突然出現",
        "theme": "狀態動作",
        "sentence": "The balloon popped suddenly and scared the baby.",
        "sentenceZh": "氣球突然爆破嚇到了小嬰兒。",
        "otherForms": "pops (三單), popping (ing型(重複字尾)), popped (過去式/分詞(重複字尾))"
    },
    {
        "word": "raise",
        "pos": "v.",
        "meaning": "提高 / 撫養",
        "theme": "狀態動作",
        "sentence": "Please raise your hand if you know the correct answer.",
        "sentenceZh": "如果你知道正確答案請舉手。",
        "otherForms": "raises (三單), raising (ing型(去e加ing)), raised (過去式/分詞)"
    },
    {
        "word": "rest",
        "pos": "v. / n.",
        "meaning": "休息",
        "theme": "狀態動作",
        "sentence": "You look tired; you should go home and rest.",
        "sentenceZh": "你看起來很累，你應該回家休息。",
        "otherForms": "rests (複數型), rests (三單), resting (ing型), rested (過去式/分詞)"
    },
    {
        "word": "return",
        "pos": "v.",
        "meaning": "歸還",
        "theme": "狀態動作",
        "sentence": "Don't forget to return the books to the library tomorrow.",
        "sentenceZh": "記得明天要把書歸還給圖書館。",
        "otherForms": "returns (三單), returning (ing型), returned (過去式/分詞)"
    },
    {
        "word": "rise",
        "pos": "v.",
        "meaning": "上升",
        "theme": "狀態動作",
        "sentence": "The sun rises in the east every morning.",
        "sentenceZh": "太陽每天早上從東方升起。",
        "otherForms": "rises (三單), rising (ing型(去e加ing)), rose (過去式(不規則)), risen (過去分詞(不規則))"
    },
    {
        "word": "roll",
        "pos": "v.",
        "meaning": "滾動",
        "theme": "狀態動作",
        "sentence": "The ball rolled slowly across the classroom floor.",
        "sentenceZh": "球緩慢地滾過教室地板。",
        "otherForms": "rolls (三單), rolling (ing型), rolled (過去式/分詞)"
    },
    {
        "word": "ruin",
        "pos": "v.",
        "meaning": "毀滅",
        "theme": "狀態動作",
        "sentence": "The heavy rain ruined our plans for an outdoor barbecue.",
        "sentenceZh": "大雨毀了我們戶外烤肉的計畫。",
        "otherForms": "ruins (三單), ruining (ing型), ruined (過去式/分詞)"
    },
    {
        "word": "rush",
        "pos": "v.",
        "meaning": "趕緊",
        "theme": "狀態動作",
        "sentence": "He had to rush to the station to catch his train.",
        "sentenceZh": "他必須趕去車站搭火車。",
        "otherForms": "rushes (三單(加es)), rushing (ing型), rushed (過去式/分詞)"
    },
    {
        "word": "seem",
        "pos": "v.",
        "meaning": "似乎",
        "theme": "狀態動作",
        "sentence": "The grammar rule seems difficult, but it's actually easy.",
        "sentenceZh": "這個文法規則似乎很難，但其實很簡單。",
        "otherForms": "seems (三單), seeming (ing型), seemed (過去式/分詞)"
    },
    {
        "word": "shake",
        "pos": "v.",
        "meaning": "搖動",
        "theme": "狀態動作",
        "sentence": "The dog shook its body to get dry after a bath.",
        "sentenceZh": "狗洗澡後搖動身體把水弄乾。",
        "otherForms": "shakes (三單), shaking (ing型(去e加ing)), shook (過去式(不規則)), shaken (過去分詞(不規則))"
    },
    {
        "word": "start",
        "pos": "v.",
        "meaning": "開始",
        "theme": "狀態動作",
        "sentence": "The exciting movie will start in five minutes.",
        "sentenceZh": "刺激的電影將在五分鐘後開始。",
        "otherForms": "starts (三單), starting (ing型), started (過去式/分詞)"
    },
    {
        "word": "stay",
        "pos": "v.",
        "meaning": "停留",
        "theme": "狀態動作",
        "sentence": "You should stay home and rest if you have a fever.",
        "sentenceZh": "如果你發燒了就應該留在家裡休息。",
        "otherForms": "stays (三單), staying (ing型), stayed (過去式/分詞)"
    },
    {
        "word": "stop",
        "pos": "v. / n.",
        "meaning": "停止",
        "theme": "狀態動作",
        "sentence": "The bus driver stopped the bus at the red light.",
        "sentenceZh": "公車司機在紅燈時把公車停了下來。",
        "otherForms": "stops (三單), stopping (ing型(重複字尾)), stopped (過去式/分詞(重複字尾))"
    },
    {
        "word": "succeed",
        "pos": "v.",
        "meaning": "成功",
        "theme": "狀態動作",
        "sentence": "If you practice every day, you will succeed in learning English.",
        "sentenceZh": "如果你每天練習，你在學習英文上一定會成功。",
        "otherForms": "succeeds (三單), succeeding (ing型), succeeded (過去式/分詞)"
    },
    {
        "word": "survive",
        "pos": "v.",
        "meaning": "生存",
        "theme": "狀態動作",
        "sentence": "Camels can survive in the hot desert with very little water.",
        "sentenceZh": "駱駝能在極少水分的炎熱沙漠中生存。",
        "otherForms": "survives (三單), surviving (ing型(去e加ing)), survived (過去式/分詞)"
    },
    {
        "word": "wear",
        "pos": "v.",
        "meaning": "穿著",
        "theme": "狀態動作",
        "sentence": "Students must wear their uniforms to school on Monday.",
        "sentenceZh": "學生星期一必須穿制服上學。",
        "otherForms": "wears (三單), wearing (ing型), wore (過去式(不規則)), worn (過去分詞(不規則))"
    },
    {
        "word": "win",
        "pos": "v.",
        "meaning": "贏",
        "theme": "狀態動作",
        "sentence": "Our school team won the gold medal in the badminton race.",
        "sentenceZh": "我們校隊在羽球競賽中贏得了金牌。",
        "otherForms": "wins (複數型/ 三單), winning (ing型(重複字尾)), won (過去/ 過去分詞(不規則))"
    },
    {
        "word": "act",
        "pos": "v. / n.",
        "meaning": "表演 / 行動",
        "theme": "行為動作",
        "sentence": "He acted like a brave hero in the school play.",
        "sentenceZh": "他在學校話劇中扮演了一名勇敢的英雄。",
        "otherForms": "acts (複數型), acts (三單), acting (ing型), acted (過去式/分詞)"
    },
    {
        "word": "add",
        "pos": "v.",
        "meaning": "增加",
        "theme": "行為動作",
        "sentence": "You can add some sugar to your coffee if it is too bitter.",
        "sentenceZh": "如果咖啡太苦，你可以加一點糖。",
        "otherForms": "adds (三單), adding (ing型), added (過去式/分詞)"
    },
    {
        "word": "arrange",
        "pos": "v.",
        "meaning": "安排",
        "theme": "行為動作",
        "sentence": "The teacher arranged the desks in a big circle.",
        "sentenceZh": "老師把書桌安排成一個大圓圈。",
        "otherForms": "arranges (三單), arranging (ing型(去e加ing)), arranged (過去式/分詞)"
    },
    {
        "word": "attack",
        "pos": "v.",
        "meaning": "攻擊",
        "theme": "行為動作",
        "sentence": "The fierce tiger suddenly attacked the small animal.",
        "sentenceZh": "兇猛的老虎突然攻擊了那隻小動物。",
        "otherForms": "attacks (複數型), attacks (三單), attacking (ing型), attacked (過去式/分詞)"
    },
    {
        "word": "avoid",
        "pos": "v.",
        "meaning": "避免",
        "theme": "行為動作",
        "sentence": "You should try to avoid making the same mistake twice.",
        "sentenceZh": "你應該盡量避免犯兩次同樣的錯誤。",
        "otherForms": "avoids (三單), avoiding (ing型), avoided (過去式/分詞)"
    },
    {
        "word": "bake",
        "pos": "v.",
        "meaning": "烘烤",
        "theme": "行為動作",
        "sentence": "My grandmother is baking a chocolate cake in the kitchen.",
        "sentenceZh": "我奶奶正在廚房烤巧克力蛋糕。",
        "otherForms": "bakes (三單), baking (ing型(去e加ing)), baked (過去式/分詞)"
    },
    {
        "word": "bathe",
        "pos": "v.",
        "meaning": "洗澡",
        "theme": "行為動作",
        "sentence": "I usually bathe my dog on Sunday morning.",
        "sentenceZh": "我通常在星期日早上幫我的狗洗澡。",
        "otherForms": "bathes (三單), bathing (ing型(去e加ing)), bathed (過去式/分詞)"
    },
    {
        "word": "boil",
        "pos": "v.",
        "meaning": "煮沸",
        "theme": "行為動作",
        "sentence": "The water will boil when the temperature reaches 100 degrees.",
        "sentenceZh": "當溫度達到 100 度時水就會沸騰。",
        "otherForms": "boils (三單), boiling (ing型), boiled (過去式/分詞)"
    },
    {
        "word": "bow",
        "pos": "v.",
        "meaning": "鞠躬",
        "theme": "行為動作",
        "sentence": "The students bowed to say thank you to the teacher.",
        "sentenceZh": "學生們鞠躬向老師說謝謝。",
        "otherForms": "bows (複數型), bows (三單), bowing (ing型), bowed (過去式/分詞)"
    },
    {
        "word": "break",
        "pos": "v.",
        "meaning": "打破",
        "theme": "行為動作",
        "sentence": "Be careful, don't break that expensive glass!",
        "sentenceZh": "小心，別打破那個昂貴的玻璃杯！",
        "otherForms": "breaks (三單), breaking (ing型), broke (過去式(不規則)), broken (過去分詞(不規則))"
    },
    {
        "word": "bring",
        "pos": "v.",
        "meaning": "帶來",
        "theme": "行為動作",
        "sentence": "Remember to bring your English textbook to class tomorrow.",
        "sentenceZh": "記得明天帶你的英文課本來上課。",
        "otherForms": "brings (三單), bringing (ing型), brought (過去式(不規則)), brought (過去分詞(不規則))"
    },
    {
        "word": "broadcast",
        "pos": "v.",
        "meaning": "廣播",
        "theme": "行為動作",
        "sentence": "The news was broadcast on television last night.",
        "sentenceZh": "昨晚電視廣播了這則新聞。",
        "otherForms": "broadcasts (三單), broadcasting (ing型), broadcast (過去式/分詞(不規則同型))"
    },
    {
        "word": "burn",
        "pos": "v.",
        "meaning": "燒焦",
        "theme": "行為動作",
        "sentence": "He cooked the meat too long, and it started to burn.",
        "sentenceZh": "他把肉煮太久，它開始燒焦了。",
        "otherForms": "burns (三單), burning (ing型), burned/burnt (過去式/分詞(不規則))"
    },
    {
        "word": "call",
        "pos": "v. / n.",
        "meaning": "打電話 / 呼叫",
        "theme": "行為動作",
        "sentence": "I will call my mother when I arrive at the station.",
        "sentenceZh": "我到車站時會打電話給我媽媽。",
        "otherForms": "calls (複數型), calls (三單), calling (ing型), called (過去式/分詞)"
    },
    {
        "word": "carry",
        "pos": "v.",
        "meaning": "攜帶",
        "theme": "行為動作",
        "sentence": "Can you help me carry these heavy boxes to the classroom?",
        "sentenceZh": "你能幫我把這些重箱子搬去教室嗎？",
        "otherForms": "carries (三單(去y加ies)), carrying (ing型), carried (過去式/分詞(去y加ied))"
    },
    {
        "word": "check",
        "pos": "v. / n.",
        "meaning": "檢查",
        "theme": "行為動作",
        "sentence": "Please check your answers carefully before handing in the test.",
        "sentenceZh": "交卷前請仔細檢查你的答案。",
        "otherForms": "checks (三單), checking (ing型), checked (過去式/分詞)"
    },
    {
        "word": "close",
        "pos": "v. / adj.",
        "meaning": "關閉",
        "theme": "行為動作",
        "sentence": "Please close the window because it is raining outside.",
        "sentenceZh": "外面在下雨，請把窗戶關上。",
        "otherForms": "closes (三單), closing (ing型(去e加ing)), closed (過去式/分詞)"
    },
    {
        "word": "collect",
        "pos": "v.",
        "meaning": "收集",
        "theme": "行為動作",
        "sentence": "She likes to collect beautiful stamps from different countries.",
        "sentenceZh": "她喜歡收集不同國家的美麗郵票。",
        "otherForms": "collects (三單), collecting (ing型), collected (過去式/分詞)"
    },
    {
        "word": "contact",
        "pos": "v. / n.",
        "meaning": "接觸 / 聯絡",
        "theme": "行為動作",
        "sentence": "Please contact me if you have any questions.",
        "sentenceZh": "如果你有任何問題，請聯絡我。",
        "otherForms": "contacts (三單), contacted (過去/過去分詞), contacting (現在分詞)"
    },
    {
        "word": "cook",
        "pos": "v.",
        "meaning": "烹調",
        "theme": "行為動作",
        "sentence": "My dad is going to cook dinner for us tonight.",
        "sentenceZh": "我爸爸今晚要煮晚餐給我們吃。",
        "otherForms": "cooks (三單), cooking (ing型), cooked (過去式/分詞)"
    },
    {
        "word": "copy",
        "pos": "n. / v.",
        "meaning": "複製 / 複製品",
        "theme": "行為動作",
        "sentence": "Do not copy answers from your classmates during the exam.",
        "sentenceZh": "考試時不要抄襲同學的答案。",
        "otherForms": "copies (複數型(去y加ies)), copies (三單(去y加ies)), copying (ing型), copied (過去式/分詞(去y加ied))"
    },
    {
        "word": "correct",
        "pos": "v. / adj.",
        "meaning": "改正 / 正確的",
        "theme": "行為動作",
        "sentence": "The teacher used a red pen to correct my spelling mistakes.",
        "sentenceZh": "老師用紅筆改正了我的拼字錯誤。",
        "otherForms": "corrects (三單), correcting (ing型), corrected (過去式/分詞)"
    },
    {
        "word": "create",
        "pos": "v.",
        "meaning": "創造",
        "theme": "行為動作",
        "sentence": "He wants to create an interactive game to help students learn.",
        "sentenceZh": "他想創造一個互動遊戲來幫助學生學習。",
        "otherForms": "creates (三單), creating (ing型(去e加ing)), created (過去式/分詞)"
    },
    {
        "word": "date",
        "pos": "v. / n.",
        "meaning": "約會 / 日期",
        "theme": "行為動作",
        "sentence": "The couple has been dating for two years.",
        "sentenceZh": "這對情侶已經約會兩年了。",
        "otherForms": "dates (複數型), dates (三單), dating (ing型(去e加ing)), dated (過去式/分詞)"
    },
    {
        "word": "deal",
        "pos": "v.",
        "meaning": "處理",
        "theme": "行為動作",
        "sentence": "It is difficult to deal with a problem when you are angry.",
        "sentenceZh": "當你在生氣時是很難處理問題的。",
        "otherForms": "deals (三單), dealing (ing型), dealt (過去式(不規則)), dealt (過去分詞(不規則))"
    },
    {
        "word": "deliver",
        "pos": "v.",
        "meaning": "遞送",
        "theme": "行為動作",
        "sentence": "The mailman delivered a package to our house this morning.",
        "sentenceZh": "郵差今天早上遞送了一個包裹到我們家。",
        "otherForms": "delivers (三單), delivering (ing型), delivered (過去式/分詞)"
    },
    {
        "word": "direct",
        "pos": "v. / adj.",
        "meaning": "指導 / 直接的",
        "theme": "行為動作",
        "sentence": "The police officer directed the traffic during the rush hour.",
        "sentenceZh": "警察在尖峰時間指揮交通。",
        "otherForms": "directs (三單), directing (ing型), directed (過去式/分詞)"
    },
    {
        "word": "discover",
        "pos": "v.",
        "meaning": "發現",
        "theme": "行為動作",
        "sentence": "The scientist discovered a new type of insect in the forest.",
        "sentenceZh": "科學家在森林裡發現了一種新型昆蟲。",
        "otherForms": "discovers (三單), discovering (ing型), discovered (過去式/分詞)"
    },
    {
        "word": "download",
        "pos": "v.",
        "meaning": "下載",
        "theme": "行為動作",
        "sentence": "You can download the vocabulary app to your cell phone.",
        "sentenceZh": "你可以把單字應用程式下載到你的手機裡。",
        "otherForms": "downloads (複數型), downloads (三單), downloading (ing型), downloaded (過去式/分詞)"
    },
    {
        "word": "drop",
        "pos": "v. / n.",
        "meaning": "掉落",
        "theme": "行為動作",
        "sentence": "I accidentally dropped my pen on the floor.",
        "sentenceZh": "我不小心把筆掉到地上了。",
        "otherForms": "drops (三單), dropping (ing型(重複字尾)), dropped (過去式/分詞(重複字尾))"
    },
    {
        "word": "emphasize",
        "pos": "v.",
        "meaning": "強調",
        "theme": "行為動作",
        "sentence": "The teacher emphasized the importance of the grammar rules.",
        "sentenceZh": "老師強調了文法規則的重要性。",
        "otherForms": "emphasizes (三單), emphasizing (ing型(去e加ing)), emphasized (過去式/分詞)"
    },
    {
        "word": "employ",
        "pos": "v.",
        "meaning": "雇用",
        "theme": "行為動作",
        "sentence": "The company plans to employ more engineers this year.",
        "sentenceZh": "公司計畫今年雇用更多工程師。",
        "otherForms": "employs (三單), employing (ing型), employed (過去式/分詞)"
    },
    {
        "word": "feed",
        "pos": "v.",
        "meaning": "餵食",
        "theme": "行為動作",
        "sentence": "Don't forget to feed the cat before you go to school.",
        "sentenceZh": "去上學前別忘了餵貓。",
        "otherForms": "feeds (三單), feeding (ing型), fed (過去式(不規則)), fed (過去分詞(不規則))"
    },
    {
        "word": "fight",
        "pos": "v. / n.",
        "meaning": "打架",
        "theme": "行為動作",
        "sentence": "Good students should solve problems calmly, not by fighting.",
        "sentenceZh": "好學生應該冷靜解決問題，而不是靠打架。",
        "otherForms": "fights (三單), fighting (ing型), fought (過去式(不規則)), fought (過去分詞(不規則))"
    },
    {
        "word": "find",
        "pos": "v.",
        "meaning": "找到",
        "theme": "行為動作",
        "sentence": "I cannot find my keys anywhere in the room.",
        "sentenceZh": "我在房間裡到處都找不到我的鑰匙。",
        "otherForms": "finds (三單), finding (ing型), found (過去式(不規則)), found (過去分詞(不規則))"
    },
    {
        "word": "force",
        "pos": "n. / v.",
        "meaning": "力量 / 強迫",
        "theme": "行為動作",
        "sentence": "You can't force her to do something she hates.",
        "sentenceZh": "你不能強迫她做她討厭的事。",
        "otherForms": "forces (複數/三單), forced (過去/過去分詞), forcing (現在分詞)"
    },
    {
        "word": "fry",
        "pos": "v.",
        "meaning": "油炸",
        "theme": "行為動作",
        "sentence": "We are going to fry some chicken for dinner.",
        "sentenceZh": "我們晚餐打算炸一些雞肉。",
        "otherForms": "fries (三單(去y加ies)), frying (ing型), fried (過去式/分詞(去y加ied))"
    },
    {
        "word": "gather",
        "pos": "v.",
        "meaning": "聚集",
        "theme": "行為動作",
        "sentence": "The students gathered in the gym to hear the principal's speech.",
        "sentenceZh": "學生們聚集在體育館聽校長演講。",
        "otherForms": "gathers (三單), gathering (ing型), gathered (過去式/分詞)"
    },
    {
        "word": "guide",
        "pos": "n. / v.",
        "meaning": "引導",
        "theme": "行為動作",
        "sentence": "The map will guide you to the famous old temple.",
        "sentenceZh": "地圖會引導你前往那座著名的古廟。",
        "otherForms": "guides (三單), guiding (ing型(去e加ing)), guided (過去式/分詞)"
    },
    {
        "word": "handle",
        "pos": "v.",
        "meaning": "處理",
        "theme": "行為動作",
        "sentence": "She is very calm and knows how to handle difficult problems.",
        "sentenceZh": "她非常冷靜，知道如何處理困難的問題。",
        "otherForms": "handles (三單), handling (ing型(去e加ing)), handled (過去式/分詞)"
    },
    {
        "word": "hang",
        "pos": "v.",
        "meaning": "懸掛",
        "theme": "行為動作",
        "sentence": "Please hang your wet raincoat by the door.",
        "sentenceZh": "請把濕雨衣掛在門邊。",
        "otherForms": "hangs (三單), hanging (ing型), hung (過去式(不規則)), hung (過去分詞(不規則))"
    },
    {
        "word": "hide",
        "pos": "v.",
        "meaning": "隱藏",
        "theme": "行為動作",
        "sentence": "The scared little mouse tried to hide under the sofa.",
        "sentenceZh": "害怕的小老鼠試圖躲在沙發底下。",
        "otherForms": "hides (三單), hiding (ing型(去e加ing)), hid (過去式(不規則)), hidden (過去分詞(不規則))"
    },
    {
        "word": "hire",
        "pos": "v.",
        "meaning": "雇用",
        "theme": "行為動作",
        "sentence": "The restaurant needs to hire a new cook for the weekend.",
        "sentenceZh": "餐廳週末需要雇用一位新廚師。",
        "otherForms": "hires (三單), hiring (ing型(去e加ing)), hired (過去式/分詞)"
    },
    {
        "word": "hunt",
        "pos": "v.",
        "meaning": "狩獵",
        "theme": "行為動作",
        "sentence": "In the past, people had to hunt wild animals for food.",
        "sentenceZh": "過去，人們必須狩獵野生動物來獲取食物。",
        "otherForms": "hunts (三單), hunting (ing型), hunted (過去式/分詞)"
    },
    {
        "word": "hurt",
        "pos": "v. / n.",
        "meaning": "傷害",
        "theme": "行為動作",
        "sentence": "He hurt his leg badly when he fell off his bike.",
        "sentenceZh": "他從腳踏車上摔下來時嚴重摔傷了腿。",
        "otherForms": "hurts (三單), hurting (ing型), hurt (過去式(不規則同型)), hurt (過去分詞(不規則同型))"
    },
    {
        "word": "include",
        "pos": "v.",
        "meaning": "包含",
        "theme": "行為動作",
        "sentence": "The meal price includes a bowl of soup and a drink.",
        "sentenceZh": "套餐價格包含了一碗湯和一杯飲料。",
        "otherForms": "includes (三單), including (ing型(去e加ing)), included (過去式/分詞)"
    },
    {
        "word": "interrupt",
        "pos": "v.",
        "meaning": "打斷",
        "theme": "行為動作",
        "sentence": "It is impolite to interrupt someone when they are speaking.",
        "sentenceZh": "打斷別人說話是不禮貌的。",
        "otherForms": "interrupts (三單), interrupting (ing型), interrupted (過去式/分詞)"
    },
    {
        "word": "invent",
        "pos": "v.",
        "meaning": "發明",
        "theme": "行為動作",
        "sentence": "Thomas Edison invented the light bulb many years ago.",
        "sentenceZh": "湯瑪斯·愛迪生許多年前發明了電燈泡。",
        "otherForms": "invents (三單), inventing (ing型), invented (過去式/分詞)"
    },
    {
        "word": "invite",
        "pos": "v.",
        "meaning": "邀請",
        "theme": "行為動作",
        "sentence": "I will invite all my friends to my birthday party.",
        "sentenceZh": "我會邀請我所有的朋友來參加我的生日派對。",
        "otherForms": "invites (三單), inviting (ing型(去e加ing)), invited (過去式/分詞)"
    },
    {
        "word": "iron",
        "pos": "v. / n.",
        "meaning": "熨燙 / 鐵",
        "theme": "行為動作",
        "sentence": "My mother is ironing my school uniform to make it neat.",
        "sentenceZh": "我媽媽正在熨燙我的學校制服讓它變平整。",
        "otherForms": "irons (複數型), irons (三單), ironing (ing型), ironed (過去式/分詞)"
    },
    {
        "word": "join",
        "pos": "v.",
        "meaning": "加入",
        "theme": "行為動作",
        "sentence": "Would you like to join our badminton club this semester?",
        "sentenceZh": "你這學期想加入我們的羽球社嗎？",
        "otherForms": "joins (三單), joining (ing型), joined (過去式/分詞)"
    },
    {
        "word": "kill",
        "pos": "v.",
        "meaning": "殺死",
        "theme": "行為動作",
        "sentence": "It is illegal to kill wild animals in this national park.",
        "sentenceZh": "在這個國家公園裡殺死野生動物是違法的。",
        "otherForms": "kills (三單), killing (ing型), killed (過去式/分詞)"
    },
    {
        "word": "lead",
        "pos": "v.",
        "meaning": "領導",
        "theme": "行為動作",
        "sentence": "The class leader will lead the students to the gym.",
        "sentenceZh": "班長將帶領學生們前往體育館。",
        "otherForms": "leads (三單), leading (ing型), led (過去式(不規則)), led (過去分詞(不規則))"
    },
    {
        "word": "let",
        "pos": "v.",
        "meaning": "讓",
        "theme": "行為動作",
        "sentence": "Please let me know if you need any help with the homework.",
        "sentenceZh": "如果你的作業需要任何幫忙，請讓我知道。",
        "otherForms": "lets (三單), letting (ing型(重複字尾)), let (過去式(不規則同型)), let (過去分詞(不規則同型))"
    },
    {
        "word": "limit",
        "pos": "v. / n.",
        "meaning": "限制",
        "theme": "行為動作",
        "sentence": "You should limit the time you spend playing computer games.",
        "sentenceZh": "你應該限制你玩電腦遊戲的時間。",
        "otherForms": "limits (複數型), limits (三單), limiting (ing型), limited (過去式/分詞)"
    },
    {
        "word": "list",
        "pos": "v. / n.",
        "meaning": "列出 / 名單",
        "theme": "行為動作",
        "sentence": "Please list all the materials you need for the science project.",
        "sentenceZh": "請列出你科學專案需要的所有材料。",
        "otherForms": "lists (複數型), lists (三單), listing (ing型), listed (過去式/分詞)"
    },
    {
        "word": "lock",
        "pos": "v. / n.",
        "meaning": "鎖上",
        "theme": "行為動作",
        "sentence": "Don't forget to lock the door before you leave the house.",
        "sentenceZh": "離開家前別忘了鎖門。",
        "otherForms": "locks (複數型), locks (三單), locking (ing型), locked (過去式/分詞)"
    },
    {
        "word": "make",
        "pos": "v.",
        "meaning": "製作",
        "theme": "行為動作",
        "sentence": "We are going to make a beautiful card for Mother's Day.",
        "sentenceZh": "我們打算為母親節做一張美麗的卡片。",
        "otherForms": "makes (三單), making (ing型(去e加ing)), made (過去式(不規則)), made (過去分詞(不規則))"
    },
    {
        "word": "marry",
        "pos": "v.",
        "meaning": "結婚",
        "theme": "行為動作",
        "sentence": "The prince and the princess married and lived happily.",
        "sentenceZh": "王子和公主結婚並快樂地生活。",
        "otherForms": "marries (三單(去y加ies)), marrying (ing型), married (過去式/分詞(去y加ied))"
    },
    {
        "word": "mix",
        "pos": "v.",
        "meaning": "混合",
        "theme": "行為動作",
        "sentence": "If you mix yellow and blue paint, you will get green.",
        "sentenceZh": "如果你把黃色和藍色顏料混合，就會得到綠色。",
        "otherForms": "mixes (三單(加es)), mixing (ing型), mixed (過去式/分詞)"
    },
    {
        "word": "mop",
        "pos": "v. / n.",
        "meaning": "用拖把拖地 / 拖把",
        "theme": "行為動作",
        "sentence": "It is your turn to mop the classroom floor today.",
        "sentenceZh": "今天輪到你用拖把拖教室地板了。",
        "otherForms": "mops (三單), mopping (ing型(重複字尾)), mopped (過去式/分詞(重複字尾))"
    },
    {
        "word": "offer",
        "pos": "v. / n.",
        "meaning": "提供",
        "theme": "行為動作",
        "sentence": "The teacher offered to help the students after class.",
        "sentenceZh": "老師提供放學後幫助學生。",
        "otherForms": "offers (三單), offering (ing型), offered (過去式/分詞)"
    },
    {
        "word": "omit",
        "pos": "v.",
        "meaning": "省略",
        "theme": "行為動作",
        "sentence": "You can omit this word and the sentence is still correct.",
        "sentenceZh": "你可以省略這個單字，而句子依然正確。",
        "otherForms": "omits (三單), omitting (ing型(重複字尾)), omitted (過去式/分詞(重複字尾))"
    },
    {
        "word": "open",
        "pos": "v. / adj.",
        "meaning": "打開 / 開著的",
        "theme": "行為動作",
        "sentence": "Please open your textbook to page forty-five.",
        "sentenceZh": "請把你的教科書打開翻到第四十五頁。",
        "otherForms": "opens (三單), opening (ing型), opened (過去式/分詞)"
    },
    {
        "word": "order",
        "pos": "v. / n.",
        "meaning": "點餐 / 命令",
        "theme": "行為動作",
        "sentence": "We went to the restaurant and ordered a large pizza.",
        "sentenceZh": "我們去了餐廳並點了一個大披薩。",
        "otherForms": "orders (複數型), orders (三單), ordering (ing型), ordered (過去式/分詞)"
    },
    {
        "word": "pack",
        "pos": "v. / n.",
        "meaning": "打包",
        "theme": "行為動作",
        "sentence": "I need to pack my clothes for the three-day trip.",
        "sentenceZh": "我需要為三天的旅行打包衣服。",
        "otherForms": "packs (三單), packing (ing型), packed (過去式/分詞)"
    },
    {
        "word": "park",
        "pos": "v. / n.",
        "meaning": "停車 / 公園",
        "theme": "行為動作",
        "sentence": "You cannot park your car in front of the school gate.",
        "sentenceZh": "你不能把車停在學校大門口。",
        "otherForms": "parks (複數型), parks (三單), parking (ing型), parked (過去式/分詞)"
    },
    {
        "word": "paste",
        "pos": "v.",
        "meaning": "貼上",
        "theme": "行為動作",
        "sentence": "Copy the HTML code and paste it into the editor.",
        "sentenceZh": "複製 HTML 程式碼然後將它貼到編輯器裡。",
        "otherForms": "pastes (三單), pasting (ing型(去e加ing)), pasted (過去式/分詞)"
    },
    {
        "word": "play",
        "pos": "v. / n.",
        "meaning": "玩 / 戲劇",
        "theme": "行為動作",
        "sentence": "Let's play a fun game of badminton after school.",
        "sentenceZh": "我們放學後來打一場有趣的羽球吧。",
        "otherForms": "plays (三單), playing (ing型), played (過去式/分詞)"
    },
    {
        "word": "pollute",
        "pos": "v.",
        "meaning": "污染",
        "theme": "行為動作",
        "sentence": "We must not let factories pollute our clean rivers.",
        "sentenceZh": "我們絕不能讓工廠污染我們乾淨的河流。",
        "otherForms": "pollutes (三單), polluting (ing型(去e加ing)), polluted (過去式/分詞)"
    },
    {
        "word": "pose",
        "pos": "v. / n.",
        "meaning": "擺姿勢 / 造成",
        "theme": "行為動作",
        "sentence": "Everyone posed for a group photo.",
        "sentenceZh": "大家擺好姿勢拍了一張大合照。",
        "otherForms": "poses (三單), posed (過去/過去分詞), posing (現在分詞)"
    },
    {
        "word": "print",
        "pos": "v.",
        "meaning": "列印",
        "theme": "行為動作",
        "sentence": "The teacher will print the vocabulary list for everyone.",
        "sentenceZh": "老師會印出單字表給大家。",
        "otherForms": "prints (三單), printing (ing型), printed (過去式/分詞)"
    },
    {
        "word": "produce",
        "pos": "v.",
        "meaning": "生產",
        "theme": "行為動作",
        "sentence": "This farm produces very sweet and juicy watermelons.",
        "sentenceZh": "這座農場生產非常甜又多汁的西瓜。",
        "otherForms": "produces (三單), producing (ing型(去e加ing)), produced (過去式/分詞)"
    },
    {
        "word": "protect",
        "pos": "v.",
        "meaning": "保護",
        "theme": "行為動作",
        "sentence": "Wearing a helmet will protect your head if you fall.",
        "sentenceZh": "戴安全帽會在你跌倒時保護你的頭部。",
        "otherForms": "protects (三單), protecting (ing型), protected (過去式/分詞)"
    },
    {
        "word": "provide",
        "pos": "v.",
        "meaning": "提供",
        "theme": "行為動作",
        "sentence": "The school provides a healthy lunch for all the students.",
        "sentenceZh": "學校為所有學生提供健康的午餐。",
        "otherForms": "provides (三單), providing (ing型(去e加ing)), provided (過去式/分詞)"
    },
    {
        "word": "pump",
        "pos": "v. / n.",
        "meaning": "灌注 / 幫浦",
        "theme": "行為動作",
        "sentence": "We need to pump some air into the bicycle tires.",
        "sentenceZh": "我們需要幫腳踏車輪胎打點氣。",
        "otherForms": "pumps (三單), pumping (ing型), pumped (過去式/分詞)"
    },
    {
        "word": "quit",
        "pos": "v.",
        "meaning": "退出",
        "theme": "行為動作",
        "sentence": "Don't quit when learning English gets a little difficult.",
        "sentenceZh": "當學英文變得有點難時，別放棄。",
        "otherForms": "quits (三單), quitting (ing型(重複字尾)), quit (過去式(不規則同型)), quit (過去分詞(不規則同型))"
    },
    {
        "word": "reach",
        "pos": "v.",
        "meaning": "到達",
        "theme": "行為動作",
        "sentence": "He is tall enough to reach the books on the top shelf.",
        "sentenceZh": "他夠高，可以搆到最上層架子上的書。",
        "otherForms": "reaches (三單(加es)), reaching (ing型), reached (過去式/分詞)"
    },
    {
        "word": "receive",
        "pos": "v.",
        "meaning": "接收",
        "theme": "行為動作",
        "sentence": "I received a nice postcard from my friend in Japan today.",
        "sentenceZh": "我今天收到了一張來自日本朋友寄的漂亮明信片。",
        "otherForms": "receives (三單), receiving (ing型(去e加ing)), received (過去式/分詞)"
    },
    {
        "word": "recycle",
        "pos": "v.",
        "meaning": "回收",
        "theme": "行為動作",
        "sentence": "We should always recycle plastic bottles and paper.",
        "sentenceZh": "我們應該永遠回收塑膠瓶和紙張。",
        "otherForms": "recycles (三單), recycling (ing型(去e加ing)), recycled (過去式/分詞)"
    },
    {
        "word": "remind",
        "pos": "v.",
        "meaning": "提醒",
        "theme": "行為動作",
        "sentence": "Please remind me to bring my umbrella tomorrow.",
        "sentenceZh": "請提醒我明天要帶傘。",
        "otherForms": "reminds (三單), reminding (ing型), reminded (過去式/分詞)"
    },
    {
        "word": "rent",
        "pos": "v. / n.",
        "meaning": "租用",
        "theme": "行為動作",
        "sentence": "We rented a small car for our family trip to Kenting.",
        "sentenceZh": "我們為墾丁家庭旅行租了一輛小車。",
        "otherForms": "rents (三單), renting (ing型), rented (過去式/分詞)"
    },
    {
        "word": "revise",
        "pos": "v.",
        "meaning": "修改",
        "theme": "行為動作",
        "sentence": "I need to revise my essay before I hand it to the teacher.",
        "sentenceZh": "我在交給老師前需要修改我的作文。",
        "otherForms": "revises (三單), revising (ing型(去e加ing)), revised (過去式/分詞)"
    },
    {
        "word": "rob",
        "pos": "v.",
        "meaning": "搶劫",
        "theme": "行為動作",
        "sentence": "The bad guy tried to rob the bank but the police caught him.",
        "sentenceZh": "壞蛋試圖搶銀行但被警察抓住了。",
        "otherForms": "robs (三單), robbing (ing型(重複字尾)), robbed (過去式/分詞(重複字尾))"
    },
    {
        "word": "rub",
        "pos": "v.",
        "meaning": "摩擦",
        "theme": "行為動作",
        "sentence": "Don't rub your eyes when your hands are dirty.",
        "sentenceZh": "當你的手很髒時不要揉眼睛。",
        "otherForms": "rubs (三單), rubbing (ing型(重複字尾)), rubbed (過去式/分詞(重複字尾))"
    },
    {
        "word": "save",
        "pos": "v.",
        "meaning": "拯救 / 儲存",
        "theme": "行為動作",
        "sentence": "Remember to save your file before you close the computer.",
        "sentenceZh": "關電腦前記得儲存你的檔案。",
        "otherForms": "saves (三單), saving (ing型(去e加ing)), saved (過去式/分詞)"
    },
    {
        "word": "search",
        "pos": "v. / n.",
        "meaning": "搜尋",
        "theme": "行為動作",
        "sentence": "I used Google to search for information about badminton history.",
        "sentenceZh": "我用 Google 搜尋關於羽球歷史的資訊。",
        "otherForms": "searches (複數型(加es)), searches (三單(加es)), searching (ing型), searched (過去式/分詞)"
    },
    {
        "word": "seek",
        "pos": "v.",
        "meaning": "尋求",
        "theme": "行為動作",
        "sentence": "You should seek help from the teacher if you don't understand.",
        "sentenceZh": "如果你不懂，應該尋求老師的幫助。",
        "otherForms": "seeks (三單), seeking (ing型), sought (過去式(不規則)), sought (過去分詞(不規則))"
    },
    {
        "word": "sell",
        "pos": "v.",
        "meaning": "賣",
        "theme": "行為動作",
        "sentence": "The bakery sells the most delicious bread in Douliu.",
        "sentenceZh": "那家麵包店賣斗六最好吃的麵包。",
        "otherForms": "sells (三單), selling (ing型), sold (過去式(不規則)), sold (過去分詞(不規則))"
    },
    {
        "word": "send",
        "pos": "v.",
        "meaning": "傳送",
        "theme": "行為動作",
        "sentence": "I will send you an email with the photos tonight.",
        "sentenceZh": "我今晚會發一封附有照片的電子郵件給你。",
        "otherForms": "sends (三單), sending (ing型), sent (過去式(不規則)), sent (過去分詞(不規則))"
    },
    {
        "word": "serve",
        "pos": "v.",
        "meaning": "服務",
        "theme": "行為動作",
        "sentence": "The restaurant serves a very nice hot chicken soup.",
        "sentenceZh": "這家餐廳供應非常棒的熱雞湯。",
        "otherForms": "serves (三單), serving (ing型(去e加ing)), served (過去式/分詞)"
    },
    {
        "word": "share",
        "pos": "v. / n.",
        "meaning": "分享",
        "theme": "行為動作",
        "sentence": "The student kindly shared his umbrella with his classmate.",
        "sentenceZh": "這位學生好心地和同學分享他的雨傘。",
        "otherForms": "shares (三單), sharing (ing型(去e加ing)), shared (過去式/分詞)"
    },
    {
        "word": "shoot",
        "pos": "v.",
        "meaning": "射擊",
        "theme": "行為動作",
        "sentence": "He jumped high to shoot the basketball into the net.",
        "sentenceZh": "他跳得很高去把籃球投進網內。",
        "otherForms": "shoots (三單), shooting (ing型), shot (過去式(不規則)), shot (過去分詞(不規則))"
    },
    {
        "word": "show",
        "pos": "v. / n.",
        "meaning": "表演 / 展示",
        "theme": "行為動作",
        "sentence": "Can you show me how to play this syntax repair game?",
        "sentenceZh": "你能示範給我看這個語法修復遊戲怎麼玩嗎？",
        "otherForms": "shows (複數型/ 三單), showing (ing型), showed (過去式(規則)), shown (過去分詞(不規則))"
    },
    {
        "word": "shut",
        "pos": "v.",
        "meaning": "關閉",
        "theme": "行為動作",
        "sentence": "Please shut the door quietly so you don't wake the baby.",
        "sentenceZh": "請輕輕關上門以免吵醒小嬰兒。",
        "otherForms": "shuts (三單), shutting (ing型(重複字尾)), shut (過去式(不規則同型)), shut (過去分詞(不規則同型))"
    },
    {
        "word": "sit",
        "pos": "v.",
        "meaning": "坐",
        "theme": "行為動作",
        "sentence": "Pull up a chair and sit next to me.",
        "sentenceZh": "拉把椅子過來坐我旁邊。",
        "otherForms": "sits (三單), sitting (ing型(重複字尾)), sat (過去式(不規則)), sat (過去分詞(不規則))"
    },
    {
        "word": "sleep",
        "pos": "v. / n.",
        "meaning": "睡覺",
        "theme": "行為動作",
        "sentence": "I usually sleep for eight hours every night.",
        "sentenceZh": "我每晚通常睡八小時。",
        "otherForms": "sleeps (三單), sleeping (ing型), slept (過去式(不規則)), slept (過去分詞(不規則))"
    },
    {
        "word": "smoke",
        "pos": "v. / n.",
        "meaning": "抽煙 / 煙",
        "theme": "行為動作",
        "sentence": "You are not allowed to smoke inside the hospital.",
        "sentenceZh": "你不被允許在醫院裡面抽菸。",
        "otherForms": "smokes (三單), smoking (ing型(去e加ing)), smoked (過去式/分詞)"
    },
    {
        "word": "solve",
        "pos": "v.",
        "meaning": "解決",
        "theme": "行為動作",
        "sentence": "The smart detective easily solved the difficult mystery.",
        "sentenceZh": "聰明的偵探輕鬆地解決了這個困難的謎團。",
        "otherForms": "solves (三單), solving (ing型(去e加ing)), solved (過去式/分詞)"
    },
    {
        "word": "spread",
        "pos": "v.",
        "meaning": "塗抹",
        "theme": "行為動作",
        "sentence": "She used a knife to spread butter on the warm toast.",
        "sentenceZh": "她用刀子把奶油塗在溫熱的吐司上。",
        "otherForms": "spreads (三單), spreading (ing型), spread (過去式(不規則同型)), spread (過去分詞(不規則同型))"
    },
    {
        "word": "steal",
        "pos": "v.",
        "meaning": "偷竊",
        "theme": "行為動作",
        "sentence": "The thief tried to steal a bicycle but a police officer saw him.",
        "sentenceZh": "小偷試圖偷腳踏車但被警察看到了。",
        "otherForms": "steals (三單), stealing (ing型), stole (過去式(不規則)), stolen (過去分詞(不規則))"
    },
    {
        "word": "strike",
        "pos": "v. / n.",
        "meaning": "打擊 / 罷工",
        "theme": "行為動作",
        "sentence": "The lightning struck the tall tree during the big storm.",
        "sentenceZh": "閃電在暴風雨中擊中了那棵大樹。",
        "otherForms": "strikes (複數型/ 三單), striking (ing型(去e加ing)), struck (過去式(不規則)), struck/stricken (過去分詞(不規則))"
    },
    {
        "word": "take",
        "pos": "v.",
        "meaning": "拿 / 帶/ 花費(時間)",
        "theme": "行為動作",
        "sentence": "It will take us about an hour to get to Taichung by train.",
        "sentenceZh": "搭火車到台中大約會花我們一小時。",
        "otherForms": "takes (三單), taking (ing型(去e加ing)), took (過去式(不規則)), taken (過去分詞(不規則))"
    },
    {
        "word": "treat",
        "pos": "v. / n.",
        "meaning": "款待 / 對待",
        "theme": "行為動作",
        "sentence": "You should always treat your friends with kindness and respect.",
        "sentenceZh": "你應該永遠以仁慈和尊重來對待你的朋友。",
        "otherForms": "treats (三單), treating (ing型), treated (過去式/分詞)"
    },
    {
        "word": "upload",
        "pos": "v.",
        "meaning": "上傳",
        "theme": "行為動作",
        "sentence": "Don't forget to upload your homework to the school website.",
        "sentenceZh": "別忘了把你的作業上傳到學校網站。",
        "otherForms": "uploads (三單), uploading (ing型), uploaded (過去式/分詞)"
    },
    {
        "word": "use",
        "pos": "v. / n.",
        "meaning": "使用",
        "theme": "行為動作",
        "sentence": "I often use an online dictionary to check my spelling.",
        "sentenceZh": "我經常使用線上字典來檢查我的拼字。",
        "otherForms": "uses (三單), using (ing型(去e加ing)), used (過去式/分詞)"
    },
    {
        "word": "visit",
        "pos": "v. / n.",
        "meaning": "拜訪",
        "theme": "行為動作",
        "sentence": "I plan to visit my grandparents in the village next Sunday.",
        "sentenceZh": "我計畫下星期日去村莊拜訪我祖父母。",
        "otherForms": "visits (三單), visiting (ing型), visited (過去式/分詞)"
    },
    {
        "word": "vote",
        "pos": "v. / n.",
        "meaning": "投票",
        "theme": "行為動作",
        "sentence": "The class will vote to choose the best badge design tomorrow.",
        "sentenceZh": "全班明天將投票選出最好的徽章設計。",
        "otherForms": "votes (三單), voting (ing型(去e加ing)), voted (過去式/分詞)"
    },
    {
        "word": "wait",
        "pos": "v.",
        "meaning": "等待",
        "theme": "行為動作",
        "sentence": "I had to wait for the bus for thirty minutes in the rain.",
        "sentenceZh": "我得在雨中等了三十分鐘的公車。",
        "otherForms": "waits (三單), waiting (ing型), waited (過去式/分詞)"
    },
    {
        "word": "waste",
        "pos": "v. / n.",
        "meaning": "浪費",
        "theme": "行為動作",
        "sentence": "Don't waste your time playing too many computer games.",
        "sentenceZh": "不要浪費你的時間玩太多電腦遊戲。",
        "otherForms": "wastes (複數型), wastes (三單), wasting (ing型(去e加ing)), wasted (過去式/分詞)"
    },
    {
        "word": "welcome",
        "pos": "v. / adj.",
        "meaning": "歡迎",
        "theme": "行為動作",
        "sentence": "We are very happy to welcome the new teacher to our school.",
        "sentenceZh": "我們非常高興能歡迎新老師來到我們學校。",
        "otherForms": "welcomes (複數型), welcomes (三單), welcoming (ing型(去e加ing)), welcomed (過去式/分詞)"
    },
    {
        "word": "be (is, am, are, was, were)",
        "pos": "aux. / v.",
        "meaning": "是 / 當 / 在",
        "theme": "助動詞",
        "sentence": "I am a student, and he is a teacher.",
        "sentenceZh": "我是一名學生，而他是一名老師。",
        "otherForms": "is/am/are (現在式型態), being (ing型), was/were (過去式(單/複數)), been (過去分詞(不規則))"
    },
    {
        "word": "do (does, did)",
        "pos": "aux. / v.",
        "meaning": "做",
        "theme": "助動詞",
        "sentence": "What do you usually do on the weekend?",
        "sentenceZh": "你週末通常做什麼？",
        "otherForms": "does (三單), doing (ing型), did (過去式(不規則)), done (過去分詞(不規則))"
    },
    {
        "word": "have (has, had)",
        "pos": "aux. / v.",
        "meaning": "擁有 / 已經 / 使~(做某事)",
        "theme": "助動詞",
        "sentence": "I have a very big collection of 80s music on Spotify.",
        "sentenceZh": "我的 Spotify 裡有非常大量的 80 年代音樂收藏。",
        "otherForms": "has (三單), having (ing型(去e加ing)), had (過去式(不規則)), had (過去分詞(不規則))"
    },
    {
        "word": "can",
        "pos": "aux.",
        "meaning": "可以 / 可能 / 能夠",
        "theme": "助動詞",
        "sentence": "I could run much faster when I was younger.",
        "sentenceZh": "我年輕的時候可以跑得快很多。",
        "otherForms": "could (過去式(助動)), 無其他變形"
    },
    {
        "word": "shall",
        "pos": "aux.",
        "meaning": "應該 / 將會",
        "theme": "助動詞",
        "sentence": "You should review your vocabulary every day to remember them.",
        "sentenceZh": "你應該每天複習單字以記住它們。",
        "otherForms": "should (過去式(助動)), 無其他變形"
    },
    {
        "word": "must",
        "pos": "aux.",
        "meaning": "一定",
        "theme": "助動詞",
        "sentence": "You must finish your homework before watching television.",
        "sentenceZh": "你看電視前必須寫完作業。",
        "otherForms": "無變形"
    },
    {
        "word": "may",
        "pos": "aux.",
        "meaning": "可能 / 可以",
        "theme": "助動詞",
        "sentence": "Take an umbrella with you; it might rain this afternoon.",
        "sentenceZh": "帶著傘吧，今天下午可能會下雨。",
        "otherForms": "might (過去式(助動)), 無其他變形"
    },
    {
        "word": "will",
        "pos": "aux.",
        "meaning": "將會",
        "theme": "助動詞",
        "sentence": "When I get older, will you still love me?",
        "sentenceZh": "當我變老的時候，你還會愛我嗎?",
        "otherForms": "would (過去式(助動)), 無其他變形"
    },
    {
        "word": "shock",
        "pos": "v. / n.",
        "meaning": "震驚",
        "theme": "情緒動詞",
        "sentence": "The bad news was a great shock to everyone.",
        "sentenceZh": "這個壞消息讓大家非常震驚。",
        "otherForms": "shocks (三單), shocked (過去/過去分詞), shocking (現在分詞)"
    },
    {
        "word": "bother",
        "pos": "v.",
        "meaning": "打擾",
        "theme": "情緒動詞",
        "sentence": "Please don't bother me while I am writing the HTML code.",
        "sentenceZh": "我在寫 HTML 程式碼時請不要打擾我。",
        "otherForms": "bothers (三單), bothering (ing型), bothered (過去式/分詞)"
    },
    {
        "word": "bore",
        "pos": "v.",
        "meaning": "使~無聊",
        "theme": "情緒動詞",
        "sentence": "Englisg class bores me.",
        "sentenceZh": "英語課使我感到無聊。",
        "otherForms": "bores (三單), boring (ing型(去e加ing)), bored (過去式/分詞)"
    },
    {
        "word": "confuse",
        "pos": "v.",
        "meaning": "混淆",
        "theme": "情緒動詞",
        "sentence": "The difficult grammar rules often confuse the students.",
        "sentenceZh": "困難的文法規則經常使學生感到混淆。",
        "otherForms": "confuses (三單), confusing (ing型(去e加ing)), confused (過去式/分詞)"
    },
    {
        "word": "embarrass",
        "pos": "v.",
        "meaning": "使尷尬",
        "theme": "情緒動詞",
        "sentence": "Falling down on the badminton court embarrassed him.",
        "sentenceZh": "在羽球場上跌倒讓他覺得很尷尬。",
        "otherForms": "embarrasses (三單(加es)), embarrassing (ing型), embarrassed (過去式/分詞)"
    },
    {
        "word": "frighten",
        "pos": "v.",
        "meaning": "使~害怕",
        "theme": "情緒動詞",
        "sentence": "The loud thunder frightened the little puppy.",
        "sentenceZh": "巨大的雷聲嚇壞了小狗。",
        "otherForms": "frightens (三單), frightening (ing型), frightened (過去式/分詞)"
    },
    {
        "word": "surprise",
        "pos": "v. / n.",
        "meaning": "使~驚訝",
        "theme": "情緒動詞",
        "sentence": "The sudden rain surprised us during the school trip.",
        "sentenceZh": "校外教學時突如其來的大雨讓我們很驚訝。",
        "otherForms": "surprises (複數/三單), surprising (ing型(去e加ing)), surprised (過去式/分詞)"
    },
    {
        "word": "worry",
        "pos": "v. / n.",
        "meaning": "使~擔心",
        "theme": "情緒動詞",
        "sentence": "Don't worry about the test; just do your best.",
        "sentenceZh": "別擔心考試，盡力就好。",
        "otherForms": "worries (複數/三單(去y加ies)), worrying (ing型), worried (過去式/分詞(去y加ied))"
    },
    {
        "word": "care",
        "pos": "v. / n.",
        "meaning": "關心",
        "theme": "情緒動詞",
        "sentence": "A good teacher always cares about their students.",
        "sentenceZh": "一位好老師總是關心他們的學生。",
        "otherForms": "cares (三單), caring (ing型(去e加ing)), cared (過去式/分詞)"
    },
    {
        "word": "concern",
        "pos": "v. / n.",
        "meaning": "關心 / 涉及",
        "theme": "情緒動詞",
        "sentence": "The principal is concerned about the safety of the students.",
        "sentenceZh": "校長很關心學生們的安全。",
        "otherForms": "concerns (三單), concerning (ing型), concerned (過去式/分詞)"
    },
    {
        "word": "excite",
        "pos": "v.",
        "meaning": "使~興奮",
        "theme": "情緒動詞",
        "sentence": "Playing the interactive web game excites the whole class.",
        "sentenceZh": "玩這個互動網頁遊戲讓全班都很興奮。",
        "otherForms": "excites (三單), exciting (ing型(去e加ing)), excited (過去式/分詞)"
    },
    {
        "word": "satisfy",
        "pos": "v.",
        "meaning": "使~滿足",
        "theme": "情緒動詞",
        "sentence": "A big bowl of Douliu beef noodles will satisfy your hunger.",
        "sentenceZh": "一大碗斗六牛肉麵能滿足你的飢餓感。",
        "otherForms": "satisfies (三單(去y加ies)), satisfying (ing型), satisfied (過去式/分詞(去y加ied))"
    },
    {
        "word": "please",
        "pos": "v. / adv.",
        "meaning": "使~開心 / 請",
        "theme": "情緒動詞",
        "sentence": "The student's good grades pleased his parents.",
        "sentenceZh": "這位學生的好成績讓他的父母很開心。",
        "otherForms": "pleases (三單), pleasing (ing型(去e加ing)), pleased (過去式/分詞)"
    },
    {
        "word": "scare",
        "pos": "v.",
        "meaning": "使~害怕",
        "theme": "情緒動詞",
        "sentence": "The monster in the game scared the little boy.",
        "sentenceZh": "遊戲裡的怪物嚇到了小男孩。",
        "otherForms": "scares (三單), scaring (ing型(去e加ing)), scared (過去式/分詞)"
    },
    {
        "word": "tire",
        "pos": "v.",
        "meaning": "使~疲累",
        "theme": "情緒動詞",
        "sentence": "Running ten laps around the playground will tire you out.",
        "sentenceZh": "繞著操場跑十圈會讓你累壞的。",
        "otherForms": "tires (三單), tiring (ing型(去e加ing)), tired (過去式/分詞)"
    },
    {
        "word": "interest",
        "pos": "v. / n.",
        "meaning": "使~感到有趣 / 興趣",
        "theme": "情緒動詞",
        "sentence": "What she said to you interests me.",
        "sentenceZh": "他對你說的話讓我感到有趣。",
        "otherForms": "interests (三單), interesting (ing型), interested (過去式/分詞)"
    },
    {
        "word": "shocked",
        "pos": "adj.",
        "meaning": "感到震驚的",
        "theme": "情緒動詞",
        "sentence": "Everyong was shocked at the bad news.",
        "sentenceZh": "大家對於這個壞消息都感到非常震驚。",
        "otherForms": "more shocked (比較級), most shocked (最高級)"
    },
    {
        "word": "bored",
        "pos": "adj.",
        "meaning": "感到無聊的",
        "theme": "情緒動詞",
        "sentence": "I am bored with the English class.",
        "sentenceZh": "我對英語課感到無聊。",
        "otherForms": "more bored (比較級), most bored (最高級)"
    },
    {
        "word": "bothered",
        "pos": "adj.",
        "meaning": "感到厭煩的",
        "theme": "情緒動詞",
        "sentence": "I am bothered by the loud noise outside the window.",
        "sentenceZh": "我對窗外的巨大噪音感到很厭煩。",
        "otherForms": "more bothered (比較級), most bothered (最高級)"
    },
    {
        "word": "confused",
        "pos": "adj.",
        "meaning": "感到困惑的",
        "theme": "情緒動詞",
        "sentence": "She was confused by the complicated math problem.",
        "sentenceZh": "她對這道複雜的數學題感到困惑。",
        "otherForms": "more confused (比較級), most confused (最高級)"
    },
    {
        "word": "embarrassed",
        "pos": "adj.",
        "meaning": "感到尷尬的",
        "theme": "情緒動詞",
        "sentence": "I was embarrassed when I forgot my lines in the play.",
        "sentenceZh": "當我在話劇中忘詞時，我感到很尷尬。",
        "otherForms": "more embarrassed (比較級), most embarrassed (最高級)"
    },
    {
        "word": "frightened",
        "pos": "adj.",
        "meaning": "感到害怕的",
        "theme": "情緒動詞",
        "sentence": "The frightened cat hid under the sofa safely.",
        "sentenceZh": "感到害怕的貓安全地躲在沙發下。",
        "otherForms": "more frightened (比較級), most frightened (最高級)"
    },
    {
        "word": "surprised",
        "pos": "adj.",
        "meaning": "感到驚訝的",
        "theme": "情緒動詞",
        "sentence": "I was surprised to see him waiting at the station.",
        "sentenceZh": "看到他在車站等候讓我很驚訝。",
        "otherForms": "more surprised (比較級), most surprised (最高級)"
    },
    {
        "word": "worried",
        "pos": "adj.",
        "meaning": "感到擔心的",
        "theme": "情緒動詞",
        "sentence": "My mom is worried because I have a high fever.",
        "sentenceZh": "我媽媽很擔心，因為我發高燒了。",
        "otherForms": "more worried (比較級), most worried (最高級)"
    },
    {
        "word": "concerned",
        "pos": "adj.",
        "meaning": "感到擔心的",
        "theme": "情緒動詞",
        "sentence": "The concerned teacher asked the student what was wrong.",
        "sentenceZh": "感到擔心的老師問學生怎麼了。",
        "otherForms": "more concerned (比較級), most concerned (最高級)"
    },
    {
        "word": "excited",
        "pos": "adj.",
        "meaning": "感到興奮的",
        "theme": "情緒動詞",
        "sentence": "We are very excited about the school trip to Japan.",
        "sentenceZh": "我們對去日本的校外教學感到非常興奮。",
        "otherForms": "more excited (比較級), most excited (最高級), excitedly (副詞)"
    },
    {
        "word": "satisfied",
        "pos": "adj.",
        "meaning": "感到滿足的",
        "theme": "情緒動詞",
        "sentence": "The coach was satisfied with the badminton team's victory.",
        "sentenceZh": "教練對羽球隊的勝利感到滿意。",
        "otherForms": "more satisfied (比較級), most satisfied (最高級)"
    },
    {
        "word": "pleased",
        "pos": "adj.",
        "meaning": "感到開心的",
        "theme": "情緒動詞",
        "sentence": "I am very pleased to meet your new friend.",
        "sentenceZh": "我非常高興能認識你的新朋友。",
        "otherForms": "more pleased (比較級), most pleased (最高級)"
    },
    {
        "word": "scared",
        "pos": "adj.",
        "meaning": "感到害怕的",
        "theme": "情緒動詞",
        "sentence": "My little sister is scared of big spiders.",
        "sentenceZh": "我妹妹很害怕大蜘蛛。",
        "otherForms": "more scared (比較級), most scared (最高級)"
    },
    {
        "word": "tired",
        "pos": "adj.",
        "meaning": "感到疲累的",
        "theme": "情緒動詞",
        "sentence": "I am very tired after playing badminton for two hours.",
        "sentenceZh": "打了兩個小時的羽球後我非常累。",
        "otherForms": "more tired (比較級), most tired (最高級)"
    },
    {
        "word": "interested",
        "pos": "adj.",
        "meaning": "感興趣的",
        "theme": "情緒動詞",
        "sentence": "I am very interested in learning English.",
        "sentenceZh": "我對學習英文非常感興趣。",
        "otherForms": "more interested (比較級), most interested (最高級)"
    },
    {
        "word": "shocking",
        "pos": "adj.",
        "meaning": "令人震驚的",
        "theme": "情緒動詞",
        "sentence": "The bad news was shocking to everyone.",
        "sentenceZh": "這個壞消息對於大家來說都是非常令人震驚的。",
        "otherForms": "more shocking (比較級), most shocking (最高級)"
    },
    {
        "word": "bothering",
        "pos": "adj.",
        "meaning": "令人厭煩的",
        "theme": "情緒動詞",
        "sentence": "The loud music from the neighbor is very bothering.",
        "sentenceZh": "鄰居傳來的大聲音樂非常令人厭煩。",
        "otherForms": "more bothering (比較級), most bothering (最高級)"
    },
    {
        "word": "boring",
        "pos": "adj.",
        "meaning": "令人無聊的",
        "theme": "情緒動詞",
        "sentence": "Eglish class is boring to me.",
        "sentenceZh": "英語課對我來說是令人無聊的。",
        "otherForms": "more boring (比較級), most boring (最高級)"
    },
    {
        "word": "confusing",
        "pos": "adj.",
        "meaning": "令人困惑的",
        "theme": "情緒動詞",
        "sentence": "The map of the city is too confusing for me to read.",
        "sentenceZh": "這張城市地圖對我來說太令人困惑了，看不懂。",
        "otherForms": "more confusing (比較級), most confusing (最高級), confusingly (副詞)"
    },
    {
        "word": "embarrassing",
        "pos": "adj.",
        "meaning": "令人尷尬的",
        "theme": "情緒動詞",
        "sentence": "It was an embarrassing moment when he called me the wrong name.",
        "sentenceZh": "當他叫錯我的名字時，是個令人尷尬的時刻。",
        "otherForms": "more embarrassing (比較級), most embarrassing (最高級)"
    },
    {
        "word": "frightening",
        "pos": "adj.",
        "meaning": "令人害怕的",
        "theme": "情緒動詞",
        "sentence": "The giant monster in the computer game is frightening.",
        "sentenceZh": "電腦遊戲裡的巨大怪物很嚇人。",
        "otherForms": "more frightening (比較級), most frightening (最高級)"
    },
    {
        "word": "surprising",
        "pos": "adj.",
        "meaning": "令人驚訝的",
        "theme": "情緒動詞",
        "sentence": "The sudden rain during the sunny day was very surprising.",
        "sentenceZh": "晴天時突如其來的雨非常令人驚訝。",
        "otherForms": "more surprising (比較級), most surprising (最高級), surprisingly (副詞)"
    },
    {
        "word": "worrying",
        "pos": "adj.",
        "meaning": "令人擔心的",
        "theme": "情緒動詞",
        "sentence": "His bad health is a very worrying problem.",
        "sentenceZh": "他糟糕的健康狀況是個令人擔心的問題。",
        "otherForms": "more worrying (比較級), most worrying (最高級)"
    },
    {
        "word": "caring",
        "pos": "adj.",
        "meaning": "有愛的 / 關心的",
        "theme": "情緒動詞",
        "sentence": "She is a very caring nurse who helps many sick people.",
        "sentenceZh": "她是一位非常有愛心、幫助許多病人的護理師。",
        "otherForms": "more caring (比較級), most caring (最高級)"
    },
    {
        "word": "concerning",
        "pos": "prep. / adj.",
        "meaning": "關於 / 令人擔心的",
        "theme": "情緒動詞",
        "sentence": "The news about the strong typhoon is quite concerning.",
        "sentenceZh": "關於強烈颱風的新聞相當令人擔心。",
        "otherForms": "more concerning (比較級), most concerning (最高級)"
    },
    {
        "word": "exciting",
        "pos": "adj.",
        "meaning": "令人興奮的",
        "theme": "情緒動詞",
        "sentence": "The Weather Combat game is a very exciting game to play.",
        "sentenceZh": "「天氣大戰」是一款玩起來非常刺激的遊戲。",
        "otherForms": "more exciting (比較級), most exciting (最高級)"
    },
    {
        "word": "satisfying",
        "pos": "adj.",
        "meaning": "令人滿意的",
        "theme": "情緒動詞",
        "sentence": "Drinking cold water after exercise is deeply satisfying.",
        "sentenceZh": "運動後喝冷水令人感到非常滿足。",
        "otherForms": "more satisfying (比較級), most satisfying (最高級)"
    },
    {
        "word": "pleasing",
        "pos": "adj.",
        "meaning": "令人開心的",
        "theme": "情緒動詞",
        "sentence": "The 80s synth-pop music is very pleasing to listen to.",
        "sentenceZh": "80年代的合成器流行音樂聽起來非常令人愉悅。",
        "otherForms": "more pleasing (比較級), most pleasing (最高級)"
    },
    {
        "word": "scary",
        "pos": "adj.",
        "meaning": "令人害怕的",
        "theme": "情緒動詞",
        "sentence": "The old house at the corner of the street looks very scary.",
        "sentenceZh": "街角的那棟老房子看起來很可怕。",
        "otherForms": "scarier (比較級(去y加ier)), scariest (最高級(去y加iest))"
    },
    {
        "word": "tiring",
        "pos": "adj.",
        "meaning": "令人疲累的",
        "theme": "情緒動詞",
        "sentence": "Walking up the high mountain is a very tiring activity.",
        "sentenceZh": "爬上高山是一項非常令人疲累的活動。",
        "otherForms": "more tiring (比較級), most tiring (最高級)"
    },
    {
        "word": "interesting",
        "pos": "adj.",
        "meaning": "有趣的",
        "theme": "情緒動詞",
        "sentence": "This book is so interesting that I read it twice.",
        "sentenceZh": "這本書太有趣了，我讀了兩次。",
        "otherForms": "more interesting (比較級), most interesting (最高級)"
    },
    {
        "word": "alive",
        "pos": "adj.",
        "meaning": "活著的",
        "theme": "形容詞(反意)",
        "sentence": "The small plant is still alive because I watered it.",
        "sentenceZh": "因為我有澆水，那株小植物還活著。",
        "otherForms": ""
    },
    {
        "word": "dead",
        "pos": "adj.",
        "meaning": "死的",
        "theme": "形容詞(反意)",
        "sentence": "The leaves on the ground are brown and dead.",
        "sentenceZh": "地上的葉子是枯黃且死去的。",
        "otherForms": ""
    },
    {
        "word": "modern",
        "pos": "adj.",
        "meaning": "現代的",
        "theme": "形容詞(反意)",
        "sentence": "Taipei is a very modern city with many tall buildings.",
        "sentenceZh": "台北是一個擁有許多高樓大廈的現代城市。",
        "otherForms": "more modern (比較級), most modern (最高級)"
    },
    {
        "word": "traditional",
        "pos": "adj.",
        "meaning": "傳統的",
        "theme": "形容詞(反意)",
        "sentence": "We ate some traditional snacks in the old street of Huwei.",
        "sentenceZh": "我們在虎尾老街吃了一些傳統小吃。",
        "otherForms": "more traditional (比較級), most traditional (最高級), traditionally (副詞)"
    },
    {
        "word": "ancient",
        "pos": "adj.",
        "meaning": "古代的",
        "theme": "形容詞(反意)",
        "sentence": "The museum has many ancient dinosaur bones on display.",
        "sentenceZh": "博物館裡展示著許多古代的恐龍骨頭。",
        "otherForms": "more ancient (比較級), most ancient (最高級)"
    },
    {
        "word": "classical",
        "pos": "adj.",
        "meaning": "古典的",
        "theme": "形容詞(反意)",
        "sentence": "He likes to play classical music on the piano.",
        "sentenceZh": "他喜歡用鋼琴彈奏古典音樂。",
        "otherForms": "more classical (比較級), most classical (最高級), classically (副詞)"
    },
    {
        "word": "available",
        "pos": "adj.",
        "meaning": "可用的 / 有空的",
        "theme": "形容詞(反意)",
        "sentence": "Is the principal available for a meeting this afternoon?",
        "sentenceZh": "校長今天下午有空開會嗎？",
        "otherForms": "more available (比較級), most available (最高級)"
    },
    {
        "word": "busy",
        "pos": "adj.",
        "meaning": "忙碌的",
        "theme": "形容詞(反意)",
        "sentence": "The English teacher is busy marking the test papers.",
        "sentenceZh": "英文老師正忙著批改考卷。",
        "otherForms": "busier (比較級(去y加ier)), busiest (最高級(去y加iest))"
    },
    {
        "word": "bright",
        "pos": "adj.",
        "meaning": "明亮的 / 聰明的",
        "theme": "形容詞(反意)",
        "sentence": "The sun is very bright and warm today.",
        "sentenceZh": "今天的太陽非常明亮且溫暖。",
        "otherForms": "brighter (比較級), brightest (最高級), brightly (副詞)"
    },
    {
        "word": "dark",
        "pos": "adj. / n.",
        "meaning": "黑暗的",
        "theme": "形容詞(反意)",
        "sentence": "It is too dark to read the book in this room.",
        "sentenceZh": "這房間裡太暗了，沒辦法看書。",
        "otherForms": "darker (比較級), darkest (最高級), darkly (副詞)"
    },
    {
        "word": "colorful",
        "pos": "adj.",
        "meaning": "多彩的",
        "theme": "形容詞(反意)",
        "sentence": "The students drew colorful pictures of the vocabulary characters.",
        "sentenceZh": "學生們畫了色彩繽紛的單字角色圖片。",
        "otherForms": "more colorful (比較級), most colorful (最高級), colorfully (副詞)"
    },
    {
        "word": "right",
        "pos": "adj. / n. / adv.",
        "meaning": "正確的 / 右邊的",
        "theme": "形容詞(反意)",
        "sentence": "That is the right answer to the math problem!",
        "sentenceZh": "那是這道數學題的正確答案！",
        "otherForms": "rightly (副詞)"
    },
    {
        "word": "correct",
        "pos": "adj. / v.",
        "meaning": "正確的 / 改正",
        "theme": "形容詞(反意)",
        "sentence": "In the game, both American and British spellings are correct.",
        "sentenceZh": "在遊戲中，美式和英式的拼寫都是正確的。",
        "otherForms": "more correct (比較級), most correct (最高級), correctly (副詞)"
    },
    {
        "word": "wrong",
        "pos": "adj.",
        "meaning": "錯誤的",
        "theme": "形容詞(反意)",
        "sentence": "Don't worry if you give the wrong answer; just try again.",
        "sentenceZh": "如果給了錯誤的答案別擔心，再試一次就好。",
        "otherForms": "wrongly/wrong (副詞(wrong可作形副同型))"
    },
    {
        "word": "dirty",
        "pos": "adj.",
        "meaning": "骯髒的",
        "theme": "形容詞(反意)",
        "sentence": "Take off your dirty shoes before you enter the house.",
        "sentenceZh": "進屋前脫掉你骯髒的鞋子。",
        "otherForms": "dirtier (比較級(去y加ier)), dirtiest (最高級(去y加iest))"
    },
    {
        "word": "clean",
        "pos": "adj. / v.",
        "meaning": "乾淨的 / 使~乾淨整潔",
        "theme": "形容詞(反意)",
        "sentence": "We must keep our classroom clean every day.",
        "sentenceZh": "我們必須每天保持教室乾淨。",
        "otherForms": "cleaner (比較級), cleanest (最高級), cleanly (副詞), cleans (三單), cleaning (現在分詞), cleaned (過去/ 過去分詞)"
    },
    {
        "word": "empty",
        "pos": "adj. / v.",
        "meaning": "空的",
        "theme": "形容詞(反意)",
        "sentence": "The water bottle is empty; I need to refill it.",
        "sentenceZh": "水壺空了，我需要重新裝水。",
        "otherForms": "emptier (比較級(去y加ier)), emptiest (最高級(去y加iest))"
    },
    {
        "word": "crowded",
        "pos": "adj.",
        "meaning": "擁擠的",
        "theme": "形容詞(反意)",
        "sentence": "The night market was very crowded with people last night.",
        "sentenceZh": "昨晚夜市裡擠滿了人。",
        "otherForms": "more crowded (比較級), most crowded (最高級)"
    },
    {
        "word": "dangerous",
        "pos": "adj.",
        "meaning": "危險的",
        "theme": "形容詞(反意)",
        "sentence": "It is dangerous to cross the street without looking.",
        "sentenceZh": "過馬路不看路是很危險的。",
        "otherForms": "more dangerous (比較級), most dangerous (最高級), dangerously (副詞)"
    },
    {
        "word": "safe",
        "pos": "adj.",
        "meaning": "安全的",
        "theme": "形容詞(反意)",
        "sentence": "Always wear a helmet to keep your head safe.",
        "sentenceZh": "總是戴上安全帽以保護頭部安全。",
        "otherForms": "safer (比較級), safest (最高級), safely (副詞)"
    },
    {
        "word": "excellent",
        "pos": "adj.",
        "meaning": "優秀的",
        "theme": "形容詞(反意)",
        "sentence": "She did an excellent job on her English reading report.",
        "sentenceZh": "她的英文讀書報告做得非常優秀。",
        "otherForms": "more excellent (比較級), most excellent (最高級), excellently (副詞)"
    },
    {
        "word": "fine",
        "pos": "adj.",
        "meaning": "好的 / 罰款",
        "theme": "形容詞(反意)",
        "sentence": "I feel completely fine after taking the medicine.",
        "sentenceZh": "吃完藥後我覺得完全好了。",
        "otherForms": "finer (比較級), finest (最高級), finely (副詞)"
    },
    {
        "word": "nice",
        "pos": "adj.",
        "meaning": "好的",
        "theme": "形容詞(反意)",
        "sentence": "It is very nice of you to help me with my homework.",
        "sentenceZh": "你幫我寫作業真是太好了。",
        "otherForms": "nicer (比較級), nicest (最高級), nicely (副詞)"
    },
    {
        "word": "good",
        "pos": "adj.",
        "meaning": "好的",
        "theme": "形容詞(反意)",
        "sentence": "Reading English storybooks is a good habit.",
        "sentenceZh": "讀英文故事書是個好習慣。",
        "otherForms": "better (比較級(不規則)), best (最高級(不規則)), well (副詞(不規則))"
    },
    {
        "word": "great",
        "pos": "adj.",
        "meaning": "好的",
        "theme": "形容詞(反意)",
        "sentence": "We had a great time playing the syntax repair game.",
        "sentenceZh": "我們玩語法修復遊戲玩得很開心。",
        "otherForms": "greater (比較級), greatest (最高級), greatly (副詞)"
    },
    {
        "word": "bad",
        "pos": "adj.",
        "meaning": "壞的",
        "theme": "形容詞(反意)",
        "sentence": "Eating too much candy is bad for your teeth.",
        "sentenceZh": "吃太多糖果對你的牙齒很壞。",
        "otherForms": "worse (比較級(不規則)), worst (最高級(不規則)), badly (副詞)"
    },
    {
        "word": "terrific",
        "pos": "adj.",
        "meaning": "極好的",
        "theme": "形容詞(反意)",
        "sentence": "He is a terrific badminton player who wins many games.",
        "sentenceZh": "他是個極好的羽球選手，贏得許多比賽。",
        "otherForms": "terrifically (副詞)"
    },
    {
        "word": "fantastic",
        "pos": "adj.",
        "meaning": "極好的",
        "theme": "形容詞(反意)",
        "sentence": "The weather today is fantastic for a picnic in the park.",
        "sentenceZh": "今天的天氣對於在公園野餐來說真是棒極了。",
        "otherForms": "more fantastic (比較級), most fantastic (最高級), fantastically (副詞)"
    },
    {
        "word": "marvelous",
        "pos": "adj.",
        "meaning": "不可思議的 / 極好的",
        "theme": "形容詞(反意)",
        "sentence": "The view from the top of the mountain is marvelous.",
        "sentenceZh": "從山頂看下去的風景真是不可思議的美。",
        "otherForms": "more marvelous (比較級), most marvelous (最高級), marvelously (副詞)"
    },
    {
        "word": "terrible",
        "pos": "adj.",
        "meaning": "糟糕的 / 可怕的",
        "theme": "形容詞(反意)",
        "sentence": "I had a terrible headache and couldn't go to school.",
        "sentenceZh": "我有可怕的頭痛，所以沒辦法上學。",
        "otherForms": "more terrible (比較級), most terrible (最高級), terribly (副詞(去le加ly))"
    },
    {
        "word": "local",
        "pos": "adj.",
        "meaning": "當地的",
        "theme": "形容詞(反意)",
        "sentence": "We like to eat at the local restaurants in Dounan.",
        "sentenceZh": "我們喜歡在斗南當地的餐廳吃飯。",
        "otherForms": "locally (副詞)"
    },
    {
        "word": "national",
        "pos": "adj.",
        "meaning": "國家的",
        "theme": "形容詞(反意)",
        "sentence": "The museum is a national treasure of our country.",
        "sentenceZh": "這座博物館是我們國家的國寶。",
        "otherForms": "nationally (副詞)"
    },
    {
        "word": "international",
        "pos": "adj.",
        "meaning": "國際的",
        "theme": "形容詞(反意)",
        "sentence": "English is a very important international language.",
        "sentenceZh": "英文是非常重要的國際語言。",
        "otherForms": "internationally (副詞)"
    },
    {
        "word": "foreign",
        "pos": "adj.",
        "meaning": "外國的",
        "theme": "形容詞(反意)",
        "sentence": "She likes to collect coins from different foreign countries.",
        "sentenceZh": "她喜歡收集來自不同外國國家的硬幣。",
        "otherForms": ""
    },
    {
        "word": "overseas",
        "pos": "adj. / adv.",
        "meaning": "海外的",
        "theme": "形容詞(反意)",
        "sentence": "My uncle works overseas and comes back once a year.",
        "sentenceZh": "我叔叔在海外工作，一年回來一次。",
        "otherForms": "overseas (形副同型)"
    },
    {
        "word": "latter",
        "pos": "adj.",
        "meaning": "後者的",
        "theme": "形容詞(反意)",
        "sentence": "Between the blue shirt and red shirt, I prefer the latter.",
        "sentenceZh": "藍襯衫和紅襯衫之間，我比較喜歡後者。",
        "otherForms": ""
    },
    {
        "word": "former",
        "pos": "adj.",
        "meaning": "前任的 / 以前的",
        "theme": "形容詞(反意)",
        "sentence": "Director Lee is a former teacher at our school.",
        "sentenceZh": "李主任是我們學校以前的老師。",
        "otherForms": "formerly (副詞)"
    },
    {
        "word": "possible",
        "pos": "adj.",
        "meaning": "可能的",
        "theme": "形容詞(反意)",
        "sentence": "It is possible to learn 2000 words if you practice every day.",
        "sentenceZh": "如果你每天練習，學會兩千個單字是可能的。",
        "otherForms": "possibly (副詞(去le加ly))"
    },
    {
        "word": "impossible",
        "pos": "adj.",
        "meaning": "不可能的",
        "theme": "形容詞(反意)",
        "sentence": "It is impossible for a fish to live without water.",
        "sentenceZh": "魚沒有水是絕對不可能活下去的。",
        "otherForms": "impossibly (副詞(去le加ly))"
    },
    {
        "word": "quiet",
        "pos": "adj.",
        "meaning": "安靜的",
        "theme": "形容詞(反意)",
        "sentence": "Please be quiet while the teacher is explaining the rules.",
        "sentenceZh": "老師在解釋規則時請保持安靜。",
        "otherForms": "quieter (比較級), quietest (最高級), quietly (副詞)"
    },
    {
        "word": "silent",
        "pos": "adj.",
        "meaning": "沉默的",
        "theme": "形容詞(反意)",
        "sentence": "The classroom was completely silent during the big test.",
        "sentenceZh": "大考時教室裡完全寂靜無聲。",
        "otherForms": "more silent (比較級), most silent (最高級), silently (副詞)"
    },
    {
        "word": "loud",
        "pos": "adj.",
        "meaning": "大聲的",
        "theme": "形容詞(反意)",
        "sentence": "The 80s pop music is too loud; please turn it down.",
        "sentenceZh": "80年代流行音樂太大聲了，請關小聲一點。",
        "otherForms": "louder (比較級), loudest (最高級), loudly (副詞)"
    },
    {
        "word": "noisy",
        "pos": "adj.",
        "meaning": "吵鬧的",
        "theme": "形容詞(反意)",
        "sentence": "The streets are very noisy during the morning rush hour.",
        "sentenceZh": "街道在早上尖峰時間非常吵鬧。",
        "otherForms": "noisier (比較級(去y加ier)), noisiest (最高級(去y加iest)), noisily (副詞(去y加ily))"
    },
    {
        "word": "positive",
        "pos": "adj.",
        "meaning": "正面的 / 陽性的",
        "theme": "形容詞(反意)",
        "sentence": "Always try to keep a positive attitude when learning.",
        "sentenceZh": "學習時總是試著保持正面的態度。",
        "otherForms": "more positive (比較級), most positive (最高級), positively (副詞)"
    },
    {
        "word": "negative",
        "pos": "adj.",
        "meaning": "負面的",
        "theme": "形容詞(反意)",
        "sentence": "Don't let his negative words affect your mood.",
        "sentenceZh": "別讓他的負面話語影響你的心情。",
        "otherForms": "more negative (比較級), most negative (最高級), negatively (副詞)"
    },
    {
        "word": "present",
        "pos": "adj.",
        "meaning": "現在的 / 出席的",
        "theme": "形容詞(反意)",
        "sentence": "Every student in the class is present today.",
        "sentenceZh": "班上每個學生今天都出席了。",
        "otherForms": "presents (複數型/三單), presenting (ing型), presented (過去/過去分詞)"
    },
    {
        "word": "absent",
        "pos": "adj.",
        "meaning": "缺席的",
        "theme": "形容詞(反意)",
        "sentence": "He was absent from school yesterday because he had a fever.",
        "sentenceZh": "他昨天因為發燒而缺席沒來上學。",
        "otherForms": ""
    },
    {
        "word": "private",
        "pos": "adj.",
        "meaning": "私人的",
        "theme": "形容詞(反意)",
        "sentence": "This is a private garden, so you cannot enter without asking.",
        "sentenceZh": "這是一座私人花園，所以你沒有詢問不能進入。",
        "otherForms": "more private (比較級), most private (最高級), privately (副詞)"
    },
    {
        "word": "public",
        "pos": "adj.",
        "meaning": "公眾的 / 公共的",
        "theme": "形容詞(反意)",
        "sentence": "The public library is a great place to study quietly.",
        "sentenceZh": "公共圖書館是個安靜讀書的好地方。",
        "otherForms": "publicly (副詞)"
    },
    {
        "word": "rare",
        "pos": "adj.",
        "meaning": "稀有的",
        "theme": "形容詞(反意)",
        "sentence": "This kind of blue butterfly is very rare in Taiwan.",
        "sentenceZh": "這種藍色蝴蝶在台灣非常稀有。",
        "otherForms": "rarer (比較級), rarest (最高級), rarely (副詞)"
    },
    {
        "word": "precious",
        "pos": "adj.",
        "meaning": "珍貴的",
        "theme": "形容詞(反意)",
        "sentence": "The memories of our childhood are very precious.",
        "sentenceZh": "我們童年的回憶非常珍貴。",
        "otherForms": "more precious (比較級), most precious (最高級), preciously (副詞)"
    },
    {
        "word": "ordinary",
        "pos": "adj.",
        "meaning": "普通的",
        "theme": "形容詞(反意)",
        "sentence": "It was just an ordinary day at school, nothing special happened.",
        "sentenceZh": "這只是在學校普通的一天，沒什麼特別的事發生。",
        "otherForms": "more ordinary (比較級), most ordinary (最高級), ordinarily (副詞(去y加ily))"
    },
    {
        "word": "general",
        "pos": "adj.",
        "meaning": "普遍的 / 一般的",
        "theme": "形容詞(反意)",
        "sentence": "The general rule is to raise your hand before speaking.",
        "sentenceZh": "一般的規則是發言前要舉手。",
        "otherForms": "generally (副詞)"
    },
    {
        "word": "common",
        "pos": "adj.",
        "meaning": "普通的 / 常見的",
        "theme": "形容詞(反意)",
        "sentence": "Catching a cold is very common during the winter season.",
        "sentenceZh": "在冬季感冒是非常常見的。",
        "otherForms": "more common (比較級), most common (最高級), commonly (副詞)"
    },
    {
        "word": "special",
        "pos": "adj.",
        "meaning": "特別的",
        "theme": "形容詞(反意)",
        "sentence": "I made a special card for my mother's birthday.",
        "sentenceZh": "我為媽媽的生日做了一張特別的卡片。",
        "otherForms": "more special (比較級), most special (最高級), specially (副詞)"
    },
    {
        "word": "strange",
        "pos": "adj.",
        "meaning": "奇怪的",
        "theme": "形容詞(反意)",
        "sentence": "I heard a strange noise coming from the old machine.",
        "sentenceZh": "我聽到那台舊機器發出奇怪的噪音。",
        "otherForms": "stranger (比較級), strangest (最高級), strangely (副詞)"
    },
    {
        "word": "unique",
        "pos": "adj.",
        "meaning": "獨特的",
        "theme": "形容詞(反意)",
        "sentence": "Every student has their own unique talent.",
        "sentenceZh": "每個學生都有自己獨特的天賦。",
        "otherForms": "more unique (比較級), most unique (最高級), uniquely (副詞)"
    },
    {
        "word": "same",
        "pos": "adj.",
        "meaning": "相同的",
        "theme": "形容詞(反意)",
        "sentence": "My cousin and I are exactly the same age.",
        "sentenceZh": "我表哥和我完全同齡。",
        "otherForms": ""
    },
    {
        "word": "different",
        "pos": "adj.",
        "meaning": "不同的",
        "theme": "形容詞(反意)",
        "sentence": "These two English words have very different meanings.",
        "sentenceZh": "這兩個英文單字有非常不同的意思。",
        "otherForms": "differently (副詞)"
    },
    {
        "word": "alike",
        "pos": "adj.",
        "meaning": "相似的",
        "theme": "形容詞(反意)",
        "sentence": "The two brothers look very much alike.",
        "sentenceZh": "這兩兄弟看起來非常相似。",
        "otherForms": ""
    },
    {
        "word": "similar",
        "pos": "adj.",
        "meaning": "相似的",
        "theme": "形容詞(反意)",
        "sentence": "Your new bicycle is very similar to mine.",
        "sentenceZh": "你的新腳踏車和我的非常相似。",
        "otherForms": "similarly (副詞)"
    },
    {
        "word": "simple",
        "pos": "adj.",
        "meaning": "簡單的",
        "theme": "形容詞(反意)",
        "sentence": "Let me explain this rule in a very simple way.",
        "sentenceZh": "讓我用非常簡單的方式來解釋這個規則。",
        "otherForms": "simpler (比較級), simplest (最高級), simply (副詞(去le加ly))"
    },
    {
        "word": "easy",
        "pos": "adj.",
        "meaning": "容易的",
        "theme": "形容詞(反意)",
        "sentence": "The first level of the vocabulary game is quite easy.",
        "sentenceZh": "單字遊戲的第一關滿容易的。",
        "otherForms": "easier (比較級(去y加ier)), easiest (最高級(去y加iest)), easily (副詞(去y加ily))"
    },
    {
        "word": "basic",
        "pos": "adj.",
        "meaning": "基本的",
        "theme": "形容詞(反意)",
        "sentence": "We are learning the basic rules of badminton today.",
        "sentenceZh": "我們今天在學習羽球的基本規則。",
        "otherForms": "basically (副詞)"
    },
    {
        "word": "difficult",
        "pos": "adj.",
        "meaning": "困難的",
        "theme": "形容詞(反意)",
        "sentence": "The math problem was too difficult for me to solve.",
        "sentenceZh": "這道數學題對我來說太困難了，解不出來。",
        "otherForms": "more difficult (比較級), most difficult (最高級)"
    },
    {
        "word": "hard",
        "pos": "adj. / adv.",
        "meaning": "硬的 / 困難的",
        "theme": "形容詞(反意)",
        "sentence": "It is hard to hit the ball if you don't practice your swing.",
        "sentenceZh": "如果你不練習揮拍，就很難打到球。",
        "otherForms": "harder (比較級), hardest (最高級), hard (形副同型(hardly為幾乎不))"
    },
    {
        "word": "soft",
        "pos": "adj.",
        "meaning": "柔軟的",
        "theme": "形容詞(反意)",
        "sentence": "The bed is very soft and comfortable.",
        "sentenceZh": "這張床非常柔軟舒適。",
        "otherForms": "softer (比較級), softest (最高級), softly (副詞(溫柔地))"
    },
    {
        "word": "major",
        "pos": "adj.",
        "meaning": "主要的",
        "theme": "形容詞(反意)",
        "sentence": "The major problem with the car is its broken engine.",
        "sentenceZh": "這輛車的主要問題是它壞掉的引擎。",
        "otherForms": ""
    },
    {
        "word": "main",
        "pos": "adj.",
        "meaning": "主要的",
        "theme": "形容詞(反意)",
        "sentence": "The main character in the story is a brave young boy.",
        "sentenceZh": "故事裡的主要角色是一位勇敢的小男孩。",
        "otherForms": "mainly (副詞)"
    },
    {
        "word": "primary",
        "pos": "adj.",
        "meaning": "主要的",
        "theme": "形容詞(反意)",
        "sentence": "Her primary goal this year is to improve her English.",
        "sentenceZh": "她今年的主要目標是增進她的英文。",
        "otherForms": "primarily (副詞)"
    },
    {
        "word": "minor",
        "pos": "adj.",
        "meaning": "次要的 / 較小的",
        "theme": "形容詞(反意)",
        "sentence": "Don't worry, it is just a minor mistake in the code.",
        "sentenceZh": "別擔心，那只是程式碼裡一個小小的錯誤。",
        "otherForms": ""
    },
    {
        "word": "secondary",
        "pos": "adj.",
        "meaning": "次要的",
        "theme": "形容詞(反意)",
        "sentence": "Winning the game is only of secondary importance; having fun is first.",
        "sentenceZh": "贏得比賽只是次要的，玩得開心才是第一。",
        "otherForms": ""
    },
    {
        "word": "maximum",
        "pos": "adj.",
        "meaning": "最大的",
        "theme": "形容詞(反意)",
        "sentence": "The maximum score you can get on this test is 100.",
        "sentenceZh": "你在這個考試能得到的最大分數是 100 分。",
        "otherForms": ""
    },
    {
        "word": "huge",
        "pos": "adj.",
        "meaning": "巨大的",
        "theme": "形容詞(反意)",
        "sentence": "They bought a huge TV for the living room.",
        "sentenceZh": "他們買了一台巨大的電視放在客廳。",
        "otherForms": "huger (比較級), hugest (最高級)"
    },
    {
        "word": "large",
        "pos": "adj.",
        "meaning": "大的",
        "theme": "形容詞(反意)",
        "sentence": "Elephants are very large and strong animals.",
        "sentenceZh": "大象是非常巨大且強壯的動物。",
        "otherForms": "larger (比較級), largest (最高級), largely (副詞)"
    },
    {
        "word": "big",
        "pos": "adj.",
        "meaning": "大的",
        "theme": "形容詞(反意)",
        "sentence": "My grandfather lives in a big house near the park.",
        "sentenceZh": "我爺爺住在公園附近的一間大房子裡。",
        "otherForms": "bigger (比較級(重複字尾)), biggest (最高級(重複字尾))"
    },
    {
        "word": "medium",
        "pos": "adj.",
        "meaning": "中等的",
        "theme": "形容詞(反意)",
        "sentence": "I would like to order a medium pizza with extra cheese.",
        "sentenceZh": "我想點一個加起司的中份披薩。",
        "otherForms": "mediums/media (複數型(不規則))"
    },
    {
        "word": "little",
        "pos": "adj.",
        "meaning": "小的",
        "theme": "形容詞(反意)",
        "sentence": "The little girl was holding her mother's hand tightly.",
        "sentenceZh": "小女孩緊緊牽著她媽媽的手。",
        "otherForms": "less (比較級(不規則)), least (最高級(不規則))"
    },
    {
        "word": "small",
        "pos": "adj.",
        "meaning": "小的",
        "theme": "形容詞(反意)",
        "sentence": "The mouse is a very small animal that hides easily.",
        "sentenceZh": "老鼠是一種非常小、容易躲藏的動物。",
        "otherForms": "smaller (比較級), smallest (最高級)"
    },
    {
        "word": "tiny",
        "pos": "adj.",
        "meaning": "微小的",
        "theme": "形容詞(反意)",
        "sentence": "Ants are tiny insects, but they are very strong.",
        "sentenceZh": "螞蟻是微小的昆蟲，但牠們非常強壯。",
        "otherForms": "tinier (比較級(去y加ier)), tiniest (最高級(去y加iest))"
    },
    {
        "word": "high",
        "pos": "adj. / adv.",
        "meaning": "高的",
        "theme": "形容詞(反意)",
        "sentence": "The airplane flies very high in the clear blue sky.",
        "sentenceZh": "飛機在清澈的藍天中飛得非常高。",
        "otherForms": "higher (比較級), highest (最高級), high/highly (形副同型(highly表高度地))"
    },
    {
        "word": "low",
        "pos": "adj. / adv.",
        "meaning": "低的",
        "theme": "形容詞(反意)",
        "sentence": "The temperature is very low today, so wear a heavy coat.",
        "sentenceZh": "今天溫度很低，所以要穿厚外套。",
        "otherForms": "lower (比較級), lowest (最高級)"
    },
    {
        "word": "heavy",
        "pos": "adj. / adv.",
        "meaning": "重的",
        "theme": "形容詞(反意)",
        "sentence": "The box full of books is too heavy for me to carry.",
        "sentenceZh": "這箱裝滿書的箱子對我來說太重了搬不動。",
        "otherForms": "heavier (比較級(去y加ier)), heaviest (最高級(去y加iest)), heavily (副詞(去y加ily))"
    },
    {
        "word": "light",
        "pos": "adj. / adv.",
        "meaning": "輕的",
        "theme": "形容詞(反意)",
        "sentence": "A feather is very light and can float in the air.",
        "sentenceZh": "羽毛非常輕，能在空中漂浮。",
        "otherForms": "lighter (比較級), lightest (最高級), lightly (副詞)"
    },
    {
        "word": "short",
        "pos": "adj. / adv.",
        "meaning": "矮的 / 短的",
        "theme": "形容詞(反意)",
        "sentence": "My hair is getting too long; I want to cut it short.",
        "sentenceZh": "我的頭髮越來越長了，我想把它剪短。",
        "otherForms": "shorter (比較級), shortest (最高級), shortly (副詞(不久))"
    },
    {
        "word": "long",
        "pos": "adj. / adv.",
        "meaning": "長的",
        "theme": "形容詞(反意)",
        "sentence": "The river is very long and goes through many cities.",
        "sentenceZh": "這條河流非常長，穿過許多城市。",
        "otherForms": "longer (比較級), longest (最高級)"
    },
    {
        "word": "narrow",
        "pos": "adj.",
        "meaning": "窄的",
        "theme": "形容詞(反意)",
        "sentence": "The car could not pass through the narrow street.",
        "sentenceZh": "汽車無法通過這條狹窄的街道。",
        "otherForms": "narrower (比較級), narrowest (最高級), narrowly (副詞)"
    },
    {
        "word": "wide",
        "pos": "adj.",
        "meaning": "寬的",
        "theme": "形容詞(反意)",
        "sentence": "The river is too wide for us to swim across.",
        "sentenceZh": "這條河太寬了，我們無法游過去。",
        "otherForms": "wider (比較級), widest (最高級), widely (副詞)"
    },
    {
        "word": "broad",
        "pos": "adj.",
        "meaning": "寬廣的",
        "theme": "形容詞(反意)",
        "sentence": "He stood on the hill and looked at the broad green plain.",
        "sentenceZh": "他站在山丘上看著寬廣的綠色平原。",
        "otherForms": "broader (比較級), broadest (最高級), broadly (副詞)"
    },
    {
        "word": "old",
        "pos": "adj.",
        "meaning": "年老的 / 舊的",
        "theme": "形容詞(反意)",
        "sentence": "My grandfather is very old but still very healthy.",
        "sentenceZh": "我爺爺很老了但還是非常健康。",
        "otherForms": "older (比較級), oldest (最高級)"
    },
    {
        "word": "new",
        "pos": "adj.",
        "meaning": "新的",
        "theme": "形容詞(反意)",
        "sentence": "Our school will build a new library next year.",
        "sentenceZh": "我們學校明年將蓋一座新圖書館。",
        "otherForms": "newer (比較級), newest (最高級), newly (副詞)"
    },
    {
        "word": "quick",
        "pos": "adj.",
        "meaning": "迅速的",
        "theme": "形容詞(反意)",
        "sentence": "We had a quick lunch before the afternoon class started.",
        "sentenceZh": "我們在下午的課開始前迅速吃完了午餐。",
        "otherForms": "quicker (比較級), quickest (最高級), quickly (副詞)"
    },
    {
        "word": "fast",
        "pos": "adj. / adv.",
        "meaning": "快的",
        "theme": "形容詞(反意)",
        "sentence": "The cheetah is the fastest animal on land.",
        "sentenceZh": "獵豹是陸地上最快的動物。",
        "otherForms": "faster (比較級), fastest (最高級), fast (形副同型)"
    },
    {
        "word": "slow",
        "pos": "adj.",
        "meaning": "慢的",
        "theme": "形容詞(反意)",
        "sentence": "The turtle walked at a very slow speed across the road.",
        "sentenceZh": "烏龜以非常慢的速度走過馬路。",
        "otherForms": "slower (比較級), slowest (最高級), slowly (副詞)"
    },
    {
        "word": "cheap",
        "pos": "adj.",
        "meaning": "便宜的",
        "theme": "形容詞(反意)",
        "sentence": "You can buy a lot of cheap and delicious food at the night market.",
        "sentenceZh": "你可以在夜市買到許多便宜又美味的食物。",
        "otherForms": "cheaper (比較級), cheapest (最高級), cheaply (副詞)"
    },
    {
        "word": "expensive",
        "pos": "adj.",
        "meaning": "昂貴的",
        "theme": "形容詞(反意)",
        "sentence": "That gold watch is too expensive; I cannot buy it.",
        "sentenceZh": "那隻金錶太昂貴了，我買不起。",
        "otherForms": "more expensive (比較級), most expensive (最高級), expensively (副詞)"
    },
    {
        "word": "deaf",
        "pos": "adj.",
        "meaning": "失聰的",
        "theme": "形容人",
        "sentence": "He uses sign language to talk because he is deaf.",
        "sentenceZh": "他因為失聰，所以使用手語交談。",
        "otherForms": "deafer (比較級), deafest (最高級)"
    },
    {
        "word": "blind",
        "pos": "adj. / v.",
        "meaning": "失明的",
        "theme": "形容人",
        "sentence": "The blind man uses a white cane to help him walk safely.",
        "sentenceZh": "這位失明男士使用白手杖幫助他安全行走。",
        "otherForms": "blindly (副詞)"
    },
    {
        "word": "young",
        "pos": "adj.",
        "meaning": "年輕的",
        "theme": "形容人",
        "sentence": "The young badminton player runs very fast on the court.",
        "sentenceZh": "年輕的羽球選手在球場上跑得非常快。",
        "otherForms": "younger (比較級), youngest (最高級)"
    },
    {
        "word": "tall",
        "pos": "adj.",
        "meaning": "高的",
        "theme": "形容人",
        "sentence": "Yao Ming is a very tall and famous basketball player.",
        "sentenceZh": "姚明是一位非常高且知名的籃球員。",
        "otherForms": "taller (比較級), tallest (最高級)"
    },
    {
        "word": "careful",
        "pos": "adj.",
        "meaning": "小心的",
        "theme": "形容人",
        "sentence": "Please be careful when you cross the busy street.",
        "sentenceZh": "過繁忙的馬路時請小心。",
        "otherForms": "more careful (比較級), most careful (最高級), carefully (副詞)"
    },
    {
        "word": "careless",
        "pos": "adj.",
        "meaning": "粗心的",
        "theme": "形容人",
        "sentence": "He lost his keys because he was being too careless.",
        "sentenceZh": "他因為太粗心而弄丟了鑰匙。",
        "otherForms": "more careless (比較級), most careless (最高級), carelessly (副詞)"
    },
    {
        "word": "diligent",
        "pos": "adj.",
        "meaning": "勤奮的",
        "theme": "形容人",
        "sentence": "A diligent student always finishes their homework on time.",
        "sentenceZh": "勤奮的學生總是準時完成作業。",
        "otherForms": "more diligent (比較級), most diligent (最高級), diligently (副詞)"
    },
    {
        "word": "hard-working",
        "pos": "adj.",
        "meaning": "努力工作的",
        "theme": "形容人",
        "sentence": "Her parents are very hard-working farmers.",
        "sentenceZh": "她的父母是非常努力工作的農夫。",
        "otherForms": "more hard-working (比較級), most hard-working (最高級)"
    },
    {
        "word": "lazy",
        "pos": "adj.",
        "meaning": "懶惰的",
        "theme": "形容人",
        "sentence": "The lazy cat slept on the sofa all afternoon.",
        "sentenceZh": "懶惰的貓在沙發上睡了整個下午。",
        "otherForms": "lazier (比較級(去y加ier)), laziest (最高級(去y加iest)), lazily (副詞(去y加ily))"
    },
    {
        "word": "dishonest",
        "pos": "adj.",
        "meaning": "不誠實的",
        "theme": "形容人",
        "sentence": "It is dishonest to copy answers from other students.",
        "sentenceZh": "抄襲其他學生的答案是不誠實的。",
        "otherForms": "more dishonest (比較級), most dishonest (最高級), dishonestly (副詞)"
    },
    {
        "word": "honest",
        "pos": "adj.",
        "meaning": "誠實的",
        "theme": "形容人",
        "sentence": "An honest person will always tell you the truth.",
        "sentenceZh": "誠實的人總是會告訴你真相。",
        "otherForms": "more honest (比較級), most honest (最高級), honestly (副詞)"
    },
    {
        "word": "generous",
        "pos": "adj.",
        "meaning": "慷慨的",
        "theme": "形容人",
        "sentence": "My uncle is very generous and always buys us gifts.",
        "sentenceZh": "我叔叔非常慷慨，總是買禮物給我們。",
        "otherForms": "more generous (比較級), most generous (最高級), generously (副詞)"
    },
    {
        "word": "selfish",
        "pos": "adj.",
        "meaning": "自私的",
        "theme": "形容人",
        "sentence": "The selfish boy refused to share his toys with others.",
        "sentenceZh": "那個自私的男孩拒絕和別人分享他的玩具。",
        "otherForms": "more selfish (比較級), most selfish (最高級), selfishly (副詞)"
    },
    {
        "word": "stingy",
        "pos": "adj.",
        "meaning": "小氣的",
        "theme": "形容人",
        "sentence": "He is so stingy that he never buys a drink for his friends.",
        "sentenceZh": "他太小氣了，從來不請朋友喝飲料。",
        "otherForms": "stingier (比較級(去y加ier)), stingiest (最高級(去y加iest)), stingily (副詞(去y加ily))"
    },
    {
        "word": "greedy",
        "pos": "adj.",
        "meaning": "貪心的",
        "theme": "形容人",
        "sentence": "The greedy dog tried to eat all the food in the bowl.",
        "sentenceZh": "貪心的狗試圖吃掉碗裡所有的食物。",
        "otherForms": "greedier (比較級(去y加ier)), greediest (最高級(去y加iest)), greedily (副詞(去y加ily))"
    },
    {
        "word": "polite",
        "pos": "adj.",
        "meaning": "有禮貌的",
        "theme": "形容人",
        "sentence": "It is polite to say \"thank you\" when someone helps you.",
        "sentenceZh": "當別人幫你時，說「謝謝」是有禮貌的。",
        "otherForms": "politer (比較級), politest (最高級), politely (副詞)"
    },
    {
        "word": "impolite",
        "pos": "adj.",
        "meaning": "不禮貌的",
        "theme": "形容人",
        "sentence": "It is impolite to talk loudly when the teacher is speaking.",
        "sentenceZh": "老師說話時大聲講話是不禮貌的。",
        "otherForms": "more impolite (比較級), most impolite (最高級), impolitely (副詞)"
    },
    {
        "word": "rich",
        "pos": "adj.",
        "meaning": "有錢的",
        "theme": "形容人",
        "sentence": "The fruit in Taiwan is very rich in vitamin C.",
        "sentenceZh": "台灣的水果富含維他命C。",
        "otherForms": "richer (比較級), richest (最高級), richly (副詞)"
    },
    {
        "word": "poor",
        "pos": "adj.",
        "meaning": "貧窮的 / 可憐的",
        "theme": "形容人",
        "sentence": "The poor little bird hurt its wing and couldn't fly.",
        "sentenceZh": "可憐的小鳥傷了翅膀沒辦法飛。",
        "otherForms": "poorer (比較級), poorest (最高級), poorly (副詞)"
    },
    {
        "word": "silly",
        "pos": "adj.",
        "meaning": "傻的",
        "theme": "形容人",
        "sentence": "Stop asking silly questions and focus on the grammar game.",
        "sentenceZh": "別再問傻問題了，專心玩文法遊戲吧。",
        "otherForms": "sillier (比較級(去y加ier)), silliest (最高級(去y加iest))"
    },
    {
        "word": "foolish",
        "pos": "adj.",
        "meaning": "愚蠢的",
        "theme": "形容人",
        "sentence": "It was a foolish idea to go hiking in the heavy rain.",
        "sentenceZh": "在大雨中去爬山是個愚蠢的主意。",
        "otherForms": "more foolish (比較級), most foolish (最高級), foolishly (副詞)"
    },
    {
        "word": "stupid",
        "pos": "adj.",
        "meaning": "笨的",
        "theme": "形容人",
        "sentence": "I felt stupid when I forgot my good friend's name.",
        "sentenceZh": "當我忘記好朋友的名字時我覺得自己很笨。",
        "otherForms": "stupider (比較級), stupidest (最高級), stupidly (副詞)"
    },
    {
        "word": "dumb",
        "pos": "adj.",
        "meaning": "啞的",
        "theme": "形容人",
        "sentence": "Don't say dumb things; think before you speak.",
        "sentenceZh": "別說蠢話，三思而後行。",
        "otherForms": "dumber (比較級), dumbest (最高級), dumbly (副詞)"
    },
    {
        "word": "intelligent",
        "pos": "adj.",
        "meaning": "有智慧的",
        "theme": "形容人",
        "sentence": "Dolphins are highly intelligent animals in the ocean.",
        "sentenceZh": "海豚是海洋中高度有智慧的動物。",
        "otherForms": "more intelligent (比較級), most intelligent (最高級), intelligently (副詞)"
    },
    {
        "word": "smart",
        "pos": "adj.",
        "meaning": "聰明的",
        "theme": "形容人",
        "sentence": "You have to be smart to solve this difficult puzzle.",
        "sentenceZh": "你必須很聰明才能解開這個困難的謎題。",
        "otherForms": "smarter (比較級), smartest (最高級), smartly (副詞)"
    },
    {
        "word": "wise",
        "pos": "adj.",
        "meaning": "有智慧的",
        "theme": "形容人",
        "sentence": "My grandfather gave me some wise advice about life.",
        "sentenceZh": "我爺爺給了我一些關於人生的智慧建議。",
        "otherForms": "wiser (比較級), wisest (最高級), wisely (副詞)"
    },
    {
        "word": "clever",
        "pos": "adj.",
        "meaning": "聰明的",
        "theme": "形容人",
        "sentence": "The clever monkey found a way to open the box.",
        "sentenceZh": "聰明的猴子找到了打開盒子的方法。",
        "otherForms": "cleverer (比較級), cleverest (最高級), cleverly (副詞)"
    },
    {
        "word": "talkative",
        "pos": "adj.",
        "meaning": "健談的",
        "theme": "形容人",
        "sentence": "She is very talkative and likes to chat with everyone.",
        "sentenceZh": "她非常健談，喜歡和每個人聊天。",
        "otherForms": "more talkative (比較級), most talkative (最高級)"
    },
    {
        "word": "shy",
        "pos": "adj.",
        "meaning": "害羞的",
        "theme": "形容人",
        "sentence": "The shy little boy hid behind his mother's legs.",
        "sentenceZh": "害羞的小男孩躲在他媽媽的腿後面。",
        "otherForms": "shyer (比較級), shyest (最高級), shyly (副詞)"
    },
    {
        "word": "beautiful",
        "pos": "adj.",
        "meaning": "美麗的",
        "theme": "形容人",
        "sentence": "The bride looked beautiful in her white wedding dress.",
        "sentenceZh": "新娘穿著白紗看起來很美麗。",
        "otherForms": "more beautiful (比較級), most beautiful (最高級), beautifully (副詞)"
    },
    {
        "word": "pretty",
        "pos": "adj.",
        "meaning": "漂亮的",
        "theme": "形容人",
        "sentence": "She has a pretty smile that makes everyone happy.",
        "sentenceZh": "她有一個讓每個人都開心的漂亮笑容。",
        "otherForms": "prettier (比較級(去y加ier)), prettiest (最高級(去y加iest)), prettily (副詞(去y加ily))"
    },
    {
        "word": "handsome",
        "pos": "adj.",
        "meaning": "英俊的",
        "theme": "形容人",
        "sentence": "The actor in that movie is very tall and handsome.",
        "sentenceZh": "那部電影裡的男演員非常高大英俊。",
        "otherForms": "more handsome (比較級), most handsome (最高級), handsomely (副詞)"
    },
    {
        "word": "nice-looking",
        "pos": "adj.",
        "meaning": "好看的",
        "theme": "形容人",
        "sentence": "That is a very nice-looking watch you are wearing.",
        "sentenceZh": "你戴的那隻手錶非常好看。",
        "otherForms": "better-looking (比較級(不規則)), best-looking (最高級(不規則))"
    },
    {
        "word": "ugly",
        "pos": "adj.",
        "meaning": "醜陋的",
        "theme": "形容人",
        "sentence": "The monster in the game has an ugly green face.",
        "sentenceZh": "遊戲裡的怪物有著一張醜陋的綠臉。",
        "otherForms": "uglier (比較級(去y加ier)), ugliest (最高級(去y加iest))"
    },
    {
        "word": "chubby",
        "pos": "adj.",
        "meaning": "圓胖的",
        "theme": "形容人",
        "sentence": "The baby has cute, chubby cheeks.",
        "sentenceZh": "小嬰兒有著可愛圓胖的臉頰。",
        "otherForms": "chubbier (比較級(去y加ier)), chubbiest (最高級(去y加iest))"
    },
    {
        "word": "fat",
        "pos": "adj.",
        "meaning": "胖的",
        "theme": "形容人",
        "sentence": "My cat is getting too fat because it eats too much.",
        "sentenceZh": "我的貓因為吃太多變得太胖了。",
        "otherForms": "fatter (比較級(重複字尾)), fattest (最高級(重複字尾))"
    },
    {
        "word": "over-weight",
        "pos": "adj.",
        "meaning": "過重的",
        "theme": "形容人",
        "sentence": "The doctor told him he is slightly over-weight and needs to exercise.",
        "sentenceZh": "醫生告訴他他稍微過重，需要運動。",
        "otherForms": ""
    },
    {
        "word": "skinny",
        "pos": "adj.",
        "meaning": "極瘦的",
        "theme": "形容人",
        "sentence": "The stray dog looked very skinny and hungry.",
        "sentenceZh": "那隻流浪狗看起來極度瘦弱且飢餓。",
        "otherForms": "skinnier (比較級(去y加ier)), skinniest (最高級(去y加iest))"
    },
    {
        "word": "slender",
        "pos": "adj.",
        "meaning": "苗條的",
        "theme": "形容人",
        "sentence": "The dancer has a very long and slender body.",
        "sentenceZh": "那位舞者有著非常修長苗條的身材。",
        "otherForms": "slenderer (比較級), slenderest (最高級)"
    },
    {
        "word": "slim",
        "pos": "adj.",
        "meaning": "纖細的",
        "theme": "形容人",
        "sentence": "She stays slim by doing yoga and eating healthy food.",
        "sentenceZh": "她靠著做瑜珈和吃健康食物保持纖細。",
        "otherForms": "slimmer (比較級(重複字尾)), slimmest (最高級(重複字尾))"
    },
    {
        "word": "thin",
        "pos": "adj.",
        "meaning": "瘦的",
        "theme": "形容人",
        "sentence": "Please cut the cheese into very thin slices.",
        "sentenceZh": "請把起司切成非常薄的片狀。",
        "otherForms": "thinner (比較級(重複字尾)), thinnest (最高級(重複字尾))"
    },
    {
        "word": "under-weight",
        "pos": "adj.",
        "meaning": "體重不足的",
        "theme": "形容人",
        "sentence": "The rescued kitten was under-weight and needed milk.",
        "sentenceZh": "被救出的小貓體重不足，需要喝牛奶。",
        "otherForms": ""
    },
    {
        "word": "brave",
        "pos": "adj.",
        "meaning": "勇敢的",
        "theme": "形容人",
        "sentence": "The brave firefighter saved the family from the burning house.",
        "sentenceZh": "勇敢的消防員從燃燒的房子裡救出了這家人。",
        "otherForms": "braver (比較級), bravest (最高級), bravely (副詞)"
    },
    {
        "word": "cute",
        "pos": "adj.",
        "meaning": "可愛的",
        "theme": "形容人",
        "sentence": "We designed a cute character for the English vocabulary book.",
        "sentenceZh": "我們為英文單字書設計了一個可愛的角色。",
        "otherForms": "cuter (比較級), cutest (最高級)"
    },
    {
        "word": "active",
        "pos": "adj.",
        "meaning": "活躍的",
        "theme": "形容人",
        "sentence": "My grandfather is very active and plays sports every morning.",
        "sentenceZh": "我爺爺非常活躍，每天早上都做運動。",
        "otherForms": "more active (比較級), most active (最高級), actively (副詞)"
    },
    {
        "word": "confident",
        "pos": "adj.",
        "meaning": "有自信的",
        "theme": "形容人",
        "sentence": "You should be confident when you speak English on stage.",
        "sentenceZh": "當你在台上說英文時應該要有自信。",
        "otherForms": "more confident (比較級), most confident (最高級), confidently (副詞)"
    },
    {
        "word": "considerate",
        "pos": "adj.",
        "meaning": "體貼的",
        "theme": "形容人",
        "sentence": "It is very considerate of you to bring me a cup of hot tea.",
        "sentenceZh": "你帶杯熱茶給我真是太體貼了。",
        "otherForms": "more considerate (比較級), most considerate (最高級), considerately (副詞)"
    },
    {
        "word": "cool",
        "pos": "adj. / v.",
        "meaning": "酷的",
        "theme": "形容人",
        "sentence": "Wearing sunglasses makes you look very cool.",
        "sentenceZh": "戴墨鏡讓你看起來很酷。",
        "otherForms": "cooler (比較級), coolest (最高級), coolly (副詞)"
    },
    {
        "word": "curious",
        "pos": "adj.",
        "meaning": "好奇的",
        "theme": "形容人",
        "sentence": "The curious little boy asked a lot of questions about the stars.",
        "sentenceZh": "那個好奇的小男孩問了許多關於星星的問題。",
        "otherForms": "more curious (比較級), most curious (最高級), curiously (副詞)"
    },
    {
        "word": "energetic",
        "pos": "adj.",
        "meaning": "精力充沛的",
        "theme": "形容人",
        "sentence": "The students are very energetic during PE class.",
        "sentenceZh": "學生們在體育課時精力充沛。",
        "otherForms": "more energetic (比較級), most energetic (最高級), energetically (副詞)"
    },
    {
        "word": "famous",
        "pos": "adj.",
        "meaning": "著名的",
        "theme": "形容人",
        "sentence": "Tai Tzu-ying is a very famous badminton player from Taiwan.",
        "sentenceZh": "戴資穎是一位來自台灣且非常著名的羽球選手。",
        "otherForms": "more famous (比較級), most famous (最高級), famously (副詞)"
    },
    {
        "word": "frank",
        "pos": "adj.",
        "meaning": "坦率的",
        "theme": "形容人",
        "sentence": "To be frank with you, I don't really like this movie.",
        "sentenceZh": "坦率地告訴你，我並不是很喜歡這部電影。",
        "otherForms": "franker (比較級), frankest (最高級), frankly (副詞)"
    },
    {
        "word": "friendly",
        "pos": "adj.",
        "meaning": "友善的",
        "theme": "形容人",
        "sentence": "The friendly clerk smiled and helped us find the books.",
        "sentenceZh": "友善的店員微笑著幫我們找書。",
        "otherForms": "friendlier (比較級(去y加ier)), friendliest (最高級(去y加iest))"
    },
    {
        "word": "funny",
        "pos": "adj.",
        "meaning": "有趣的",
        "theme": "形容人",
        "sentence": "The teacher told a very funny story to make us laugh.",
        "sentenceZh": "老師講了一個非常有趣的故事讓我們大笑。",
        "otherForms": "funnier (比較級(去y加ier)), funniest (最高級(去y加iest)), funnily (副詞(去y加ily))"
    },
    {
        "word": "gentle",
        "pos": "adj.",
        "meaning": "溫和的",
        "theme": "形容人",
        "sentence": "She has a very gentle voice when she speaks to babies.",
        "sentenceZh": "她和嬰兒說話時聲音非常溫和。",
        "otherForms": "gentler (比較級), gentlest (最高級), gently (副詞(去e加y))"
    },
    {
        "word": "humble",
        "pos": "adj.",
        "meaning": "謙虛的",
        "theme": "形容人",
        "sentence": "Even though he is a genius, he is still very humble.",
        "sentenceZh": "儘管他是個天才，他依然非常謙虛。",
        "otherForms": "humbler (比較級), humblest (最高級), humbly (副詞(去e加y))"
    },
    {
        "word": "humorous",
        "pos": "adj.",
        "meaning": "幽默的",
        "theme": "形容人",
        "sentence": "My uncle is a humorous man who always tells good jokes.",
        "sentenceZh": "我叔叔是個幽默的人，總是講好笑的笑話。",
        "otherForms": "more humorous (比較級), most humorous (最高級), humorously (副詞)"
    },
    {
        "word": "kind",
        "pos": "adj. / n.",
        "meaning": "仁慈的 / 親切的 / 種類",
        "theme": "形容人",
        "sentence": "It was very kind of you to help the old lady cross the street.",
        "sentenceZh": "你幫助老太太過馬路真是太仁慈了。",
        "otherForms": "kinder (比較級), kindest (最高級), kindly (副詞)"
    },
    {
        "word": "lovely",
        "pos": "adj.",
        "meaning": "可愛的",
        "theme": "形容人",
        "sentence": "We had a lovely picnic in the park yesterday afternoon.",
        "sentenceZh": "我們昨天下午在公園度過了一場美好的野餐。",
        "otherForms": "lovelier (比較級(去y加ier)), loveliest (最高級(去y加iest))"
    },
    {
        "word": "patient",
        "pos": "adj.",
        "meaning": "有耐心的",
        "theme": "形容人",
        "sentence": "You need to be patient when you are teaching beginners.",
        "sentenceZh": "當你在教初學者時，你需要有耐心。",
        "otherForms": "more patient (比較級), most patient (最高級), patiently (副詞)"
    },
    {
        "word": "sincere",
        "pos": "adj.",
        "meaning": "真誠的",
        "theme": "形容人",
        "sentence": "He gave me a sincere apology for his mistake.",
        "sentenceZh": "他為他的錯誤給了我一個真誠的道歉。",
        "otherForms": "sincerer (比較級), sincerest (最高級), sincerely (副詞)"
    },
    {
        "word": "successful",
        "pos": "adj.",
        "meaning": "成功的",
        "theme": "形容人",
        "sentence": "The English teaching seminar was a very successful event.",
        "sentenceZh": "那場英語教學研討會是個非常成功的活動。",
        "otherForms": "more successful (比較級), most successful (最高級), successfully (副詞)"
    },
    {
        "word": "married",
        "pos": "adj.",
        "meaning": "已婚的",
        "theme": "形容人",
        "sentence": "The happy couple got married in a beautiful church.",
        "sentenceZh": "這對快樂的伴侶在一座美麗的教堂結了婚。",
        "otherForms": ""
    },
    {
        "word": "childish",
        "pos": "adj.",
        "meaning": "幼稚的",
        "theme": "形容人",
        "sentence": "Stop acting in such a childish way; you are a junior high student now.",
        "sentenceZh": "別再表現得這麼幼稚了，你現在是國中生了。",
        "otherForms": "more childish (比較級), most childish (最高級), childishly (副詞)"
    },
    {
        "word": "childlike",
        "pos": "adj.",
        "meaning": "孩子般的",
        "theme": "形容人",
        "sentence": "The old man has a childlike wonder for magic tricks.",
        "sentenceZh": "那位老人對魔術有著孩子般的好奇心。",
        "otherForms": ""
    },
    {
        "word": "crazy",
        "pos": "adj.",
        "meaning": "瘋狂的",
        "theme": "形容人",
        "sentence": "The weather is crazy today; it's hot and raining at the same time.",
        "sentenceZh": "今天天氣很瘋狂，又熱又同時在下雨。",
        "otherForms": "crazier (比較級(去y加ier)), craziest (最高級(去y加iest)), crazily (副詞(去y加ily))"
    },
    {
        "word": "cruel",
        "pos": "adj.",
        "meaning": "殘忍的",
        "theme": "形容人",
        "sentence": "It is cruel to keep a large bird in a very small cage.",
        "sentenceZh": "把大鳥關在極小的籠子裡是很殘忍的。",
        "otherForms": "crueler (比較級), cruelest (最高級), cruelly (副詞)"
    },
    {
        "word": "evil",
        "pos": "adj.",
        "meaning": "邪惡的",
        "theme": "形容人",
        "sentence": "The brave prince fought the evil monster to save the princess.",
        "sentenceZh": "勇敢的王子對抗邪惡怪物以拯救公主。",
        "otherForms": "eviler (比較級), evilest (最高級), evilly (副詞)"
    },
    {
        "word": "naughty",
        "pos": "adj.",
        "meaning": "頑皮的",
        "theme": "形容人",
        "sentence": "The naughty boy hid his sister's shoes under the bed.",
        "sentenceZh": "那個頑皮的男孩把他妹妹的鞋子藏在床下。",
        "otherForms": "naughtier (比較級(去y加ier)), naughtiest (最高級(去y加iest)), naughtily (副詞(去y加ily))"
    },
    {
        "word": "proud",
        "pos": "adj.",
        "meaning": "驕傲的",
        "theme": "形容人",
        "sentence": "I am very proud of my students for passing the vocabulary test.",
        "sentenceZh": "我非常為通過單字測驗的學生們感到驕傲。",
        "otherForms": "prouder (比較級), proudest (最高級), proudly (副詞)"
    },
    {
        "word": "rude",
        "pos": "adj.",
        "meaning": "粗魯的",
        "theme": "形容人",
        "sentence": "It is rude to point your finger at someone when talking.",
        "sentenceZh": "講話時用手指指著別人是很粗魯的。",
        "otherForms": "ruder (比較級), rudest (最高級), rudely (副詞)"
    },
    {
        "word": "sneaky",
        "pos": "adj.",
        "meaning": "鬼鬼祟祟的",
        "theme": "形容人",
        "sentence": "The sneaky cat tried to steal the fish from the table.",
        "sentenceZh": "鬼鬼祟祟的貓試圖從桌上偷走魚。",
        "otherForms": "sneakier (比較級(去y加ier)), sneakiest (最高級(去y加iest)), sneakily (副詞(去y加ily))"
    },
    {
        "word": "desire",
        "pos": "n.",
        "meaning": "慾望",
        "theme": "情緒",
        "sentence": "He has a strong desire to win the badminton championship.",
        "sentenceZh": "他有贏得羽球冠軍的強烈慾望。",
        "otherForms": "desires (複數型/三單)"
    },
    {
        "word": "emotion",
        "pos": "n.",
        "meaning": "情緒",
        "theme": "情緒",
        "sentence": "Music is a great way to express your deep emotions.",
        "sentenceZh": "音樂是表達你深層情緒的好方法。",
        "otherForms": "emotions (複數型)"
    },
    {
        "word": "fear",
        "pos": "n.",
        "meaning": "恐懼",
        "theme": "情緒",
        "sentence": "The little girl has a deep fear of the dark.",
        "sentenceZh": "小女孩對黑暗有著深層的恐懼。",
        "otherForms": "fears (複數/三單), fearing (ing型), feared (過去式/分詞)"
    },
    {
        "word": "feeling",
        "pos": "n.",
        "meaning": "感覺",
        "theme": "情緒",
        "sentence": "I have a bad feeling about this upcoming math test.",
        "sentenceZh": "我對這即將到來的數學考試有種不好的感覺。",
        "otherForms": "feelings (複數型)"
    },
    {
        "word": "pleasure",
        "pos": "n.",
        "meaning": "樂趣",
        "theme": "情緒",
        "sentence": "It is my pleasure to help you design the class badge.",
        "sentenceZh": "能幫你設計班級徽章是我的榮幸（樂趣）。",
        "otherForms": "pleasures (複數型)"
    },
    {
        "word": "pride",
        "pos": "n.",
        "meaning": "驕傲 / 自豪",
        "theme": "情緒",
        "sentence": "They take pride in their school.",
        "sentenceZh": "他們以自己的學校為榮。",
        "otherForms": "proud (驕傲的 - 形容詞)"
    },
    {
        "word": "anger",
        "pos": "n.",
        "meaning": "憤怒",
        "theme": "情緒",
        "sentence": "He could not hide his anger when he saw the broken window.",
        "sentenceZh": "當他看到破掉的窗戶時，他無法隱藏他的憤怒。",
        "otherForms": "angers (三單)"
    },
    {
        "word": "attention",
        "pos": "n.",
        "meaning": "注意力",
        "theme": "情緒",
        "sentence": "Please pay attention to the teacher during the class.",
        "sentenceZh": "上課時請把注意力放在老師身上（專心聽講）。",
        "otherForms": "attentions (複數型)"
    },
    {
        "word": "hunger",
        "pos": "n.",
        "meaning": "飢餓",
        "theme": "情緒",
        "sentence": "The stray dog barked loudly out of hunger.",
        "sentenceZh": "流浪狗因為飢餓而大聲吠叫。",
        "otherForms": ""
    },
    {
        "word": "joy",
        "pos": "n.",
        "meaning": "歡樂",
        "theme": "情緒",
        "sentence": "The children jumped up and down with joy when they saw the presents.",
        "sentenceZh": "孩子們看到禮物時高興地跳上跳下。",
        "otherForms": "joys (複數型)"
    },
    {
        "word": "sense",
        "pos": "n.",
        "meaning": "感覺 / 理智",
        "theme": "情緒",
        "sentence": "Dogs have a very strong sense of smell.",
        "sentenceZh": "狗有非常敏銳的嗅覺（感覺）。",
        "otherForms": "senses (複數/三單(加es)), sensing (ing型(去e加ing)), sensed (過去式/分詞)"
    },
    {
        "word": "smile",
        "pos": "n.",
        "meaning": "微笑",
        "theme": "情緒",
        "sentence": "The friendly clerk greeted us with a bright smile.",
        "sentenceZh": "友善的店員帶著燦爛的微笑問候我們。",
        "otherForms": "smiles (複數/三單), smiling (ing型(去e加ing)), smiled (過去式/分詞)"
    },
    {
        "word": "tear",
        "pos": "n. / v.",
        "meaning": "眼淚 / 撕裂",
        "theme": "情緒",
        "sentence": "A single tear rolled down her cheek when she heard the sad news.",
        "sentenceZh": "當她聽到壞消息時，一滴眼淚滑落了她的臉頰。",
        "otherForms": "tears (複數/三單), tearing (ing型), tore (過去式(不規則)), torn (過去分詞(不規則))"
    },
    {
        "word": "cheer",
        "pos": "n.",
        "meaning": "歡呼",
        "theme": "情緒",
        "sentence": "We all cheered loudly when our school badminton team won.",
        "sentenceZh": "當我們學校羽球隊獲勝時，我們都大聲歡呼。",
        "otherForms": "cheers (複數/三單), cheering (ing型), cheered (過去式/分詞)"
    },
    {
        "word": "joke",
        "pos": "n.",
        "meaning": "笑話",
        "theme": "情緒",
        "sentence": "The English teacher told a funny joke to wake us up.",
        "sentenceZh": "英文老師講了一個好笑的笑話讓我們清醒。",
        "otherForms": "jokes (複數/三單), joking (ing型(去e加ing)), joked (過去式/分詞)"
    },
    {
        "word": "hate",
        "pos": "v. / n.",
        "meaning": "討厭",
        "theme": "情緒",
        "sentence": "I hate making the same spelling mistake twice.",
        "sentenceZh": "我討厭犯兩次一樣的拼字錯誤。",
        "otherForms": "hates (三單), hating (ing型(去e加ing)), hated (過去式/分詞)"
    },
    {
        "word": "like",
        "pos": "v. / n.",
        "meaning": "喜歡",
        "theme": "情緒",
        "sentence": "I like listening to 1980s music when I am reading.",
        "sentenceZh": "我看書時喜歡聽 80 年代的音樂。",
        "otherForms": "likes (三單), liking (ing型(去e加ing)), liked (過去式/分詞)"
    },
    {
        "word": "love",
        "pos": "v. / n.",
        "meaning": "愛",
        "theme": "情緒",
        "sentence": "My grandmother loves taking a walk in the park.",
        "sentenceZh": "我奶奶熱愛在公園散步。",
        "otherForms": "loves (三單), loving (ing型(去e加ing)), loved (過去式/分詞)"
    },
    {
        "word": "regret",
        "pos": "v. / n.",
        "meaning": "後悔",
        "theme": "情緒",
        "sentence": "You will regret it if you don't study for the exam.",
        "sentenceZh": "如果你不為考試讀書，你會後悔的。",
        "otherForms": "regrets (複數/三單), regretting (ing型(重複字尾)), regretted (過去式/分詞(重複字尾))"
    },
    {
        "word": "laugh",
        "pos": "v. / n.",
        "meaning": "大笑",
        "theme": "情緒",
        "sentence": "The funny video on YouTube made everyone laugh.",
        "sentenceZh": "YouTube 上的搞笑影片讓每個人都大笑。",
        "otherForms": "laughs (複數/三單), laughing (ing型), laughed (過去式/分詞)"
    },
    {
        "word": "calm",
        "pos": "v. / adj.",
        "meaning": "使冷靜 / 冷靜的",
        "theme": "情緒",
        "sentence": "Take a deep breath to calm yourself down before the test.",
        "sentenceZh": "考試前深呼吸讓自己冷靜下來。",
        "otherForms": "calmer (比較級), calmest (最高級), calmly (副詞)"
    },
    {
        "word": "enjoy",
        "pos": "v.",
        "meaning": "享受",
        "theme": "情緒",
        "sentence": "I really enjoy playing the interactive grammar games.",
        "sentenceZh": "我真的很享受玩互動文法遊戲。",
        "otherForms": "enjoys (三單), enjoying (ing型), enjoyed (過去式/分詞)"
    },
    {
        "word": "envy",
        "pos": "v. / n.",
        "meaning": "嫉妒",
        "theme": "情緒",
        "sentence": "I envy his excellent badminton skills.",
        "sentenceZh": "我嫉妒他極佳的羽球技巧。",
        "otherForms": "envies (三單(去y加ies)), envying (ing型), envied (過去式/分詞(去y加ied))"
    },
    {
        "word": "doubt",
        "pos": "v. / n.",
        "meaning": "懷疑",
        "theme": "情緒",
        "sentence": "I doubt that it will rain this afternoon; the sky is very clear.",
        "sentenceZh": "我懷疑今天下午會下雨，天空非常晴朗。",
        "otherForms": "doubts (複數/三單), doubting (ing型), doubted (過去式/分詞)"
    },
    {
        "word": "pleasant",
        "pos": "adj.",
        "meaning": "令人愉悅的",
        "theme": "情緒",
        "sentence": "We had a pleasant afternoon at the coffee shop in Douliu.",
        "sentenceZh": "我們在斗六的咖啡廳度過了一個令人愉悅的下午。",
        "otherForms": "more pleasant (比較級), most pleasant (最高級), pleasantly (副詞)"
    },
    {
        "word": "afraid",
        "pos": "adj.",
        "meaning": "害怕的",
        "theme": "情緒",
        "sentence": "Don't be afraid to ask questions in class.",
        "sentenceZh": "在課堂上別害怕問問題。",
        "otherForms": ""
    },
    {
        "word": "glad",
        "pos": "adj.",
        "meaning": "高興的",
        "theme": "情緒",
        "sentence": "I am so glad to hear that you passed the English test!",
        "sentenceZh": "聽到你通過英文考試我真高興！",
        "otherForms": "gladder (比較級(重複字尾)), gladdest (最高級(重複字尾)), gladly (副詞)"
    },
    {
        "word": "happy",
        "pos": "adj.",
        "meaning": "快樂的",
        "theme": "情緒",
        "sentence": "She gave me a happy smile when she saw the present.",
        "sentenceZh": "她看到禮物時給了我一個快樂的微笑。",
        "otherForms": "happier (比較級(去y加ier)), happiest (最高級(去y加iest)), happily (副詞(去y加ily))"
    },
    {
        "word": "jealous",
        "pos": "adj.",
        "meaning": "嫉妒的",
        "theme": "情緒",
        "sentence": "He felt a little jealous when his friend bought a new bike.",
        "sentenceZh": "當他朋友買了新腳踏車時，他覺得有點嫉妒。",
        "otherForms": "more jealous (比較級), most jealous (最高級), jealously (副詞)"
    },
    {
        "word": "lonely",
        "pos": "adj.",
        "meaning": "孤獨的",
        "theme": "情緒",
        "sentence": "The old man felt lonely because his children lived far away.",
        "sentenceZh": "那位老人覺得孤單，因為他的孩子們住得很遠。",
        "otherForms": "lonelier (比較級(去y加ier)), loneliest (最高級(去y加iest))"
    },
    {
        "word": "mad",
        "pos": "adj.",
        "meaning": "瘋狂的",
        "theme": "情緒",
        "sentence": "Please don't be mad at me; I didn't mean to break it.",
        "sentenceZh": "請別對我生氣，我不是故意弄壞它的。",
        "otherForms": "madder (比較級(重複字尾)), maddest (最高級(重複字尾)), madly (副詞)"
    },
    {
        "word": "nervous",
        "pos": "adj.",
        "meaning": "緊張的",
        "theme": "情緒",
        "sentence": "I always feel nervous before speaking English on stage.",
        "sentenceZh": "在台上說英文前我總是覺得緊張。",
        "otherForms": "more nervous (比較級), most nervous (最高級), nervously (副詞)"
    },
    {
        "word": "sad",
        "pos": "adj.",
        "meaning": "難過的",
        "theme": "情緒",
        "sentence": "It is a very sad story about a lost little dog.",
        "sentenceZh": "這是一個關於迷路小狗的難過故事。",
        "otherForms": "sadder (比較級(重複字尾)), saddest (最高級(重複字尾)), sadly (副詞)"
    },
    {
        "word": "unhappy",
        "pos": "adj.",
        "meaning": "不快樂的",
        "theme": "情緒",
        "sentence": "The little boy was unhappy because he couldn't go out to play.",
        "sentenceZh": "小男孩很不快樂，因為他不能出去玩。",
        "otherForms": "unhappier (比較級(去y加ier)), unhappiest (最高級(去y加iest)), unhappily (副詞(去y加ily))"
    },
    {
        "word": "angry",
        "pos": "adj.",
        "meaning": "生氣的",
        "theme": "情緒",
        "sentence": "The teacher was angry because someone cheated on the test.",
        "sentenceZh": "老師很生氣，因為有人在考試作弊。",
        "otherForms": "angrier (比較級(去y加ier)), angriest (最高級(去y加iest)), angrily (副詞(去y加ily))"
    },
    {
        "word": "black",
        "pos": "adj. / n.",
        "meaning": "黑色的 / 黑色",
        "theme": "顏色",
        "sentence": "He always uses a black pen to write his homework.",
        "sentenceZh": "他總是用黑筆寫作業。",
        "otherForms": "blacks (複數型), blacker (比較級), blackest (最高級)"
    },
    {
        "word": "blue",
        "pos": "adj. / n.",
        "meaning": "藍色的 / 藍色",
        "theme": "顏色",
        "sentence": "The sky is beautifully blue today.",
        "sentenceZh": "今天的天空是美麗的藍色。",
        "otherForms": "blues (複數型), bluer (比較級), bluest (最高級)"
    },
    {
        "word": "brown",
        "pos": "adj. / n.",
        "meaning": "棕色的 / 棕色",
        "theme": "顏色",
        "sentence": "My cute dog has big brown eyes.",
        "sentenceZh": "我可愛的狗有一雙棕色的大眼睛。",
        "otherForms": "browns (複數型), browner (比較級), brownest (最高級)"
    },
    {
        "word": "color",
        "pos": "n. / v.",
        "meaning": "顏色 / 著色",
        "theme": "顏色",
        "sentence": "What is your favorite color for a badminton racket?",
        "sentenceZh": "你最喜歡的羽球拍顏色是什麼？",
        "otherForms": "colors (複數型)"
    },
    {
        "word": "gray",
        "pos": "adj. / n.",
        "meaning": "灰色的 / 灰色",
        "theme": "顏色",
        "sentence": "The sky turned gray just before the heavy rain started.",
        "sentenceZh": "就在大雨開始前，天空變成了灰色。",
        "otherForms": "grays (複數型), grayer (比較級), grayest (最高級)"
    },
    {
        "word": "green",
        "pos": "adj. / n.",
        "meaning": "綠色的 / 綠色",
        "theme": "顏色",
        "sentence": "Eating green vegetables is very good for your body.",
        "sentenceZh": "吃綠色蔬菜對你的身體很好。",
        "otherForms": "greens (複數型), greener (比較級), greenest (最高級)"
    },
    {
        "word": "orange",
        "pos": "adj. / n.",
        "meaning": "橙色的 / 橘子",
        "theme": "顏色",
        "sentence": "He wore a bright orange T-shirt to the beach.",
        "sentenceZh": "他穿了一件亮橘色的 T 恤去海灘。",
        "otherForms": "oranges (複數型)"
    },
    {
        "word": "pink",
        "pos": "adj. / n.",
        "meaning": "粉色的 / 粉色",
        "theme": "顏色",
        "sentence": "She decorated her bedroom with cute pink flowers.",
        "sentenceZh": "她用可愛的粉紅花朵裝飾她的臥室。",
        "otherForms": "pinks (複數型), pinker (比較級), pinkest (最高級)"
    },
    {
        "word": "purple",
        "pos": "adj. / n.",
        "meaning": "紫色的 / 紫色",
        "theme": "顏色",
        "sentence": "Grapes are usually green or purple.",
        "sentenceZh": "葡萄通常是綠色或紫色的。",
        "otherForms": "purples (複數型), purpler (比較級), purplest (最高級)"
    },
    {
        "word": "red",
        "pos": "adj. / n.",
        "meaning": "紅色的 / 紅色",
        "theme": "顏色",
        "sentence": "The teacher used a red pen to correct the mistakes.",
        "sentenceZh": "老師用紅筆來改正錯誤。",
        "otherForms": "reds (複數型), redder (比較級(重複字尾)), reddest (最高級(重複字尾))"
    },
    {
        "word": "white",
        "pos": "adj. / n.",
        "meaning": "白色的 / 白色",
        "theme": "顏色",
        "sentence": "The nurse wears a clean white uniform at the hospital.",
        "sentenceZh": "護理師在醫院穿著乾淨的白色制服。",
        "otherForms": "whites (複數型), whiter (比較級), whitest (最高級)"
    },
    {
        "word": "yellow",
        "pos": "adj. / n.",
        "meaning": "黃色的 / 黃色",
        "theme": "顏色",
        "sentence": "Bananas and lemons are both yellow fruits.",
        "sentenceZh": "香蕉和檸檬都是黃色的水果。",
        "otherForms": "yellows (複數型), yellower (比較級), yellowest (最高級)"
    },
    {
        "word": "golden",
        "pos": "adj. / n.",
        "meaning": "金色的 / 金色",
        "theme": "顏色",
        "sentence": "The golden sunlight shines warmly in the early morning.",
        "sentenceZh": "金色的陽光在清晨溫暖地照耀著。",
        "otherForms": ""
    },
    {
        "word": "able",
        "pos": "adj.",
        "meaning": "能夠的",
        "theme": "其餘形容詞",
        "sentence": "You will be able to read this book after learning these words.",
        "sentenceZh": "學完這些單字後你就能夠讀懂這本書了。",
        "otherForms": ""
    },
    {
        "word": "alone",
        "pos": "adj.",
        "meaning": "單獨地 / 獨自",
        "theme": "其餘形容詞",
        "sentence": "The old man lives alone in the big house.",
        "sentenceZh": "那位老人獨自住在大房子裡。",
        "otherForms": "lonely (形容詞(孤單的))"
    },
    {
        "word": "asleep",
        "pos": "adj.",
        "meaning": "睡著的",
        "theme": "其餘形容詞",
        "sentence": "The baby fell asleep quickly after drinking warm milk.",
        "sentenceZh": "嬰兒喝完溫牛奶後很快就睡著了。",
        "otherForms": ""
    },
    {
        "word": "born",
        "pos": "adj.",
        "meaning": "與生俱來的",
        "theme": "其餘形容詞",
        "sentence": "I was born in a small town in central Taiwan.",
        "sentenceZh": "我出生在中台灣的一個小鎮。",
        "otherForms": ""
    },
    {
        "word": "brief",
        "pos": "adj.",
        "meaning": "簡短的",
        "theme": "其餘形容詞",
        "sentence": "Let's have a brief meeting after lunch.",
        "sentenceZh": "我們午餐後開個簡短的會議吧。",
        "otherForms": "briefer (比較級), briefest (最高級), briefly (簡短地 - 副詞)"
    },
    {
        "word": "certain",
        "pos": "adj.",
        "meaning": "確定的",
        "theme": "其餘形容詞",
        "sentence": "Are you certain that this is the correct answer?",
        "sentenceZh": "你確定這是正確答案嗎？",
        "otherForms": "more certain (比較級), most certain (最高級), certainly (副詞)"
    },
    {
        "word": "classic",
        "pos": "adj.",
        "meaning": "經典的",
        "theme": "其餘形容詞",
        "sentence": "This is a classic movie that everyone should watch.",
        "sentenceZh": "這是一部每個人都該看的經典電影。",
        "otherForms": ""
    },
    {
        "word": "convenient",
        "pos": "adj.",
        "meaning": "方便的",
        "theme": "其餘形容詞",
        "sentence": "It is very convenient to use a smartphone to study vocabulary.",
        "sentenceZh": "用智慧型手機學習單字非常方便。",
        "otherForms": "more convenient (比較級), most convenient (最高級), conveniently (副詞)"
    },
    {
        "word": "dear",
        "pos": "adj.",
        "meaning": "親愛的 / 昂貴的",
        "theme": "其餘形容詞",
        "sentence": "\"Dear Director Lee, we would like to invite you...\"",
        "sentenceZh": "「親愛的李主任，我們想邀請您……」",
        "otherForms": "dearer (比較級), dearest (最高級), dearly (副詞)"
    },
    {
        "word": "deep",
        "pos": "adj. / adv.",
        "meaning": "深的",
        "theme": "其餘形容詞",
        "sentence": "The little boy was afraid to swim in the deep ocean.",
        "sentenceZh": "小男孩害怕在深海裡游泳。",
        "otherForms": "deeper (比較級), deepest (最高級), deeply (副詞)"
    },
    {
        "word": "distant",
        "pos": "adj.",
        "meaning": "遙遠的",
        "theme": "其餘形容詞",
        "sentence": "We could hear the distant sound of thunder in the mountains.",
        "sentenceZh": "我們能聽到群山中遙遠的雷聲。",
        "otherForms": "more distant (比較級), most distant (最高級), distantly (副詞)"
    },
    {
        "word": "double",
        "pos": "adj.",
        "meaning": "雙倍的",
        "theme": "其餘形容詞",
        "sentence": "Please check your spelling double times before handing in the test.",
        "sentenceZh": "交卷前請檢查你的拼字兩次。",
        "otherForms": ""
    },
    {
        "word": "electric",
        "pos": "adj.",
        "meaning": "電的",
        "theme": "其餘形容詞",
        "sentence": "Turn off the electric fan when you leave the classroom.",
        "sentenceZh": "離開教室時請關掉電風扇。",
        "otherForms": "electrically (副詞)"
    },
    {
        "word": "enough",
        "pos": "adj.",
        "meaning": "足夠的",
        "theme": "其餘形容詞",
        "sentence": "We don't have enough players to start the volleyball game.",
        "sentenceZh": "我們沒有足夠的球員來開始排球比賽。",
        "otherForms": ""
    },
    {
        "word": "equal",
        "pos": "adj.",
        "meaning": "平等的",
        "theme": "其餘形容詞",
        "sentence": "In math, five plus five is equal to ten.",
        "sentenceZh": "在數學中，五加五等於十。",
        "otherForms": "equally (副詞)"
    },
    {
        "word": "every",
        "pos": "adj.",
        "meaning": "每個的",
        "theme": "其餘形容詞",
        "sentence": "I practice reading English for thirty minutes every day.",
        "sentenceZh": "我每天練習閱讀英文三十分鐘。",
        "otherForms": ""
    },
    {
        "word": "exact",
        "pos": "adj.",
        "meaning": "確切的 / 精確的",
        "theme": "其餘形容詞",
        "sentence": "Tell me the exact time you will arrive.",
        "sentenceZh": "告訴我你抵達的確切時間。",
        "otherForms": "exactly (精確地 - 副詞)"
    },
    {
        "word": "extra",
        "pos": "adj.",
        "meaning": "額外的",
        "theme": "其餘形容詞",
        "sentence": "Can I have an extra piece of blank paper, please?",
        "sentenceZh": "請問我可以多要一張空白紙嗎？",
        "otherForms": ""
    },
    {
        "word": "fair",
        "pos": "adj.",
        "meaning": "公平的",
        "theme": "其餘形容詞",
        "sentence": "The teacher made a fair decision for both students.",
        "sentenceZh": "老師為兩位學生做了一個公平的決定。",
        "otherForms": "fairer (比較級), fairest (最高級), fairly (副詞)"
    },
    {
        "word": "fancy",
        "pos": "adj.",
        "meaning": "別緻的 / 鋪張的",
        "theme": "其餘形容詞",
        "sentence": "We had dinner at a very fancy restaurant to celebrate.",
        "sentenceZh": "我們在一家非常高級別緻的餐廳吃晚餐慶祝。",
        "otherForms": "fancier (比較級(去y加ier)), fanciest (最高級(去y加iest))"
    },
    {
        "word": "far",
        "pos": "adj. / adv.",
        "meaning": "遠的",
        "theme": "其餘形容詞",
        "sentence": "Is your house very far from the junior high school?",
        "sentenceZh": "你家離國中很遠嗎？",
        "otherForms": "farther/further (比較級(不規則)), farthest/furthest (最高級(不規則)), far (形副同型)"
    },
    {
        "word": "fashionable",
        "pos": "adj.",
        "meaning": "時尚的",
        "theme": "其餘形容詞",
        "sentence": "Wearing large sunglasses was very fashionable in the 1980s.",
        "sentenceZh": "戴大墨鏡在 80 年代非常時尚。",
        "otherForms": "more fashionable (比較級), most fashionable (最高級), fashionably (副詞)"
    },
    {
        "word": "favorite",
        "pos": "adj.",
        "meaning": "最喜愛的",
        "theme": "其餘形容詞",
        "sentence": "PE is my favorite subject because I can play badminton.",
        "sentenceZh": "體育是我最喜歡的科目，因為可以打羽球。",
        "otherForms": "favorites (複數型)"
    },
    {
        "word": "final",
        "pos": "adj.",
        "meaning": "最終的",
        "theme": "其餘形容詞",
        "sentence": "You must study hard for the final exam next week.",
        "sentenceZh": "你必須為下週的期末考認真讀書。",
        "otherForms": "finals (複數型), finally (副詞)"
    },
    {
        "word": "formal",
        "pos": "adj.",
        "meaning": "正式的",
        "theme": "其餘形容詞",
        "sentence": "He wore a formal black suit to the important meeting.",
        "sentenceZh": "他穿了一套正式的黑西裝去參加重要會議。",
        "otherForms": "more formal (比較級), most formal (最高級), formally (副詞)"
    },
    {
        "word": "free",
        "pos": "adj.",
        "meaning": "免費的 / 自由的 / 有空的",
        "theme": "其餘形容詞",
        "sentence": "You can play this English vocabulary game for free.",
        "sentenceZh": "你可以免費玩這個英文單字遊戲。",
        "otherForms": "freer (比較級), freest (最高級), freely (副詞)"
    },
    {
        "word": "fresh",
        "pos": "adj.",
        "meaning": "新鮮的",
        "theme": "其餘形容詞",
        "sentence": "The fresh air in the mountains feels so clean.",
        "sentenceZh": "山裡的新鮮空氣感覺好乾淨。",
        "otherForms": "fresher (比較級), freshest (最高級), freshly (副詞)"
    },
    {
        "word": "helpful",
        "pos": "adj.",
        "meaning": "有幫助的",
        "theme": "其餘形容詞",
        "sentence": "This vocabulary passport is very helpful for learning English.",
        "sentenceZh": "這本單字護照對學習英文非常有幫助。",
        "otherForms": "more helpful (比較級), most helpful (最高級), helpfully (副詞)"
    },
    {
        "word": "homesick",
        "pos": "adj.",
        "meaning": "想家的",
        "theme": "其餘形容詞",
        "sentence": "The student felt very homesick during the summer camp.",
        "sentenceZh": "這位學生在夏令營期間覺得非常想家。",
        "otherForms": "more homesick (比較級), most homesick (最高級)"
    },
    {
        "word": "horrible",
        "pos": "adj.",
        "meaning": "可怕的",
        "theme": "其餘形容詞",
        "sentence": "I had a horrible dream about a giant monster last night.",
        "sentenceZh": "我昨晚做了一個關於巨大怪物的可怕惡夢。",
        "otherForms": "more horrible (比較級), most horrible (最高級), horribly (副詞(去le加ly))"
    },
    {
        "word": "important",
        "pos": "adj.",
        "meaning": "重要的",
        "theme": "其餘形容詞",
        "sentence": "It is very important to eat breakfast every morning.",
        "sentenceZh": "每天早上吃早餐是非常重要的。",
        "otherForms": "more important (比較級), most important (最高級), importantly (副詞)"
    },
    {
        "word": "independent",
        "pos": "adj.",
        "meaning": "獨立的",
        "theme": "其餘形容詞",
        "sentence": "Junior high students should learn to be more independent.",
        "sentenceZh": "國中生應該學習變得更獨立。",
        "otherForms": "more independent (比較級), most independent (最高級), independently (副詞)"
    },
    {
        "word": "instant",
        "pos": "adj.",
        "meaning": "立即的",
        "theme": "其餘形容詞",
        "sentence": "He sent me an instant message on the Internet.",
        "sentenceZh": "他在網路上傳了一則即時訊息給我。",
        "otherForms": "instants (複數型), instantly (副詞)"
    },
    {
        "word": "latest",
        "pos": "adj.",
        "meaning": "最新的",
        "theme": "其餘形容詞",
        "sentence": "Have you listened to their latest pop music album?",
        "sentenceZh": "你聽過他們最新的流行音樂專輯了嗎？",
        "otherForms": ""
    },
    {
        "word": "lucky",
        "pos": "adj.",
        "meaning": "幸運的",
        "theme": "其餘形容詞",
        "sentence": "I was very lucky to find my lost keys in the park.",
        "sentenceZh": "我非常幸運地在公園找到了我弄丟的鑰匙。",
        "otherForms": "luckier (比較級(去y加ier)), luckiest (最高級(去y加iest)), luckily (副詞(去y加ily))"
    },
    {
        "word": "magic",
        "pos": "adj.",
        "meaning": "魔法的",
        "theme": "其餘形容詞",
        "sentence": "The magician showed us an amazing magic trick.",
        "sentenceZh": "魔術師表演了一個驚人的魔術戲法給我們看。",
        "otherForms": "magically (副詞)"
    },
    {
        "word": "necessary",
        "pos": "adj.",
        "meaning": "必要的",
        "theme": "其餘形容詞",
        "sentence": "Is it really necessary to buy such an expensive racket?",
        "sentenceZh": "真的有必要買這麼昂貴的球拍嗎？",
        "otherForms": "more necessary (比較級), most necessary (最高級), necessarily (副詞(去y加ily))"
    },
    {
        "word": "other",
        "pos": "adj.",
        "meaning": "其他的",
        "theme": "其餘形容詞",
        "sentence": "Do you have any other questions about the grammar rules?",
        "sentenceZh": "關於文法規則你還有其他的問題嗎？",
        "otherForms": "others (複數型)"
    },
    {
        "word": "particular",
        "pos": "adj.",
        "meaning": "特定的 / 特別的",
        "theme": "其餘形容詞",
        "sentence": "Is there a particular reason why you are late?",
        "sentenceZh": "你遲到有什麼特別的原因嗎？",
        "otherForms": "particularly (特別地 - 副詞)"
    },
    {
        "word": "peaceful",
        "pos": "adj.",
        "meaning": "和平的",
        "theme": "其餘形容詞",
        "sentence": "The small village in the mountains is very quiet and peaceful.",
        "sentenceZh": "山裡的小村莊非常安靜且寧靜。",
        "otherForms": "more peaceful (比較級), most peaceful (最高級), peacefully (副詞)"
    },
    {
        "word": "perfect",
        "pos": "adj.",
        "meaning": "完美的",
        "theme": "其餘形容詞",
        "sentence": "This clear blue sky is just perfect for an outdoor picnic.",
        "sentenceZh": "這樣晴朗的藍天簡直完美適合戶外野餐。",
        "otherForms": "more perfect (比較級), most perfect (最高級), perfectly (副詞)"
    },
    {
        "word": "personal",
        "pos": "adj.",
        "meaning": "個人的",
        "theme": "其餘形容詞",
        "sentence": "You should not read other people's personal letters.",
        "sentenceZh": "你不應該讀別人私人的信件。",
        "otherForms": "more personal (比較級), most personal (最高級), personally (副詞)"
    },
    {
        "word": "popular",
        "pos": "adj.",
        "meaning": "受歡迎的",
        "theme": "其餘形容詞",
        "sentence": "The game \"Weather Combat\" is very popular among students.",
        "sentenceZh": "「天氣大戰」這款遊戲在學生中非常受歡迎。",
        "otherForms": "more popular (比較級), most popular (最高級), popularly (副詞)"
    },
    {
        "word": "ready",
        "pos": "adj.",
        "meaning": "準備好的",
        "theme": "其餘形容詞",
        "sentence": "Are you ready to start the English vocabulary test?",
        "sentenceZh": "你準備好開始英文單字測驗了嗎？",
        "otherForms": "readier (比較級(去y加ier)), readiest (最高級(去y加iest)), readily (副詞(去y加ily))"
    },
    {
        "word": "real",
        "pos": "adj.",
        "meaning": "真實的",
        "theme": "其餘形容詞",
        "sentence": "Is the monster in the movie a real animal or just computer graphics?",
        "sentenceZh": "電影裡的怪物是真實的動物還是只是電腦繪圖？",
        "otherForms": "more real (比較級), most real (最高級), really (副詞)"
    },
    {
        "word": "regular",
        "pos": "adj.",
        "meaning": "規律的 / 定期的",
        "theme": "其餘形容詞",
        "sentence": "Doing regular exercise will keep your body strong and healthy.",
        "sentenceZh": "做規律的運動能讓你的身體保持強壯健康。",
        "otherForms": "more regular (比較級), most regular (最高級), regularly (副詞)"
    },
    {
        "word": "responsible",
        "pos": "adj.",
        "meaning": "負責的",
        "theme": "其餘形容詞",
        "sentence": "The class leader is responsible for keeping the classroom quiet.",
        "sentenceZh": "班長負責保持教室安靜。",
        "otherForms": "more responsible (比較級), most responsible (最高級), responsibly (副詞)"
    },
    {
        "word": "royal",
        "pos": "adj.",
        "meaning": "皇家的",
        "theme": "其餘形容詞",
        "sentence": "The castle was the home of the royal family.",
        "sentenceZh": "那座城堡曾是皇室的住所。",
        "otherForms": "royalty (皇室 - 名詞)"
    },
    {
        "word": "serious",
        "pos": "adj.",
        "meaning": "嚴肅的 / 嚴重的",
        "theme": "其餘形容詞",
        "sentence": "You need to be serious when preparing for the big exam.",
        "sentenceZh": "準備大考時你需要認真嚴肅。",
        "otherForms": "more serious (比較級), most serious (最高級), seriously (副詞)"
    },
    {
        "word": "sharp",
        "pos": "adj.",
        "meaning": "鋒利的 / 尖銳的",
        "theme": "其餘形容詞",
        "sentence": "Be careful, the edge of that broken glass is very sharp.",
        "sentenceZh": "小心，那塊破玻璃的邊緣非常銳利。",
        "otherForms": "sharper (比較級), sharpest (最高級), sharply (副詞)"
    },
    {
        "word": "single",
        "pos": "adj.",
        "meaning": "單一的 / 單身的",
        "theme": "其餘形容詞",
        "sentence": "I didn't make a single mistake in my grammar test!",
        "sentenceZh": "我的文法考試連一個錯誤都沒犯！",
        "otherForms": ""
    },
    {
        "word": "skillful",
        "pos": "adj.",
        "meaning": "熟練的",
        "theme": "其餘形容詞",
        "sentence": "He is a very skillful player who can hit the ball perfectly.",
        "sentenceZh": "他是個非常熟練的球員，能完美地擊球。",
        "otherForms": "more skillful (比較級), most skillful (最高級), skillfully (副詞)"
    },
    {
        "word": "sleepy",
        "pos": "adj.",
        "meaning": "想睡的",
        "theme": "其餘形容詞",
        "sentence": "I feel very sleepy because I stayed up late last night.",
        "sentenceZh": "我覺得很想睡，因為我昨晚熬夜了。",
        "otherForms": "sleepier (比較級(去y加ier)), sleepiest (最高級(去y加iest)), sleepily (副詞(去y加ily))"
    },
    {
        "word": "social",
        "pos": "adj.",
        "meaning": "社會的 / 社交的",
        "theme": "其餘形容詞",
        "sentence": "Humans are social animals; we like to talk to friends.",
        "sentenceZh": "人類是社會性動物，我們喜歡和朋友聊天。",
        "otherForms": "more social (比較級), most social (最高級), socially (副詞)"
    },
    {
        "word": "such",
        "pos": "adj.",
        "meaning": "如此的",
        "theme": "其餘形容詞",
        "sentence": "It is such a beautiful day to play badminton outside.",
        "sentenceZh": "這是個如此適合在戶外打羽球的美好日子。",
        "otherForms": ""
    },
    {
        "word": "sudden",
        "pos": "adj.",
        "meaning": "突然的",
        "theme": "其餘形容詞",
        "sentence": "We got wet because of a sudden rain shower.",
        "sentenceZh": "我們因為一場突如其來的陣雨淋濕了。",
        "otherForms": "more sudden (比較級), most sudden (最高級), suddenly (副詞)"
    },
    {
        "word": "super",
        "pos": "adj.",
        "meaning": "超級的",
        "theme": "其餘形容詞",
        "sentence": "He ran at a super fast speed to catch the bus.",
        "sentenceZh": "他以超級快的速度奔跑去趕公車。",
        "otherForms": ""
    },
    {
        "word": "the",
        "pos": "art.",
        "meaning": "那個 / 這個 / 那些 / 這些",
        "theme": "其餘形容詞",
        "sentence": "",
        "sentenceZh": "",
        "otherForms": ""
    },
    {
        "word": "thick",
        "pos": "adj.",
        "meaning": "厚的 / 濃的 / 稠的",
        "theme": "其餘形容詞",
        "sentence": "You should wear a thick coat because it is freezing outside.",
        "sentenceZh": "你應該穿件厚外套，因為外面冷極了。",
        "otherForms": "thicker (比較級), thickest (最高級), thickly (副詞)"
    },
    {
        "word": "tidy",
        "pos": "adj.",
        "meaning": "整潔的",
        "theme": "其餘形容詞",
        "sentence": "Please keep your desk clean and tidy before leaving the classroom.",
        "sentenceZh": "離開教室前請保持你的書桌乾淨整潔。",
        "otherForms": "tidier (比較級(去y加ier)), tidiest (最高級(去y加iest)), tidily (副詞(去y加ily))"
    },
    {
        "word": "useful",
        "pos": "adj.",
        "meaning": "有用的",
        "theme": "其餘形容詞",
        "sentence": "This English-Chinese dictionary is a very useful tool.",
        "sentenceZh": "這本英漢字典是非常有用的工具。",
        "otherForms": "more useful (比較級), most useful (最高級), usefully (副詞)"
    },
    {
        "word": "usual",
        "pos": "adj.",
        "meaning": "通常的",
        "theme": "其餘形容詞",
        "sentence": "I woke up at my usual time of 6:30 a.m. this morning.",
        "sentenceZh": "我今天早上在通常的六點半醒來。",
        "otherForms": "more usual (比較級), most usual (最高級), usually (副詞)"
    },
    {
        "word": "valuable",
        "pos": "adj.",
        "meaning": "有價值的",
        "theme": "其餘形容詞",
        "sentence": "Time is very valuable, so don't waste it on playing too many games.",
        "sentenceZh": "時間非常寶貴，所以不要浪費在玩太多遊戲上。",
        "otherForms": "more valuable (比較級), most valuable (最高級), valuably (副詞)"
    },
    {
        "word": "whole",
        "pos": "adj.",
        "meaning": "整體的",
        "theme": "其餘形容詞",
        "sentence": "He ate the whole pizza by himself because he was so hungry.",
        "sentenceZh": "他因為太餓了，自己吃掉了整份披薩。",
        "otherForms": "wholly (副詞)"
    },
    {
        "word": "wild",
        "pos": "adj.",
        "meaning": "野生的 / 狂野的",
        "theme": "其餘形容詞",
        "sentence": "The forest is full of dangerous wild animals.",
        "sentenceZh": "森林裡充滿了危險的野生動物。",
        "otherForms": "wilder (比較級), wildest (最高級), wildly (副詞)"
    },
    {
        "word": "wonderful",
        "pos": "adj.",
        "meaning": "美妙的",
        "theme": "其餘形容詞",
        "sentence": "We had a wonderful time visiting the museum together.",
        "sentenceZh": "我們一起參觀博物館度過了美妙的時光。",
        "otherForms": "more wonderful (比較級), most wonderful (最高級), wonderfully (副詞)"
    },
    {
        "word": "worth",
        "pos": "adj.",
        "meaning": "值得的 / 價值",
        "theme": "其餘形容詞",
        "sentence": "This museum is definitely worth visiting.",
        "sentenceZh": "這間博物館絕對值得參觀。",
        "otherForms": "worthy (形容詞(值得的))"
    },
    {
        "word": "especially",
        "pos": "adv.",
        "meaning": "尤其",
        "theme": "副詞",
        "sentence": "I love eating fruit, especially sweet mangoes in summer.",
        "sentenceZh": "我熱愛吃水果，尤其是在夏天的甜芒果。",
        "otherForms": ""
    },
    {
        "word": "finally",
        "pos": "adv.",
        "meaning": "最後",
        "theme": "副詞",
        "sentence": "After a long game, our team finally won the victory.",
        "sentenceZh": "經過漫長的比賽，我們的隊伍最後贏得了勝利。",
        "otherForms": ""
    },
    {
        "word": "least",
        "pos": "adv.",
        "meaning": "最少",
        "theme": "副詞",
        "sentence": "You should exercise at least three times a week.",
        "sentenceZh": "你應該一週至少運動三次。",
        "otherForms": ""
    },
    {
        "word": "then",
        "pos": "adv.",
        "meaning": "然後",
        "theme": "副詞",
        "sentence": "Finish your homework first, and then you can watch TV.",
        "sentenceZh": "先寫完你的作業，然後你就可以看電視。",
        "otherForms": ""
    },
    {
        "word": "yet",
        "pos": "adv.",
        "meaning": "尚未 / 但是",
        "theme": "副詞",
        "sentence": "Have you finished coding the HTML game yet?",
        "sentenceZh": "你寫完 HTML 遊戲的程式碼了嗎？",
        "otherForms": ""
    },
    {
        "word": "aloud",
        "pos": "adv.",
        "meaning": "大聲地",
        "theme": "副詞",
        "sentence": "Please read the English sentence aloud so everyone can hear you.",
        "sentenceZh": "請大聲朗讀這個英文句子，讓每個人都能聽到。",
        "otherForms": ""
    },
    {
        "word": "either",
        "pos": "adv.",
        "meaning": "也（用於否定句）",
        "theme": "副詞",
        "sentence": "I don't like bitter coffee, and he doesn't like it either.",
        "sentenceZh": "我不喜歡苦咖啡，他也不喜歡。",
        "otherForms": ""
    },
    {
        "word": "else",
        "pos": "adv.",
        "meaning": "其他",
        "theme": "副詞",
        "sentence": "Is there anything else I can help you with today?",
        "sentenceZh": "今天還有其他我可以幫你的事嗎？",
        "otherForms": ""
    },
    {
        "word": "just",
        "pos": "adv.",
        "meaning": "就 / 剛剛",
        "theme": "副詞",
        "sentence": "The school bus just left the station a minute ago.",
        "sentenceZh": "校車一分鐘前剛剛離開車站。",
        "otherForms": ""
    },
    {
        "word": "neither",
        "pos": "adv.",
        "meaning": "也不",
        "theme": "副詞",
        "sentence": "My brother doesn't play tennis, and neither do I.",
        "sentenceZh": "我哥哥不打網球，我也不打。",
        "otherForms": ""
    },
    {
        "word": "not",
        "pos": "adv.",
        "meaning": "不",
        "theme": "副詞",
        "sentence": "This is not the correct answer; please try again.",
        "sentenceZh": "這不是正確答案，請再試一次。",
        "otherForms": ""
    },
    {
        "word": "also",
        "pos": "adv.",
        "meaning": "也 / 此外",
        "theme": "副詞",
        "sentence": "She speaks English, and she also speaks Japanese.",
        "sentenceZh": "她會說英文，她也會說日文。",
        "otherForms": "too (相似詞(也 - 常用於句尾))"
    },
    {
        "word": "only",
        "pos": "adv.",
        "meaning": "只有 / 僅",
        "theme": "副詞",
        "sentence": "I have only one English class on Wednesday afternoon.",
        "sentenceZh": "我星期三下午只有一節英文課。",
        "otherForms": ""
    },
    {
        "word": "almost",
        "pos": "adv.",
        "meaning": "幾乎",
        "theme": "副詞",
        "sentence": "I have almost finished memorizing all 2,000 words!",
        "sentenceZh": "我幾乎已經背完這兩千個單字了！",
        "otherForms": ""
    },
    {
        "word": "even",
        "pos": "adv.",
        "meaning": "甚至",
        "theme": "副詞",
        "sentence": "He loves the game so much that he even plays it on weekends.",
        "sentenceZh": "他太愛這個遊戲了，甚至在週末也會玩。",
        "otherForms": ""
    },
    {
        "word": "really",
        "pos": "adv.",
        "meaning": "真地",
        "theme": "副詞",
        "sentence": "Is it really true that we have no homework tonight?",
        "sentenceZh": "今晚沒有回家作業是真的嗎？",
        "otherForms": ""
    },
    {
        "word": "so",
        "pos": "adv. / conj.",
        "meaning": "如此；這麼 / 所以",
        "theme": "副詞",
        "sentence": "The movie was so funny that I laughed until I cried.",
        "sentenceZh": "這部電影太好笑了，我笑到流眼淚。",
        "otherForms": ""
    },
    {
        "word": "still",
        "pos": "adv.",
        "meaning": "仍然",
        "theme": "副詞",
        "sentence": "Are you still watching that 80s music video on YouTube?",
        "sentenceZh": "你還在 YouTube 上看那部 80 年代的音樂影片嗎？",
        "otherForms": ""
    },
    {
        "word": "very",
        "pos": "adv.",
        "meaning": "非常",
        "theme": "副詞",
        "sentence": "Thank you very much for helping me solve the grammar problem.",
        "sentenceZh": "非常感謝你幫我解決文法問題。",
        "otherForms": ""
    },
    {
        "word": "nearly",
        "pos": "adv.",
        "meaning": "幾乎",
        "theme": "副詞",
        "sentence": "It took nearly two hours to drive from Douliu to Taipei.",
        "sentenceZh": "從斗六開車到台北幾乎花了兩個小時。",
        "otherForms": ""
    },
    {
        "word": "quite",
        "pos": "adv.",
        "meaning": "蠻~",
        "theme": "副詞",
        "sentence": "The science test today was quite difficult for me.",
        "sentenceZh": "今天的科學考試對我來說相當困難。",
        "otherForms": ""
    },
    {
        "word": "rather",
        "pos": "adv.",
        "meaning": "寧願 / 相當地",
        "theme": "副詞",
        "sentence": "I would rather play badminton than go running.",
        "sentenceZh": "我寧願去打羽球也不想去跑步。",
        "otherForms": ""
    },
    {
        "word": "too",
        "pos": "adv.",
        "meaning": "也 / 太",
        "theme": "副詞",
        "sentence": "The hot soup is too spicy for the little child to eat.",
        "sentenceZh": "這碗熱湯對小孩子來說太辣了沒辦法吃。",
        "otherForms": ""
    },
    {
        "word": "actually",
        "pos": "adv.",
        "meaning": "實際上",
        "theme": "副詞",
        "sentence": "The grammar rule looks hard, but it is actually quite easy.",
        "sentenceZh": "這個文法規則看起來很難，但實際上相當簡單。",
        "otherForms": ""
    },
    {
        "word": "perhaps",
        "pos": "adv.",
        "meaning": "可能地",
        "theme": "副詞",
        "sentence": "Perhaps we can go to the beach if it doesn't rain tomorrow.",
        "sentenceZh": "如果明天不下雨，或許我們可以去海灘。",
        "otherForms": ""
    },
    {
        "word": "probably",
        "pos": "adv.",
        "meaning": "有可能地",
        "theme": "副詞",
        "sentence": "He will probably be late for school because he missed the bus.",
        "sentenceZh": "他可能會上學遲到，因為他錯過了公車。",
        "otherForms": ""
    },
    {
        "word": "likely",
        "pos": "adv.",
        "meaning": "可能地",
        "theme": "副詞",
        "sentence": "It is highly likely that she will win the first prize.",
        "sentenceZh": "她非常有贏得第一名。",
        "otherForms": ""
    },
    {
        "word": "maybe",
        "pos": "adv.",
        "meaning": "可能地",
        "theme": "副詞",
        "sentence": "Maybe we can ask the teacher to explain it one more time.",
        "sentenceZh": "也許我們可以請老師再解釋一次。",
        "otherForms": ""
    },
    {
        "word": "abroad",
        "pos": "adv.",
        "meaning": "在國外",
        "theme": "副詞",
        "sentence": "My uncle travels abroad many times a year for business.",
        "sentenceZh": "我叔叔為了生意一年出國好幾次。",
        "otherForms": ""
    },
    {
        "word": "ahead",
        "pos": "adv.",
        "meaning": "在前面",
        "theme": "副詞",
        "sentence": "Keep walking straight ahead, and you will see the post office.",
        "sentenceZh": "繼續直直往前走，你就會看到郵局。",
        "otherForms": ""
    },
    {
        "word": "everywhere",
        "pos": "adv.",
        "meaning": "到處",
        "theme": "副詞",
        "sentence": "I have looked everywhere, but I cannot find my cell phone.",
        "sentenceZh": "我已經到處找過了，但就是找不到我的手機。",
        "otherForms": ""
    },
    {
        "word": "anywhere",
        "pos": "adv.",
        "meaning": "任何地方",
        "theme": "副詞",
        "sentence": "You can sit anywhere you like in the cafeteria.",
        "sentenceZh": "在自助餐廳裡你可以坐在任何你喜歡的地方。",
        "otherForms": ""
    },
    {
        "word": "somewhere",
        "pos": "adv.",
        "meaning": "某個地方",
        "theme": "副詞",
        "sentence": "I dropped my keys somewhere near the badminton court.",
        "sentenceZh": "我把鑰匙掉在羽球場附近的某個地方了。",
        "otherForms": ""
    },
    {
        "word": "out",
        "pos": "adv.",
        "meaning": "出去",
        "theme": "副詞",
        "sentence": "Please take the trash out before you go to bed.",
        "sentenceZh": "睡前請把垃圾拿出去。",
        "otherForms": ""
    },
    {
        "word": "upon",
        "pos": "prep. / adv.",
        "meaning": "在~之上",
        "theme": "副詞",
        "sentence": "Once upon a time, there was a brave prince in a castle.",
        "sentenceZh": "很久很久以前，城堡裡有一位勇敢的王子。",
        "otherForms": ""
    },
    {
        "word": "away",
        "pos": "adv.",
        "meaning": "離開",
        "theme": "副詞",
        "sentence": "The scared bird quickly flew away into the blue sky.",
        "sentenceZh": "受到驚嚇的鳥快速飛走，進入了藍天中。",
        "otherForms": ""
    },
    {
        "word": "besides",
        "pos": "adv. / prep.",
        "meaning": "此外 / 而且",
        "theme": "副詞",
        "sentence": "I don't want to go out; besides, it is raining heavily.",
        "sentenceZh": "我不想出門；而且，現在雨下得很大。",
        "otherForms": ""
    },
    {
        "word": "therefore",
        "pos": "adv.",
        "meaning": "因此",
        "theme": "副詞",
        "sentence": "He didn't study hard; therefore, he failed the math test.",
        "sentenceZh": "他沒有努力讀書；因此，他數學考試不及格。",
        "otherForms": ""
    },
    {
        "word": "however",
        "pos": "adv.",
        "meaning": "然而",
        "theme": "副詞",
        "sentence": "He tried his best to hit the ball; however, he missed it.",
        "sentenceZh": "他盡了全力去擊球；然而，他還是漏接了。",
        "otherForms": ""
    },
    {
        "word": "always",
        "pos": "adv.",
        "meaning": "總是",
        "theme": "副詞",
        "sentence": "The sun always rises in the east and sets in the west.",
        "sentenceZh": "太陽總是從東方升起、西方落下。",
        "otherForms": ""
    },
    {
        "word": "ever",
        "pos": "adv.",
        "meaning": "曾經",
        "theme": "副詞",
        "sentence": "Have you ever been to a 1980s pop music concert?",
        "sentenceZh": "你曾經去過 80 年代流行音樂的演唱會嗎？",
        "otherForms": ""
    },
    {
        "word": "never",
        "pos": "adv.",
        "meaning": "從不",
        "theme": "副詞",
        "sentence": "You should never open the door for a stranger.",
        "sentenceZh": "你絕不應該幫陌生人開門。",
        "otherForms": ""
    },
    {
        "word": "often",
        "pos": "adv.",
        "meaning": "經常",
        "theme": "副詞",
        "sentence": "I often go jogging in the park on Sunday mornings.",
        "sentenceZh": "我經常在星期日早上在公園慢跑。",
        "otherForms": ""
    },
    {
        "word": "seldom",
        "pos": "adv.",
        "meaning": "很少",
        "theme": "副詞",
        "sentence": "She seldom drinks sweet soda because it is bad for her health.",
        "sentenceZh": "她很少喝甜汽水，因為那對健康不好。",
        "otherForms": ""
    },
    {
        "word": "sometimes",
        "pos": "adv.",
        "meaning": "有時候",
        "theme": "副詞",
        "sentence": "Sometimes learning a new language can be a little frustrating.",
        "sentenceZh": "有時候學習新語言會有點令人挫折。",
        "otherForms": ""
    },
    {
        "word": "usually",
        "pos": "adv.",
        "meaning": "通常",
        "theme": "副詞",
        "sentence": "We usually have rice, meat, and vegetables for dinner.",
        "sentenceZh": "我們晚餐通常吃米飯、肉和蔬菜。",
        "otherForms": ""
    },
    {
        "word": "again",
        "pos": "adv.",
        "meaning": "再次",
        "theme": "副詞",
        "sentence": "Please read the English sentence aloud again.",
        "sentenceZh": "請再次大聲朗讀這個英文句子。",
        "otherForms": ""
    },
    {
        "word": "hardly",
        "pos": "adv.",
        "meaning": "幾乎不",
        "theme": "副詞",
        "sentence": "The fog was so thick that I could hardly see the road.",
        "sentenceZh": "霧太濃了，我幾乎看不見馬路。",
        "otherForms": ""
    },
    {
        "word": "together",
        "pos": "adv.",
        "meaning": "一起",
        "theme": "副詞",
        "sentence": "Let's work together to finish this school science project.",
        "sentenceZh": "我們一起合作完成這個學校的科學專案吧。",
        "otherForms": ""
    },
    {
        "word": "twice",
        "pos": "adv.",
        "meaning": "兩次",
        "theme": "副詞",
        "sentence": "I brush my teeth at least twice a day to keep them healthy.",
        "sentenceZh": "我一天至少刷兩次牙來保持牙齒健康。",
        "otherForms": ""
    },
    {
        "word": "this",
        "pos": "pron. / adj.",
        "meaning": "這個（近指單數）",
        "theme": "代名詞",
        "sentence": "This interactive grammar game is really fun to play!",
        "sentenceZh": "這個互動文法遊戲玩起來真有趣！",
        "otherForms": ""
    },
    {
        "word": "that",
        "pos": "pron. / adj.",
        "meaning": "那個（遠指單數）",
        "theme": "代名詞",
        "sentence": "That tall building over there is the city hospital.",
        "sentenceZh": "那邊那棟高大的建築物是市立醫院。",
        "otherForms": ""
    },
    {
        "word": "these",
        "pos": "pron. / adj.",
        "meaning": "這些（近指複數）",
        "theme": "代名詞",
        "sentence": "Please put these heavy books on the bottom shelf.",
        "sentenceZh": "請把這些重書放在最底層的架子上。",
        "otherForms": ""
    },
    {
        "word": "those",
        "pos": "pron. / adj.",
        "meaning": "那些（遠指複數）",
        "theme": "代名詞",
        "sentence": "Those students playing on the court are my classmates.",
        "sentenceZh": "那些在球場上打球的學生是我的同班同學。",
        "otherForms": ""
    },
    {
        "word": "I",
        "pos": "pron.",
        "meaning": "我",
        "theme": "代名詞",
        "sentence": "I built the webpage by myself, and the design is mine.",
        "sentenceZh": "我自己建立了這個網頁，而設計是我的。",
        "otherForms": "me (受格), my (所有格), mine (所有格代名詞), myself (反身代名詞)"
    },
    {
        "word": "you",
        "pos": "pron.",
        "meaning": "你 / 你們",
        "theme": "代名詞",
        "sentence": "Did you finish the homework by yourself?",
        "sentenceZh": "你是自己一個人完成作業的嗎？",
        "otherForms": "your (所有格), yours (所有格代名詞), yourself (反身代名詞), yourselves (反身(複數))"
    },
    {
        "word": "he",
        "pos": "pron.",
        "meaning": "他",
        "theme": "代名詞",
        "sentence": "He hurt himself when he fell off his new bicycle.",
        "sentenceZh": "他從新腳踏車上摔下來時傷到了自己。",
        "otherForms": "him (受格), his (所有格；所有格代名詞), himself (反身代名詞)"
    },
    {
        "word": "she",
        "pos": "pron.",
        "meaning": "她",
        "theme": "代名詞",
        "sentence": "She made herself a cup of hot tea to feel warm.",
        "sentenceZh": "她為自己泡了一杯熱茶來保暖。",
        "otherForms": "her (受格；所有格), hers (所有格代名詞), herself (反身代名詞)"
    },
    {
        "word": "it",
        "pos": "pron.",
        "meaning": "它",
        "theme": "代名詞",
        "sentence": "The cat is washing itself by licking its paws.",
        "sentenceZh": "貓正藉由舔爪子來清潔自己。",
        "otherForms": "its (所有格；所有格代名詞), itself (反身代名詞)"
    },
    {
        "word": "we",
        "pos": "pron.",
        "meaning": "我們",
        "theme": "代名詞",
        "sentence": "We enjoyed ourselves very much at the Halloween party.",
        "sentenceZh": "我們在萬聖節派對上玩得非常盡興。",
        "otherForms": "us (受格), our (所有格), ours (所有格代名詞), ourselves (反身代名詞)"
    },
    {
        "word": "they",
        "pos": "pron.",
        "meaning": "他們 / 它們",
        "theme": "代名詞",
        "sentence": "They built the big sandcastle by themselves.",
        "sentenceZh": "他們自己堆起了那座大沙堡。",
        "otherForms": "them (受格), their (所有格), theirs (所有格代名詞), themselves (反身代名詞)"
    },
    {
        "word": "all",
        "pos": "pron.",
        "meaning": "全部 / 所有",
        "theme": "代名詞",
        "sentence": "You shouldn't eat all the food.",
        "sentenceZh": "你不應該吃掉全部的食物",
        "otherForms": ""
    },
    {
        "word": "another",
        "pos": "pron.",
        "meaning": "另一個",
        "theme": "代名詞",
        "sentence": "Saying is one thing, while doing is another.",
        "sentenceZh": "說是一件事，做就是另外一件事了。",
        "otherForms": ""
    },
    {
        "word": "any",
        "pos": "pron.",
        "meaning": "任何",
        "theme": "代名詞",
        "sentence": "I don't have any money on me right now.",
        "sentenceZh": "我現在身上沒任何錢。",
        "otherForms": ""
    },
    {
        "word": "anyone",
        "pos": "pron.",
        "meaning": "任何人",
        "theme": "代名詞",
        "sentence": "Did you find anyone to help us?",
        "sentenceZh": "你有找到可以幫我們的人嗎?",
        "otherForms": ""
    },
    {
        "word": "anything",
        "pos": "pron.",
        "meaning": "任何事",
        "theme": "代名詞",
        "sentence": "Is there anything else I can help you with today?",
        "sentenceZh": "有甚麼我今天可以幫忙的嗎?",
        "otherForms": ""
    },
    {
        "word": "both",
        "pos": "pron.",
        "meaning": "兩者",
        "theme": "代名詞",
        "sentence": "English and math are hard, but I am good at both.",
        "sentenceZh": "英文跟數學很難，但我兩個都很擅長。",
        "otherForms": ""
    },
    {
        "word": "each",
        "pos": "pron.",
        "meaning": "每個",
        "theme": "代名詞",
        "sentence": "Each of the students need to take this exam.",
        "sentenceZh": "這裡每位學生都要考這個考試。",
        "otherForms": ""
    },
    {
        "word": "everyone (everybody)",
        "pos": "pron.",
        "meaning": "每個人",
        "theme": "代名詞",
        "sentence": "Everyone needs a vocabulary passport to practice words.",
        "sentenceZh": "每個人都需要一本單字護照來練習單字。",
        "otherForms": ""
    },
    {
        "word": "everything",
        "pos": "pron.",
        "meaning": "每件事",
        "theme": "代名詞",
        "sentence": "I hope everything goes well for your big badminton game tomorrow.",
        "sentenceZh": "希望你明天的羽球大賽一切順利。",
        "otherForms": ""
    },
    {
        "word": "many",
        "pos": "pron.",
        "meaning": "許多（可數）",
        "theme": "代名詞",
        "sentence": "There are many interesting animals in the city zoo.",
        "sentenceZh": "城市動物園裡有許多有趣的動物。",
        "otherForms": "more (比較級(不規則)), most (最高級(不規則))"
    },
    {
        "word": "nobody",
        "pos": "pron.",
        "meaning": "沒有人",
        "theme": "代名詞",
        "sentence": "Nobody knows the secret answer to the magic puzzle.",
        "sentenceZh": "沒有人知道這個魔法謎題的秘密答案。",
        "otherForms": ""
    },
    {
        "word": "nothing",
        "pos": "pron.",
        "meaning": "沒有東西",
        "theme": "代名詞",
        "sentence": "There is nothing inside the empty box.",
        "sentenceZh": "那個空盒子裡什麼都沒有。",
        "otherForms": ""
    },
    {
        "word": "part",
        "pos": "pron. / n.",
        "meaning": "部分",
        "theme": "代名詞",
        "sentence": "Reading is an important part of learning a new language.",
        "sentenceZh": "閱讀是學習新語言重要的一部分。",
        "otherForms": ""
    },
    {
        "word": "some",
        "pos": "pron.",
        "meaning": "一些",
        "theme": "代名詞",
        "sentence": "Can I have some extra ice in my orange juice, please?",
        "sentenceZh": "請問我的柳橙汁可以多加一些冰塊嗎？",
        "otherForms": ""
    },
    {
        "word": "someone (somebody)",
        "pos": "pron.",
        "meaning": "某人",
        "theme": "代名詞",
        "sentence": "Someone left a blue umbrella in the classroom yesterday.",
        "sentenceZh": "昨天有人把一把藍色雨傘忘在教室裡了。",
        "otherForms": ""
    },
    {
        "word": "something",
        "pos": "pron.",
        "meaning": "某事",
        "theme": "代名詞",
        "sentence": "I have something important to tell you after class.",
        "sentenceZh": "下課後我有重要的事情要告訴你。",
        "otherForms": ""
    },
    {
        "word": "none",
        "pos": "pron.",
        "meaning": "無",
        "theme": "代名詞",
        "sentence": "I asked my friends for help, but none of them knew the answer.",
        "sentenceZh": "我向朋友們求助，但他們之中沒有人知道答案。",
        "otherForms": ""
    },
    {
        "word": "above",
        "pos": "prep.",
        "meaning": "在…上面",
        "theme": "介係詞",
        "sentence": "The airplane is flying high above the white clouds.",
        "sentenceZh": "飛機在白雲上方高高地飛著。",
        "otherForms": ""
    },
    {
        "word": "below",
        "pos": "prep.",
        "meaning": "在…下面",
        "theme": "介係詞",
        "sentence": "Please sign your name below the line on the contract.",
        "sentenceZh": "請在合約的線下方簽名。",
        "otherForms": ""
    },
    {
        "word": "on",
        "pos": "prep.",
        "meaning": "在…上面（接觸）",
        "theme": "介係詞",
        "sentence": "Your English dictionary is right on the teacher's desk.",
        "sentenceZh": "你的英文字典就在老師的書桌上。",
        "otherForms": ""
    },
    {
        "word": "under",
        "pos": "prep.",
        "meaning": "在…下面",
        "theme": "介係詞",
        "sentence": "The little kitten is sleeping soundly under the sofa.",
        "sentenceZh": "小貓正在沙發下安穩地睡著。",
        "otherForms": ""
    },
    {
        "word": "in",
        "pos": "prep.",
        "meaning": "在…裡面（較大範圍）",
        "theme": "介係詞",
        "sentence": "There are many tall trees in the beautiful park.",
        "sentenceZh": "美麗的公園裡有許多高大的樹木。",
        "otherForms": ""
    },
    {
        "word": "inside",
        "pos": "prep.",
        "meaning": "在…裡面",
        "theme": "介係詞",
        "sentence": "It is too hot outside; let's stay inside the house.",
        "sentenceZh": "外面太熱了，我們待在屋子裡面吧。",
        "otherForms": ""
    },
    {
        "word": "outside",
        "pos": "prep.",
        "meaning": "在…外面",
        "theme": "介係詞",
        "sentence": "The children are playing happily outside the classroom.",
        "sentenceZh": "孩子們正在教室外面開心地玩耍。",
        "otherForms": ""
    },
    {
        "word": "at",
        "pos": "prep.",
        "meaning": "在（地點、時間點）",
        "theme": "介係詞",
        "sentence": "We will have an important meeting at ten o'clock tomorrow.",
        "sentenceZh": "我們明天十點將有一場重要的會議。",
        "otherForms": ""
    },
    {
        "word": "behind",
        "pos": "prep.",
        "meaning": "在…後面",
        "theme": "介係詞",
        "sentence": "The shy boy hid behind his father's tall legs.",
        "sentenceZh": "害羞的男孩躲在他爸爸長長的腿後面。",
        "otherForms": ""
    },
    {
        "word": "in back of",
        "pos": "prep.",
        "meaning": "在…後面",
        "theme": "介係詞",
        "sentence": "The school gym is located in back of the library.",
        "sentenceZh": "學校體育館位在圖書館的後面。",
        "otherForms": ""
    },
    {
        "word": "in front of",
        "pos": "prep.",
        "meaning": "在…前面",
        "theme": "介係詞",
        "sentence": "The teacher stood in front of the blackboard to explain.",
        "sentenceZh": "老師站在黑板前面講解。",
        "otherForms": ""
    },
    {
        "word": "across",
        "pos": "prep.",
        "meaning": "橫越",
        "theme": "介係詞",
        "sentence": "Be careful when you walk across the busy street.",
        "sentenceZh": "走路穿越繁忙的街道時要小心。",
        "otherForms": ""
    },
    {
        "word": "beyond",
        "pos": "prep.",
        "meaning": "超越 / 在…另一邊",
        "theme": "介係詞",
        "sentence": "The beautiful valley lies just beyond those high mountains.",
        "sentenceZh": "美麗的山谷就坐落於那些高山的另一邊。",
        "otherForms": ""
    },
    {
        "word": "beside",
        "pos": "prep.",
        "meaning": "在…旁邊",
        "theme": "介係詞",
        "sentence": "Come sit beside me and let's read the story together.",
        "sentenceZh": "來坐在我旁邊，我們一起讀這個故事吧。",
        "otherForms": ""
    },
    {
        "word": "next to",
        "pos": "prep.",
        "meaning": "緊鄰 / 在…旁邊",
        "theme": "介係詞",
        "sentence": "The convenience store is right next to the post office.",
        "sentenceZh": "便利商店就在郵局緊鄰的旁邊。",
        "otherForms": ""
    },
    {
        "word": "by",
        "pos": "prep.",
        "meaning": "藉由 / 在…旁邊",
        "theme": "介係詞",
        "sentence": "We learned how to build a web game by watching videos online.",
        "sentenceZh": "我們藉由看網路影片學會了如何建立網頁遊戲。",
        "otherForms": ""
    },
    {
        "word": "between",
        "pos": "prep.",
        "meaning": "在…之間（兩者）",
        "theme": "介係詞",
        "sentence": "The letter B is exactly between A and C in the alphabet.",
        "sentenceZh": "字母 B 在字母表裡剛好在 A 和 C 之間。",
        "otherForms": ""
    },
    {
        "word": "near",
        "pos": "adj. / adv.",
        "meaning": "靠近",
        "theme": "介係詞",
        "sentence": "My grandparents live in a small village near the sea.",
        "sentenceZh": "我祖父母住在靠近海邊的一個小村莊裡。",
        "otherForms": "nearer (比較級), nearest (最高級), nearly (副詞)"
    },
    {
        "word": "among",
        "pos": "prep.",
        "meaning": "在…之中（三者以上）",
        "theme": "介係詞",
        "sentence": "The clever rabbit hid among the tall green bushes.",
        "sentenceZh": "聰明的兔子躲在高高的綠色灌木叢之中。",
        "otherForms": ""
    },
    {
        "word": "against",
        "pos": "prep.",
        "meaning": "反對 / 靠著",
        "theme": "介係詞",
        "sentence": "He stood leaning his back against the classroom wall.",
        "sentenceZh": "他背靠著教室牆壁站著。",
        "otherForms": ""
    },
    {
        "word": "along",
        "pos": "prep.",
        "meaning": "沿著",
        "theme": "介係詞",
        "sentence": "We rode our bicycles along the beautiful riverbank.",
        "sentenceZh": "我們沿著美麗的河岸騎腳踏車。",
        "otherForms": ""
    },
    {
        "word": "down",
        "pos": "prep.",
        "meaning": "沿…而下",
        "theme": "介係詞",
        "sentence": "The children rolled quickly down the grassy hill.",
        "sentenceZh": "孩子們快速地沿著長滿草的山丘滾下來。",
        "otherForms": ""
    },
    {
        "word": "from",
        "pos": "prep.",
        "meaning": "從… / 來自…",
        "theme": "介係詞",
        "sentence": "I received a beautiful postcard from my pen pal in Japan.",
        "sentenceZh": "我收到了一張來自日本筆友的美麗明信片。",
        "otherForms": ""
    },
    {
        "word": "to",
        "pos": "prep.",
        "meaning": "到… / 向…",
        "theme": "介係詞",
        "sentence": "Please give this homework paper to your English teacher.",
        "sentenceZh": "請把這份作業交給你的英文老師。",
        "otherForms": ""
    },
    {
        "word": "toward",
        "pos": "prep.",
        "meaning": "朝向…",
        "theme": "介係詞",
        "sentence": "The little dog ran quickly toward its owner.",
        "sentenceZh": "小狗快速地朝著牠的主人跑去。",
        "otherForms": ""
    },
    {
        "word": "up",
        "pos": "prep.",
        "meaning": "沿…而上",
        "theme": "介係詞",
        "sentence": "The brave hikers climbed high up the snowy mountain.",
        "sentenceZh": "勇敢的登山客爬上了白雪覆蓋的高山。",
        "otherForms": ""
    },
    {
        "word": "over",
        "pos": "prep.",
        "meaning": "在…正上方 / 越過",
        "theme": "介係詞",
        "sentence": "I just saw a plane fly over us.",
        "sentenceZh": "我剛看到一架飛機飛過我們。",
        "otherForms": ""
    },
    {
        "word": "into",
        "pos": "prep.",
        "meaning": "進入",
        "theme": "介係詞",
        "sentence": "Never put your finger into a fan.",
        "sentenceZh": "絕對不要把你的手指放到電扇裡面。",
        "otherForms": ""
    },
    {
        "word": "out of",
        "pos": "prep.",
        "meaning": "從…裡面出來",
        "theme": "介係詞",
        "sentence": "No one has come out of the place alive.",
        "sentenceZh": "沒人活著從那個地方出來過。",
        "otherForms": ""
    },
    {
        "word": "through",
        "pos": "prep.",
        "meaning": "穿過 / 透過",
        "theme": "介係詞",
        "sentence": "The train traveled fast through the dark tunnel.",
        "sentenceZh": "火車快速穿過了黑暗的隧道。",
        "otherForms": ""
    },
    {
        "word": "off",
        "pos": "prep.",
        "meaning": "離開 / 從…下來",
        "theme": "介係詞",
        "sentence": "Be careful when you get off the crowded bus.",
        "sentenceZh": "從擁擠的公車下來時要小心。",
        "otherForms": ""
    },
    {
        "word": "after",
        "pos": "prep. / conj.",
        "meaning": "在…之後",
        "theme": "介係詞",
        "sentence": "Let's practice playing badminton after school ends today.",
        "sentenceZh": "今天放學後我們來練習打羽球吧。",
        "otherForms": ""
    },
    {
        "word": "before",
        "pos": "prep. / conj.",
        "meaning": "在…之前",
        "theme": "介係詞",
        "sentence": "You must wash your hands cleanly before eating dinner.",
        "sentenceZh": "吃晚餐前你必須把手洗乾淨。",
        "otherForms": ""
    },
    {
        "word": "during",
        "pos": "prep.",
        "meaning": "在…期間",
        "theme": "介係詞",
        "sentence": "Please don't talk loudly to your friends during the movie.",
        "sentenceZh": "看電影期間請不要大聲和朋友講話。",
        "otherForms": ""
    },
    {
        "word": "until",
        "pos": "prep. / conj.",
        "meaning": "直到…",
        "theme": "介係詞",
        "sentence": "We waited at the station until the train finally arrived.",
        "sentenceZh": "我們在車站等，直到火車最後抵達。",
        "otherForms": ""
    },
    {
        "word": "since",
        "pos": "prep. / conj.",
        "meaning": "自從… / 既然",
        "theme": "介係詞",
        "sentence": "I have been learning HTML coding since last year.",
        "sentenceZh": "自從去年開始我就一直在學 HTML 寫程式。",
        "otherForms": ""
    },
    {
        "word": "with",
        "pos": "prep.",
        "meaning": "和…一起 / 用…",
        "theme": "介係詞",
        "sentence": "I went to the shopping mall with my older sister yesterday.",
        "sentenceZh": "我昨天和姐姐一起去購物中心。",
        "otherForms": ""
    },
    {
        "word": "without",
        "pos": "prep.",
        "meaning": "沒有…",
        "theme": "介係詞",
        "sentence": "You cannot enter the school building without your ID card.",
        "sentenceZh": "沒有識別證你不能進入學校大樓。",
        "otherForms": ""
    },
    {
        "word": "like",
        "pos": "prep. / v.",
        "meaning": "像… / 喜歡",
        "theme": "介係詞",
        "sentence": "The cloud in the sky looks exactly like a white rabbit.",
        "sentenceZh": "天空中的那朵雲看起來就像一隻白兔。",
        "otherForms": ""
    },
    {
        "word": "than",
        "pos": "prep. / conj.",
        "meaning": "比…",
        "theme": "介係詞",
        "sentence": "An airplane travels much faster than a train.",
        "sentenceZh": "飛機移動的速度比火車快多了。",
        "otherForms": ""
    },
    {
        "word": "of",
        "pos": "prep.",
        "meaning": "…的 / 關於",
        "theme": "介係詞",
        "sentence": "The capital city of Taiwan is Taipei.",
        "sentenceZh": "台灣的首都是台北。",
        "otherForms": ""
    },
    {
        "word": "except",
        "pos": "prep.",
        "meaning": "除了…之外",
        "theme": "介係詞",
        "sentence": "Everyone in the class passed the test except for John.",
        "sentenceZh": "班上每個人都通過了考試，除了約翰之外。",
        "otherForms": ""
    },
    {
        "word": "for",
        "pos": "prep. / conj.",
        "meaning": "為了 / 給 / 因為",
        "theme": "介係詞",
        "sentence": "My mother baked a delicious chocolate cake for my birthday.",
        "sentenceZh": "我媽媽為了我的生日烤了一個美味的巧克力蛋糕。",
        "otherForms": ""
    },
    {
        "word": "around",
        "pos": "prep.",
        "meaning": "四周 / 大約",
        "theme": "介係詞",
        "sentence": "Is there any restroom around here. I need to poop.",
        "sentenceZh": "這附近有廁所嗎?我需要大便。",
        "otherForms": ""
    },
    {
        "word": "about",
        "pos": "prep.",
        "meaning": "關於 / 大約",
        "theme": "介係詞",
        "sentence": "The teacher told us a funny story about his childhood.",
        "sentenceZh": "老師告訴我們一個關於他童年的好笑故事。",
        "otherForms": ""
    },
    {
        "word": "how",
        "pos": "adv.",
        "meaning": "如何",
        "theme": "疑問詞&連接詞",
        "sentence": "Do you know how to solve this difficult math problem?",
        "sentenceZh": "你知道如何解開這道困難的數學題嗎？",
        "otherForms": ""
    },
    {
        "word": "what",
        "pos": "pron.",
        "meaning": "什麼",
        "theme": "疑問詞&連接詞",
        "sentence": "What are you planning to do during the winter vacation?",
        "sentenceZh": "你寒假計畫做什麼？",
        "otherForms": ""
    },
    {
        "word": "when",
        "pos": "adv. / conj.",
        "meaning": "何時",
        "theme": "疑問詞&連接詞",
        "sentence": "When is the badminton game going to start?",
        "sentenceZh": "羽球比賽何時開始？",
        "otherForms": ""
    },
    {
        "word": "where",
        "pos": "adv. / conj.",
        "meaning": "在哪裡",
        "theme": "疑問詞&連接詞",
        "sentence": "Where did you put your vocabulary passport?",
        "sentenceZh": "你把單字護照放在哪裡了？",
        "otherForms": ""
    },
    {
        "word": "whether",
        "pos": "conj.",
        "meaning": "是否",
        "theme": "疑問詞&連接詞",
        "sentence": "I don't know whether he likes to play the grammar game.",
        "sentenceZh": "我不知道他是否喜歡玩文法遊戲。",
        "otherForms": ""
    },
    {
        "word": "which",
        "pos": "pron.",
        "meaning": "哪一個",
        "theme": "疑問詞&連接詞",
        "sentence": "Which character do you like more, Batman or Superman?",
        "sentenceZh": "你比較喜歡哪一個角色，蝙蝠俠還是超人？",
        "otherForms": ""
    },
    {
        "word": "who",
        "pos": "pron.",
        "meaning": "誰(主格)",
        "theme": "疑問詞&連接詞",
        "sentence": "Who is the brave hero in this comic book?",
        "sentenceZh": "這本漫畫書裡勇敢的英雄是誰？",
        "otherForms": ""
    },
    {
        "word": "why",
        "pos": "adv.",
        "meaning": "為什麼",
        "theme": "疑問詞&連接詞",
        "sentence": "Why are you late for the English class today?",
        "sentenceZh": "你今天英文課為什麼遲到？",
        "otherForms": ""
    },
    {
        "word": "for",
        "pos": "prep. / conj.",
        "meaning": "因為",
        "theme": "疑問詞&連接詞",
        "sentence": "He went to bed early, for he was very tired after the match.",
        "sentenceZh": "他很早就上床睡覺了，因為他打完比賽後非常累。",
        "otherForms": ""
    },
    {
        "word": "and",
        "pos": "conj.",
        "meaning": "和 / 並且",
        "theme": "疑問詞&連接詞",
        "sentence": "Wonder Woman is strong, and she is very brave.",
        "sentenceZh": "神力女超人很強壯，並且她非常勇敢。",
        "otherForms": ""
    },
    {
        "word": "nor",
        "pos": "conj.",
        "meaning": "也不",
        "theme": "疑問詞&連接詞",
        "sentence": "He doesn't like hot weather, nor does he like cold weather.",
        "sentenceZh": "他不喜歡炎熱的天氣，也不喜歡寒冷的天氣。",
        "otherForms": ""
    },
    {
        "word": "but",
        "pos": "conj.",
        "meaning": "但是",
        "theme": "疑問詞&連接詞",
        "sentence": "The grammar test was hard, but I got a good grade.",
        "sentenceZh": "文法考試很難，但是我考了個好成績。",
        "otherForms": ""
    },
    {
        "word": "or",
        "pos": "conj.",
        "meaning": "或者 / 否則",
        "theme": "疑問詞&連接詞",
        "sentence": "Hurry up, or you will miss the school bus!",
        "sentenceZh": "快一點，否則你會錯過校車！",
        "otherForms": ""
    },
    {
        "word": "yet",
        "pos": "adv. / conj.",
        "meaning": "但是 / 尚未",
        "theme": "疑問詞&連接詞",
        "sentence": "It was raining heavily, yet they still went out to play.",
        "sentenceZh": "雨下得很大，但他們還是出去玩了。",
        "otherForms": ""
    },
    {
        "word": "so",
        "pos": "conj. / adv.",
        "meaning": "所以 / 非常",
        "theme": "疑問詞&連接詞",
        "sentence": "It is raining, so we have to play badminton inside the gym.",
        "sentenceZh": "現在正在下雨，所以我們必須在體育館裡面打羽球。",
        "otherForms": ""
    },
    {
        "word": "as",
        "pos": "prep. / conj.",
        "meaning": "作為 / 當作",
        "theme": "疑問詞&連接詞",
        "sentence": "He works as an English teacher in a junior high school.",
        "sentenceZh": "他在一所國中擔任英文老師。",
        "otherForms": ""
    },
    {
        "word": "because",
        "pos": "conj.",
        "meaning": "因為",
        "theme": "疑問詞&連接詞",
        "sentence": "I am happy because I passed the English test.",
        "sentenceZh": "我很開心，因為我通過了英文考試。",
        "otherForms": ""
    },
    {
        "word": "if",
        "pos": "conj.",
        "meaning": "如果",
        "theme": "疑問詞&連接詞",
        "sentence": "If you finish your homework, you can play the computer game.",
        "sentenceZh": "如果你寫完作業，你就可以玩電腦遊戲。",
        "otherForms": ""
    },
    {
        "word": "since",
        "pos": "prep. / conj.",
        "meaning": "自從 / 既然",
        "theme": "疑問詞&連接詞",
        "sentence": "Since you are already here, let's review the vocabulary together.",
        "sentenceZh": "既然你已經在這裡了，我們就一起複習單字吧。",
        "otherForms": ""
    },
    {
        "word": "before",
        "pos": "prep. / conj.",
        "meaning": "在~之前",
        "theme": "疑問詞&連接詞",
        "sentence": "Please wash your hands before you eat dinner.",
        "sentenceZh": "吃晚餐前請洗手。",
        "otherForms": ""
    },
    {
        "word": "after",
        "pos": "prep. / conj.",
        "meaning": "在~之後",
        "theme": "疑問詞&連接詞",
        "sentence": "We will go to the library after school ends.",
        "sentenceZh": "放學後我們將會去圖書館。",
        "otherForms": ""
    },
    {
        "word": "while",
        "pos": "conj.",
        "meaning": "當~時 / 然而",
        "theme": "疑問詞&連接詞",
        "sentence": "Someone called my name while I was walking down the hall.",
        "sentenceZh": "當我走在走廊時，有人叫了我的名字。",
        "otherForms": ""
    },
    {
        "word": "till",
        "pos": "conj.",
        "meaning": "直到",
        "theme": "疑問詞&連接詞",
        "sentence": "We will stay in the classroom till the rain stops.",
        "sentenceZh": "我們將會待在教室裡直到雨停。",
        "otherForms": ""
    },
    {
        "word": "than",
        "pos": "prep. / conj.",
        "meaning": "比",
        "theme": "疑問詞&連接詞",
        "sentence": "The Flash runs much faster than normal people.",
        "sentenceZh": "閃電俠跑得比一般人快得多。",
        "otherForms": ""
    },
    {
        "word": "although (though, even though)",
        "pos": "conj.",
        "meaning": "雖然",
        "theme": "疑問詞&連接詞",
        "sentence": "Although he is a beginner, he plays badminton very well.",
        "sentenceZh": "雖然他是個初學者，但他羽球打得非常好。",
        "otherForms": ""
    }
];