// =========================================================================
// 📖 dictionary.js - 2000單字與變異動詞 融合大一統辭典
// =========================================================================

const DICTIONARY_DATA = [
    {
        "word": "adult",
        "meaning": "成年人",
        "theme": "身分",
        "sentence": "You have to buy an adult ticket if you are over 18.",
        "sentenceZh": "如果你超過18歲，就必須買全票（成人票）。"
    },
    {
        "word": "American",
        "meaning": "美國人",
        "theme": "身分",
        "sentence": "My new English teacher is an American.",
        "sentenceZh": "我的新英文老師是美國人。"
    },
    {
        "word": "angel",
        "meaning": "天使",
        "theme": "身分",
        "sentence": "The little girl sleeping in the bed looks like an angel.",
        "sentenceZh": "睡在床上的小女孩看起來像個天使。"
    },
    {
        "word": "Asian",
        "meaning": "亞洲人",
        "theme": "身分",
        "sentence": "Rice is a very important food for many Asian people.",
        "sentenceZh": "米飯對許多亞洲人來說是非常重要的食物。"
    },
    {
        "word": "baby",
        "meaning": "嬰兒",
        "theme": "身分",
        "sentence": "Please be quiet; the baby is sleeping.",
        "sentenceZh": "請保持安靜，嬰兒正在睡覺。"
    },
    {
        "word": "beginner",
        "meaning": "初學者",
        "theme": "身分",
        "sentence": "This racket is perfect for a beginner learning how to swing.",
        "sentenceZh": "這支球拍非常適合正在學習揮拍的初學者。"
    },
    {
        "word": "boy",
        "meaning": "男孩",
        "theme": "身分",
        "sentence": "The boy playing basketball over there is my classmate.",
        "sentenceZh": "在那邊打籃球的男孩是我的同班同學。"
    },
    {
        "word": "character",
        "meaning": "角色；性格",
        "theme": "身分",
        "sentence": "We need a cute character for our new vocabulary game.",
        "sentenceZh": "我們的單字新遊戲需要一個可愛的角色。"
    },
    {
        "word": "child",
        "meaning": "小孩",
        "theme": "身分",
        "sentence": "Every child needs love and care from their family.",
        "sentenceZh": "每個小孩都需要家人的愛與關懷。"
    },
    {
        "word": "couple",
        "meaning": "情侶；夫妻",
        "theme": "身分",
        "sentence": "The old couple walks in the park every morning.",
        "sentenceZh": "那對老夫妻每天早上都在公園散步。"
    },
    {
        "word": "crowd",
        "meaning": "人群",
        "theme": "身分",
        "sentence": "There was a large crowd waiting for the train at the station.",
        "sentenceZh": "車站裡有一大群人在等火車。"
    },
    {
        "word": "customer",
        "meaning": "顧客",
        "theme": "身分",
        "sentence": "The shopkeeper smiled and said hello to the customer.",
        "sentenceZh": "店老闆微笑著向顧客打招呼。"
    },
    {
        "word": "enemy",
        "meaning": "敵人",
        "theme": "身分",
        "sentence": "In the game, you have to defeat the enemy to win.",
        "sentenceZh": "在遊戲中，你必須打敗敵人才能獲勝。"
    },
    {
        "word": "female",
        "meaning": "女性",
        "theme": "身分",
        "sentence": "There are twenty male students and fifteen female students in my class.",
        "sentenceZh": "我的班上有二十個男學生和十五個女學生。"
    },
    {
        "word": "fool",
        "meaning": "傻瓜",
        "theme": "身分",
        "sentence": "Don't be a fool and believe everything on the Internet.",
        "sentenceZh": "別當傻瓜去相信網路上的每一件事。"
    },
    {
        "word": "foreigner",
        "meaning": "外國人",
        "theme": "身分",
        "sentence": "It is polite to help a foreigner if they are lost.",
        "sentenceZh": "如果外國人迷路了，幫助他們是一種禮貌。"
    },
    {
        "word": "friend",
        "meaning": "朋友",
        "theme": "身分",
        "sentence": "A good friend will always listen to you when you are sad.",
        "sentenceZh": "當你難過時，好朋友總是會傾聽你說話。"
    },
    {
        "word": "genius",
        "meaning": "天才",
        "theme": "身分",
        "sentence": "Albert Einstein was a genius in science.",
        "sentenceZh": "阿爾伯特·愛因斯坦是科學界的天才。"
    },
    {
        "word": "gentleman",
        "meaning": "紳士",
        "theme": "身分",
        "sentence": "A true gentleman is always polite to others.",
        "sentenceZh": "真正的紳士總是對他人很有禮貌。"
    },
    {
        "word": "giant",
        "meaning": "巨人",
        "theme": "身分",
        "sentence": "The giant tree in the forest is over one hundred years old.",
        "sentenceZh": "森林裡那棵巨大的樹已經有一百多歲了。"
    },
    {
        "word": "girl",
        "meaning": "女孩",
        "theme": "身分",
        "sentence": "The girl with short hair is my younger sister.",
        "sentenceZh": "那個短頭髮的女孩是我的妹妹。"
    },
    {
        "word": "god",
        "meaning": "神",
        "theme": "身分",
        "sentence": "Many ancient stories are about the weather gods.",
        "sentenceZh": "許多古代故事都與天氣的神明有關。"
    },
    {
        "word": "guest",
        "meaning": "客人",
        "theme": "身分",
        "sentence": "My mother is cooking dinner for our guests tonight.",
        "sentenceZh": "我媽媽正在為今晚的客人煮晚餐。"
    },
    {
        "word": "guy",
        "meaning": "夥計",
        "theme": "身分",
        "sentence": "He is a nice guy, and everyone likes him.",
        "sentenceZh": "他是個好人，大家都喜歡他。"
    },
    {
        "word": "hero",
        "meaning": "英雄",
        "theme": "身分",
        "sentence": "The firefighter who saved the cat from the tree is a hero.",
        "sentenceZh": "從樹上救下貓咪的消防員是個英雄。"
    },
    {
        "word": "honey",
        "meaning": "蜂蜜；親愛的",
        "theme": "身分",
        "sentence": "I like to add some honey to my tea.",
        "sentenceZh": "我喜歡在我的茶裡加一些蜂蜜。"
    },
    {
        "word": "host",
        "meaning": "主人",
        "theme": "身分",
        "sentence": "The host of the party prepared a lot of delicious food.",
        "sentenceZh": "派對的主人準備了許多美味的食物。"
    },
    {
        "word": "human",
        "meaning": "人類",
        "theme": "身分",
        "sentence": "Clean water is very important for human health.",
        "sentenceZh": "乾淨的水對人類健康非常重要。"
    },
    {
        "word": "Japanese",
        "meaning": "日本人",
        "theme": "身分",
        "sentence": "She is learning Japanese because she loves their culture.",
        "sentenceZh": "她正在學日文，因為她熱愛他們的文化。"
    },
    {
        "word": "kid",
        "meaning": "小孩",
        "theme": "身分",
        "sentence": "The kids are playing happily in the schoolyard.",
        "sentenceZh": "孩子們正在校園裡開心地玩耍。"
    },
    {
        "word": "king",
        "meaning": "國王",
        "theme": "身分",
        "sentence": "The king lived in a very large and beautiful castle.",
        "sentenceZh": "國王住在一個非常大又美麗的城堡裡。"
    },
    {
        "word": "Korean",
        "meaning": "韓國人",
        "theme": "身分",
        "sentence": "We went to a Korean restaurant for lunch yesterday.",
        "sentenceZh": "我們昨天去了一家韓國餐廳吃午餐。"
    },
    {
        "word": "lady",
        "meaning": "女士",
        "theme": "身分",
        "sentence": "The old lady needs help crossing the busy street.",
        "sentenceZh": "這位老太太需要幫忙過這條繁忙的馬路。"
    },
    {
        "word": "leader",
        "meaning": "領袖",
        "theme": "身分",
        "sentence": "A good class leader helps the teacher and students.",
        "sentenceZh": "一位好的班長會協助老師和同學。"
    },
    {
        "word": "loser",
        "meaning": "輸家",
        "theme": "身分",
        "sentence": "Don't give up! A true loser is someone who stops trying.",
        "sentenceZh": "別放棄！真正的輸家是停止嘗試的人。"
    },
    {
        "word": "male",
        "meaning": "男性",
        "theme": "身分",
        "sentence": "The male bird usually has more colorful feathers.",
        "sentenceZh": "雄鳥通常有更鮮豔的羽毛。"
    },
    {
        "word": "man",
        "meaning": "男人",
        "theme": "身分",
        "sentence": "The tall man standing by the door is my uncle.",
        "sentenceZh": "站在門邊的高大男人是我的叔叔。"
    },
    {
        "word": "master",
        "meaning": "主人；大師",
        "theme": "身分",
        "sentence": "It takes a lot of practice to become a master of English.",
        "sentenceZh": "要成為英文大師需要大量的練習。"
    },
    {
        "word": "member",
        "meaning": "成員",
        "theme": "身分",
        "sentence": "Every member of the team worked hard to win the game.",
        "sentenceZh": "隊伍裡的每個成員都很努力以贏得比賽。"
    },
    {
        "word": "neighbor",
        "meaning": "鄰居",
        "theme": "身分",
        "sentence": "Our new neighbor brought us some cookies yesterday.",
        "sentenceZh": "我們的新鄰居昨天帶了一些餅乾給我們。"
    },
    {
        "word": "partner",
        "meaning": "夥伴；伴侶",
        "theme": "身分",
        "sentence": "You and your partner need to work together in this badminton game.",
        "sentenceZh": "你和你的夥伴必須在這場羽球比賽中合作。"
    },
    {
        "word": "people",
        "meaning": "人們",
        "theme": "身分",
        "sentence": "There are many people waiting for the train at the station.",
        "sentenceZh": "車站裡有很多人在等火車。"
    },
    {
        "word": "person",
        "meaning": "人",
        "theme": "身分",
        "sentence": "He is a very kind person who always helps others.",
        "sentenceZh": "他是個非常善良的人，總是幫助別人。"
    },
    {
        "word": "player",
        "meaning": "玩家；球員",
        "theme": "身分",
        "sentence": "Jeremy Lin is a very famous basketball player.",
        "sentenceZh": "林書豪是一位非常有名的籃球員。"
    },
    {
        "word": "prince",
        "meaning": "王子",
        "theme": "身分",
        "sentence": "The young prince rode a white horse through the forest.",
        "sentenceZh": "年輕的王子騎著白馬穿過森林。"
    },
    {
        "word": "princess",
        "meaning": "公主",
        "theme": "身分",
        "sentence": "The princess lives in a beautiful castle.",
        "sentenceZh": "公主住在一個美麗的城堡裡。"
    },
    {
        "word": "queen",
        "meaning": "女王",
        "theme": "身分",
        "sentence": "The queen wore a shiny gold crown on her head.",
        "sentenceZh": "女王頭上戴著閃亮的金皇冠。"
    },
    {
        "word": "role",
        "meaning": "角色",
        "theme": "身分",
        "sentence": "Everyone plays an important role in our class.",
        "sentenceZh": "每個人在我們班上都扮演著重要的角色。"
    },
    {
        "word": "snowman",
        "meaning": "雪人",
        "theme": "身分",
        "sentence": "The kids built a big snowman in the yard during winter.",
        "sentenceZh": "孩子們在冬天時於院子裡堆了一個大雪人。"
    },
    {
        "word": "stranger",
        "meaning": "陌生人",
        "theme": "身分",
        "sentence": "Never open the door for a stranger when you are alone.",
        "sentenceZh": "當你獨自一人時，千萬別幫陌生人開門。"
    },
    {
        "word": "Taiwanese",
        "meaning": "台灣人",
        "theme": "身分",
        "sentence": "Bubble tea is a very popular drink among Taiwanese people.",
        "sentenceZh": "珍珠奶茶在台灣人之中是非常受歡迎的飲料。"
    },
    {
        "word": "teenager",
        "meaning": "青少年",
        "theme": "身分",
        "sentence": "Being a teenager is not always easy, but it is fun.",
        "sentenceZh": "當個青少年並不總是容易的，但也很有趣。"
    },
    {
        "word": "visitor",
        "meaning": "訪客",
        "theme": "身分",
        "sentence": "The museum has thousands of visitors every weekend.",
        "sentenceZh": "這間博物館每個週末都有成千上萬的訪客。"
    },
    {
        "word": "winner",
        "meaning": "贏家",
        "theme": "身分",
        "sentence": "The winner of the race will get a gold medal.",
        "sentenceZh": "賽跑的贏家將會獲得一面金牌。"
    },
    {
        "word": "woman",
        "meaning": "女人",
        "theme": "身分",
        "sentence": "The woman in the red dress is my aunt.",
        "sentenceZh": "穿著紅洋裝的那個女人是我阿姨。"
    },
    {
        "word": "youth",
        "meaning": "青年",
        "theme": "身分",
        "sentence": "The camp is a great place for the local youth to make friends.",
        "sentenceZh": "這個營隊是當地青年交朋友的好地方。"
    },
    {
        "word": "ma'am",
        "meaning": "女士",
        "theme": "身分",
        "sentence": "\"Can I help you, ma'am?\" the clerk asked politely.",
        "sentenceZh": "「女士，需要幫忙嗎？」店員有禮貌地問。"
    },
    {
        "word": "sir",
        "meaning": "男士",
        "theme": "身分",
        "sentence": "\"Excuse me, sir, is this your bag?\"",
        "sentenceZh": "「先生不好意思，這是你的包包嗎？」"
    },
    {
        "word": "Mr.",
        "meaning": "先生",
        "theme": "身分",
        "sentence": "Mr. Lin is our new math teacher this semester.",
        "sentenceZh": "林先生是我們這學期的新數學老師。"
    },
    {
        "word": "Mrs.",
        "meaning": "太太(已婚)",
        "theme": "身分",
        "sentence": "Mrs. Wang makes the best cookies in town.",
        "sentenceZh": "王太太做的餅乾是鎮上最棒的。"
    },
    {
        "word": "Ms.",
        "meaning": "小姐(未婚)",
        "theme": "身分",
        "sentence": "Ms. Lee is going to teach us English this year.",
        "sentenceZh": "李小姐今年將要教我們英文。"
    },
    {
        "word": "Miss",
        "meaning": "小姐(已婚未婚都可用)",
        "theme": "身分",
        "sentence": "Miss Chen is always kind to her students.",
        "sentenceZh": "陳小姐對她的學生總是很親切。"
    },
    {
        "word": "aunt",
        "meaning": "阿姨",
        "theme": "親戚",
        "sentence": "My aunt lives in Taipei with her family.",
        "sentenceZh": "我阿姨和她的家人住在台北。"
    },
    {
        "word": "brother",
        "meaning": "兄弟",
        "theme": "親戚",
        "sentence": "I have one older brother and two younger sisters.",
        "sentenceZh": "我有一個哥哥和兩個妹妹。"
    },
    {
        "word": "cousin",
        "meaning": "堂(表)兄弟姊妹",
        "theme": "親戚",
        "sentence": "My cousin and I are the same age.",
        "sentenceZh": "我表哥和我同年紀。"
    },
    {
        "word": "daughter",
        "meaning": "女兒",
        "theme": "親戚",
        "sentence": "Mr. Smith is very proud of his hardworking daughter.",
        "sentenceZh": "史密斯先生非常以他認真的女兒為榮。"
    },
    {
        "word": "elder",
        "meaning": "長輩",
        "theme": "親戚",
        "sentence": "We should always show respect to our elders.",
        "sentenceZh": "我們應該永遠對長輩展現尊重。"
    },
    {
        "word": "family",
        "meaning": "家庭",
        "theme": "親戚",
        "sentence": "I love spending the weekend with my family.",
        "sentenceZh": "我喜歡和家人一起度過週末。"
    },
    {
        "word": "father (dad, daddy)",
        "meaning": "父親",
        "theme": "親戚",
        "sentence": "My father drives me to school every morning.",
        "sentenceZh": "我爸爸每天早上開車送我上學。"
    },
    {
        "word": "granddaughter",
        "meaning": "孫女",
        "theme": "親戚",
        "sentence": "The old man bought a cute toy for his granddaughter.",
        "sentenceZh": "那位老爺爺買了一個可愛的玩具給他的孫女。"
    },
    {
        "word": "grandfather (grandpa)",
        "meaning": "祖父",
        "theme": "親戚",
        "sentence": "My grandfather likes to read the newspaper after breakfast.",
        "sentenceZh": "我爺爺喜歡在吃完早餐後看報紙。"
    },
    {
        "word": "grandmother (grandma)",
        "meaning": "祖母",
        "theme": "親戚",
        "sentence": "My grandmother tells the best bedtime stories.",
        "sentenceZh": "我奶奶講的床邊故事最棒了。"
    },
    {
        "word": "grandson",
        "meaning": "孫子",
        "theme": "親戚",
        "sentence": "She baked a chocolate cake for her grandson's birthday.",
        "sentenceZh": "她為孫子的生日烤了一個巧克力蛋糕。"
    },
    {
        "word": "husband",
        "meaning": "丈夫",
        "theme": "親戚",
        "sentence": "Her husband works at the hospital as a doctor.",
        "sentenceZh": "她的丈夫在醫院當醫生。"
    },
    {
        "word": "mother (mother, mom)",
        "meaning": "母親",
        "theme": "親戚",
        "sentence": "My mother cooked a delicious meal for us tonight.",
        "sentenceZh": "我媽媽今晚為我們煮了一頓美味的飯菜。"
    },
    {
        "word": "nephew",
        "meaning": "侄子；外甥",
        "theme": "親戚",
        "sentence": "His nephew often visits him to play video games on weekends.",
        "sentenceZh": "他的姪子週末常來找他玩電動遊戲。"
    },
    {
        "word": "niece",
        "meaning": "姪女；外甥女",
        "theme": "親戚",
        "sentence": "My niece just started kindergarten this year.",
        "sentenceZh": "我的姪女今年剛開始上幼兒園。"
    },
    {
        "word": "parent",
        "meaning": "父母",
        "theme": "親戚",
        "sentence": "You need your parents' signature on this form.",
        "sentenceZh": "你需要父母親在這份表單上簽名。"
    },
    {
        "word": "relative",
        "meaning": "親戚",
        "theme": "親戚",
        "sentence": "We visit our relatives during the Chinese New Year.",
        "sentenceZh": "我們在農曆新年期間會去拜訪親戚。"
    },
    {
        "word": "sister",
        "meaning": "姊妹",
        "theme": "親戚",
        "sentence": "My younger sister likes to draw cute animals.",
        "sentenceZh": "我妹妹喜歡畫可愛的動物。"
    },
    {
        "word": "son",
        "meaning": "兒子",
        "theme": "親戚",
        "sentence": "Their son is studying in a senior high school now.",
        "sentenceZh": "他們的兒子現在就讀高中。"
    },
    {
        "word": "uncle",
        "meaning": "叔叔；舅舅",
        "theme": "親戚",
        "sentence": "My uncle gave me a new watch for my birthday.",
        "sentenceZh": "我叔叔送我一隻新手錶當生日禮物。"
    },
    {
        "word": "wife",
        "meaning": "妻子",
        "theme": "親戚",
        "sentence": "He bought some red roses for his wife.",
        "sentenceZh": "他買了一些紅玫瑰給他的妻子。"
    },
    {
        "word": "actor",
        "meaning": "男演員",
        "theme": "職業",
        "sentence": "The actor in that new movie is very handsome.",
        "sentenceZh": "那部新電影裡的男演員非常英俊。"
    },
    {
        "word": "actress",
        "meaning": "女演員",
        "theme": "職業",
        "sentence": "She is a famous actress who won many awards.",
        "sentenceZh": "她是一位贏過許多獎項的知名女演員。"
    },
    {
        "word": "army",
        "meaning": "軍隊",
        "theme": "職業",
        "sentence": "He decided to join the army after finishing high school.",
        "sentenceZh": "他決定在高中畢業後從軍。"
    },
    {
        "word": "artist",
        "meaning": "藝術家",
        "theme": "職業",
        "sentence": "The artist drew a beautiful picture of the ocean.",
        "sentenceZh": "這位藝術家畫了一幅美麗的海洋圖。"
    },
    {
        "word": "assistant",
        "meaning": "助理",
        "theme": "職業",
        "sentence": "The teacher's assistant helps hand out the worksheets.",
        "sentenceZh": "教學助理幫忙發放學習單。"
    },
    {
        "word": "baby sitter",
        "meaning": "保母",
        "theme": "職業",
        "sentence": "We hired a baby sitter to look after the kids tonight.",
        "sentenceZh": "我們今晚請了一位保母來照顧孩子們。"
    },
    {
        "word": "band",
        "meaning": "樂隊；帶子",
        "theme": "職業",
        "sentence": "My favorite 80s band is coming to Taiwan for a concert!",
        "sentenceZh": "我最愛的 80 年代樂團要來台灣開演唱會了！"
    },
    {
        "word": "barber",
        "meaning": "理髮師",
        "theme": "職業",
        "sentence": "The barber cut my hair too short this time.",
        "sentenceZh": "理髮師這次把我的頭髮剪得太短了。"
    },
    {
        "word": "boss",
        "meaning": "老闆",
        "theme": "職業",
        "sentence": "Her boss told her to finish the report by Friday.",
        "sentenceZh": "她的老闆叫她在星期五前完成報告。"
    },
    {
        "word": "business",
        "meaning": "商業；生意",
        "theme": "職業",
        "sentence": "My father travels a lot for business.",
        "sentenceZh": "我爸爸因為生意經常出差。"
    },
    {
        "word": "businessman",
        "meaning": "商人",
        "theme": "職業",
        "sentence": "The successful businessman gave a speech at our school.",
        "sentenceZh": "那位成功的商人在我們學校發表演講。"
    },
    {
        "word": "captain",
        "meaning": "隊長；船長",
        "theme": "職業",
        "sentence": "The captain of the badminton team plays very well.",
        "sentenceZh": "羽毛球隊的隊長打得非常好。"
    },
    {
        "word": "cheerleader",
        "meaning": "啦啦隊",
        "theme": "職業",
        "sentence": "The cheerleaders danced energetically during the basketball game.",
        "sentenceZh": "啦啦隊在籃球比賽時充滿活力地跳舞。"
    },
    {
        "word": "class leader",
        "meaning": "班長",
        "theme": "職業",
        "sentence": "As the class leader, he has to keep the classroom quiet.",
        "sentenceZh": "身為班長，他必須維持教室的安靜。"
    },
    {
        "word": "classmate",
        "meaning": "同學",
        "theme": "職業",
        "sentence": "I usually walk to the train station with my classmate.",
        "sentenceZh": "我通常和我的同學一起走到火車站。"
    },
    {
        "word": "clerk",
        "meaning": "店員；職員",
        "theme": "職業",
        "sentence": "The clerk at the convenience store is very polite.",
        "sentenceZh": "便利商店的店員非常有禮貌。"
    },
    {
        "word": "coach",
        "meaning": "教練",
        "theme": "職業",
        "sentence": "Our badminton coach teaches us how to swing correctly.",
        "sentenceZh": "我們的羽球教練教我們如何正確揮拍。"
    },
    {
        "word": "cook",
        "meaning": "廚師",
        "theme": "職業",
        "sentence": "My father is a great cook; he makes the best fried rice.",
        "sentenceZh": "我爸爸是個很棒的廚師，他炒的飯最好吃。"
    },
    {
        "word": "cowboy",
        "meaning": "牛仔",
        "theme": "職業",
        "sentence": "The cowboy rode his horse quickly across the field.",
        "sentenceZh": "牛仔騎著馬快速地穿過原野。"
    },
    {
        "word": "dentist",
        "meaning": "牙醫",
        "theme": "職業",
        "sentence": "You should visit the dentist if you have a toothache.",
        "sentenceZh": "如果你牙痛，就應該去看牙醫。"
    },
    {
        "word": "diplomat",
        "meaning": "外交官",
        "theme": "職業",
        "sentence": "The diplomat traveled to many countries to talk about peace.",
        "sentenceZh": "外交官到許多國家去談論和平。"
    },
    {
        "word": "doctor",
        "meaning": "醫生",
        "theme": "職業",
        "sentence": "The doctor told me to drink more water and get some rest.",
        "sentenceZh": "醫生告訴我要多喝水並多休息。"
    },
    {
        "word": "driver",
        "meaning": "司機",
        "theme": "職業",
        "sentence": "The bus driver drives very carefully on rainy days.",
        "sentenceZh": "公車司機在雨天開車非常小心。"
    },
    {
        "word": "engineer",
        "meaning": "工程師",
        "theme": "職業",
        "sentence": "The software engineer is writing code for a new vocabulary game.",
        "sentenceZh": "軟體工程師正在為一個新的單字遊戲寫程式碼。"
    },
    {
        "word": "farmer",
        "meaning": "農夫",
        "theme": "職業",
        "sentence": "The farmer grows sweet potatoes and rice on his farm.",
        "sentenceZh": "農夫在他的農場裡種植地瓜和稻米。"
    },
    {
        "word": "fisherman",
        "meaning": "漁夫",
        "theme": "職業",
        "sentence": "The fisherman caught a big fish in the sea this morning.",
        "sentenceZh": "漁夫今天早上在海裡捕到了一條大魚。"
    },
    {
        "word": "guide",
        "meaning": "導遊",
        "theme": "職業",
        "sentence": "The tour guide showed us the old temple in the town.",
        "sentenceZh": "導遊帶我們參觀了鎮上的古老寺廟。"
    },
    {
        "word": "hair dresser",
        "meaning": "髮型師",
        "theme": "職業",
        "sentence": "The hair dresser helped me try a new hairstyle.",
        "sentenceZh": "髮型師幫我嘗試了一個新髮型。"
    },
    {
        "word": "housewife",
        "meaning": "家庭主婦",
        "theme": "職業",
        "sentence": "She is a busy housewife who takes care of three children.",
        "sentenceZh": "她是個忙碌的家庭主婦，照顧三個孩子。"
    },
    {
        "word": "hunter",
        "meaning": "獵人",
        "theme": "職業",
        "sentence": "The hunter walked quietly in the forest to find animals.",
        "sentenceZh": "獵人安靜地在森林裡走動尋找動物。"
    },
    {
        "word": "job",
        "meaning": "工作",
        "theme": "職業",
        "sentence": "Teaching English is a hard but meaningful job.",
        "sentenceZh": "教英文是一份辛苦但有意義的工作。"
    },
    {
        "word": "journalist",
        "meaning": "記者",
        "theme": "職業",
        "sentence": "The journalist wrote a news report about the typhoon.",
        "sentenceZh": "記者寫了一篇關於颱風的新聞報導。"
    },
    {
        "word": "judge",
        "meaning": "法官",
        "theme": "職業",
        "sentence": "The judge listened carefully to both sides of the story.",
        "sentenceZh": "法官仔細聆聽雙方的說法。"
    },
    {
        "word": "lawyer",
        "meaning": "律師",
        "theme": "職業",
        "sentence": "The lawyer helped his client understand the rules.",
        "sentenceZh": "律師幫助他的客戶了解規定。"
    },
    {
        "word": "magician",
        "meaning": "魔術師",
        "theme": "職業",
        "sentence": "The magician pulled a white rabbit out of his black hat.",
        "sentenceZh": "魔術師從他的黑帽子裡拉出一隻白兔。"
    },
    {
        "word": "mailman",
        "meaning": "郵差",
        "theme": "職業",
        "sentence": "The mailman delivers letters to our house every morning.",
        "sentenceZh": "郵差每天早上送信到我們家。"
    },
    {
        "word": "mailman (mail carrier)",
        "meaning": "郵差",
        "theme": "職業",
        "sentence": "The mail carrier brought a heavy package today.",
        "sentenceZh": "郵差今天送來了一個很重的包裹。"
    },
    {
        "word": "manager",
        "meaning": "經理",
        "theme": "職業",
        "sentence": "The manager had a meeting with all the store clerks.",
        "sentenceZh": "經理與所有的店員開會。"
    },
    {
        "word": "mechanic",
        "meaning": "技工",
        "theme": "職業",
        "sentence": "The mechanic fixed our broken car in just two hours.",
        "sentenceZh": "技工只花了兩小時就修好了我們故障的車。"
    },
    {
        "word": "model",
        "meaning": "模特兒",
        "theme": "職業",
        "sentence": "The fashion model wore a beautiful dress on the stage.",
        "sentenceZh": "時尚模特兒在舞台上穿著一件美麗的洋裝。"
    },
    {
        "word": "musician",
        "meaning": "音樂家",
        "theme": "職業",
        "sentence": "He is a talented musician who can play the piano and the guitar.",
        "sentenceZh": "他是個有才華的音樂家，會彈鋼琴和吉他。"
    },
    {
        "word": "nurse",
        "meaning": "護士",
        "theme": "職業",
        "sentence": "The nurse checked my temperature and gave me some medicine.",
        "sentenceZh": "護士幫我量體溫並給我一些藥。"
    },
    {
        "word": "officer",
        "meaning": "公務員",
        "theme": "職業",
        "sentence": "The police officer helped the lost child find his parents.",
        "sentenceZh": "警官幫助迷路的小孩找到父母。"
    },
    {
        "word": "owner",
        "meaning": "持有者",
        "theme": "職業",
        "sentence": "The owner of this restaurant is a very kind lady.",
        "sentenceZh": "這家餐廳的老闆是一位非常親切的女士。"
    },
    {
        "word": "painter",
        "meaning": "畫家",
        "theme": "職業",
        "sentence": "The painter mixed blue and yellow to make green paint.",
        "sentenceZh": "畫家混合了藍色和黃色來調出綠色顏料。"
    },
    {
        "word": "police",
        "meaning": "警方",
        "theme": "職業",
        "sentence": "We called the police when we saw the thief.",
        "sentenceZh": "當我們看到小偷時，我們報了警。"
    },
    {
        "word": "police officer",
        "meaning": "警察",
        "theme": "職業",
        "sentence": "The police officer asked the driver to stop the car.",
        "sentenceZh": "警察要求司機停車。"
    },
    {
        "word": "president",
        "meaning": "總統",
        "theme": "職業",
        "sentence": "The president gave an important speech on TV last night.",
        "sentenceZh": "總統昨晚在電視上發表了重要的演講。"
    },
    {
        "word": "priest",
        "meaning": "神父",
        "theme": "職業",
        "sentence": "The village priest in the story told the people to be kind.",
        "sentenceZh": "故事中村莊裡的神父告訴人們要保持善良。"
    },
    {
        "word": "principal",
        "meaning": "校長",
        "theme": "職業",
        "sentence": "Our school principal shook hands with all the graduating students.",
        "sentenceZh": "我們的校長和所有即將畢業的學生握手。"
    },
    {
        "word": "professor",
        "meaning": "教授",
        "theme": "職業",
        "sentence": "The university professor teaches a class on web development.",
        "sentenceZh": "大學教授教了一門網頁開發的課程。"
    },
    {
        "word": "reporter",
        "meaning": "記者",
        "theme": "職業",
        "sentence": "The reporter interviewed the famous singer after the concert.",
        "sentenceZh": "記者在演唱會後採訪了那位知名歌手。"
    },
    {
        "word": "sailor",
        "meaning": "水手",
        "theme": "職業",
        "sentence": "The brave sailor spent many months traveling on the ocean.",
        "sentenceZh": "勇敢的水手花了幾個月的時間在海洋上航行。"
    },
    {
        "word": "salesman",
        "meaning": "銷售員",
        "theme": "職業",
        "sentence": "The car salesman showed us their newest model.",
        "sentenceZh": "汽車銷售員向我們展示了他們最新款的車。"
    },
    {
        "word": "scientist",
        "meaning": "科學家",
        "theme": "職業",
        "sentence": "The scientist is doing an experiment in the laboratory.",
        "sentenceZh": "科學家正在實驗室裡做實驗。"
    },
    {
        "word": "secretary",
        "meaning": "秘書",
        "theme": "職業",
        "sentence": "The secretary helped the boss answer the phone and write emails.",
        "sentenceZh": "秘書幫老闆接電話和寫電子郵件。"
    },
    {
        "word": "servant",
        "meaning": "僕人",
        "theme": "職業",
        "sentence": "The servant cleaned the large house for the rich family.",
        "sentenceZh": "僕人為富有的家庭打掃大房子。"
    },
    {
        "word": "shopkeeper",
        "meaning": "店主",
        "theme": "職業",
        "sentence": "The shopkeeper smiled and said thank you to the customer.",
        "sentenceZh": "店老闆微笑著向顧客說謝謝。"
    },
    {
        "word": "singer",
        "meaning": "歌手",
        "theme": "職業",
        "sentence": "The singer's voice sounds amazing when she sings live.",
        "sentenceZh": "這位歌手唱現場時的聲音聽起來棒極了。"
    },
    {
        "word": "soldier",
        "meaning": "士兵",
        "theme": "職業",
        "sentence": "The soldier was very brave and protected his country.",
        "sentenceZh": "這名士兵非常勇敢，保護了他的國家。"
    },
    {
        "word": "student",
        "meaning": "學生",
        "theme": "職業",
        "sentence": "A good student always finishes their homework on time.",
        "sentenceZh": "好學生總是準時完成他們的回家作業。"
    },
    {
        "word": "teacher",
        "meaning": "老師",
        "theme": "職業",
        "sentence": "Our English teacher uses fun games to help us learn vocabulary.",
        "sentenceZh": "我們的英文老師用有趣的遊戲來幫助我們學單字。"
    },
    {
        "word": "thief",
        "meaning": "小偷",
        "theme": "職業",
        "sentence": "The thief stole a bicycle from the park yesterday.",
        "sentenceZh": "小偷昨天從公園裡偷走了一輛腳踏車。"
    },
    {
        "word": "vendor",
        "meaning": "小販",
        "theme": "職業",
        "sentence": "We bought some delicious snacks from the street vendor.",
        "sentenceZh": "我們向街邊小販買了一些美味的點心。"
    },
    {
        "word": "waiter",
        "meaning": "服務生（男性）",
        "theme": "職業",
        "sentence": "The waiter brought us the menu and a glass of water.",
        "sentenceZh": "男服務生為我們送上菜單和一杯水。"
    },
    {
        "word": "waitress",
        "meaning": "服務生（女性）",
        "theme": "職業",
        "sentence": "The waitress asked if we wanted to order dessert.",
        "sentenceZh": "女服務生問我們是否想點甜點。"
    },
    {
        "word": "work",
        "meaning": "工作",
        "theme": "職業",
        "sentence": "I have a lot of work to do this weekend.",
        "sentenceZh": "我這個週末有很多工作要做。"
    },
    {
        "word": "worker",
        "meaning": "工人",
        "theme": "職業",
        "sentence": "The construction worker wears a hard hat for safety.",
        "sentenceZh": "建築工人為了安全戴著安全帽。"
    },
    {
        "word": "writer",
        "meaning": "作家",
        "theme": "職業",
        "sentence": "J.K. Rowling is the famous writer of the Harry Potter books.",
        "sentenceZh": "J.K. 羅琳是《哈利波特》系列書籍的知名作家。"
    },
    {
        "word": "ankle",
        "meaning": "腳踝",
        "theme": "身體部位",
        "sentence": "He twisted his ankle while playing basketball.",
        "sentenceZh": "他打籃球時扭傷了腳踝。"
    },
    {
        "word": "arm",
        "meaning": "手臂",
        "theme": "身體部位",
        "sentence": "She carried the heavy books in her left arm.",
        "sentenceZh": "她用左手臂抱著那些重書。"
    },
    {
        "word": "back",
        "meaning": "背部",
        "theme": "身體部位",
        "sentence": "My grandfather's back hurts when it rains.",
        "sentenceZh": "我爺爺的背在下雨時會痛。"
    },
    {
        "word": "beard",
        "meaning": "鬍鬚",
        "theme": "身體部位",
        "sentence": "The old man has a long white beard.",
        "sentenceZh": "那位老人留著長長的白鬍鬚。"
    },
    {
        "word": "blood",
        "meaning": "血液",
        "theme": "身體部位",
        "sentence": "Your heart pumps blood around your body.",
        "sentenceZh": "你的心臟將血液輸送到全身。"
    },
    {
        "word": "body",
        "meaning": "身體",
        "theme": "身體部位",
        "sentence": "Exercise is good for both your mind and your body.",
        "sentenceZh": "運動對你的身心都有好處。"
    },
    {
        "word": "bone",
        "meaning": "骨頭",
        "theme": "身體部位",
        "sentence": "The dog buried a bone in the garden.",
        "sentenceZh": "狗在花園裡埋了一根骨頭。"
    },
    {
        "word": "chin",
        "meaning": "下巴",
        "theme": "身體部位",
        "sentence": "He rested his chin on his hand while thinking.",
        "sentenceZh": "他思考時用手托著下巴。"
    },
    {
        "word": "ear",
        "meaning": "耳朵",
        "theme": "身體部位",
        "sentence": "Elephants have very large ears.",
        "sentenceZh": "大象有非常大的耳朵。"
    },
    {
        "word": "eye",
        "meaning": "眼睛",
        "theme": "身體部位",
        "sentence": "She has big brown eyes and long hair.",
        "sentenceZh": "她有雙棕色的大眼睛和長頭髮。"
    },
    {
        "word": "face",
        "meaning": "臉",
        "theme": "身體部位",
        "sentence": "Wash your face before you go to bed.",
        "sentenceZh": "睡前要洗臉。"
    },
    {
        "word": "finger",
        "meaning": "手指",
        "theme": "身體部位",
        "sentence": "He cut his finger while cooking dinner.",
        "sentenceZh": "他煮晚餐時切到了手指。"
    },
    {
        "word": "foot",
        "meaning": "腳",
        "theme": "身體部位",
        "sentence": "I have a blister on my left foot.",
        "sentenceZh": "我的左腳起了一個水泡。"
    },
    {
        "word": "gesture",
        "meaning": "手勢",
        "theme": "身體部位",
        "sentence": "Thumbs up is a friendly gesture in many countries.",
        "sentenceZh": "豎起大拇指在許多國家是友善的手勢。"
    },
    {
        "word": "hair",
        "meaning": "頭髮",
        "theme": "身體部位",
        "sentence": "She brushed her long black hair in front of the mirror.",
        "sentenceZh": "她在鏡子前梳理她烏黑的長髮。"
    },
    {
        "word": "hand",
        "meaning": "手",
        "theme": "身體部位",
        "sentence": "Please raise your hand if you know the answer.",
        "sentenceZh": "如果你知道答案請舉手。"
    },
    {
        "word": "head",
        "meaning": "頭",
        "theme": "身體部位",
        "sentence": "He nodded his head to show that he agreed.",
        "sentenceZh": "他點頭表示同意。"
    },
    {
        "word": "heart",
        "meaning": "心臟",
        "theme": "身體部位",
        "sentence": "Running makes your heart beat faster.",
        "sentenceZh": "跑步會讓你的心跳加快。"
    },
    {
        "word": "hip",
        "meaning": "臀部",
        "theme": "身體部位",
        "sentence": "She stood with her hands on her hips.",
        "sentenceZh": "她雙手叉腰站著。"
    },
    {
        "word": "knee",
        "meaning": "膝蓋",
        "theme": "身體部位",
        "sentence": "He scraped his knee when he fell off the bike.",
        "sentenceZh": "他從腳踏車上摔下來時擦傷了膝蓋。"
    },
    {
        "word": "leg",
        "meaning": "腿",
        "theme": "身體部位",
        "sentence": "The table is wobbly because one leg is shorter.",
        "sentenceZh": "桌子搖搖晃晃的，因為有一隻桌腳比較短。"
    },
    {
        "word": "lip",
        "meaning": "嘴唇",
        "theme": "身體部位",
        "sentence": "She bit her lip because she was nervous.",
        "sentenceZh": "她因為緊張而咬了咬嘴唇。"
    },
    {
        "word": "mouth",
        "meaning": "嘴巴",
        "theme": "身體部位",
        "sentence": "Keep your mouth closed when you chew your food.",
        "sentenceZh": "咀嚼食物時請閉上嘴巴。"
    },
    {
        "word": "nail",
        "meaning": "指甲",
        "theme": "身體部位",
        "sentence": "You should cut your fingernails every week.",
        "sentenceZh": "你應該每週修剪指甲。"
    },
    {
        "word": "neck",
        "meaning": "脖子",
        "theme": "身體部位",
        "sentence": "Giraffes have a very long neck to reach high leaves.",
        "sentenceZh": "長頸鹿有很長的脖子，可以吃到高處的樹葉。"
    },
    {
        "word": "nose",
        "meaning": "鼻子",
        "theme": "身體部位",
        "sentence": "He blew his nose because he had a bad cold.",
        "sentenceZh": "他因為重感冒而擤鼻涕。"
    },
    {
        "word": "shoulder",
        "meaning": "肩膀",
        "theme": "身體部位",
        "sentence": "My backpack is so heavy that my shoulders hurt.",
        "sentenceZh": "我的背包太重了，弄得我肩膀很痛。"
    },
    {
        "word": "skin",
        "meaning": "皮膚",
        "theme": "身體部位",
        "sentence": "Use sunscreen to protect your skin from the sun.",
        "sentenceZh": "塗防曬乳來保護你的皮膚免受陽光傷害。"
    },
    {
        "word": "stomach",
        "meaning": "胃",
        "theme": "身體部位",
        "sentence": "I am so hungry that my stomach is making noises.",
        "sentenceZh": "我餓到肚子都在咕嚕叫了。"
    },
    {
        "word": "throat",
        "meaning": "喉嚨",
        "theme": "身體部位",
        "sentence": "I have a sore throat and cannot speak loudly.",
        "sentenceZh": "我喉嚨痛，沒辦法大聲講話。"
    },
    {
        "word": "thumb",
        "meaning": "拇指",
        "theme": "身體部位",
        "sentence": "The baby likes to suck his thumb when he is sleepy.",
        "sentenceZh": "小嬰兒想睡覺時喜歡吸拇指。"
    },
    {
        "word": "toe",
        "meaning": "腳趾",
        "theme": "身體部位",
        "sentence": "I stubbed my toe on the chair and it hurts!",
        "sentenceZh": "我的腳趾踢到椅子，好痛！"
    },
    {
        "word": "tongue",
        "meaning": "舌頭",
        "theme": "身體部位",
        "sentence": "The dog stuck out its tongue to cool down.",
        "sentenceZh": "狗伸出舌頭來散熱。"
    },
    {
        "word": "tooth",
        "meaning": "牙齒",
        "theme": "身體部位",
        "sentence": "You must brush your teeth twice a day.",
        "sentenceZh": "你必須每天刷兩次牙。"
    },
    {
        "word": "waist",
        "meaning": "腰部",
        "theme": "身體部位",
        "sentence": "He tied a jacket around his waist.",
        "sentenceZh": "他把夾克綁在腰上。"
    },
    {
        "word": "wrist",
        "meaning": "手腕",
        "theme": "身體部位",
        "sentence": "She wore a beautiful silver watch on her wrist.",
        "sentenceZh": "她手腕上戴著一隻美麗的銀色手錶。"
    },
    {
        "word": "wound",
        "meaning": "創傷；傷口",
        "theme": "醫療健康",
        "sentence": "The nurse carefully cleaned the wound on his arm.",
        "sentenceZh": "護士小心地清理他手臂上的傷口。"
    },
    {
        "word": "cancer",
        "meaning": "癌症",
        "theme": "醫療健康",
        "sentence": "Smoking increases the risk of getting lung cancer.",
        "sentenceZh": "抽菸會增加罹患肺癌的風險。"
    },
    {
        "word": "cold",
        "meaning": "感冒",
        "theme": "醫療健康",
        "sentence": "Catching a cold is common in winter, so keep warm.",
        "sentenceZh": "冬天很容易感冒，所以要保暖。"
    },
    {
        "word": "flu",
        "meaning": "流行性感冒",
        "theme": "醫療健康",
        "sentence": "He had to stay home from school because he caught the flu.",
        "sentenceZh": "他因為得了流感，只好請假待在家裡。"
    },
    {
        "word": "headache",
        "meaning": "頭痛",
        "theme": "醫療健康",
        "sentence": "The loud noise gave me a terrible headache.",
        "sentenceZh": "巨大的噪音讓我頭痛欲裂。"
    },
    {
        "word": "stomachache",
        "meaning": "胃痛",
        "theme": "醫療健康",
        "sentence": "Eating too much ice cream gave her a stomachache.",
        "sentenceZh": "吃太多冰淇淋讓她胃痛。"
    },
    {
        "word": "toothache",
        "meaning": "牙痛",
        "theme": "醫療健康",
        "sentence": "He has a bad toothache and needs to see the dentist.",
        "sentenceZh": "他牙痛得很厲害，需要去看牙醫。"
    },
    {
        "word": "cough",
        "meaning": "咳嗽",
        "theme": "醫療健康",
        "sentence": "She has a bad cough and needs to drink more warm water.",
        "sentenceZh": "她咳得很嚴重，需要多喝溫水。"
    },
    {
        "word": "fever",
        "meaning": "發燒",
        "theme": "醫療健康",
        "sentence": "The baby has a high fever, so they took him to the hospital.",
        "sentenceZh": "嬰兒發高燒，所以他們帶他去了醫院。"
    },
    {
        "word": "pain",
        "meaning": "疼痛",
        "theme": "醫療健康",
        "sentence": "He felt a sharp pain in his knee after the fall.",
        "sentenceZh": "他跌倒後覺得膝蓋一陣劇痛。"
    },
    {
        "word": "sore throat",
        "meaning": "喉嚨痛",
        "theme": "醫療健康",
        "sentence": "Honey and lemon tea is good for a sore throat.",
        "sentenceZh": "蜂蜜檸檬茶對喉嚨痛有幫助。"
    },
    {
        "word": "death",
        "meaning": "死亡",
        "theme": "醫療健康",
        "sentence": "The death of his pet dog made him very sad.",
        "sentenceZh": "寵物狗的死亡讓他非常難過。"
    },
    {
        "word": "health",
        "meaning": "健康",
        "theme": "醫療健康",
        "sentence": "Eating vegetables and exercising every day is good for your health.",
        "sentenceZh": "每天吃蔬菜和運動對你的健康有益。"
    },
    {
        "word": "life",
        "meaning": "生命",
        "theme": "醫療健康",
        "sentence": "We only have one life, so we should live it happily.",
        "sentenceZh": "我們只有一次生命，所以應該快樂地度過。"
    },
    {
        "word": "medicine",
        "meaning": "藥物；醫學",
        "theme": "醫療健康",
        "sentence": "Remember to take your medicine after meals.",
        "sentenceZh": "記得飯後要吃藥。"
    },
    {
        "word": "operation",
        "meaning": "操作；手術",
        "theme": "醫療健康",
        "sentence": "The doctor performed a successful operation to fix his leg.",
        "sentenceZh": "醫生進行了一次成功的手術來治療他的腿。"
    },
    {
        "word": "comfortable",
        "meaning": "舒服的",
        "theme": "醫療健康",
        "sentence": "This sofa is very soft and comfortable to sit on.",
        "sentenceZh": "這張沙發很軟，坐起來非常舒服。"
    },
    {
        "word": "dizzy",
        "meaning": "頭暈的",
        "theme": "醫療健康",
        "sentence": "I feel dizzy when I stand up too quickly.",
        "sentenceZh": "我站起來太快時會覺得頭暈。"
    },
    {
        "word": "healthy",
        "meaning": "健康的",
        "theme": "醫療健康",
        "sentence": "To stay healthy, you should get enough sleep every night.",
        "sentenceZh": "為了保持健康，你應該每天晚上有充足的睡眠。"
    },
    {
        "word": "painful",
        "meaning": "疼痛的",
        "theme": "醫療健康",
        "sentence": "It was a painful experience, but he learned a lot from it.",
        "sentenceZh": "這是一個痛苦的經驗，但他從中學到了很多。"
    },
    {
        "word": "pale",
        "meaning": "蒼白的",
        "theme": "醫療健康",
        "sentence": "You look pale; are you feeling sick?",
        "sentenceZh": "你看起來臉色蒼白，你生病了嗎？"
    },
    {
        "word": "sick",
        "meaning": "生病的",
        "theme": "醫療健康",
        "sentence": "She felt sick and had to leave work early.",
        "sentenceZh": "她覺得不舒服，只好提早下班。"
    },
    {
        "word": "strong",
        "meaning": "強壯的",
        "theme": "醫療健康",
        "sentence": "He is strong enough to lift the heavy box.",
        "sentenceZh": "他夠強壯，搬得動那個重箱子。"
    },
    {
        "word": "tired",
        "meaning": "疲倦的",
        "theme": "醫療健康",
        "sentence": "I am very tired after running the relay race.",
        "sentenceZh": "跑完大隊接力後我非常累。"
    },
    {
        "word": "weak",
        "meaning": "虛弱的",
        "theme": "醫療健康",
        "sentence": "The old man was too weak to get out of bed.",
        "sentenceZh": "老人太虛弱了，無法下床。"
    },
    {
        "word": "well",
        "meaning": "身體健康的",
        "theme": "醫療健康",
        "sentence": "She did not sleep well last night.",
        "sentenceZh": "她昨晚沒睡好。"
    },
    {
        "word": "ill",
        "meaning": "生病的",
        "theme": "醫療健康",
        "sentence": "He fell ill during the trip and had to rest in the hotel.",
        "sentenceZh": "他在旅行途中生病了，必須在飯店休息。"
    },
    {
        "word": "sore",
        "meaning": "痠痛的",
        "theme": "醫療健康",
        "sentence": "My legs are sore after playing badminton all afternoon.",
        "sentenceZh": "打了一整個下午的羽毛球後，我的腿很痠痛。"
    },
    {
        "word": "cure",
        "meaning": "治癒",
        "theme": "醫療健康",
        "sentence": "There is still no cure for this rare disease.",
        "sentenceZh": "這種罕見疾病目前仍沒有治癒的方法。"
    },
    {
        "word": "recover",
        "meaning": "恢復；痊癒",
        "theme": "醫療健康",
        "sentence": "It will take a few weeks for her to recover from the surgery.",
        "sentenceZh": "她的手術需要幾個禮拜才能痊癒。"
    },
    {
        "word": "badminton",
        "meaning": "羽毛球",
        "theme": "運動",
        "sentence": "Badminton is a fast sport that requires a good racket and quick feet.",
        "sentenceZh": "羽毛球是一項講求速度的運動，需要一把好球拍和靈活的腳步。"
    },
    {
        "word": "ball",
        "meaning": "球",
        "theme": "運動",
        "sentence": "Throw the ball to me!",
        "sentenceZh": "把球丟給我！"
    },
    {
        "word": "baseball",
        "meaning": "棒球",
        "theme": "運動",
        "sentence": "Baseball is one of the most popular sports in Taiwan.",
        "sentenceZh": "棒球是台灣最受歡迎的運動之一。"
    },
    {
        "word": "basketball",
        "meaning": "籃球",
        "theme": "運動",
        "sentence": "They play basketball on the school court every evening.",
        "sentenceZh": "他們每天傍晚在學校球場打籃球。"
    },
    {
        "word": "bowling",
        "meaning": "保齡球",
        "theme": "運動",
        "sentence": "We went bowling to celebrate my friend's birthday.",
        "sentenceZh": "我們去打保齡球來慶祝朋友的生日。"
    },
    {
        "word": "dodge ball",
        "meaning": "躲避球",
        "theme": "運動",
        "sentence": "The students love playing dodge ball in PE class.",
        "sentenceZh": "學生們喜歡在體育課打躲避球。"
    },
    {
        "word": "football",
        "meaning": "美式足球",
        "theme": "運動",
        "sentence": "American football is a very exciting but dangerous sport.",
        "sentenceZh": "美式足球是一項非常刺激但危險的運動。"
    },
    {
        "word": "frisbee",
        "meaning": "飛盤",
        "theme": "運動",
        "sentence": "We played frisbee with our dog in the park.",
        "sentenceZh": "我們在公園和我們的狗玩飛盤。"
    },
    {
        "word": "golf",
        "meaning": "高爾夫球",
        "theme": "運動",
        "sentence": "Playing golf requires a lot of patience and practice.",
        "sentenceZh": "打高爾夫球需要很多的耐心和練習。"
    },
    {
        "word": "race",
        "meaning": "賽跑；競賽",
        "theme": "運動",
        "sentence": "He ran as fast as he could and won the race.",
        "sentenceZh": "他盡全力跑，贏得了比賽。"
    },
    {
        "word": "roller skate (roller blade)",
        "meaning": "溜冰",
        "theme": "運動",
        "sentence": "Remember to wear a helmet when you roller skate.",
        "sentenceZh": "溜冰時記得要戴安全帽。"
    },
    {
        "word": "soccer",
        "meaning": "足球",
        "theme": "運動",
        "sentence": "You are not allowed to touch the ball with your hands in soccer.",
        "sentenceZh": "踢足球時不允許用手碰到球。"
    },
    {
        "word": "softball",
        "meaning": "壘球",
        "theme": "運動",
        "sentence": "The girls' softball team practiced hard for the championship.",
        "sentenceZh": "女子壘球隊為了冠軍賽努力練習。"
    },
    {
        "word": "sports",
        "meaning": "運動",
        "theme": "運動",
        "sentence": "Playing sports is a great way to stay healthy and make friends.",
        "sentenceZh": "做運動是保持健康和交朋友的好方法。"
    },
    {
        "word": "table tennis",
        "meaning": "桌球",
        "theme": "運動",
        "sentence": "We have a table tennis table in the basement.",
        "sentenceZh": "我們地下室有一張桌球桌。"
    },
    {
        "word": "tennis",
        "meaning": "網球",
        "theme": "運動",
        "sentence": "She hits the tennis ball with a lot of power.",
        "sentenceZh": "她擊打網球的力道很大。"
    },
    {
        "word": "volleyball",
        "meaning": "排球",
        "theme": "運動",
        "sentence": "We need six players on the court to play a volleyball game.",
        "sentenceZh": "我們需要六名球員在場上才能打排球比賽。"
    },
    {
        "word": "birthday",
        "meaning": "生日",
        "theme": "節慶",
        "sentence": "Happy birthday! Here is a present for you.",
        "sentenceZh": "生日快樂！這是一份給你的禮物。"
    },
    {
        "word": "celebrate",
        "meaning": "慶祝",
        "theme": "節慶",
        "sentence": "We will celebrate his graduation with a big dinner.",
        "sentenceZh": "我們將用一頓大餐來慶祝他畢業。"
    },
    {
        "word": "Chinese New Year",
        "meaning": "春節",
        "theme": "節慶",
        "sentence": "Children often receive red envelopes during Chinese New Year.",
        "sentenceZh": "孩子們在春節期間通常會收到紅包。"
    },
    {
        "word": "Christmas",
        "meaning": "聖誕節",
        "theme": "節慶",
        "sentence": "We decorated the Christmas tree with beautiful lights.",
        "sentenceZh": "我們用美麗的燈飾裝飾了聖誕樹。"
    },
    {
        "word": "congratulation",
        "meaning": "祝賀",
        "theme": "節慶",
        "sentence": "Congratulations on winning the first prize!",
        "sentenceZh": "恭喜你贏得第一名！"
    },
    {
        "word": "culture",
        "meaning": "文化",
        "theme": "節慶",
        "sentence": "Learning a new language helps you understand a different culture.",
        "sentenceZh": "學習新語言能幫助你了解不同的文化。"
    },
    {
        "word": "custom",
        "meaning": "習俗",
        "theme": "節慶",
        "sentence": "Giving red envelopes is a traditional Chinese custom.",
        "sentenceZh": "發紅包是傳統的華人習俗。"
    },
    {
        "word": "Double Tenth Day",
        "meaning": "雙十節",
        "theme": "節慶",
        "sentence": "There are always beautiful fireworks on Double Tenth Day.",
        "sentenceZh": "雙十節總是有美麗的煙火。"
    },
    {
        "word": "Dragon-boat Festival",
        "meaning": "端午節",
        "theme": "節慶",
        "sentence": "People eat zongzi during the Dragon-boat Festival.",
        "sentenceZh": "人們在端午節時會吃粽子。"
    },
    {
        "word": "Easter",
        "meaning": "復活節",
        "theme": "節慶",
        "sentence": "We painted eggs in bright colors for Easter.",
        "sentenceZh": "我們為了復活節把彩蛋畫上鮮豔的顏色。"
    },
    {
        "word": "eve",
        "meaning": "前夕",
        "theme": "節慶",
        "sentence": "We stayed up late on New Year's Eve to watch the fireworks.",
        "sentenceZh": "我們在跨年夜熬夜看煙火。"
    },
    {
        "word": "Father’s Day",
        "meaning": "父親節",
        "theme": "節慶",
        "sentence": "We bought a tie for Dad to celebrate Father's Day.",
        "sentenceZh": "我們買了一條領帶給爸爸慶祝父親節。"
    },
    {
        "word": "festival",
        "meaning": "節慶",
        "theme": "節慶",
        "sentence": "The Lantern Festival is an important traditional event.",
        "sentenceZh": "元宵節是一個重要的傳統節慶。"
    },
    {
        "word": "Halloween",
        "meaning": "萬聖節",
        "theme": "節慶",
        "sentence": "Kids wear scary costumes to go trick-or-treating on Halloween.",
        "sentenceZh": "孩子們在萬聖節穿上恐怖的服裝去玩「不給糖就搗蛋」。"
    },
    {
        "word": "holiday",
        "meaning": "假日",
        "theme": "節慶",
        "sentence": "Where are you planning to go for your summer holiday?",
        "sentenceZh": "你暑假計畫去哪裡？"
    },
    {
        "word": "lantern",
        "meaning": "燈籠",
        "theme": "節慶",
        "sentence": "We made paper lanterns in art class today.",
        "sentenceZh": "我們今天在美術課做了紙燈籠。"
    },
    {
        "word": "Lantern Festival",
        "meaning": "元宵節",
        "theme": "節慶",
        "sentence": "Let's go to the park to see the beautiful lights for the Lantern Festival.",
        "sentenceZh": "我們去公園看元宵節美麗的花燈吧。"
    },
    {
        "word": "memory",
        "meaning": "記憶；回憶",
        "theme": "節慶",
        "sentence": "The trip to Japan is my favorite childhood memory.",
        "sentenceZh": "日本之旅是我最愛的童年回憶。"
    },
    {
        "word": "Moon Festival",
        "meaning": "中秋節",
        "theme": "節慶",
        "sentence": "We usually have a barbecue with our family on Moon Festival.",
        "sentenceZh": "我們中秋節通常會和家人一起烤肉。"
    },
    {
        "word": "Mother’s Day",
        "meaning": "母親節",
        "theme": "節慶",
        "sentence": "I wrote a card to tell my mom I love her on Mother's Day.",
        "sentenceZh": "母親節時我寫了一張卡片告訴媽媽我愛她。"
    },
    {
        "word": "New Year’s Day",
        "meaning": "元旦",
        "theme": "節慶",
        "sentence": "We woke up early on New Year’s Day to see the sunrise.",
        "sentenceZh": "我們在元旦早起看日出。"
    },
    {
        "word": "New Year’s Eve",
        "meaning": "除夕",
        "theme": "節慶",
        "sentence": "We always have a big family dinner on New Year’s Eve.",
        "sentenceZh": "我們除夕夜總會吃一頓豐盛的年夜飯。"
    },
    {
        "word": "party",
        "meaning": "派對；政黨",
        "theme": "節慶",
        "sentence": "They had a pool party on a hot summer afternoon.",
        "sentenceZh": "他們在炎熱的夏日午後辦了一場泳池派對。"
    },
    {
        "word": "Teacher’s Day",
        "meaning": "教師節",
        "theme": "節慶",
        "sentence": "We made a thank-you card for our English teacher on Teacher’s Day.",
        "sentenceZh": "教師節時我們做了一張感謝卡給英文老師。"
    },
    {
        "word": "Thanksgiving",
        "meaning": "感恩節",
        "theme": "節慶",
        "sentence": "We had a big turkey dinner with our family on Thanksgiving.",
        "sentenceZh": "我們在感恩節和家人吃了一頓豐盛的火雞大餐。"
    },
    {
        "word": "tradition",
        "meaning": "傳統",
        "theme": "節慶",
        "sentence": "It is a tradition in our school to sing songs before graduation.",
        "sentenceZh": "畢業前唱歌是我們學校的傳統。"
    },
    {
        "word": "vacation",
        "meaning": "假期",
        "theme": "節慶",
        "sentence": "I can't wait for the winter vacation to start!",
        "sentenceZh": "我等不及寒假開始了！"
    },
    {
        "word": "Valentine’s Day",
        "meaning": "情人節",
        "theme": "節慶",
        "sentence": "He gave his girlfriend chocolate on Valentine’s Day.",
        "sentenceZh": "他在情人節送巧克力給女朋友。"
    },
    {
        "word": "wedding",
        "meaning": "婚禮",
        "theme": "節慶",
        "sentence": "The bride looked beautiful in her white dress at the wedding.",
        "sentenceZh": "新娘在婚禮上穿著白紗，看起來非常美麗。"
    },
    {
        "word": "picnic",
        "meaning": "野餐",
        "theme": "嗜好",
        "sentence": "Let's pack some sandwiches and have a picnic in the park.",
        "sentenceZh": "我們打包一些三明治，去公園野餐吧。"
    },
    {
        "word": "stamp",
        "meaning": "郵票",
        "theme": "嗜好",
        "sentence": "She collects stamps from different countries.",
        "sentenceZh": "她收集來自不同國家的郵票。"
    },
    {
        "word": "trip",
        "meaning": "旅行",
        "theme": "嗜好",
        "sentence": "Our family is planning a short trip to Dounan next weekend.",
        "sentenceZh": "我們家計畫下週末去斗南來趟小旅行。"
    },
    {
        "word": "hobby",
        "meaning": "嗜好",
        "theme": "嗜好",
        "sentence": "My favorite hobby is listening to 1980s synth-pop music.",
        "sentenceZh": "我最喜歡的嗜好是聽 80 年代的合成器流行樂。"
    },
    {
        "word": "habit",
        "meaning": "習慣",
        "theme": "嗜好",
        "sentence": "Reading a little English every day is a good learning habit.",
        "sentenceZh": "每天讀一點英文是個好習慣。"
    },
    {
        "word": "interest",
        "meaning": "興趣",
        "theme": "嗜好",
        "sentence": "He has a strong interest in learning how to write computer code.",
        "sentenceZh": "他對學習寫電腦程式碼有濃厚的興趣。"
    },
    {
        "word": "camp",
        "meaning": "露營",
        "theme": "嗜好",
        "sentence": "We slept in tents and made a fire at the summer camp.",
        "sentenceZh": "我們在夏令營時睡在帳篷裡並生了火。"
    },
    {
        "word": "climb",
        "meaning": "攀爬",
        "theme": "嗜好",
        "sentence": "The monkey quickly climbed to the top of the tree.",
        "sentenceZh": "猴子迅速地爬到了樹頂。"
    },
    {
        "word": "dance",
        "meaning": "跳舞",
        "theme": "嗜好",
        "sentence": "The students will dance on stage for the school festival.",
        "sentenceZh": "學生們將在校慶時在台上跳舞。"
    },
    {
        "word": "draw",
        "meaning": "畫畫",
        "theme": "嗜好",
        "sentence": "She likes to draw pictures of cute animals in her notebook.",
        "sentenceZh": "她喜歡在筆記本上畫可愛動物的圖。"
    },
    {
        "word": "exercise",
        "meaning": "運動",
        "theme": "嗜好",
        "sentence": "You should exercise for at least 30 minutes a day.",
        "sentenceZh": "你每天應該運動至少 30 分鐘。"
    },
    {
        "word": "fish",
        "meaning": "釣魚",
        "theme": "嗜好",
        "sentence": "My grandfather taught me how to fish by the river.",
        "sentenceZh": "我爺爺教我如何在河邊釣魚。"
    },
    {
        "word": "hike",
        "meaning": "健行／遠足",
        "theme": "嗜好",
        "sentence": "We plan to hike up the mountain early tomorrow morning.",
        "sentenceZh": "我們計畫明天一早去爬山健行。"
    },
    {
        "word": "jog",
        "meaning": "慢跑",
        "theme": "嗜好",
        "sentence": "I jog in the park every morning to stay healthy.",
        "sentenceZh": "為了保持健康，我每天早上在公園慢跑。"
    },
    {
        "word": "roller blade",
        "meaning": "溜直排輪",
        "theme": "嗜好",
        "sentence": "It is fun to roller blade along the riverbank.",
        "sentenceZh": "沿著河岸溜直排輪很有趣。"
    },
    {
        "word": "roller skate",
        "meaning": "溜輪鞋",
        "theme": "嗜好",
        "sentence": "She learned how to roller skate when she was five.",
        "sentenceZh": "她五歲時就學會了溜輪鞋。"
    },
    {
        "word": "run",
        "meaning": "跑步",
        "theme": "嗜好",
        "sentence": "You shouldn't run in the hallways at school.",
        "sentenceZh": "你不應該在學校走廊上跑步。"
    },
    {
        "word": "sail",
        "meaning": "航行",
        "theme": "嗜好",
        "sentence": "The boat will sail across the ocean to another country.",
        "sentenceZh": "這艘船將航行過海洋到另一個國家。"
    },
    {
        "word": "sing",
        "meaning": "唱歌",
        "theme": "嗜好",
        "sentence": "Let's sing a famous 80s song together!",
        "sentenceZh": "我們一起來唱一首著名的 80 年代歌曲吧！"
    },
    {
        "word": "skate",
        "meaning": "溜冰",
        "theme": "嗜好",
        "sentence": "The kids love to skate at the park on weekends.",
        "sentenceZh": "孩子們週末喜歡在公園溜冰。"
    },
    {
        "word": "ski",
        "meaning": "滑雪",
        "theme": "嗜好",
        "sentence": "We went to Japan to ski last winter.",
        "sentenceZh": "我們去年冬天去日本滑雪。"
    },
    {
        "word": "surf",
        "meaning": "衝浪",
        "theme": "嗜好",
        "sentence": "It is very exciting to surf on the big ocean waves.",
        "sentenceZh": "在大海浪上衝浪非常刺激。"
    },
    {
        "word": "swim",
        "meaning": "游泳",
        "theme": "嗜好",
        "sentence": "I usually swim in the pool every Tuesday afternoon.",
        "sentenceZh": "我通常每個星期二下午在游泳池游泳。"
    },
    {
        "word": "travel",
        "meaning": "旅行",
        "theme": "嗜好",
        "sentence": "Our family plans to travel to Dounan and Huwei next weekend.",
        "sentenceZh": "我們家計畫下週末去斗南和虎尾旅行。"
    },
    {
        "word": "barbecue",
        "meaning": "烤肉",
        "theme": "嗜好",
        "sentence": "We had a barbecue in the backyard for the Moon Festival.",
        "sentenceZh": "我們為了中秋節在後院烤肉。"
    },
    {
        "word": "album",
        "meaning": "相冊；專輯",
        "theme": "娛樂",
        "sentence": "I love listening to this 1980s synth-pop music album.",
        "sentenceZh": "我很喜歡聽這張 80 年代的合成器流行音樂專輯。"
    },
    {
        "word": "band",
        "meaning": "樂團",
        "theme": "娛樂",
        "sentence": "My favorite 80s band is going to have a concert.",
        "sentenceZh": "我最喜歡的 80 年代樂團要開演唱會了。"
    },
    {
        "word": "card",
        "meaning": "卡片",
        "theme": "娛樂",
        "sentence": "The teacher designed some beautiful phonics cards for the students.",
        "sentenceZh": "老師為學生設計了一些美麗的自然發音字卡。"
    },
    {
        "word": "cartoon",
        "meaning": "卡通",
        "theme": "娛樂",
        "sentence": "My little sister watches a cartoon on TV every morning.",
        "sentenceZh": "我妹妹每天早上都在電視上看卡通。"
    },
    {
        "word": "chess",
        "meaning": "西洋棋",
        "theme": "娛樂",
        "sentence": "Playing chess helps you practice how to think deeply.",
        "sentenceZh": "下西洋棋能幫助你練習如何深入思考。"
    },
    {
        "word": "comic",
        "meaning": "漫書",
        "theme": "娛樂",
        "sentence": "He borrowed a funny comic book from the library.",
        "sentenceZh": "他從圖書館借了一本好笑的漫畫書。"
    },
    {
        "word": "computer game",
        "meaning": "電腦遊戲",
        "theme": "娛樂",
        "sentence": "The Syntax Repair computer game makes learning English grammar fun.",
        "sentenceZh": "「語法修復」電腦遊戲讓學習英文文法變有趣了。"
    },
    {
        "word": "doll",
        "meaning": "洋娃娃",
        "theme": "娛樂",
        "sentence": "She dressed her favorite doll in a pretty pink dress.",
        "sentenceZh": "她幫她最愛的洋娃娃穿上漂亮的粉紅洋裝。"
    },
    {
        "word": "drama",
        "meaning": "戲劇",
        "theme": "娛樂",
        "sentence": "The school drama club will perform a play next month.",
        "sentenceZh": "學校話劇社下個月將表演一齣戲。"
    },
    {
        "word": "drum",
        "meaning": "鼓",
        "theme": "娛樂",
        "sentence": "He plays the drums in a rock band.",
        "sentenceZh": "他在一個搖滾樂團裡打鼓。"
    },
    {
        "word": "fan",
        "meaning": "粉絲；愛好者",
        "theme": "娛樂",
        "sentence": "He is a big fan of the band a-ha.",
        "sentenceZh": "他是 a-ha 樂團的超級粉絲。"
    },
    {
        "word": "film",
        "meaning": "電影",
        "theme": "娛樂",
        "sentence": "We went to the theater to watch a new action film.",
        "sentenceZh": "我們去電影院看了一部新的動作電影。"
    },
    {
        "word": "flute",
        "meaning": "長笛",
        "theme": "娛樂",
        "sentence": "She plays the flute beautifully in the music class.",
        "sentenceZh": "她在音樂課上把長笛吹得非常優美。"
    },
    {
        "word": "game",
        "meaning": "遊戲",
        "theme": "娛樂",
        "sentence": "In the Weather Combat game, you have to build a civilization.",
        "sentenceZh": "在「天氣大戰」遊戲中，你必須建立一個文明。"
    },
    {
        "word": "guitar",
        "meaning": "吉他",
        "theme": "娛樂",
        "sentence": "He is learning how to play the guitar by watching videos.",
        "sentenceZh": "他正在看影片學習如何彈吉他。"
    },
    {
        "word": "instrument",
        "meaning": "樂器",
        "theme": "娛樂",
        "sentence": "The piano is my favorite musical instrument.",
        "sentenceZh": "鋼琴是我最喜歡的樂器。"
    },
    {
        "word": "jazz",
        "meaning": "爵士樂",
        "theme": "娛樂",
        "sentence": "My father likes to listen to jazz when he is reading.",
        "sentenceZh": "我爸爸看書時喜歡聽爵士樂。"
    },
    {
        "word": "movie",
        "meaning": "電影",
        "theme": "娛樂",
        "sentence": "Let's buy some popcorn before the movie starts.",
        "sentenceZh": "電影開始前我們先去買些爆米花吧。"
    },
    {
        "word": "music",
        "meaning": "音樂",
        "theme": "娛樂",
        "sentence": "I have a playlist with over 2,000 music tracks on Spotify.",
        "sentenceZh": "我的 Spotify 播放清單裡有超過 2000 首音樂。"
    },
    {
        "word": "novel",
        "meaning": "小說",
        "theme": "娛樂",
        "sentence": "The Harry Potter novel is very popular around the world.",
        "sentenceZh": "哈利波特小說在全世界非常受歡迎。"
    },
    {
        "word": "paint",
        "meaning": "繪畫",
        "theme": "娛樂",
        "sentence": "She likes to paint pictures of flowers in her free time.",
        "sentenceZh": "她喜歡在空閒時間畫花朵的圖。"
    },
    {
        "word": "piano",
        "meaning": "鋼琴",
        "theme": "娛樂",
        "sentence": "He practices playing the piano for an hour every day.",
        "sentenceZh": "他每天練習彈鋼琴一個小時。"
    },
    {
        "word": "pop music",
        "meaning": "流行音樂",
        "theme": "娛樂",
        "sentence": "Many teenagers love listening to Korean pop music.",
        "sentenceZh": "許多青少年喜歡聽韓國流行音樂。"
    },
    {
        "word": "puzzle",
        "meaning": "拼圖；謎題",
        "theme": "娛樂",
        "sentence": "This 1,000-piece puzzle is very difficult to finish.",
        "sentenceZh": "這個一千片的拼圖非常難完成。"
    },
    {
        "word": "song",
        "meaning": "歌曲",
        "theme": "娛樂",
        "sentence": "The singer sang a beautiful 80s love song.",
        "sentenceZh": "歌手唱了一首優美的 80 年代情歌。"
    },
    {
        "word": "team",
        "meaning": "隊伍",
        "theme": "娛樂",
        "sentence": "The badminton team practices swinging their rackets after school.",
        "sentenceZh": "羽球隊放學後練習揮拍。"
    },
    {
        "word": "tent",
        "meaning": "帳篷",
        "theme": "娛樂",
        "sentence": "We set up our tent near the river for the camping trip.",
        "sentenceZh": "為了露營之旅，我們在河邊搭起帳篷。"
    },
    {
        "word": "toy",
        "meaning": "玩具",
        "theme": "娛樂",
        "sentence": "The baby is playing with a colorful wooden toy.",
        "sentenceZh": "小嬰兒正在玩一個彩色的木製玩具。"
    },
    {
        "word": "trumpet",
        "meaning": "小喇叭",
        "theme": "娛樂",
        "sentence": "He blew the trumpet loudly during the parade.",
        "sentenceZh": "他在遊行時大聲吹奏小喇叭。"
    },
    {
        "word": "violin",
        "meaning": "小提琴",
        "theme": "娛樂",
        "sentence": "She won first prize in the violin competition.",
        "sentenceZh": "她在小提琴比賽中獲得第一名。"
    },
    {
        "word": "time",
        "meaning": "時間",
        "theme": "時間",
        "sentence": "What time does the English class start?",
        "sentenceZh": "英文課幾點開始？"
    },
    {
        "word": "century",
        "meaning": "世紀",
        "theme": "時間",
        "sentence": "We are living in the 21st century.",
        "sentenceZh": "我們生活在 21 世紀。"
    },
    {
        "word": "year",
        "meaning": "年",
        "theme": "時間",
        "sentence": "There are 365 days in a common year.",
        "sentenceZh": "平年有 365 天。"
    },
    {
        "word": "season",
        "meaning": "季節",
        "theme": "時間",
        "sentence": "Summer is my favorite season because I can eat ice cream.",
        "sentenceZh": "夏天是我最喜歡的季節，因為可以吃冰淇淋。"
    },
    {
        "word": "month",
        "meaning": "月",
        "theme": "時間",
        "sentence": "My birthday is in the month of August.",
        "sentenceZh": "我的生日在八月。"
    },
    {
        "word": "day",
        "meaning": "天",
        "theme": "時間",
        "sentence": "I spend an hour writing HTML code every day.",
        "sentenceZh": "我每天花一個小時寫 HTML 程式碼。"
    },
    {
        "word": "hour",
        "meaning": "小時",
        "theme": "時間",
        "sentence": "The bus trip to Taipei takes about three hours.",
        "sentenceZh": "到台北的公車車程大約需要三個小時。"
    },
    {
        "word": "minute",
        "meaning": "分鐘",
        "theme": "時間",
        "sentence": "The quiz will start in five minutes.",
        "sentenceZh": "小考將在五分鐘後開始。"
    },
    {
        "word": "second",
        "meaning": "秒",
        "theme": "時間",
        "sentence": "He ran 100 meters in just 12 seconds.",
        "sentenceZh": "他只花了 12 秒就跑完 100 公尺。"
    },
    {
        "word": "dawn",
        "meaning": "黎明",
        "theme": "時間",
        "sentence": "The farmer wakes up at dawn to work in the field.",
        "sentenceZh": "農夫在黎明時分起床去田裡工作。"
    },
    {
        "word": "morning",
        "meaning": "早晨",
        "theme": "時間",
        "sentence": "Good morning! Did you sleep well last night?",
        "sentenceZh": "早安！你昨晚睡得好嗎？"
    },
    {
        "word": "noon",
        "meaning": "中午",
        "theme": "時間",
        "sentence": "We usually have lunch at noon.",
        "sentenceZh": "我們通常在中午吃午餐。"
    },
    {
        "word": "afternoon",
        "meaning": "下午",
        "theme": "時間",
        "sentence": "Let's play badminton this afternoon.",
        "sentenceZh": "我們今天下午來打羽毛球吧。"
    },
    {
        "word": "evening",
        "meaning": "傍晚",
        "theme": "時間",
        "sentence": "My family eats dinner together every evening.",
        "sentenceZh": "我們家每天傍晚都會一起吃晚餐。"
    },
    {
        "word": "night",
        "meaning": "夜晚",
        "theme": "時間",
        "sentence": "The stars look very bright in the sky at night.",
        "sentenceZh": "夜晚天空中的星星看起來非常明亮。"
    },
    {
        "word": "midnight",
        "meaning": "午夜",
        "theme": "時間",
        "sentence": "You shouldn't stay up playing games until midnight.",
        "sentenceZh": "你不應該熬夜玩遊戲到午夜。"
    },
    {
        "word": "Monday",
        "meaning": "星期一",
        "theme": "時間",
        "sentence": "We have a school assembly every Monday morning.",
        "sentenceZh": "我們每個星期一早上都有學校朝會。"
    },
    {
        "word": "Tuesday",
        "meaning": "星期二",
        "theme": "時間",
        "sentence": "I have a piano lesson on Tuesday afternoon.",
        "sentenceZh": "我星期二下午有鋼琴課。"
    },
    {
        "word": "Wednesday",
        "meaning": "星期三",
        "theme": "時間",
        "sentence": "We only go to school for half a day on Wednesday.",
        "sentenceZh": "我們星期三只上半天學。"
    },
    {
        "word": "Thursday",
        "meaning": "星期四",
        "theme": "時間",
        "sentence": "Our English test is scheduled for next Thursday.",
        "sentenceZh": "我們的英文考試安排在下星期四。"
    },
    {
        "word": "Friday",
        "meaning": "星期五",
        "theme": "時間",
        "sentence": "Everyone is happy when Friday arrives.",
        "sentenceZh": "星期五到來時每個人都很開心。"
    },
    {
        "word": "Saturday",
        "meaning": "星期六",
        "theme": "時間",
        "sentence": "I am going to the movies with my friends this Saturday.",
        "sentenceZh": "這個星期六我要和朋友去看電影。"
    },
    {
        "word": "Sunday",
        "meaning": "星期日",
        "theme": "時間",
        "sentence": "My family goes to church every Sunday morning.",
        "sentenceZh": "我的家人每個星期日早上都去教堂。"
    },
    {
        "word": "week",
        "meaning": "星期；週",
        "theme": "時間",
        "sentence": "There are seven days in a week.",
        "sentenceZh": "一個星期有七天。"
    },
    {
        "word": "weekday",
        "meaning": "平日（週一至週五）",
        "theme": "時間",
        "sentence": "I am very busy studying on weekdays.",
        "sentenceZh": "我在平日非常忙於學習。"
    },
    {
        "word": "weekend",
        "meaning": "週末",
        "theme": "時間",
        "sentence": "What are your plans for the weekend?",
        "sentenceZh": "你週末有什麼計畫？"
    },
    {
        "word": "January",
        "meaning": "一月",
        "theme": "時間",
        "sentence": "January is the first month of the year.",
        "sentenceZh": "一月是一年中的第一個月。"
    },
    {
        "word": "February",
        "meaning": "二月",
        "theme": "時間",
        "sentence": "February usually has only 28 days.",
        "sentenceZh": "二月通常只有 28 天。"
    },
    {
        "word": "March",
        "meaning": "三月",
        "theme": "時間",
        "sentence": "The weather starts to get warmer in March.",
        "sentenceZh": "天氣在三月開始變暖。"
    },
    {
        "word": "April",
        "meaning": "四月",
        "theme": "時間",
        "sentence": "It often rains a lot during April.",
        "sentenceZh": "四月期間經常下雨。"
    },
    {
        "word": "May",
        "meaning": "五月",
        "theme": "時間",
        "sentence": "Mother's Day is usually celebrated in May.",
        "sentenceZh": "母親節通常在五月慶祝。"
    },
    {
        "word": "June",
        "meaning": "六月",
        "theme": "時間",
        "sentence": "Many junior high school students graduate in June.",
        "sentenceZh": "許多國中生在六月畢業。"
    },
    {
        "word": "July",
        "meaning": "七月",
        "theme": "時間",
        "sentence": "Summer vacation begins in July.",
        "sentenceZh": "暑假在七月開始。"
    },
    {
        "word": "August",
        "meaning": "八月",
        "theme": "時間",
        "sentence": "It is very hot and sunny in August.",
        "sentenceZh": "八月非常炎熱且陽光普照。"
    },
    {
        "word": "September",
        "meaning": "九月",
        "theme": "時間",
        "sentence": "The new school semester starts in September.",
        "sentenceZh": "新學期在九月開始。"
    },
    {
        "word": "October",
        "meaning": "十月",
        "theme": "時間",
        "sentence": "We celebrate Double Tenth Day in October.",
        "sentenceZh": "我們在十月慶祝雙十節。"
    },
    {
        "word": "November",
        "meaning": "十一月",
        "theme": "時間",
        "sentence": "The weather turns cool in November.",
        "sentenceZh": "天氣在十一月轉涼。"
    },
    {
        "word": "December",
        "meaning": "十二月",
        "theme": "時間",
        "sentence": "Christmas is celebrated on the 25th of December.",
        "sentenceZh": "聖誕節在十二月二十五日慶祝。"
    },
    {
        "word": "spring",
        "meaning": "春天",
        "theme": "時間",
        "sentence": "The flowers start to bloom in spring.",
        "sentenceZh": "花朵在春天開始綻放。"
    },
    {
        "word": "summer",
        "meaning": "夏天",
        "theme": "時間",
        "sentence": "We like to go swimming in the hot summer.",
        "sentenceZh": "我們喜歡在炎熱的夏天去游泳。"
    },
    {
        "word": "autumn",
        "meaning": "秋天",
        "theme": "時間",
        "sentence": "The leaves turn red and fall from the trees in autumn.",
        "sentenceZh": "樹葉在秋天變紅並從樹上掉落。"
    },
    {
        "word": "winter",
        "meaning": "冬天",
        "theme": "時間",
        "sentence": "It is cold enough to wear a heavy coat in winter.",
        "sentenceZh": "冬天天氣冷到需要穿厚外套。"
    },
    {
        "word": "today",
        "meaning": "今天",
        "theme": "時間",
        "sentence": "What are we going to learn in English class today?",
        "sentenceZh": "我們今天英文課要學什麼？"
    },
    {
        "word": "tonight",
        "meaning": "今晚",
        "theme": "時間",
        "sentence": "Don't forget to finish your homework tonight.",
        "sentenceZh": "今晚別忘了寫完回家作業。"
    },
    {
        "word": "tomorrow",
        "meaning": "明天",
        "theme": "時間",
        "sentence": "We will have a badminton game tomorrow.",
        "sentenceZh": "我們明天有一場羽球比賽。"
    },
    {
        "word": "yesterday",
        "meaning": "昨天",
        "theme": "時間",
        "sentence": "I saw a funny video on YouTube yesterday.",
        "sentenceZh": "我昨天在 YouTube 上看到一部搞笑的影片。"
    },
    {
        "word": "p.m.",
        "meaning": "晚上時間",
        "theme": "時間",
        "sentence": "The store closes at 10:00 p.m.",
        "sentenceZh": "這家店在晚上十點關門。"
    },
    {
        "word": "a.m.",
        "meaning": "早上時間",
        "theme": "時間",
        "sentence": "The first class starts at 8:15 a.m.",
        "sentenceZh": "第一節課在早上 8:15 開始。"
    },
    {
        "word": "o'clock",
        "meaning": "…點鐘",
        "theme": "時間",
        "sentence": "I usually go to bed at ten o'clock.",
        "sentenceZh": "我通常在十點鐘睡覺。"
    },
    {
        "word": "past",
        "meaning": "過（用於時間）",
        "theme": "時間",
        "sentence": "It is a quarter past three right now.",
        "sentenceZh": "現在是三點十五分。"
    },
    {
        "word": "quarter",
        "meaning": "一刻鐘；四分之一",
        "theme": "時間",
        "sentence": "Cut the apple into four quarters.",
        "sentenceZh": "把蘋果切成四等分。"
    },
    {
        "word": "half",
        "meaning": "一半",
        "theme": "時間",
        "sentence": "He ate half of the pizza by himself.",
        "sentenceZh": "他自己吃掉了一半的披薩。"
    },
    {
        "word": "age",
        "meaning": "年齡；時代",
        "theme": "時間",
        "sentence": "We live in the age of computers and the Internet.",
        "sentenceZh": "我們生活在電腦與網路的時代。"
    },
    {
        "word": "period",
        "meaning": "時期",
        "theme": "時間",
        "sentence": "We have a short rest period between classes.",
        "sentenceZh": "我們在兩節課之間有短暫的休息時期。"
    },
    {
        "word": "childhood",
        "meaning": "童年",
        "theme": "時間",
        "sentence": "Playing outside was my favorite part of childhood.",
        "sentenceZh": "在外面玩耍是我童年最喜歡的部分。"
    },
    {
        "word": "moment",
        "meaning": "片刻",
        "theme": "時間",
        "sentence": "Please wait a moment; the teacher will be right back.",
        "sentenceZh": "請等一下，老師馬上回來。"
    },
    {
        "word": "calendar",
        "meaning": "日曆",
        "theme": "時間",
        "sentence": "I marked the exam date on my wall calendar.",
        "sentenceZh": "我把考試日期標記在牆上的日曆上。"
    },
    {
        "word": "clock",
        "meaning": "時鐘",
        "theme": "時間",
        "sentence": "The clock on the wall says it is time to go home.",
        "sentenceZh": "牆上的時鐘顯示該回家了。"
    },
    {
        "word": "watch",
        "meaning": "手錶",
        "theme": "時間",
        "sentence": "He checked his smart watch to see how many steps he walked.",
        "sentenceZh": "他查看智慧手錶看自己走了幾步。"
    },
    {
        "word": "stopwatch",
        "meaning": "碼表",
        "theme": "時間",
        "sentence": "The PE teacher used a stopwatch to time our running.",
        "sentenceZh": "體育老師用碼表來為我們的跑步計時。"
    },
    {
        "word": "future",
        "meaning": "未來",
        "theme": "時間",
        "sentence": "I want to be a software engineer in the future.",
        "sentenceZh": "我未來想成為一名軟體工程師。"
    },
    {
        "word": "current",
        "meaning": "當前的",
        "theme": "時間",
        "sentence": "Our current lesson is about grammar rules.",
        "sentenceZh": "我們當前的課程是關於文法規則。"
    },
    {
        "word": "early",
        "meaning": "早的",
        "theme": "時間",
        "sentence": "You should sleep early so you won't be late for school.",
        "sentenceZh": "你應該早點睡，這樣上學才不會遲到。"
    },
    {
        "word": "last",
        "meaning": "上一個的；最後的",
        "theme": "時間",
        "sentence": "I passed the English test last week!",
        "sentenceZh": "我上週通過了英文考試！"
    },
    {
        "word": "late",
        "meaning": "晚的",
        "theme": "時間",
        "sentence": "Don't be late for the badminton practice.",
        "sentenceZh": "羽球練習別遲到。"
    },
    {
        "word": "next",
        "meaning": "下一個的",
        "theme": "時間",
        "sentence": "I will see you in the next class.",
        "sentenceZh": "我們下節課見。"
    },
    {
        "word": "daily",
        "meaning": "每日的",
        "theme": "時間",
        "sentence": "Reading vocabulary cards is my daily routine.",
        "sentenceZh": "讀單字卡是我的每日例行公事。"
    },
    {
        "word": "ago",
        "meaning": "以前",
        "theme": "時間",
        "sentence": "I started learning HTML coding a few months ago.",
        "sentenceZh": "我幾個月前開始學習寫 HTML 程式碼。"
    },
    {
        "word": "already",
        "meaning": "已經",
        "theme": "時間",
        "sentence": "She has already finished the grammar game.",
        "sentenceZh": "她已經完成了文法遊戲。"
    },
    {
        "word": "later",
        "meaning": "稍後",
        "theme": "時間",
        "sentence": "I will finish building the web page later.",
        "sentenceZh": "我稍後會把網頁做完。"
    },
    {
        "word": "now",
        "meaning": "現在",
        "theme": "時間",
        "sentence": "We are listening to the teacher now.",
        "sentenceZh": "我們現在正在聽老師說話。"
    },
    {
        "word": "once",
        "meaning": "曾經；一次",
        "theme": "時間",
        "sentence": "I brush my teeth at least once after every meal.",
        "sentenceZh": "我每餐飯後至少刷一次牙。"
    },
    {
        "word": "soon",
        "meaning": "很快；不久",
        "theme": "時間",
        "sentence": "The school bell will ring very soon.",
        "sentenceZh": "學校的鐘聲很快就會響了。"
    },
    {
        "word": "world",
        "meaning": "世界",
        "theme": "地方位置",
        "sentence": "English is spoken by many people around the world.",
        "sentenceZh": "全世界有很多人說英文。"
    },
    {
        "word": "nation",
        "meaning": "國度",
        "theme": "地方位置",
        "sentence": "Our nation has a lot of beautiful mountains.",
        "sentenceZh": "我們的國家有許多美麗的高山。"
    },
    {
        "word": "China",
        "meaning": "中國",
        "theme": "地方位置",
        "sentence": "The Great Wall is located in China.",
        "sentenceZh": "萬里長城位於中國。"
    },
    {
        "word": "R.O.C./ROC",
        "meaning": "中華民國",
        "theme": "地方位置",
        "sentence": "R.O.C. stands for the Republic of China.",
        "sentenceZh": "R.O.C. 是中華民國的縮寫。"
    },
    {
        "word": "Taiwan",
        "meaning": "台灣",
        "theme": "地方位置",
        "sentence": "Yunlin County is located in the middle of Taiwan.",
        "sentenceZh": "雲林縣位於台灣的中部。"
    },
    {
        "word": "U.S.A./ USA",
        "meaning": "美國",
        "theme": "地方位置",
        "sentence": "The USA is a very large country in North America.",
        "sentenceZh": "美國是北美洲一個非常大的國家。"
    },
    {
        "word": "position",
        "meaning": "位置",
        "theme": "地方位置",
        "sentence": "In badminton, your foot position is very important.",
        "sentenceZh": "在羽球運動中，你腳的位置非常重要。"
    },
    {
        "word": "back",
        "meaning": "後面的",
        "theme": "地方位置",
        "sentence": "Please sit in the back row of the classroom.",
        "sentenceZh": "請坐在教室的後排。"
    },
    {
        "word": "front",
        "meaning": "前面的",
        "theme": "地方位置",
        "sentence": "The teacher stands in the front of the class.",
        "sentenceZh": "老師站在全班的前面。"
    },
    {
        "word": "upper",
        "meaning": "上面的",
        "theme": "地方位置",
        "sentence": "The books are on the upper shelf of the bookcase.",
        "sentenceZh": "書在書櫃上面的架子上。"
    },
    {
        "word": "backward",
        "meaning": "向後",
        "theme": "地方位置",
        "sentence": "He took a step backward to look at the big picture.",
        "sentenceZh": "他向後退了一步來看這幅大圖。"
    },
    {
        "word": "forward",
        "meaning": "向前",
        "theme": "地方位置",
        "sentence": "Please step forward when I call your name.",
        "sentenceZh": "叫到你的名字時請向前走一步。"
    },
    {
        "word": "here",
        "meaning": "這裡",
        "theme": "地方位置",
        "sentence": "Put your homework on my desk right here.",
        "sentenceZh": "把你的作業放在我書桌這裡。"
    },
    {
        "word": "there",
        "meaning": "那裡",
        "theme": "地方位置",
        "sentence": "Look over there; the train is coming!",
        "sentenceZh": "看那裡，火車來了！"
    },
    {
        "word": "center",
        "meaning": "中心",
        "theme": "地方位置",
        "sentence": "The basketball court is in the center of the school.",
        "sentenceZh": "籃球場在學校的中心。"
    },
    {
        "word": "central",
        "meaning": "中心的",
        "theme": "地方位置",
        "sentence": "Taichung is a big city in central Taiwan.",
        "sentenceZh": "台中是台灣中部的一個大城市。"
    },
    {
        "word": "middle",
        "meaning": "中間的",
        "theme": "地方位置",
        "sentence": "He wrote his name in the middle of the paper.",
        "sentenceZh": "他把名字寫在紙的中間。"
    },
    {
        "word": "edge",
        "meaning": "邊緣",
        "theme": "地方位置",
        "sentence": "Don't place your glass on the edge of the table.",
        "sentenceZh": "別把你的杯子放在桌子邊緣。"
    },
    {
        "word": "side",
        "meaning": "邊；側",
        "theme": "地方位置",
        "sentence": "There are tall trees on both sides of the road.",
        "sentenceZh": "馬路兩側都有高大的樹木。"
    },
    {
        "word": "corner",
        "meaning": "角落",
        "theme": "地方位置",
        "sentence": "The convenience store is right at the street corner.",
        "sentenceZh": "便利商店就在街角。"
    },
    {
        "word": "direction",
        "meaning": "方向",
        "theme": "地方位置",
        "sentence": "The map will show you the right direction.",
        "sentenceZh": "地圖會為你指引正確的方向。"
    },
    {
        "word": "east",
        "meaning": "東方的",
        "theme": "地方位置",
        "sentence": "The sun always rises in the east.",
        "sentenceZh": "太陽總是從東方升起。"
    },
    {
        "word": "west",
        "meaning": "西方的",
        "theme": "地方位置",
        "sentence": "Look at the beautiful sunset in the west.",
        "sentenceZh": "看西方那美麗的夕陽。"
    },
    {
        "word": "south",
        "meaning": "南方的",
        "theme": "地方位置",
        "sentence": "Tainan is a famous city in south Taiwan.",
        "sentenceZh": "台南是南台灣一座有名的城市。"
    },
    {
        "word": "north",
        "meaning": "北方的",
        "theme": "地方位置",
        "sentence": "Taipei is located in the north of Taiwan.",
        "sentenceZh": "台北位於台灣北部。"
    },
    {
        "word": "left",
        "meaning": "左邊的",
        "theme": "地方位置",
        "sentence": "Turn left at the next traffic light.",
        "sentenceZh": "在下一個紅綠燈左轉。"
    },
    {
        "word": "right",
        "meaning": "右邊的；正確的",
        "theme": "地方位置",
        "sentence": "Keep to the right side when walking on the stairs.",
        "sentenceZh": "走樓梯時請靠右邊走。"
    },
    {
        "word": "top",
        "meaning": "頂部(的)",
        "theme": "地方位置",
        "sentence": "The hiker climbed to the top of the mountain.",
        "sentenceZh": "登山者爬到了山頂。"
    },
    {
        "word": "bottom",
        "meaning": "底部",
        "theme": "地方位置",
        "sentence": "You can find the page number at the bottom of the book.",
        "sentenceZh": "你可以在書的底部找到頁碼。"
    },
    {
        "word": "area",
        "meaning": "區域",
        "theme": "大自然",
        "sentence": "This area is known for growing delicious fruit.",
        "sentenceZh": "這個區域以種植美味的水果聞名。"
    },
    {
        "word": "universe",
        "meaning": "宇宙",
        "theme": "大自然",
        "sentence": "There are billions of stars in the universe.",
        "sentenceZh": "宇宙中有數十億顆星星。"
    },
    {
        "word": "nature",
        "meaning": "大自然",
        "theme": "大自然",
        "sentence": "We should do our best to protect nature.",
        "sentenceZh": "我們應該盡力保護大自然。"
    },
    {
        "word": "natural",
        "meaning": "自然的",
        "theme": "大自然",
        "sentence": "Honey is a natural sweetener for tea.",
        "sentenceZh": "蜂蜜是泡茶的自然甜味劑。"
    },
    {
        "word": "scene",
        "meaning": "場景",
        "theme": "大自然",
        "sentence": "The fighting scene in the movie was very exciting.",
        "sentenceZh": "電影裡的打鬥場景非常刺激。"
    },
    {
        "word": "scenery",
        "meaning": "風景",
        "theme": "大自然",
        "sentence": "The mountain scenery along the road is beautiful.",
        "sentenceZh": "沿路的群山風景很美。"
    },
    {
        "word": "sight",
        "meaning": "景象",
        "theme": "大自然",
        "sentence": "The colorful hot air balloons were an amazing sight.",
        "sentenceZh": "色彩繽紛的熱氣球是個驚人的景象。"
    },
    {
        "word": "environment",
        "meaning": "環境",
        "theme": "大自然",
        "sentence": "Planting trees is a good way to save our environment.",
        "sentenceZh": "種樹是拯救我們環境的好方法。"
    },
    {
        "word": "ground",
        "meaning": "地面",
        "theme": "大自然",
        "sentence": "The apple fell from the tree to the ground.",
        "sentenceZh": "蘋果從樹上掉到了地面。"
    },
    {
        "word": "desert",
        "meaning": "沙漠",
        "theme": "大自然",
        "sentence": "Camels can walk for days in the hot desert.",
        "sentenceZh": "駱駝能在炎熱的沙漠中走上好幾天。"
    },
    {
        "word": "hill",
        "meaning": "山丘",
        "theme": "大自然",
        "sentence": "The children enjoyed rolling down the green hill.",
        "sentenceZh": "孩子們喜歡從綠色的山丘上滾下來。"
    },
    {
        "word": "island",
        "meaning": "島嶼",
        "theme": "大自然",
        "sentence": "They took a boat to a beautiful small island.",
        "sentenceZh": "他們搭船去了一個美麗的小島嶼。"
    },
    {
        "word": "mountain",
        "meaning": "山",
        "theme": "大自然",
        "sentence": "We went hiking in the mountains during the vacation.",
        "sentenceZh": "我們假期時去山裡健行。"
    },
    {
        "word": "plain",
        "meaning": "平原",
        "theme": "大自然",
        "sentence": "Horses like to run freely on the wide plain.",
        "sentenceZh": "馬兒喜歡在寬廣的平原上自由奔跑。"
    },
    {
        "word": "valley",
        "meaning": "山谷",
        "theme": "大自然",
        "sentence": "There is a quiet little village down in the valley.",
        "sentenceZh": "山谷下有一個寧靜的小村莊。"
    },
    {
        "word": "sea",
        "meaning": "海",
        "theme": "大自然",
        "sentence": "Many kinds of fish live deep under the sea.",
        "sentenceZh": "海底深處住著許多種類的魚。"
    },
    {
        "word": "ocean",
        "meaning": "海洋",
        "theme": "大自然",
        "sentence": "The Pacific is the largest ocean in the world.",
        "sentenceZh": "太平洋是世界上最大的海洋。"
    },
    {
        "word": "beach",
        "meaning": "海灘",
        "theme": "大自然",
        "sentence": "We played with the sand on the beach.",
        "sentenceZh": "我們在海灘上玩沙子。"
    },
    {
        "word": "coast",
        "meaning": "海岸",
        "theme": "大自然",
        "sentence": "The weather on the coast is often very windy.",
        "sentenceZh": "海岸邊的天氣通常風很大。"
    },
    {
        "word": "lake",
        "meaning": "湖泊",
        "theme": "大自然",
        "sentence": "We rented a small boat to row on the lake.",
        "sentenceZh": "我們租了一艘小船在湖泊上划。"
    },
    {
        "word": "pond",
        "meaning": "池塘",
        "theme": "大自然",
        "sentence": "There are many cute frogs jumping by the pond.",
        "sentenceZh": "池塘邊有許多可愛的青蛙在跳。"
    },
    {
        "word": "pool",
        "meaning": "水池",
        "theme": "大自然",
        "sentence": "Please don't run around the swimming pool.",
        "sentenceZh": "請不要在游泳池畔奔跑。"
    },
    {
        "word": "river",
        "meaning": "河流",
        "theme": "大自然",
        "sentence": "We rode our bicycles along the long river.",
        "sentenceZh": "我們沿著長長的河流騎腳踏車。"
    },
    {
        "word": "spring",
        "meaning": "泉水",
        "theme": "大自然",
        "sentence": "The water from the mountain spring is very clean and cold.",
        "sentenceZh": "高山泉水非常乾淨且冰涼。"
    },
    {
        "word": "stream",
        "meaning": "溪流",
        "theme": "大自然",
        "sentence": "The little boy caught a small fish in the stream.",
        "sentenceZh": "小男孩在溪流裡抓到了一條小魚。"
    },
    {
        "word": "bank",
        "meaning": "河岸",
        "theme": "大自然",
        "sentence": "We sat on the river bank to enjoy the view.",
        "sentenceZh": "我們坐在河岸上欣賞風景。"
    },
    {
        "word": "shore",
        "meaning": "岸",
        "theme": "大自然",
        "sentence": "The waves crashed loudly against the shore.",
        "sentenceZh": "海浪大聲地拍打著岸邊。"
    },
    {
        "word": "water",
        "meaning": "水",
        "theme": "大自然",
        "sentence": "You should drink more water after playing sports.",
        "sentenceZh": "運動後你應該多喝水。"
    },
    {
        "word": "ice",
        "meaning": "冰",
        "theme": "大自然",
        "sentence": "Would you like some ice in your juice?",
        "sentenceZh": "你的果汁裡要加些冰塊嗎？"
    },
    {
        "word": "steam",
        "meaning": "蒸汽",
        "theme": "大自然",
        "sentence": "Steam rises from the pot when the water is boiling.",
        "sentenceZh": "水滾時鍋子會冒出蒸汽。"
    },
    {
        "word": "cloud",
        "meaning": "雲",
        "theme": "大自然",
        "sentence": "Look at that big dark cloud; it is going to rain.",
        "sentenceZh": "看那大烏雲，快要下雨了。"
    },
    {
        "word": "fire",
        "meaning": "火",
        "theme": "大自然",
        "sentence": "We sat around the camp fire to keep warm.",
        "sentenceZh": "我們圍繞著營火取暖。"
    },
    {
        "word": "heat",
        "meaning": "熱",
        "theme": "大自然",
        "sentence": "The heat from the sun makes me sweat.",
        "sentenceZh": "太陽的熱度讓我流汗。"
    },
    {
        "word": "stone",
        "meaning": "石頭",
        "theme": "大自然",
        "sentence": "The old bridge is made entirely of stone.",
        "sentenceZh": "那座古老的橋完全是用石頭建造的。"
    },
    {
        "word": "rock",
        "meaning": "岩石",
        "theme": "大自然",
        "sentence": "The hikers climbed carefully over the large rocks.",
        "sentenceZh": "健行者小心地爬過大岩石。"
    },
    {
        "word": "sand",
        "meaning": "沙子",
        "theme": "大自然",
        "sentence": "The children are building a castle with sand.",
        "sentenceZh": "孩子們正在用沙子堆城堡。"
    },
    {
        "word": "mud",
        "meaning": "泥巴",
        "theme": "大自然",
        "sentence": "Try not to step in the mud after the rain.",
        "sentenceZh": "下雨後盡量別踩到泥巴。"
    },
    {
        "word": "metal",
        "meaning": "金屬",
        "theme": "大自然",
        "sentence": "This strong door is made of solid metal.",
        "sentenceZh": "這扇堅固的門是用實心金屬做的。"
    },
    {
        "word": "wood",
        "meaning": "木材",
        "theme": "大自然",
        "sentence": "My father built a birdhouse out of wood.",
        "sentenceZh": "我爸爸用木材做了一個鳥屋。"
    },
    {
        "word": "rubber",
        "meaning": "橡膠",
        "theme": "大自然",
        "sentence": "The tires on a car are made of thick rubber.",
        "sentenceZh": "汽車的輪胎是用厚橡膠做的。"
    },
    {
        "word": "poison",
        "meaning": "毒",
        "theme": "大自然",
        "sentence": "Never eat a wild mushroom, it might contain poison.",
        "sentenceZh": "千萬別吃野菇，它可能含有毒素。"
    },
    {
        "word": "gas",
        "meaning": "氣態；瓦斯；汽油",
        "theme": "大自然",
        "sentence": "We stopped at the station to put more gas in the car.",
        "sentenceZh": "我們在加油站停下來為汽車加汽油。"
    },
    {
        "word": "liquid",
        "meaning": "液體",
        "theme": "大自然",
        "sentence": "Water and milk are both examples of liquids.",
        "sentenceZh": "水和牛奶都是液體的例子。"
    },
    {
        "word": "temperature",
        "meaning": "溫度",
        "theme": "大自然",
        "sentence": "The temperature will drop below 10 degrees tonight.",
        "sentenceZh": "今晚的溫度將降到 10 度以下。"
    },
    {
        "word": "air",
        "meaning": "空氣",
        "theme": "大自然",
        "sentence": "The fresh air in the mountains is very good for you.",
        "sentenceZh": "山上的新鮮空氣對你很好。"
    },
    {
        "word": "nest",
        "meaning": "鳥巢",
        "theme": "大自然",
        "sentence": "The mother bird is feeding her babies in the nest.",
        "sentenceZh": "母鳥正在鳥巢裡餵寶寶。"
    },
    {
        "word": "sky",
        "meaning": "天空",
        "theme": "大自然",
        "sentence": "The clear blue sky makes everyone feel happy.",
        "sentenceZh": "晴朗湛藍的天空讓每個人都覺得開心。"
    },
    {
        "word": "planet",
        "meaning": "行星",
        "theme": "大自然",
        "sentence": "Earth is the third planet from the sun.",
        "sentenceZh": "地球是距離太陽第三近的行星。"
    },
    {
        "word": "earth",
        "meaning": "地球",
        "theme": "大自然",
        "sentence": "We must work together to protect the earth.",
        "sentenceZh": "我們必須一起努力保護地球。"
    },
    {
        "word": "moon",
        "meaning": "月亮",
        "theme": "大自然",
        "sentence": "The full moon looks beautiful on the Moon Festival.",
        "sentenceZh": "中秋節的滿月看起來很美。"
    },
    {
        "word": "sun",
        "meaning": "太陽",
        "theme": "大自然",
        "sentence": "The sun gives us light and warmth every day.",
        "sentenceZh": "太陽每天給予我們光和溫暖。"
    },
    {
        "word": "star",
        "meaning": "星星",
        "theme": "大自然",
        "sentence": "You can see many stars in the dark night sky.",
        "sentenceZh": "在漆黑的夜空中你能看到許多星星。"
    },
    {
        "word": "earthquake",
        "meaning": "地震",
        "theme": "大自然",
        "sentence": "We practice hiding under our desks during an earthquake drill.",
        "sentenceZh": "我們在地震演習時練習躲在書桌下。"
    },
    {
        "word": "plant",
        "meaning": "植物；種植",
        "theme": "大自然",
        "sentence": "I am going to plant some tomatoes in the garden.",
        "sentenceZh": "我打算在花園裡種植一些番茄。"
    },
    {
        "word": "forest",
        "meaning": "森林",
        "theme": "大自然",
        "sentence": "There are many wild animals living in the deep forest.",
        "sentenceZh": "森林深處住著許多野生動物。"
    },
    {
        "word": "tree",
        "meaning": "樹",
        "theme": "大自然",
        "sentence": "We sat under the big tree to read books.",
        "sentenceZh": "我們坐在大樹下看書。"
    },
    {
        "word": "grass",
        "meaning": "草",
        "theme": "大自然",
        "sentence": "Please do not walk on the green grass.",
        "sentenceZh": "請不要踐踏綠草皮。"
    },
    {
        "word": "woods",
        "meaning": "樹林",
        "theme": "大自然",
        "sentence": "We took a quiet walk through the woods.",
        "sentenceZh": "我們在樹林裡安靜地散步。"
    },
    {
        "word": "branch",
        "meaning": "樹枝；分支",
        "theme": "大自然",
        "sentence": "The monkey swung from one branch to another.",
        "sentenceZh": "猴子從一根樹枝盪到另一根樹枝。"
    },
    {
        "word": "flower",
        "meaning": "花",
        "theme": "大自然",
        "sentence": "She bought a beautiful red flower for her mother.",
        "sentenceZh": "她買了一朵美麗的紅花給她媽媽。"
    },
    {
        "word": "leaf",
        "meaning": "葉子",
        "theme": "大自然",
        "sentence": "Look at this green leaf I found in the garden.",
        "sentenceZh": "看我在花園找到的這片綠葉。"
    },
    {
        "word": "root",
        "meaning": "根",
        "theme": "大自然",
        "sentence": "A tree gets water from the ground through its roots.",
        "sentenceZh": "樹木透過根從地下吸收水分。"
    },
    {
        "word": "seed",
        "meaning": "種子",
        "theme": "大自然",
        "sentence": "We put a little sunflower seed into the soil.",
        "sentenceZh": "我們把一顆小小的向日葵種子放進土壤裡。"
    },
    {
        "word": "rose",
        "meaning": "玫瑰",
        "theme": "大自然",
        "sentence": "The red rose is a symbol of true love.",
        "sentenceZh": "紅玫瑰是真愛的象徵。"
    },
    {
        "word": "voice",
        "meaning": "聲音",
        "theme": "大自然",
        "sentence": "The teacher has a very clear and loud voice.",
        "sentenceZh": "老師的聲音非常清晰宏亮。"
    },
    {
        "word": "noise",
        "meaning": "噪音",
        "theme": "大自然",
        "sentence": "Please stop making that loud noise in the library.",
        "sentenceZh": "請不要在圖書館製造巨大的噪音。"
    },
    {
        "word": "pollution",
        "meaning": "污染",
        "theme": "大自然",
        "sentence": "Riding bicycles is a good way to reduce air pollution.",
        "sentenceZh": "騎腳踏車是減少空氣污染的好方法。"
    },
    {
        "word": "trace",
        "meaning": "痕跡",
        "theme": "大自然",
        "sentence": "We found animal traces on the wet mud.",
        "sentenceZh": "我們在溼泥巴上發現了動物的痕跡。"
    },
    {
        "word": "basket",
        "meaning": "籃子",
        "theme": "居家",
        "sentence": "Put the dirty clothes in the laundry basket.",
        "sentenceZh": "把髒衣服放進洗衣籃裡。"
    },
    {
        "word": "brick",
        "meaning": "磚塊",
        "theme": "居家",
        "sentence": "The little pig built a strong house made of bricks.",
        "sentenceZh": "小豬用磚塊蓋了一間堅固的房子。"
    },
    {
        "word": "bucket",
        "meaning": "水桶",
        "theme": "居家",
        "sentence": "We used a red bucket to carry water.",
        "sentenceZh": "我們用一個紅水桶來提水。"
    },
    {
        "word": "candle",
        "meaning": "蠟燭",
        "theme": "居家",
        "sentence": "He blew out the candles on his birthday cake.",
        "sentenceZh": "他吹熄了生日蛋糕上的蠟燭。"
    },
    {
        "word": "hammer",
        "meaning": "鐵鎚",
        "theme": "居家",
        "sentence": "You need a hammer to hit the nail into the wood.",
        "sentenceZh": "你需要一把鐵鎚把釘子釘進木頭裡。"
    },
    {
        "word": "housework",
        "meaning": "家事",
        "theme": "居家",
        "sentence": "Helping with housework makes parents very happy.",
        "sentenceZh": "幫忙做家事會讓父母很開心。"
    },
    {
        "word": "key",
        "meaning": "鑰匙",
        "theme": "居家",
        "sentence": "I cannot open the door without my key.",
        "sentenceZh": "沒有鑰匙我打不開門。"
    },
    {
        "word": "mat",
        "meaning": "地墊",
        "theme": "居家",
        "sentence": "Please wipe your shoes on the door mat before coming in.",
        "sentenceZh": "進來前請在門邊的地墊上擦拭你的鞋子。"
    },
    {
        "word": "needle",
        "meaning": "針",
        "theme": "居家",
        "sentence": "She used a needle and thread to fix my shirt.",
        "sentenceZh": "她用針線修補了我的襯衫。"
    },
    {
        "word": "toilet",
        "meaning": "馬桶",
        "theme": "居家",
        "sentence": "Please remember to flush the toilet after using it.",
        "sentenceZh": "使用後請記得沖馬桶。"
    },
    {
        "word": "trash can",
        "meaning": "垃圾桶",
        "theme": "居家",
        "sentence": "Throw the paper cup into the trash can, please.",
        "sentenceZh": "請把紙杯丟進垃圾桶。"
    },
    {
        "word": "tube",
        "meaning": "管子",
        "theme": "居家",
        "sentence": "The toothpaste comes out of a plastic tube.",
        "sentenceZh": "牙膏從塑膠管裡擠出來。"
    },
    {
        "word": "umbrella",
        "meaning": "雨傘",
        "theme": "居家",
        "sentence": "Don't forget to take an umbrella; it might rain later.",
        "sentenceZh": "別忘了帶雨傘，等一下可能會下雨。"
    },
    {
        "word": "build",
        "meaning": "建造",
        "theme": "居家",
        "sentence": "We are going to build a sandbox in the garden.",
        "sentenceZh": "我們打算在花園裡建造一個沙坑。"
    },
    {
        "word": "clean",
        "meaning": "清潔",
        "theme": "居家",
        "sentence": "It is time to clean the blackboard after class.",
        "sentenceZh": "下課後該把黑板清潔乾淨了。"
    },
    {
        "word": "decorate",
        "meaning": "裝飾",
        "theme": "居家",
        "sentence": "We will decorate the classroom for the Halloween party.",
        "sentenceZh": "我們將為了萬聖節派對裝飾教室。"
    },
    {
        "word": "design",
        "meaning": "設計",
        "theme": "居家",
        "sentence": "I want to design an interactive web game for my students.",
        "sentenceZh": "我想為我的學生設計一款互動網頁遊戲。"
    },
    {
        "word": "fix",
        "meaning": "修理",
        "theme": "居家",
        "sentence": "Can you help me fix my broken bicycle?",
        "sentenceZh": "你能幫我修理壞掉的腳踏車嗎？"
    },
    {
        "word": "repair",
        "meaning": "修復",
        "theme": "居家",
        "sentence": "The Syntax Repair game helps you fix wrong sentences.",
        "sentenceZh": "「語法修復」遊戲能幫助你修正錯誤的句子。"
    },
    {
        "word": "sweep",
        "meaning": "清掃",
        "theme": "居家",
        "sentence": "Please sweep the floor until it is completely clean.",
        "sentenceZh": "請清掃地板直到它完全乾淨。"
    },
    {
        "word": "wash",
        "meaning": "清洗",
        "theme": "居家",
        "sentence": "You must wash your hands before eating dinner.",
        "sentenceZh": "吃晚餐前你必須清洗雙手。"
    },
    {
        "word": "apartment",
        "meaning": "公寓",
        "theme": "廳室",
        "sentence": "My aunt lives in a nice apartment in Taipei.",
        "sentenceZh": "我阿姨住在台北一間很棒的公寓裡。"
    },
    {
        "word": "balcony",
        "meaning": "陽台",
        "theme": "廳室",
        "sentence": "She stood on the balcony to enjoy the night breeze.",
        "sentenceZh": "她站在陽台上享受晚風。"
    },
    {
        "word": "basement",
        "meaning": "地下室",
        "theme": "廳室",
        "sentence": "We keep our old toys in a box in the basement.",
        "sentenceZh": "我們把舊玩具放在地下室的箱子裡。"
    },
    {
        "word": "bathroom",
        "meaning": "浴室",
        "theme": "廳室",
        "sentence": "I am going to take a hot shower in the bathroom.",
        "sentenceZh": "我打算去浴室洗個熱水澡。"
    },
    {
        "word": "bedroom",
        "meaning": "臥室",
        "theme": "廳室",
        "sentence": "Your bedroom is very messy; you need to clean it up.",
        "sentenceZh": "你的臥室很亂，你需要把它整理乾淨。"
    },
    {
        "word": "building",
        "meaning": "建築物",
        "theme": "廳室",
        "sentence": "Taipei 101 is one of the tallest buildings in the world.",
        "sentenceZh": "台北 101 是世界上最高的建築物之一。"
    },
    {
        "word": "ceiling",
        "meaning": "天花板",
        "theme": "廳室",
        "sentence": "The fan is hanging from the middle of the ceiling.",
        "sentenceZh": "電風扇掛在天花板中央。"
    },
    {
        "word": "dining room",
        "meaning": "餐廳",
        "theme": "廳室",
        "sentence": "Our family eats dinner together in the dining room.",
        "sentenceZh": "我們一家人在餐廳一起吃晚餐。"
    },
    {
        "word": "door",
        "meaning": "門",
        "theme": "廳室",
        "sentence": "Please close the door quietly when you leave.",
        "sentenceZh": "你離開時請輕輕關上門。"
    },
    {
        "word": "downstairs",
        "meaning": "樓下",
        "theme": "廳室",
        "sentence": "I ran downstairs quickly when I smelled the breakfast.",
        "sentenceZh": "我聞到早餐香味就快速地跑下樓。"
    },
    {
        "word": "fence",
        "meaning": "柵欄",
        "theme": "廳室",
        "sentence": "The dog jumped over the wooden fence and ran away.",
        "sentenceZh": "狗跳過木柵欄跑走了。"
    },
    {
        "word": "floor",
        "meaning": "地板；樓層",
        "theme": "廳室",
        "sentence": "Our classroom is located on the third floor.",
        "sentenceZh": "我們的教室位於三樓。"
    },
    {
        "word": "garage",
        "meaning": "車庫",
        "theme": "廳室",
        "sentence": "My father parked his car inside the garage.",
        "sentenceZh": "我爸爸把車停進車庫裡。"
    },
    {
        "word": "garden",
        "meaning": "花園",
        "theme": "廳室",
        "sentence": "My mother grows beautiful roses in the front garden.",
        "sentenceZh": "我媽媽在前院花園種了美麗的玫瑰花。"
    },
    {
        "word": "gate",
        "meaning": "大門",
        "theme": "廳室",
        "sentence": "The school gate will close at 7:30 a.m.",
        "sentenceZh": "學校大門將在早上 7:30 關閉。"
    },
    {
        "word": "hall",
        "meaning": "走廊；大廳",
        "theme": "廳室",
        "sentence": "Please don't run in the school hall.",
        "sentenceZh": "請不要在學校走廊奔跑。"
    },
    {
        "word": "home",
        "meaning": "家",
        "theme": "廳室",
        "sentence": "It feels so good to be back home after a long day.",
        "sentenceZh": "漫長的一天後回到家感覺真好。"
    },
    {
        "word": "house",
        "meaning": "房子",
        "theme": "廳室",
        "sentence": "They just bought a new house in Dounan.",
        "sentenceZh": "他們剛在斗南買了一間新房子。"
    },
    {
        "word": "kitchen",
        "meaning": "廚房",
        "theme": "廳室",
        "sentence": "The smell of fried rice is coming from the kitchen.",
        "sentenceZh": "炒飯的香味從廚房飄了出來。"
    },
    {
        "word": "living room",
        "meaning": "客廳",
        "theme": "廳室",
        "sentence": "We sit in the living room to watch TV together.",
        "sentenceZh": "我們坐在客廳一起看電視。"
    },
    {
        "word": "roof",
        "meaning": "屋頂",
        "theme": "廳室",
        "sentence": "The heavy rain was hitting hard on the roof.",
        "sentenceZh": "大雨重重地打在屋頂上。"
    },
    {
        "word": "room",
        "meaning": "房間",
        "theme": "廳室",
        "sentence": "Can you help me carry these books to my room?",
        "sentenceZh": "你能幫我把這些書搬到我房間嗎？"
    },
    {
        "word": "stairs",
        "meaning": "樓梯",
        "theme": "廳室",
        "sentence": "Be careful when you walk up the wet stairs.",
        "sentenceZh": "走上潮濕的樓梯時要小心。"
    },
    {
        "word": "upstairs",
        "meaning": "樓上",
        "theme": "廳室",
        "sentence": "His bedroom is located upstairs.",
        "sentenceZh": "他的臥室位在樓上。"
    },
    {
        "word": "wall",
        "meaning": "牆",
        "theme": "廳室",
        "sentence": "The teacher put a big world map on the wall.",
        "sentenceZh": "老師在牆上貼了一張大世界地圖。"
    },
    {
        "word": "window",
        "meaning": "窗戶",
        "theme": "廳室",
        "sentence": "Open the window to let some fresh air in.",
        "sentenceZh": "打開窗戶讓一些新鮮空氣進來。"
    },
    {
        "word": "yard",
        "meaning": "院子",
        "theme": "廳室",
        "sentence": "My dog loves to run and play in the back yard.",
        "sentenceZh": "我的狗喜歡在後院奔跑玩耍。"
    },
    {
        "word": "weather",
        "meaning": "天氣",
        "theme": "天氣",
        "sentence": "We should check the weather before we play badminton outside.",
        "sentenceZh": "我們去戶外打羽球前應該先確認天氣。"
    },
    {
        "word": "climate",
        "meaning": "氣候",
        "theme": "天氣",
        "sentence": "The climate in southern Taiwan is usually warm and sunny.",
        "sentenceZh": "台灣南部的氣候通常是溫暖且陽光普照的。"
    },
    {
        "word": "clear",
        "meaning": "晴朗的",
        "theme": "天氣",
        "sentence": "The sky is very clear and blue today.",
        "sentenceZh": "今天的天空非常晴朗湛藍。"
    },
    {
        "word": "cloudy",
        "meaning": "多雲的",
        "theme": "天氣",
        "sentence": "It is cloudy right now; I think it might rain later.",
        "sentenceZh": "現在多雲，我覺得等一下可能會下雨。"
    },
    {
        "word": "cold",
        "meaning": "寒冷的",
        "theme": "天氣",
        "sentence": "I need to wear a heavy coat when the weather is cold.",
        "sentenceZh": "天氣寒冷時我需要穿厚外套。"
    },
    {
        "word": "cool",
        "meaning": "涼爽的",
        "theme": "天氣",
        "sentence": "The autumn breeze feels very cool and comfortable.",
        "sentenceZh": "秋天的微風吹起來非常涼爽舒服。"
    },
    {
        "word": "dry",
        "meaning": "乾燥的",
        "theme": "天氣",
        "sentence": "The land is very dry because it hasn't rained for months.",
        "sentenceZh": "因為幾個月沒下雨了，土地非常乾燥。"
    },
    {
        "word": "foggy",
        "meaning": "有霧的",
        "theme": "天氣",
        "sentence": "It is dangerous to drive a car when it is highly foggy.",
        "sentenceZh": "起大霧時開車是很危險的。"
    },
    {
        "word": "freezing",
        "meaning": "極冷的",
        "theme": "天氣",
        "sentence": "Put on your gloves; it is freezing outside!",
        "sentenceZh": "戴上你的手套，外面冷極了！"
    },
    {
        "word": "hot",
        "meaning": "炎熱的",
        "theme": "天氣",
        "sentence": "It is too hot to run on the playground at noon.",
        "sentenceZh": "中午在操場上跑步太熱了。"
    },
    {
        "word": "humid",
        "meaning": "潮濕的",
        "theme": "天氣",
        "sentence": "The air feels very heavy and humid before a summer storm.",
        "sentenceZh": "夏日暴風雨前，空氣感覺非常沉重潮濕。"
    },
    {
        "word": "rainy",
        "meaning": "下雨的",
        "theme": "天氣",
        "sentence": "You should take an umbrella with you on a rainy day.",
        "sentenceZh": "在下雨天你應該隨身攜帶雨傘。"
    },
    {
        "word": "snowy",
        "meaning": "下雪的",
        "theme": "天氣",
        "sentence": "We built a big snowman together on a snowy morning.",
        "sentenceZh": "我們在一個下雪的早晨一起堆了個大雪人。"
    },
    {
        "word": "stormy",
        "meaning": "暴風雨的",
        "theme": "天氣",
        "sentence": "The fishing boats cannot go out to sea in stormy weather.",
        "sentenceZh": "漁船在暴風雨的天氣無法出海。"
    },
    {
        "word": "sunny",
        "meaning": "陽光充足的",
        "theme": "天氣",
        "sentence": "Let's ride our bikes to the park on this sunny day.",
        "sentenceZh": "我們在這個陽光普照的日子騎腳踏車去公園吧。"
    },
    {
        "word": "warm",
        "meaning": "溫暖的",
        "theme": "天氣",
        "sentence": "The warm sunlight feels so good in the winter.",
        "sentenceZh": "冬天裡溫暖的陽光感覺真好。"
    },
    {
        "word": "wet",
        "meaning": "潮濕的",
        "theme": "天氣",
        "sentence": "My shoes got wet in the heavy rain.",
        "sentenceZh": "我的鞋子在傾盆大雨中弄濕了。"
    },
    {
        "word": "windy",
        "meaning": "多風的",
        "theme": "天氣",
        "sentence": "It is too windy to play badminton outdoors today.",
        "sentenceZh": "今天風太大，不適合在戶外打羽球。"
    },
    {
        "word": "fog",
        "meaning": "霧",
        "theme": "天氣",
        "sentence": "The thick fog makes it hard to see the road clearly.",
        "sentenceZh": "濃霧讓人很難看清楚道路。"
    },
    {
        "word": "lightning",
        "meaning": "閃電",
        "theme": "天氣",
        "sentence": "We saw a bright flash of lightning in the dark sky.",
        "sentenceZh": "我們在漆黑的天空中看見一道明亮的閃電。"
    },
    {
        "word": "rainbow",
        "meaning": "彩虹",
        "theme": "天氣",
        "sentence": "A beautiful rainbow appeared after the afternoon shower.",
        "sentenceZh": "午後陣雨過後出現了一道美麗的彩虹。"
    },
    {
        "word": "shower",
        "meaning": "陣雨",
        "theme": "天氣",
        "sentence": "We got completely wet in the sudden afternoon shower.",
        "sentenceZh": "我們在突如其來的午後陣雨中全身都濕透了。"
    },
    {
        "word": "snow",
        "meaning": "雪",
        "theme": "天氣",
        "sentence": "The kids love to play and jump in the soft white snow.",
        "sentenceZh": "孩子們喜歡在柔軟的白雪中玩耍跳躍。"
    },
    {
        "word": "storm",
        "meaning": "暴風雨",
        "theme": "天氣",
        "sentence": "The heavy storm broke many tree branches last night.",
        "sentenceZh": "昨晚的強烈暴風雨折斷了許多樹枝。"
    },
    {
        "word": "thunder",
        "meaning": "雷聲",
        "theme": "天氣",
        "sentence": "The loud thunder scared my little dog.",
        "sentenceZh": "巨大的雷聲嚇到了我的小狗。"
    },
    {
        "word": "typhoon",
        "meaning": "颱風",
        "theme": "天氣",
        "sentence": "We have to stay home when a typhoon hits Taiwan.",
        "sentenceZh": "當颱風侵襲台灣時我們必須待在家裡。"
    },
    {
        "word": "wind",
        "meaning": "風",
        "theme": "天氣",
        "sentence": "The strong wind blew my hat away.",
        "sentenceZh": "強風把我的帽子吹走了。"
    },
    {
        "word": "blow",
        "meaning": "吹",
        "theme": "天氣",
        "sentence": "The electric fan blows cool air into the classroom.",
        "sentenceZh": "電風扇將冷空氣吹進教室裡。"
    },
    {
        "word": "rain",
        "meaning": "下雨；雨",
        "theme": "天氣",
        "sentence": "It will rain heavily tomorrow, so don't forget your umbrella.",
        "sentenceZh": "明天會下大雨，所以別忘了帶傘。"
    },
    {
        "word": "shine",
        "meaning": "照耀",
        "theme": "天氣",
        "sentence": "The sun shines brightly in the blue sky.",
        "sentenceZh": "太陽在藍天中明亮地照耀著。"
    },
    {
        "word": "air conditioner",
        "meaning": "空調",
        "theme": "家具家電",
        "sentence": "Please turn on the air conditioner; it is very hot in here.",
        "sentenceZh": "請打開冷氣，這裡面很熱。"
    },
    {
        "word": "alarm",
        "meaning": "鬧鐘；警報",
        "theme": "家具家電",
        "sentence": "My alarm clock wakes me up at 6:30 a.m. every morning.",
        "sentenceZh": "我的鬧鐘每天早上六點半叫我起床。"
    },
    {
        "word": "armchair",
        "meaning": "扶手椅",
        "theme": "家具家電",
        "sentence": "Grandfather likes to sit in his comfortable armchair and read.",
        "sentenceZh": "爺爺喜歡坐在他舒服的扶手椅上看書。"
    },
    {
        "word": "bath",
        "meaning": "浴缸",
        "theme": "家具家電",
        "sentence": "I like to take a warm bath after a long day at school.",
        "sentenceZh": "在學校漫長的一天後，我喜歡泡個熱水澡。"
    },
    {
        "word": "bed",
        "meaning": "床",
        "theme": "家具家電",
        "sentence": "You should go to bed early if you are tired.",
        "sentenceZh": "如果你累了就應該早點上床睡覺。"
    },
    {
        "word": "bench",
        "meaning": "長凳",
        "theme": "家具家電",
        "sentence": "We sat on a wooden bench in the park to rest.",
        "sentenceZh": "我們坐在公園的木長凳上休息。"
    },
    {
        "word": "blanket",
        "meaning": "毯子",
        "theme": "家具家電",
        "sentence": "Put an extra blanket on the bed if you feel cold tonight.",
        "sentenceZh": "如果今晚覺得冷，在床上多加一條毯子。"
    },
    {
        "word": "bookcase",
        "meaning": "書櫃",
        "theme": "家具家電",
        "sentence": "There are many English storybooks in that tall bookcase.",
        "sentenceZh": "那個高高的書櫃裡有許多英文故事書。"
    },
    {
        "word": "cable",
        "meaning": "電纜",
        "theme": "家具家電",
        "sentence": "I need a USB cable to charge my smartphone.",
        "sentenceZh": "我需要一條 USB 線來充我的智慧型手機。"
    },
    {
        "word": "carpet",
        "meaning": "地毯",
        "theme": "家具家電",
        "sentence": "The little baby is crawling on the soft living room carpet.",
        "sentenceZh": "小嬰兒正在客廳柔軟的地毯上爬行。"
    },
    {
        "word": "chair",
        "meaning": "椅子",
        "theme": "家具家電",
        "sentence": "Pull up a chair and sit down next to me.",
        "sentenceZh": "拉把椅子坐在我旁邊吧。"
    },
    {
        "word": "closet",
        "meaning": "衣櫥",
        "theme": "家具家電",
        "sentence": "Please hang your new winter coat in the closet.",
        "sentenceZh": "請把你的新冬裝外套掛進衣櫥裡。"
    },
    {
        "word": "couch",
        "meaning": "長沙發",
        "theme": "家具家電",
        "sentence": "We sat on the couch to watch a funny movie together.",
        "sentenceZh": "我們坐在長沙發上一起看搞笑電影。"
    },
    {
        "word": "curtain",
        "meaning": "窗簾",
        "theme": "家具家電",
        "sentence": "Open the curtain to let the morning sunlight in.",
        "sentenceZh": "打開窗簾讓早晨的陽光照進來。"
    },
    {
        "word": "desk",
        "meaning": "書桌",
        "theme": "家具家電",
        "sentence": "He is writing a letter to his pen pal at his desk.",
        "sentenceZh": "他正在書桌前寫信給他的筆友。"
    },
    {
        "word": "drawer",
        "meaning": "抽屜",
        "theme": "家具家電",
        "sentence": "I keep all my pens and pencils in the top drawer.",
        "sentenceZh": "我把所有的筆都收在最上層的抽屜裡。"
    },
    {
        "word": "dresser",
        "meaning": "梳妝台",
        "theme": "家具家電",
        "sentence": "She looked at herself in the mirror on the dresser.",
        "sentenceZh": "她看著梳妝台鏡子裡的自己。"
    },
    {
        "word": "dryer",
        "meaning": "烘乾機",
        "theme": "家具家電",
        "sentence": "Put the wet towels into the clothes dryer.",
        "sentenceZh": "把濕毛巾放進烘乾機裡。"
    },
    {
        "word": "engine",
        "meaning": "引擎",
        "theme": "家具家電",
        "sentence": "The car engine is making a very strange noise.",
        "sentenceZh": "這輛車的引擎正在發出非常奇怪的噪音。"
    },
    {
        "word": "fan",
        "meaning": "電風扇",
        "theme": "家具家電",
        "sentence": "Turn on the electric fan if you are feeling warm.",
        "sentenceZh": "如果你覺得熱，打開電風扇。"
    },
    {
        "word": "faucet",
        "meaning": "水龍頭",
        "theme": "家具家電",
        "sentence": "Remember to turn off the faucet when you brush your teeth.",
        "sentenceZh": "刷牙時記得關掉水龍頭。"
    },
    {
        "word": "flashlight",
        "meaning": "手電筒",
        "theme": "家具家電",
        "sentence": "We need a flashlight because the lights suddenly went out.",
        "sentenceZh": "我們需要手電筒，因為突然停電了。"
    },
    {
        "word": "freezer",
        "meaning": "冷凍庫",
        "theme": "家具家電",
        "sentence": "We keep the meat and ice cream in the freezer.",
        "sentenceZh": "我們把肉和冰淇淋放在冷凍庫裡。"
    },
    {
        "word": "furniture",
        "meaning": "家具",
        "theme": "家具家電",
        "sentence": "They bought some new wooden furniture for their new house.",
        "sentenceZh": "他們為新家買了一些新的木製家具。"
    },
    {
        "word": "hanger",
        "meaning": "衣架",
        "theme": "家具家電",
        "sentence": "Put your shirt on a hanger so it won't get wrinkled.",
        "sentenceZh": "把你的襯衫掛在衣架上，這樣才不會起皺。"
    },
    {
        "word": "heater",
        "meaning": "暖氣",
        "theme": "家具家電",
        "sentence": "We use a small heater to keep the room warm in winter.",
        "sentenceZh": "我們在冬天使用小暖氣機讓房間保持溫暖。"
    },
    {
        "word": "lamp",
        "meaning": "燈",
        "theme": "家具家電",
        "sentence": "Turn on the desk lamp when you are reading a book.",
        "sentenceZh": "看書時請打開檯燈。"
    },
    {
        "word": "light",
        "meaning": "燈；光",
        "theme": "家具家電",
        "sentence": "Turn off the classroom lights before you leave.",
        "sentenceZh": "離開前請關掉教室的燈。"
    },
    {
        "word": "machine",
        "meaning": "機器",
        "theme": "家具家電",
        "sentence": "A computer is a very useful learning machine.",
        "sentenceZh": "電腦是一台非常有用的學習機器。"
    },
    {
        "word": "microwave",
        "meaning": "微波爐",
        "theme": "家具家電",
        "sentence": "You can heat up your cold soup in the microwave.",
        "sentenceZh": "你可以用微波爐加熱你冷掉的湯。"
    },
    {
        "word": "mirror",
        "meaning": "鏡子",
        "theme": "家具家電",
        "sentence": "She brushed her hair in front of the bathroom mirror.",
        "sentenceZh": "她在浴室的鏡子前梳理頭髮。"
    },
    {
        "word": "oven",
        "meaning": "烤箱",
        "theme": "家具家電",
        "sentence": "My mom is baking a delicious chocolate cake in the oven.",
        "sentenceZh": "我媽媽正在烤箱裡烤一顆美味的巧克力蛋糕。"
    },
    {
        "word": "pillow",
        "meaning": "枕頭",
        "theme": "家具家電",
        "sentence": "This soft pillow helps me sleep very well at night.",
        "sentenceZh": "這顆柔軟的枕頭幫助我晚上睡得很好。"
    },
    {
        "word": "pipe",
        "meaning": "管子",
        "theme": "家具家電",
        "sentence": "The dirty water flows away through the plastic pipe.",
        "sentenceZh": "髒水透過塑膠管流走。"
    },
    {
        "word": "refrigerator (fridge)",
        "meaning": "冰箱",
        "theme": "家具家電",
        "sentence": "Keep the fresh milk and fruit in the refrigerator.",
        "sentenceZh": "把鮮奶和水果保存在冰箱裡。"
    },
    {
        "word": "sheet",
        "meaning": "床單",
        "theme": "家具家電",
        "sentence": "We need to wash and change the bed sheet every week.",
        "sentenceZh": "我們每週都需要清洗並更換床單。"
    },
    {
        "word": "shelf",
        "meaning": "架子",
        "theme": "家具家電",
        "sentence": "Put the heavy dictionary back on the bottom shelf.",
        "sentenceZh": "把厚重的字典放回最下層的架子上。"
    },
    {
        "word": "sink",
        "meaning": "水槽",
        "theme": "家具家電",
        "sentence": "Put your dirty dishes in the kitchen sink after eating.",
        "sentenceZh": "吃完飯後把你的髒碗盤放在廚房水槽裡。"
    },
    {
        "word": "soap",
        "meaning": "肥皂",
        "theme": "家具家電",
        "sentence": "Wash your hands with soap before you eat anything.",
        "sentenceZh": "吃任何東西前要用肥皂洗手。"
    },
    {
        "word": "sofa",
        "meaning": "沙發",
        "theme": "家具家電",
        "sentence": "I was so tired that I fell asleep on the sofa.",
        "sentenceZh": "我太累了，所以在沙發上睡著了。"
    },
    {
        "word": "speaker",
        "meaning": "喇叭",
        "theme": "家具家電",
        "sentence": "The 80s pop music is playing loudly from the Bluetooth speaker.",
        "sentenceZh": "藍牙喇叭正大聲播放著 80 年代的流行音樂。"
    },
    {
        "word": "stove",
        "meaning": "爐子",
        "theme": "家具家電",
        "sentence": "The pot of hot soup is boiling on the stove.",
        "sentenceZh": "那鍋熱湯正在爐子上沸騰。"
    },
    {
        "word": "table",
        "meaning": "桌子",
        "theme": "家具家電",
        "sentence": "We sit around the dining table to talk and eat dinner.",
        "sentenceZh": "我們圍繞著餐桌聊天吃晚餐。"
    },
    {
        "word": "telephone",
        "meaning": "電話",
        "theme": "家具家電",
        "sentence": "The telephone is ringing loudly; can someone answer it?",
        "sentenceZh": "電話響得很大聲，有人可以接一下嗎？"
    },
    {
        "word": "television",
        "meaning": "電視",
        "theme": "家具家電",
        "sentence": "Don't sit too close to the television when you watch a movie.",
        "sentenceZh": "看電影時不要坐得離電視太近。"
    },
    {
        "word": "toothbrush",
        "meaning": "牙刷",
        "theme": "家具家電",
        "sentence": "You must change your toothbrush every three months.",
        "sentenceZh": "你必須每三個月更換一次牙刷。"
    },
    {
        "word": "towel",
        "meaning": "毛巾",
        "theme": "家具家電",
        "sentence": "Use a clean, dry towel to wipe your face after washing it.",
        "sentenceZh": "洗完臉後用乾淨乾燥的毛巾擦臉。"
    },
    {
        "word": "tub",
        "meaning": "浴缸",
        "theme": "家具家電",
        "sentence": "The baby is playing with his rubber duck in the bath tub.",
        "sentenceZh": "小嬰兒正在浴缸裡玩他的橡皮鴨。"
    },
    {
        "word": "school",
        "meaning": "學校",
        "theme": "學校",
        "sentence": "I ride my bicycle to school with my classmates every morning.",
        "sentenceZh": "我每天早上和同學一起騎腳踏車上學。"
    },
    {
        "word": "kindergarten",
        "meaning": "幼兒園",
        "theme": "學校",
        "sentence": "My little niece is five years old and goes to kindergarten.",
        "sentenceZh": "我的小姪女五歲，在上幼兒園。"
    },
    {
        "word": "elementary school",
        "meaning": "小學",
        "theme": "學校",
        "sentence": "I met my best friend when we were in elementary school.",
        "sentenceZh": "我在小學時認識了我最好的朋友。"
    },
    {
        "word": "junior high school",
        "meaning": "國中",
        "theme": "學校",
        "sentence": "English is a very important subject in junior high school.",
        "sentenceZh": "英文在國中是一門非常重要的科目。"
    },
    {
        "word": "senior high school",
        "meaning": "高中",
        "theme": "學校",
        "sentence": "He studies very hard to enter a good senior high school.",
        "sentenceZh": "他為了考上好高中而非常努力讀書。"
    },
    {
        "word": "university",
        "meaning": "大學",
        "theme": "學校",
        "sentence": "She wants to study computer science at the university.",
        "sentenceZh": "她想在大學裡修讀資訊科學。"
    },
    {
        "word": "college",
        "meaning": "大學",
        "theme": "學校",
        "sentence": "My older brother is currently a student at a local college.",
        "sentenceZh": "我哥哥目前是當地一所大學的學生。"
    },
    {
        "word": "department",
        "meaning": "部門；系",
        "theme": "學校",
        "sentence": "Mr. Wang teaches in the English department.",
        "sentenceZh": "王先生在英文系教書。"
    },
    {
        "word": "term",
        "meaning": "學期",
        "theme": "學校",
        "sentence": "We will have a big math test at the end of this term.",
        "sentenceZh": "我們在這學期末會有一個大型數學考試。"
    },
    {
        "word": "semester",
        "meaning": "學期",
        "theme": "學校",
        "sentence": "The new school semester will officially begin in September.",
        "sentenceZh": "新學期將在九月正式開始。"
    },
    {
        "word": "campus",
        "meaning": "校園",
        "theme": "學校",
        "sentence": "Our school campus is very large and full of green trees.",
        "sentenceZh": "我們的校園非常大，而且種滿了綠樹。"
    },
    {
        "word": "guard",
        "meaning": "警衛",
        "theme": "學校",
        "sentence": "The friendly security guard stands at the school gate.",
        "sentenceZh": "友善的警衛站在學校大門口。"
    },
    {
        "word": "gym",
        "meaning": "體育館",
        "theme": "學校",
        "sentence": "We play badminton in the school gym when it rains outside.",
        "sentenceZh": "外面下雨時，我們在學校體育館打羽毛球。"
    },
    {
        "word": "library",
        "meaning": "圖書館",
        "theme": "學校",
        "sentence": "Please keep your voice down when you are in the library.",
        "sentenceZh": "在圖書館時請降低音量。"
    },
    {
        "word": "court",
        "meaning": "法庭；球場",
        "theme": "學校",
        "sentence": "The basketball court is full of students playing after school.",
        "sentenceZh": "放學後籃球場上擠滿了打球的學生。"
    },
    {
        "word": "entrance",
        "meaning": "入口",
        "theme": "學校",
        "sentence": "The main entrance of the museum is right over there.",
        "sentenceZh": "博物館的主要入口就在那邊。"
    },
    {
        "word": "exit",
        "meaning": "出口",
        "theme": "學校",
        "sentence": "Walk toward the green sign to find the emergency exit.",
        "sentenceZh": "朝著綠色標誌走去尋找緊急出口。"
    },
    {
        "word": "club",
        "meaning": "俱樂部",
        "theme": "學校",
        "sentence": "I joined the English club to practice my speaking skills.",
        "sentenceZh": "我加入了英文社團來練習我的口說技巧。"
    },
    {
        "word": "locker",
        "meaning": "鎖櫃",
        "theme": "學校",
        "sentence": "Put your heavy books and backpack in your personal locker.",
        "sentenceZh": "把你厚重的書和背包放進你的個人置物櫃裡。"
    },
    {
        "word": "playground",
        "meaning": "操場；遊樂場",
        "theme": "學校",
        "sentence": "The children are running happily on the playground.",
        "sentenceZh": "孩子們正在操場上開心地奔跑。"
    },
    {
        "word": "seesaw",
        "meaning": "翹翹板",
        "theme": "學校",
        "sentence": "Two kids are playing on the wooden seesaw in the park.",
        "sentenceZh": "兩個小孩在公園裡玩木製的翹翹板。"
    },
    {
        "word": "slide",
        "meaning": "溜滑梯",
        "theme": "學校",
        "sentence": "The little boy went down the slide very fast.",
        "sentenceZh": "小男孩溜滑梯溜得非常快。"
    },
    {
        "word": "swing",
        "meaning": "鞦韆；搖擺",
        "theme": "學校",
        "sentence": "She loves to sit on the swing and fly high into the air.",
        "sentenceZh": "她喜歡坐在鞦韆上盪得高高的。"
    },
    {
        "word": "course",
        "meaning": "課程",
        "theme": "學校",
        "sentence": "I am taking an online course to learn HTML coding.",
        "sentenceZh": "我正在上線上課程學習寫 HTML 程式碼。"
    },
    {
        "word": "art",
        "meaning": "藝術",
        "theme": "學校",
        "sentence": "We will learn how to paint a beautiful picture in art class.",
        "sentenceZh": "我們在美術課將學習如何畫出一幅美麗的畫。"
    },
    {
        "word": "Chinese",
        "meaning": "中文",
        "theme": "學校",
        "sentence": "We recite beautiful traditional poems in Chinese class.",
        "sentenceZh": "我們在國文課背誦美麗的傳統詩詞。"
    },
    {
        "word": "English",
        "meaning": "英文",
        "theme": "學校",
        "sentence": "Learning English vocabulary can be very fun if we play games.",
        "sentenceZh": "如果我們玩遊戲，學習英文單字會非常有趣。"
    },
    {
        "word": "geography",
        "meaning": "地理",
        "theme": "學校",
        "sentence": "We study world maps and different countries in geography class.",
        "sentenceZh": "我們在地理課學習世界地圖和不同國家。"
    },
    {
        "word": "history",
        "meaning": "歷史",
        "theme": "學校",
        "sentence": "Learning about Taiwan's history helps us understand our home.",
        "sentenceZh": "學習台灣的歷史幫助我們了解我們的家鄉。"
    },
    {
        "word": "biology",
        "meaning": "生物",
        "theme": "學校",
        "sentence": "We use a microscope to look at small cells in biology class.",
        "sentenceZh": "我們在生物課用顯微鏡觀察小細胞。"
    },
    {
        "word": "chemistry",
        "meaning": "化學",
        "theme": "學校",
        "sentence": "The students mixed two liquids together in the chemistry lab.",
        "sentenceZh": "學生們在化學實驗室把兩種液體混合在一起。"
    },
    {
        "word": "physics",
        "meaning": "物理",
        "theme": "學校",
        "sentence": "We learned about the rules of gravity in today's physics lesson.",
        "sentenceZh": "我們在今天的物理課學到了地心引力的規則。"
    },
    {
        "word": "language",
        "meaning": "語言",
        "theme": "學校",
        "sentence": "English is a very useful international language to learn.",
        "sentenceZh": "英文是一門非常實用且值得學習的國際語言。"
    },
    {
        "word": "law",
        "meaning": "法律",
        "theme": "學校",
        "sentence": "Everyone in the country must obey the traffic laws.",
        "sentenceZh": "國家裡的每一個人都必須遵守交通法規。"
    },
    {
        "word": "math",
        "meaning": "數學",
        "theme": "學校",
        "sentence": "You have to practice a lot to solve difficult math problems.",
        "sentenceZh": "你必須多練習才能解開困難的數學題。"
    },
    {
        "word": "music",
        "meaning": "音樂",
        "theme": "學校",
        "sentence": "We sing 80s songs and play the recorder in music class.",
        "sentenceZh": "我們在音樂課唱 80 年代的歌並吹直笛。"
    },
    {
        "word": "science",
        "meaning": "科學",
        "theme": "學校",
        "sentence": "The students are doing a cool experiment in the science class.",
        "sentenceZh": "學生們正在科學課做一個很酷的實驗。"
    },
    {
        "word": "social science",
        "meaning": "社會科學",
        "theme": "學校",
        "sentence": "We learn about our community in the social science class.",
        "sentenceZh": "我們在社會課學習關於我們社區的事物。"
    },
    {
        "word": "education",
        "meaning": "教育",
        "theme": "學校",
        "sentence": "A good education is very important for a child's future.",
        "sentenceZh": "良好的教育對孩子的未來非常重要。"
    },
    {
        "word": "lesson",
        "meaning": "課",
        "theme": "學校",
        "sentence": "Today's English lesson is about the names of different animals.",
        "sentenceZh": "今天的英文課是關於各種動物的名字。"
    },
    {
        "word": "knowledge",
        "meaning": "知識",
        "theme": "學校",
        "sentence": "Reading many books is the best way to get new knowledge.",
        "sentenceZh": "廣泛閱讀是獲取新知識最好的方法。"
    },
    {
        "word": "memory",
        "meaning": "記憶",
        "theme": "學校",
        "sentence": "You need a good memory to learn 2,000 vocabulary words!",
        "sentenceZh": "你需要有好的記憶力才能記住兩千個單字！"
    },
    {
        "word": "word",
        "meaning": "字詞",
        "theme": "學校",
        "sentence": "Look up this new word in the dictionary if you don't know it.",
        "sentenceZh": "如果你不懂這個新單字，就去查字典。"
    },
    {
        "word": "vocabulary",
        "meaning": "字彙",
        "theme": "學校",
        "sentence": "Check your vocabulary passport to practice these words every day.",
        "sentenceZh": "每天查看你的單字護照來練習這些字。"
    },
    {
        "word": "sentence",
        "meaning": "句子",
        "theme": "學校",
        "sentence": "Try to write a complete sentence using this new grammar rule.",
        "sentenceZh": "試著用這個新文法規則寫一個完整的句子。"
    },
    {
        "word": "poem",
        "meaning": "詩",
        "theme": "學校",
        "sentence": "The student wrote a beautiful English poem for her mother.",
        "sentenceZh": "這位學生為她母親寫了一首美麗的英文詩。"
    },
    {
        "word": "story",
        "meaning": "故事",
        "theme": "學校",
        "sentence": "The teacher told us a very funny story about a clever monkey.",
        "sentenceZh": "老師告訴我們一個關於聰明猴子的有趣故事。"
    },
    {
        "word": "example",
        "meaning": "例子",
        "theme": "學校",
        "sentence": "Let me give you an example of how to play this grammar game.",
        "sentenceZh": "讓我舉個例子示範怎麼玩這個文法遊戲。"
    },
    {
        "word": "exam",
        "meaning": "考試",
        "theme": "學校",
        "sentence": "Good luck on your final English exam tomorrow!",
        "sentenceZh": "祝你明天的英文期末考順利！"
    },
    {
        "word": "quiz",
        "meaning": "小考",
        "theme": "學校",
        "sentence": "We will have a short spelling quiz in class tomorrow morning.",
        "sentenceZh": "我們明天早上的課堂會有個簡短的拼字小考。"
    },
    {
        "word": "test",
        "meaning": "測驗",
        "theme": "學校",
        "sentence": "Make sure you review your notes carefully before the test.",
        "sentenceZh": "考試前務必仔細複習你的筆記。"
    },
    {
        "word": "exercise",
        "meaning": "練習",
        "theme": "學校",
        "sentence": "Doing these grammar exercises will help you write better.",
        "sentenceZh": "做這些文法練習會幫助你寫得更好。"
    },
    {
        "word": "homework",
        "meaning": "家庭作業",
        "theme": "學校",
        "sentence": "Did you finish your math homework before you played video games?",
        "sentenceZh": "你打電動前寫完數學作業了嗎？"
    },
    {
        "word": "report",
        "meaning": "報告",
        "theme": "學校",
        "sentence": "I have to write a long book report for my English reading class.",
        "sentenceZh": "我必須為我的英文閱讀課寫一份長篇的讀書報告。"
    },
    {
        "word": "grade",
        "meaning": "年級；成績",
        "theme": "學校",
        "sentence": "He studied hard and got a very good grade on his science test.",
        "sentenceZh": "他努力讀書，在科學考試中獲得了很好的成績。"
    },
    {
        "word": "record",
        "meaning": "紀錄",
        "theme": "學校",
        "sentence": "The fast runner broke the school record in the 100-meter race.",
        "sentenceZh": "那位跑得快的選手打破了學校一百公尺賽跑的紀錄。"
    },
    {
        "word": "score",
        "meaning": "分數",
        "theme": "學校",
        "sentence": "The winning team got a high score in the badminton game.",
        "sentenceZh": "獲勝的隊伍在羽球比賽中獲得了高分。"
    },
    {
        "word": "book",
        "meaning": "書本",
        "theme": "學校",
        "sentence": "Open your English book to page 15, please.",
        "sentenceZh": "請把英文課本翻到第十五頁。"
    },
    {
        "word": "diary",
        "meaning": "日記",
        "theme": "學校",
        "sentence": "She writes her thoughts in her secret diary every night.",
        "sentenceZh": "她每天晚上把想法寫在秘密日記裡。"
    },
    {
        "word": "dictionary",
        "meaning": "字典",
        "theme": "學校",
        "sentence": "You can find the meaning of the word in an English-Chinese dictionary.",
        "sentenceZh": "你可以在英漢字典裡找到這個字的意思。"
    },
    {
        "word": "magazine",
        "meaning": "雜誌",
        "theme": "學校",
        "sentence": "My sister likes to read sports and fashion magazines.",
        "sentenceZh": "我姐姐喜歡看體育和時尚雜誌。"
    },
    {
        "word": "map",
        "meaning": "地圖",
        "theme": "學校",
        "sentence": "We used a paper map to find our way in the big city.",
        "sentenceZh": "我們用了一張紙本地圖在大城市裡找路。"
    },
    {
        "word": "notebook",
        "meaning": "筆記本",
        "theme": "學校",
        "sentence": "Write down the important grammar rules in your notebook.",
        "sentenceZh": "把重要的文法規則寫在你的筆記本上。"
    },
    {
        "word": "page",
        "meaning": "頁",
        "theme": "學校",
        "sentence": "Please turn the page and continue reading the story.",
        "sentenceZh": "請翻頁並繼續閱讀故事。"
    },
    {
        "word": "paper",
        "meaning": "紙",
        "theme": "學校",
        "sentence": "Do you have a piece of blank paper that I can use to draw?",
        "sentenceZh": "你有一張我可以畫畫用的空白紙嗎？"
    },
    {
        "word": "sheet",
        "meaning": "一張（紙）",
        "theme": "學校",
        "sentence": "Hand me a sheet of paper so I can write down the phone number.",
        "sentenceZh": "遞給我一張紙，這樣我就可以把電話號碼寫下來。"
    },
    {
        "word": "textbook",
        "meaning": "教科書",
        "theme": "學校",
        "sentence": "We have to bring our math textbook to class every day.",
        "sentenceZh": "我們每天都必須帶數學教科書來上課。"
    },
    {
        "word": "workbook",
        "meaning": "練習本",
        "theme": "學校",
        "sentence": "Please finish the matching exercises in your English workbook.",
        "sentenceZh": "請完成你英文練習本裡的連連看練習。"
    },
    {
        "word": "note",
        "meaning": "筆記；音符",
        "theme": "學校",
        "sentence": "I left a yellow sticky note on the teacher's desk.",
        "sentenceZh": "我在老師的書桌上留了一張黃色便利貼。"
    },
    {
        "word": "stationery",
        "meaning": "文具",
        "theme": "學校",
        "sentence": "I bought some new pens and cute erasers at the stationery store.",
        "sentenceZh": "我在文具店買了一些新筆和可愛的橡皮擦。"
    },
    {
        "word": "tape",
        "meaning": "膠帶；錄影帶",
        "theme": "學校",
        "sentence": "Use some clear tape to stick the poster on the wall.",
        "sentenceZh": "用一些透明膠帶把海報貼在牆上。"
    },
    {
        "word": "envelope",
        "meaning": "信封",
        "theme": "學校",
        "sentence": "Put the letter in the envelope before you mail it at the post office.",
        "sentenceZh": "在去郵局寄信前，先把信裝進信封裡。"
    },
    {
        "word": "eraser",
        "meaning": "橡皮擦",
        "theme": "學校",
        "sentence": "Use an eraser to rub out the wrong spelling and try again.",
        "sentenceZh": "用橡皮擦擦掉拼錯的地方再試一次。"
    },
    {
        "word": "glasses",
        "meaning": "眼鏡",
        "theme": "學校",
        "sentence": "My grandfather wears reading glasses when he looks at his phone.",
        "sentenceZh": "我爺爺看手機時會戴老花眼鏡。"
    },
    {
        "word": "glue",
        "meaning": "膠水",
        "theme": "學校",
        "sentence": "We used liquid glue to stick the paper parts together.",
        "sentenceZh": "我們用膠水把紙張零件黏在一起。"
    },
    {
        "word": "ink",
        "meaning": "墨水",
        "theme": "學校",
        "sentence": "I need a new pen because this one is out of blue ink.",
        "sentenceZh": "我需要一支新筆，因為這支的藍色墨水用完了。"
    },
    {
        "word": "letter",
        "meaning": "信件；字母",
        "theme": "學校",
        "sentence": "I wrote a long letter to my pen pal who lives in the USA.",
        "sentenceZh": "我寫了一封長信給住在美國的筆友。"
    },
    {
        "word": "marker",
        "meaning": "麥克筆",
        "theme": "學校",
        "sentence": "The teacher writes clearly on the whiteboard with a black marker.",
        "sentenceZh": "老師用黑色的麥克筆在白板上清楚地寫字。"
    },
    {
        "word": "pen",
        "meaning": "筆",
        "theme": "學校",
        "sentence": "Please sign your name at the bottom with a blue or black pen.",
        "sentenceZh": "請在底部用藍色或黑色原子筆簽名。"
    },
    {
        "word": "pencil",
        "meaning": "鉛筆",
        "theme": "學校",
        "sentence": "Write your answers with a pencil so you can erase them later.",
        "sentenceZh": "用鉛筆寫答案，這樣你等一下才能擦掉。"
    },
    {
        "word": "pencil box",
        "meaning": "鉛筆盒",
        "theme": "學校",
        "sentence": "I keep all my pens, rulers, and erasers inside my pencil box.",
        "sentenceZh": "我把我所有的筆、尺和橡皮擦都收在鉛筆盒裡。"
    },
    {
        "word": "crayon",
        "meaning": "蠟筆",
        "theme": "學校",
        "sentence": "The little girl is drawing a big rainbow with colorful crayons.",
        "sentenceZh": "小女孩正在用彩色蠟筆畫一個大彩虹。"
    },
    {
        "word": "postcard",
        "meaning": "明信片",
        "theme": "學校",
        "sentence": "I will send you a beautiful postcard when I travel to Japan.",
        "sentenceZh": "我去日本旅行時會寄一張美麗的明信片給你。"
    },
    {
        "word": "present",
        "meaning": "禮物",
        "theme": "學校",
        "sentence": "This special birthday present is for you; open it!",
        "sentenceZh": "這份特別的生日禮物是給你的，打開它吧！"
    },
    {
        "word": "ruler",
        "meaning": "尺",
        "theme": "學校",
        "sentence": "Use a plastic ruler to draw a perfectly straight line.",
        "sentenceZh": "用一把塑膠尺畫出一條完美的直線。"
    },
    {
        "word": "backpack",
        "meaning": "背包",
        "theme": "學校",
        "sentence": "I put my heavy textbooks and lunchbox in my school backpack.",
        "sentenceZh": "我把厚重的教科書和午餐盒放進學校背包裡。"
    },
    {
        "word": "pin",
        "meaning": "大頭針",
        "theme": "學校",
        "sentence": "Use a small metal pin to fix the notice on the board.",
        "sentenceZh": "用一根金屬小圖釘把通知單固定在佈告欄上。"
    },
    {
        "word": "classroom",
        "meaning": "教室",
        "theme": "學校",
        "sentence": "Please help keep our classroom clean and tidy every day.",
        "sentenceZh": "請幫忙讓我們的教室每天保持乾淨整潔。"
    },
    {
        "word": "board",
        "meaning": "板子",
        "theme": "學校",
        "sentence": "Look at the English sentences written on the board.",
        "sentenceZh": "看寫在板子上的英文句子。"
    },
    {
        "word": "blackboard",
        "meaning": "黑板",
        "theme": "學校",
        "sentence": "The teacher used white chalk to write grammar rules on the blackboard.",
        "sentenceZh": "老師用白粉筆在黑板上寫文法規則。"
    },
    {
        "word": "chalk",
        "meaning": "粉筆",
        "theme": "學校",
        "sentence": "We need to buy a new box of colored chalk for the art class.",
        "sentenceZh": "我們需要為美術課買一盒新的彩色粉筆。"
    },
    {
        "word": "picture",
        "meaning": "圖片",
        "theme": "學校",
        "sentence": "Draw a cute picture of the noun character on your worksheet.",
        "sentenceZh": "在你的學習單上畫出這個名詞角色的可愛圖片。"
    },
    {
        "word": "problem",
        "meaning": "問題",
        "theme": "學校",
        "sentence": "I can help you solve this difficult math problem.",
        "sentenceZh": "我能幫你解開這道困難的數學題。"
    },
    {
        "word": "question",
        "meaning": "問題",
        "theme": "學校",
        "sentence": "Raise your hand if you have a question about the vocabulary game.",
        "sentenceZh": "如果你對這個單字遊戲有問題請舉手。"
    },
    {
        "word": "conversation",
        "meaning": "對話",
        "theme": "學校",
        "sentence": "We had a long conversation about our favorite badminton players.",
        "sentenceZh": "我們針對最喜歡的羽球選手進行了很長的對話。"
    },
    {
        "word": "seat",
        "meaning": "座位",
        "theme": "學校",
        "sentence": "Please go back to your own seat and sit down quietly.",
        "sentenceZh": "請回到你自己的座位並安靜坐下。"
    },
    {
        "word": "answer",
        "meaning": "回答",
        "theme": "學校",
        "sentence": "Who knows the correct answer to this grammar question?",
        "sentenceZh": "誰知道這道文法題的正確答案？"
    },
    {
        "word": "ask",
        "meaning": "詢問",
        "theme": "學校",
        "sentence": "Don't be afraid to ask the teacher for help if you don't understand.",
        "sentenceZh": "如果不懂，別害怕向老師尋求協助。"
    },
    {
        "word": "behave",
        "meaning": "守規矩",
        "theme": "學校",
        "sentence": "Good students know how to behave well in the classroom.",
        "sentenceZh": "好學生知道在教室裡該如何守規矩。"
    },
    {
        "word": "explain",
        "meaning": "解釋",
        "theme": "學校",
        "sentence": "Can you explain this difficult sentence structure to me again?",
        "sentenceZh": "你能再向我解釋一次這個困難的句型結構嗎？"
    },
    {
        "word": "learn",
        "meaning": "學習",
        "theme": "學校",
        "sentence": "We will learn how to write simple code for a web page today.",
        "sentenceZh": "我們今天將學習如何為網頁寫簡單的程式碼。"
    },
    {
        "word": "listen",
        "meaning": "聆聽",
        "theme": "學校",
        "sentence": "Please listen carefully to the instructions before you start the game.",
        "sentenceZh": "遊戲開始前請仔細聆聽指示。"
    },
    {
        "word": "mark",
        "meaning": "批改",
        "theme": "學校",
        "sentence": "The teacher used a red pen to mark my spelling mistakes.",
        "sentenceZh": "老師用紅筆批改了我的拼字錯誤。"
    },
    {
        "word": "pass",
        "meaning": "通過",
        "theme": "學校",
        "sentence": "Study hard, review the words, and you will pass the test.",
        "sentenceZh": "努力讀書、複習單字，你就會通過考試。"
    },
    {
        "word": "practice",
        "meaning": "練習",
        "theme": "學校",
        "sentence": "If you want to play well, you must practice your badminton swing.",
        "sentenceZh": "如果你想打得好，你必須練習揮拍。"
    },
    {
        "word": "prepare",
        "meaning": "準備",
        "theme": "學校",
        "sentence": "You should prepare well for the big vocabulary test tomorrow.",
        "sentenceZh": "你應該為明天的單字大考好好準備。"
    },
    {
        "word": "pronounce",
        "meaning": "發音",
        "theme": "學校",
        "sentence": "Mr. Wang taught us how to pronounce the new word correctly.",
        "sentenceZh": "王老師教我們如何正確地發音這個新單字。"
    },
    {
        "word": "punish",
        "meaning": "懲罰",
        "theme": "學校",
        "sentence": "The teacher will not punish you if you are honest and tell the truth.",
        "sentenceZh": "如果你誠實說出真相，老師不會懲罰你。"
    },
    {
        "word": "read",
        "meaning": "閱讀",
        "theme": "學校",
        "sentence": "We will read a story about the weather gods today.",
        "sentenceZh": "我們今天要讀一個關於天氣神明的故事。"
    },
    {
        "word": "repeat",
        "meaning": "重複",
        "theme": "學校",
        "sentence": "Please repeat after me: \"Vocabulary passport.\"",
        "sentenceZh": "請跟著我唸一次：「單字護照」。"
    },
    {
        "word": "review",
        "meaning": "複習",
        "theme": "學校",
        "sentence": "Let's take ten minutes to review the words we learned yesterday.",
        "sentenceZh": "我們花十分鐘來複習昨天學的單字吧。"
    },
    {
        "word": "say",
        "meaning": "說",
        "theme": "學校",
        "sentence": "What did you say? I couldn't hear you over the loud noise.",
        "sentenceZh": "你說什麼？噪音太大我聽不見。"
    },
    {
        "word": "speak",
        "meaning": "說話",
        "theme": "學校",
        "sentence": "Don't be afraid to speak English loudly in class!",
        "sentenceZh": "別害怕在課堂上大聲說英文！"
    },
    {
        "word": "spell",
        "meaning": "拼寫",
        "theme": "學校",
        "sentence": "Can you tell me how to spell your English name?",
        "sentenceZh": "你能告訴我你的英文名字怎麼拼嗎？"
    },
    {
        "word": "study",
        "meaning": "研讀",
        "theme": "學校",
        "sentence": "We usually study together in the library after school ends.",
        "sentenceZh": "我們通常在放學後一起在圖書館讀書。"
    },
    {
        "word": "talk",
        "meaning": "談話",
        "theme": "學校",
        "sentence": "Please do not talk to your classmates when the teacher is explaining.",
        "sentenceZh": "老師在講解時請不要和同學說話。"
    },
    {
        "word": "teach",
        "meaning": "教學",
        "theme": "學校",
        "sentence": "Our teacher uses interactive games to teach us grammar.",
        "sentenceZh": "我們的老師用互動遊戲來教我們文法。"
    },
    {
        "word": "underline",
        "meaning": "畫底線",
        "theme": "學校",
        "sentence": "Please use a red pen to underline the verb in this sentence.",
        "sentenceZh": "請用紅筆在這個句子裡的動詞下方畫底線。"
    },
    {
        "word": "understand",
        "meaning": "理解",
        "theme": "學校",
        "sentence": "Do you understand what the rules of this game are?",
        "sentenceZh": "你懂這個遊戲的規則是什麼嗎？"
    },
    {
        "word": "write",
        "meaning": "書寫",
        "theme": "學校",
        "sentence": "We have to write down all the correct answers on the worksheet.",
        "sentenceZh": "我們必須在學習單上寫下所有正確的答案。"
    },
    {
        "word": "draw",
        "meaning": "畫畫",
        "theme": "學校",
        "sentence": "Use a pencil to draw a big circle on the blank paper.",
        "sentenceZh": "用鉛筆在空白紙上畫一個大圓圈。"
    },
    {
        "word": "bakery",
        "meaning": "麵包店",
        "theme": "城鎮",
        "sentence": "I bought some fresh bread from the local bakery.",
        "sentenceZh": "我從當地的麵包店買了一些新鮮的麵包。"
    },
    {
        "word": "bank",
        "meaning": "銀行",
        "theme": "城鎮",
        "sentence": "My mother went to the bank to get some cash.",
        "sentenceZh": "我媽媽去銀行領一些現金。"
    },
    {
        "word": "beach",
        "meaning": "海灘",
        "theme": "城鎮",
        "sentence": "We played volleyball on the beautiful sandy beach.",
        "sentenceZh": "我們在美麗的沙灘上打排球。"
    },
    {
        "word": "bookstore",
        "meaning": "書店",
        "theme": "城鎮",
        "sentence": "I found a good English dictionary at the bookstore.",
        "sentenceZh": "我在書店找到了一本很棒的英文字典。"
    },
    {
        "word": "buffet",
        "meaning": "自助餐",
        "theme": "城鎮",
        "sentence": "We ate a lot of seafood at the buffet restaurant.",
        "sentenceZh": "我們在自助餐廳吃了很多海鮮。"
    },
    {
        "word": "cafeteria",
        "meaning": "自助餐廳",
        "theme": "城鎮",
        "sentence": "Students usually eat their lunch in the school cafeteria.",
        "sentenceZh": "學生通常在學校自助餐廳吃午餐。"
    },
    {
        "word": "castle",
        "meaning": "城堡",
        "theme": "城鎮",
        "sentence": "The king and queen lived in a huge stone castle.",
        "sentenceZh": "國王和女王住在一座巨大的石頭城堡裡。"
    },
    {
        "word": "church",
        "meaning": "教堂",
        "theme": "城鎮",
        "sentence": "We saw a beautiful old church in the center of the town.",
        "sentenceZh": "我們在鎮中心看到了一座美麗的古老教堂。"
    },
    {
        "word": "city",
        "meaning": "城市",
        "theme": "城鎮",
        "sentence": "Douliu is a very convenient city to live in.",
        "sentenceZh": "斗六是個生活非常便利的城市。"
    },
    {
        "word": "company",
        "meaning": "公司",
        "theme": "城鎮",
        "sentence": "His father works for a large computer company.",
        "sentenceZh": "他爸爸在一家大型電腦公司上班。"
    },
    {
        "word": "convenience store",
        "meaning": "便利商店",
        "theme": "城鎮",
        "sentence": "I bought a cold drink from the convenience store.",
        "sentenceZh": "我在便利商店買了一杯冷飲。"
    },
    {
        "word": "country",
        "meaning": "國家；鄉下",
        "theme": "城鎮",
        "sentence": "Taiwan is a very beautiful country with friendly people.",
        "sentenceZh": "台灣是一個非常美麗且人民友善的國家。"
    },
    {
        "word": "culture center",
        "meaning": "文化中心",
        "theme": "城鎮",
        "sentence": "We watched a dance show at the culture center.",
        "sentenceZh": "我們在文化中心看了一場舞蹈表演。"
    },
    {
        "word": "department store",
        "meaning": "百貨公司",
        "theme": "城鎮",
        "sentence": "My sister bought a new dress at the department store.",
        "sentenceZh": "我姐姐在百貨公司買了一件新洋裝。"
    },
    {
        "word": "downtown",
        "meaning": "市中心",
        "theme": "城鎮",
        "sentence": "There are many shops and restaurants downtown.",
        "sentenceZh": "市中心有許多商店和餐廳。"
    },
    {
        "word": "drugstore",
        "meaning": "藥局",
        "theme": "城鎮",
        "sentence": "You can buy basic medicine at the drugstore.",
        "sentenceZh": "你可以在藥局買到基本藥物。"
    },
    {
        "word": "factory",
        "meaning": "工廠",
        "theme": "城鎮",
        "sentence": "They make sports shoes in that large factory.",
        "sentenceZh": "他們在那間大工廠裡製造運動鞋。"
    },
    {
        "word": "farm",
        "meaning": "農場",
        "theme": "城鎮",
        "sentence": "The farmer grows cabbages and sweet potatoes on his farm.",
        "sentenceZh": "農夫在他的農場裡種高麗菜和地瓜。"
    },
    {
        "word": "fast food restaurant",
        "meaning": "速食餐廳",
        "theme": "城鎮",
        "sentence": "Kids love eating French fries at the fast food restaurant.",
        "sentenceZh": "孩子們喜歡在速食餐廳吃薯條。"
    },
    {
        "word": "fire station",
        "meaning": "消防局",
        "theme": "城鎮",
        "sentence": "The red fire trucks rushed out of the fire station.",
        "sentenceZh": "紅色的消防車從消防局衝了出來。"
    },
    {
        "word": "flower shop",
        "meaning": "花店",
        "theme": "城鎮",
        "sentence": "He bought some red roses at the flower shop.",
        "sentenceZh": "他在花店買了一些紅玫瑰。"
    },
    {
        "word": "hospital",
        "meaning": "醫院",
        "theme": "城鎮",
        "sentence": "The doctors and nurses work long hours in the hospital.",
        "sentenceZh": "醫生和護士在醫院裡長時間工作。"
    },
    {
        "word": "hotel",
        "meaning": "飯店",
        "theme": "城鎮",
        "sentence": "We stayed in a nice hotel during our trip to Japan.",
        "sentenceZh": "我們去日本旅行時住在一間很棒的飯店。"
    },
    {
        "word": "kingdom",
        "meaning": "王國",
        "theme": "城鎮",
        "sentence": "The brave prince saved the kingdom from the giant.",
        "sentenceZh": "勇敢的王子從巨人手中拯救了王國。"
    },
    {
        "word": "mall",
        "meaning": "購物中心",
        "theme": "城鎮",
        "sentence": "We spent the whole afternoon shopping at the big mall.",
        "sentenceZh": "我們整個下午都在大型購物中心裡逛街。"
    },
    {
        "word": "market",
        "meaning": "市場",
        "theme": "城鎮",
        "sentence": "My mom goes to the traditional market to buy fresh vegetables.",
        "sentenceZh": "我媽媽去傳統市場買新鮮的蔬菜。"
    },
    {
        "word": "men’s room",
        "meaning": "男廁",
        "theme": "城鎮",
        "sentence": "The men’s room is on the right side of the hall.",
        "sentenceZh": "男廁在走廊的右側。"
    },
    {
        "word": "movie theater",
        "meaning": "電影院",
        "theme": "城鎮",
        "sentence": "We bought popcorn before entering the movie theater.",
        "sentenceZh": "我們進電影院前買了爆米花。"
    },
    {
        "word": "museum",
        "meaning": "博物館",
        "theme": "城鎮",
        "sentence": "We saw many old dinosaur bones in the museum.",
        "sentenceZh": "我們在博物館裡看到許多古老的恐龍骨頭。"
    },
    {
        "word": "office",
        "meaning": "辦公室",
        "theme": "城鎮",
        "sentence": "The teachers are working hard to prepare lessons in the office.",
        "sentenceZh": "老師們正在辦公室裡努力準備課程。"
    },
    {
        "word": "park",
        "meaning": "公園",
        "theme": "城鎮",
        "sentence": "I jog and play badminton in the park every evening.",
        "sentenceZh": "我每天傍晚都在公園慢跑和打羽毛球。"
    },
    {
        "word": "place",
        "meaning": "地方",
        "theme": "城鎮",
        "sentence": "This coffee shop is a great place to sit down and read a book.",
        "sentenceZh": "這家咖啡廳是個坐下來看書的好地方。"
    },
    {
        "word": "police station",
        "meaning": "警察局",
        "theme": "城鎮",
        "sentence": "You can ask for help at the police station if you are lost.",
        "sentenceZh": "如果你迷路了，可以去警察局尋求協助。"
    },
    {
        "word": "pool",
        "meaning": "游泳池",
        "theme": "城鎮",
        "sentence": "We went swimming in the public pool yesterday afternoon.",
        "sentenceZh": "我們昨天下午去公共游泳池游泳。"
    },
    {
        "word": "post office",
        "meaning": "郵局",
        "theme": "城鎮",
        "sentence": "I need to buy some stamps to mail a letter at the post office.",
        "sentenceZh": "我需要去郵局買些郵票來寄信。"
    },
    {
        "word": "restaurant",
        "meaning": "餐廳",
        "theme": "城鎮",
        "sentence": "We celebrated my birthday at a nice Italian restaurant.",
        "sentenceZh": "我們在一家很棒的義大利餐廳慶祝我的生日。"
    },
    {
        "word": "restroom",
        "meaning": "洗手間",
        "theme": "城鎮",
        "sentence": "Excuse me, where is the nearest restroom?",
        "sentenceZh": "不好意思，請問最近的洗手間在哪裡？"
    },
    {
        "word": "road",
        "meaning": "陸",
        "theme": "城鎮",
        "sentence": "Please look both ways when you cross the busy road.",
        "sentenceZh": "過這條繁忙的馬路時請看左右兩邊。"
    },
    {
        "word": "shop",
        "meaning": "商店",
        "theme": "城鎮",
        "sentence": "There is a new stationery shop near our school.",
        "sentenceZh": "學校附近有一間新的文具店。"
    },
    {
        "word": "stationery store",
        "meaning": "文具店",
        "theme": "城鎮",
        "sentence": "I bought two red pens and an eraser at the stationery store.",
        "sentenceZh": "我在文具店買了兩支紅筆和一個橡皮擦。"
    },
    {
        "word": "store",
        "meaning": "商店",
        "theme": "城鎮",
        "sentence": "This store sells a lot of cool 80s music albums.",
        "sentenceZh": "這家商店賣很多酷炫的 80 年代音樂專輯。"
    },
    {
        "word": "street",
        "meaning": "街",
        "theme": "城鎮",
        "sentence": "The street in front of my house is very quiet at night.",
        "sentenceZh": "我家門前的街道在晚上非常安靜。"
    },
    {
        "word": "supermarket",
        "meaning": "超市",
        "theme": "城鎮",
        "sentence": "We bought milk and fresh eggs at the supermarket.",
        "sentenceZh": "我們在超市買了牛奶和新鮮雞蛋。"
    },
    {
        "word": "temple",
        "meaning": "寺廟",
        "theme": "城鎮",
        "sentence": "Many people visit the temple to pray during the Chinese New Year.",
        "sentenceZh": "許多人在春節期間會去寺廟拜拜。"
    },
    {
        "word": "theater",
        "meaning": "劇院",
        "theme": "城鎮",
        "sentence": "We watched a wonderful play at the national theater.",
        "sentenceZh": "我們在國家劇院看了一齣精彩的戲劇。"
    },
    {
        "word": "tower",
        "meaning": "塔",
        "theme": "城鎮",
        "sentence": "Taipei 101 is a very famous and tall tower.",
        "sentenceZh": "台北 101 是一座非常有名且高聳的塔。"
    },
    {
        "word": "town",
        "meaning": "城鎮",
        "theme": "城鎮",
        "sentence": "Dounan is a lovely little town.",
        "sentenceZh": "斗南是個可愛的小鎮。"
    },
    {
        "word": "tunnel",
        "meaning": "隧道",
        "theme": "城鎮",
        "sentence": "The fast train went through a long dark tunnel.",
        "sentenceZh": "高鐵穿過了一條長長黑黑的隧道。"
    },
    {
        "word": "village",
        "meaning": "村莊",
        "theme": "城鎮",
        "sentence": "My grandparents live in a quiet little village by the sea.",
        "sentenceZh": "我祖父母住在海邊一個安靜的小村莊。"
    },
    {
        "word": "waterfalls",
        "meaning": "瀑布",
        "theme": "城鎮",
        "sentence": "The tall waterfalls deep in the mountains are beautiful.",
        "sentenceZh": "深山裡高聳的瀑布非常美麗。"
    },
    {
        "word": "women’s room",
        "meaning": "女廁",
        "theme": "城鎮",
        "sentence": "The women’s room is right next to the elevator.",
        "sentenceZh": "女廁就在電梯旁邊。"
    },
    {
        "word": "zoo",
        "meaning": "動物園",
        "theme": "城鎮",
        "sentence": "We saw lions, monkeys, and giraffes at the city zoo.",
        "sentenceZh": "我們在市立動物園看到了獅子、猴子和長頸鹿。"
    },
    {
        "word": "airlines",
        "meaning": "航空公司",
        "theme": "交通",
        "sentence": "Which airlines are you taking to fly to America?",
        "sentenceZh": "你打算搭哪家航空公司的飛機去美國？"
    },
    {
        "word": "airplane",
        "meaning": "飛機",
        "theme": "交通",
        "sentence": "The huge airplane took off safely into the blue sky.",
        "sentenceZh": "巨大的飛機安全地起飛進入藍天中。"
    },
    {
        "word": "airport",
        "meaning": "機場",
        "theme": "交通",
        "sentence": "We arrived at the airport two hours early for our flight.",
        "sentenceZh": "為了搭機，我們提早兩小時抵達機場。"
    },
    {
        "word": "ambulance",
        "meaning": "救護車",
        "theme": "交通",
        "sentence": "The ambulance quickly took the sick man to the hospital.",
        "sentenceZh": "救護車迅速地把病人送往醫院。"
    },
    {
        "word": "bicycle",
        "meaning": "腳踏車",
        "theme": "交通",
        "sentence": "I ride my bicycle to school with my classmates every day.",
        "sentenceZh": "我每天和同學一起騎腳踏車上學。"
    },
    {
        "word": "bike",
        "meaning": "腳踏車",
        "theme": "交通",
        "sentence": "Don't forget to lock your bike when you park it.",
        "sentenceZh": "停好腳踏車時別忘了上鎖。"
    },
    {
        "word": "block",
        "meaning": "街區",
        "theme": "交通",
        "sentence": "Walk straight for one block and then turn left.",
        "sentenceZh": "往前直走一個街區，然後左轉。"
    },
    {
        "word": "boat",
        "meaning": "船",
        "theme": "交通",
        "sentence": "We rented a small boat to row on the beautiful lake.",
        "sentenceZh": "我們租了一艘小船在美麗的湖上划。"
    },
    {
        "word": "bridge",
        "meaning": "橋樑",
        "theme": "交通",
        "sentence": "The train slowly crossed the long iron bridge.",
        "sentenceZh": "火車緩慢地駛過長長的鐵橋。"
    },
    {
        "word": "bus",
        "meaning": "公車",
        "theme": "交通",
        "sentence": "I ran fast because I almost missed the school bus this morning.",
        "sentenceZh": "我跑得很快，因為今天早上我差點錯過校車。"
    },
    {
        "word": "bus stop",
        "meaning": "公車站",
        "theme": "交通",
        "sentence": "There are many people standing and waiting at the bus stop.",
        "sentenceZh": "許多人站著在公車站等車。"
    },
    {
        "word": "car",
        "meaning": "汽車",
        "theme": "交通",
        "sentence": "My dad washed his white car carefully on Sunday morning.",
        "sentenceZh": "我爸爸在星期日早上仔細地洗了他的白車。"
    },
    {
        "word": "flat tire",
        "meaning": "爆胎",
        "theme": "交通",
        "sentence": "We couldn't drive to Taipei because the car had a flat tire.",
        "sentenceZh": "我們無法開車去台北，因為汽車爆胎了。"
    },
    {
        "word": "flight",
        "meaning": "飛行；航班",
        "theme": "交通",
        "sentence": "Our flight to Japan was delayed by the strong typhoon.",
        "sentenceZh": "我們飛往日本的航班因為強烈颱風而延誤了。"
    },
    {
        "word": "helicopter",
        "meaning": "直升機",
        "theme": "交通",
        "sentence": "The rescue helicopter flew low over the mountains.",
        "sentenceZh": "救援直升機低空飛過群山。"
    },
    {
        "word": "highway",
        "meaning": "高速公路",
        "theme": "交通",
        "sentence": "Cars are allowed to drive very fast on the highway.",
        "sentenceZh": "汽車在高速公路上可以開得非常快。"
    },
    {
        "word": "jeep",
        "meaning": "吉普車",
        "theme": "交通",
        "sentence": "They drove a strong green jeep through the jungle.",
        "sentenceZh": "他們開著一輛堅固的綠色吉普車穿過叢林。"
    },
    {
        "word": "metro",
        "meaning": "地鐵",
        "theme": "交通",
        "sentence": "The metro is a very fast and clean way to travel in the city.",
        "sentenceZh": "地鐵是城市裡非常快速且乾淨的旅行方式。"
    },
    {
        "word": "motorcycle",
        "meaning": "摩托車",
        "theme": "交通",
        "sentence": "You must wear a helmet to protect your head when riding a motorcycle.",
        "sentenceZh": "騎摩托車時必須戴安全帽來保護頭部。"
    },
    {
        "word": "MRT",
        "meaning": "捷運",
        "theme": "交通",
        "sentence": "I often take the MRT when I visit my relatives in Taipei.",
        "sentenceZh": "我去台北拜訪親戚時經常搭捷運。"
    },
    {
        "word": "overpass",
        "meaning": "天橋；陸橋",
        "theme": "交通",
        "sentence": "Use the overpass to cross the busy street safely.",
        "sentenceZh": "請走天橋以安全地穿越這條繁忙的街道。"
    },
    {
        "word": "parking lot",
        "meaning": "停車場",
        "theme": "交通",
        "sentence": "The supermarket parking lot is totally full on weekends.",
        "sentenceZh": "超市的停車場在週末總是全滿。"
    },
    {
        "word": "passenger",
        "meaning": "乘客",
        "theme": "交通",
        "sentence": "The train had many passengers going home for the holidays.",
        "sentenceZh": "火車上有許多要回家過節的乘客。"
    },
    {
        "word": "path",
        "meaning": "小徑",
        "theme": "交通",
        "sentence": "We walked along a small dirt path in the woods.",
        "sentenceZh": "我們沿著樹林裡的一條小泥巴路走。"
    },
    {
        "word": "platform",
        "meaning": "月台",
        "theme": "交通",
        "sentence": "The express train will arrive at platform number two soon.",
        "sentenceZh": "快速列車很快就會抵達第二月台。"
    },
    {
        "word": "railroad",
        "meaning": "鐵路",
        "theme": "交通",
        "sentence": "The railroad connects many small towns in Taiwan together.",
        "sentenceZh": "鐵路將台灣許多小鎮連接在一起。"
    },
    {
        "word": "railway",
        "meaning": "鐵道",
        "theme": "交通",
        "sentence": "Taking a trip on the Taiwan railway is very relaxing.",
        "sentenceZh": "搭乘台灣鐵道旅行非常令人放鬆。"
    },
    {
        "word": "scooter",
        "meaning": "速克達；小摩托車",
        "theme": "交通",
        "sentence": "Many teachers ride scooters to get to school quickly.",
        "sentenceZh": "許多老師騎機車以快速抵達學校。"
    },
    {
        "word": "ship",
        "meaning": "船（大船）",
        "theme": "交通",
        "sentence": "The huge cargo ship sailed slowly across the ocean.",
        "sentenceZh": "巨大的貨輪緩慢地航行過海洋。"
    },
    {
        "word": "sidewalk",
        "meaning": "人行道",
        "theme": "交通",
        "sentence": "Please walk carefully on the sidewalk for your own safety.",
        "sentenceZh": "為了你的安全，請小心走在人行道上。"
    },
    {
        "word": "station",
        "meaning": "車站",
        "theme": "交通",
        "sentence": "I will meet you at the Dounan train station at five o'clock.",
        "sentenceZh": "我五點在斗南火車站跟你碰面。"
    },
    {
        "word": "subway",
        "meaning": "地鐵",
        "theme": "交通",
        "sentence": "Taking the subway is very easy when you travel in New York.",
        "sentenceZh": "去紐約旅行時，搭地鐵非常簡單。"
    },
    {
        "word": "tank",
        "meaning": "坦克車",
        "theme": "交通",
        "sentence": "We saw a heavy military tank displayed in the museum.",
        "sentenceZh": "我們在博物館看到展示著一輛重型軍事坦克車。"
    },
    {
        "word": "taxi",
        "meaning": "計程車",
        "theme": "交通",
        "sentence": "We took a yellow taxi because it was raining heavily outside.",
        "sentenceZh": "因為外面下大雨，我們搭了一輛黃色計程車。"
    },
    {
        "word": "traffic",
        "meaning": "交通",
        "theme": "交通",
        "sentence": "The traffic is always very bad during the morning rush hour.",
        "sentenceZh": "早上尖峰時間的交通總是非常糟。"
    },
    {
        "word": "train",
        "meaning": "火車",
        "theme": "交通",
        "sentence": "The fast train arrived in Taichung in just forty minutes.",
        "sentenceZh": "快車只花了四十分鐘就抵達台中。"
    },
    {
        "word": "train station",
        "meaning": "火車站",
        "theme": "交通",
        "sentence": "Dounan train station is a beautiful historic building.",
        "sentenceZh": "斗南火車站是一棟美麗的歷史建築。"
    },
    {
        "word": "truck",
        "meaning": "卡車",
        "theme": "交通",
        "sentence": "The big delivery truck carried a lot of fresh vegetables.",
        "sentenceZh": "大貨車載了很多新鮮蔬菜。"
    },
    {
        "word": "underpass",
        "meaning": "地下道",
        "theme": "交通",
        "sentence": "We walked through the dark underpass to get to the other side.",
        "sentenceZh": "我們走過昏暗的地下道來到另一邊。"
    },
    {
        "word": "wheel",
        "meaning": "輪子",
        "theme": "交通",
        "sentence": "My bicycle front wheel is broken and needs to be fixed.",
        "sentenceZh": "我的腳踏車前輪壞了，需要修理。"
    },
    {
        "word": "arrive",
        "meaning": "到達",
        "theme": "交通",
        "sentence": "Director Lee will arrive at our school tomorrow morning.",
        "sentenceZh": "李主任明天早上會抵達我們學校。"
    },
    {
        "word": "cross",
        "meaning": "穿越",
        "theme": "交通",
        "sentence": "Look both left and right before you cross the street.",
        "sentenceZh": "過馬路前要先看左邊和右邊。"
    },
    {
        "word": "drive",
        "meaning": "開車",
        "theme": "交通",
        "sentence": "My uncle learned how to drive a car when he was 18.",
        "sentenceZh": "我叔叔十八歲時學會了如何開車。"
    },
    {
        "word": "fly",
        "meaning": "飛行",
        "theme": "交通",
        "sentence": "Birds use their strong wings to fly high in the sky.",
        "sentenceZh": "鳥類用強壯的翅膀在高空飛行。"
    },
    {
        "word": "land",
        "meaning": "降落",
        "theme": "交通",
        "sentence": "The airplane will land at the airport in ten minutes.",
        "sentenceZh": "飛機將在十分鐘後降落於機場。"
    },
    {
        "word": "ride",
        "meaning": "騎乘；搭乘",
        "theme": "交通",
        "sentence": "I like to ride my bike along the riverbank on weekends.",
        "sentenceZh": "我週末喜歡沿著河岸騎腳踏車。"
    },
    {
        "word": "sail",
        "meaning": "航行",
        "theme": "交通",
        "sentence": "The small boat will sail out to the sea early tomorrow.",
        "sentenceZh": "小船明早將航向大海。"
    },
    {
        "word": "turn",
        "meaning": "轉彎",
        "theme": "交通",
        "sentence": "Keep walking straight and turn right at the next corner.",
        "sentenceZh": "繼續直走，然後在下一個路口右轉。"
    },
    {
        "word": "beef",
        "meaning": "牛肉",
        "theme": "食物",
        "sentence": "I ordered a big bowl of beef noodles for lunch today.",
        "sentenceZh": "我今天午餐點了一大碗牛肉麵。"
    },
    {
        "word": "bread",
        "meaning": "麵包",
        "theme": "食物",
        "sentence": "I usually eat some bread and drink milk for breakfast.",
        "sentenceZh": "我早餐通常吃一些麵包並喝牛奶。"
    },
    {
        "word": "breakfast",
        "meaning": "早餐",
        "theme": "食物",
        "sentence": "Eating a healthy breakfast gives you energy for the morning.",
        "sentenceZh": "吃一頓健康的早餐能為你的早晨帶來活力。"
    },
    {
        "word": "brunch",
        "meaning": "早午餐",
        "theme": "食物",
        "sentence": "We had a nice brunch together late on Sunday morning.",
        "sentenceZh": "我們星期日快中午時一起吃了頓美好的早午餐。"
    },
    {
        "word": "bun",
        "meaning": "小圓麵包",
        "theme": "食物",
        "sentence": "My grandmother makes delicious steamed pork buns.",
        "sentenceZh": "我奶奶做的豬肉包子非常美味。"
    },
    {
        "word": "burger",
        "meaning": "漢堡",
        "theme": "食物",
        "sentence": "He was so hungry that he ate a huge cheese burger.",
        "sentenceZh": "他餓到吃下了一個巨大的起司漢堡。"
    },
    {
        "word": "cereal",
        "meaning": "穀物麥片",
        "theme": "食物",
        "sentence": "I usually have chocolate cereal with cold milk in the morning.",
        "sentenceZh": "我早上通常吃巧克力麥片配冷牛奶。"
    },
    {
        "word": "chicken",
        "meaning": "雞肉",
        "theme": "食物",
        "sentence": "We had fried chicken and rice for dinner last night.",
        "sentenceZh": "我們昨晚晚餐吃了炸雞和白飯。"
    },
    {
        "word": "dinner",
        "meaning": "晚餐",
        "theme": "食物",
        "sentence": "Let's cook a delicious family dinner together tonight.",
        "sentenceZh": "我們今晚一起煮一頓美味的家庭晚餐吧。"
    },
    {
        "word": "dumpling",
        "meaning": "餃子",
        "theme": "食物",
        "sentence": "People in Taiwan often eat dumplings during the Chinese New Year.",
        "sentenceZh": "台灣人經常在農曆新年時吃水餃。"
    },
    {
        "word": "egg",
        "meaning": "蛋",
        "theme": "食物",
        "sentence": "I need two eggs and some flour to make this cake.",
        "sentenceZh": "我需要兩顆蛋和一些麵粉來做這個蛋糕。"
    },
    {
        "word": "fast food",
        "meaning": "速食",
        "theme": "食物",
        "sentence": "Eating too much fast food is bad for your health.",
        "sentenceZh": "吃太多速食對你的健康不好。"
    },
    {
        "word": "fish",
        "meaning": "魚",
        "theme": "食物",
        "sentence": "My grandfather likes to eat steamed fish with ginger.",
        "sentenceZh": "我爺爺喜歡吃清蒸薑絲魚。"
    },
    {
        "word": "flour",
        "meaning": "麵粉",
        "theme": "食物",
        "sentence": "You need water and white flour to make fresh bread.",
        "sentenceZh": "你需要水和白麵粉來做新鮮麵包。"
    },
    {
        "word": "food",
        "meaning": "食物",
        "theme": "食物",
        "sentence": "The food at this night market is very famous and delicious.",
        "sentenceZh": "這個夜市的食物非常有名且美味。"
    },
    {
        "word": "fries",
        "meaning": "薯條",
        "theme": "食物",
        "sentence": "Would you like some hot fries with your hamburger?",
        "sentenceZh": "你的漢堡要配一點熱薯條嗎？"
    },
    {
        "word": "French fries",
        "meaning": "薯條",
        "theme": "食物",
        "sentence": "Kids love to eat crispy French fries with sweet ketchup.",
        "sentenceZh": "孩子們喜歡吃酥脆的薯條配甜甜的番茄醬。"
    },
    {
        "word": "ham",
        "meaning": "火腿",
        "theme": "食物",
        "sentence": "I made a simple ham and cheese sandwich for my lunch.",
        "sentenceZh": "我為我的午餐做了一個簡單的火腿起司三明治。"
    },
    {
        "word": "hamburger",
        "meaning": "漢堡",
        "theme": "食物",
        "sentence": "He ordered a big beef hamburger and a cola at the restaurant.",
        "sentenceZh": "他在餐廳點了一個大牛肉漢堡和一杯可樂。"
    },
    {
        "word": "hot dog",
        "meaning": "熱狗",
        "theme": "食物",
        "sentence": "We bought a hot dog on a stick at the convenience store.",
        "sentenceZh": "我們在便利商店買了一支熱狗。"
    },
    {
        "word": "instant noodle",
        "meaning": "泡麵",
        "theme": "食物",
        "sentence": "I cooked some instant noodles because I was hungry late at night.",
        "sentenceZh": "因為深夜肚子餓，我煮了一些泡麵。"
    },
    {
        "word": "lunch",
        "meaning": "午餐",
        "theme": "食物",
        "sentence": "We usually finish the fourth class and have lunch at twelve o'clock.",
        "sentenceZh": "我們通常上完第四節課後在十二點吃午餐。"
    },
    {
        "word": "meal",
        "meaning": "一餐",
        "theme": "食物",
        "sentence": "Breakfast is considered the most important meal of the day.",
        "sentenceZh": "早餐被認為是一天中最重要的一餐。"
    },
    {
        "word": "meat",
        "meaning": "肉",
        "theme": "食物",
        "sentence": "Do you prefer to eat meat or vegetables for dinner?",
        "sentenceZh": "你晚餐比較喜歡吃肉還是蔬菜？"
    },
    {
        "word": "noodle",
        "meaning": "麵條",
        "theme": "食物",
        "sentence": "This bowl of beef noodles is a little bit too spicy for me.",
        "sentenceZh": "這碗牛肉麵對我來說有點太辣了。"
    },
    {
        "word": "pizza",
        "meaning": "披薩",
        "theme": "食物",
        "sentence": "We ordered a large pizza with extra cheese for the party.",
        "sentenceZh": "我們為了派對點了一個加起司的大披薩。"
    },
    {
        "word": "pork",
        "meaning": "豬肉",
        "theme": "食物",
        "sentence": "My mother bought some fresh pork at the traditional market.",
        "sentenceZh": "我媽媽在傳統市場買了一些新鮮豬肉。"
    },
    {
        "word": "rice",
        "meaning": "米飯",
        "theme": "食物",
        "sentence": "People in Taiwan eat a lot of rice every day.",
        "sentenceZh": "台灣人每天吃很多米飯。"
    },
    {
        "word": "salad",
        "meaning": "沙拉",
        "theme": "食物",
        "sentence": "She ordered a fruit salad because she wants to eat healthy.",
        "sentenceZh": "她點了一份水果沙拉因為她想吃得健康。"
    },
    {
        "word": "sandwich",
        "meaning": "三明治",
        "theme": "食物",
        "sentence": "I brought a chicken sandwich in my lunchbox today.",
        "sentenceZh": "我今天午餐盒裡帶了一個雞肉三明治。"
    },
    {
        "word": "seafood",
        "meaning": "海鮮",
        "theme": "食物",
        "sentence": "I love eating shrimp, fish, and other fresh seafood.",
        "sentenceZh": "我喜歡吃蝦子、魚和其他新鮮海鮮。"
    },
    {
        "word": "shrimp",
        "meaning": "蝦",
        "theme": "食物",
        "sentence": "We had some delicious grilled shrimp for dinner.",
        "sentenceZh": "我們晚餐吃了美味的烤蝦。"
    },
    {
        "word": "snack",
        "meaning": "點心",
        "theme": "食物",
        "sentence": "I always have a little snack after finishing my homework.",
        "sentenceZh": "我寫完作業後總會吃點小點心。"
    },
    {
        "word": "soup",
        "meaning": "湯",
        "theme": "食物",
        "sentence": "This hot chicken soup is perfect for a cold winter night.",
        "sentenceZh": "這碗熱雞湯非常適合寒冷的冬夜。"
    },
    {
        "word": "spaghetti",
        "meaning": "義大利麵",
        "theme": "食物",
        "sentence": "They serve great Italian spaghetti at that corner restaurant.",
        "sentenceZh": "轉角那家餐廳供應很棒的義大利麵。"
    },
    {
        "word": "steak",
        "meaning": "牛排",
        "theme": "食物",
        "sentence": "He ate a big piece of steak to celebrate his good test score.",
        "sentenceZh": "他吃了一大塊牛排來慶祝他考了高分。"
    },
    {
        "word": "supper",
        "meaning": "消夜",
        "theme": "食物",
        "sentence": "We had a late supper after watching the midnight movie.",
        "sentenceZh": "我們看完午夜場電影後吃了一頓消夜。"
    },
    {
        "word": "tofu",
        "meaning": "豆腐",
        "theme": "食物",
        "sentence": "Stinky tofu is a very famous street food in Taiwan night markets.",
        "sentenceZh": "臭豆腐是台灣夜市非常有名的街邊小吃。"
    },
    {
        "word": "bitter",
        "meaning": "苦的",
        "theme": "食物",
        "sentence": "This black coffee is too bitter; I need to add some sugar.",
        "sentenceZh": "這杯黑咖啡太苦了，我需要加點糖。"
    },
    {
        "word": "delicious",
        "meaning": "美味的",
        "theme": "食物",
        "sentence": "The chocolate cake your mother baked was very delicious.",
        "sentenceZh": "你媽媽烤的巧克力蛋糕非常美味。"
    },
    {
        "word": "full",
        "meaning": "飽的",
        "theme": "食物",
        "sentence": "I can't eat another piece of pizza; I am already full.",
        "sentenceZh": "我吃不下另一片披薩了，我已經很飽了。"
    },
    {
        "word": "hot",
        "meaning": "辣的；熱的",
        "theme": "食物",
        "sentence": "Be careful, the soup is very hot, don't burn your tongue!",
        "sentenceZh": "小心，湯非常熱，別燙到舌頭！"
    },
    {
        "word": "hungry",
        "meaning": "餓的",
        "theme": "食物",
        "sentence": "I feel very hungry after running the 100-meter relay race.",
        "sentenceZh": "跑完一百公尺接力賽後我覺得非常餓。"
    },
    {
        "word": "sour",
        "meaning": "酸的",
        "theme": "食物",
        "sentence": "The yellow lemon is way too sour to eat directly.",
        "sentenceZh": "黃檸檬直接吃實在太酸了。"
    },
    {
        "word": "sweet",
        "meaning": "甜的",
        "theme": "食物",
        "sentence": "This dessert is a little bit too sweet for my taste.",
        "sentenceZh": "這個甜點對我的口味來說有點太甜了。"
    },
    {
        "word": "thirsty",
        "meaning": "渴的",
        "theme": "食物",
        "sentence": "Drink some water right now if you feel thirsty.",
        "sentenceZh": "如果你覺得渴，現在就喝點水。"
    },
    {
        "word": "yummy",
        "meaning": "好吃的",
        "theme": "食物",
        "sentence": "The fried chicken smells really yummy; I want some!",
        "sentenceZh": "炸雞聞起來真的好好吃，我想要吃一點！"
    },
    {
        "word": "butter",
        "meaning": "奶油",
        "theme": "調味料與茶點",
        "sentence": "She spread some yellow butter on her warm morning toast.",
        "sentenceZh": "她在她溫熱的早晨吐司上抹了一些黃奶油。"
    },
    {
        "word": "cream",
        "meaning": "鮮奶油",
        "theme": "調味料與茶點",
        "sentence": "I like to put some sweet cream on top of my coffee.",
        "sentenceZh": "我喜歡在我的咖啡上面加一些鮮奶油。"
    },
    {
        "word": "jam",
        "meaning": "果醬",
        "theme": "調味料與茶點",
        "sentence": "I like strawberry jam better than butter on my bread.",
        "sentenceZh": "在麵包上，我喜歡草莓果醬勝過奶油。"
    },
    {
        "word": "ketchup",
        "meaning": "番茄醬",
        "theme": "調味料與茶點",
        "sentence": "Do you want to dip your French fries in some ketchup?",
        "sentenceZh": "你的薯條想沾點番茄醬嗎？"
    },
    {
        "word": "oil",
        "meaning": "油",
        "theme": "調味料與茶點",
        "sentence": "Add a little cooking oil to the pan before frying the egg.",
        "sentenceZh": "煎蛋前在平底鍋裡加一點食用油。"
    },
    {
        "word": "pepper",
        "meaning": "胡椒",
        "theme": "調味料與茶點",
        "sentence": "Can you pass me the salt and black pepper, please?",
        "sentenceZh": "麻煩你把鹽和黑胡椒遞給我好嗎？"
    },
    {
        "word": "powder",
        "meaning": "粉末",
        "theme": "調味料與茶點",
        "sentence": "We added some cocoa powder to make delicious chocolate milk.",
        "sentenceZh": "我們加了一些可可粉來做美味的巧克力牛奶。"
    },
    {
        "word": "salt",
        "meaning": "鹽",
        "theme": "調味料與茶點",
        "sentence": "This chicken soup is a bit boring; it needs a little more salt.",
        "sentenceZh": "這碗雞湯有點沒味道，需要再加點鹽。"
    },
    {
        "word": "soy sauce",
        "meaning": "醬油",
        "theme": "調味料與茶點",
        "sentence": "Boiled dumplings taste great when you dip them in soy sauce.",
        "sentenceZh": "水餃沾醬油吃起來味道很棒。"
    },
    {
        "word": "sugar",
        "meaning": "糖",
        "theme": "調味料與茶點",
        "sentence": "Eating too much sugar is very bad for your teeth.",
        "sentenceZh": "吃太多糖對你的牙齒非常不好。"
    },
    {
        "word": "vinegar",
        "meaning": "醋",
        "theme": "調味料與茶點",
        "sentence": "You can add some black vinegar to the hot soup to make it tasty.",
        "sentenceZh": "你可以加一些黑醋到熱湯裡讓它更美味。"
    },
    {
        "word": "beer",
        "meaning": "啤酒",
        "theme": "調味料與茶點",
        "sentence": "Remember, only adults are allowed to drink beer.",
        "sentenceZh": "記住，只有成年人才被允許喝啤酒。"
    },
    {
        "word": "coffee",
        "meaning": "咖啡",
        "theme": "調味料與茶點",
        "sentence": "My teacher drinks a hot cup of coffee every morning to wake up.",
        "sentenceZh": "我的老師每天早上喝一杯熱咖啡來提神。"
    },
    {
        "word": "cola",
        "meaning": "可樂",
        "theme": "調味料與茶點",
        "sentence": "He drank a cold can of cola after the exciting basketball game.",
        "sentenceZh": "他在刺激的籃球比賽後喝了一罐冰可樂。"
    },
    {
        "word": "juice",
        "meaning": "果汁",
        "theme": "調味料與茶點",
        "sentence": "Fresh orange juice has a lot of vitamin C to keep you healthy.",
        "sentenceZh": "新鮮柳橙汁有許多維他命C能讓你保持健康。"
    },
    {
        "word": "milk",
        "meaning": "牛奶",
        "theme": "調味料與茶點",
        "sentence": "Children should drink warm milk every day to grow taller.",
        "sentenceZh": "孩子們每天應該喝溫牛奶才能長高。"
    },
    {
        "word": "milk shake",
        "meaning": "奶昔",
        "theme": "調味料與茶點",
        "sentence": "I ordered a sweet strawberry milk shake at the fast food restaurant.",
        "sentenceZh": "我在速食餐廳點了一杯甜甜的草莓奶昔。"
    },
    {
        "word": "soda",
        "meaning": "汽水",
        "theme": "調味料與茶點",
        "sentence": "Drinking too much sweet soda will make you gain weight easily.",
        "sentenceZh": "喝太多甜汽水會讓你容易變胖。"
    },
    {
        "word": "soft drink",
        "meaning": "軟性飲料",
        "theme": "調味料與茶點",
        "sentence": "Can I get a soft drink to go with my hamburger meal?",
        "sentenceZh": "我的漢堡餐可以配一杯軟性飲料嗎？"
    },
    {
        "word": "tea",
        "meaning": "茶",
        "theme": "調味料與茶點",
        "sentence": "Many older people in Taiwan like to sit and drink hot tea together.",
        "sentenceZh": "台灣許多長輩喜歡坐在一起喝熱茶。"
    },
    {
        "word": "cake",
        "meaning": "蛋糕",
        "theme": "調味料與茶點",
        "sentence": "We baked a big chocolate cake to celebrate her 15th birthday.",
        "sentenceZh": "我們烤了一個大巧克力蛋糕來慶祝她的十五歲生日。"
    },
    {
        "word": "candy",
        "meaning": "糖果",
        "theme": "調味料與茶點",
        "sentence": "Mom said I cannot eat too much candy right before dinner.",
        "sentenceZh": "媽媽說我不能在晚餐前吃太多糖果。"
    },
    {
        "word": "cheese",
        "meaning": "起司",
        "theme": "調味料與茶點",
        "sentence": "This Italian pizza has a lot of extra cheese on top of it.",
        "sentenceZh": "這個義大利披薩上面加了很多起司。"
    },
    {
        "word": "chocolate",
        "meaning": "巧克力",
        "theme": "調味料與茶點",
        "sentence": "She bought a box of sweet chocolate as a present for her friend.",
        "sentenceZh": "她買了一盒甜巧克力當作給朋友的禮物。"
    },
    {
        "word": "cookie",
        "meaning": "餅乾",
        "theme": "調味料與茶點",
        "sentence": "My grandmother baked some delicious chocolate chip cookies.",
        "sentenceZh": "我奶奶烤了一些美味的巧克力豆餅乾。"
    },
    {
        "word": "dessert",
        "meaning": "甜點",
        "theme": "調味料與茶點",
        "sentence": "We ordered a slice of cake for dessert after the big meal.",
        "sentenceZh": "吃完大餐後，我們點了一塊蛋糕當甜點。"
    },
    {
        "word": "doughnut",
        "meaning": "甜甜圈",
        "theme": "調味料與茶點",
        "sentence": "I ate a sweet, round doughnut with my afternoon coffee.",
        "sentenceZh": "我下午喝咖啡時配了一個甜甜圓圓的甜甜圈。"
    },
    {
        "word": "ice cream",
        "meaning": "冰淇淋",
        "theme": "調味料與茶點",
        "sentence": "It feels great to eat vanilla ice cream on a hot summer day.",
        "sentenceZh": "在炎熱的夏日吃香草冰淇淋感覺棒極了。"
    },
    {
        "word": "moon cake",
        "meaning": "月餅",
        "theme": "調味料與茶點",
        "sentence": "We share delicious moon cakes with our family during the Moon Festival.",
        "sentenceZh": "我們在中秋節和家人分享美味的月餅。"
    },
    {
        "word": "pie",
        "meaning": "派",
        "theme": "調味料與茶點",
        "sentence": "My mother knows how to make the best apple pie in the world.",
        "sentenceZh": "我媽媽知道如何做出世界上最棒的蘋果派。"
    },
    {
        "word": "popcorn",
        "meaning": "爆米花",
        "theme": "調味料與茶點",
        "sentence": "We love to eat hot, salty popcorn when watching movies in the theater.",
        "sentenceZh": "我們在電影院看電影時喜歡吃熱騰騰鹹鹹的爆米花。"
    },
    {
        "word": "toast",
        "meaning": "吐司",
        "theme": "調味料與茶點",
        "sentence": "I usually have two warm pieces of toast for breakfast.",
        "sentenceZh": "我早餐通常吃兩片溫熱的吐司。"
    },
    {
        "word": "apple",
        "meaning": "蘋果",
        "theme": "蔬果",
        "sentence": "They say that an apple a day keeps the doctor away.",
        "sentenceZh": "人們說一天一蘋果，醫生遠離我。"
    },
    {
        "word": "banana",
        "meaning": "香蕉",
        "theme": "蔬果",
        "sentence": "Monkeys in the zoo really love to eat sweet yellow bananas.",
        "sentenceZh": "動物園裡的猴子真的很喜歡吃甜甜的黃香蕉。"
    },
    {
        "word": "bean",
        "meaning": "豆子",
        "theme": "蔬果",
        "sentence": "Eating green beans is very good for your daily health.",
        "sentenceZh": "吃四季豆對你每天的健康很有好處。"
    },
    {
        "word": "cabbage",
        "meaning": "高麗菜",
        "theme": "蔬果",
        "sentence": "We grew some big, fresh cabbages on our small farm.",
        "sentenceZh": "我們在小農場裡種了一些新鮮的大高麗菜。"
    },
    {
        "word": "carrot",
        "meaning": "胡蘿蔔",
        "theme": "蔬果",
        "sentence": "Rabbits love to eat crunchy orange carrots.",
        "sentenceZh": "兔子喜歡吃清脆的橘色胡蘿蔔。"
    },
    {
        "word": "corn",
        "meaning": "玉米",
        "theme": "蔬果",
        "sentence": "We had sweet yellow corn and beef for dinner tonight.",
        "sentenceZh": "我們今晚晚餐吃了甜甜的黃玉米和牛肉。"
    },
    {
        "word": "fruit",
        "meaning": "水果",
        "theme": "蔬果",
        "sentence": "You should eat more fresh fruit every day to get vitamins.",
        "sentenceZh": "你每天應該吃更多新鮮水果來補充維他命。"
    },
    {
        "word": "grape",
        "meaning": "葡萄",
        "theme": "蔬果",
        "sentence": "I bought a bag of sweet purple grapes at the night market.",
        "sentenceZh": "我在夜市買了一袋甜甜的紫葡萄。"
    },
    {
        "word": "guava",
        "meaning": "番石榴",
        "theme": "蔬果",
        "sentence": "Taiwan produces very delicious green guavas.",
        "sentenceZh": "台灣盛產非常美味的綠色芭樂。"
    },
    {
        "word": "lemon",
        "meaning": "檸檬",
        "theme": "蔬果",
        "sentence": "This yellow lemon is too sour for me to eat directly!",
        "sentenceZh": "這顆黃檸檬對我來說太酸了，沒辦法直接吃！"
    },
    {
        "word": "lettuce",
        "meaning": "生菜",
        "theme": "蔬果",
        "sentence": "We use fresh, green lettuce to make a healthy fruit salad.",
        "sentenceZh": "我們用新鮮綠色的生菜來做健康的生菜沙拉。"
    },
    {
        "word": "mango",
        "meaning": "芒果",
        "theme": "蔬果",
        "sentence": "Summer is definitely the best season to eat sweet mangoes.",
        "sentenceZh": "夏天絕對是吃甜芒果最好的季節。"
    },
    {
        "word": "nut",
        "meaning": "堅果",
        "theme": "蔬果",
        "sentence": "Cute little squirrels collect nuts before the cold winter comes.",
        "sentenceZh": "可愛的小松鼠在寒冬來臨前收集堅果。"
    },
    {
        "word": "onion",
        "meaning": "洋蔥",
        "theme": "蔬果",
        "sentence": "Cutting raw onions always makes my eyes water.",
        "sentenceZh": "切生洋蔥總是讓我的眼睛流淚。"
    },
    {
        "word": "orange",
        "meaning": "柳橙",
        "theme": "蔬果",
        "sentence": "I peeled a juicy orange to eat after finishing my lunch.",
        "sentenceZh": "我吃完午餐後剝了一顆多汁的柳橙來吃。"
    },
    {
        "word": "papaya",
        "meaning": "木瓜",
        "theme": "蔬果",
        "sentence": "Papaya milk is a very popular and famous drink in Taiwan.",
        "sentenceZh": "木瓜牛奶在台灣是非常受歡迎且有名的飲料。"
    },
    {
        "word": "peach",
        "meaning": "桃子",
        "theme": "蔬果",
        "sentence": "This pink peach looks very sweet, soft, and juicy.",
        "sentenceZh": "這顆粉紅色的桃子看起來非常甜、柔軟又多汁。"
    },
    {
        "word": "pear",
        "meaning": "梨子",
        "theme": "蔬果",
        "sentence": "I ate a sweet, juicy yellow pear after having dinner.",
        "sentenceZh": "我吃完晚餐後吃了一顆甜甜多汁的黃梨子。"
    },
    {
        "word": "pineapple",
        "meaning": "鳳梨",
        "theme": "蔬果",
        "sentence": "The pineapple is sweet inside, but its skin is very spiky.",
        "sentenceZh": "鳳梨裡面很甜，但它的外皮充滿尖刺。"
    },
    {
        "word": "potato",
        "meaning": "馬鈴薯",
        "theme": "蔬果",
        "sentence": "We make delicious French fries out of simple potatoes.",
        "sentenceZh": "我們用簡單的馬鈴薯做出美味的薯條。"
    },
    {
        "word": "pumpkin",
        "meaning": "南瓜",
        "theme": "蔬果",
        "sentence": "We use orange pumpkins to make scary Halloween lanterns.",
        "sentenceZh": "我們用橘色南瓜來製作可怕的萬聖節燈籠。"
    },
    {
        "word": "strawberry",
        "meaning": "草莓",
        "theme": "蔬果",
        "sentence": "She carefully put a red strawberry right on top of the cake.",
        "sentenceZh": "她小心地把一顆紅草莓放在蛋糕正上方。"
    },
    {
        "word": "tangerine",
        "meaning": "橘子",
        "theme": "蔬果",
        "sentence": "We eat a lot of sweet tangerines during the Chinese New Year.",
        "sentenceZh": "我們在農曆新年期間吃了很多甜橘子。"
    },
    {
        "word": "tomato",
        "meaning": "番茄",
        "theme": "蔬果",
        "sentence": "Are tomatoes considered fruits or are they vegetables?",
        "sentenceZh": "番茄被認為是水果還是蔬菜呢？"
    },
    {
        "word": "vegetable",
        "meaning": "蔬菜",
        "theme": "蔬果",
        "sentence": "You must eat your green vegetables to grow up strong.",
        "sentenceZh": "你必須吃綠色蔬菜才能長得強壯。"
    },
    {
        "word": "watermelon",
        "meaning": "西瓜",
        "theme": "蔬果",
        "sentence": "A big, cold watermelon is the best fruit for summer.",
        "sentenceZh": "一顆又大又冰涼的西瓜是夏天最棒的水果。"
    },
    {
        "word": "bowl",
        "meaning": "碗",
        "theme": "餐具",
        "sentence": "I ate a big bowl of beef noodles in Douliu for lunch.",
        "sentenceZh": "我午餐在斗六吃了一大碗牛肉麵。"
    },
    {
        "word": "chopsticks",
        "meaning": "筷子",
        "theme": "餐具",
        "sentence": "It is a little hard for foreigners to use chopsticks at first.",
        "sentenceZh": "對外國人來說，一開始使用筷子有點困難。"
    },
    {
        "word": "cup",
        "meaning": "杯子",
        "theme": "餐具",
        "sentence": "Would you like a hot cup of tea or coffee?",
        "sentenceZh": "你想要來杯熱茶還是熱咖啡？"
    },
    {
        "word": "diet",
        "meaning": "飲食；節食",
        "theme": "餐具",
        "sentence": "Eating a healthy diet is very important for a badminton player.",
        "sentenceZh": "健康的飲食對羽球選手來說非常重要。"
    },
    {
        "word": "dish",
        "meaning": "盤子",
        "theme": "餐具",
        "sentence": "This is my favorite dish on the restaurant's menu.",
        "sentenceZh": "這是這家餐廳菜單上我最愛的一道菜。"
    },
    {
        "word": "fork",
        "meaning": "叉子",
        "theme": "餐具",
        "sentence": "We usually eat Italian spaghetti with a fork.",
        "sentenceZh": "我們通常用叉子吃義大利麵。"
    },
    {
        "word": "glass",
        "meaning": "玻璃杯",
        "theme": "餐具",
        "sentence": "Please give me a glass of cold water, I am very thirsty.",
        "sentenceZh": "請給我一杯冷水，我非常渴。"
    },
    {
        "word": "knife",
        "meaning": "刀子",
        "theme": "餐具",
        "sentence": "Be careful not to cut your finger with that sharp knife.",
        "sentenceZh": "小心別被那把鋒利的刀子割到手指。"
    },
    {
        "word": "menu",
        "meaning": "菜單",
        "theme": "餐具",
        "sentence": "The waiter handed us the menu to order our dinner.",
        "sentenceZh": "服務生遞給我們菜單來點晚餐。"
    },
    {
        "word": "napkin",
        "meaning": "餐巾",
        "theme": "餐具",
        "sentence": "Use a paper napkin to wipe your mouth after eating.",
        "sentenceZh": "吃完東西後用紙餐巾擦嘴。"
    },
    {
        "word": "pan",
        "meaning": "平底鍋",
        "theme": "餐具",
        "sentence": "My mother is frying eggs in the pan right now.",
        "sentenceZh": "我媽媽現在正在平底鍋裡煎蛋。"
    },
    {
        "word": "plate",
        "meaning": "平盤",
        "theme": "餐具",
        "sentence": "He put a big piece of steak on his plate.",
        "sentenceZh": "他把一大塊牛排放在他的盤子上。"
    },
    {
        "word": "pot",
        "meaning": "鍋子",
        "theme": "餐具",
        "sentence": "The hot chicken soup is boiling in the pot.",
        "sentenceZh": "熱雞湯正在鍋子裡沸騰。"
    },
    {
        "word": "saucer",
        "meaning": "碟子",
        "theme": "餐具",
        "sentence": "Put the coffee cup on the small saucer.",
        "sentenceZh": "把咖啡杯放在小碟子上。"
    },
    {
        "word": "spoon",
        "meaning": "湯匙",
        "theme": "餐具",
        "sentence": "You need a spoon to drink this hot corn soup.",
        "sentenceZh": "你需要一把湯匙來喝這碗熱玉米湯。"
    },
    {
        "word": "straw",
        "meaning": "吸管",
        "theme": "餐具",
        "sentence": "He used a plastic straw to drink his papaya milk.",
        "sentenceZh": "他用一根塑膠吸管喝木瓜牛奶。"
    },
    {
        "word": "teapot",
        "meaning": "茶壺",
        "theme": "餐具",
        "sentence": "Grandmother put some hot water into the traditional teapot.",
        "sentenceZh": "奶奶把熱水倒進傳統茶壺裡。"
    },
    {
        "word": "wok",
        "meaning": "炒鍋",
        "theme": "餐具",
        "sentence": "My father cooks the best fried rice in his old wok.",
        "sentenceZh": "我爸爸用他的舊炒鍋炒出最棒的炒飯。"
    },
    {
        "word": "bill",
        "meaning": "帳單；紙鈔",
        "theme": "金融",
        "sentence": "Let's pay the bill and go to the movie theater.",
        "sentenceZh": "我們結帳然後去電影院吧。"
    },
    {
        "word": "cash",
        "meaning": "現金",
        "theme": "金融",
        "sentence": "You can only pay with cash at this small night market stall.",
        "sentenceZh": "在這個小夜市攤位你只能付現金。"
    },
    {
        "word": "cent",
        "meaning": "分（貨幣單位）",
        "theme": "金融",
        "sentence": "One hundred cents make one US dollar.",
        "sentenceZh": "一百美分等於一美元。"
    },
    {
        "word": "change",
        "meaning": "零錢",
        "theme": "金融",
        "sentence": "Here is your hot dog, and here is your change.",
        "sentenceZh": "這是你的熱狗，這是找你的零錢。"
    },
    {
        "word": "coin",
        "meaning": "硬幣",
        "theme": "金融",
        "sentence": "I dropped a ten-dollar coin on the floor.",
        "sentenceZh": "我掉了一枚十元硬幣在地上。"
    },
    {
        "word": "credit card",
        "meaning": "信用卡",
        "theme": "金融",
        "sentence": "My dad paid for the new television with his credit card.",
        "sentenceZh": "我爸爸用信用卡付了新電視的錢。"
    },
    {
        "word": "dollar",
        "meaning": "元（貨幣單位）",
        "theme": "金融",
        "sentence": "The cute pen in the stationery store only costs twenty dollars.",
        "sentenceZh": "文具店裡那支可愛的筆只要二十元。"
    },
    {
        "word": "money",
        "meaning": "錢",
        "theme": "金融",
        "sentence": "You should save some money to buy the things you want.",
        "sentenceZh": "你應該存些錢來買你想要的東西。"
    },
    {
        "word": "price",
        "meaning": "價格",
        "theme": "金融",
        "sentence": "The price of this badminton racket is too high for me.",
        "sentenceZh": "這支羽球拍的價格對我來說太高了。"
    },
    {
        "word": "fee",
        "meaning": "費用",
        "theme": "金融",
        "sentence": "We need to pay a small fee to join the English club.",
        "sentenceZh": "我們需要付一小筆費用來加入英文社團。"
    },
    {
        "word": "income",
        "meaning": "收入",
        "theme": "金融",
        "sentence": "His father has a good income from his company.",
        "sentenceZh": "他爸爸在公司有一份不錯的收入。"
    },
    {
        "word": "tip",
        "meaning": "小費；提示",
        "theme": "金融",
        "sentence": "The teacher gave us a useful tip to remember this grammar rule.",
        "sentenceZh": "老師給了我們一個有用的提示來記住這個文法規則。"
    },
    {
        "word": "borrow",
        "meaning": "借入",
        "theme": "金融",
        "sentence": "Can I borrow your eraser for a minute, please?",
        "sentenceZh": "請問我可以借用你的橡皮擦一分鐘嗎？"
    },
    {
        "word": "buy",
        "meaning": "購買",
        "theme": "金融",
        "sentence": "I want to buy a new comic book this weekend.",
        "sentenceZh": "我這個週末想買一本新漫畫書。"
    },
    {
        "word": "charge",
        "meaning": "收費",
        "theme": "金融",
        "sentence": "How much does the hotel charge for one night?",
        "sentenceZh": "這間飯店住一晚怎麼收費？"
    },
    {
        "word": "cost",
        "meaning": "花費",
        "theme": "金融",
        "sentence": "It costs a lot of money to fly to the USA.",
        "sentenceZh": "飛去美國要花很多錢。"
    },
    {
        "word": "earn",
        "meaning": "賺取",
        "theme": "金融",
        "sentence": "She works hard every day to earn money for her family.",
        "sentenceZh": "她每天努力工作為家人賺錢。"
    },
    {
        "word": "lend",
        "meaning": "借出",
        "theme": "金融",
        "sentence": "I can lend you my umbrella if it rains later.",
        "sentenceZh": "如果等一下下雨，我可以把雨傘借給你。"
    },
    {
        "word": "pay",
        "meaning": "支付",
        "theme": "金融",
        "sentence": "You have to pay for your ticket before getting on the train.",
        "sentenceZh": "上火車前你必須先支付車票錢。"
    },
    {
        "word": "spend",
        "meaning": "花費",
        "theme": "金融",
        "sentence": "Don't spend too much time playing video games.",
        "sentenceZh": "不要花太多時間打電動遊戲。"
    },
    {
        "word": "animal",
        "meaning": "動物",
        "theme": "動物",
        "sentence": "The dog is a very friendly and smart animal.",
        "sentenceZh": "狗是非常友善且聰明的動物。"
    },
    {
        "word": "bear",
        "meaning": "熊",
        "theme": "動物",
        "sentence": "The brown bear is sleeping in the cave for the winter.",
        "sentenceZh": "棕熊正在洞穴裡冬眠。"
    },
    {
        "word": "cat",
        "meaning": "貓",
        "theme": "動物",
        "sentence": "My cute cat likes to sleep on the soft sofa.",
        "sentenceZh": "我可愛的貓喜歡睡在柔軟的沙發上。"
    },
    {
        "word": "chicken",
        "meaning": "雞",
        "theme": "動物",
        "sentence": "We feed the chickens on the farm every morning.",
        "sentenceZh": "我們每天早上在農場餵雞。"
    },
    {
        "word": "cow",
        "meaning": "牛",
        "theme": "動物",
        "sentence": "The black and white cow is eating grass in the field.",
        "sentenceZh": "那頭黑白相間的牛正在田裡吃草。"
    },
    {
        "word": "deer",
        "meaning": "鹿",
        "theme": "動物",
        "sentence": "We saw a wild deer running fast in the woods.",
        "sentenceZh": "我們看到一隻野鹿在樹林裡跑得飛快。"
    },
    {
        "word": "dinosaur",
        "meaning": "恐龍",
        "theme": "動物",
        "sentence": "The T-Rex was a very large and scary dinosaur.",
        "sentenceZh": "暴龍是一種非常巨大且可怕的恐龍。"
    },
    {
        "word": "dog",
        "meaning": "狗",
        "theme": "動物",
        "sentence": "Remember to walk the dog in the park after dinner.",
        "sentenceZh": "記得晚餐後去公園遛狗。"
    },
    {
        "word": "donkey",
        "meaning": "驢",
        "theme": "動物",
        "sentence": "The strong donkey carried heavy bags on its back.",
        "sentenceZh": "強壯的驢子背上載著重重的袋子。"
    },
    {
        "word": "duck",
        "meaning": "鴨",
        "theme": "動物",
        "sentence": "The yellow duck is swimming happily in the pond.",
        "sentenceZh": "黃色小鴨正在池塘裡開心地游泳。"
    },
    {
        "word": "eagle",
        "meaning": "老鷹",
        "theme": "動物",
        "sentence": "The brave eagle flies high in the blue sky.",
        "sentenceZh": "勇敢的老鷹在藍天中高飛。"
    },
    {
        "word": "elephant",
        "meaning": "大象",
        "theme": "動物",
        "sentence": "The elephant uses its long trunk to drink water.",
        "sentenceZh": "大象用牠長長的鼻子喝水。"
    },
    {
        "word": "fox",
        "meaning": "狐狸",
        "theme": "動物",
        "sentence": "The red fox quietly caught a small mouse in the field.",
        "sentenceZh": "紅狐狸悄悄地在田野裡抓住了一隻小老鼠。"
    },
    {
        "word": "frog",
        "meaning": "青蛙",
        "theme": "動物",
        "sentence": "The green frog jumped into the water with a splash.",
        "sentenceZh": "綠色青蛙撲通一聲跳進了水裡。"
    },
    {
        "word": "goat",
        "meaning": "山羊",
        "theme": "動物",
        "sentence": "The goat easily climbed to the top of the rocks.",
        "sentenceZh": "山羊輕鬆地爬到了岩石頂端。"
    },
    {
        "word": "goose",
        "meaning": "鵝",
        "theme": "動物",
        "sentence": "The white goose made a loud noise when we walked near it.",
        "sentenceZh": "當我們走近時，白鵝發出了很大的叫聲。"
    },
    {
        "word": "hen",
        "meaning": "母雞",
        "theme": "動物",
        "sentence": "The brown hen laid a fresh egg this morning.",
        "sentenceZh": "那隻棕色母雞今天早上生了一顆新鮮的蛋。"
    },
    {
        "word": "hippo",
        "meaning": "河馬",
        "theme": "動物",
        "sentence": "The big hippo loves to stay in the water all day.",
        "sentenceZh": "大河馬喜歡整天待在水裡。"
    },
    {
        "word": "horse",
        "meaning": "馬",
        "theme": "動物",
        "sentence": "He likes to ride his brown horse on the wide plain.",
        "sentenceZh": "他喜歡在寬廣的平原上騎他那匹棕馬。"
    },
    {
        "word": "kangaroo",
        "meaning": "袋鼠",
        "theme": "動物",
        "sentence": "A mother kangaroo carries her baby in her front pocket.",
        "sentenceZh": "kangaroo 媽媽把寶寶裝在她前面的育兒袋裡。"
    },
    {
        "word": "kitten",
        "meaning": "小貓",
        "theme": "動物",
        "sentence": "The little kitten is playing with a ball of yarn.",
        "sentenceZh": "小貓正在玩毛線球。"
    },
    {
        "word": "koala",
        "meaning": "無尾熊",
        "theme": "動物",
        "sentence": "The cute koala sleeps in the tree for many hours a day.",
        "sentenceZh": "可愛無尾熊一天在樹上睡好幾個小時。"
    },
    {
        "word": "lamb",
        "meaning": "小羊",
        "theme": "動物",
        "sentence": "The little white lamb followed its mother everywhere.",
        "sentenceZh": "小白羊走到哪都跟著牠媽媽。"
    },
    {
        "word": "lion",
        "meaning": "獅子",
        "theme": "動物",
        "sentence": "The strong lion is the king of the wild animals.",
        "sentenceZh": "強壯的獅子是野生動物之王。"
    },
    {
        "word": "monkey",
        "meaning": "猴子",
        "theme": "動物",
        "sentence": "The clever monkey learned how to open the box.",
        "sentenceZh": "聰明的猴子學會了如何打開盒子。"
    },
    {
        "word": "monster",
        "meaning": "怪物",
        "theme": "動物",
        "sentence": "In this vocabulary game, you must spell the word correctly to defeat the monster.",
        "sentenceZh": "在這個單字遊戲裡，你必須正確拼寫單字才能打敗怪物。"
    },
    {
        "word": "mouse",
        "meaning": "老鼠",
        "theme": "動物",
        "sentence": "The cat quickly ran after the small mouse.",
        "sentenceZh": "貓迅速地追趕那隻小老鼠。"
    },
    {
        "word": "ox",
        "meaning": "公牛",
        "theme": "動物",
        "sentence": "The strong ox helped the farmer work in the muddy field.",
        "sentenceZh": "強壯的公牛幫助農夫在泥濘的田裡工作。"
    },
    {
        "word": "panda",
        "meaning": "熊貓",
        "theme": "動物",
        "sentence": "The black and white panda is eating green bamboo.",
        "sentenceZh": "黑白相間的貓熊正在吃綠竹子。"
    },
    {
        "word": "parrot",
        "meaning": "鸚鵡",
        "theme": "動物",
        "sentence": "This smart parrot can repeat what you say!",
        "sentenceZh": "這隻聰明的鸚鵡能重複你說的話！"
    },
    {
        "word": "pet",
        "meaning": "寵物",
        "theme": "動物",
        "sentence": "Many people treat their pets like their own family members.",
        "sentenceZh": "許多人把他們的寵物當作自己的家人對待。"
    },
    {
        "word": "pig",
        "meaning": "豬",
        "theme": "動物",
        "sentence": "The little pig is happily eating its food in the farm.",
        "sentenceZh": "小豬正在農場裡開心地吃著食物。"
    },
    {
        "word": "pigeon",
        "meaning": "鴿子",
        "theme": "動物",
        "sentence": "A gray pigeon flew down to eat the bread crumbs on the floor.",
        "sentenceZh": "一隻灰鴿子飛下來吃地上的麵包屑。"
    },
    {
        "word": "puppy",
        "meaning": "小狗",
        "theme": "動物",
        "sentence": "The cute puppy wagged its tail when I came home.",
        "sentenceZh": "當我回家時，可愛的小狗搖了搖尾巴。"
    },
    {
        "word": "rabbit",
        "meaning": "兔子",
        "theme": "動物",
        "sentence": "The white rabbit has very long ears and soft hair.",
        "sentenceZh": "白兔有著很長的耳朵和柔軟的毛。"
    },
    {
        "word": "rat",
        "meaning": "大鼠",
        "theme": "動物",
        "sentence": "A big rat ran across the dark street last night.",
        "sentenceZh": "昨晚一隻大老鼠跑過了昏暗的街道。"
    },
    {
        "word": "sheep",
        "meaning": "綿羊",
        "theme": "動物",
        "sentence": "The farmer uses the wool from the sheep to make warm clothes.",
        "sentenceZh": "農夫用綿羊的羊毛來做保暖的衣服。"
    },
    {
        "word": "swan",
        "meaning": "天鵝",
        "theme": "動物",
        "sentence": "The beautiful white swan swam gracefully on the calm lake.",
        "sentenceZh": "美麗的白天鵝在平靜的湖面上優雅地游著。"
    },
    {
        "word": "tiger",
        "meaning": "老虎",
        "theme": "動物",
        "sentence": "The fierce tiger ran quickly to catch its food.",
        "sentenceZh": "兇猛的老虎快速奔跑去抓食物。"
    },
    {
        "word": "turkey",
        "meaning": "火雞",
        "theme": "動物",
        "sentence": "We eat a large roast turkey to celebrate Thanksgiving.",
        "sentenceZh": "我們吃一大隻烤火雞來慶祝感恩節。"
    },
    {
        "word": "wolf",
        "meaning": "狼",
        "theme": "動物",
        "sentence": "The gray wolf howled loudly at the full moon.",
        "sentenceZh": "灰狼對著滿月大聲嚎叫。"
    },
    {
        "word": "zebra",
        "meaning": "斑馬",
        "theme": "動物",
        "sentence": "The zebra has black and white stripes on its body.",
        "sentenceZh": "斑馬身上有黑白相間的條紋。"
    },
    {
        "word": "insect",
        "meaning": "昆蟲",
        "theme": "動物",
        "sentence": "A butterfly is a very beautiful kind of flying insect.",
        "sentenceZh": "蝴蝶是一種非常美麗的飛行昆蟲。"
    },
    {
        "word": "ant",
        "meaning": "螞蟻",
        "theme": "動物",
        "sentence": "The hardworking ants carried the sweet food away.",
        "sentenceZh": "勤勞的螞蟻把甜食搬走了。"
    },
    {
        "word": "bat",
        "meaning": "蝙蝠",
        "theme": "動物",
        "sentence": "A bat is not a bird; it is an animal that sleeps during the day.",
        "sentenceZh": "蝙蝠不是鳥類，牠是一種在白天睡覺的動物。"
    },
    {
        "word": "bee",
        "meaning": "蜜蜂",
        "theme": "動物",
        "sentence": "The busy bee is collecting sweet honey from the red flower.",
        "sentenceZh": "忙碌的蜜蜂正在從紅花上收集甜美的蜂蜜。"
    },
    {
        "word": "bird",
        "meaning": "鳥",
        "theme": "動物",
        "sentence": "A little blue bird is singing a beautiful song in the tree.",
        "sentenceZh": "一隻藍色小鳥正在樹上唱著美麗的歌。"
    },
    {
        "word": "bug",
        "meaning": "小蟲",
        "theme": "動物",
        "sentence": "I have to fix a bug in my HTML game code before tomorrow.",
        "sentenceZh": "我明天之前必須修好我 HTML 遊戲程式碼裡的一個小錯誤(bug)。"
    },
    {
        "word": "butterfly",
        "meaning": "蝴蝶",
        "theme": "動物",
        "sentence": "The colorful butterfly landed softly on the pink rose.",
        "sentenceZh": "色彩繽紛的蝴蝶輕柔地停在粉紅玫瑰上。"
    },
    {
        "word": "cockroach",
        "meaning": "蟑螂",
        "theme": "動物",
        "sentence": "She screamed loudly when she saw a cockroach in the kitchen.",
        "sentenceZh": "當她在廚房看到一隻蟑螂時，她大聲尖叫。"
    },
    {
        "word": "dragon",
        "meaning": "龍",
        "theme": "動物",
        "sentence": "In Chinese culture, the dragon is a symbol of great power.",
        "sentenceZh": "在中華文化裡，龍是強大力量的象徵。"
    },
    {
        "word": "mosquito",
        "meaning": "蚊子",
        "theme": "動物",
        "sentence": "A mosquito bit me on the arm and now it is very itchy.",
        "sentenceZh": "一隻蚊子咬了我的手臂，現在非常癢。"
    },
    {
        "word": "snail",
        "meaning": "蝸牛",
        "theme": "動物",
        "sentence": "The little snail moves very slowly across the wet leaf.",
        "sentenceZh": "小蝸牛在濕葉子上移動得非常緩慢。"
    },
    {
        "word": "snake",
        "meaning": "蛇",
        "theme": "動物",
        "sentence": "Be careful of the poisonous snake when you hike in the woods.",
        "sentenceZh": "在樹林裡健行時要小心毒蛇。"
    },
    {
        "word": "spider",
        "meaning": "蜘蛛",
        "theme": "動物",
        "sentence": "The spider is making a large web in the corner of the room.",
        "sentenceZh": "蜘蛛正在房間角落結一張大網。"
    },
    {
        "word": "worm",
        "meaning": "蠕蟲",
        "theme": "動物",
        "sentence": "The early bird catches the little worm.",
        "sentenceZh": "早起的鳥兒有蟲吃。"
    },
    {
        "word": "crab",
        "meaning": "螃蟹",
        "theme": "動物",
        "sentence": "The crab uses its big claws to protect itself on the beach.",
        "sentenceZh": "螃蟹在海灘上用牠的大螯來保護自己。"
    },
    {
        "word": "dolphin",
        "meaning": "海豚",
        "theme": "動物",
        "sentence": "The smart dolphin jumped high out of the ocean water.",
        "sentenceZh": "聰明的海豚從海水中跳得高高的。"
    },
    {
        "word": "fish",
        "meaning": "魚",
        "theme": "動物",
        "sentence": "There are many colorful fish swimming in this large pond.",
        "sentenceZh": "有許多色彩繽紛的魚在這個大池塘裡游來游去。"
    },
    {
        "word": "shark",
        "meaning": "鯊魚",
        "theme": "動物",
        "sentence": "The dangerous shark has many rows of very sharp teeth.",
        "sentenceZh": "危險的鯊魚有多排非常銳利的牙齒。"
    },
    {
        "word": "shrimp",
        "meaning": "蝦",
        "theme": "動物",
        "sentence": "I like to order fried rice with egg and fresh shrimp.",
        "sentenceZh": "我喜歡點加了蛋和新鮮蝦子的炒飯。"
    },
    {
        "word": "turtle",
        "meaning": "烏龜",
        "theme": "動物",
        "sentence": "The heavy turtle walked slowly across the sand to the sea.",
        "sentenceZh": "笨重的烏龜緩慢地走過沙灘回到海裡。"
    },
    {
        "word": "whale",
        "meaning": "鯨魚",
        "theme": "動物",
        "sentence": "The blue whale is the largest living animal in the world.",
        "sentenceZh": "藍鯨是世界上現存體型最大的動物。"
    },
    {
        "word": "tail",
        "meaning": "尾巴",
        "theme": "動物",
        "sentence": "My happy dog always wags its tail when I play with it.",
        "sentenceZh": "我的狗很開心，當我和牠玩時牠總是搖尾巴。"
    },
    {
        "word": "wing",
        "meaning": "翅膀",
        "theme": "動物",
        "sentence": "The bird hurt its left wing and couldn't fly away.",
        "sentenceZh": "這隻鳥傷到了左邊的翅膀，沒辦法飛走。"
    },
    {
        "word": "belt",
        "meaning": "皮帶",
        "theme": "穿搭配件",
        "sentence": "Your pants are too loose; you need to wear a leather belt.",
        "sentenceZh": "你的褲子太鬆了，你需要繫條皮帶。"
    },
    {
        "word": "blouse",
        "meaning": "女裝上衣",
        "theme": "穿搭配件",
        "sentence": "My teacher wore a beautiful white blouse to work today.",
        "sentenceZh": "我的老師今天穿了一件美麗的白色女用襯衫去上班。"
    },
    {
        "word": "button",
        "meaning": "鈕扣",
        "theme": "穿搭配件",
        "sentence": "You need to push this red button to turn on the computer.",
        "sentenceZh": "你需要按下這顆紅色的按鈕來開啟電腦。"
    },
    {
        "word": "cap",
        "meaning": "棒球帽",
        "theme": "穿搭配件",
        "sentence": "He wore a blue baseball cap to protect his eyes from the sun.",
        "sentenceZh": "他戴著一頂藍色棒球帽來保護眼睛免受陽光照射。"
    },
    {
        "word": "clothes",
        "meaning": "衣服（總稱）",
        "theme": "穿搭配件",
        "sentence": "Please fold your clean clothes and put them in the closet.",
        "sentenceZh": "請把乾淨的衣服摺好並放進衣櫥裡。"
    },
    {
        "word": "coat",
        "meaning": "外套",
        "theme": "穿搭配件",
        "sentence": "It is freezing outside, so make sure you wear a heavy coat.",
        "sentenceZh": "外面冷極了，所以務必穿上一件厚外套。"
    },
    {
        "word": "comb",
        "meaning": "梳子",
        "theme": "穿搭配件",
        "sentence": "She used a plastic comb to make her long hair neat.",
        "sentenceZh": "她用一把塑膠梳子把長頭髮梳整齊。"
    },
    {
        "word": "contact lens",
        "meaning": "隱形眼鏡",
        "theme": "穿搭配件",
        "sentence": "I usually wear contact lenses instead of glasses when I play badminton.",
        "sentenceZh": "我打羽球時通常會戴隱形眼鏡而不是一般眼鏡。"
    },
    {
        "word": "cotton",
        "meaning": "棉",
        "theme": "穿搭配件",
        "sentence": "This T-shirt is very comfortable because it is made of 100% cotton.",
        "sentenceZh": "這件 T 恤非常舒服，因為它是百分之百純棉做的。"
    },
    {
        "word": "diamond",
        "meaning": "鑽石",
        "theme": "穿搭配件",
        "sentence": "Her husband gave her a beautiful ring with a shiny diamond.",
        "sentenceZh": "她丈夫給了她一隻鑲著閃亮鑽石的美麗戒指。"
    },
    {
        "word": "dress",
        "meaning": "連身裙",
        "theme": "穿搭配件",
        "sentence": "She wore a pretty red dress to the summer party.",
        "sentenceZh": "她穿了一件漂亮的紅洋裝去參加夏日派對。"
    },
    {
        "word": "earrings",
        "meaning": "耳環",
        "theme": "穿搭配件",
        "sentence": "My mother got a pair of gold earrings for her birthday.",
        "sentenceZh": "我媽媽得到了一副金耳環作為生日禮物。"
    },
    {
        "word": "glove",
        "meaning": "手套",
        "theme": "穿搭配件",
        "sentence": "Wear a thick glove when you take the hot pot out of the oven.",
        "sentenceZh": "從烤箱拿出熱鍋子時要戴上厚手套。"
    },
    {
        "word": "gold",
        "meaning": "黃金",
        "theme": "穿搭配件",
        "sentence": "The champion of the badminton race won a real gold medal.",
        "sentenceZh": "這場羽球競賽的冠軍贏得了一面真金獎牌。"
    },
    {
        "word": "haircut",
        "meaning": "理髮",
        "theme": "穿搭配件",
        "sentence": "Your hair is getting too long; you should get a haircut soon.",
        "sentenceZh": "你的頭髮越來越長了，你應該快點去理髮。"
    },
    {
        "word": "handkerchief",
        "meaning": "手帕",
        "theme": "穿搭配件",
        "sentence": "The gentleman gave her a clean handkerchief to wipe her tears.",
        "sentenceZh": "這位紳士給她一條乾淨的手帕來擦眼淚。"
    },
    {
        "word": "hat",
        "meaning": "帽子",
        "theme": "穿搭配件",
        "sentence": "Don't forget to take off your hat when you go inside the classroom.",
        "sentenceZh": "進教室時別忘了脫帽。"
    },
    {
        "word": "hole",
        "meaning": "破洞",
        "theme": "穿搭配件",
        "sentence": "There is a big hole in my right sock!",
        "sentenceZh": "我的右腳襪子上破了一個大洞！"
    },
    {
        "word": "jacket",
        "meaning": "夾克",
        "theme": "穿搭配件",
        "sentence": "Put on your jacket; it is getting cold this evening.",
        "sentenceZh": "穿上你的夾克，今晚天氣變冷了。"
    },
    {
        "word": "jeans",
        "meaning": "牛仔褲",
        "theme": "穿搭配件",
        "sentence": "He almost always wears a simple white T-shirt and blue jeans.",
        "sentenceZh": "他幾乎總是穿著簡單的白色 T 恤和藍色牛仔褲。"
    },
    {
        "word": "mask",
        "meaning": "口罩；面具",
        "theme": "穿搭配件",
        "sentence": "We have to wear a face mask if we catch a bad cold.",
        "sentenceZh": "如果我們得了重感冒就必須戴口罩。"
    },
    {
        "word": "necklace",
        "meaning": "項鍊",
        "theme": "穿搭配件",
        "sentence": "She bought a silver necklace to match her beautiful dress.",
        "sentenceZh": "她買了一條銀項鍊來搭配她美麗的洋裝。"
    },
    {
        "word": "pajamas",
        "meaning": "睡衣",
        "theme": "穿搭配件",
        "sentence": "Put on your comfortable pajamas and get ready for bed.",
        "sentenceZh": "穿上你舒適的睡衣並準備睡覺。"
    },
    {
        "word": "pants",
        "meaning": "褲子",
        "theme": "穿搭配件",
        "sentence": "I need to buy a new pair of black pants for my new job.",
        "sentenceZh": "我需要為了新工作買一條新的黑褲子。"
    },
    {
        "word": "pocket",
        "meaning": "口袋",
        "theme": "穿搭配件",
        "sentence": "He put his keys and cellphone in his jacket pocket.",
        "sentenceZh": "他把鑰匙和手機放進夾克口袋裡。"
    },
    {
        "word": "purse",
        "meaning": "錢包（女用）",
        "theme": "穿搭配件",
        "sentence": "My mom forgot to bring her purse to the supermarket.",
        "sentenceZh": "我媽媽去超市忘了帶她的皮包。"
    },
    {
        "word": "raincoat",
        "meaning": "雨衣",
        "theme": "穿搭配件",
        "sentence": "Wear your yellow raincoat so you don't get wet in the heavy rain.",
        "sentenceZh": "穿上你的黃色雨衣，這樣在大雨中才不會淋濕。"
    },
    {
        "word": "ring",
        "meaning": "戒指",
        "theme": "穿搭配件",
        "sentence": "The beautiful silver ring fits perfectly on her finger.",
        "sentenceZh": "這只美麗的銀戒指完美地戴在她的手指上。"
    },
    {
        "word": "scarf",
        "meaning": "圍巾",
        "theme": "穿搭配件",
        "sentence": "Wrap a warm scarf around your neck in the cold winter.",
        "sentenceZh": "在寒冷的冬天用一條溫暖的圍巾圍住你的脖子。"
    },
    {
        "word": "shirt",
        "meaning": "襯衫",
        "theme": "穿搭配件",
        "sentence": "He needs to wear a white shirt and a red tie to the meeting.",
        "sentenceZh": "他必須穿白襯衫繫紅領帶去開會。"
    },
    {
        "word": "shoes",
        "meaning": "鞋子",
        "theme": "穿搭配件",
        "sentence": "Take off your dirty shoes before you enter the living room.",
        "sentenceZh": "進客廳前請脫掉你髒兮兮的鞋子。"
    },
    {
        "word": "shorts",
        "meaning": "短褲",
        "theme": "穿搭配件",
        "sentence": "It is cool and comfortable to wear shorts in the hot summer.",
        "sentenceZh": "炎熱的夏天穿短褲既涼爽又舒服。"
    },
    {
        "word": "silver",
        "meaning": "銀",
        "theme": "穿搭配件",
        "sentence": "She uses a beautiful silver spoon to eat her dessert.",
        "sentenceZh": "她用一把美麗的銀湯匙吃甜點。"
    },
    {
        "word": "skirt",
        "meaning": "裙子",
        "theme": "穿搭配件",
        "sentence": "The girls in our school have to wear a blue skirt on Mondays.",
        "sentenceZh": "我們學校的女生星期一必須穿藍色裙子。"
    },
    {
        "word": "slippers",
        "meaning": "拖鞋",
        "theme": "穿搭配件",
        "sentence": "Put on your slippers so your feet won't feel cold on the floor.",
        "sentenceZh": "穿上拖鞋，這樣你的腳在地上才不會覺得冷。"
    },
    {
        "word": "sneakers",
        "meaning": "運動鞋",
        "theme": "穿搭配件",
        "sentence": "I need a good pair of sneakers for jogging in the park.",
        "sentenceZh": "我需要一雙好穿的運動鞋去公園慢跑。"
    },
    {
        "word": "socks",
        "meaning": "襪子",
        "theme": "穿搭配件",
        "sentence": "Remember to wash your dirty socks after playing sports.",
        "sentenceZh": "運動後記得洗你髒掉的襪子。"
    },
    {
        "word": "spot",
        "meaning": "污點",
        "theme": "穿搭配件",
        "sentence": "There is a coffee spot on your white shirt!",
        "sentenceZh": "你的白襯衫上有個咖啡污點！"
    },
    {
        "word": "suit",
        "meaning": "西裝",
        "theme": "穿搭配件",
        "sentence": "The businessman wore a black suit to the important meeting.",
        "sentenceZh": "商人穿了一套黑西裝去參加重要會議。"
    },
    {
        "word": "sweater",
        "meaning": "毛衣",
        "theme": "穿搭配件",
        "sentence": "Grandmother knitted a warm red sweater for me.",
        "sentenceZh": "奶奶為我織了一件溫暖的紅毛衣。"
    },
    {
        "word": "swimsuit",
        "meaning": "泳衣",
        "theme": "穿搭配件",
        "sentence": "Don't forget to pack your swimsuit if we are going to the beach.",
        "sentenceZh": "如果我們要去海灘，別忘了把你的泳衣收進行李。"
    },
    {
        "word": "tie",
        "meaning": "領帶",
        "theme": "穿搭配件",
        "sentence": "He wore a funny blue tie with his formal suit.",
        "sentenceZh": "他的正式西裝搭配了一條有趣的藍領帶。"
    },
    {
        "word": "trousers",
        "meaning": "長褲",
        "theme": "穿搭配件",
        "sentence": "The school uniform requires boys to wear long dark trousers.",
        "sentenceZh": "學校制服規定男生要穿深色長褲。"
    },
    {
        "word": "T-shirt",
        "meaning": "T 恤",
        "theme": "穿搭配件",
        "sentence": "She gave me a cool T-shirt with my favorite 80s band on it.",
        "sentenceZh": "她送我一件印有我最愛的 80 年代樂團的酷炫 T 恤。"
    },
    {
        "word": "umbrella",
        "meaning": "雨傘",
        "theme": "穿搭配件",
        "sentence": "You had better take an umbrella; the sky looks very dark.",
        "sentenceZh": "你最好帶把雨傘，天空看起來非常暗。"
    },
    {
        "word": "underwear",
        "meaning": "內衣",
        "theme": "穿搭配件",
        "sentence": "Pack enough clean underwear for our three-day trip.",
        "sentenceZh": "為我們三天的旅行打包足夠的乾淨內衣褲。"
    },
    {
        "word": "uniform",
        "meaning": "制服",
        "theme": "穿搭配件",
        "sentence": "Students have to wear their school uniform from Monday to Friday.",
        "sentenceZh": "學生星期一到星期五都必須穿學校制服。"
    },
    {
        "word": "vest",
        "meaning": "背心",
        "theme": "穿搭配件",
        "sentence": "The police officer wore a heavy bulletproof vest for safety.",
        "sentenceZh": "警官為了安全穿了一件厚重的防彈背心。"
    },
    {
        "word": "wallet",
        "meaning": "皮夾（男用）",
        "theme": "穿搭配件",
        "sentence": "My dad keeps his credit cards and cash in his brown leather wallet.",
        "sentenceZh": "我爸爸把信用卡和現金放在他的棕色真皮皮夾裡。"
    },
    {
        "word": "camera",
        "meaning": "相機",
        "theme": "電子產品",
        "sentence": "He used a professional camera to take beautiful photos of nature.",
        "sentenceZh": "他用專業相機拍下美麗的大自然照片。"
    },
    {
        "word": "cellphone",
        "meaning": "手機",
        "theme": "電子產品",
        "sentence": "You must turn off your cellphone when the class begins.",
        "sentenceZh": "上課時你必須關掉手機。"
    },
    {
        "word": "computer",
        "meaning": "電腦",
        "theme": "電子產品",
        "sentence": "I use my computer to practice writing HTML game code every day.",
        "sentenceZh": "我每天用電腦練習寫 HTML 遊戲程式碼。"
    },
    {
        "word": "e-mail",
        "meaning": "電子郵件",
        "theme": "電子產品",
        "sentence": "The teacher sent an e-mail to our parents about the test.",
        "sentenceZh": "老師發了一封電子郵件給我們父母告知考試的事。"
    },
    {
        "word": "file",
        "meaning": "檔案",
        "theme": "電子產品",
        "sentence": "Don't forget to save your game file before closing the program.",
        "sentenceZh": "關閉程式前別忘了儲存你的遊戲檔案。"
    },
    {
        "word": "Internet (Net)",
        "meaning": "網路",
        "theme": "電子產品",
        "sentence": "You can learn almost anything you want on the Internet.",
        "sentenceZh": "你可以在網路上學到幾乎任何你想學的東西。"
    },
    {
        "word": "link",
        "meaning": "連結",
        "theme": "電子產品",
        "sentence": "Click on this blue link to open the vocabulary game website.",
        "sentenceZh": "點擊這個藍色連結來開啟單字遊戲網站。"
    },
    {
        "word": "mail",
        "meaning": "郵件",
        "theme": "電子產品",
        "sentence": "The postman delivered some important mail to our house today.",
        "sentenceZh": "郵差今天送了一些重要的郵件到我們家。"
    },
    {
        "word": "net",
        "meaning": "網",
        "theme": "電子產品",
        "sentence": "The badminton player hit the ball right into the net.",
        "sentenceZh": "羽球選手把球直接打到了網子上。"
    },
    {
        "word": "printer",
        "meaning": "印表機",
        "theme": "電子產品",
        "sentence": "The teacher used the printer to make 30 copies of the worksheet.",
        "sentenceZh": "老師用印表機印了 30 份學習單。"
    },
    {
        "word": "radio",
        "meaning": "收音機",
        "theme": "電子產品",
        "sentence": "My grandfather still listens to the morning news on his old radio.",
        "sentenceZh": "我爺爺仍然用他的舊收音機聽晨間新聞。"
    },
    {
        "word": "robot",
        "meaning": "機器人",
        "theme": "電子產品",
        "sentence": "The students built a smart robot that can clean the floor.",
        "sentenceZh": "學生們做了一個能打掃地板的聰明機器人。"
    },
    {
        "word": "screen",
        "meaning": "螢幕",
        "theme": "電子產品",
        "sentence": "Look at the computer screen carefully to find the correct answer.",
        "sentenceZh": "仔細看電腦螢幕找出正確答案。"
    },
    {
        "word": "telephone (phone)",
        "meaning": "電話",
        "theme": "電子產品",
        "sentence": "Please answer the telephone if it rings while I am out.",
        "sentenceZh": "如果我不在時電話響了請接聽。"
    },
    {
        "word": "video",
        "meaning": "影片；錄影機",
        "theme": "電子產品",
        "sentence": "We watched a funny YouTube video together and laughed loudly.",
        "sentenceZh": "我們一起看了一部有趣的 YouTube 影片，大聲笑了出來。"
    },
    {
        "word": "crime",
        "meaning": "犯罪",
        "theme": "社會與媒體",
        "sentence": "Stealing a bicycle from the park is a serious crime.",
        "sentenceZh": "在公園偷腳踏車是嚴重的犯罪。"
    },
    {
        "word": "debate",
        "meaning": "辯論",
        "theme": "社會與媒體",
        "sentence": "The students had a fierce debate about the new school rules.",
        "sentenceZh": "學生們對新校規進行了激烈的辯論。"
    },
    {
        "word": "government",
        "meaning": "政府",
        "theme": "社會與媒體",
        "sentence": "The government will build a new hospital in our city next year.",
        "sentenceZh": "政府明年將在我們城市建一家新醫院。"
    },
    {
        "word": "population",
        "meaning": "人口",
        "theme": "社會與媒體",
        "sentence": "The population of Taiwan is over twenty-three million people.",
        "sentenceZh": "台灣的人口超過兩千三百萬人。"
    },
    {
        "word": "rule",
        "meaning": "規則",
        "theme": "社會與媒體",
        "sentence": "In our Syntax Repair game, both American and British spellings fit the rules!",
        "sentenceZh": "在我們的「語法修復」遊戲中，美式和英式拼寫都符合規則！"
    },
    {
        "word": "society",
        "meaning": "社會",
        "theme": "社會與媒體",
        "sentence": "Everyone has to work together to make our society better.",
        "sentenceZh": "每個人都必須共同努力讓我們的社會變得更好。"
    },
    {
        "word": "speech",
        "meaning": "演講",
        "theme": "社會與媒體",
        "sentence": "The principal gave a very long speech on graduation day.",
        "sentenceZh": "校長在畢業典禮當天發表了很長的演講。"
    },
    {
        "word": "system",
        "meaning": "系統",
        "theme": "社會與媒體",
        "sentence": "Our school has a new computer system to track grades.",
        "sentenceZh": "我們學校有一個新的電腦系統來追蹤成績。"
    },
    {
        "word": "war",
        "meaning": "戰爭",
        "theme": "社會與媒體",
        "sentence": "We should learn from history and always hope there is no more war.",
        "sentenceZh": "我們應該從歷史中學習，並永遠希望不再有戰爭。"
    },
    {
        "word": "advertisement",
        "meaning": "廣告",
        "theme": "社會與媒體",
        "sentence": "I saw a cool TV advertisement for a new 80s music album.",
        "sentenceZh": "我在電視上看到一個很酷的 80 年代新音樂專輯廣告。"
    },
    {
        "word": "channel",
        "meaning": "頻道；海峽",
        "theme": "社會與媒體",
        "sentence": "Can you switch the TV channel to watch the badminton game?",
        "sentenceZh": "你能轉電視頻道看羽球比賽嗎？"
    },
    {
        "word": "information",
        "meaning": "資訊",
        "theme": "社會與媒體",
        "sentence": "You can find a lot of useful information for your report online.",
        "sentenceZh": "你可以在網路上找到很多對你報告有用的資訊。"
    },
    {
        "word": "Internet",
        "meaning": "網際網路",
        "theme": "社會與媒體",
        "sentence": "We use the Internet every day to communicate with our friends.",
        "sentenceZh": "我們每天用網際網路與朋友交流。"
    },
    {
        "word": "news",
        "meaning": "新聞",
        "theme": "社會與媒體",
        "sentence": "I just read some exciting news about our school team winning the game.",
        "sentenceZh": "我剛讀到我們校隊贏得比賽的令人振奮的新聞。"
    },
    {
        "word": "newspaper",
        "meaning": "報紙",
        "theme": "社會與媒體",
        "sentence": "My father likes to read the morning newspaper while drinking coffee.",
        "sentenceZh": "我爸爸喜歡一邊喝咖啡一邊看早報。"
    },
    {
        "word": "photo",
        "meaning": "照片",
        "theme": "社會與媒體",
        "sentence": "Let's take a group photo together to remember this happy trip!",
        "sentenceZh": "我們一起拍張團體照來紀念這趟快樂的旅行吧！"
    },
    {
        "word": "program",
        "meaning": "節目；程式",
        "theme": "社會與媒體",
        "sentence": "My brother is learning how to write a computer program.",
        "sentenceZh": "我哥哥正在學習如何寫電腦程式。"
    },
    {
        "word": "story",
        "meaning": "故事",
        "theme": "社會與媒體",
        "sentence": "Let me tell you an interesting story about the history of badminton.",
        "sentenceZh": "讓我告訴你一個關於羽球歷史的有趣故事。"
    },
    {
        "word": "title",
        "meaning": "標題",
        "theme": "社會與媒體",
        "sentence": "The title of my English book report is \"The Brave Prince.\"",
        "sentenceZh": "我的英文讀書報告標題是《勇敢的王子》。"
    },
    {
        "word": "topic",
        "meaning": "話題",
        "theme": "社會與媒體",
        "sentence": "The main topic of today's lesson is about artificial intelligence (AI).",
        "sentenceZh": "今天課程的主題是關於人工智慧 (AI)。"
    },
    {
        "word": "activity",
        "meaning": "活動",
        "theme": "商業",
        "sentence": "The English camp has many fun outdoor activities for students.",
        "sentenceZh": "英語營隊為學生準備了許多有趣的戶外活動。"
    },
    {
        "word": "case",
        "meaning": "案例；箱子",
        "theme": "商業",
        "sentence": "The police officer quickly solved the difficult robbery case.",
        "sentenceZh": "警官迅速破了這件困難的搶劫案。"
    },
    {
        "word": "chart",
        "meaning": "圖表",
        "theme": "商業",
        "sentence": "Look at the vocabulary chart on page 10 to see the differences.",
        "sentenceZh": "看第十頁的單字圖表來了解差異。"
    },
    {
        "word": "command",
        "meaning": "命令",
        "theme": "商業",
        "sentence": "The soldier obeyed the captain's command without asking why.",
        "sentenceZh": "士兵服從隊長的命令，沒有問為什麼。"
    },
    {
        "word": "contract",
        "meaning": "合約",
        "theme": "商業",
        "sentence": "They signed an important business contract at the meeting today.",
        "sentenceZh": "他們在今天的會議上簽署了一份重要的商業合約。"
    },
    {
        "word": "discussion",
        "meaning": "討論",
        "theme": "商業",
        "sentence": "We had a long discussion about how to design the class badge.",
        "sentenceZh": "我們對於如何設計班級徽章進行了長時間的討論。"
    },
    {
        "word": "event",
        "meaning": "事件",
        "theme": "商業",
        "sentence": "The school sports day is the most exciting event of the year.",
        "sentenceZh": "學校運動會是一年中最令人興奮的活動。"
    },
    {
        "word": "group",
        "meaning": "群組",
        "theme": "商業",
        "sentence": "The teacher divided the class into five small study groups.",
        "sentenceZh": "老師把全班分成五個學習小組。"
    },
    {
        "word": "interview",
        "meaning": "面試；訪談",
        "theme": "商業",
        "sentence": "He wore his best suit to the job interview at the bank.",
        "sentenceZh": "他穿了他最棒的西裝去銀行的工作面試。"
    },
    {
        "word": "invitation",
        "meaning": "邀請",
        "theme": "商業",
        "sentence": "We sent an invitation to Director Lee for our AI teaching seminar.",
        "sentenceZh": "我們發了邀請函給李主任，請他參加我們的 AI 教學研討會。"
    },
    {
        "word": "item",
        "meaning": "項目",
        "theme": "商業",
        "sentence": "Please check each item on your shopping list before you leave.",
        "sentenceZh": "離開前請檢查你購物清單上的每一個項目。"
    },
    {
        "word": "matter",
        "meaning": "事情",
        "theme": "商業",
        "sentence": "What is the matter? Why are you looking so sad today?",
        "sentenceZh": "怎麼了？你今天為什麼看起來這麼難過？"
    },
    {
        "word": "meeting",
        "meaning": "會議",
        "theme": "商業",
        "sentence": "The teachers had a long meeting to discuss the English curriculum.",
        "sentenceZh": "老師們開了個長會來討論英文課程。"
    },
    {
        "word": "order",
        "meaning": "命令；訂單",
        "theme": "商業",
        "sentence": "The teacher gave an order to everyone to finish their homework quietly.",
        "sentenceZh": "老師命令每個人安靜地寫完作業。"
    },
    {
        "word": "project",
        "meaning": "專案",
        "theme": "商業",
        "sentence": "The students are working on a science project about the environment.",
        "sentenceZh": "學生們正在進行一個關於環境的科學專案。"
    },
    {
        "word": "sale",
        "meaning": "拍賣；銷售",
        "theme": "商業",
        "sentence": "The department store is having a big winter sale next week.",
        "sentenceZh": "百貨公司下週將有一場盛大的冬季拍賣。"
    },
    {
        "word": "sample",
        "meaning": "樣品",
        "theme": "商業",
        "sentence": "The lady gave us a free sample of the new cake to try.",
        "sentenceZh": "那位女士給我們一塊新蛋糕的免費樣品試吃。"
    },
    {
        "word": "service",
        "meaning": "服務",
        "theme": "商業",
        "sentence": "The waiter provided excellent service at the Italian restaurant.",
        "sentenceZh": "這位服務生在義大利餐廳提供了極佳的服務。"
    },
    {
        "word": "ticket",
        "meaning": "票",
        "theme": "商業",
        "sentence": "I bought two movie tickets online for us tonight.",
        "sentenceZh": "我在網路上買了兩張我們今晚的電影票。"
    },
    {
        "word": "trade",
        "meaning": "貿易",
        "theme": "商業",
        "sentence": "The two countries agreed to increase their international trade.",
        "sentenceZh": "這兩個國家同意增加他們的國際貿易。"
    },
    {
        "word": "zero",
        "meaning": "零",
        "theme": "數量數字",
        "sentence": "I checked my HTML code twice and found zero mistakes.",
        "sentenceZh": "我檢查了兩次 HTML 程式碼，發現零錯誤。"
    },
    {
        "word": "one",
        "meaning": "一",
        "theme": "數量數字",
        "sentence": "We just need one more player for the badminton game.",
        "sentenceZh": "我們打羽球只需要再一名玩家。"
    },
    {
        "word": "two",
        "meaning": "二",
        "theme": "數量數字",
        "sentence": "He drinks two glasses of warm milk every day.",
        "sentenceZh": "他每天喝兩杯溫牛奶。"
    },
    {
        "word": "three",
        "meaning": "三",
        "theme": "數量數字",
        "sentence": "A triangle has three straight lines and three angles.",
        "sentenceZh": "三角形有三條直線和三個角。"
    },
    {
        "word": "four",
        "meaning": "四",
        "theme": "數量數字",
        "sentence": "A square has four equal sides.",
        "sentenceZh": "正方形有四個相等的邊。"
    },
    {
        "word": "five",
        "meaning": "五",
        "theme": "數量數字",
        "sentence": "Our school badminton team won five games this season.",
        "sentenceZh": "我們學校的羽球隊這賽季贏了五場比賽。"
    },
    {
        "word": "six",
        "meaning": "六",
        "theme": "數量數字",
        "sentence": "There are six students taking the remedial English class.",
        "sentenceZh": "有六名學生正在上英文補救教學課。"
    },
    {
        "word": "seven",
        "meaning": "七",
        "theme": "數量數字",
        "sentence": "There are seven days in a week.",
        "sentenceZh": "一個星期有七天。"
    },
    {
        "word": "eight",
        "meaning": "八",
        "theme": "數量數字",
        "sentence": "You should try to sleep for eight hours every night.",
        "sentenceZh": "你每天晚上應該盡量睡滿八小時。"
    },
    {
        "word": "nine",
        "meaning": "九",
        "theme": "數量數字",
        "sentence": "I usually brush my teeth and go to bed at nine o'clock.",
        "sentenceZh": "我通常在九點鐘刷牙睡覺。"
    },
    {
        "word": "ten",
        "meaning": "十",
        "theme": "數量數字",
        "sentence": "This new vocabulary passport has ten pages.",
        "sentenceZh": "這本新的單字護照有十頁。"
    },
    {
        "word": "eleven",
        "meaning": "十一",
        "theme": "數量數字",
        "sentence": "My younger brother is eleven years old.",
        "sentenceZh": "我的弟弟十一歲。"
    },
    {
        "word": "twelve",
        "meaning": "十二",
        "theme": "數量數字",
        "sentence": "There are twelve months in a year.",
        "sentenceZh": "一年有十二個月。"
    },
    {
        "word": "thirteen",
        "meaning": "十三",
        "theme": "數量數字",
        "sentence": "Thirteen comes after twelve and before fourteen.",
        "sentenceZh": "十三在十二之後，十四之前。"
    },
    {
        "word": "fourteen",
        "meaning": "十四",
        "theme": "數量數字",
        "sentence": "He is fourteen years old and studies in junior high school.",
        "sentenceZh": "他十四歲，就讀國中。"
    },
    {
        "word": "fifteen",
        "meaning": "十五",
        "theme": "數量數字",
        "sentence": "We have a fifteen-minute break between classes.",
        "sentenceZh": "我們兩節課之間有十五分鐘的休息時間。"
    },
    {
        "word": "sixteen",
        "meaning": "十六",
        "theme": "數量數字",
        "sentence": "You must be sixteen to ride a scooter in some countries.",
        "sentenceZh": "在某些國家你必須滿十六歲才能騎機車。"
    },
    {
        "word": "seventeen",
        "meaning": "十七",
        "theme": "數量數字",
        "sentence": "My older sister just turned seventeen last month.",
        "sentenceZh": "我姐姐上個月剛滿十七歲。"
    },
    {
        "word": "eighteen",
        "meaning": "十八",
        "theme": "數量數字",
        "sentence": "You become an adult when you are eighteen years old.",
        "sentenceZh": "當你十八歲時，你就成為成年人了。"
    },
    {
        "word": "nineteen",
        "meaning": "十九",
        "theme": "數量數字",
        "sentence": "Nineteen students passed the grammar test today.",
        "sentenceZh": "今天有十九名學生通過了文法考試。"
    },
    {
        "word": "twenty",
        "meaning": "二十",
        "theme": "數量數字",
        "sentence": "There are exactly twenty desks in our classroom.",
        "sentenceZh": "我們教室裡剛好有二十張書桌。"
    },
    {
        "word": "thirty",
        "meaning": "三十",
        "theme": "數量數字",
        "sentence": "The English class is usually forty-five or thirty minutes long.",
        "sentenceZh": "英文課通常是四十五或三十分鐘長。"
    },
    {
        "word": "forty",
        "meaning": "四十",
        "theme": "數量數字",
        "sentence": "He read forty pages of the storybook last night.",
        "sentenceZh": "他昨晚讀了四十頁的故事書。"
    },
    {
        "word": "fifty",
        "meaning": "五十",
        "theme": "數量數字",
        "sentence": "A half-century means a period of fifty years.",
        "sentenceZh": "半世紀指的是五十年的時期。"
    },
    {
        "word": "sixty",
        "meaning": "六十",
        "theme": "數量數字",
        "sentence": "There are sixty seconds in one minute.",
        "sentenceZh": "一分鐘有六十秒。"
    },
    {
        "word": "seventy",
        "meaning": "七十",
        "theme": "數量數字",
        "sentence": "My grandfather will be seventy years old next year.",
        "sentenceZh": "我爺爺明年就七十歲了。"
    },
    {
        "word": "eighty",
        "meaning": "八十",
        "theme": "數量數字",
        "sentence": "I have exactly eighty songs on my 1980s music playlist.",
        "sentenceZh": "我的 1980 年代音樂播放清單裡剛好有八十首歌。"
    },
    {
        "word": "ninety",
        "meaning": "九十",
        "theme": "數量數字",
        "sentence": "The weather is very hot; it is almost ninety degrees today!",
        "sentenceZh": "天氣非常熱，今天幾乎有九十度（華氏）！"
    },
    {
        "word": "hundred",
        "meaning": "百",
        "theme": "數量數字",
        "sentence": "He got one hundred points on his final English exam.",
        "sentenceZh": "他的英文期末考得了一百分。"
    },
    {
        "word": "thousand",
        "meaning": "千",
        "theme": "數量數字",
        "sentence": "You need two thousand points to win the Weather Combat game.",
        "sentenceZh": "你需要兩千分才能贏得「天氣大戰」遊戲。"
    },
    {
        "word": "million",
        "meaning": "百萬",
        "theme": "數量數字",
        "sentence": "A million people watched the famous singer's concert online.",
        "sentenceZh": "有一百萬人在網路上觀看了這位知名歌手的演唱會。"
    },
    {
        "word": "first",
        "meaning": "第一",
        "theme": "數量數字",
        "sentence": "She won the first prize in the school spelling contest.",
        "sentenceZh": "她在學校拼字比賽中贏得第一名。"
    },
    {
        "word": "second",
        "meaning": "第二",
        "theme": "數量數字",
        "sentence": "This is my second time playing this interactive grammar game.",
        "sentenceZh": "這是我第二次玩這個互動文法遊戲。"
    },
    {
        "word": "third",
        "meaning": "第三",
        "theme": "數量數字",
        "sentence": "Our English classroom is located on the third floor.",
        "sentenceZh": "我們的英文教室位於三樓。"
    },
    {
        "word": "last",
        "meaning": "最後的",
        "theme": "數量數字",
        "sentence": "This is the last question on the math test.",
        "sentenceZh": "這是數學考試的最後一個問題。"
    },
    {
        "word": "a few",
        "meaning": "一些（用於可數）",
        "theme": "數量數字",
        "sentence": "I have a few friends who also like synth-pop music.",
        "sentenceZh": "我有一些朋友也喜歡合成器流行音樂。"
    },
    {
        "word": "a little",
        "meaning": "一點（用於不可數）",
        "theme": "數量數字",
        "sentence": "Please add just a little sugar to my hot tea.",
        "sentenceZh": "請在我的熱茶裡加一點點糖就好。"
    },
    {
        "word": "a lot of",
        "meaning": "很多(可屬不可數都能用)",
        "theme": "數量數字",
        "sentence": "We spent a lot of time writing the code for the web page.",
        "sentenceZh": "我們花了很多時間寫網頁程式碼。"
    },
    {
        "word": "any",
        "meaning": "任何",
        "theme": "數量數字",
        "sentence": "Do you have any questions about how to use this tool?",
        "sentenceZh": "關於如何使用這個工具有任何問題嗎？"
    },
    {
        "word": "both",
        "meaning": "兩者都",
        "theme": "數量數字",
        "sentence": "Both American and British spellings are correct in this game.",
        "sentenceZh": "在這款遊戲中，美式和英式拼寫都是正確的。"
    },
    {
        "word": "few",
        "meaning": "很少（用於可數）",
        "theme": "數量數字",
        "sentence": "Very few people know the secret answer to this puzzle.",
        "sentenceZh": "很少人知道這個謎題的秘密答案。"
    },
    {
        "word": "less",
        "meaning": "更少（用於不可數）",
        "theme": "數量數字",
        "sentence": "You should spend less time watching TV and more time reading.",
        "sentenceZh": "你應該少花點時間看電視，多花點時間閱讀。"
    },
    {
        "word": "little",
        "meaning": "很少（不可數）",
        "theme": "數量數字",
        "sentence": "We have very little time left before the school bus arrives.",
        "sentenceZh": "在校車到達前，我們剩下很少的時間了。"
    },
    {
        "word": "number",
        "meaning": "數字；數量",
        "theme": "數量數字",
        "sentence": "The number of students in our class is twenty-five.",
        "sentenceZh": "我們班上的學生數量是二十五人。"
    },
    {
        "word": "several",
        "meaning": "幾個",
        "theme": "數量數字",
        "sentence": "I tried several times to fix the bug in the program.",
        "sentenceZh": "我嘗試了好幾次去修復程式裡的錯誤。"
    },
    {
        "word": "much",
        "meaning": "多的(不可數)",
        "theme": "數量數字",
        "sentence": "I don't have much money in my wallet today.",
        "sentenceZh": "我今天皮夾裡沒有很多錢。"
    },
    {
        "word": "most",
        "meaning": "最多的",
        "theme": "數量數字",
        "sentence": "Most students in our class have finished their vocabulary passports.",
        "sentenceZh": "我們班上大多數的學生都完成了單字護照。"
    },
    {
        "word": "plus",
        "meaning": "加號",
        "theme": "數量數字",
        "sentence": "Five plus three equals eight.",
        "sentenceZh": "五加三等於八。"
    },
    {
        "word": "minus",
        "meaning": "負號",
        "theme": "數量數字",
        "sentence": "Ten minus four equals six.",
        "sentenceZh": "十減四等於六。"
    },
    {
        "word": "total",
        "meaning": "總數",
        "theme": "數量數字",
        "sentence": "The total score for the English test is one hundred points.",
        "sentenceZh": "英文考試的總分是一百分。"
    },
    {
        "word": "rectangle",
        "meaning": "長方形",
        "theme": "形狀",
        "sentence": "A badminton court is shaped like a big rectangle.",
        "sentenceZh": "羽球場的形狀像一個大長方形。"
    },
    {
        "word": "shape",
        "meaning": "形狀",
        "theme": "形狀",
        "sentence": "What shape is the start button in your new game?",
        "sentenceZh": "你新遊戲裡的開始按鈕是什麼形狀？"
    },
    {
        "word": "square",
        "meaning": "正方形",
        "theme": "形狀",
        "sentence": "Draw a perfect square on the blank piece of paper.",
        "sentenceZh": "在空白紙上畫一個完美的正方形。"
    },
    {
        "word": "triangle",
        "meaning": "三角形",
        "theme": "形狀",
        "sentence": "The roof of that small doghouse looks like a triangle.",
        "sentenceZh": "那間小狗屋的屋頂看起來像個三角形。"
    },
    {
        "word": "circle",
        "meaning": "圓形",
        "theme": "形狀",
        "sentence": "The students sat in a large circle on the classroom floor.",
        "sentenceZh": "學生們在教室地板上圍坐成一個大圓圈。"
    },
    {
        "word": "dot",
        "meaning": "點",
        "theme": "形狀",
        "sentence": "Put a small black dot at the end of your sentence.",
        "sentenceZh": "在你的句尾點上一個小黑點。"
    },
    {
        "word": "line",
        "meaning": "線",
        "theme": "形狀",
        "sentence": "Please draw a straight line under the correct answer.",
        "sentenceZh": "請在正確答案下方畫一條直線。"
    },
    {
        "word": "point",
        "meaning": "點；尖端",
        "theme": "形狀",
        "sentence": "He won the final point with a great smash in the match.",
        "sentenceZh": "他在比賽中以一記漂亮的殺球贏得了最後一分。"
    },
    {
        "word": "angle",
        "meaning": "角度",
        "theme": "形狀",
        "sentence": "You must hit the badminton ball from the right angle.",
        "sentenceZh": "你必須從正確的角度擊打羽毛球。"
    },
    {
        "word": "straight",
        "meaning": "直的",
        "theme": "形狀",
        "sentence": "Go straight down the street and you will see the station.",
        "sentenceZh": "沿著街道直走你就會看到車站。"
    },
    {
        "word": "round",
        "meaning": "圓形的",
        "theme": "形狀",
        "sentence": "A baseball is completely round, but a football is not.",
        "sentenceZh": "棒球是完全圓形的，但美式足球不是。"
    },
    {
        "word": "centimeter",
        "meaning": "公分",
        "theme": "單位與度量",
        "sentence": "This short blue pencil is only ten centimeters long.",
        "sentenceZh": "這支短藍筆只有十公分長。"
    },
    {
        "word": "foot",
        "meaning": "英尺",
        "theme": "單位與度量",
        "sentence": "One foot is equal to about thirty centimeters.",
        "sentenceZh": "一英尺大約等於三十公分。"
    },
    {
        "word": "gram",
        "meaning": "公克",
        "theme": "單位與度量",
        "sentence": "This fresh red apple weighs about two hundred grams.",
        "sentenceZh": "這顆新鮮的紅蘋果大約重兩百公克。"
    },
    {
        "word": "inch",
        "meaning": "英吋",
        "theme": "單位與度量",
        "sentence": "The large television screen in the living room is fifty inches.",
        "sentenceZh": "客廳裡的大電視螢幕有五十英吋。"
    },
    {
        "word": "kilogram",
        "meaning": "公斤",
        "theme": "單位與度量",
        "sentence": "My golden retriever dog weighs about thirty kilograms.",
        "sentenceZh": "我的黃金獵犬大約重三十公斤。"
    },
    {
        "word": "kilometer",
        "meaning": "公里",
        "theme": "單位與度量",
        "sentence": "I jogged for three kilometers in Douliu Park this morning.",
        "sentenceZh": "我今天早上在斗六公園慢跑了三公里。"
    },
    {
        "word": "liter",
        "meaning": "公升",
        "theme": "單位與度量",
        "sentence": "You should drink at least two liters of water every day.",
        "sentenceZh": "你每天應該喝至少兩公升的水。"
    },
    {
        "word": "meter",
        "meaning": "公尺",
        "theme": "單位與度量",
        "sentence": "He ran one hundred meters in just thirteen seconds.",
        "sentenceZh": "他只花了十三秒就跑完一百公尺。"
    },
    {
        "word": "mile",
        "meaning": "英里",
        "theme": "單位與度量",
        "sentence": "The small village is about ten miles away from the city.",
        "sentenceZh": "這個小村莊距離城市大約十英里。"
    },
    {
        "word": "pound",
        "meaning": "磅",
        "theme": "單位與度量",
        "sentence": "This heavy box of books weighs more than twenty pounds.",
        "sentenceZh": "這箱厚重的書重達二十多磅。"
    },
    {
        "word": "yard",
        "meaning": "碼",
        "theme": "單位與度量",
        "sentence": "He hit the golf ball more than fifty yards away.",
        "sentenceZh": "他把高爾夫球擊出了五十碼遠。"
    },
    {
        "word": "degree",
        "meaning": "度數",
        "theme": "單位與度量",
        "sentence": "The water temperature is over ninety degrees.",
        "sentenceZh": "水溫超過了九十度。"
    },
    {
        "word": "row",
        "meaning": "排；行",
        "theme": "單位與度量",
        "sentence": "We sat in the first row to see the movie clearly.",
        "sentenceZh": "我們坐在第一排以便清楚地看電影。"
    },
    {
        "word": "bottle",
        "meaning": "瓶",
        "theme": "單位與度量",
        "sentence": "I bought a cold bottle of water after playing badminton.",
        "sentenceZh": "打完羽球後我買了一瓶冷水。"
    },
    {
        "word": "cup",
        "meaning": "杯",
        "theme": "單位與度量",
        "sentence": "My father drinks a cup of hot coffee every morning.",
        "sentenceZh": "我爸爸每天早上喝一杯熱咖啡。"
    },
    {
        "word": "dozen",
        "meaning": "一打（十二個）",
        "theme": "單位與度量",
        "sentence": "My mother bought a dozen fresh eggs at the supermarket.",
        "sentenceZh": "我媽媽在超市買了一打新鮮雞蛋。"
    },
    {
        "word": "glass",
        "meaning": "玻璃杯",
        "theme": "單位與度量",
        "sentence": "Would you please pass me that empty glass?",
        "sentenceZh": "可以請你把那個空玻璃杯遞給我嗎？"
    },
    {
        "word": "loaf",
        "meaning": "條（麵包）",
        "theme": "單位與度量",
        "sentence": "We need to buy a loaf of bread to make sandwiches.",
        "sentenceZh": "我們需要買一條麵包來做三明治。"
    },
    {
        "word": "pack",
        "meaning": "包",
        "theme": "單位與度量",
        "sentence": "He ate a whole pack of chocolate cookies by himself.",
        "sentenceZh": "他自己吃掉了一整包巧克力餅乾。"
    },
    {
        "word": "package",
        "meaning": "包裹",
        "theme": "單位與度量",
        "sentence": "The mail carrier delivered a big package to our door.",
        "sentenceZh": "郵差送了一個大包裹到我們門口。"
    },
    {
        "word": "pair",
        "meaning": "一雙；一對",
        "theme": "單位與度量",
        "sentence": "I need a new pair of sports shoes for the race.",
        "sentenceZh": "我需要一雙新的運動鞋來參加賽跑。"
    },
    {
        "word": "piece",
        "meaning": "片；塊；件",
        "theme": "單位與度量",
        "sentence": "Would you like to eat a piece of sweet strawberry cake?",
        "sentenceZh": "你想吃一塊甜甜的草莓蛋糕嗎？"
    },
    {
        "word": "bundle",
        "meaning": "捆；束",
        "theme": "單位與度量",
        "sentence": "We tied the old newspapers into a neat bundle.",
        "sentenceZh": "我們把舊報紙綁成整齊的一捆。"
    },
    {
        "word": "curve",
        "meaning": "曲線",
        "theme": "單位與度量",
        "sentence": "The mountain road has a very sharp curve ahead.",
        "sentenceZh": "前方的山路有一個非常彎的曲線。"
    },
    {
        "word": "section",
        "meaning": "部分",
        "theme": "單位與度量",
        "sentence": "The reading section of the English test was quite difficult.",
        "sentenceZh": "英文考試的閱讀部分滿難的。"
    },
    {
        "word": "mass",
        "meaning": "團；大量",
        "theme": "單位與度量",
        "sentence": "The dark clouds formed a huge mass in the sky.",
        "sentenceZh": "烏雲在天空中形成了一大團。"
    },
    {
        "word": "pile",
        "meaning": "堆",
        "theme": "單位與度量",
        "sentence": "There is a big pile of dirty clothes on his bedroom floor.",
        "sentenceZh": "他臥室的地板上有一大堆髒衣服。"
    },
    {
        "word": "set",
        "meaning": "一套",
        "theme": "單位與度量",
        "sentence": "The teacher gave us a new set of vocabulary cards.",
        "sentenceZh": "老師給了我們一套新的單字卡。"
    },
    {
        "word": "box",
        "meaning": "盒子",
        "theme": "單位與度量",
        "sentence": "The cute little cat is hiding inside the cardboard box.",
        "sentenceZh": "可愛的小貓躲在紙箱裡。"
    },
    {
        "word": "can",
        "meaning": "罐頭",
        "theme": "單位與度量",
        "sentence": "Please throw the empty cola can into the recycling bin.",
        "sentenceZh": "請把空的可樂罐丟進回收桶。"
    },
    {
        "word": "slice",
        "meaning": "片",
        "theme": "單位與度量",
        "sentence": "He ate a large slice of cheese pizza for his lunch.",
        "sentenceZh": "他午餐吃了一大片起司披薩。"
    },
    {
        "word": "size",
        "meaning": "尺寸",
        "theme": "單位與度量",
        "sentence": "What size T-shirt do you usually wear?",
        "sentenceZh": "你通常穿什麼尺寸的 T 恤？"
    },
    {
        "word": "height",
        "meaning": "高度",
        "theme": "單位與度量",
        "sentence": "The height of Taipei 101 is 508 meters.",
        "sentenceZh": "台北 101 的高度是 508 公尺。"
    },
    {
        "word": "distance",
        "meaning": "距離",
        "theme": "單位與度量",
        "sentence": "The distance from my home to the school is very short.",
        "sentenceZh": "從我家到學校的距離非常短。"
    },
    {
        "word": "weight",
        "meaning": "重量",
        "theme": "單位與度量",
        "sentence": "You can check your weight on the machine in the hospital.",
        "sentenceZh": "你可以在醫院的機器上量你的重量。"
    },
    {
        "word": "amount",
        "meaning": "數量",
        "theme": "單位與度量",
        "sentence": "You only need a small amount of salt for this soup.",
        "sentenceZh": "這碗湯你只需要少量的鹽。"
    },
    {
        "word": "measure",
        "meaning": "測量",
        "theme": "單位與度量",
        "sentence": "The nurse will measure your height and weight first.",
        "sentenceZh": "護理師會先測量你的身高和體重。"
    },
    {
        "word": "accident",
        "meaning": "事故",
        "theme": "抽象概念",
        "sentence": "He hurt his leg in a bad motorcycle accident yesterday.",
        "sentenceZh": "他昨天在一場嚴重的機車事故中傷了腿。"
    },
    {
        "word": "action",
        "meaning": "行動",
        "theme": "抽象概念",
        "sentence": "We must take action now to protect the earth.",
        "sentenceZh": "我們現在必須採取行動來保護地球。"
    },
    {
        "word": "advice",
        "meaning": "建議",
        "theme": "抽象概念",
        "sentence": "The teacher gave me some good advice on how to learn English.",
        "sentenceZh": "老師給了我一些關於如何學英文的好建議。"
    },
    {
        "word": "aim",
        "meaning": "目標",
        "theme": "抽象概念",
        "sentence": "His main aim is to become a successful software engineer.",
        "sentenceZh": "他的主要目標是成為一名成功的軟體工程師。"
    },
    {
        "word": "base",
        "meaning": "基礎；基地",
        "theme": "抽象概念",
        "sentence": "The Syntax Repair game is based on English grammar rules.",
        "sentenceZh": "「語法修復」遊戲是建立在英文文法規則的基礎上。"
    },
    {
        "word": "beauty",
        "meaning": "美麗",
        "theme": "抽象概念",
        "sentence": "The natural beauty of the mountains is truly amazing.",
        "sentenceZh": "群山的自然之美真是令人驚嘆。"
    },
    {
        "word": "beginning",
        "meaning": "開始",
        "theme": "抽象概念",
        "sentence": "The beginning of the movie was a little bit boring.",
        "sentenceZh": "這部電影的開頭有點無聊。"
    },
    {
        "word": "blank",
        "meaning": "空白",
        "theme": "抽象概念",
        "sentence": "Please write the correct word in the blank space.",
        "sentenceZh": "請在空白處寫上正確的單字。"
    },
    {
        "word": "cause",
        "meaning": "原因",
        "theme": "抽象概念",
        "sentence": "The heavy rain was the main cause of the flood.",
        "sentenceZh": "大雨是造成淹水的主要原因。"
    },
    {
        "word": "chance",
        "meaning": "機會",
        "theme": "抽象概念",
        "sentence": "Everyone deserves a second chance to try again.",
        "sentenceZh": "每個人都值得擁有第二次重試的機會。"
    },
    {
        "word": "choice",
        "meaning": "選擇",
        "theme": "抽象概念",
        "sentence": "You have to make a choice between the red or blue shirt.",
        "sentenceZh": "你必須在紅襯衫或藍襯衫之間做個選擇。"
    },
    {
        "word": "courage",
        "meaning": "勇氣",
        "theme": "抽象概念",
        "sentence": "It takes a lot of courage to speak English on the stage.",
        "sentenceZh": "在台上說英文需要很大的勇氣。"
    },
    {
        "word": "damage",
        "meaning": "損害",
        "theme": "抽象概念",
        "sentence": "The strong typhoon caused a lot of damage to the trees.",
        "sentenceZh": "強烈颱風對樹木造成了很大的損害。"
    },
    {
        "word": "danger",
        "meaning": "危險",
        "theme": "抽象概念",
        "sentence": "The red sign warns us of the hidden danger ahead.",
        "sentenceZh": "紅色的標誌警告我們前方有隱藏的危險。"
    },
    {
        "word": "decision",
        "meaning": "決定",
        "theme": "抽象概念",
        "sentence": "I have made the decision to join the school badminton team.",
        "sentenceZh": "我已經決定要加入學校羽球隊。"
    },
    {
        "word": "difference",
        "meaning": "差異",
        "theme": "抽象概念",
        "sentence": "Can you tell the difference between these two vocabulary words?",
        "sentenceZh": "你能分辨這兩個單字的差異嗎？"
    },
    {
        "word": "difficulty",
        "meaning": "困難",
        "theme": "抽象概念",
        "sentence": "He had some difficulty fixing the bug in his computer code.",
        "sentenceZh": "他在修復電腦程式碼錯誤時遇到了一些困難。"
    },
    {
        "word": "dream",
        "meaning": "夢想",
        "theme": "抽象概念",
        "sentence": "Her biggest dream is to travel around the world someday.",
        "sentenceZh": "她最大的夢想是有朝一日能環遊世界。"
    },
    {
        "word": "duty",
        "meaning": "責任",
        "theme": "抽象概念",
        "sentence": "It is the duty of a police officer to protect the people.",
        "sentenceZh": "保護人民是警察的責任。"
    },
    {
        "word": "effort",
        "meaning": "努力",
        "theme": "抽象概念",
        "sentence": "He put a lot of effort into designing the vocabulary game.",
        "sentenceZh": "他投入了很多努力在設計單字遊戲上。"
    },
    {
        "word": "energy",
        "meaning": "能量",
        "theme": "抽象概念",
        "sentence": "You need a lot of energy to play a full badminton game.",
        "sentenceZh": "你需要很多能量才能打完一整場羽球比賽。"
    },
    {
        "word": "error",
        "meaning": "錯誤",
        "theme": "抽象概念",
        "sentence": "I found a spelling error in my sentence and fixed it.",
        "sentenceZh": "我在句子裡發現了一個拼字錯誤並修正了它。"
    },
    {
        "word": "excuse",
        "meaning": "藉口",
        "theme": "抽象概念",
        "sentence": "Being late because you overslept is not a good excuse.",
        "sentenceZh": "因為睡過頭而遲到不是個好藉口。"
    },
    {
        "word": "experience",
        "meaning": "經驗",
        "theme": "抽象概念",
        "sentence": "He has a lot of experience in teaching English grammar.",
        "sentenceZh": "他在教英文文法方面有很多經驗。"
    },
    {
        "word": "fact",
        "meaning": "事實",
        "theme": "抽象概念",
        "sentence": "It is a well-known fact that the earth is round.",
        "sentenceZh": "地球是圓的是一個眾所周知的事實。"
    },
    {
        "word": "fault",
        "meaning": "過錯",
        "theme": "抽象概念",
        "sentence": "It was my fault that we lost the basketball game.",
        "sentenceZh": "我們輸了籃球比賽是我的錯。"
    },
    {
        "word": "freedom",
        "meaning": "自由",
        "theme": "抽象概念",
        "sentence": "The wild birds in the sky have the freedom to fly anywhere.",
        "sentenceZh": "天空中的野鳥有飛往任何地方的自由。"
    },
    {
        "word": "friendship",
        "meaning": "友誼",
        "theme": "抽象概念",
        "sentence": "We hope that our strong friendship will last forever.",
        "sentenceZh": "我們希望我們堅固的友誼能持續永遠。"
    },
    {
        "word": "fun",
        "meaning": "樂趣",
        "theme": "抽象概念",
        "sentence": "Playing the interactive web game is so much fun.",
        "sentenceZh": "玩互動網頁遊戲非常有樂趣。"
    },
    {
        "word": "ghost",
        "meaning": "鬼魂",
        "theme": "抽象概念",
        "sentence": "The kids dressed up as scary ghosts for the Halloween party.",
        "sentenceZh": "孩子們為了萬聖節派對打扮成可怕的鬼魂。"
    },
    {
        "word": "goal",
        "meaning": "目標",
        "theme": "抽象概念",
        "sentence": "My goal this semester is to memorize 2000 English words.",
        "sentenceZh": "我這學期的目標是記住兩千個英文單字。"
    },
    {
        "word": "honesty",
        "meaning": "誠實",
        "theme": "抽象概念",
        "sentence": "The teacher told us that honesty is the best policy.",
        "sentenceZh": "老師告訴我們誠實為上策。"
    },
    {
        "word": "humor",
        "meaning": "幽默",
        "theme": "抽象概念",
        "sentence": "Our English teacher has a great sense of humor.",
        "sentenceZh": "我們的英文老師很有幽默感。"
    },
    {
        "word": "idea",
        "meaning": "主意",
        "theme": "抽象概念",
        "sentence": "I have a great idea for the new class badge design!",
        "sentenceZh": "關於新班級徽章的設計我有一個好主意！"
    },
    {
        "word": "importance",
        "meaning": "重要性",
        "theme": "抽象概念",
        "sentence": "Do you understand the importance of passing the test?",
        "sentenceZh": "你了解通過考試的重要性嗎？"
    },
    {
        "word": "influence",
        "meaning": "影響",
        "theme": "抽象概念",
        "sentence": "The 80s pop music had a huge influence on his music style.",
        "sentenceZh": "80年代流行音樂對他的音樂風格有巨大的影響。"
    },
    {
        "word": "lack",
        "meaning": "缺乏",
        "theme": "抽象概念",
        "sentence": "The poor plants died because of a lack of water.",
        "sentenceZh": "那些可憐的植物因為缺乏水分而枯死了。"
    },
    {
        "word": "level",
        "meaning": "水平",
        "theme": "抽象概念",
        "sentence": "This vocabulary game has three different difficulty levels.",
        "sentenceZh": "這個單字遊戲有三個不同的難度關卡。"
    },
    {
        "word": "manner",
        "meaning": "禮貌；方式",
        "theme": "抽象概念",
        "sentence": "It is bad manners to talk loudly with food in your mouth.",
        "sentenceZh": "嘴裡含著食物大聲說話是很沒禮貌的。"
    },
    {
        "word": "meaning",
        "meaning": "意思",
        "theme": "抽象概念",
        "sentence": "Can you look up the meaning of this word in the dictionary?",
        "sentenceZh": "你能在字典裡查一下這個字的意思嗎？"
    },
    {
        "word": "message",
        "meaning": "訊息",
        "theme": "抽象概念",
        "sentence": "Please leave a message if I do not answer my phone.",
        "sentenceZh": "如果我沒接電話請留言。"
    },
    {
        "word": "method",
        "meaning": "方法",
        "theme": "抽象概念",
        "sentence": "We need to find a better learning method for English.",
        "sentenceZh": "我們需要為英文找到一個更好的學習方法。"
    },
    {
        "word": "mind",
        "meaning": "心智",
        "theme": "抽象概念",
        "sentence": "Keep your mind calm and clear when you take the final exam.",
        "sentenceZh": "考期末考時保持心智冷靜清晰。"
    },
    {
        "word": "mistake",
        "meaning": "錯誤",
        "theme": "抽象概念",
        "sentence": "Don't be afraid to make a mistake when speaking English!",
        "sentenceZh": "開口說英文時別害怕犯錯！"
    },
    {
        "word": "motion",
        "meaning": "動作",
        "theme": "抽象概念",
        "sentence": "The slow motion video shows you how to jump correctly.",
        "sentenceZh": "慢動作影片示範給你如何正確跳躍。"
    },
    {
        "word": "movement",
        "meaning": "運動",
        "theme": "抽象概念",
        "sentence": "The cat carefully watched the movement of the small mouse.",
        "sentenceZh": "貓仔細地看著小老鼠的動作。"
    },
    {
        "word": "opinion",
        "meaning": "意見",
        "theme": "抽象概念",
        "sentence": "What is your opinion on the new rules of the grammar game?",
        "sentenceZh": "你對文法遊戲的新規則有什麼意見？"
    },
    {
        "word": "pattern",
        "meaning": "模式",
        "theme": "抽象概念",
        "sentence": "Her new dress has a very beautiful flower pattern.",
        "sentenceZh": "她的新洋裝有著非常美麗的花朵圖案。"
    },
    {
        "word": "peace",
        "meaning": "和平",
        "theme": "抽象概念",
        "sentence": "Everyone in the country hopes for peace and safety.",
        "sentenceZh": "國家裡的每個人都希望擁有和平與安全。"
    },
    {
        "word": "power",
        "meaning": "力量；電力",
        "theme": "抽象概念",
        "sentence": "The ancient king had the power to change all the laws.",
        "sentenceZh": "古代的國王擁有改變所有法律的權力。"
    },
    {
        "word": "pressure",
        "meaning": "壓力",
        "theme": "抽象概念",
        "sentence": "Students often feel a lot of pressure before a big exam.",
        "sentenceZh": "學生在大考前經常感到很大的壓力。"
    },
    {
        "word": "principle",
        "meaning": "原則",
        "theme": "抽象概念",
        "sentence": "Always telling the truth is an important principle in his life.",
        "sentenceZh": "永遠說實話是他生活中一個重要的原則。"
    },
    {
        "word": "production",
        "meaning": "生產",
        "theme": "抽象概念",
        "sentence": "The large factory increased its production of sports shoes.",
        "sentenceZh": "那間大工廠增加了運動鞋的生產。"
    },
    {
        "word": "progress",
        "meaning": "進步",
        "theme": "抽象概念",
        "sentence": "He made a lot of progress in his English reading skills.",
        "sentenceZh": "他的英文閱讀技巧有了很大的進步。"
    },
    {
        "word": "purpose",
        "meaning": "目的",
        "theme": "抽象概念",
        "sentence": "What is the main purpose of playing this vocabulary game?",
        "sentenceZh": "玩這個單字遊戲的主要目的是什麼？"
    },
    {
        "word": "reason",
        "meaning": "理由",
        "theme": "抽象概念",
        "sentence": "He politely explained the reason why he was late for school.",
        "sentenceZh": "他有禮貌地解釋了他上學遲到的理由。"
    },
    {
        "word": "result",
        "meaning": "結果",
        "theme": "抽象概念",
        "sentence": "He was very happy with the final result of his math test.",
        "sentenceZh": "他對數學考試的最終結果感到非常開心。"
    },
    {
        "word": "safety",
        "meaning": "安全",
        "theme": "抽象概念",
        "sentence": "You must wear a helmet for your own safety when riding a bike.",
        "sentenceZh": "騎腳踏車時為了你自己的安全必須戴安全帽。"
    },
    {
        "word": "secret",
        "meaning": "秘密",
        "theme": "抽象概念",
        "sentence": "Please promise me that you won't tell my secret to anyone.",
        "sentenceZh": "請答應我你不會把我的秘密告訴任何人。"
    },
    {
        "word": "silence",
        "meaning": "寂靜",
        "theme": "抽象概念",
        "sentence": "The teacher waited for total silence before she started speaking.",
        "sentenceZh": "老師等到了全場寂靜後才開始說話。"
    },
    {
        "word": "skill",
        "meaning": "技能",
        "theme": "抽象概念",
        "sentence": "Writing HTML code is a very useful skill for the future.",
        "sentenceZh": "寫 HTML 程式碼是未來一項非常實用的技能。"
    },
    {
        "word": "soul",
        "meaning": "靈魂",
        "theme": "抽象概念",
        "sentence": "Some people say that beautiful music is good for the soul.",
        "sentenceZh": "有些人說美妙的音樂對靈魂有益。"
    },
    {
        "word": "space",
        "meaning": "空間",
        "theme": "抽象概念",
        "sentence": "There is still an empty space for your bag on the top shelf.",
        "sentenceZh": "最上層架子上還有一個空位可以放你的包包。"
    },
    {
        "word": "speed",
        "meaning": "速度",
        "theme": "抽象概念",
        "sentence": "The bullet train travels across the country at a very high speed.",
        "sentenceZh": "子彈列車以極高的速度穿梭全國。"
    },
    {
        "word": "spirit",
        "meaning": "精神",
        "theme": "抽象概念",
        "sentence": "The students showed great team spirit during the relay race.",
        "sentenceZh": "學生們在大隊接力中展現了極佳的團隊精神。"
    },
    {
        "word": "state",
        "meaning": "狀態；州",
        "theme": "抽象概念",
        "sentence": "Water can naturally exist in a solid, liquid, or gas state.",
        "sentenceZh": "水在自然界中能以固態、液態或氣態存在。"
    },
    {
        "word": "style",
        "meaning": "風格",
        "theme": "抽象概念",
        "sentence": "I really love the cool style of 1980s synth-pop music.",
        "sentenceZh": "我真的很愛 80 年代合成器流行樂那種酷炫的風格。"
    },
    {
        "word": "subject",
        "meaning": "主題；科目",
        "theme": "抽象概念",
        "sentence": "English is my favorite subject in junior high school.",
        "sentenceZh": "英文是我在國中最喜歡的科目。"
    },
    {
        "word": "success",
        "meaning": "成功",
        "theme": "抽象概念",
        "sentence": "The new vocabulary passport plan was a great success.",
        "sentenceZh": "新的單字護照計畫是個巨大的成功。"
    },
    {
        "word": "symbol",
        "meaning": "符號",
        "theme": "抽象概念",
        "sentence": "The white dove is often seen as a symbol of world peace.",
        "sentenceZh": "白鴿常被視為世界和平的象徵。"
    },
    {
        "word": "talent",
        "meaning": "天賦",
        "theme": "抽象概念",
        "sentence": "She has a special talent for drawing cute game characters.",
        "sentenceZh": "她對於畫可愛的遊戲角色有特別的天賦。"
    },
    {
        "word": "thought",
        "meaning": "想法",
        "theme": "抽象概念",
        "sentence": "I just had a brilliant thought about how to fix the code.",
        "sentenceZh": "關於如何修復程式碼，我剛好有一個聰明的想法。"
    },
    {
        "word": "trouble",
        "meaning": "麻煩",
        "theme": "抽象概念",
        "sentence": "He got into trouble because he didn't finish his homework.",
        "sentenceZh": "他因為沒寫完作業惹上了麻煩。"
    },
    {
        "word": "truth",
        "meaning": "真相",
        "theme": "抽象概念",
        "sentence": "A brave and honest student should always tell the truth.",
        "sentenceZh": "勇敢又誠實的學生應該永遠說出真相。"
    },
    {
        "word": "value",
        "meaning": "價值",
        "theme": "抽象概念",
        "sentence": "Good health is of great value to everyone in the world.",
        "sentenceZh": "良好的健康對世上每個人都有極大的價值。"
    },
    {
        "word": "victory",
        "meaning": "勝利",
        "theme": "抽象概念",
        "sentence": "The badminton team celebrated their sweet victory after the game.",
        "sentenceZh": "羽球隊在比賽後慶祝了他們甜美的勝利。"
    },
    {
        "word": "way",
        "meaning": "方式；道路",
        "theme": "抽象概念",
        "sentence": "Can you please show me the correct way to the train station?",
        "sentenceZh": "能請你告訴我前往火車站的正確道路嗎？"
    },
    {
        "word": "balloon",
        "meaning": "氣球",
        "theme": "雜物",
        "sentence": "We bought some colorful balloons for the birthday party.",
        "sentenceZh": "我們買了一些色彩繽紛的氣球來佈置生日派對。"
    },
    {
        "word": "bell",
        "meaning": "鈴鐺",
        "theme": "雜物",
        "sentence": "The school bell rings loudly at exactly eight o'clock.",
        "sentenceZh": "學校鐘聲在八點整大聲響起。"
    },
    {
        "word": "blank",
        "meaning": "空白",
        "theme": "雜物",
        "sentence": "There is a blank page at the end of my English notebook.",
        "sentenceZh": "我的英文筆記本最後有一頁空白頁。"
    },
    {
        "word": "bomb",
        "meaning": "炸彈",
        "theme": "雜物",
        "sentence": "The brave police officer safely stopped the bomb from exploding.",
        "sentenceZh": "勇敢的警察安全地阻止了炸彈爆炸。"
    },
    {
        "word": "cage",
        "meaning": "籠子",
        "theme": "雜物",
        "sentence": "The beautiful parrot is locked inside a small metal cage.",
        "sentenceZh": "那隻美麗的鸚鵡被關在一個小金屬籠子裡。"
    },
    {
        "word": "flag",
        "meaning": "旗幟",
        "theme": "雜物",
        "sentence": "The students raised the national flag at the morning assembly.",
        "sentenceZh": "學生們在早會時升起了國旗。"
    },
    {
        "word": "garbage",
        "meaning": "垃圾",
        "theme": "雜物",
        "sentence": "Please remember to take out the garbage before you leave.",
        "sentenceZh": "離開前請記得倒垃圾。"
    },
    {
        "word": "gift",
        "meaning": "禮物",
        "theme": "雜物",
        "sentence": "I received a very special gift from my aunt in Taipei.",
        "sentenceZh": "我收到了台北阿姨送的一份非常特別的禮物。"
    },
    {
        "word": "gun",
        "meaning": "槍",
        "theme": "雜物",
        "sentence": "The police officer carries a gun to protect the people.",
        "sentenceZh": "警察配戴槍枝以保護人民。"
    },
    {
        "word": "kite",
        "meaning": "風箏",
        "theme": "雜物",
        "sentence": "We flew a beautiful red kite high in the clear blue sky.",
        "sentenceZh": "我們在湛藍晴空中放飛了一個美麗的紅風箏。"
    },
    {
        "word": "lid",
        "meaning": "蓋子",
        "theme": "雜物",
        "sentence": "Don't forget to put the plastic lid back on the box.",
        "sentenceZh": "別忘了把塑膠蓋子蓋回盒子上。"
    },
    {
        "word": "name",
        "meaning": "名字",
        "theme": "雜物",
        "sentence": "Please write your English name clearly on the worksheet.",
        "sentenceZh": "請在學習單上清楚寫下你的英文名字。"
    },
    {
        "word": "object",
        "meaning": "物品",
        "theme": "雜物",
        "sentence": "The teacher put a strange, shiny object on her desk.",
        "sentenceZh": "老師在書桌上放了一個奇怪、閃亮的物品。"
    },
    {
        "word": "prize",
        "meaning": "獎品",
        "theme": "雜物",
        "sentence": "He won the first prize in the national spelling bee contest.",
        "sentenceZh": "他在全國拼字比賽中贏得了第一名獎品。"
    },
    {
        "word": "rope",
        "meaning": "繩子",
        "theme": "雜物",
        "sentence": "We need a long, strong rope to play a game of tug-of-war.",
        "sentenceZh": "我們需要一條又長又堅固的繩子來玩拔河遊戲。"
    },
    {
        "word": "step",
        "meaning": "步驟；腳步",
        "theme": "雜物",
        "sentence": "Watch your step carefully when you walk down the wet stairs.",
        "sentenceZh": "走下潮濕的樓梯時要小心你的腳步。"
    },
    {
        "word": "string",
        "meaning": "細繩",
        "theme": "雜物",
        "sentence": "I tied the small box nicely with a piece of red string.",
        "sentenceZh": "我用一條紅細繩把小盒子綁得很漂亮。"
    },
    {
        "word": "thing",
        "meaning": "東西",
        "theme": "雜物",
        "sentence": "Keeping your body healthy is the most important thing in life.",
        "sentenceZh": "保持身體健康是生命中最重要的事。"
    },
    {
        "word": "tool",
        "meaning": "工具",
        "theme": "雜物",
        "sentence": "A computer is a very powerful tool for learning new things.",
        "sentenceZh": "電腦是學習新事物非常強大的工具。"
    },
    {
        "word": "trap",
        "meaning": "陷阱",
        "theme": "雜物",
        "sentence": "The small mouse was finally caught in the wooden trap.",
        "sentenceZh": "那隻小老鼠最後被抓進了木製陷阱裡。"
    },
    {
        "word": "trash",
        "meaning": "垃圾",
        "theme": "雜物",
        "sentence": "Don't throw your trash on the floor; put it in the can.",
        "sentenceZh": "不要把垃圾丟在地上，把它丟進垃圾桶裡。"
    },
    {
        "word": "treasure",
        "meaning": "寶藏",
        "theme": "雜物",
        "sentence": "The pirates found a hidden box of gold treasure on the island.",
        "sentenceZh": "海盜在島上找到了一箱隱藏的黃金寶藏。"
    },
    {
        "word": "trick",
        "meaning": "詭計",
        "theme": "雜物",
        "sentence": "The street magician showed us a very cool card trick.",
        "sentenceZh": "街頭魔術師表演了一個非常酷的撲克牌戲法。"
    },
    {
        "word": "good-bye (goodbye, bye)",
        "meaning": "再見",
        "theme": "會話",
        "sentence": "Wave your hand and say good-bye to your classmates.",
        "sentenceZh": "揮揮手並向你的同學們說再見。"
    },
    {
        "word": "goodness",
        "meaning": "天啊",
        "theme": "會話",
        "sentence": "My goodness! The wind is blowing so strong today!",
        "sentenceZh": "我的天啊！今天的風吹得好大！"
    },
    {
        "word": "hello",
        "meaning": "哈囉",
        "theme": "會話",
        "sentence": "Please smile and say hello to the new student in our class.",
        "sentenceZh": "請微笑並向我們班上的新同學說哈囉。"
    },
    {
        "word": "hey",
        "meaning": "嘿",
        "theme": "會話",
        "sentence": "Hey! Don't forget to take your umbrella, it is raining outside!",
        "sentenceZh": "嘿！別忘了帶傘，外面在下雨！"
    },
    {
        "word": "hi",
        "meaning": "嗨",
        "theme": "會話",
        "sentence": "Hi, how are you doing with your homework today?",
        "sentenceZh": "嗨，你今天的功課做得怎麼樣了？"
    },
    {
        "word": "no",
        "meaning": "不",
        "theme": "會話",
        "sentence": "He shook his head slowly and said no to the question.",
        "sentenceZh": "他慢慢地搖搖頭，對這個問題說不。"
    },
    {
        "word": "Of course",
        "meaning": "當然",
        "theme": "會話",
        "sentence": "\"Can you help me fix this bug?\" \"Of course I can!\"",
        "sentenceZh": "「你能幫我修這個程式錯誤嗎？」「我當然可以！」"
    },
    {
        "word": "OK",
        "meaning": "ok",
        "theme": "會話",
        "sentence": "Are you OK? You look a little bit pale today.",
        "sentenceZh": "你還OK嗎？你今天看起來有點蒼白。"
    },
    {
        "word": "pardon",
        "meaning": "不好意思",
        "theme": "會話",
        "sentence": "Pardon me, could you please repeat that English word again?",
        "sentenceZh": "不好意思，能請您再重複一次那個英文單字嗎？"
    },
    {
        "word": "sorry",
        "meaning": "抱歉的；難過的",
        "theme": "會話",
        "sentence": "I am very sorry for breaking your favorite coffee cup.",
        "sentenceZh": "打破了你最愛的咖啡杯我感到非常抱歉。"
    },
    {
        "word": "sure",
        "meaning": "當然",
        "theme": "會話",
        "sentence": "Are you sure this is the right way to the train station?",
        "sentenceZh": "你確定這是前往火車站的正確道路嗎？"
    },
    {
        "word": "yes (yeah)",
        "meaning": "好",
        "theme": "會話",
        "sentence": "Yes, I have already finished my English reading homework.",
        "sentenceZh": "是的，我已經寫完我的英文閱讀作業了。"
    },
    {
        "word": "sound",
        "meaning": "聽起來",
        "theme": "五官動詞",
        "sentence": "That 1980s synth-pop song sounds really wonderful.",
        "sentenceZh": "那首 80 年代的合成器流行歌聽起來真的很棒。"
    },
    {
        "word": "taste",
        "meaning": "嘗起來",
        "theme": "五官動詞",
        "sentence": "The beef noodles in Douliu taste very delicious.",
        "sentenceZh": "斗六的牛肉麵嘗起來非常美味。"
    },
    {
        "word": "look",
        "meaning": "看",
        "theme": "五官動詞",
        "sentence": "You look very tired after the long badminton practice.",
        "sentenceZh": "漫長的羽球練習後你看起來非常累。"
    },
    {
        "word": "feel",
        "meaning": "感覺到；感覺起來",
        "theme": "五官動詞",
        "sentence": "The soft blanket feels very warm and comfortable.",
        "sentenceZh": "柔軟的毯子感覺起來非常溫暖舒適。"
    },
    {
        "word": "smell",
        "meaning": "聞到；聞起來",
        "theme": "五官動詞",
        "sentence": "The fried chicken in the night market smells so good.",
        "sentenceZh": "夜市裡的炸雞聞起來好香。"
    },
    {
        "word": "see",
        "meaning": "看到",
        "theme": "五官動詞",
        "sentence": "I can see a beautiful rainbow in the clear sky.",
        "sentenceZh": "我能在晴朗的天空中看到一道美麗的彩虹。"
    },
    {
        "word": "hear",
        "meaning": "聽到",
        "theme": "五官動詞",
        "sentence": "Did you hear the school bell ringing just now?",
        "sentenceZh": "你剛才有聽到學校的鐘聲響嗎？"
    },
    {
        "word": "listen",
        "meaning": "聆聽",
        "theme": "五官動詞",
        "sentence": "Please listen carefully to the teacher's instructions.",
        "sentenceZh": "請仔細聆聽老師的指示。"
    },
    {
        "word": "watch",
        "meaning": "觀看",
        "theme": "五官動詞",
        "sentence": "We watched an exciting badminton game on TV last night.",
        "sentenceZh": "我們昨晚在電視上觀看了一場刺激的羽球比賽。"
    },
    {
        "word": "beat",
        "meaning": "打擊",
        "theme": "手部動作",
        "sentence": "In the game, you have to beat the boss to win.",
        "sentenceZh": "在遊戲中，你必須打敗魔王才能獲勝。"
    },
    {
        "word": "brush",
        "meaning": "刷",
        "theme": "手部動作",
        "sentence": "Remember to brush your teeth twice a day.",
        "sentenceZh": "記得每天刷兩次牙。"
    },
    {
        "word": "catch",
        "meaning": "抓住",
        "theme": "手部動作",
        "sentence": "He ran fast to catch the school bus this morning.",
        "sentenceZh": "他今天早上跑得很快去趕校車。"
    },
    {
        "word": "clap",
        "meaning": "拍手",
        "theme": "手部動作",
        "sentence": "The students began to clap after the great speech.",
        "sentenceZh": "精彩的演講過後，學生們開始拍手。"
    },
    {
        "word": "dial",
        "meaning": "撥號",
        "theme": "手部動作",
        "sentence": "You can dial 119 if there is a fire.",
        "sentenceZh": "如果發生火災你可以撥打 119。"
    },
    {
        "word": "dig",
        "meaning": "挖掘",
        "theme": "手部動作",
        "sentence": "The dog likes to dig holes in the garden.",
        "sentenceZh": "那隻狗喜歡在花園裡挖洞。"
    },
    {
        "word": "give",
        "meaning": "給予",
        "theme": "手部動作",
        "sentence": "My uncle gave me a new watch for my birthday.",
        "sentenceZh": "我叔叔給了我一隻新手錶當生日禮物。"
    },
    {
        "word": "hit",
        "meaning": "擊打",
        "theme": "手部動作",
        "sentence": "You must hit the badminton ball hard to get a point.",
        "sentenceZh": "你必須用力擊打羽球才能得分。"
    },
    {
        "word": "hold",
        "meaning": "握住",
        "theme": "手部動作",
        "sentence": "Please hold my hand when we cross the street.",
        "sentenceZh": "過馬路時請握住我的手。"
    },
    {
        "word": "hug",
        "meaning": "擁抱",
        "theme": "手部動作",
        "sentence": "She gave her mother a big hug on Mother's Day.",
        "sentenceZh": "母親節時她給了媽媽一個大大的擁抱。"
    },
    {
        "word": "knock",
        "meaning": "敲",
        "theme": "手部動作",
        "sentence": "Someone is knocking on the classroom door.",
        "sentenceZh": "有人正在敲教室的門。"
    },
    {
        "word": "lay",
        "meaning": "放置（產卵）",
        "theme": "手部動作",
        "sentence": "The brown hen lays a fresh egg every morning.",
        "sentenceZh": "那隻棕色母雞每天早上都會生一顆新鮮的蛋。"
    },
    {
        "word": "lift",
        "meaning": "舉起",
        "theme": "手部動作",
        "sentence": "The box is too heavy for me to lift.",
        "sentenceZh": "這個箱子對我來說太重了，舉不起來。"
    },
    {
        "word": "pick",
        "meaning": "撿起；選擇",
        "theme": "手部動作",
        "sentence": "Please pick up the trash on the floor.",
        "sentenceZh": "請撿起地上的垃圾。"
    },
    {
        "word": "pull",
        "meaning": "拉",
        "theme": "手部動作",
        "sentence": "Push the door to open it, don't pull it.",
        "sentenceZh": "推門來打開它，不要拉。"
    },
    {
        "word": "push",
        "meaning": "推",
        "theme": "手部動作",
        "sentence": "The boy tried to push the heavy desk to the corner.",
        "sentenceZh": "男孩試著把笨重的書桌推到角落。"
    },
    {
        "word": "put",
        "meaning": "放",
        "theme": "手部動作",
        "sentence": "Put your vocabulary passport on the desk, please.",
        "sentenceZh": "請把你的單字護照放在桌上。"
    },
    {
        "word": "sign",
        "meaning": "簽名",
        "theme": "手部動作",
        "sentence": "Please sign your name at the bottom of the test paper.",
        "sentenceZh": "請在考卷底部簽名。"
    },
    {
        "word": "throw",
        "meaning": "丟擲",
        "theme": "手部動作",
        "sentence": "Don't throw the ball inside the classroom.",
        "sentenceZh": "不要把球丟在教室裡。"
    },
    {
        "word": "touch",
        "meaning": "觸摸",
        "theme": "手部動作",
        "sentence": "Don't touch the hot pot, you might burn yourself.",
        "sentenceZh": "不要碰那個熱鍋子，你可能會燙傷自己。"
    },
    {
        "word": "type",
        "meaning": "打字",
        "theme": "手部動作",
        "sentence": "She can type English words very fast on the computer.",
        "sentenceZh": "她能在電腦上把英文單字打得非常快。"
    },
    {
        "word": "wave",
        "meaning": "揮手",
        "theme": "手部動作",
        "sentence": "She smiled and waved goodbye to her good friend.",
        "sentenceZh": "她微笑著向她的好朋友揮手道別。"
    },
    {
        "word": "chase",
        "meaning": "追逐",
        "theme": "腳部動作",
        "sentence": "The dog loves to chase the cat around the yard.",
        "sentenceZh": "那隻狗喜歡在院子裡追著貓跑。"
    },
    {
        "word": "come",
        "meaning": "來",
        "theme": "腳部動作",
        "sentence": "Come here and look at this funny picture!",
        "sentenceZh": "來這裡看看這張好笑的圖片！"
    },
    {
        "word": "enter",
        "meaning": "進入",
        "theme": "腳部動作",
        "sentence": "Please knock on the door before you enter the office.",
        "sentenceZh": "進入辦公室前請先敲門。"
    },
    {
        "word": "exist",
        "meaning": "存在",
        "theme": "腳部動作",
        "sentence": "Do you believe that ghosts really exist?",
        "sentenceZh": "你相信鬼魂真的存在嗎？"
    },
    {
        "word": "follow",
        "meaning": "跟隨",
        "theme": "腳部動作",
        "sentence": "Follow me, and I will show you the way to the library.",
        "sentenceZh": "跟著我，我會帶你去圖書館。"
    },
    {
        "word": "go",
        "meaning": "去",
        "theme": "腳部動作",
        "sentence": "We usually go to the movies on Saturday afternoon.",
        "sentenceZh": "我們通常在星期六下午去看電影。"
    },
    {
        "word": "hop",
        "meaning": "單腳跳",
        "theme": "腳部動作",
        "sentence": "The little rabbit hopped across the green grass.",
        "sentenceZh": "小兔子跳過了綠草地。"
    },
    {
        "word": "jump",
        "meaning": "跳躍",
        "theme": "腳部動作",
        "sentence": "He jumped high to catch the basketball.",
        "sentenceZh": "他跳得很高去接籃球。"
    },
    {
        "word": "kick",
        "meaning": "踢",
        "theme": "腳部動作",
        "sentence": "He kicked the soccer ball right into the net.",
        "sentenceZh": "他把足球直接踢進了網子裡。"
    },
    {
        "word": "leave",
        "meaning": "離開",
        "theme": "腳部動作",
        "sentence": "Remember to turn off the lights before you leave.",
        "sentenceZh": "離開前記得關燈。"
    },
    {
        "word": "move",
        "meaning": "移動",
        "theme": "腳部動作",
        "sentence": "Can you help me move this heavy sofa?",
        "sentenceZh": "你能幫我移動這張笨重的沙發嗎？"
    },
    {
        "word": "run",
        "meaning": "跑",
        "theme": "腳部動作",
        "sentence": "Don't run in the hallway, it is dangerous.",
        "sentenceZh": "不要在走廊上奔跑，這很危險。"
    },
    {
        "word": "stand",
        "meaning": "站立",
        "theme": "腳部動作",
        "sentence": "Please stand up when the principal comes in.",
        "sentenceZh": "校長進來時請起立。"
    },
    {
        "word": "walk",
        "meaning": "走路",
        "theme": "腳部動作",
        "sentence": "I usually walk to school because it is very close.",
        "sentenceZh": "我通常走路去上學因為距離很近。"
    },
    {
        "word": "bark",
        "meaning": "吠叫",
        "theme": "臉部動作",
        "sentence": "The dog will bark loudly when a stranger comes near.",
        "sentenceZh": "當陌生人靠近時，這隻狗會大聲吠叫。"
    },
    {
        "word": "bite",
        "meaning": "咬",
        "theme": "臉部動作",
        "sentence": "Don't put your hand there; the spider might bite you.",
        "sentenceZh": "不要把手放在那裡，蜘蛛可能會咬你。"
    },
    {
        "word": "blow",
        "meaning": "吹",
        "theme": "臉部動作",
        "sentence": "The wind is blowing hard today.",
        "sentenceZh": "今天的風吹得很大。"
    },
    {
        "word": "cry",
        "meaning": "哭",
        "theme": "臉部動作",
        "sentence": "The little baby began to cry because he was hungry.",
        "sentenceZh": "小嬰兒因為肚子餓開始哭。"
    },
    {
        "word": "describe",
        "meaning": "描述",
        "theme": "臉部動作",
        "sentence": "Can you describe what the thief looked like?",
        "sentenceZh": "你能描述一下那個小偷長什麼樣子嗎？"
    },
    {
        "word": "kiss",
        "meaning": "親吻",
        "theme": "臉部動作",
        "sentence": "She kissed her mother goodnight before going to sleep.",
        "sentenceZh": "她睡前給了媽媽一個晚安吻。"
    },
    {
        "word": "lick",
        "meaning": "舔",
        "theme": "臉部動作",
        "sentence": "The cat licked its paw to clean itself.",
        "sentenceZh": "貓舔了舔爪子來清潔自己。"
    },
    {
        "word": "meet",
        "meaning": "遇見",
        "theme": "臉部動作",
        "sentence": "I will meet you at the station at five o'clock.",
        "sentenceZh": "我五點會在車站跟你碰面。"
    },
    {
        "word": "nod",
        "meaning": "點頭",
        "theme": "臉部動作",
        "sentence": "The student nodded to show that he understood the grammar.",
        "sentenceZh": "學生點點頭表示他懂這個文法了。"
    },
    {
        "word": "promise",
        "meaning": "承諾",
        "theme": "臉部動作",
        "sentence": "I promise I will finish writing the HTML code tomorrow.",
        "sentenceZh": "我承諾我明天會寫完 HTML 程式碼。"
    },
    {
        "word": "swallow",
        "meaning": "吞嚥",
        "theme": "臉部動作",
        "sentence": "Take some water to help you swallow the medicine.",
        "sentenceZh": "喝點水來幫你吞下這顆藥。"
    },
    {
        "word": "drink",
        "meaning": "喝",
        "theme": "臉部動作",
        "sentence": "You should drink a lot of water after exercising.",
        "sentenceZh": "運動後你應該多喝水。"
    },
    {
        "word": "eat",
        "meaning": "吃",
        "theme": "臉部動作",
        "sentence": "We eat dinner together as a family every evening.",
        "sentenceZh": "我們每天傍晚一家人會一起吃晚餐。"
    },
    {
        "word": "advise",
        "meaning": "建議",
        "theme": "言語動作",
        "sentence": "I advise you to practice your vocabulary every day.",
        "sentenceZh": "我建議你每天練習單字。"
    },
    {
        "word": "apologize",
        "meaning": "道歉",
        "theme": "言語動作",
        "sentence": "You should apologize for being late to class.",
        "sentenceZh": "你應該為上課遲到而道歉。"
    },
    {
        "word": "argue",
        "meaning": "爭論",
        "theme": "言語動作",
        "sentence": "The two boys started to argue about the game rules.",
        "sentenceZh": "那兩個男孩開始為遊戲規則爭論。"
    },
    {
        "word": "cheat",
        "meaning": "欺騙",
        "theme": "言語動作",
        "sentence": "It is very wrong to cheat on an English test.",
        "sentenceZh": "在英文考試中作弊是非常不對的。"
    },
    {
        "word": "comment",
        "meaning": "評論",
        "theme": "言語動作",
        "sentence": "Please leave a comment below if you like this video.",
        "sentenceZh": "如果你喜歡這支影片，請在下方留言評論。"
    },
    {
        "word": "compare",
        "meaning": "比較",
        "theme": "言語動作",
        "sentence": "Let's compare these two cellphones to see which is better.",
        "sentenceZh": "我們來比較這兩支手機看看哪支比較好。"
    },
    {
        "word": "complain",
        "meaning": "抱怨",
        "theme": "言語動作",
        "sentence": "Don't complain about the homework; just do it.",
        "sentenceZh": "別抱怨作業了，做就對了。"
    },
    {
        "word": "discuss",
        "meaning": "討論",
        "theme": "言語動作",
        "sentence": "The teachers will discuss the new teaching plan today.",
        "sentenceZh": "老師們今天將討論新的教學計畫。"
    },
    {
        "word": "explain",
        "meaning": "解釋",
        "theme": "言語動作",
        "sentence": "Can you explain why you didn't finish your reading report?",
        "sentenceZh": "你能解釋一下為什麼你沒寫完讀書報告嗎？"
    },
    {
        "word": "express",
        "meaning": "表達",
        "theme": "言語動作",
        "sentence": "The beautiful poem expresses his deep love for his mother.",
        "sentenceZh": "這首美麗的詩表達了他對母親深厚的愛。"
    },
    {
        "word": "greet",
        "meaning": "問候",
        "theme": "言語動作",
        "sentence": "The polite student always greets the teacher with a smile.",
        "sentenceZh": "這位有禮貌的學生總是用微笑問候老師。"
    },
    {
        "word": "introduce",
        "meaning": "介紹",
        "theme": "言語動作",
        "sentence": "Let me introduce my new friend, Jason, to you.",
        "sentenceZh": "讓我把我的新朋友 Jason 介紹給你。"
    },
    {
        "word": "lie",
        "meaning": "說謊；躺",
        "theme": "言語動作",
        "sentence": "A good friend should never lie to you.",
        "sentenceZh": "好朋友絕不應該對你說謊。"
    },
    {
        "word": "praise",
        "meaning": "讚美",
        "theme": "言語動作",
        "sentence": "The teacher praised him for his hard work on the project.",
        "sentenceZh": "老師讚美他在這項專案上的努力。"
    },
    {
        "word": "pray",
        "meaning": "祈禱",
        "theme": "言語動作",
        "sentence": "They went to the temple to pray for good luck.",
        "sentenceZh": "他們去寺廟祈求好運。"
    },
    {
        "word": "shout",
        "meaning": "喊叫",
        "theme": "言語動作",
        "sentence": "Please don't shout in the library; people are reading.",
        "sentenceZh": "請不要在圖書館大聲喊叫，人們正在看書。"
    },
    {
        "word": "suggest",
        "meaning": "建議",
        "theme": "言語動作",
        "sentence": "I suggest we take a bus instead of walking in the rain.",
        "sentenceZh": "我建議我們搭公車，而不是在雨中走路。"
    },
    {
        "word": "tell",
        "meaning": "告訴",
        "theme": "言語動作",
        "sentence": "Can you tell me the correct answer to this problem?",
        "sentenceZh": "你能告訴我這個問題的正確答案嗎？"
    },
    {
        "word": "thank",
        "meaning": "感謝",
        "theme": "言語動作",
        "sentence": "I want to thank you for helping me with my math homework.",
        "sentenceZh": "我想感謝你幫我做數學作業。"
    },
    {
        "word": "yell",
        "meaning": "大叫",
        "theme": "言語動作",
        "sentence": "The angry man yelled loudly at the driver.",
        "sentenceZh": "生氣的男人對著司機大叫。"
    },
    {
        "word": "accept",
        "meaning": "接受",
        "theme": "心智動作",
        "sentence": "She happily accepted the invitation to the birthday party.",
        "sentenceZh": "她開心地接受了生日派對的邀請。"
    },
    {
        "word": "admire",
        "meaning": "欽佩",
        "theme": "心智動作",
        "sentence": "I really admire the way he plays badminton.",
        "sentenceZh": "我真的很欽佩他打羽球的方式。"
    },
    {
        "word": "agree",
        "meaning": "同意",
        "theme": "心智動作",
        "sentence": "I completely agree with your great idea.",
        "sentenceZh": "我完全同意你這個好主意。"
    },
    {
        "word": "allow",
        "meaning": "允許",
        "theme": "心智動作",
        "sentence": "We are not allowed to eat food in the computer room.",
        "sentenceZh": "我們不被允許在電腦教室吃東西。"
    },
    {
        "word": "appreciate",
        "meaning": "欣賞；感謝",
        "theme": "心智動作",
        "sentence": "I really appreciate your help with the interactive game.",
        "sentenceZh": "我真的很感謝你在互動遊戲上的幫忙。"
    },
    {
        "word": "assume",
        "meaning": "假設",
        "theme": "心智動作",
        "sentence": "I assume you have already finished writing the sentences.",
        "sentenceZh": "我假設你已經寫完這些句子了。"
    },
    {
        "word": "believe",
        "meaning": "相信",
        "theme": "心智動作",
        "sentence": "I believe that you can pass the test if you study hard.",
        "sentenceZh": "我相信只要你努力讀書就能通過考試。"
    },
    {
        "word": "blame",
        "meaning": "責備",
        "theme": "心智動作",
        "sentence": "Don't blame him; it was not his fault.",
        "sentenceZh": "別責備他，那不是他的錯。"
    },
    {
        "word": "bless",
        "meaning": "祝福",
        "theme": "心智動作",
        "sentence": "May God bless you with good health and happiness.",
        "sentenceZh": "願上帝賜福你健康快樂。"
    },
    {
        "word": "choose",
        "meaning": "選擇",
        "theme": "心智動作",
        "sentence": "You can choose either the red pen or the blue pen.",
        "sentenceZh": "你可以選擇紅筆或藍筆。"
    },
    {
        "word": "consider",
        "meaning": "考慮",
        "theme": "心智動作",
        "sentence": "We need to consider the weather before we go camping.",
        "sentenceZh": "我們去露營前需要考慮天氣狀況。"
    },
    {
        "word": "control",
        "meaning": "控制",
        "theme": "心智動作",
        "sentence": "You use the mouse to control the character in the game.",
        "sentenceZh": "你用滑鼠來控制遊戲裡的角色。"
    },
    {
        "word": "count",
        "meaning": "數數",
        "theme": "心智動作",
        "sentence": "Can you count from one to one hundred in English?",
        "sentenceZh": "你能用英文從一數到一百嗎？"
    },
    {
        "word": "decide",
        "meaning": "決定",
        "theme": "心智動作",
        "sentence": "I haven't decided what I want to eat for dinner yet.",
        "sentenceZh": "我還沒決定晚餐想吃什麼。"
    },
    {
        "word": "define",
        "meaning": "定義",
        "theme": "心智動作",
        "sentence": "Please use the dictionary to define this new vocabulary word.",
        "sentenceZh": "請用字典來定義這個新單字。"
    },
    {
        "word": "detect",
        "meaning": "偵測",
        "theme": "心智動作",
        "sentence": "The game program can detect if your spelling is correct.",
        "sentenceZh": "遊戲程式能偵測你的拼寫是否正確。"
    },
    {
        "word": "elect",
        "meaning": "選舉",
        "theme": "心智動作",
        "sentence": "The class voted to elect him as the new class leader.",
        "sentenceZh": "全班投票選舉他為新班長。"
    },
    {
        "word": "expect",
        "meaning": "預期",
        "theme": "心智動作",
        "sentence": "I didn't expect the math test to be this difficult.",
        "sentenceZh": "我沒預期數學考試會這麼難。"
    },
    {
        "word": "focus",
        "meaning": "聚焦",
        "theme": "心智動作",
        "sentence": "You need to focus your mind on studying for the exam.",
        "sentenceZh": "你需要把心思專注在準備考試上。"
    },
    {
        "word": "forget",
        "meaning": "忘記",
        "theme": "心智動作",
        "sentence": "Don't forget to bring your umbrella tomorrow morning!",
        "sentenceZh": "明天早上別忘了帶傘！"
    },
    {
        "word": "forgive",
        "meaning": "原諒",
        "theme": "心智動作",
        "sentence": "She decided to forgive him for his honest mistake.",
        "sentenceZh": "她決定原諒他無心之過的錯誤。"
    },
    {
        "word": "guess",
        "meaning": "猜測",
        "theme": "心智動作",
        "sentence": "Can you guess what is inside this beautiful gift box?",
        "sentenceZh": "你能猜到這精美禮物盒裡裝了什麼嗎？"
    },
    {
        "word": "help",
        "meaning": "幫助",
        "theme": "心智動作",
        "sentence": "My teacher always helps me when I don't understand the grammar.",
        "sentenceZh": "當我不懂文法時，我的老師總是會幫助我。"
    },
    {
        "word": "hope",
        "meaning": "希望",
        "theme": "心智動作",
        "sentence": "I hope the weather will be sunny for our picnic tomorrow.",
        "sentenceZh": "我希望明天野餐的天氣會是晴朗的。"
    },
    {
        "word": "ignore",
        "meaning": "忽略",
        "theme": "心智動作",
        "sentence": "She tried to ignore the loud noise outside her window.",
        "sentenceZh": "她試著忽略窗外的巨大噪音。"
    },
    {
        "word": "imagine",
        "meaning": "想像",
        "theme": "心智動作",
        "sentence": "Try to imagine what the world will look like in the future.",
        "sentenceZh": "試著想像未來的世界會是什麼樣子。"
    },
    {
        "word": "insist",
        "meaning": "堅持",
        "theme": "心智動作",
        "sentence": "He insisted on paying for everyone's dinner.",
        "sentenceZh": "他堅持要付大家吃晚餐的錢。"
    },
    {
        "word": "inspire",
        "meaning": "激勵",
        "theme": "心智動作",
        "sentence": "His great speech inspired many students to work harder.",
        "sentenceZh": "他精彩的演講激勵了許多學生更努力。"
    },
    {
        "word": "judge",
        "meaning": "判斷",
        "theme": "心智動作",
        "sentence": "You shouldn't judge a book by its cover.",
        "sentenceZh": "你不應該以貌取人（勿以書封評斷一本書）。"
    },
    {
        "word": "know",
        "meaning": "知道",
        "theme": "心智動作",
        "sentence": "Do you know how to play this grammar repair game?",
        "sentenceZh": "你知道怎麼玩這個語法修復遊戲嗎？"
    },
    {
        "word": "mind",
        "meaning": "介意",
        "theme": "心智動作",
        "sentence": "Do you mind if I sit in this empty seat?",
        "sentenceZh": "你介意我坐這個空位嗎？"
    },
    {
        "word": "miss",
        "meaning": "想念；未擊中",
        "theme": "心智動作",
        "sentence": "I really miss my old friends from elementary school.",
        "sentenceZh": "我真的很想念我小學的老朋友。"
    },
    {
        "word": "notice",
        "meaning": "注意到",
        "theme": "心智動作",
        "sentence": "Did you notice his cool new shoes today?",
        "sentenceZh": "你今天有注意到他酷炫的新鞋子嗎？"
    },
    {
        "word": "obey",
        "meaning": "服從",
        "theme": "心智動作",
        "sentence": "Everyone must obey the traffic rules for safety.",
        "sentenceZh": "為了安全每個人都必須遵守交通規則。"
    },
    {
        "word": "plan",
        "meaning": "計劃",
        "theme": "心智動作",
        "sentence": "We plan to visit Japan during the summer vacation.",
        "sentenceZh": "我們計畫暑假去日本玩。"
    },
    {
        "word": "prepare",
        "meaning": "準備",
        "theme": "心智動作",
        "sentence": "The mother is preparing a rich dinner for her family.",
        "sentenceZh": "媽媽正在為家人準備一頓豐盛的晚餐。"
    },
    {
        "word": "realize",
        "meaning": "意識到",
        "theme": "心智動作",
        "sentence": "He finally realized that he had made a big mistake.",
        "sentenceZh": "他終於意識到他犯了一個大錯。"
    },
    {
        "word": "refuse",
        "meaning": "拒絕",
        "theme": "心智動作",
        "sentence": "He refused to take the money because it wasn't his.",
        "sentenceZh": "他拒絕拿那些錢因為那不是他的。"
    },
    {
        "word": "reject",
        "meaning": "拒絕",
        "theme": "心智動作",
        "sentence": "The company rejected his design for the new game character.",
        "sentenceZh": "公司拒絕了他對新遊戲角色的設計。"
    },
    {
        "word": "remember",
        "meaning": "記得",
        "theme": "心智動作",
        "sentence": "Do you remember the vocabulary words we learned yesterday?",
        "sentenceZh": "你記得我們昨天學的單字嗎？"
    },
    {
        "word": "respect",
        "meaning": "尊重",
        "theme": "心智動作",
        "sentence": "You should always respect your teachers and parents.",
        "sentenceZh": "你應該永遠尊重你的老師和父母。"
    },
    {
        "word": "select",
        "meaning": "選擇",
        "theme": "心智動作",
        "sentence": "Please select the correct answer from the list below.",
        "sentenceZh": "請從下面的清單中選擇正確的答案。"
    },
    {
        "word": "support",
        "meaning": "支持",
        "theme": "心智動作",
        "sentence": "A good friend will always support you when you are sad.",
        "sentenceZh": "當你難過時，好朋友總會支持你。"
    },
    {
        "word": "think",
        "meaning": "思考",
        "theme": "心智動作",
        "sentence": "I think this interactive game is very helpful for learning.",
        "sentenceZh": "我覺得這個互動遊戲對學習很有幫助。"
    },
    {
        "word": "trust",
        "meaning": "信任",
        "theme": "心智動作",
        "sentence": "You can trust him; he never tells lies.",
        "sentenceZh": "你可以信任他，他從不說謊。"
    },
    {
        "word": "try",
        "meaning": "嘗試",
        "theme": "心智動作",
        "sentence": "Don't give up! Just try your best to swing the racket.",
        "sentenceZh": "別放棄！盡全力去揮拍試試看。"
    },
    {
        "word": "wake",
        "meaning": "醒來",
        "theme": "心智動作",
        "sentence": "My alarm clock usually wakes me up at six o'clock.",
        "sentenceZh": "我的鬧鐘通常在六點叫我醒來。"
    },
    {
        "word": "want",
        "meaning": "想要",
        "theme": "心智動作",
        "sentence": "I want to be an English teacher when I grow up.",
        "sentenceZh": "我長大後想要當一名英文老師。"
    },
    {
        "word": "wish",
        "meaning": "希望",
        "theme": "心智動作",
        "sentence": "Make a wish before you blow out the birthday candles!",
        "sentenceZh": "吹熄生日蠟燭前先許個願吧！"
    },
    {
        "word": "affect",
        "meaning": "影響",
        "theme": "狀態動作",
        "sentence": "The bad weather will affect our plans to play basketball.",
        "sentenceZh": "壞天氣將會影響我們打籃球的計畫。"
    },
    {
        "word": "appear",
        "meaning": "出現",
        "theme": "狀態動作",
        "sentence": "A beautiful rainbow appeared in the sky after the rain.",
        "sentenceZh": "雨後天空中出現了一道美麗的彩虹。"
    },
    {
        "word": "become",
        "meaning": "變成",
        "theme": "狀態動作",
        "sentence": "The little green caterpillar will become a butterfly.",
        "sentenceZh": "綠色小毛毛蟲將會變成蝴蝶。"
    },
    {
        "word": "begin",
        "meaning": "開始",
        "theme": "狀態動作",
        "sentence": "The English class will begin in five minutes.",
        "sentenceZh": "英文課將在五分鐘後開始。"
    },
    {
        "word": "belong",
        "meaning": "屬於",
        "theme": "狀態動作",
        "sentence": "This red dictionary belongs to the school library.",
        "sentenceZh": "這本紅字典屬於學校圖書館。"
    },
    {
        "word": "burst",
        "meaning": "爆發",
        "theme": "狀態動作",
        "sentence": "The balloon burst loudly when he sat on it.",
        "sentenceZh": "當他坐上去時，氣球發出很大聲的爆破。"
    },
    {
        "word": "cancel",
        "meaning": "取消",
        "theme": "狀態動作",
        "sentence": "The school sports day was canceled because of the typhoon.",
        "sentenceZh": "學校運動會因為颱風被取消了。"
    },
    {
        "word": "complete",
        "meaning": "完成",
        "theme": "狀態動作",
        "sentence": "You must complete the vocabulary test by Friday.",
        "sentenceZh": "你必須在星期五前完成單字測驗。"
    },
    {
        "word": "continue",
        "meaning": "繼續",
        "theme": "狀態動作",
        "sentence": "Please continue reading the story on page twenty.",
        "sentenceZh": "請繼續閱讀第二十頁的故事。"
    },
    {
        "word": "cover",
        "meaning": "覆蓋",
        "theme": "狀態動作",
        "sentence": "Snow covered the mountains during the cold winter.",
        "sentenceZh": "寒冬時雪覆蓋了群山。"
    },
    {
        "word": "cut",
        "meaning": "切割",
        "theme": "狀態動作",
        "sentence": "She used a sharp knife to cut the birthday cake.",
        "sentenceZh": "她用一把利刀切生日蛋糕。"
    },
    {
        "word": "decrease",
        "meaning": "減少",
        "theme": "狀態動作",
        "sentence": "The number of students in the school is decreasing every year.",
        "sentenceZh": "學校裡的學生人數每年都在減少。"
    },
    {
        "word": "depend",
        "meaning": "依賴",
        "theme": "狀態動作",
        "sentence": "Our picnic tomorrow will depend on the weather.",
        "sentenceZh": "我們明天的野餐將取決於天氣。"
    },
    {
        "word": "develop",
        "meaning": "發展",
        "theme": "狀態動作",
        "sentence": "He wants to develop a fun web game for his English class.",
        "sentenceZh": "他想為他的英文課開發一個有趣的網頁遊戲。"
    },
    {
        "word": "die",
        "meaning": "死亡",
        "theme": "狀態動作",
        "sentence": "The plants will die if you don't give them water.",
        "sentenceZh": "如果你不給植物澆水，它們會死亡。"
    },
    {
        "word": "disappear",
        "meaning": "消失",
        "theme": "狀態動作",
        "sentence": "The sun slowly disappeared behind the high mountains.",
        "sentenceZh": "太陽慢慢地消失在高山後方。"
    },
    {
        "word": "divide",
        "meaning": "分割",
        "theme": "狀態動作",
        "sentence": "The teacher divided the class into four small groups.",
        "sentenceZh": "老師把全班分成四個小組。"
    },
    {
        "word": "ease",
        "meaning": "緩和",
        "theme": "狀態動作",
        "sentence": "The medicine helped to ease the pain in his leg.",
        "sentenceZh": "藥物幫助緩和了他腿部的疼痛。"
    },
    {
        "word": "end",
        "meaning": "結束",
        "theme": "狀態動作",
        "sentence": "The movie will end in about twenty minutes.",
        "sentenceZh": "電影大約二十分鐘後會結束。"
    },
    {
        "word": "fail",
        "meaning": "失敗",
        "theme": "狀態動作",
        "sentence": "If you don't review your words, you might fail the test.",
        "sentenceZh": "如果你不複習單字，你考試可能會不及格。"
    },
    {
        "word": "fall",
        "meaning": "掉落",
        "theme": "狀態動作",
        "sentence": "The beautiful red leaves fall from the trees in autumn.",
        "sentenceZh": "美麗的紅葉在秋天從樹上掉落。"
    },
    {
        "word": "fill",
        "meaning": "填滿",
        "theme": "狀態動作",
        "sentence": "Please fill this glass with cold water.",
        "sentenceZh": "請把這個杯子裝滿冷水。"
    },
    {
        "word": "finish",
        "meaning": "完成",
        "theme": "狀態動作",
        "sentence": "He finished his math homework before dinner time.",
        "sentenceZh": "他在晚餐時間前完成了數學作業。"
    },
    {
        "word": "fit",
        "meaning": "適合",
        "theme": "狀態動作",
        "sentence": "These old shoes are too small; they don't fit me anymore.",
        "sentenceZh": "這些舊鞋太小了，它們不再適合我了。"
    },
    {
        "word": "form",
        "meaning": "形成",
        "theme": "狀態動作",
        "sentence": "The dark clouds began to form a huge storm.",
        "sentenceZh": "烏雲開始形成一場巨大的暴風雨。"
    },
    {
        "word": "gain",
        "meaning": "增加",
        "theme": "狀態動作",
        "sentence": "Eating too much fast food will make you gain weight.",
        "sentenceZh": "吃太多速食會讓你增加體重（變胖）。"
    },
    {
        "word": "get",
        "meaning": "得到",
        "theme": "狀態動作",
        "sentence": "I got a perfect score on my English grammar test!",
        "sentenceZh": "我的英文文法考試得到了滿分！"
    },
    {
        "word": "grow",
        "meaning": "成長；生長",
        "theme": "狀態動作",
        "sentence": "Trees need sunlight and water to grow tall and strong.",
        "sentenceZh": "樹木需要陽光和水分才能長得高大強壯。"
    },
    {
        "word": "happen",
        "meaning": "發生",
        "theme": "狀態動作",
        "sentence": "I don't know what happened to my computer screen.",
        "sentenceZh": "我不知道我的電腦螢幕發生了什麼事。"
    },
    {
        "word": "hurry",
        "meaning": "匆忙",
        "theme": "狀態動作",
        "sentence": "We must hurry up, or we will miss the train!",
        "sentenceZh": "我們必須快一點，否則會錯過火車！"
    },
    {
        "word": "improve",
        "meaning": "改善",
        "theme": "狀態動作",
        "sentence": "Reading every day is a good way to improve your English.",
        "sentenceZh": "每天閱讀是改善英文的好方法。"
    },
    {
        "word": "increase",
        "meaning": "增加",
        "theme": "狀態動作",
        "sentence": "The price of fresh vegetables increased after the typhoon.",
        "sentenceZh": "颱風過後新鮮蔬菜的價格增加了。"
    },
    {
        "word": "indicate",
        "meaning": "指出；暗示",
        "theme": "狀態動作",
        "sentence": "The sign indicates that you should turn left here.",
        "sentenceZh": "標誌指出你應該在這裡左轉。"
    },
    {
        "word": "keep",
        "meaning": "保持",
        "theme": "狀態動作",
        "sentence": "Please keep quiet while taking the final exam.",
        "sentenceZh": "考期末考時請保持安靜。"
    },
    {
        "word": "live",
        "meaning": "居住；生活",
        "theme": "狀態動作",
        "sentence": "My grandparents live in a quiet town in Yunlin County.",
        "sentenceZh": "我祖父母住在雲林縣一個安靜的城鎮。"
    },
    {
        "word": "lose",
        "meaning": "輸掉；失去",
        "theme": "狀態動作",
        "sentence": "The team felt sad because they lost the final game.",
        "sentenceZh": "隊伍感到難過因為他們輸了最後一場比賽。"
    },
    {
        "word": "match",
        "meaning": "匹配",
        "theme": "狀態動作",
        "sentence": "Please match the English words with their Chinese meanings.",
        "sentenceZh": "請把英文單字和它們的中文意思配對。"
    },
    {
        "word": "mean",
        "meaning": "意思是",
        "theme": "狀態動作",
        "sentence": "What does this difficult vocabulary word mean?",
        "sentenceZh": "這個困難的單字是什麼意思？"
    },
    {
        "word": "need",
        "meaning": "需要",
        "theme": "狀態動作",
        "sentence": "You need a good racket to play badminton well.",
        "sentenceZh": "你需要一把好球拍才能把羽球打好。"
    },
    {
        "word": "own",
        "meaning": "擁有",
        "theme": "狀態動作",
        "sentence": "I finally have my very own cell phone.",
        "sentenceZh": "我終於擁有了我自己專屬的手機。"
    },
    {
        "word": "pause",
        "meaning": "暫停",
        "theme": "狀態動作",
        "sentence": "Please pause the video so I can copy the sentence.",
        "sentenceZh": "請暫停影片讓我能抄寫這個句子。"
    },
    {
        "word": "pop",
        "meaning": "突然出現",
        "theme": "狀態動作",
        "sentence": "The balloon popped suddenly and scared the baby.",
        "sentenceZh": "氣球突然爆破嚇到了小嬰兒。"
    },
    {
        "word": "raise",
        "meaning": "提高；撫養",
        "theme": "狀態動作",
        "sentence": "Please raise your hand if you know the correct answer.",
        "sentenceZh": "如果你知道正確答案請舉手。"
    },
    {
        "word": "rest",
        "meaning": "休息",
        "theme": "狀態動作",
        "sentence": "You look tired; you should go home and rest.",
        "sentenceZh": "你看起來很累，你應該回家休息。"
    },
    {
        "word": "return",
        "meaning": "歸還",
        "theme": "狀態動作",
        "sentence": "Don't forget to return the books to the library tomorrow.",
        "sentenceZh": "記得明天要把書歸還給圖書館。"
    },
    {
        "word": "rise",
        "meaning": "上升",
        "theme": "狀態動作",
        "sentence": "The sun rises in the east every morning.",
        "sentenceZh": "太陽每天早上從東方升起。"
    },
    {
        "word": "roll",
        "meaning": "滾動",
        "theme": "狀態動作",
        "sentence": "The ball rolled slowly across the classroom floor.",
        "sentenceZh": "球緩慢地滾過教室地板。"
    },
    {
        "word": "ruin",
        "meaning": "毀滅",
        "theme": "狀態動作",
        "sentence": "The heavy rain ruined our plans for an outdoor barbecue.",
        "sentenceZh": "大雨毀了我們戶外烤肉的計畫。"
    },
    {
        "word": "rush",
        "meaning": "趕緊",
        "theme": "狀態動作",
        "sentence": "He had to rush to the station to catch his train.",
        "sentenceZh": "他必須趕去車站搭火車。"
    },
    {
        "word": "seem",
        "meaning": "似乎",
        "theme": "狀態動作",
        "sentence": "The grammar rule seems difficult, but it's actually easy.",
        "sentenceZh": "這個文法規則似乎很難，但其實很簡單。"
    },
    {
        "word": "shake",
        "meaning": "搖動",
        "theme": "狀態動作",
        "sentence": "The dog shook its body to get dry after a bath.",
        "sentenceZh": "狗洗澡後搖動身體把水弄乾。"
    },
    {
        "word": "start",
        "meaning": "開始",
        "theme": "狀態動作",
        "sentence": "The exciting movie will start in five minutes.",
        "sentenceZh": "刺激的電影將在五分鐘後開始。"
    },
    {
        "word": "stay",
        "meaning": "停留",
        "theme": "狀態動作",
        "sentence": "You should stay home and rest if you have a fever.",
        "sentenceZh": "如果你發燒了就應該留在家裡休息。"
    },
    {
        "word": "stop",
        "meaning": "停止",
        "theme": "狀態動作",
        "sentence": "The bus driver stopped the bus at the red light.",
        "sentenceZh": "公車司機在紅燈時把公車停了下來。"
    },
    {
        "word": "succeed",
        "meaning": "成功",
        "theme": "狀態動作",
        "sentence": "If you practice every day, you will succeed in learning English.",
        "sentenceZh": "如果你每天練習，你在學習英文上一定會成功。"
    },
    {
        "word": "survive",
        "meaning": "生存",
        "theme": "狀態動作",
        "sentence": "Camels can survive in the hot desert with very little water.",
        "sentenceZh": "駱駝能在極少水分的炎熱沙漠中生存。"
    },
    {
        "word": "wear",
        "meaning": "穿著",
        "theme": "狀態動作",
        "sentence": "Students must wear their uniforms to school on Monday.",
        "sentenceZh": "學生星期一必須穿制服上學。"
    },
    {
        "word": "win",
        "meaning": "贏得",
        "theme": "狀態動作",
        "sentence": "Our school team won the gold medal in the badminton race.",
        "sentenceZh": "我們校隊在羽球競賽中贏得了金牌。"
    },
    {
        "word": "act",
        "meaning": "表演；行動",
        "theme": "行為動作",
        "sentence": "He acted like a brave hero in the school play.",
        "sentenceZh": "他在學校話劇中扮演了一名勇敢的英雄。"
    },
    {
        "word": "add",
        "meaning": "增加",
        "theme": "行為動作",
        "sentence": "You can add some sugar to your coffee if it is too bitter.",
        "sentenceZh": "如果咖啡太苦，你可以加一點糖。"
    },
    {
        "word": "arrange",
        "meaning": "安排",
        "theme": "行為動作",
        "sentence": "The teacher arranged the desks in a big circle.",
        "sentenceZh": "老師把書桌安排成一個大圓圈。"
    },
    {
        "word": "attack",
        "meaning": "攻擊",
        "theme": "行為動作",
        "sentence": "The fierce tiger suddenly attacked the small animal.",
        "sentenceZh": "兇猛的老虎突然攻擊了那隻小動物。"
    },
    {
        "word": "avoid",
        "meaning": "避免",
        "theme": "行為動作",
        "sentence": "You should try to avoid making the same mistake twice.",
        "sentenceZh": "你應該盡量避免犯兩次同樣的錯誤。"
    },
    {
        "word": "bake",
        "meaning": "烘烤",
        "theme": "行為動作",
        "sentence": "My grandmother is baking a chocolate cake in the kitchen.",
        "sentenceZh": "我奶奶正在廚房烤巧克力蛋糕。"
    },
    {
        "word": "bathe",
        "meaning": "洗澡",
        "theme": "行為動作",
        "sentence": "I usually bathe my dog on Sunday morning.",
        "sentenceZh": "我通常在星期日早上幫我的狗洗澡。"
    },
    {
        "word": "boil",
        "meaning": "煮沸",
        "theme": "行為動作",
        "sentence": "The water will boil when the temperature reaches 100 degrees.",
        "sentenceZh": "當溫度達到 100 度時水就會沸騰。"
    },
    {
        "word": "bow",
        "meaning": "鞠躬",
        "theme": "行為動作",
        "sentence": "The students bowed to say thank you to the teacher.",
        "sentenceZh": "學生們鞠躬向老師說謝謝。"
    },
    {
        "word": "break",
        "meaning": "打破",
        "theme": "行為動作",
        "sentence": "Be careful, don't break that expensive glass!",
        "sentenceZh": "小心，別打破那個昂貴的玻璃杯！"
    },
    {
        "word": "bring",
        "meaning": "帶來",
        "theme": "行為動作",
        "sentence": "Remember to bring your English textbook to class tomorrow.",
        "sentenceZh": "記得明天帶你的英文課本來上課。"
    },
    {
        "word": "broadcast",
        "meaning": "廣播",
        "theme": "行為動作",
        "sentence": "The news was broadcast on television last night.",
        "sentenceZh": "昨晚電視廣播了這則新聞。"
    },
    {
        "word": "burn",
        "meaning": "燒焦",
        "theme": "行為動作",
        "sentence": "He cooked the meat too long, and it started to burn.",
        "sentenceZh": "他把肉煮太久，它開始燒焦了。"
    },
    {
        "word": "call",
        "meaning": "打電話；呼叫",
        "theme": "行為動作",
        "sentence": "I will call my mother when I arrive at the station.",
        "sentenceZh": "我到車站時會打電話給我媽媽。"
    },
    {
        "word": "carry",
        "meaning": "攜帶",
        "theme": "行為動作",
        "sentence": "Can you help me carry these heavy boxes to the classroom?",
        "sentenceZh": "你能幫我把這些重箱子搬去教室嗎？"
    },
    {
        "word": "check",
        "meaning": "檢查",
        "theme": "行為動作",
        "sentence": "Please check your answers carefully before handing in the test.",
        "sentenceZh": "交卷前請仔細檢查你的答案。"
    },
    {
        "word": "close",
        "meaning": "關閉",
        "theme": "行為動作",
        "sentence": "Please close the window because it is raining outside.",
        "sentenceZh": "外面在下雨，請把窗戶關上。"
    },
    {
        "word": "collect",
        "meaning": "收集",
        "theme": "行為動作",
        "sentence": "She likes to collect beautiful stamps from different countries.",
        "sentenceZh": "她喜歡收集不同國家的美麗郵票。"
    },
    {
        "word": "cook",
        "meaning": "烹調",
        "theme": "行為動作",
        "sentence": "My dad is going to cook dinner for us tonight.",
        "sentenceZh": "我爸爸今晚要煮晚餐給我們吃。"
    },
    {
        "word": "copy",
        "meaning": "複製",
        "theme": "行為動作",
        "sentence": "Do not copy answers from your classmates during the exam.",
        "sentenceZh": "考試時不要抄襲同學的答案。"
    },
    {
        "word": "correct",
        "meaning": "改正",
        "theme": "行為動作",
        "sentence": "The teacher used a red pen to correct my spelling mistakes.",
        "sentenceZh": "老師用紅筆改正了我的拼字錯誤。"
    },
    {
        "word": "create",
        "meaning": "創造",
        "theme": "行為動作",
        "sentence": "He wants to create an interactive game to help students learn.",
        "sentenceZh": "他想創造一個互動遊戲來幫助學生學習。"
    },
    {
        "word": "date",
        "meaning": "約會",
        "theme": "行為動作",
        "sentence": "The couple has been dating for two years.",
        "sentenceZh": "這對情侶已經約會兩年了。"
    },
    {
        "word": "deal",
        "meaning": "處理",
        "theme": "行為動作",
        "sentence": "It is difficult to deal with a problem when you are angry.",
        "sentenceZh": "當你在生氣時是很難處理問題的。"
    },
    {
        "word": "deliver",
        "meaning": "遞送",
        "theme": "行為動作",
        "sentence": "The mailman delivered a package to our house this morning.",
        "sentenceZh": "郵差今天早上遞送了一個包裹到我們家。"
    },
    {
        "word": "direct",
        "meaning": "指導",
        "theme": "行為動作",
        "sentence": "The police officer directed the traffic during the rush hour.",
        "sentenceZh": "警察在尖峰時間指揮交通。"
    },
    {
        "word": "discover",
        "meaning": "發現",
        "theme": "行為動作",
        "sentence": "The scientist discovered a new type of insect in the forest.",
        "sentenceZh": "科學家在森林裡發現了一種新型昆蟲。"
    },
    {
        "word": "download",
        "meaning": "下載",
        "theme": "行為動作",
        "sentence": "You can download the vocabulary app to your cell phone.",
        "sentenceZh": "你可以把單字應用程式下載到你的手機裡。"
    },
    {
        "word": "drop",
        "meaning": "掉落",
        "theme": "行為動作",
        "sentence": "I accidentally dropped my pen on the floor.",
        "sentenceZh": "我不小心把筆掉到地上了。"
    },
    {
        "word": "emphasize",
        "meaning": "強調",
        "theme": "行為動作",
        "sentence": "The teacher emphasized the importance of the grammar rules.",
        "sentenceZh": "老師強調了文法規則的重要性。"
    },
    {
        "word": "employ",
        "meaning": "雇用",
        "theme": "行為動作",
        "sentence": "The company plans to employ more engineers this year.",
        "sentenceZh": "公司計畫今年雇用更多工程師。"
    },
    {
        "word": "feed",
        "meaning": "餵食",
        "theme": "行為動作",
        "sentence": "Don't forget to feed the cat before you go to school.",
        "sentenceZh": "去上學前別忘了餵貓。"
    },
    {
        "word": "fight",
        "meaning": "打架",
        "theme": "行為動作",
        "sentence": "Good students should solve problems calmly, not by fighting.",
        "sentenceZh": "好學生應該冷靜解決問題，而不是靠打架。"
    },
    {
        "word": "find",
        "meaning": "找到",
        "theme": "行為動作",
        "sentence": "I cannot find my keys anywhere in the room.",
        "sentenceZh": "我在房間裡到處都找不到我的鑰匙。"
    },
    {
        "word": "fry",
        "meaning": "油炸",
        "theme": "行為動作",
        "sentence": "We are going to fry some chicken for dinner.",
        "sentenceZh": "我們晚餐打算炸一些雞肉。"
    },
    {
        "word": "gather",
        "meaning": "聚集",
        "theme": "行為動作",
        "sentence": "The students gathered in the gym to hear the principal's speech.",
        "sentenceZh": "學生們聚集在體育館聽校長演講。"
    },
    {
        "word": "guide",
        "meaning": "引導",
        "theme": "行為動作",
        "sentence": "The map will guide you to the famous old temple.",
        "sentenceZh": "地圖會引導你前往那座著名的古廟。"
    },
    {
        "word": "handle",
        "meaning": "處理",
        "theme": "行為動作",
        "sentence": "She is very calm and knows how to handle difficult problems.",
        "sentenceZh": "她非常冷靜，知道如何處理困難的問題。"
    },
    {
        "word": "hang",
        "meaning": "懸掛",
        "theme": "行為動作",
        "sentence": "Please hang your wet raincoat by the door.",
        "sentenceZh": "請把濕雨衣掛在門邊。"
    },
    {
        "word": "hide",
        "meaning": "隱藏",
        "theme": "行為動作",
        "sentence": "The scared little mouse tried to hide under the sofa.",
        "sentenceZh": "害怕的小老鼠試圖躲在沙發底下。"
    },
    {
        "word": "hire",
        "meaning": "雇用",
        "theme": "行為動作",
        "sentence": "The restaurant needs to hire a new cook for the weekend.",
        "sentenceZh": "餐廳週末需要雇用一位新廚師。"
    },
    {
        "word": "hunt",
        "meaning": "狩獵",
        "theme": "行為動作",
        "sentence": "In the past, people had to hunt wild animals for food.",
        "sentenceZh": "過去，人們必須狩獵野生動物來獲取食物。"
    },
    {
        "word": "hurt",
        "meaning": "傷害",
        "theme": "行為動作",
        "sentence": "He hurt his leg badly when he fell off his bike.",
        "sentenceZh": "他從腳踏車上摔下來時嚴重摔傷了腿。"
    },
    {
        "word": "include",
        "meaning": "包含",
        "theme": "行為動作",
        "sentence": "The meal price includes a bowl of soup and a drink.",
        "sentenceZh": "套餐價格包含了一碗湯和一杯飲料。"
    },
    {
        "word": "interrupt",
        "meaning": "打斷",
        "theme": "行為動作",
        "sentence": "It is impolite to interrupt someone when they are speaking.",
        "sentenceZh": "打斷別人說話是不禮貌的。"
    },
    {
        "word": "invent",
        "meaning": "發明",
        "theme": "行為動作",
        "sentence": "Thomas Edison invented the light bulb many years ago.",
        "sentenceZh": "湯瑪斯·愛迪生許多年前發明了電燈泡。"
    },
    {
        "word": "invite",
        "meaning": "邀請",
        "theme": "行為動作",
        "sentence": "I will invite all my friends to my birthday party.",
        "sentenceZh": "我會邀請我所有的朋友來參加我的生日派對。"
    },
    {
        "word": "iron",
        "meaning": "熨燙",
        "theme": "行為動作",
        "sentence": "My mother is ironing my school uniform to make it neat.",
        "sentenceZh": "我媽媽正在熨燙我的學校制服讓它變平整。"
    },
    {
        "word": "join",
        "meaning": "加入",
        "theme": "行為動作",
        "sentence": "Would you like to join our badminton club this semester?",
        "sentenceZh": "你這學期想加入我們的羽球社嗎？"
    },
    {
        "word": "kill",
        "meaning": "殺死",
        "theme": "行為動作",
        "sentence": "It is illegal to kill wild animals in this national park.",
        "sentenceZh": "在這個國家公園裡殺死野生動物是違法的。"
    },
    {
        "word": "lead",
        "meaning": "領導",
        "theme": "行為動作",
        "sentence": "The class leader will lead the students to the gym.",
        "sentenceZh": "班長將帶領學生們前往體育館。"
    },
    {
        "word": "let",
        "meaning": "讓",
        "theme": "行為動作",
        "sentence": "Please let me know if you need any help with the homework.",
        "sentenceZh": "如果你的作業需要任何幫忙，請讓我知道。"
    },
    {
        "word": "limit",
        "meaning": "限制",
        "theme": "行為動作",
        "sentence": "You should limit the time you spend playing computer games.",
        "sentenceZh": "你應該限制你玩電腦遊戲的時間。"
    },
    {
        "word": "list",
        "meaning": "列出",
        "theme": "行為動作",
        "sentence": "Please list all the materials you need for the science project.",
        "sentenceZh": "請列出你科學專案需要的所有材料。"
    },
    {
        "word": "lock",
        "meaning": "鎖上",
        "theme": "行為動作",
        "sentence": "Don't forget to lock the door before you leave the house.",
        "sentenceZh": "離開家前別忘了鎖門。"
    },
    {
        "word": "make",
        "meaning": "製作",
        "theme": "行為動作",
        "sentence": "We are going to make a beautiful card for Mother's Day.",
        "sentenceZh": "我們打算為母親節做一張美麗的卡片。"
    },
    {
        "word": "marry",
        "meaning": "結婚",
        "theme": "行為動作",
        "sentence": "The prince and the princess married and lived happily.",
        "sentenceZh": "王子和公主結婚並快樂地生活。"
    },
    {
        "word": "mix",
        "meaning": "混合",
        "theme": "行為動作",
        "sentence": "If you mix yellow and blue paint, you will get green.",
        "sentenceZh": "如果你把黃色和藍色顏料混合，就會得到綠色。"
    },
    {
        "word": "mop",
        "meaning": "用拖把拖地",
        "theme": "行為動作",
        "sentence": "It is your turn to mop the classroom floor today.",
        "sentenceZh": "今天輪到你用拖把拖教室地板了。"
    },
    {
        "word": "offer",
        "meaning": "提供",
        "theme": "行為動作",
        "sentence": "The teacher offered to help the students after class.",
        "sentenceZh": "老師提供放學後幫助學生。"
    },
    {
        "word": "omit",
        "meaning": "省略",
        "theme": "行為動作",
        "sentence": "You can omit this word and the sentence is still correct.",
        "sentenceZh": "你可以省略這個單字，而句子依然正確。"
    },
    {
        "word": "open",
        "meaning": "打開",
        "theme": "行為動作",
        "sentence": "Please open your textbook to page forty-five.",
        "sentenceZh": "請把你的教科書打開翻到第四十五頁。"
    },
    {
        "word": "order",
        "meaning": "點餐",
        "theme": "行為動作",
        "sentence": "We went to the restaurant and ordered a large pizza.",
        "sentenceZh": "我們去了餐廳並點了一個大披薩。"
    },
    {
        "word": "pack",
        "meaning": "打包",
        "theme": "行為動作",
        "sentence": "I need to pack my clothes for the three-day trip.",
        "sentenceZh": "我需要為三天的旅行打包衣服。"
    },
    {
        "word": "park",
        "meaning": "停車",
        "theme": "行為動作",
        "sentence": "You cannot park your car in front of the school gate.",
        "sentenceZh": "你不能把車停在學校大門口。"
    },
    {
        "word": "paste",
        "meaning": "貼上",
        "theme": "行為動作",
        "sentence": "Copy the HTML code and paste it into the editor.",
        "sentenceZh": "複製 HTML 程式碼然後將它貼到編輯器裡。"
    },
    {
        "word": "play",
        "meaning": "玩",
        "theme": "行為動作",
        "sentence": "Let's play a fun game of badminton after school.",
        "sentenceZh": "我們放學後來打一場有趣的羽球吧。"
    },
    {
        "word": "pollute",
        "meaning": "污染",
        "theme": "行為動作",
        "sentence": "We must not let factories pollute our clean rivers.",
        "sentenceZh": "我們絕不能讓工廠污染我們乾淨的河流。"
    },
    {
        "word": "print",
        "meaning": "列印",
        "theme": "行為動作",
        "sentence": "The teacher will print the vocabulary list for everyone.",
        "sentenceZh": "老師會印出單字表給大家。"
    },
    {
        "word": "produce",
        "meaning": "生產",
        "theme": "行為動作",
        "sentence": "This farm produces very sweet and juicy watermelons.",
        "sentenceZh": "這座農場生產非常甜又多汁的西瓜。"
    },
    {
        "word": "protect",
        "meaning": "保護",
        "theme": "行為動作",
        "sentence": "Wearing a helmet will protect your head if you fall.",
        "sentenceZh": "戴安全帽會在你跌倒時保護你的頭部。"
    },
    {
        "word": "provide",
        "meaning": "提供",
        "theme": "行為動作",
        "sentence": "The school provides a healthy lunch for all the students.",
        "sentenceZh": "學校為所有學生提供健康的午餐。"
    },
    {
        "word": "pump",
        "meaning": "灌注",
        "theme": "行為動作",
        "sentence": "We need to pump some air into the bicycle tires.",
        "sentenceZh": "我們需要幫腳踏車輪胎打點氣。"
    },
    {
        "word": "quit",
        "meaning": "退出",
        "theme": "行為動作",
        "sentence": "Don't quit when learning English gets a little difficult.",
        "sentenceZh": "當學英文變得有點難時，別放棄。"
    },
    {
        "word": "reach",
        "meaning": "到達",
        "theme": "行為動作",
        "sentence": "He is tall enough to reach the books on the top shelf.",
        "sentenceZh": "他夠高，可以搆到最上層架子上的書。"
    },
    {
        "word": "receive",
        "meaning": "接收",
        "theme": "行為動作",
        "sentence": "I received a nice postcard from my friend in Japan today.",
        "sentenceZh": "我今天收到了一張來自日本朋友寄的漂亮明信片。"
    },
    {
        "word": "recycle",
        "meaning": "回收",
        "theme": "行為動作",
        "sentence": "We should always recycle plastic bottles and paper.",
        "sentenceZh": "我們應該永遠回收塑膠瓶和紙張。"
    },
    {
        "word": "remind",
        "meaning": "提醒",
        "theme": "行為動作",
        "sentence": "Please remind me to bring my umbrella tomorrow.",
        "sentenceZh": "請提醒我明天要帶傘。"
    },
    {
        "word": "rent",
        "meaning": "租用",
        "theme": "行為動作",
        "sentence": "We rented a small car for our family trip to Kenting.",
        "sentenceZh": "我們為墾丁家庭旅行租了一輛小車。"
    },
    {
        "word": "revise",
        "meaning": "修改",
        "theme": "行為動作",
        "sentence": "I need to revise my essay before I hand it to the teacher.",
        "sentenceZh": "我在交給老師前需要修改我的作文。"
    },
    {
        "word": "rob",
        "meaning": "搶劫",
        "theme": "行為動作",
        "sentence": "The bad guy tried to rob the bank but the police caught him.",
        "sentenceZh": "壞蛋試圖搶銀行但被警察抓住了。"
    },
    {
        "word": "rub",
        "meaning": "摩擦",
        "theme": "行為動作",
        "sentence": "Don't rub your eyes when your hands are dirty.",
        "sentenceZh": "當你的手很髒時不要揉眼睛。"
    },
    {
        "word": "save",
        "meaning": "拯救；儲存",
        "theme": "行為動作",
        "sentence": "Remember to save your file before you close the computer.",
        "sentenceZh": "關電腦前記得儲存你的檔案。"
    },
    {
        "word": "search",
        "meaning": "搜尋",
        "theme": "行為動作",
        "sentence": "I used Google to search for information about badminton history.",
        "sentenceZh": "我用 Google 搜尋關於羽球歷史的資訊。"
    },
    {
        "word": "seek",
        "meaning": "尋求",
        "theme": "行為動作",
        "sentence": "You should seek help from the teacher if you don't understand.",
        "sentenceZh": "如果你不懂，應該尋求老師的幫助。"
    },
    {
        "word": "sell",
        "meaning": "賣",
        "theme": "行為動作",
        "sentence": "The bakery sells the most delicious bread in Douliu.",
        "sentenceZh": "那家麵包店賣斗六最好吃的麵包。"
    },
    {
        "word": "send",
        "meaning": "傳送",
        "theme": "行為動作",
        "sentence": "I will send you an email with the photos tonight.",
        "sentenceZh": "我今晚會發一封附有照片的電子郵件給你。"
    },
    {
        "word": "serve",
        "meaning": "服務",
        "theme": "行為動作",
        "sentence": "The restaurant serves a very nice hot chicken soup.",
        "sentenceZh": "這家餐廳供應非常棒的熱雞湯。"
    },
    {
        "word": "share",
        "meaning": "分享",
        "theme": "行為動作",
        "sentence": "The student kindly shared his umbrella with his classmate.",
        "sentenceZh": "這位學生好心地和同學分享他的雨傘。"
    },
    {
        "word": "shoot",
        "meaning": "射擊",
        "theme": "行為動作",
        "sentence": "He jumped high to shoot the basketball into the net.",
        "sentenceZh": "他跳得很高去把籃球投進網內。"
    },
    {
        "word": "show",
        "meaning": "展示",
        "theme": "行為動作",
        "sentence": "Can you show me how to play this syntax repair game?",
        "sentenceZh": "你能示範給我看這個語法修復遊戲怎麼玩嗎？"
    },
    {
        "word": "shut",
        "meaning": "關閉",
        "theme": "行為動作",
        "sentence": "Please shut the door quietly so you don't wake the baby.",
        "sentenceZh": "請輕輕關上門以免吵醒小嬰兒。"
    },
    {
        "word": "sit",
        "meaning": "坐",
        "theme": "行為動作",
        "sentence": "Pull up a chair and sit next to me.",
        "sentenceZh": "拉把椅子過來坐我旁邊。"
    },
    {
        "word": "sleep",
        "meaning": "睡覺",
        "theme": "行為動作",
        "sentence": "I usually sleep for eight hours every night.",
        "sentenceZh": "我每晚通常睡八小時。"
    },
    {
        "word": "smoke",
        "meaning": "抽煙",
        "theme": "行為動作",
        "sentence": "You are not allowed to smoke inside the hospital.",
        "sentenceZh": "你不被允許在醫院裡面抽菸。"
    },
    {
        "word": "solve",
        "meaning": "解決",
        "theme": "行為動作",
        "sentence": "The smart detective easily solved the difficult mystery.",
        "sentenceZh": "聰明的偵探輕鬆地解決了這個困難的謎團。"
    },
    {
        "word": "spread",
        "meaning": "塗抹",
        "theme": "行為動作",
        "sentence": "She used a knife to spread butter on the warm toast.",
        "sentenceZh": "她用刀子把奶油塗在溫熱的吐司上。"
    },
    {
        "word": "steal",
        "meaning": "偷竊",
        "theme": "行為動作",
        "sentence": "The thief tried to steal a bicycle but a police officer saw him.",
        "sentenceZh": "小偷試圖偷腳踏車但被警察看到了。"
    },
    {
        "word": "strike",
        "meaning": "打擊；罷工",
        "theme": "行為動作",
        "sentence": "The lightning struck the tall tree during the big storm.",
        "sentenceZh": "閃電在暴風雨中擊中了那棵大樹。"
    },
    {
        "word": "take",
        "meaning": "拿；帶",
        "theme": "行為動作",
        "sentence": "It will take us about an hour to get to Taichung by train.",
        "sentenceZh": "搭火車到台中大約會花我們一小時。"
    },
    {
        "word": "treat",
        "meaning": "款待；對待",
        "theme": "行為動作",
        "sentence": "You should always treat your friends with kindness and respect.",
        "sentenceZh": "你應該永遠以仁慈和尊重來對待你的朋友。"
    },
    {
        "word": "upload",
        "meaning": "上傳",
        "theme": "行為動作",
        "sentence": "Don't forget to upload your homework to the school website.",
        "sentenceZh": "別忘了把你的作業上傳到學校網站。"
    },
    {
        "word": "use",
        "meaning": "使用",
        "theme": "行為動作",
        "sentence": "I often use an online dictionary to check my spelling.",
        "sentenceZh": "我經常使用線上字典來檢查我的拼字。"
    },
    {
        "word": "visit",
        "meaning": "拜訪",
        "theme": "行為動作",
        "sentence": "I plan to visit my grandparents in the village next Sunday.",
        "sentenceZh": "我計畫下星期日去村莊拜訪我祖父母。"
    },
    {
        "word": "vote",
        "meaning": "投票",
        "theme": "行為動作",
        "sentence": "The class will vote to choose the best badge design tomorrow.",
        "sentenceZh": "全班明天將投票選出最好的徽章設計。"
    },
    {
        "word": "wait",
        "meaning": "等待",
        "theme": "行為動作",
        "sentence": "I had to wait for the bus for thirty minutes in the rain.",
        "sentenceZh": "我得在雨中等了三十分鐘的公車。"
    },
    {
        "word": "waste",
        "meaning": "浪費",
        "theme": "行為動作",
        "sentence": "Don't waste your time playing too many computer games.",
        "sentenceZh": "不要浪費你的時間玩太多電腦遊戲。"
    },
    {
        "word": "welcome",
        "meaning": "歡迎",
        "theme": "行為動作",
        "sentence": "We are very happy to welcome the new teacher to our school.",
        "sentenceZh": "我們非常高興能歡迎新老師來到我們學校。"
    },
    {
        "word": "be (is, am, are, was, were)",
        "meaning": "是、當、在",
        "theme": "助動詞",
        "sentence": "I am a student, and he is a teacher.",
        "sentenceZh": "我是一名學生，而他是一名老師。"
    },
    {
        "word": "do (does, did)",
        "meaning": "做",
        "theme": "助動詞",
        "sentence": "What do you usually do on the weekend?",
        "sentenceZh": "你週末通常做什麼？"
    },
    {
        "word": "have (has, had)",
        "meaning": "擁有；已經、使~(做某事)",
        "theme": "助動詞",
        "sentence": "I have a very big collection of 80s music on Spotify.",
        "sentenceZh": "我的 Spotify 裡有非常大量的 80 年代音樂收藏。"
    },
    {
        "word": "can",
        "meaning": "可以；可能；能夠",
        "theme": "助動詞",
        "sentence": "Can you help me carry these heavy books, please?",
        "sentenceZh": "能請你幫我搬這些重書嗎？"
    },
    {
        "word": "could",
        "meaning": "可以；可能；能夠",
        "theme": "助動詞",
        "sentence": "I could run much faster when I was younger.",
        "sentenceZh": "我年輕的時候可以跑得快很多。"
    },
    {
        "word": "shall",
        "meaning": "應該；將會",
        "theme": "助動詞",
        "sentence": "Shall we go out for a walk after dinner tonight?",
        "sentenceZh": "我們今晚飯後去散步好嗎？"
    },
    {
        "word": "should",
        "meaning": "應該",
        "theme": "助動詞",
        "sentence": "You should review your vocabulary every day to remember them.",
        "sentenceZh": "你應該每天複習單字以記住它們。"
    },
    {
        "word": "must",
        "meaning": "一定",
        "theme": "助動詞",
        "sentence": "You must finish your homework before watching television.",
        "sentenceZh": "你看電視前必須寫完作業。"
    },
    {
        "word": "may",
        "meaning": "可能；可以",
        "theme": "助動詞",
        "sentence": "May I go to the restroom, Mr. Wang?",
        "sentenceZh": "王老師，我可以去洗手間嗎？"
    },
    {
        "word": "might",
        "meaning": "可能；可以",
        "theme": "助動詞",
        "sentence": "Take an umbrella with you; it might rain this afternoon.",
        "sentenceZh": "帶著傘吧，今天下午可能會下雨。"
    },
    {
        "word": "will",
        "meaning": "將會",
        "theme": "助動詞",
        "sentence": "I will show you how to play the Weather Combat game later.",
        "sentenceZh": "我稍後將會示範給你看怎麼玩「天氣大戰」遊戲。"
    },
    {
        "word": "would",
        "meaning": "將會",
        "theme": "助動詞",
        "sentence": "I would like to order a chicken sandwich, please.",
        "sentenceZh": "我想要點一個雞肉三明治，謝謝。"
    },
    {
        "word": "bother",
        "meaning": "打擾",
        "theme": "情緒動詞",
        "sentence": "Please don't bother me while I am writing the HTML code.",
        "sentenceZh": "我在寫 HTML 程式碼時請不要打擾我。"
    },
    {
        "word": "confuse",
        "meaning": "混淆",
        "theme": "情緒動詞",
        "sentence": "The difficult grammar rules often confuse the students.",
        "sentenceZh": "困難的文法規則經常使學生感到混淆。"
    },
    {
        "word": "embarrass",
        "meaning": "使尷尬",
        "theme": "情緒動詞",
        "sentence": "Falling down on the badminton court embarrassed him.",
        "sentenceZh": "在羽球場上跌倒讓他覺得很尷尬。"
    },
    {
        "word": "frighten",
        "meaning": "使~害怕",
        "theme": "情緒動詞",
        "sentence": "The loud thunder frightened the little puppy.",
        "sentenceZh": "巨大的雷聲嚇壞了小狗。"
    },
    {
        "word": "surprise",
        "meaning": "使~驚訝",
        "theme": "情緒動詞",
        "sentence": "The sudden rain surprised us during the school trip.",
        "sentenceZh": "校外教學時突如其來的大雨讓我們很驚訝。"
    },
    {
        "word": "worry",
        "meaning": "使~擔心",
        "theme": "情緒動詞",
        "sentence": "Don't worry about the test; just do your best.",
        "sentenceZh": "別擔心考試，盡力就好。"
    },
    {
        "word": "care",
        "meaning": "關心",
        "theme": "情緒動詞",
        "sentence": "A good teacher always cares about their students.",
        "sentenceZh": "一位好老師總是關心他們的學生。"
    },
    {
        "word": "concern",
        "meaning": "關心；涉及",
        "theme": "情緒動詞",
        "sentence": "The principal is concerned about the safety of the students.",
        "sentenceZh": "校長很關心學生們的安全。"
    },
    {
        "word": "excite",
        "meaning": "使~興奮",
        "theme": "情緒動詞",
        "sentence": "Playing the interactive web game excites the whole class.",
        "sentenceZh": "玩這個互動網頁遊戲讓全班都很興奮。"
    },
    {
        "word": "satisfy",
        "meaning": "使~滿足",
        "theme": "情緒動詞",
        "sentence": "A big bowl of Douliu beef noodles will satisfy your hunger.",
        "sentenceZh": "一大碗斗六牛肉麵能滿足你的飢餓感。"
    },
    {
        "word": "please",
        "meaning": "使~開心",
        "theme": "情緒動詞",
        "sentence": "The student's good grades pleased his parents.",
        "sentenceZh": "這位學生的好成績讓他的父母很開心。"
    },
    {
        "word": "scare",
        "meaning": "使~害怕",
        "theme": "情緒動詞",
        "sentence": "The monster in the game scared the little boy.",
        "sentenceZh": "遊戲裡的怪物嚇到了小男孩。"
    },
    {
        "word": "tire",
        "meaning": "使~疲累",
        "theme": "情緒動詞",
        "sentence": "Running ten laps around the playground will tire you out.",
        "sentenceZh": "繞著操場跑十圈會讓你累壞的。"
    },
    {
        "word": "bothered",
        "meaning": "感到厭煩的",
        "theme": "情緒動詞",
        "sentence": "I am bothered by the loud noise outside the window.",
        "sentenceZh": "我對窗外的巨大噪音感到很厭煩。"
    },
    {
        "word": "confused",
        "meaning": "感到困惑的",
        "theme": "情緒動詞",
        "sentence": "She was confused by the complicated math problem.",
        "sentenceZh": "她對這道複雜的數學題感到困惑。"
    },
    {
        "word": "embarrassed",
        "meaning": "感到尷尬的",
        "theme": "情緒動詞",
        "sentence": "I was embarrassed when I forgot my lines in the play.",
        "sentenceZh": "當我在話劇中忘詞時，我感到很尷尬。"
    },
    {
        "word": "frightened",
        "meaning": "感到害怕的",
        "theme": "情緒動詞",
        "sentence": "The frightened cat hid under the sofa safely.",
        "sentenceZh": "感到害怕的貓安全地躲在沙發下。"
    },
    {
        "word": "surprised",
        "meaning": "感到驚訝的",
        "theme": "情緒動詞",
        "sentence": "I was surprised to see him waiting at the station.",
        "sentenceZh": "看到他在車站等候讓我很驚訝。"
    },
    {
        "word": "worried",
        "meaning": "感到擔心的",
        "theme": "情緒動詞",
        "sentence": "My mom is worried because I have a high fever.",
        "sentenceZh": "我媽媽很擔心，因為我發高燒了。"
    },
    {
        "word": "cared",
        "meaning": "關心的",
        "theme": "情緒動詞",
        "sentence": "He felt loved and cared for by his friends.",
        "sentenceZh": "他感覺被朋友們愛著且關心著。"
    },
    {
        "word": "concerned",
        "meaning": "感到擔心的",
        "theme": "情緒動詞",
        "sentence": "The concerned teacher asked the student what was wrong.",
        "sentenceZh": "感到擔心的老師問學生怎麼了。"
    },
    {
        "word": "excited",
        "meaning": "感到興奮的",
        "theme": "情緒動詞",
        "sentence": "We are very excited about the school trip to Japan.",
        "sentenceZh": "我們對去日本的校外教學感到非常興奮。"
    },
    {
        "word": "satisfied",
        "meaning": "感到滿足的",
        "theme": "情緒動詞",
        "sentence": "The coach was satisfied with the badminton team's victory.",
        "sentenceZh": "教練對羽球隊的勝利感到滿意。"
    },
    {
        "word": "pleased",
        "meaning": "感到開心的",
        "theme": "情緒動詞",
        "sentence": "I am very pleased to meet your new friend.",
        "sentenceZh": "我非常高興能認識你的新朋友。"
    },
    {
        "word": "scared",
        "meaning": "感到害怕的",
        "theme": "情緒動詞",
        "sentence": "My little sister is scared of big spiders.",
        "sentenceZh": "我妹妹很害怕大蜘蛛。"
    },
    {
        "word": "tired",
        "meaning": "感到疲累的",
        "theme": "情緒動詞",
        "sentence": "I am very tired after playing badminton for two hours.",
        "sentenceZh": "打了兩個小時的羽球後我非常累。"
    },
    {
        "word": "bothering",
        "meaning": "令人厭煩的",
        "theme": "情緒動詞",
        "sentence": "The loud music from the neighbor is very bothering.",
        "sentenceZh": "鄰居傳來的大聲音樂非常令人厭煩。"
    },
    {
        "word": "confusing",
        "meaning": "令人困惑的",
        "theme": "情緒動詞",
        "sentence": "The map of the city is too confusing for me to read.",
        "sentenceZh": "這張城市地圖對我來說太令人困惑了，看不懂。"
    },
    {
        "word": "embarrassing",
        "meaning": "令人尷尬的",
        "theme": "情緒動詞",
        "sentence": "It was an embarrassing moment when he called me the wrong name.",
        "sentenceZh": "當他叫錯我的名字時，是個令人尷尬的時刻。"
    },
    {
        "word": "frightening",
        "meaning": "令人害怕的",
        "theme": "情緒動詞",
        "sentence": "The giant monster in the computer game is frightening.",
        "sentenceZh": "電腦遊戲裡的巨大怪物很嚇人。"
    },
    {
        "word": "surprising",
        "meaning": "令人驚訝的",
        "theme": "情緒動詞",
        "sentence": "The sudden rain during the sunny day was very surprising.",
        "sentenceZh": "晴天時突如其來的雨非常令人驚訝。"
    },
    {
        "word": "worrying",
        "meaning": "令人擔心的",
        "theme": "情緒動詞",
        "sentence": "His bad health is a very worrying problem.",
        "sentenceZh": "他糟糕的健康狀況是個令人擔心的問題。"
    },
    {
        "word": "caring",
        "meaning": "有愛的",
        "theme": "情緒動詞",
        "sentence": "She is a very caring nurse who helps many sick people.",
        "sentenceZh": "她是一位非常有愛心、幫助許多病人的護理師。"
    },
    {
        "word": "concerning",
        "meaning": "令人擔心的",
        "theme": "情緒動詞",
        "sentence": "The news about the strong typhoon is quite concerning.",
        "sentenceZh": "關於強烈颱風的新聞相當令人擔心。"
    },
    {
        "word": "exciting",
        "meaning": "令人興奮的",
        "theme": "情緒動詞",
        "sentence": "The Weather Combat game is a very exciting game to play.",
        "sentenceZh": "「天氣大戰」是一款玩起來非常刺激的遊戲。"
    },
    {
        "word": "satisfying",
        "meaning": "令人滿意的",
        "theme": "情緒動詞",
        "sentence": "Drinking cold water after exercise is deeply satisfying.",
        "sentenceZh": "運動後喝冷水令人感到非常滿足。"
    },
    {
        "word": "pleasing",
        "meaning": "令人開心的",
        "theme": "情緒動詞",
        "sentence": "The 80s synth-pop music is very pleasing to listen to.",
        "sentenceZh": "80年代的合成器流行音樂聽起來非常令人愉悅。"
    },
    {
        "word": "scary",
        "meaning": "令人害怕的",
        "theme": "情緒動詞",
        "sentence": "The old house at the corner of the street looks very scary.",
        "sentenceZh": "街角的那棟老房子看起來很可怕。"
    },
    {
        "word": "tiring",
        "meaning": "令人疲累的",
        "theme": "情緒動詞",
        "sentence": "Walking up the high mountain is a very tiring activity.",
        "sentenceZh": "爬上高山是一項非常令人疲累的活動。"
    },
    {
        "word": "alive",
        "meaning": "活著的",
        "theme": "形容詞(反意)",
        "sentence": "The small plant is still alive because I watered it.",
        "sentenceZh": "因為我有澆水，那株小植物還活著。"
    },
    {
        "word": "dead",
        "meaning": "死的",
        "theme": "形容詞(反意)",
        "sentence": "The leaves on the ground are brown and dead.",
        "sentenceZh": "地上的葉子是枯黃且死去的。"
    },
    {
        "word": "modern",
        "meaning": "現代的",
        "theme": "形容詞(反意)",
        "sentence": "Taipei is a very modern city with many tall buildings.",
        "sentenceZh": "台北是一個擁有許多高樓大廈的現代城市。"
    },
    {
        "word": "traditional",
        "meaning": "傳統的",
        "theme": "形容詞(反意)",
        "sentence": "We ate some traditional snacks in the old street of Huwei.",
        "sentenceZh": "我們在虎尾老街吃了一些傳統小吃。"
    },
    {
        "word": "ancient",
        "meaning": "古代的",
        "theme": "形容詞(反意)",
        "sentence": "The museum has many ancient dinosaur bones on display.",
        "sentenceZh": "博物館裡展示著許多古代的恐龍骨頭。"
    },
    {
        "word": "classical",
        "meaning": "古典的",
        "theme": "形容詞(反意)",
        "sentence": "He likes to play classical music on the piano.",
        "sentenceZh": "他喜歡用鋼琴彈奏古典音樂。"
    },
    {
        "word": "available",
        "meaning": "可用的；有空的",
        "theme": "形容詞(反意)",
        "sentence": "Is the principal available for a meeting this afternoon?",
        "sentenceZh": "校長今天下午有空開會嗎？"
    },
    {
        "word": "busy",
        "meaning": "忙碌的",
        "theme": "形容詞(反意)",
        "sentence": "The English teacher is busy marking the test papers.",
        "sentenceZh": "英文老師正忙著批改考卷。"
    },
    {
        "word": "bright",
        "meaning": "明亮的；聰明的",
        "theme": "形容詞(反意)",
        "sentence": "The sun is very bright and warm today.",
        "sentenceZh": "今天的太陽非常明亮且溫暖。"
    },
    {
        "word": "dark",
        "meaning": "黑暗的",
        "theme": "形容詞(反意)",
        "sentence": "It is too dark to read the book in this room.",
        "sentenceZh": "這房間裡太暗了，沒辦法看書。"
    },
    {
        "word": "colorful",
        "meaning": "多彩的",
        "theme": "形容詞(反意)",
        "sentence": "The students drew colorful pictures of the vocabulary characters.",
        "sentenceZh": "學生們畫了色彩繽紛的單字角色圖片。"
    },
    {
        "word": "right",
        "meaning": "正確的；右邊的",
        "theme": "形容詞(反意)",
        "sentence": "That is the right answer to the math problem!",
        "sentenceZh": "那是這道數學題的正確答案！"
    },
    {
        "word": "correct",
        "meaning": "正確的",
        "theme": "形容詞(反意)",
        "sentence": "In the game, both American and British spellings are correct.",
        "sentenceZh": "在遊戲中，美式和英式的拼寫都是正確的。"
    },
    {
        "word": "wrong",
        "meaning": "錯誤的",
        "theme": "形容詞(反意)",
        "sentence": "Don't worry if you give the wrong answer; just try again.",
        "sentenceZh": "如果給了錯誤的答案別擔心，再試一次就好。"
    },
    {
        "word": "dirty",
        "meaning": "骯髒的",
        "theme": "形容詞(反意)",
        "sentence": "Take off your dirty shoes before you enter the house.",
        "sentenceZh": "進屋前脫掉你骯髒的鞋子。"
    },
    {
        "word": "clean",
        "meaning": "乾淨的",
        "theme": "形容詞(反意)",
        "sentence": "We must keep our classroom clean every day.",
        "sentenceZh": "我們必須每天保持教室乾淨。"
    },
    {
        "word": "empty",
        "meaning": "空的",
        "theme": "形容詞(反意)",
        "sentence": "The water bottle is empty; I need to refill it.",
        "sentenceZh": "水壺空了，我需要重新裝水。"
    },
    {
        "word": "crowded",
        "meaning": "擁擠的",
        "theme": "形容詞(反意)",
        "sentence": "The night market was very crowded with people last night.",
        "sentenceZh": "昨晚夜市裡擠滿了人。"
    },
    {
        "word": "dangerous",
        "meaning": "危險的",
        "theme": "形容詞(反意)",
        "sentence": "It is dangerous to cross the street without looking.",
        "sentenceZh": "過馬路不看路是很危險的。"
    },
    {
        "word": "safe",
        "meaning": "安全的",
        "theme": "形容詞(反意)",
        "sentence": "Always wear a helmet to keep your head safe.",
        "sentenceZh": "總是戴上安全帽以保護頭部安全。"
    },
    {
        "word": "excellent",
        "meaning": "優秀的",
        "theme": "形容詞(反意)",
        "sentence": "She did an excellent job on her English reading report.",
        "sentenceZh": "她的英文讀書報告做得非常優秀。"
    },
    {
        "word": "fine",
        "meaning": "好的",
        "theme": "形容詞(反意)",
        "sentence": "I feel completely fine after taking the medicine.",
        "sentenceZh": "吃完藥後我覺得完全好了。"
    },
    {
        "word": "nice",
        "meaning": "好的",
        "theme": "形容詞(反意)",
        "sentence": "It is very nice of you to help me with my homework.",
        "sentenceZh": "你幫我寫作業真是太好了。"
    },
    {
        "word": "good",
        "meaning": "好的",
        "theme": "形容詞(反意)",
        "sentence": "Reading English storybooks is a good habit.",
        "sentenceZh": "讀英文故事書是個好習慣。"
    },
    {
        "word": "great",
        "meaning": "好的",
        "theme": "形容詞(反意)",
        "sentence": "We had a great time playing the syntax repair game.",
        "sentenceZh": "我們玩語法修復遊戲玩得很開心。"
    },
    {
        "word": "bad",
        "meaning": "壞的",
        "theme": "形容詞(反意)",
        "sentence": "Eating too much candy is bad for your teeth.",
        "sentenceZh": "吃太多糖果對你的牙齒很壞。"
    },
    {
        "word": "terrific",
        "meaning": "極好的",
        "theme": "形容詞(反意)",
        "sentence": "He is a terrific badminton player who wins many games.",
        "sentenceZh": "他是個極好的羽球選手，贏得許多比賽。"
    },
    {
        "word": "fantastic",
        "meaning": "極好的",
        "theme": "形容詞(反意)",
        "sentence": "The weather today is fantastic for a picnic in the park.",
        "sentenceZh": "今天的天氣對於在公園野餐來說真是棒極了。"
    },
    {
        "word": "marvelous",
        "meaning": "不可思議的；極好的",
        "theme": "形容詞(反意)",
        "sentence": "The view from the top of the mountain is marvelous.",
        "sentenceZh": "從山頂看下去的風景真是不可思議的美。"
    },
    {
        "word": "terrible",
        "meaning": "糟糕的；可怕的",
        "theme": "形容詞(反意)",
        "sentence": "I had a terrible headache and couldn't go to school.",
        "sentenceZh": "我有可怕的頭痛，所以沒辦法上學。"
    },
    {
        "word": "local",
        "meaning": "當地的",
        "theme": "形容詞(反意)",
        "sentence": "We like to eat at the local restaurants in Dounan.",
        "sentenceZh": "我們喜歡在斗南當地的餐廳吃飯。"
    },
    {
        "word": "national",
        "meaning": "國家的",
        "theme": "形容詞(反意)",
        "sentence": "The museum is a national treasure of our country.",
        "sentenceZh": "這座博物館是我們國家的國寶。"
    },
    {
        "word": "international",
        "meaning": "國際的",
        "theme": "形容詞(反意)",
        "sentence": "English is a very important international language.",
        "sentenceZh": "英文是非常重要的國際語言。"
    },
    {
        "word": "foreign",
        "meaning": "外國的",
        "theme": "形容詞(反意)",
        "sentence": "She likes to collect coins from different foreign countries.",
        "sentenceZh": "她喜歡收集來自不同外國國家的硬幣。"
    },
    {
        "word": "overseas",
        "meaning": "海外的",
        "theme": "形容詞(反意)",
        "sentence": "My uncle works overseas and comes back once a year.",
        "sentenceZh": "我叔叔在海外工作，一年回來一次。"
    },
    {
        "word": "latter",
        "meaning": "後者的",
        "theme": "形容詞(反意)",
        "sentence": "Between the blue shirt and red shirt, I prefer the latter.",
        "sentenceZh": "藍襯衫和紅襯衫之間，我比較喜歡後者。"
    },
    {
        "word": "former",
        "meaning": "前任的；以前的",
        "theme": "形容詞(反意)",
        "sentence": "Director Lee is a former teacher at our school.",
        "sentenceZh": "李主任是我們學校以前的老師。"
    },
    {
        "word": "possible",
        "meaning": "可能的",
        "theme": "形容詞(反意)",
        "sentence": "It is possible to learn 2000 words if you practice every day.",
        "sentenceZh": "如果你每天練習，學會兩千個單字是可能的。"
    },
    {
        "word": "impossible",
        "meaning": "不可能的",
        "theme": "形容詞(反意)",
        "sentence": "It is impossible for a fish to live without water.",
        "sentenceZh": "魚沒有水是絕對不可能活下去的。"
    },
    {
        "word": "quiet",
        "meaning": "安靜的",
        "theme": "形容詞(反意)",
        "sentence": "Please be quiet while the teacher is explaining the rules.",
        "sentenceZh": "老師在解釋規則時請保持安靜。"
    },
    {
        "word": "silent",
        "meaning": "沉默的",
        "theme": "形容詞(反意)",
        "sentence": "The classroom was completely silent during the big test.",
        "sentenceZh": "大考時教室裡完全寂靜無聲。"
    },
    {
        "word": "loud",
        "meaning": "大聲的",
        "theme": "形容詞(反意)",
        "sentence": "The 80s pop music is too loud; please turn it down.",
        "sentenceZh": "80年代流行音樂太大聲了，請關小聲一點。"
    },
    {
        "word": "noisy",
        "meaning": "吵鬧的",
        "theme": "形容詞(反意)",
        "sentence": "The streets are very noisy during the morning rush hour.",
        "sentenceZh": "街道在早上尖峰時間非常吵鬧。"
    },
    {
        "word": "positive",
        "meaning": "正面的；陽性的",
        "theme": "形容詞(反意)",
        "sentence": "Always try to keep a positive attitude when learning.",
        "sentenceZh": "學習時總是試著保持正面的態度。"
    },
    {
        "word": "negative",
        "meaning": "負面的",
        "theme": "形容詞(反意)",
        "sentence": "Don't let his negative words affect your mood.",
        "sentenceZh": "別讓他的負面話語影響你的心情。"
    },
    {
        "word": "present",
        "meaning": "現在的；出席的",
        "theme": "形容詞(反意)",
        "sentence": "Every student in the class is present today.",
        "sentenceZh": "班上每個學生今天都出席了。"
    },
    {
        "word": "absent",
        "meaning": "缺席的",
        "theme": "形容詞(反意)",
        "sentence": "He was absent from school yesterday because he had a fever.",
        "sentenceZh": "他昨天因為發燒而缺席沒來上學。"
    },
    {
        "word": "private",
        "meaning": "私人的",
        "theme": "形容詞(反意)",
        "sentence": "This is a private garden, so you cannot enter without asking.",
        "sentenceZh": "這是一座私人花園，所以你沒有詢問不能進入。"
    },
    {
        "word": "public",
        "meaning": "公眾的；公共的",
        "theme": "形容詞(反意)",
        "sentence": "The public library is a great place to study quietly.",
        "sentenceZh": "公共圖書館是個安靜讀書的好地方。"
    },
    {
        "word": "rare",
        "meaning": "稀有的",
        "theme": "形容詞(反意)",
        "sentence": "This kind of blue butterfly is very rare in Taiwan.",
        "sentenceZh": "這種藍色蝴蝶在台灣非常稀有。"
    },
    {
        "word": "precious",
        "meaning": "珍貴的",
        "theme": "形容詞(反意)",
        "sentence": "The memories of our childhood are very precious.",
        "sentenceZh": "我們童年的回憶非常珍貴。"
    },
    {
        "word": "ordinary",
        "meaning": "普通的",
        "theme": "形容詞(反意)",
        "sentence": "It was just an ordinary day at school, nothing special happened.",
        "sentenceZh": "這只是在學校普通的一天，沒什麼特別的事發生。"
    },
    {
        "word": "general",
        "meaning": "普遍的；一般的",
        "theme": "形容詞(反意)",
        "sentence": "The general rule is to raise your hand before speaking.",
        "sentenceZh": "一般的規則是發言前要舉手。"
    },
    {
        "word": "common",
        "meaning": "普通的；常見的",
        "theme": "形容詞(反意)",
        "sentence": "Catching a cold is very common during the winter season.",
        "sentenceZh": "在冬季感冒是非常常見的。"
    },
    {
        "word": "special",
        "meaning": "特別的",
        "theme": "形容詞(反意)",
        "sentence": "I made a special card for my mother's birthday.",
        "sentenceZh": "我為媽媽的生日做了一張特別的卡片。"
    },
    {
        "word": "strange",
        "meaning": "奇怪的",
        "theme": "形容詞(反意)",
        "sentence": "I heard a strange noise coming from the old machine.",
        "sentenceZh": "我聽到那台舊機器發出奇怪的噪音。"
    },
    {
        "word": "unique",
        "meaning": "獨特的",
        "theme": "形容詞(反意)",
        "sentence": "Every student has their own unique talent.",
        "sentenceZh": "每個學生都有自己獨特的天賦。"
    },
    {
        "word": "more",
        "meaning": "更多的",
        "theme": "形容詞(反意)",
        "sentence": "We need more time to finish writing the HTML code.",
        "sentenceZh": "我們需要更多時間來寫完 HTML 程式碼。"
    },
    {
        "word": "less",
        "meaning": "更少的",
        "theme": "形容詞(反意)",
        "sentence": "You should eat less sugar and eat more fruit.",
        "sentenceZh": "你應該少吃糖並多吃水果。"
    },
    {
        "word": "same",
        "meaning": "相同的",
        "theme": "形容詞(反意)",
        "sentence": "My cousin and I are exactly the same age.",
        "sentenceZh": "我表哥和我完全同齡。"
    },
    {
        "word": "different",
        "meaning": "不同的",
        "theme": "形容詞(反意)",
        "sentence": "These two English words have very different meanings.",
        "sentenceZh": "這兩個英文單字有非常不同的意思。"
    },
    {
        "word": "alike",
        "meaning": "相似的",
        "theme": "形容詞(反意)",
        "sentence": "The two brothers look very much alike.",
        "sentenceZh": "這兩兄弟看起來非常相似。"
    },
    {
        "word": "similar",
        "meaning": "相似的",
        "theme": "形容詞(反意)",
        "sentence": "Your new bicycle is very similar to mine.",
        "sentenceZh": "你的新腳踏車和我的非常相似。"
    },
    {
        "word": "simple",
        "meaning": "簡單的",
        "theme": "形容詞(反意)",
        "sentence": "Let me explain this rule in a very simple way.",
        "sentenceZh": "讓我用非常簡單的方式來解釋這個規則。"
    },
    {
        "word": "easy",
        "meaning": "容易的",
        "theme": "形容詞(反意)",
        "sentence": "The first level of the vocabulary game is quite easy.",
        "sentenceZh": "單字遊戲的第一關滿容易的。"
    },
    {
        "word": "basic",
        "meaning": "基本的",
        "theme": "形容詞(反意)",
        "sentence": "We are learning the basic rules of badminton today.",
        "sentenceZh": "我們今天在學習羽球的基本規則。"
    },
    {
        "word": "hard",
        "meaning": "硬的；困難的",
        "theme": "形容詞(反意)",
        "sentence": "It is hard to hit the ball if you don't practice your swing.",
        "sentenceZh": "如果你不練習揮拍，就很難打到球。"
    },
    {
        "word": "difficult",
        "meaning": "困難的",
        "theme": "形容詞(反意)",
        "sentence": "The math problem was too difficult for me to solve.",
        "sentenceZh": "這道數學題對我來說太困難了，解不出來。"
    },
    {
        "word": "major",
        "meaning": "主要的",
        "theme": "形容詞(反意)",
        "sentence": "The major problem with the car is its broken engine.",
        "sentenceZh": "這輛車的主要問題是它壞掉的引擎。"
    },
    {
        "word": "main",
        "meaning": "主要的",
        "theme": "形容詞(反意)",
        "sentence": "The main character in the story is a brave young boy.",
        "sentenceZh": "故事裡的主要角色是一位勇敢的小男孩。"
    },
    {
        "word": "primary",
        "meaning": "主要的",
        "theme": "形容詞(反意)",
        "sentence": "Her primary goal this year is to improve her English.",
        "sentenceZh": "她今年的主要目標是增進她的英文。"
    },
    {
        "word": "minor",
        "meaning": "次要的；較小的",
        "theme": "形容詞(反意)",
        "sentence": "Don't worry, it is just a minor mistake in the code.",
        "sentenceZh": "別擔心，那只是程式碼裡一個小小的錯誤。"
    },
    {
        "word": "secondary",
        "meaning": "次要的",
        "theme": "形容詞(反意)",
        "sentence": "Winning the game is only of secondary importance; having fun is first.",
        "sentenceZh": "贏得比賽只是次要的，玩得開心才是第一。"
    },
    {
        "word": "maximum",
        "meaning": "最大的",
        "theme": "形容詞(反意)",
        "sentence": "The maximum score you can get on this test is 100.",
        "sentenceZh": "你在這個考試能得到的最大分數是 100 分。"
    },
    {
        "word": "large",
        "meaning": "大的",
        "theme": "形容詞(反意)",
        "sentence": "Elephants are very large and strong animals.",
        "sentenceZh": "大象是非常巨大且強壯的動物。"
    },
    {
        "word": "big",
        "meaning": "大的",
        "theme": "形容詞(反意)",
        "sentence": "My grandfather lives in a big house near the park.",
        "sentenceZh": "我爺爺住在公園附近的一間大房子裡。"
    },
    {
        "word": "medium",
        "meaning": "中等的",
        "theme": "形容詞(反意)",
        "sentence": "I would like to order a medium pizza with extra cheese.",
        "sentenceZh": "我想點一個加起司的中份披薩。"
    },
    {
        "word": "little",
        "meaning": "小的",
        "theme": "形容詞(反意)",
        "sentence": "The little girl was holding her mother's hand tightly.",
        "sentenceZh": "小女孩緊緊牽著她媽媽的手。"
    },
    {
        "word": "small",
        "meaning": "小的",
        "theme": "形容詞(反意)",
        "sentence": "The mouse is a very small animal that hides easily.",
        "sentenceZh": "老鼠是一種非常小、容易躲藏的動物。"
    },
    {
        "word": "tiny",
        "meaning": "微小的",
        "theme": "形容詞(反意)",
        "sentence": "Ants are tiny insects, but they are very strong.",
        "sentenceZh": "螞蟻是微小的昆蟲，但牠們非常強壯。"
    },
    {
        "word": "high",
        "meaning": "高的",
        "theme": "形容詞(反意)",
        "sentence": "The airplane flies very high in the clear blue sky.",
        "sentenceZh": "飛機在清澈的藍天中飛得非常高。"
    },
    {
        "word": "low",
        "meaning": "低的",
        "theme": "形容詞(反意)",
        "sentence": "The temperature is very low today, so wear a heavy coat.",
        "sentenceZh": "今天溫度很低，所以要穿厚外套。"
    },
    {
        "word": "heavy",
        "meaning": "重的",
        "theme": "形容詞(反意)",
        "sentence": "The box full of books is too heavy for me to carry.",
        "sentenceZh": "這箱裝滿書的箱子對我來說太重了搬不動。"
    },
    {
        "word": "light",
        "meaning": "輕的",
        "theme": "形容詞(反意)",
        "sentence": "A feather is very light and can float in the air.",
        "sentenceZh": "羽毛非常輕，能在空中漂浮。"
    },
    {
        "word": "short",
        "meaning": "矮的、短的",
        "theme": "形容詞(反意)",
        "sentence": "My hair is getting too long; I want to cut it short.",
        "sentenceZh": "我的頭髮越來越長了，我想把它剪短。"
    },
    {
        "word": "long",
        "meaning": "長的",
        "theme": "形容詞(反意)",
        "sentence": "The river is very long and goes through many cities.",
        "sentenceZh": "這條河流非常長，穿過許多城市。"
    },
    {
        "word": "narrow",
        "meaning": "窄的",
        "theme": "形容詞(反意)",
        "sentence": "The car could not pass through the narrow street.",
        "sentenceZh": "汽車無法通過這條狹窄的街道。"
    },
    {
        "word": "wide",
        "meaning": "寬的",
        "theme": "形容詞(反意)",
        "sentence": "The river is too wide for us to swim across.",
        "sentenceZh": "這條河太寬了，我們無法游過去。"
    },
    {
        "word": "broad",
        "meaning": "寬廣的",
        "theme": "形容詞(反意)",
        "sentence": "He stood on the hill and looked at the broad green plain.",
        "sentenceZh": "他站在山丘上看著寬廣的綠色平原。"
    },
    {
        "word": "old",
        "meaning": "年老的；舊的",
        "theme": "形容詞(反意)",
        "sentence": "My grandfather is very old but still very healthy.",
        "sentenceZh": "我爺爺很老了但還是非常健康。"
    },
    {
        "word": "new",
        "meaning": "新的",
        "theme": "形容詞(反意)",
        "sentence": "Our school will build a new library next year.",
        "sentenceZh": "我們學校明年將蓋一座新圖書館。"
    },
    {
        "word": "quick",
        "meaning": "迅速的",
        "theme": "形容詞(反意)",
        "sentence": "We had a quick lunch before the afternoon class started.",
        "sentenceZh": "我們在下午的課開始前迅速吃完了午餐。"
    },
    {
        "word": "fast",
        "meaning": "快的",
        "theme": "形容詞(反意)",
        "sentence": "The cheetah is the fastest animal on land.",
        "sentenceZh": "獵豹是陸地上最快的動物。"
    },
    {
        "word": "slow",
        "meaning": "慢的",
        "theme": "形容詞(反意)",
        "sentence": "The turtle walked at a very slow speed across the road.",
        "sentenceZh": "烏龜以非常慢的速度走過馬路。"
    },
    {
        "word": "cheap",
        "meaning": "便宜的",
        "theme": "形容詞(反意)",
        "sentence": "You can buy a lot of cheap and delicious food at the night market.",
        "sentenceZh": "你可以在夜市買到許多便宜又美味的食物。"
    },
    {
        "word": "expensive",
        "meaning": "昂貴的",
        "theme": "形容詞(反意)",
        "sentence": "That gold watch is too expensive; I cannot buy it.",
        "sentenceZh": "那隻金錶太昂貴了，我買不起。"
    },
    {
        "word": "deaf",
        "meaning": "失聰的",
        "theme": "形容人",
        "sentence": "He uses sign language to talk because he is deaf.",
        "sentenceZh": "他因為失聰，所以使用手語交談。"
    },
    {
        "word": "blind",
        "meaning": "失明的",
        "theme": "形容人",
        "sentence": "The blind man uses a white cane to help him walk safely.",
        "sentenceZh": "這位失明男士使用白手杖幫助他安全行走。"
    },
    {
        "word": "old",
        "meaning": "老的",
        "theme": "形容人",
        "sentence": "(這字稍早出現過，但可再造一句：This is an old 1980s music record.)",
        "sentenceZh": "這是一張古老的 80 年代音樂唱片。"
    },
    {
        "word": "young",
        "meaning": "年輕的",
        "theme": "形容人",
        "sentence": "The young badminton player runs very fast on the court.",
        "sentenceZh": "年輕的羽球選手在球場上跑得非常快。"
    },
    {
        "word": "short",
        "meaning": "矮的",
        "theme": "形容人",
        "sentence": "(稍早為短的，這裡造矮的：He is a bit short for his age, but he jumps high.)",
        "sentenceZh": "就他的年紀來說他有點矮，但他跳得很高。"
    },
    {
        "word": "tall",
        "meaning": "高的",
        "theme": "形容人",
        "sentence": "Yao Ming is a very tall and famous basketball player.",
        "sentenceZh": "姚明是一位非常高且知名的籃球員。"
    },
    {
        "word": "careful",
        "meaning": "小心的",
        "theme": "形容人",
        "sentence": "Please be careful when you cross the busy street.",
        "sentenceZh": "過繁忙的馬路時請小心。"
    },
    {
        "word": "careless",
        "meaning": "粗心的",
        "theme": "形容人",
        "sentence": "He lost his keys because he was being too careless.",
        "sentenceZh": "他因為太粗心而弄丟了鑰匙。"
    },
    {
        "word": "diligent",
        "meaning": "勤奮的",
        "theme": "形容人",
        "sentence": "A diligent student always finishes their homework on time.",
        "sentenceZh": "勤奮的學生總是準時完成作業。"
    },
    {
        "word": "hard-working",
        "meaning": "努力工作的",
        "theme": "形容人",
        "sentence": "Her parents are very hard-working farmers.",
        "sentenceZh": "她的父母是非常努力工作的農夫。"
    },
    {
        "word": "lazy",
        "meaning": "懶惰的",
        "theme": "形容人",
        "sentence": "The lazy cat slept on the sofa all afternoon.",
        "sentenceZh": "懶惰的貓在沙發上睡了整個下午。"
    },
    {
        "word": "dishonest",
        "meaning": "不誠實的",
        "theme": "形容人",
        "sentence": "It is dishonest to copy answers from other students.",
        "sentenceZh": "抄襲其他學生的答案是不誠實的。"
    },
    {
        "word": "honest",
        "meaning": "誠實的",
        "theme": "形容人",
        "sentence": "An honest person will always tell you the truth.",
        "sentenceZh": "誠實的人總是會告訴你真相。"
    },
    {
        "word": "generous",
        "meaning": "慷慨的",
        "theme": "形容人",
        "sentence": "My uncle is very generous and always buys us gifts.",
        "sentenceZh": "我叔叔非常慷慨，總是買禮物給我們。"
    },
    {
        "word": "selfish",
        "meaning": "自私的",
        "theme": "形容人",
        "sentence": "The selfish boy refused to share his toys with others.",
        "sentenceZh": "那個自私的男孩拒絕和別人分享他的玩具。"
    },
    {
        "word": "stingy",
        "meaning": "小氣的",
        "theme": "形容人",
        "sentence": "He is so stingy that he never buys a drink for his friends.",
        "sentenceZh": "他太小氣了，從來不請朋友喝飲料。"
    },
    {
        "word": "greedy",
        "meaning": "貪心的",
        "theme": "形容人",
        "sentence": "The greedy dog tried to eat all the food in the bowl.",
        "sentenceZh": "貪心的狗試圖吃掉碗裡所有的食物。"
    },
    {
        "word": "polite",
        "meaning": "有禮貌的",
        "theme": "形容人",
        "sentence": "It is polite to say \"thank you\" when someone helps you.",
        "sentenceZh": "當別人幫你時，說「謝謝」是有禮貌的。"
    },
    {
        "word": "impolite",
        "meaning": "不禮貌的",
        "theme": "形容人",
        "sentence": "It is impolite to talk loudly when the teacher is speaking.",
        "sentenceZh": "老師說話時大聲講話是不禮貌的。"
    },
    {
        "word": "rich",
        "meaning": "有錢的",
        "theme": "形容人",
        "sentence": "The fruit in Taiwan is very rich in vitamin C.",
        "sentenceZh": "台灣的水果富含維他命C。"
    },
    {
        "word": "poor",
        "meaning": "貧窮的；可憐的",
        "theme": "形容人",
        "sentence": "The poor little bird hurt its wing and couldn't fly.",
        "sentenceZh": "可憐的小鳥傷了翅膀沒辦法飛。"
    },
    {
        "word": "silly",
        "meaning": "傻的",
        "theme": "形容人",
        "sentence": "Stop asking silly questions and focus on the grammar game.",
        "sentenceZh": "別再問傻問題了，專心玩文法遊戲吧。"
    },
    {
        "word": "foolish",
        "meaning": "愚蠢的",
        "theme": "形容人",
        "sentence": "It was a foolish idea to go hiking in the heavy rain.",
        "sentenceZh": "在大雨中去爬山是個愚蠢的主意。"
    },
    {
        "word": "stupid",
        "meaning": "笨的",
        "theme": "形容人",
        "sentence": "I felt stupid when I forgot my good friend's name.",
        "sentenceZh": "當我忘記好朋友的名字時我覺得自己很笨。"
    },
    {
        "word": "dumb",
        "meaning": "啞的",
        "theme": "形容人",
        "sentence": "Don't say dumb things; think before you speak.",
        "sentenceZh": "別說蠢話，三思而後行。"
    },
    {
        "word": "intelligent",
        "meaning": "有智慧的",
        "theme": "形容人",
        "sentence": "Dolphins are highly intelligent animals in the ocean.",
        "sentenceZh": "海豚是海洋中高度有智慧的動物。"
    },
    {
        "word": "smart",
        "meaning": "聰明的",
        "theme": "形容人",
        "sentence": "You have to be smart to solve this difficult puzzle.",
        "sentenceZh": "你必須很聰明才能解開這個困難的謎題。"
    },
    {
        "word": "wise",
        "meaning": "有智慧的",
        "theme": "形容人",
        "sentence": "My grandfather gave me some wise advice about life.",
        "sentenceZh": "我爺爺給了我一些關於人生的智慧建議。"
    },
    {
        "word": "clever",
        "meaning": "聰明的",
        "theme": "形容人",
        "sentence": "The clever monkey found a way to open the box.",
        "sentenceZh": "聰明的猴子找到了打開盒子的方法。"
    },
    {
        "word": "talkative",
        "meaning": "健談的",
        "theme": "形容人",
        "sentence": "She is very talkative and likes to chat with everyone.",
        "sentenceZh": "她非常健談，喜歡和每個人聊天。"
    },
    {
        "word": "shy",
        "meaning": "害羞的",
        "theme": "形容人",
        "sentence": "The shy little boy hid behind his mother's legs.",
        "sentenceZh": "害羞的小男孩躲在他媽媽的腿後面。"
    },
    {
        "word": "beautiful",
        "meaning": "美麗的",
        "theme": "形容人",
        "sentence": "The bride looked beautiful in her white wedding dress.",
        "sentenceZh": "新娘穿著白紗看起來很美麗。"
    },
    {
        "word": "pretty",
        "meaning": "漂亮的",
        "theme": "形容人",
        "sentence": "She has a pretty smile that makes everyone happy.",
        "sentenceZh": "她有一個讓每個人都開心的漂亮笑容。"
    },
    {
        "word": "handsome",
        "meaning": "英俊的",
        "theme": "形容人",
        "sentence": "The actor in that movie is very tall and handsome.",
        "sentenceZh": "那部電影裡的男演員非常高大英俊。"
    },
    {
        "word": "nice-looking",
        "meaning": "好看的",
        "theme": "形容人",
        "sentence": "That is a very nice-looking watch you are wearing.",
        "sentenceZh": "你戴的那隻手錶非常好看。"
    },
    {
        "word": "ugly",
        "meaning": "醜陋的",
        "theme": "形容人",
        "sentence": "The monster in the game has an ugly green face.",
        "sentenceZh": "遊戲裡的怪物有著一張醜陋的綠臉。"
    },
    {
        "word": "chubby",
        "meaning": "圓胖的",
        "theme": "形容人",
        "sentence": "The baby has cute, chubby cheeks.",
        "sentenceZh": "小嬰兒有著可愛圓胖的臉頰。"
    },
    {
        "word": "fat",
        "meaning": "胖的",
        "theme": "形容人",
        "sentence": "My cat is getting too fat because it eats too much.",
        "sentenceZh": "我的貓因為吃太多變得太胖了。"
    },
    {
        "word": "over-weight",
        "meaning": "過重的",
        "theme": "形容人",
        "sentence": "The doctor told him he is slightly over-weight and needs to exercise.",
        "sentenceZh": "醫生告訴他他稍微過重，需要運動。"
    },
    {
        "word": "skinny",
        "meaning": "極瘦的",
        "theme": "形容人",
        "sentence": "The stray dog looked very skinny and hungry.",
        "sentenceZh": "那隻流浪狗看起來極度瘦弱且飢餓。"
    },
    {
        "word": "slender",
        "meaning": "苗條的",
        "theme": "形容人",
        "sentence": "The dancer has a very long and slender body.",
        "sentenceZh": "那位舞者有著非常修長苗條的身材。"
    },
    {
        "word": "slim",
        "meaning": "纖細的",
        "theme": "形容人",
        "sentence": "She stays slim by doing yoga and eating healthy food.",
        "sentenceZh": "她靠著做瑜珈和吃健康食物保持纖細。"
    },
    {
        "word": "thin",
        "meaning": "瘦的",
        "theme": "形容人",
        "sentence": "Please cut the cheese into very thin slices.",
        "sentenceZh": "請把起司切成非常薄的片狀。"
    },
    {
        "word": "under-weight",
        "meaning": "體重不足的",
        "theme": "形容人",
        "sentence": "The rescued kitten was under-weight and needed milk.",
        "sentenceZh": "被救出的小貓體重不足，需要喝牛奶。"
    },
    {
        "word": "brave",
        "meaning": "勇敢的",
        "theme": "形容人",
        "sentence": "The brave firefighter saved the family from the burning house.",
        "sentenceZh": "勇敢的消防員從燃燒的房子裡救出了這家人。"
    },
    {
        "word": "cute",
        "meaning": "可愛的",
        "theme": "形容人",
        "sentence": "We designed a cute character for the English vocabulary book.",
        "sentenceZh": "我們為英文單字書設計了一個可愛的角色。"
    },
    {
        "word": "active",
        "meaning": "活躍的",
        "theme": "形容人",
        "sentence": "My grandfather is very active and plays sports every morning.",
        "sentenceZh": "我爺爺非常活躍，每天早上都做運動。"
    },
    {
        "word": "confident",
        "meaning": "有自信的",
        "theme": "形容人",
        "sentence": "You should be confident when you speak English on stage.",
        "sentenceZh": "當你在台上說英文時應該要有自信。"
    },
    {
        "word": "considerate",
        "meaning": "體貼的",
        "theme": "形容人",
        "sentence": "It is very considerate of you to bring me a cup of hot tea.",
        "sentenceZh": "你帶杯熱茶給我真是太體貼了。"
    },
    {
        "word": "cool",
        "meaning": "酷的",
        "theme": "形容人",
        "sentence": "Wearing sunglasses makes you look very cool.",
        "sentenceZh": "戴墨鏡讓你看起來很酷。"
    },
    {
        "word": "curious",
        "meaning": "好奇的",
        "theme": "形容人",
        "sentence": "The curious little boy asked a lot of questions about the stars.",
        "sentenceZh": "那個好奇的小男孩問了許多關於星星的問題。"
    },
    {
        "word": "energetic",
        "meaning": "精力充沛的",
        "theme": "形容人",
        "sentence": "The students are very energetic during PE class.",
        "sentenceZh": "學生們在體育課時精力充沛。"
    },
    {
        "word": "famous",
        "meaning": "著名的",
        "theme": "形容人",
        "sentence": "Tai Tzu-ying is a very famous badminton player from Taiwan.",
        "sentenceZh": "戴資穎是一位來自台灣且非常著名的羽球選手。"
    },
    {
        "word": "frank",
        "meaning": "坦率的",
        "theme": "形容人",
        "sentence": "To be frank with you, I don't really like this movie.",
        "sentenceZh": "坦率地告訴你，我並不是很喜歡這部電影。"
    },
    {
        "word": "friendly",
        "meaning": "友善的",
        "theme": "形容人",
        "sentence": "The friendly clerk smiled and helped us find the books.",
        "sentenceZh": "友善的店員微笑著幫我們找書。"
    },
    {
        "word": "funny",
        "meaning": "有趣的",
        "theme": "形容人",
        "sentence": "The teacher told a very funny story to make us laugh.",
        "sentenceZh": "老師講了一個非常有趣的故事讓我們大笑。"
    },
    {
        "word": "gentle",
        "meaning": "溫和的",
        "theme": "形容人",
        "sentence": "She has a very gentle voice when she speaks to babies.",
        "sentenceZh": "她和嬰兒說話時聲音非常溫和。"
    },
    {
        "word": "humble",
        "meaning": "謙虛的",
        "theme": "形容人",
        "sentence": "Even though he is a genius, he is still very humble.",
        "sentenceZh": "儘管他是個天才，他依然非常謙虛。"
    },
    {
        "word": "humorous",
        "meaning": "幽默的",
        "theme": "形容人",
        "sentence": "My uncle is a humorous man who always tells good jokes.",
        "sentenceZh": "我叔叔是個幽默的人，總是講好笑的笑話。"
    },
    {
        "word": "kind",
        "meaning": "仁慈的；親切的；種類(n.)",
        "theme": "形容人",
        "sentence": "It was very kind of you to help the old lady cross the street.",
        "sentenceZh": "你幫助老太太過馬路真是太仁慈了。"
    },
    {
        "word": "lovely",
        "meaning": "可愛的",
        "theme": "形容人",
        "sentence": "We had a lovely picnic in the park yesterday afternoon.",
        "sentenceZh": "我們昨天下午在公園度過了一場美好的野餐。"
    },
    {
        "word": "patient",
        "meaning": "有耐心的",
        "theme": "形容人",
        "sentence": "You need to be patient when you are teaching beginners.",
        "sentenceZh": "當你在教初學者時，你需要有耐心。"
    },
    {
        "word": "sincere",
        "meaning": "真誠的",
        "theme": "形容人",
        "sentence": "He gave me a sincere apology for his mistake.",
        "sentenceZh": "他為他的錯誤給了我一個真誠的道歉。"
    },
    {
        "word": "successful",
        "meaning": "成功的",
        "theme": "形容人",
        "sentence": "The English teaching seminar was a very successful event.",
        "sentenceZh": "那場英語教學研討會是個非常成功的活動。"
    },
    {
        "word": "married",
        "meaning": "已婚的",
        "theme": "形容人",
        "sentence": "The happy couple got married in a beautiful church.",
        "sentenceZh": "這對快樂的伴侶在一座美麗的教堂結了婚。"
    },
    {
        "word": "childish",
        "meaning": "幼稚的",
        "theme": "形容人",
        "sentence": "Stop acting in such a childish way; you are a junior high student now.",
        "sentenceZh": "別再表現得這麼幼稚了，你現在是國中生了。"
    },
    {
        "word": "childlike",
        "meaning": "孩子般的",
        "theme": "形容人",
        "sentence": "The old man has a childlike wonder for magic tricks.",
        "sentenceZh": "那位老人對魔術有著孩子般的好奇心。"
    },
    {
        "word": "crazy",
        "meaning": "瘋狂的",
        "theme": "形容人",
        "sentence": "The weather is crazy today; it's hot and raining at the same time.",
        "sentenceZh": "今天天氣很瘋狂，又熱又同時在下雨。"
    },
    {
        "word": "cruel",
        "meaning": "殘忍的",
        "theme": "形容人",
        "sentence": "It is cruel to keep a large bird in a very small cage.",
        "sentenceZh": "把大鳥關在極小的籠子裡是很殘忍的。"
    },
    {
        "word": "evil",
        "meaning": "邪惡的",
        "theme": "形容人",
        "sentence": "The brave prince fought the evil monster to save the princess.",
        "sentenceZh": "勇敢的王子對抗邪惡怪物以拯救公主。"
    },
    {
        "word": "naughty",
        "meaning": "頑皮的",
        "theme": "形容人",
        "sentence": "The naughty boy hid his sister's shoes under the bed.",
        "sentenceZh": "那個頑皮的男孩把他妹妹的鞋子藏在床下。"
    },
    {
        "word": "proud",
        "meaning": "驕傲的",
        "theme": "形容人",
        "sentence": "I am very proud of my students for passing the vocabulary test.",
        "sentenceZh": "我非常為通過單字測驗的學生們感到驕傲。"
    },
    {
        "word": "rude",
        "meaning": "粗魯的",
        "theme": "形容人",
        "sentence": "It is rude to point your finger at someone when talking.",
        "sentenceZh": "講話時用手指指著別人是很粗魯的。"
    },
    {
        "word": "sneaky",
        "meaning": "鬼鬼祟祟的",
        "theme": "形容人",
        "sentence": "The sneaky cat tried to steal the fish from the table.",
        "sentenceZh": "鬼鬼祟祟的貓試圖從桌上偷走魚。"
    },
    {
        "word": "desire",
        "meaning": "慾望",
        "theme": "情緒",
        "sentence": "He has a strong desire to win the badminton championship.",
        "sentenceZh": "他有贏得羽球冠軍的強烈慾望。"
    },
    {
        "word": "emotion",
        "meaning": "情緒",
        "theme": "情緒",
        "sentence": "Music is a great way to express your deep emotions.",
        "sentenceZh": "音樂是表達你深層情緒的好方法。"
    },
    {
        "word": "fear",
        "meaning": "恐懼",
        "theme": "情緒",
        "sentence": "The little girl has a deep fear of the dark.",
        "sentenceZh": "小女孩對黑暗有著深層的恐懼。"
    },
    {
        "word": "feeling",
        "meaning": "感覺",
        "theme": "情緒",
        "sentence": "I have a bad feeling about this upcoming math test.",
        "sentenceZh": "我對這即將到來的數學考試有種不好的感覺。"
    },
    {
        "word": "pleasure",
        "meaning": "樂趣",
        "theme": "情緒",
        "sentence": "It is my pleasure to help you design the class badge.",
        "sentenceZh": "能幫你設計班級徽章是我的榮幸（樂趣）。"
    },
    {
        "word": "anger",
        "meaning": "憤怒",
        "theme": "情緒",
        "sentence": "He could not hide his anger when he saw the broken window.",
        "sentenceZh": "當他看到破掉的窗戶時，他無法隱藏他的憤怒。"
    },
    {
        "word": "attention",
        "meaning": "注意力",
        "theme": "情緒",
        "sentence": "Please pay attention to the teacher during the class.",
        "sentenceZh": "上課時請把注意力放在老師身上（專心聽講）。"
    },
    {
        "word": "hunger",
        "meaning": "飢餓",
        "theme": "情緒",
        "sentence": "The stray dog barked loudly out of hunger.",
        "sentenceZh": "流浪狗因為飢餓而大聲吠叫。"
    },
    {
        "word": "joy",
        "meaning": "歡樂",
        "theme": "情緒",
        "sentence": "The children jumped up and down with joy when they saw the presents.",
        "sentenceZh": "孩子們看到禮物時高興地跳上跳下。"
    },
    {
        "word": "sense",
        "meaning": "感覺；理智",
        "theme": "情緒",
        "sentence": "Dogs have a very strong sense of smell.",
        "sentenceZh": "狗有非常敏銳的嗅覺（感覺）。"
    },
    {
        "word": "smile",
        "meaning": "微笑",
        "theme": "情緒",
        "sentence": "The friendly clerk greeted us with a bright smile.",
        "sentenceZh": "友善的店員帶著燦爛的微笑問候我們。"
    },
    {
        "word": "tear",
        "meaning": "眼淚",
        "theme": "情緒",
        "sentence": "A single tear rolled down her cheek when she heard the sad news.",
        "sentenceZh": "當她聽到壞消息時，一滴眼淚滑落了她的臉頰。"
    },
    {
        "word": "cheer",
        "meaning": "歡呼",
        "theme": "情緒",
        "sentence": "We all cheered loudly when our school badminton team won.",
        "sentenceZh": "當我們學校羽球隊獲勝時，我們都大聲歡呼。"
    },
    {
        "word": "joke",
        "meaning": "笑話",
        "theme": "情緒",
        "sentence": "The English teacher told a funny joke to wake us up.",
        "sentenceZh": "英文老師講了一個好笑的笑話讓我們清醒。"
    },
    {
        "word": "hate",
        "meaning": "討厭",
        "theme": "情緒",
        "sentence": "I hate making the same spelling mistake twice.",
        "sentenceZh": "我討厭犯兩次一樣的拼字錯誤。"
    },
    {
        "word": "like",
        "meaning": "喜歡",
        "theme": "情緒",
        "sentence": "I like listening to 1980s music when I am reading.",
        "sentenceZh": "我看書時喜歡聽 80 年代的音樂。"
    },
    {
        "word": "love",
        "meaning": "愛",
        "theme": "情緒",
        "sentence": "My grandmother loves taking a walk in the park.",
        "sentenceZh": "我奶奶熱愛在公園散步。"
    },
    {
        "word": "regret",
        "meaning": "後悔",
        "theme": "情緒",
        "sentence": "You will regret it if you don't study for the exam.",
        "sentenceZh": "如果你不為考試讀書，你會後悔的。"
    },
    {
        "word": "laugh",
        "meaning": "大笑",
        "theme": "情緒",
        "sentence": "The funny video on YouTube made everyone laugh.",
        "sentenceZh": "YouTube 上的搞笑影片讓每個人都大笑。"
    },
    {
        "word": "calm",
        "meaning": "使冷靜",
        "theme": "情緒",
        "sentence": "Take a deep breath to calm yourself down before the test.",
        "sentenceZh": "考試前深呼吸讓自己冷靜下來。"
    },
    {
        "word": "enjoy",
        "meaning": "享受",
        "theme": "情緒",
        "sentence": "I really enjoy playing the interactive grammar games.",
        "sentenceZh": "我真的很享受玩互動文法遊戲。"
    },
    {
        "word": "envy",
        "meaning": "嫉妒",
        "theme": "情緒",
        "sentence": "I envy his excellent badminton skills.",
        "sentenceZh": "我嫉妒他極佳的羽球技巧。"
    },
    {
        "word": "doubt",
        "meaning": "懷疑",
        "theme": "情緒",
        "sentence": "I doubt that it will rain this afternoon; the sky is very clear.",
        "sentenceZh": "我懷疑今天下午會下雨，天空非常晴朗。"
    },
    {
        "word": "pleasant",
        "meaning": "令人愉悅的",
        "theme": "情緒",
        "sentence": "We had a pleasant afternoon at the coffee shop in Douliu.",
        "sentenceZh": "我們在斗六的咖啡廳度過了一個令人愉悅的下午。"
    },
    {
        "word": "afraid",
        "meaning": "害怕的",
        "theme": "情緒",
        "sentence": "Don't be afraid to ask questions in class.",
        "sentenceZh": "在課堂上別害怕問問題。"
    },
    {
        "word": "glad",
        "meaning": "高興的",
        "theme": "情緒",
        "sentence": "I am so glad to hear that you passed the English test!",
        "sentenceZh": "聽到你通過英文考試我真高興！"
    },
    {
        "word": "happy",
        "meaning": "快樂的",
        "theme": "情緒",
        "sentence": "She gave me a happy smile when she saw the present.",
        "sentenceZh": "她看到禮物時給了我一個快樂的微笑。"
    },
    {
        "word": "jealous",
        "meaning": "嫉妒的",
        "theme": "情緒",
        "sentence": "He felt a little jealous when his friend bought a new bike.",
        "sentenceZh": "當他朋友買了新腳踏車時，他覺得有點嫉妒。"
    },
    {
        "word": "lonely",
        "meaning": "孤獨的",
        "theme": "情緒",
        "sentence": "The old man felt lonely because his children lived far away.",
        "sentenceZh": "那位老人覺得孤單，因為他的孩子們住得很遠。"
    },
    {
        "word": "mad",
        "meaning": "瘋狂的",
        "theme": "情緒",
        "sentence": "Please don't be mad at me; I didn't mean to break it.",
        "sentenceZh": "請別對我生氣，我不是故意弄壞它的。"
    },
    {
        "word": "nervous",
        "meaning": "緊張的",
        "theme": "情緒",
        "sentence": "I always feel nervous before speaking English on stage.",
        "sentenceZh": "在台上說英文前我總是覺得緊張。"
    },
    {
        "word": "sad",
        "meaning": "難過的",
        "theme": "情緒",
        "sentence": "It is a very sad story about a lost little dog.",
        "sentenceZh": "這是一個關於迷路小狗的難過故事。"
    },
    {
        "word": "unhappy",
        "meaning": "不快樂的",
        "theme": "情緒",
        "sentence": "The little boy was unhappy because he couldn't go out to play.",
        "sentenceZh": "小男孩很不快樂，因為他不能出去玩。"
    },
    {
        "word": "angry",
        "meaning": "生氣的",
        "theme": "情緒",
        "sentence": "The teacher was angry because someone cheated on the test.",
        "sentenceZh": "老師很生氣，因為有人在考試作弊。"
    },
    {
        "word": "black",
        "meaning": "黑色",
        "theme": "顏色",
        "sentence": "He always uses a black pen to write his homework.",
        "sentenceZh": "他總是用黑筆寫作業。"
    },
    {
        "word": "blue",
        "meaning": "藍色",
        "theme": "顏色",
        "sentence": "The sky is beautifully blue today.",
        "sentenceZh": "今天的天空是美麗的藍色。"
    },
    {
        "word": "brown",
        "meaning": "棕色",
        "theme": "顏色",
        "sentence": "My cute dog has big brown eyes.",
        "sentenceZh": "我可愛的狗有一雙棕色的大眼睛。"
    },
    {
        "word": "color",
        "meaning": "顏色",
        "theme": "顏色",
        "sentence": "What is your favorite color for a badminton racket?",
        "sentenceZh": "你最喜歡的羽球拍顏色是什麼？"
    },
    {
        "word": "gray",
        "meaning": "灰色",
        "theme": "顏色",
        "sentence": "The sky turned gray just before the heavy rain started.",
        "sentenceZh": "就在大雨開始前，天空變成了灰色。"
    },
    {
        "word": "green",
        "meaning": "綠色",
        "theme": "顏色",
        "sentence": "Eating green vegetables is very good for your body.",
        "sentenceZh": "吃綠色蔬菜對你的身體很好。"
    },
    {
        "word": "orange",
        "meaning": "橙色",
        "theme": "顏色",
        "sentence": "He wore a bright orange T-shirt to the beach.",
        "sentenceZh": "他穿了一件亮橘色的 T 恤去海灘。"
    },
    {
        "word": "pink",
        "meaning": "粉色",
        "theme": "顏色",
        "sentence": "She decorated her bedroom with cute pink flowers.",
        "sentenceZh": "她用可愛的粉紅花朵裝飾她的臥室。"
    },
    {
        "word": "purple",
        "meaning": "紫色",
        "theme": "顏色",
        "sentence": "Grapes are usually green or purple.",
        "sentenceZh": "葡萄通常是綠色或紫色的。"
    },
    {
        "word": "red",
        "meaning": "紅色",
        "theme": "顏色",
        "sentence": "The teacher used a red pen to correct the mistakes.",
        "sentenceZh": "老師用紅筆來改正錯誤。"
    },
    {
        "word": "white",
        "meaning": "白色",
        "theme": "顏色",
        "sentence": "The nurse wears a clean white uniform at the hospital.",
        "sentenceZh": "護理師在醫院穿著乾淨的白色制服。"
    },
    {
        "word": "yellow",
        "meaning": "黃色",
        "theme": "顏色",
        "sentence": "Bananas and lemons are both yellow fruits.",
        "sentenceZh": "香蕉和檸檬都是黃色的水果。"
    },
    {
        "word": "golden",
        "meaning": "金色的",
        "theme": "顏色",
        "sentence": "The golden sunlight shines warmly in the early morning.",
        "sentenceZh": "金色的陽光在清晨溫暖地照耀著。"
    },
    {
        "word": "able",
        "meaning": "能夠的",
        "theme": "其餘形容詞",
        "sentence": "You will be able to read this book after learning these words.",
        "sentenceZh": "學完這些單字後你就能夠讀懂這本書了。"
    },
    {
        "word": "asleep",
        "meaning": "睡著的",
        "theme": "其餘形容詞",
        "sentence": "The baby fell asleep quickly after drinking warm milk.",
        "sentenceZh": "嬰兒喝完溫牛奶後很快就睡著了。"
    },
    {
        "word": "born",
        "meaning": "與生俱來的",
        "theme": "其餘形容詞",
        "sentence": "I was born in a small town in central Taiwan.",
        "sentenceZh": "我出生在中台灣的一個小鎮。"
    },
    {
        "word": "certain",
        "meaning": "確定的",
        "theme": "其餘形容詞",
        "sentence": "Are you certain that this is the correct answer?",
        "sentenceZh": "你確定這是正確答案嗎？"
    },
    {
        "word": "complete",
        "meaning": "完整的",
        "theme": "其餘形容詞",
        "sentence": "To win the game, you must build a complete sentence.",
        "sentenceZh": "為了贏得遊戲，你必須造出一個完整的句子。"
    },
    {
        "word": "convenient",
        "meaning": "方便的",
        "theme": "其餘形容詞",
        "sentence": "It is very convenient to use a smartphone to study vocabulary.",
        "sentenceZh": "用智慧型手機學習單字非常方便。"
    },
    {
        "word": "dear",
        "meaning": "親愛的；昂貴的",
        "theme": "其餘形容詞",
        "sentence": "\"Dear Director Lee, we would like to invite you...\"",
        "sentenceZh": "「親愛的李主任，我們想邀請您……」"
    },
    {
        "word": "deep",
        "meaning": "深的",
        "theme": "其餘形容詞",
        "sentence": "The little boy was afraid to swim in the deep ocean.",
        "sentenceZh": "小男孩害怕在深海裡游泳。"
    },
    {
        "word": "distant",
        "meaning": "遙遠的",
        "theme": "其餘形容詞",
        "sentence": "We could hear the distant sound of thunder in the mountains.",
        "sentenceZh": "我們能聽到群山中遙遠的雷聲。"
    },
    {
        "word": "double",
        "meaning": "雙倍的",
        "theme": "其餘形容詞",
        "sentence": "Please check your spelling double times before handing in the test.",
        "sentenceZh": "交卷前請檢查你的拼字兩次。"
    },
    {
        "word": "electric",
        "meaning": "電的",
        "theme": "其餘形容詞",
        "sentence": "Turn off the electric fan when you leave the classroom.",
        "sentenceZh": "離開教室時請關掉電風扇。"
    },
    {
        "word": "enough",
        "meaning": "足夠的",
        "theme": "其餘形容詞",
        "sentence": "We don't have enough players to start the volleyball game.",
        "sentenceZh": "我們沒有足夠的球員來開始排球比賽。"
    },
    {
        "word": "equal",
        "meaning": "平等的",
        "theme": "其餘形容詞",
        "sentence": "In math, five plus five is equal to ten.",
        "sentenceZh": "在數學中，五加五等於十。"
    },
    {
        "word": "every",
        "meaning": "每個的",
        "theme": "其餘形容詞",
        "sentence": "I practice reading English for thirty minutes every day.",
        "sentenceZh": "我每天練習閱讀英文三十分鐘。"
    },
    {
        "word": "extra",
        "meaning": "額外的",
        "theme": "其餘形容詞",
        "sentence": "Can I have an extra piece of blank paper, please?",
        "sentenceZh": "請問我可以多要一張空白紙嗎？"
    },
    {
        "word": "fair",
        "meaning": "公平的",
        "theme": "其餘形容詞",
        "sentence": "The teacher made a fair decision for both students.",
        "sentenceZh": "老師為兩位學生做了一個公平的決定。"
    },
    {
        "word": "fancy",
        "meaning": "別緻的；鋪張的",
        "theme": "其餘形容詞",
        "sentence": "We had dinner at a very fancy restaurant to celebrate.",
        "sentenceZh": "我們在一家非常高級別緻的餐廳吃晚餐慶祝。"
    },
    {
        "word": "far",
        "meaning": "遠的",
        "theme": "其餘形容詞",
        "sentence": "Is your house very far from the junior high school?",
        "sentenceZh": "你家離國中很遠嗎？"
    },
    {
        "word": "fashionable",
        "meaning": "時尚的",
        "theme": "其餘形容詞",
        "sentence": "Wearing large sunglasses was very fashionable in the 1980s.",
        "sentenceZh": "戴大墨鏡在 80 年代非常時尚。"
    },
    {
        "word": "favorite",
        "meaning": "最喜愛的",
        "theme": "其餘形容詞",
        "sentence": "PE is my favorite subject because I can play badminton.",
        "sentenceZh": "體育是我最喜歡的科目，因為可以打羽球。"
    },
    {
        "word": "final",
        "meaning": "最終的",
        "theme": "其餘形容詞",
        "sentence": "You must study hard for the final exam next week.",
        "sentenceZh": "你必須為下週的期末考認真讀書。"
    },
    {
        "word": "formal",
        "meaning": "正式的",
        "theme": "其餘形容詞",
        "sentence": "He wore a formal black suit to the important meeting.",
        "sentenceZh": "他穿了一套正式的黑西裝去參加重要會議。"
    },
    {
        "word": "free",
        "meaning": "免費的；自由的",
        "theme": "其餘形容詞",
        "sentence": "You can play this English vocabulary game for free.",
        "sentenceZh": "你可以免費玩這個英文單字遊戲。"
    },
    {
        "word": "fresh",
        "meaning": "新鮮的",
        "theme": "其餘形容詞",
        "sentence": "The fresh air in the mountains feels so clean.",
        "sentenceZh": "山裡的新鮮空氣感覺好乾淨。"
    },
    {
        "word": "helpful",
        "meaning": "有幫助的",
        "theme": "其餘形容詞",
        "sentence": "This vocabulary passport is very helpful for learning English.",
        "sentenceZh": "這本單字護照對學習英文非常有幫助。"
    },
    {
        "word": "homesick",
        "meaning": "想家的",
        "theme": "其餘形容詞",
        "sentence": "The student felt very homesick during the summer camp.",
        "sentenceZh": "這位學生在夏令營期間覺得非常想家。"
    },
    {
        "word": "horrible",
        "meaning": "可怕的",
        "theme": "其餘形容詞",
        "sentence": "I had a horrible dream about a giant monster last night.",
        "sentenceZh": "我昨晚做了一個關於巨大怪物的可怕惡夢。"
    },
    {
        "word": "important",
        "meaning": "重要的",
        "theme": "其餘形容詞",
        "sentence": "It is very important to eat breakfast every morning.",
        "sentenceZh": "每天早上吃早餐是非常重要的。"
    },
    {
        "word": "independent",
        "meaning": "獨立的",
        "theme": "其餘形容詞",
        "sentence": "Junior high students should learn to be more independent.",
        "sentenceZh": "國中生應該學習變得更獨立。"
    },
    {
        "word": "instant",
        "meaning": "立即的",
        "theme": "其餘形容詞",
        "sentence": "He sent me an instant message on the Internet.",
        "sentenceZh": "他在網路上傳了一則即時訊息給我。"
    },
    {
        "word": "latest",
        "meaning": "最新的",
        "theme": "其餘形容詞",
        "sentence": "Have you listened to their latest pop music album?",
        "sentenceZh": "你聽過他們最新的流行音樂專輯了嗎？"
    },
    {
        "word": "lucky",
        "meaning": "幸運的",
        "theme": "其餘形容詞",
        "sentence": "I was very lucky to find my lost keys in the park.",
        "sentenceZh": "我非常幸運地在公園找到了我弄丟的鑰匙。"
    },
    {
        "word": "magic",
        "meaning": "魔法的",
        "theme": "其餘形容詞",
        "sentence": "The magician showed us an amazing magic trick.",
        "sentenceZh": "魔術師表演了一個驚人的魔術戲法給我們看。"
    },
    {
        "word": "necessary",
        "meaning": "必要的",
        "theme": "其餘形容詞",
        "sentence": "Is it really necessary to buy such an expensive racket?",
        "sentenceZh": "真的有必要買這麼昂貴的球拍嗎？"
    },
    {
        "word": "other",
        "meaning": "其他的",
        "theme": "其餘形容詞",
        "sentence": "Do you have any other questions about the grammar rules?",
        "sentenceZh": "關於文法規則你還有其他的問題嗎？"
    },
    {
        "word": "peaceful",
        "meaning": "和平的",
        "theme": "其餘形容詞",
        "sentence": "The small village in the mountains is very quiet and peaceful.",
        "sentenceZh": "山裡的小村莊非常安靜且寧靜。"
    },
    {
        "word": "perfect",
        "meaning": "完美的",
        "theme": "其餘形容詞",
        "sentence": "This clear blue sky is just perfect for an outdoor picnic.",
        "sentenceZh": "這樣晴朗的藍天簡直完美適合戶外野餐。"
    },
    {
        "word": "personal",
        "meaning": "個人的",
        "theme": "其餘形容詞",
        "sentence": "You should not read other people's personal letters.",
        "sentenceZh": "你不應該讀別人私人的信件。"
    },
    {
        "word": "popular",
        "meaning": "受歡迎的",
        "theme": "其餘形容詞",
        "sentence": "The game \"Weather Combat\" is very popular among students.",
        "sentenceZh": "「天氣大戰」這款遊戲在學生中非常受歡迎。"
    },
    {
        "word": "ready",
        "meaning": "準備好的",
        "theme": "其餘形容詞",
        "sentence": "Are you ready to start the English vocabulary test?",
        "sentenceZh": "你準備好開始英文單字測驗了嗎？"
    },
    {
        "word": "real",
        "meaning": "真實的",
        "theme": "其餘形容詞",
        "sentence": "Is the monster in the movie a real animal or just computer graphics?",
        "sentenceZh": "電影裡的怪物是真實的動物還是只是電腦繪圖？"
    },
    {
        "word": "regular",
        "meaning": "規律的；定期的",
        "theme": "其餘形容詞",
        "sentence": "Doing regular exercise will keep your body strong and healthy.",
        "sentenceZh": "做規律的運動能讓你的身體保持強壯健康。"
    },
    {
        "word": "responsible",
        "meaning": "負責的",
        "theme": "其餘形容詞",
        "sentence": "The class leader is responsible for keeping the classroom quiet.",
        "sentenceZh": "班長負責保持教室安靜。"
    },
    {
        "word": "serious",
        "meaning": "嚴肅的；嚴重的",
        "theme": "其餘形容詞",
        "sentence": "You need to be serious when preparing for the big exam.",
        "sentenceZh": "準備大考時你需要認真嚴肅。"
    },
    {
        "word": "sharp",
        "meaning": "鋒利的；尖銳的",
        "theme": "其餘形容詞",
        "sentence": "Be careful, the edge of that broken glass is very sharp.",
        "sentenceZh": "小心，那塊破玻璃的邊緣非常銳利。"
    },
    {
        "word": "single",
        "meaning": "單一的；單身的",
        "theme": "其餘形容詞",
        "sentence": "I didn't make a single mistake in my grammar test!",
        "sentenceZh": "我的文法考試連一個錯誤都沒犯！"
    },
    {
        "word": "skillful",
        "meaning": "熟練的",
        "theme": "其餘形容詞",
        "sentence": "He is a very skillful player who can hit the ball perfectly.",
        "sentenceZh": "他是個非常熟練的球員，能完美地擊球。"
    },
    {
        "word": "sleepy",
        "meaning": "想睡的",
        "theme": "其餘形容詞",
        "sentence": "I feel very sleepy because I stayed up late last night.",
        "sentenceZh": "我覺得很想睡，因為我昨晚熬夜了。"
    },
    {
        "word": "social",
        "meaning": "社會的；社交的",
        "theme": "其餘形容詞",
        "sentence": "Humans are social animals; we like to talk to friends.",
        "sentenceZh": "人類是社會性動物，我們喜歡和朋友聊天。"
    },
    {
        "word": "such",
        "meaning": "如此的",
        "theme": "其餘形容詞",
        "sentence": "It is such a beautiful day to play badminton outside.",
        "sentenceZh": "這是個如此適合在戶外打羽球的美好日子。"
    },
    {
        "word": "sudden",
        "meaning": "突然的",
        "theme": "其餘形容詞",
        "sentence": "We got wet because of a sudden rain shower.",
        "sentenceZh": "我們因為一場突如其來的陣雨淋濕了。"
    },
    {
        "word": "super",
        "meaning": "超級的",
        "theme": "其餘形容詞",
        "sentence": "He ran at a super fast speed to catch the bus.",
        "sentenceZh": "他以超級快的速度奔跑去趕公車。"
    },
    {
        "word": "the",
        "meaning": "那個；這個；那些；這些",
        "theme": "其餘形容詞",
        "sentence": "",
        "sentenceZh": ""
    },
    {
        "word": "thick",
        "meaning": "厚的；濃的；稠的",
        "theme": "其餘形容詞",
        "sentence": "You should wear a thick coat because it is freezing outside.",
        "sentenceZh": "你應該穿件厚外套，因為外面冷極了。"
    },
    {
        "word": "tidy",
        "meaning": "整潔的",
        "theme": "其餘形容詞",
        "sentence": "Please keep your desk clean and tidy before leaving the classroom.",
        "sentenceZh": "離開教室前請保持你的書桌乾淨整潔。"
    },
    {
        "word": "useful",
        "meaning": "有用的",
        "theme": "其餘形容詞",
        "sentence": "This English-Chinese dictionary is a very useful tool.",
        "sentenceZh": "這本英漢字典是非常有用的工具。"
    },
    {
        "word": "usual",
        "meaning": "通常的",
        "theme": "其餘形容詞",
        "sentence": "I woke up at my usual time of 6:30 a.m. this morning.",
        "sentenceZh": "我今天早上在通常的六點半醒來。"
    },
    {
        "word": "valuable",
        "meaning": "有價值的",
        "theme": "其餘形容詞",
        "sentence": "Time is very valuable, so don't waste it on playing too many games.",
        "sentenceZh": "時間非常寶貴，所以不要浪費在玩太多遊戲上。"
    },
    {
        "word": "whole",
        "meaning": "整體的",
        "theme": "其餘形容詞",
        "sentence": "He ate the whole pizza by himself because he was so hungry.",
        "sentenceZh": "他因為太餓了，自己吃掉了整份披薩。"
    },
    {
        "word": "wild",
        "meaning": "野生的；狂野的",
        "theme": "其餘形容詞",
        "sentence": "The forest is full of dangerous wild animals.",
        "sentenceZh": "森林裡充滿了危險的野生動物。"
    },
    {
        "word": "wonderful",
        "meaning": "美妙的",
        "theme": "其餘形容詞",
        "sentence": "We had a wonderful time visiting the museum together.",
        "sentenceZh": "我們一起參觀博物館度過了美妙的時光。"
    },
    {
        "word": "especially",
        "meaning": "尤其",
        "theme": "副詞",
        "sentence": "I love eating fruit, especially sweet mangoes in summer.",
        "sentenceZh": "我熱愛吃水果，尤其是在夏天的甜芒果。"
    },
    {
        "word": "finally",
        "meaning": "最後",
        "theme": "副詞",
        "sentence": "After a long game, our team finally won the victory.",
        "sentenceZh": "經過漫長的比賽，我們的隊伍最後贏得了勝利。"
    },
    {
        "word": "least",
        "meaning": "最少",
        "theme": "副詞",
        "sentence": "You should exercise at least three times a week.",
        "sentenceZh": "你應該一週至少運動三次。"
    },
    {
        "word": "then",
        "meaning": "然後",
        "theme": "副詞",
        "sentence": "Finish your homework first, and then you can watch TV.",
        "sentenceZh": "先寫完你的作業，然後你就可以看電視。"
    },
    {
        "word": "yet",
        "meaning": "尚未；但是",
        "theme": "副詞",
        "sentence": "Have you finished coding the HTML game yet?",
        "sentenceZh": "你寫完 HTML 遊戲的程式碼了嗎？"
    },
    {
        "word": "aloud",
        "meaning": "大聲地",
        "theme": "副詞",
        "sentence": "Please read the English sentence aloud so everyone can hear you.",
        "sentenceZh": "請大聲朗讀這個英文句子，讓每個人都能聽到。"
    },
    {
        "word": "either",
        "meaning": "也（用於否定句）",
        "theme": "副詞",
        "sentence": "I don't like bitter coffee, and he doesn't like it either.",
        "sentenceZh": "我不喜歡苦咖啡，他也不喜歡。"
    },
    {
        "word": "else",
        "meaning": "其他",
        "theme": "副詞",
        "sentence": "Is there anything else I can help you with today?",
        "sentenceZh": "今天還有其他我可以幫你的事嗎？"
    },
    {
        "word": "just",
        "meaning": "就；剛剛",
        "theme": "副詞",
        "sentence": "The school bus just left the station a minute ago.",
        "sentenceZh": "校車一分鐘前剛剛離開車站。"
    },
    {
        "word": "neither",
        "meaning": "也不",
        "theme": "副詞",
        "sentence": "My brother doesn't play tennis, and neither do I.",
        "sentenceZh": "我哥哥不打網球，我也不打。"
    },
    {
        "word": "not",
        "meaning": "不",
        "theme": "副詞",
        "sentence": "This is not the correct answer; please try again.",
        "sentenceZh": "這不是正確答案，請再試一次。"
    },
    {
        "word": "only",
        "meaning": "只有、僅",
        "theme": "副詞",
        "sentence": "I have only one English class on Wednesday afternoon.",
        "sentenceZh": "我星期三下午只有一節英文課。"
    },
    {
        "word": "almost",
        "meaning": "幾乎",
        "theme": "副詞",
        "sentence": "I have almost finished memorizing all 2,000 words!",
        "sentenceZh": "我幾乎已經背完這兩千個單字了！"
    },
    {
        "word": "even",
        "meaning": "甚至",
        "theme": "副詞",
        "sentence": "He loves the game so much that he even plays it on weekends.",
        "sentenceZh": "他太愛這個遊戲了，甚至在週末也會玩。"
    },
    {
        "word": "really",
        "meaning": "真地",
        "theme": "副詞",
        "sentence": "Is it really true that we have no homework tonight?",
        "sentenceZh": "今晚沒有回家作業是真的嗎？"
    },
    {
        "word": "so",
        "meaning": "如此；這麼",
        "theme": "副詞",
        "sentence": "The movie was so funny that I laughed until I cried.",
        "sentenceZh": "這部電影太好笑了，我笑到流眼淚。"
    },
    {
        "word": "still",
        "meaning": "仍然",
        "theme": "副詞",
        "sentence": "Are you still watching that 80s music video on YouTube?",
        "sentenceZh": "你還在 YouTube 上看那部 80 年代的音樂影片嗎？"
    },
    {
        "word": "very",
        "meaning": "非常",
        "theme": "副詞",
        "sentence": "Thank you very much for helping me solve the grammar problem.",
        "sentenceZh": "非常感謝你幫我解決文法問題。"
    },
    {
        "word": "nearly",
        "meaning": "幾乎",
        "theme": "副詞",
        "sentence": "It took nearly two hours to drive from Douliu to Taipei.",
        "sentenceZh": "從斗六開車到台北幾乎花了兩個小時。"
    },
    {
        "word": "quite",
        "meaning": "蠻~",
        "theme": "副詞",
        "sentence": "The science test today was quite difficult for me.",
        "sentenceZh": "今天的科學考試對我來說相當困難。"
    },
    {
        "word": "rather",
        "meaning": "寧願；相當地",
        "theme": "副詞",
        "sentence": "I would rather play badminton than go running.",
        "sentenceZh": "我寧願去打羽球也不想去跑步。"
    },
    {
        "word": "too",
        "meaning": "也；太",
        "theme": "副詞",
        "sentence": "The hot soup is too spicy for the little child to eat.",
        "sentenceZh": "這碗熱湯對小孩子來說太辣了沒辦法吃。"
    },
    {
        "word": "actually",
        "meaning": "實際上",
        "theme": "副詞",
        "sentence": "The grammar rule looks hard, but it is actually quite easy.",
        "sentenceZh": "這個文法規則看起來很難，但實際上相當簡單。"
    },
    {
        "word": "perhaps",
        "meaning": "可能地",
        "theme": "副詞",
        "sentence": "Perhaps we can go to the beach if it doesn't rain tomorrow.",
        "sentenceZh": "如果明天不下雨，或許我們可以去海灘。"
    },
    {
        "word": "probably",
        "meaning": "有可能地",
        "theme": "副詞",
        "sentence": "He will probably be late for school because he missed the bus.",
        "sentenceZh": "他可能會上學遲到，因為他錯過了公車。"
    },
    {
        "word": "likely",
        "meaning": "可能地",
        "theme": "副詞",
        "sentence": "It is highly likely that she will win the first prize.",
        "sentenceZh": "她非常有贏得第一名。"
    },
    {
        "word": "maybe",
        "meaning": "可能地",
        "theme": "副詞",
        "sentence": "Maybe we can ask the teacher to explain it one more time.",
        "sentenceZh": "也許我們可以請老師再解釋一次。"
    },
    {
        "word": "abroad",
        "meaning": "在國外",
        "theme": "副詞",
        "sentence": "My uncle travels abroad many times a year for business.",
        "sentenceZh": "我叔叔為了生意一年出國好幾次。"
    },
    {
        "word": "ahead",
        "meaning": "在前面",
        "theme": "副詞",
        "sentence": "Keep walking straight ahead, and you will see the post office.",
        "sentenceZh": "繼續直直往前走，你就會看到郵局。"
    },
    {
        "word": "everywhere",
        "meaning": "到處",
        "theme": "副詞",
        "sentence": "I have looked everywhere, but I cannot find my cell phone.",
        "sentenceZh": "我已經到處找過了，但就是找不到我的手機。"
    },
    {
        "word": "anywhere",
        "meaning": "任何地方",
        "theme": "副詞",
        "sentence": "You can sit anywhere you like in the cafeteria.",
        "sentenceZh": "在自助餐廳裡你可以坐在任何你喜歡的地方。"
    },
    {
        "word": "somewhere",
        "meaning": "某個地方",
        "theme": "副詞",
        "sentence": "I dropped my keys somewhere near the badminton court.",
        "sentenceZh": "我把鑰匙掉在羽球場附近的某個地方了。"
    },
    {
        "word": "out",
        "meaning": "出去",
        "theme": "副詞",
        "sentence": "Please take the trash out before you go to bed.",
        "sentenceZh": "睡前請把垃圾拿出去。"
    },
    {
        "word": "upon",
        "meaning": "在~之上",
        "theme": "副詞",
        "sentence": "Once upon a time, there was a brave prince in a castle.",
        "sentenceZh": "很久很久以前，城堡裡有一位勇敢的王子。"
    },
    {
        "word": "away",
        "meaning": "離開",
        "theme": "副詞",
        "sentence": "The scared bird quickly flew away into the blue sky.",
        "sentenceZh": "受到驚嚇的鳥快速飛走，進入了藍天中。"
    },
    {
        "word": "besides",
        "meaning": "此外；而且",
        "theme": "副詞",
        "sentence": "I don't want to go out; besides, it is raining heavily.",
        "sentenceZh": "我不想出門；而且，現在雨下得很大。"
    },
    {
        "word": "therefore",
        "meaning": "因此",
        "theme": "副詞",
        "sentence": "He didn't study hard; therefore, he failed the math test.",
        "sentenceZh": "他沒有努力讀書；因此，他數學考試不及格。"
    },
    {
        "word": "however",
        "meaning": "然而",
        "theme": "副詞",
        "sentence": "He tried his best to hit the ball; however, he missed it.",
        "sentenceZh": "他盡了全力去擊球；然而，他還是漏接了。"
    },
    {
        "word": "always",
        "meaning": "總是",
        "theme": "副詞",
        "sentence": "The sun always rises in the east and sets in the west.",
        "sentenceZh": "太陽總是從東方升起、西方落下。"
    },
    {
        "word": "ever",
        "meaning": "曾經",
        "theme": "副詞",
        "sentence": "Have you ever been to a 1980s pop music concert?",
        "sentenceZh": "你曾經去過 80 年代流行音樂的演唱會嗎？"
    },
    {
        "word": "never",
        "meaning": "從不",
        "theme": "副詞",
        "sentence": "You should never open the door for a stranger.",
        "sentenceZh": "你絕不應該幫陌生人開門。"
    },
    {
        "word": "often",
        "meaning": "經常",
        "theme": "副詞",
        "sentence": "I often go jogging in the park on Sunday mornings.",
        "sentenceZh": "我經常在星期日早上在公園慢跑。"
    },
    {
        "word": "seldom",
        "meaning": "很少",
        "theme": "副詞",
        "sentence": "She seldom drinks sweet soda because it is bad for her health.",
        "sentenceZh": "她很少喝甜汽水，因為那對健康不好。"
    },
    {
        "word": "sometimes",
        "meaning": "有時候",
        "theme": "副詞",
        "sentence": "Sometimes learning a new language can be a little frustrating.",
        "sentenceZh": "有時候學習新語言會有點令人挫折。"
    },
    {
        "word": "usually",
        "meaning": "通常",
        "theme": "副詞",
        "sentence": "We usually have rice, meat, and vegetables for dinner.",
        "sentenceZh": "我們晚餐通常吃米飯、肉和蔬菜。"
    },
    {
        "word": "again",
        "meaning": "再次",
        "theme": "副詞",
        "sentence": "Please read the English sentence aloud again.",
        "sentenceZh": "請再次大聲朗讀這個英文句子。"
    },
    {
        "word": "hardly",
        "meaning": "幾乎不",
        "theme": "副詞",
        "sentence": "The fog was so thick that I could hardly see the road.",
        "sentenceZh": "霧太濃了，我幾乎看不見馬路。"
    },
    {
        "word": "together",
        "meaning": "一起",
        "theme": "副詞",
        "sentence": "Let's work together to finish this school science project.",
        "sentenceZh": "我們一起合作完成這個學校的科學專案吧。"
    },
    {
        "word": "twice",
        "meaning": "兩次",
        "theme": "副詞",
        "sentence": "I brush my teeth at least twice a day to keep them healthy.",
        "sentenceZh": "我一天至少刷兩次牙來保持牙齒健康。"
    },
    {
        "word": "this",
        "meaning": "這個（近指單數）",
        "theme": "代名詞",
        "sentence": "This interactive grammar game is really fun to play!",
        "sentenceZh": "這個互動文法遊戲玩起來真有趣！"
    },
    {
        "word": "that",
        "meaning": "那個（遠指單數）",
        "theme": "代名詞",
        "sentence": "That tall building over there is the city hospital.",
        "sentenceZh": "那邊那棟高大的建築物是市立醫院。"
    },
    {
        "word": "these",
        "meaning": "這些（近指複數）",
        "theme": "代名詞",
        "sentence": "Please put these heavy books on the bottom shelf.",
        "sentenceZh": "請把這些重書放在最底層的架子上。"
    },
    {
        "word": "those",
        "meaning": "那些（遠指複數）",
        "theme": "代名詞",
        "sentence": "Those students playing on the court are my classmates.",
        "sentenceZh": "那些在球場上打球的學生是我的同班同學。"
    },
    {
        "word": "I",
        "meaning": "我",
        "theme": "代名詞",
        "sentence": "I built the webpage by myself, and the design is mine.",
        "sentenceZh": "我自己建立了這個網頁，而設計是我的。"
    },
    {
        "word": "me",
        "meaning": "我",
        "theme": "代名詞",
        "sentence": "Did you finish the homework by yourself?",
        "sentenceZh": "你是自己一個人完成作業的嗎？"
    },
    {
        "word": "my",
        "meaning": "我的",
        "theme": "代名詞",
        "sentence": "He hurt himself when he fell off his new bicycle.",
        "sentenceZh": "他從新腳踏車上摔下來時傷到了自己。"
    },
    {
        "word": "mine",
        "meaning": "我的",
        "theme": "代名詞",
        "sentence": "She made herself a cup of hot tea to feel warm.",
        "sentenceZh": "她為自己泡了一杯熱茶來保暖。"
    },
    {
        "word": "myself",
        "meaning": "我自己",
        "theme": "代名詞",
        "sentence": "The cat is washing itself by licking its paws.",
        "sentenceZh": "貓正藉由舔爪子來清潔自己。"
    },
    {
        "word": "you",
        "meaning": "你；你們",
        "theme": "代名詞",
        "sentence": "We enjoyed ourselves very much at the Halloween party.",
        "sentenceZh": "我們在萬聖節派對上玩得非常盡興。"
    },
    {
        "word": "your",
        "meaning": "你的；你們的",
        "theme": "代名詞",
        "sentence": "They built the big sandcastle by themselves.",
        "sentenceZh": "他們自己堆起了那座大沙堡。"
    },
    {
        "word": "yours",
        "meaning": "你的；你們的",
        "theme": "代名詞",
        "sentence": "I am trying to fix the grammar structure in my new game.",
        "sentenceZh": "我正在嘗試修復我新遊戲中的文法結構。"
    },
    {
        "word": "yourself",
        "meaning": "你自己",
        "theme": "代名詞",
        "sentence": "The teacher asked me to explain the rules to the class.",
        "sentenceZh": "老師叫我向全班解釋規則。"
    },
    {
        "word": "yourselves",
        "meaning": "你們自己",
        "theme": "代名詞",
        "sentence": "I left my badminton racket in the school gym.",
        "sentenceZh": "我把我的羽球拍留在學校體育館了。"
    },
    {
        "word": "he",
        "meaning": "他",
        "theme": "代名詞",
        "sentence": "Your English dictionary is on the desk, and mine is in the bag.",
        "sentenceZh": "你的英文字典在桌上，而我的是在書包裡。"
    },
    {
        "word": "him",
        "meaning": "他",
        "theme": "代名詞",
        "sentence": "I built this vocabulary webpage all by myself.",
        "sentenceZh": "我完全靠自己建立了這個單字網頁。"
    },
    {
        "word": "his",
        "meaning": "他的",
        "theme": "代名詞",
        "sentence": "Do you know how to build a complete sentence?",
        "sentenceZh": "你知道怎麼造出一個完整的句子嗎？"
    },
    {
        "word": "himself",
        "meaning": "他自己",
        "theme": "代名詞",
        "sentence": "Don't forget to bring your vocabulary passport tomorrow.",
        "sentenceZh": "明天別忘了帶你的單字護照。"
    },
    {
        "word": "she",
        "meaning": "她",
        "theme": "代名詞",
        "sentence": "My test score is a little bit higher than yours.",
        "sentenceZh": "我的考試分數比你的高一點點。"
    },
    {
        "word": "her",
        "meaning": "她的",
        "theme": "代名詞",
        "sentence": "You must finish the reading report by yourself.",
        "sentenceZh": "你必須自己完成這份讀書報告。"
    },
    {
        "word": "hers",
        "meaning": "她的",
        "theme": "代名詞",
        "sentence": "Please help yourselves to the sandwiches on the table.",
        "sentenceZh": "請你們自己拿桌上的三明治吃。"
    },
    {
        "word": "herself",
        "meaning": "她自己",
        "theme": "代名詞",
        "sentence": "He is a very fast runner on the badminton court.",
        "sentenceZh": "在羽球場上他是一個跑得很快的選手。"
    },
    {
        "word": "it",
        "meaning": "它",
        "theme": "代名詞",
        "sentence": "I saw him practicing his swing after school yesterday.",
        "sentenceZh": "我昨天看到他放學後在練習揮拍。"
    },
    {
        "word": "its",
        "meaning": "它的",
        "theme": "代名詞",
        "sentence": "Jason lent me his notebook to copy the grammar rules.",
        "sentenceZh": "Jason 借我他的筆記本來抄文法規則。"
    },
    {
        "word": "itself",
        "meaning": "它自己",
        "theme": "代名詞",
        "sentence": "The little boy hurt himself while playing on the slide.",
        "sentenceZh": "小男孩玩溜滑梯時弄傷了自己。"
    },
    {
        "word": "we",
        "meaning": "我們",
        "theme": "代名詞",
        "sentence": "She likes to listen to 1980s synth-pop music when studying.",
        "sentenceZh": "她讀書時喜歡聽 80 年代的合成器流行音樂。"
    },
    {
        "word": "us",
        "meaning": "我們",
        "theme": "代名詞",
        "sentence": "The teacher praised her for writing a beautiful English poem.",
        "sentenceZh": "老師因為她寫了一首美麗的英文詩而讚美她。"
    },
    {
        "word": "our",
        "meaning": "我們的",
        "theme": "代名詞",
        "sentence": "That blue backpack belongs to my sister; it is hers.",
        "sentenceZh": "那個藍色背包屬於我妹妹，那是她的。"
    },
    {
        "word": "ours",
        "meaning": "我們的",
        "theme": "代名詞",
        "sentence": "She looked at herself in the mirror before going to school.",
        "sentenceZh": "她上學前照了照鏡子裡的自己。"
    },
    {
        "word": "ourselves",
        "meaning": "我們自己",
        "theme": "代名詞",
        "sentence": "I bought a new comic book, and it is very interesting.",
        "sentenceZh": "我買了一本新漫畫書，而且它非常有趣。"
    },
    {
        "word": "they",
        "meaning": "他們；它們",
        "theme": "代名詞",
        "sentence": "The cute dog is loudly barking at its own shadow.",
        "sentenceZh": "那隻可愛的狗正對著牠自己的影子大聲吠叫。"
    },
    {
        "word": "them",
        "meaning": "他們；它們",
        "theme": "代名詞",
        "sentence": "The smart machine will turn itself off when it gets too hot.",
        "sentenceZh": "這台聰明的機器太熱時會自己關機。"
    },
    {
        "word": "their",
        "meaning": "他們的；它們的",
        "theme": "代名詞",
        "sentence": "We are planning a short family trip to Huwei next weekend.",
        "sentenceZh": "我們計畫下週末去虎尾來趟短暫的家族旅行。"
    },
    {
        "word": "theirs",
        "meaning": "他們的；它們的",
        "theme": "代名詞",
        "sentence": "The principal told us to always be honest and brave.",
        "sentenceZh": "校長告訴我們永遠要誠實且勇敢。"
    },
    {
        "word": "themselves",
        "meaning": "他們自己；它們自己",
        "theme": "代名詞",
        "sentence": "Our classroom is located on the third floor of the building.",
        "sentenceZh": "我們的教室位在大樓的三樓。"
    },
    {
        "word": "all",
        "meaning": "全部；所有",
        "theme": "代名詞",
        "sentence": "Their school campus is big, but ours is even bigger.",
        "sentenceZh": "他們的校園很大，但我們的甚至更大。"
    },
    {
        "word": "another",
        "meaning": "另一個",
        "theme": "代名詞",
        "sentence": "We can finish painting the classroom wall by ourselves.",
        "sentenceZh": "我們可以自己完成教室牆壁的粉刷。"
    },
    {
        "word": "any",
        "meaning": "任何",
        "theme": "代名詞",
        "sentence": "They play basketball together every Tuesday afternoon.",
        "sentenceZh": "他們每個星期二下午一起打籃球。"
    },
    {
        "word": "anyone",
        "meaning": "任何人",
        "theme": "代名詞",
        "sentence": "I invited all of them to my birthday party.",
        "sentenceZh": "我邀請了他們所有人來參加我的生日派對。"
    },
    {
        "word": "anything",
        "meaning": "任何事",
        "theme": "代名詞",
        "sentence": "The students opened their textbooks to page twenty.",
        "sentenceZh": "學生們把他們的教科書翻到第二十頁。"
    },
    {
        "word": "both",
        "meaning": "兩者",
        "theme": "代名詞",
        "sentence": "We finished our science project, but they haven't finished theirs.",
        "sentenceZh": "我們完成了我們的科學專案，但他們還沒完成他們的。"
    },
    {
        "word": "each",
        "meaning": "每個",
        "theme": "代名詞",
        "sentence": "They designed the class badges all by themselves.",
        "sentenceZh": "他們完全靠自己設計了班級徽章。"
    },
    {
        "word": "everyone (everybody)",
        "meaning": "每個人",
        "theme": "代名詞",
        "sentence": "Everyone needs a vocabulary passport to practice words.",
        "sentenceZh": "每個人都需要一本單字護照來練習單字。"
    },
    {
        "word": "everything",
        "meaning": "每件事",
        "theme": "代名詞",
        "sentence": "I hope everything goes well for your big badminton game tomorrow.",
        "sentenceZh": "希望你明天的羽球大賽一切順利。"
    },
    {
        "word": "many",
        "meaning": "許多（可數）",
        "theme": "代名詞",
        "sentence": "There are many interesting animals in the city zoo.",
        "sentenceZh": "城市動物園裡有許多有趣的動物。"
    },
    {
        "word": "nobody",
        "meaning": "沒有人",
        "theme": "代名詞",
        "sentence": "Nobody knows the secret answer to the magic puzzle.",
        "sentenceZh": "沒有人知道這個魔法謎題的秘密答案。"
    },
    {
        "word": "nothing",
        "meaning": "沒有東西",
        "theme": "代名詞",
        "sentence": "There is nothing inside the empty box.",
        "sentenceZh": "那個空盒子裡什麼都沒有。"
    },
    {
        "word": "part",
        "meaning": "部分",
        "theme": "代名詞",
        "sentence": "Reading is an important part of learning a new language.",
        "sentenceZh": "閱讀是學習新語言重要的一部分。"
    },
    {
        "word": "some",
        "meaning": "一些",
        "theme": "代名詞",
        "sentence": "Can I have some extra ice in my orange juice, please?",
        "sentenceZh": "請問我的柳橙汁可以多加一些冰塊嗎？"
    },
    {
        "word": "someone (somebody)",
        "meaning": "某人",
        "theme": "代名詞",
        "sentence": "Someone left a blue umbrella in the classroom yesterday.",
        "sentenceZh": "昨天有人把一把藍色雨傘忘在教室裡了。"
    },
    {
        "word": "something",
        "meaning": "某事",
        "theme": "代名詞",
        "sentence": "I have something important to tell you after class.",
        "sentenceZh": "下課後我有重要的事情要告訴你。"
    },
    {
        "word": "none",
        "meaning": "無",
        "theme": "代名詞",
        "sentence": "I asked my friends for help, but none of them knew the answer.",
        "sentenceZh": "我向朋友們求助，但他們之中沒有人知道答案。"
    },
    {
        "word": "above",
        "meaning": "在…上面",
        "theme": "介係詞",
        "sentence": "The airplane is flying high above the white clouds.",
        "sentenceZh": "飛機在白雲上方高高地飛著。"
    },
    {
        "word": "below",
        "meaning": "在…下面",
        "theme": "介係詞",
        "sentence": "Please sign your name below the line on the contract.",
        "sentenceZh": "請在合約的線下方簽名。"
    },
    {
        "word": "on",
        "meaning": "在…上面（接觸）",
        "theme": "介係詞",
        "sentence": "Your English dictionary is right on the teacher's desk.",
        "sentenceZh": "你的英文字典就在老師的書桌上。"
    },
    {
        "word": "under",
        "meaning": "在…下面",
        "theme": "介係詞",
        "sentence": "The little kitten is sleeping soundly under the sofa.",
        "sentenceZh": "小貓正在沙發下安穩地睡著。"
    },
    {
        "word": "in",
        "meaning": "在…裡面（較大範圍）",
        "theme": "介係詞",
        "sentence": "There are many tall trees in the beautiful park.",
        "sentenceZh": "美麗的公園裡有許多高大的樹木。"
    },
    {
        "word": "inside",
        "meaning": "在…裡面",
        "theme": "介係詞",
        "sentence": "It is too hot outside; let's stay inside the house.",
        "sentenceZh": "外面太熱了，我們待在屋子裡面吧。"
    },
    {
        "word": "outside",
        "meaning": "在…外面",
        "theme": "介係詞",
        "sentence": "The children are playing happily outside the classroom.",
        "sentenceZh": "孩子們正在教室外面開心地玩耍。"
    },
    {
        "word": "at",
        "meaning": "在（地點、時間點）",
        "theme": "介係詞",
        "sentence": "We will have an important meeting at ten o'clock tomorrow.",
        "sentenceZh": "我們明天十點將有一場重要的會議。"
    },
    {
        "word": "behind",
        "meaning": "在…後面",
        "theme": "介係詞",
        "sentence": "The shy boy hid behind his father's tall legs.",
        "sentenceZh": "害羞的男孩躲在他爸爸長長的腿後面。"
    },
    {
        "word": "in back of",
        "meaning": "在…後面",
        "theme": "介係詞",
        "sentence": "The school gym is located in back of the library.",
        "sentenceZh": "學校體育館位在圖書館的後面。"
    },
    {
        "word": "in front of",
        "meaning": "在…前面",
        "theme": "介係詞",
        "sentence": "The teacher stood in front of the blackboard to explain.",
        "sentenceZh": "老師站在黑板前面講解。"
    },
    {
        "word": "across",
        "meaning": "橫越",
        "theme": "介係詞",
        "sentence": "Be careful when you walk across the busy street.",
        "sentenceZh": "走路穿越繁忙的街道時要小心。"
    },
    {
        "word": "beyond",
        "meaning": "超越；在…另一邊",
        "theme": "介係詞",
        "sentence": "The beautiful valley lies just beyond those high mountains.",
        "sentenceZh": "美麗的山谷就坐落於那些高山的另一邊。"
    },
    {
        "word": "beside",
        "meaning": "在…旁邊",
        "theme": "介係詞",
        "sentence": "Come sit beside me and let's read the story together.",
        "sentenceZh": "來坐在我旁邊，我們一起讀這個故事吧。"
    },
    {
        "word": "next to",
        "meaning": "緊鄰；在…旁邊",
        "theme": "介係詞",
        "sentence": "The convenience store is right next to the post office.",
        "sentenceZh": "便利商店就在郵局緊鄰的旁邊。"
    },
    {
        "word": "by",
        "meaning": "藉由；在…旁邊",
        "theme": "介係詞",
        "sentence": "We learned how to build a web game by watching videos online.",
        "sentenceZh": "我們藉由看網路影片學會了如何建立網頁遊戲。"
    },
    {
        "word": "between",
        "meaning": "在…之間（兩者）",
        "theme": "介係詞",
        "sentence": "The letter B is exactly between A and C in the alphabet.",
        "sentenceZh": "字母 B 在字母表裡剛好在 A 和 C 之間。"
    },
    {
        "word": "near",
        "meaning": "靠近",
        "theme": "介係詞",
        "sentence": "My grandparents live in a small village near the sea.",
        "sentenceZh": "我祖父母住在靠近海邊的一個小村莊裡。"
    },
    {
        "word": "among",
        "meaning": "在…之中（三者以上）",
        "theme": "介係詞",
        "sentence": "The clever rabbit hid among the tall green bushes.",
        "sentenceZh": "聰明的兔子躲在高高的綠色灌木叢之中。"
    },
    {
        "word": "against",
        "meaning": "反對；靠著",
        "theme": "介係詞",
        "sentence": "He stood leaning his back against the classroom wall.",
        "sentenceZh": "他背靠著教室牆壁站著。"
    },
    {
        "word": "along",
        "meaning": "沿著",
        "theme": "介係詞",
        "sentence": "We rode our bicycles along the beautiful riverbank.",
        "sentenceZh": "我們沿著美麗的河岸騎腳踏車。"
    },
    {
        "word": "down",
        "meaning": "沿…而下",
        "theme": "介係詞",
        "sentence": "The children rolled quickly down the grassy hill.",
        "sentenceZh": "孩子們快速地沿著長滿草的山丘滾下來。"
    },
    {
        "word": "from",
        "meaning": "從…；來自…",
        "theme": "介係詞",
        "sentence": "I received a beautiful postcard from my pen pal in Japan.",
        "sentenceZh": "我收到了一張來自日本筆友的美麗明信片。"
    },
    {
        "word": "to",
        "meaning": "到…；向…",
        "theme": "介係詞",
        "sentence": "Please give this homework paper to your English teacher.",
        "sentenceZh": "請把這份作業交給你的英文老師。"
    },
    {
        "word": "toward",
        "meaning": "朝向…",
        "theme": "介係詞",
        "sentence": "The little dog ran quickly toward its owner.",
        "sentenceZh": "小狗快速地朝著牠的主人跑去。"
    },
    {
        "word": "up",
        "meaning": "沿…而上",
        "theme": "介係詞",
        "sentence": "The brave hikers climbed high up the snowy mountain.",
        "sentenceZh": "勇敢的登山客爬上了白雪覆蓋的高山。"
    },
    {
        "word": "over",
        "meaning": "在…正上方；越過",
        "theme": "介係詞",
        "sentence": "The plane flew directly over our heads.",
        "sentenceZh": "飛機直接從我們頭頂正上方飛過。"
    },
    {
        "word": "into",
        "meaning": "進入",
        "theme": "介係詞",
        "sentence": "The frog jumped with a splash into the deep pond.",
        "sentenceZh": "青蛙撲通一聲跳進了深池塘裡。"
    },
    {
        "word": "out of",
        "meaning": "從…裡面出來",
        "theme": "介係詞",
        "sentence": "The magician pulled a white rabbit out of his black hat.",
        "sentenceZh": "魔術師從黑帽子裡拉出一隻白兔。"
    },
    {
        "word": "through",
        "meaning": "穿過；透過",
        "theme": "介係詞",
        "sentence": "The train traveled fast through the dark tunnel.",
        "sentenceZh": "火車快速穿過了黑暗的隧道。"
    },
    {
        "word": "off",
        "meaning": "離開；從…下來",
        "theme": "介係詞",
        "sentence": "Be careful when you get off the crowded bus.",
        "sentenceZh": "從擁擠的公車下來時要小心。"
    },
    {
        "word": "after",
        "meaning": "在…之後",
        "theme": "介係詞",
        "sentence": "Let's practice playing badminton after school ends today.",
        "sentenceZh": "今天放學後我們來練習打羽球吧。"
    },
    {
        "word": "before",
        "meaning": "在…之前",
        "theme": "介係詞",
        "sentence": "You must wash your hands cleanly before eating dinner.",
        "sentenceZh": "吃晚餐前你必須把手洗乾淨。"
    },
    {
        "word": "during",
        "meaning": "在…期間",
        "theme": "介係詞",
        "sentence": "Please don't talk loudly to your friends during the movie.",
        "sentenceZh": "看電影期間請不要大聲和朋友講話。"
    },
    {
        "word": "until",
        "meaning": "直到…",
        "theme": "介係詞",
        "sentence": "We waited at the station until the train finally arrived.",
        "sentenceZh": "我們在車站等，直到火車最後抵達。"
    },
    {
        "word": "since",
        "meaning": "自從…",
        "theme": "介係詞",
        "sentence": "I have been learning HTML coding since last year.",
        "sentenceZh": "自從去年開始我就一直在學 HTML 寫程式。"
    },
    {
        "word": "with",
        "meaning": "和…一起；用…",
        "theme": "介係詞",
        "sentence": "I went to the shopping mall with my older sister yesterday.",
        "sentenceZh": "我昨天和姐姐一起去購物中心。"
    },
    {
        "word": "without",
        "meaning": "沒有…",
        "theme": "介係詞",
        "sentence": "You cannot enter the school building without your ID card.",
        "sentenceZh": "沒有識別證你不能進入學校大樓。"
    },
    {
        "word": "like",
        "meaning": "像…",
        "theme": "介係詞",
        "sentence": "The cloud in the sky looks exactly like a white rabbit.",
        "sentenceZh": "天空中的那朵雲看起來就像一隻白兔。"
    },
    {
        "word": "than",
        "meaning": "比…",
        "theme": "介係詞",
        "sentence": "An airplane travels much faster than a train.",
        "sentenceZh": "飛機移動的速度比火車快多了。"
    },
    {
        "word": "of",
        "meaning": "…的；關於",
        "theme": "介係詞",
        "sentence": "The capital city of Taiwan is Taipei.",
        "sentenceZh": "台灣的首都是台北。"
    },
    {
        "word": "except",
        "meaning": "除了…之外",
        "theme": "介係詞",
        "sentence": "Everyone in the class passed the test except for John.",
        "sentenceZh": "班上每個人都通過了考試，除了約翰之外。"
    },
    {
        "word": "for",
        "meaning": "為了；給；因為",
        "theme": "介係詞",
        "sentence": "My mother baked a delicious chocolate cake for my birthday.",
        "sentenceZh": "我媽媽為了我的生日烤了一個美味的巧克力蛋糕。"
    },
    {
        "word": "about",
        "meaning": "關於；大約",
        "theme": "介係詞",
        "sentence": "The teacher told us a funny story about his childhood.",
        "sentenceZh": "老師告訴我們一個關於他童年的好笑故事。"
    },
    {
        "word": "how",
        "meaning": "如何",
        "theme": "疑問詞&連接詞",
        "sentence": "Do you know how to solve this difficult math problem?",
        "sentenceZh": "你知道如何解開這道困難的數學題嗎？"
    },
    {
        "word": "what",
        "meaning": "什麼",
        "theme": "疑問詞&連接詞",
        "sentence": "What are you planning to do during the winter vacation?",
        "sentenceZh": "你寒假計畫做什麼？"
    },
    {
        "word": "when",
        "meaning": "何時",
        "theme": "疑問詞&連接詞",
        "sentence": "When will the English teaching seminar finally start?",
        "sentenceZh": "英語教學研討會到底何時開始？"
    },
    {
        "word": "where",
        "meaning": "在哪裡",
        "theme": "疑問詞&連接詞",
        "sentence": "Where did you leave your blue umbrella yesterday?",
        "sentenceZh": "你昨天把藍色雨傘忘在哪裡了？"
    },
    {
        "word": "whether",
        "meaning": "是否",
        "theme": "疑問詞&連接詞",
        "sentence": "I don't know whether it will rain tomorrow or not.",
        "sentenceZh": "我不知道明天是否會下雨。"
    },
    {
        "word": "which",
        "meaning": "哪一個",
        "theme": "疑問詞&連接詞",
        "sentence": "Which color do you prefer for your new shoes, black or white?",
        "sentenceZh": "你新鞋比較喜歡哪一個顏色，黑色還是白色？"
    },
    {
        "word": "who",
        "meaning": "誰(主格)",
        "theme": "疑問詞&連接詞",
        "sentence": "Who is the brave person that stopped the fight between the students?",
        "sentenceZh": "那個阻止學生打架的勇敢之人是誰？"
    },
    {
        "word": "whom",
        "meaning": "誰(受格)",
        "theme": "疑問詞&連接詞",
        "sentence": "With whom did you go to the concert last night?",
        "sentenceZh": "你昨晚和誰一起去演唱會？"
    },
    {
        "word": "whose",
        "meaning": "誰的",
        "theme": "疑問詞&連接詞",
        "sentence": "Whose beautiful notebook is this on the desk?",
        "sentenceZh": "書桌上這本美麗的筆記本是誰的？"
    },
    {
        "word": "why",
        "meaning": "為什麼",
        "theme": "疑問詞&連接詞",
        "sentence": "Can you explain why you were late for school this morning?",
        "sentenceZh": "你能解釋為什麼你今天早上上學遲到嗎？"
    },
    {
        "word": "for",
        "meaning": "因為",
        "theme": "疑問詞&連接詞",
        "sentence": "I couldn't buy the book, for I had left my wallet at home.",
        "sentenceZh": "我沒辦法買這本書，因為我把皮夾忘在家裡了。"
    },
    {
        "word": "and",
        "meaning": "和；並且",
        "theme": "疑問詞&連接詞",
        "sentence": "The weather today is very sunny and warm.",
        "sentenceZh": "今天的天氣非常晴朗且溫暖。"
    },
    {
        "word": "nor",
        "meaning": "也不",
        "theme": "疑問詞&連接詞",
        "sentence": "He doesn't like to sing, nor does he like to dance.",
        "sentenceZh": "他不喜歡唱歌，也不喜歡跳舞。"
    },
    {
        "word": "but",
        "meaning": "但是",
        "theme": "疑問詞&連接詞",
        "sentence": "The test was very difficult, but I still got a good grade.",
        "sentenceZh": "考試非常難，但我還是拿到了一個好成績。"
    },
    {
        "word": "or",
        "meaning": "或者；否則",
        "theme": "疑問詞&連接詞",
        "sentence": "Hurry up, or you will miss the school bus!",
        "sentenceZh": "快一點，否則你會錯過校車！"
    },
    {
        "word": "yet",
        "meaning": "但是；尚未",
        "theme": "疑問詞&連接詞",
        "sentence": "I have studied for two hours, yet I still don't understand this rule.",
        "sentenceZh": "我已經讀了兩小時，但我還是不懂這個規則。"
    },
    {
        "word": "so",
        "meaning": "所以；非常",
        "theme": "疑問詞&連接詞",
        "sentence": "It was raining heavily, so we canceled the outdoor game.",
        "sentenceZh": "雨下得很大，所以我們取消了戶外遊戲。"
    },
    {
        "word": "because",
        "meaning": "因為",
        "theme": "疑問詞&連接詞",
        "sentence": "I am very tired because I stayed up late writing code.",
        "sentenceZh": "我非常累，因為我熬夜寫程式碼。"
    },
    {
        "word": "if",
        "meaning": "如果",
        "theme": "疑問詞&連接詞",
        "sentence": "If you finish your homework early, we can play the game.",
        "sentenceZh": "如果你早點寫完作業，我們就可以玩遊戲。"
    },
    {
        "word": "since",
        "meaning": "自從；既然",
        "theme": "疑問詞&連接詞",
        "sentence": "Since you already know the answer, please explain it to the class.",
        "sentenceZh": "既然你已經知道答案了，請向全班解釋。"
    },
    {
        "word": "before",
        "meaning": "在~之前",
        "theme": "疑問詞&連接詞",
        "sentence": "You must carefully check your sentence structure before handing it in.",
        "sentenceZh": "交出去之前你必須仔細檢查你的句子結構。"
    },
    {
        "word": "after",
        "meaning": "在~之後",
        "theme": "疑問詞&連接詞",
        "sentence": "We will practice badminton after we finish our homework.",
        "sentenceZh": "我們寫完作業之後會去練習羽球。"
    },
    {
        "word": "while",
        "meaning": "當~時；然而",
        "theme": "疑問詞&連接詞",
        "sentence": "Someone knocked on the door while I was reading a book.",
        "sentenceZh": "當我在看書時，有人敲了門。"
    },
    {
        "word": "till",
        "meaning": "直到",
        "theme": "疑問詞&連接詞",
        "sentence": "We played the grammar game till the school bell rang.",
        "sentenceZh": "我們玩文法遊戲直到學校鐘聲響起。"
    },
    {
        "word": "than",
        "meaning": "比",
        "theme": "疑問詞&連接詞",
        "sentence": "This interactive game is much more fun than just reading a book.",
        "sentenceZh": "這個互動遊戲比單純看書有趣多了。"
    },
    {
        "word": "although (though, even though)",
        "meaning": "雖然",
        "theme": "疑問詞&連接詞",
        "sentence": "Although it was raining heavily, he still went out to run.",
        "sentenceZh": "雖然雨下得很大，他還是出去跑步了。"
    },
    {
        "word": "ate",
        "meaning": "(eat過去式) 吃",
        "theme": "不規則動詞三態",
        "sentence": "He ate a big bowl of Douliu beef noodles yesterday.",
        "sentenceZh": "他昨天吃了一大碗斗六牛肉麵。"
    },
    {
        "word": "awoke",
        "meaning": "(awake過去式) 醒來",
        "theme": "不規則動詞三態",
        "sentence": "I awoke early to practice my badminton swing.",
        "sentenceZh": "我很早醒來練習揮羽球拍。"
    },
    {
        "word": "awoken",
        "meaning": "(awake過去分詞) 醒來",
        "theme": "不規則動詞三態",
        "sentence": "The sleeping monster was awoken by the loud thunder.",
        "sentenceZh": "沉睡的怪物被巨大的雷聲吵醒了。"
    },
    {
        "word": "beat",
        "meaning": "(beat過去式) 打擊",
        "theme": "不規則動詞三態",
        "sentence": "Our school team beat the visitors in the badminton match.",
        "sentenceZh": "我們校隊在羽球比賽中打敗了客隊。"
    },
    {
        "word": "beaten",
        "meaning": "(beat過去分詞) 打擊",
        "theme": "不規則動詞三態",
        "sentence": "I have never beaten him in a game of chess.",
        "sentenceZh": "我下西洋棋從來沒有贏過（打敗過）他。"
    },
    {
        "word": "became",
        "meaning": "(become過去式) 變成",
        "theme": "不規則動詞三態",
        "sentence": "He became the class leader last semester.",
        "sentenceZh": "他上學期當上了班長。"
    },
    {
        "word": "become",
        "meaning": "(become過去分詞) 變成",
        "theme": "不規則動詞三態",
        "sentence": "She has become a very good English teacher.",
        "sentenceZh": "她已經成為了一位非常棒的英文老師。"
    },
    {
        "word": "been",
        "meaning": "(be過去分詞) 是",
        "theme": "不規則動詞三態",
        "sentence": "I have been to that 1980s music cafe before.",
        "sentenceZh": "我以前去過那家 80 年代音樂咖啡廳。"
    },
    {
        "word": "began",
        "meaning": "(begin過去式) 開始",
        "theme": "不規則動詞三態",
        "sentence": "The heavy rain began right after school ended.",
        "sentenceZh": "放學後馬上就開始下大雨了。"
    },
    {
        "word": "begun",
        "meaning": "(begin過去分詞) 開始",
        "theme": "不規則動詞三態",
        "sentence": "The English spelling quiz has already begun.",
        "sentenceZh": "英文拼字小考已經開始了。"
    },
    {
        "word": "bit",
        "meaning": "(bite過去式) 咬",
        "theme": "不規則動詞三態",
        "sentence": "The stray dog bit his leg yesterday.",
        "sentenceZh": "那隻流浪狗昨天咬了他的腿。"
    },
    {
        "word": "bitten",
        "meaning": "(bite過去分詞) 咬",
        "theme": "不規則動詞三態",
        "sentence": "Have you ever been bitten by a spider?",
        "sentenceZh": "你曾經被蜘蛛咬過嗎？"
    },
    {
        "word": "bled",
        "meaning": "(bleed過去式、過去分詞) 流血",
        "theme": "不規則動詞三態",
        "sentence": "His knee bled after he fell on the playground.",
        "sentenceZh": "他在操場跌倒後膝蓋流血了。"
    },
    {
        "word": "blew",
        "meaning": "(blow過去式) 吹",
        "theme": "不規則動詞三態",
        "sentence": "The strong wind blew my hat away.",
        "sentenceZh": "強風把我的帽子吹走了。"
    },
    {
        "word": "blown",
        "meaning": "(blow過去分詞) 吹",
        "theme": "不規則動詞三態",
        "sentence": "The roof of the old house was blown off by the typhoon.",
        "sentenceZh": "老房子的屋頂被颱風吹翻了。"
    },
    {
        "word": "bore",
        "meaning": "(bear過去式) 忍受 / 生育",
        "theme": "不規則動詞三態",
        "sentence": "She bore the pain and finished the running race.",
        "sentenceZh": "她忍受著痛苦跑完了比賽。"
    },
    {
        "word": "borne",
        "meaning": "(bear過去分詞) 忍受 / 生育",
        "theme": "不規則動詞三態",
        "sentence": "This heavy responsibility was borne by the captain.",
        "sentenceZh": "這個重責大任由隊長承擔了下來。"
    },
    {
        "word": "bought",
        "meaning": "(buy過去式、過去分詞) 買",
        "theme": "不規則動詞三態",
        "sentence": "I bought a new badminton racket in Huwei.",
        "sentenceZh": "我在虎尾買了一支新羽球拍。"
    },
    {
        "word": "broadcast",
        "meaning": "(broadcast過去式、過去分詞) 廣播",
        "theme": "不規則動詞三態",
        "sentence": "The news about the typhoon was broadcast last night.",
        "sentenceZh": "關於颱風的新聞昨晚已經廣播了。"
    },
    {
        "word": "broke",
        "meaning": "(break過去式) 打破",
        "theme": "不規則動詞三態",
        "sentence": "He accidentally broke the window with a baseball.",
        "sentenceZh": "他不小心用棒球打破了窗戶。"
    },
    {
        "word": "broken",
        "meaning": "(break過去分詞) 打破",
        "theme": "不規則動詞三態",
        "sentence": "My smart watch is broken and needs to be fixed.",
        "sentenceZh": "我的智慧手錶壞了，需要修理。"
    },
    {
        "word": "brought",
        "meaning": "(bring過去式、過去分詞) 帶來",
        "theme": "不規則動詞三態",
        "sentence": "My classmate brought some delicious cookies to share.",
        "sentenceZh": "我同學帶了一些美味的餅乾來分享。"
    },
    {
        "word": "built",
        "meaning": "(build過去式、過去分詞) 建造",
        "theme": "不規則動詞三態",
        "sentence": "We built a cool weather game using HTML.",
        "sentenceZh": "我們用 HTML 建立了一個很酷的天氣遊戲。"
    },
    {
        "word": "burned",
        "meaning": "(burn過去式、過去分詞) 燃燒",
        "theme": "不規則動詞三態",
        "sentence": "The old papers burned quickly in the fire.",
        "sentenceZh": "舊報紙在火中很快就燒掉了。"
    },
    {
        "word": "burnt",
        "meaning": "(burn過去式、過去分詞) 燃燒",
        "theme": "不規則動詞三態",
        "sentence": "He threw the burnt toast into the trash can.",
        "sentenceZh": "他把烤焦的吐司丟進了垃圾桶。"
    },
    {
        "word": "burst",
        "meaning": "(burst過去式、過去分詞) 爆發",
        "theme": "不規則動詞三態",
        "sentence": "The water pipe burst and flooded the street.",
        "sentenceZh": "水管爆裂，淹沒了街道。"
    },
    {
        "word": "came",
        "meaning": "(come過去式) 來",
        "theme": "不規則動詞三態",
        "sentence": "He came to my house to study English together.",
        "sentenceZh": "他來我家一起讀英文。"
    },
    {
        "word": "caught",
        "meaning": "(catch過去式、過去分詞) 抓",
        "theme": "不規則動詞三態",
        "sentence": "The police officer caught the thief yesterday.",
        "sentenceZh": "警察昨天抓到了那個小偷。"
    },
    {
        "word": "chose",
        "meaning": "(choose過去式) 選擇",
        "theme": "不規則動詞三態",
        "sentence": "The teacher chose her to read the poem aloud.",
        "sentenceZh": "老師選她大聲朗讀那首詩。"
    },
    {
        "word": "chosen",
        "meaning": "(choose過去分詞) 選擇",
        "theme": "不規則動詞三態",
        "sentence": "You have been chosen to lead the badminton team.",
        "sentenceZh": "你被選中來帶領羽球隊。"
    },
    {
        "word": "come",
        "meaning": "(come過去分詞) 來",
        "theme": "不規則動詞三態",
        "sentence": "She has just come back from a trip to Japan.",
        "sentenceZh": "她剛從日本旅行回來。"
    },
    {
        "word": "cost",
        "meaning": "(cost過去式、過去分詞) 花費",
        "theme": "不規則動詞三態",
        "sentence": "This interactive English game cost nothing; it is free.",
        "sentenceZh": "這個互動英文遊戲沒花半毛錢，它是免費的。"
    },
    {
        "word": "cut",
        "meaning": "(cut過去式、過去分詞) 切",
        "theme": "不規則動詞三態",
        "sentence": "He cut the paper to make a vocabulary card.",
        "sentenceZh": "他剪紙來做單字卡。"
    },
    {
        "word": "dealt",
        "meaning": "(deal過去式、過去分詞) 處理",
        "theme": "不規則動詞三態",
        "sentence": "The principal dealt with the student's problem fairly.",
        "sentenceZh": "校長公平地處理了學生的問題。"
    },
    {
        "word": "did",
        "meaning": "(do過去式) 做",
        "theme": "不規則動詞三態",
        "sentence": "I did my grammar homework carefully last night.",
        "sentenceZh": "我昨晚很仔細地做了文法作業。"
    },
    {
        "word": "done",
        "meaning": "(do過去分詞) 做",
        "theme": "不規則動詞三態",
        "sentence": "The meat is completely done and ready to eat.",
        "sentenceZh": "肉已經完全煮熟，可以吃了。"
    },
    {
        "word": "drank",
        "meaning": "(drink過去式) 喝",
        "theme": "不規則動詞三態",
        "sentence": "She drank a glass of hot milk before going to bed.",
        "sentenceZh": "她睡前喝了一杯熱牛奶。"
    },
    {
        "word": "drawn",
        "meaning": "(draw過去分詞) 畫 / 拉",
        "theme": "不規則動詞三態",
        "sentence": "The cute character was drawn by my classmate.",
        "sentenceZh": "那個可愛的角色是我同學畫的。"
    },
    {
        "word": "dreamed",
        "meaning": "(dream過去式、過去分詞) 夢想",
        "theme": "不規則動詞三態",
        "sentence": "I dreamed about flying in the sky last night.",
        "sentenceZh": "我昨晚夢到自己在天空中飛翔。"
    },
    {
        "word": "dreamt",
        "meaning": "(dream過去式、過去分詞) 夢想",
        "theme": "不規則動詞三態",
        "sentence": "He has always dreamt of becoming a software engineer.",
        "sentenceZh": "他一直夢想成為一名軟體工程師。"
    },
    {
        "word": "drew",
        "meaning": "(draw過去式) 畫 / 拉",
        "theme": "不規則動詞三態",
        "sentence": "She drew a straight line with her plastic ruler.",
        "sentenceZh": "她用塑膠尺畫了一條直線。"
    },
    {
        "word": "driven",
        "meaning": "(drive過去分詞) 駕駛",
        "theme": "不規則動詞三態",
        "sentence": "I have never driven a car all the way to Taipei.",
        "sentenceZh": "我從來沒有一路開車到台北過。"
    },
    {
        "word": "drove",
        "meaning": "(drive過去式) 駕駛",
        "theme": "不規則動詞三態",
        "sentence": "My father drove me to the Dounan train station.",
        "sentenceZh": "我爸爸開車載我到斗南火車站。"
    },
    {
        "word": "drunk",
        "meaning": "(drink過去分詞) 喝",
        "theme": "不規則動詞三態",
        "sentence": "He had already drunk three cups of coffee today.",
        "sentenceZh": "他今天已經喝了三杯咖啡了。"
    },
    {
        "word": "dug",
        "meaning": "(dig過去式、過去分詞) 挖",
        "theme": "不規則動詞三態",
        "sentence": "The dog dug a deep hole to hide its bone.",
        "sentenceZh": "狗挖了一個深洞來藏骨頭。"
    },
    {
        "word": "eaten",
        "meaning": "(eat過去分詞) 吃",
        "theme": "不規則動詞三態",
        "sentence": "I have already eaten my breakfast.",
        "sentenceZh": "我已經吃過早餐了。"
    },
    {
        "word": "fallen",
        "meaning": "(fall過去分詞) 掉落",
        "theme": "不規則動詞三態",
        "sentence": "The old tree had fallen down after the big storm.",
        "sentenceZh": "大風暴過後，那棵老樹倒塌了。"
    },
    {
        "word": "fed",
        "meaning": "(feed過去式、過去分詞) 餵",
        "theme": "不規則動詞三態",
        "sentence": "I fed the cute kitten some warm milk this morning.",
        "sentenceZh": "我今天早上餵了那隻可愛小貓一些溫牛奶。"
    },
    {
        "word": "fell",
        "meaning": "(fall過去式) 掉落",
        "theme": "不規則動詞三態",
        "sentence": "He tripped and fell on the badminton court.",
        "sentenceZh": "他在羽球場上絆倒摔了一跤。"
    },
    {
        "word": "felt",
        "meaning": "(feel過去式、過去分詞) 感覺",
        "theme": "不規則動詞三態",
        "sentence": "She felt very nervous before the English speech.",
        "sentenceZh": "她在英文演講前覺得非常緊張。"
    },
    {
        "word": "flew",
        "meaning": "(fly過去式) 飛",
        "theme": "不規則動詞三態",
        "sentence": "The little bird flew out of the open window.",
        "sentenceZh": "小鳥從打開的窗戶飛了出去。"
    },
    {
        "word": "flown",
        "meaning": "(fly過去分詞) 飛",
        "theme": "不規則動詞三態",
        "sentence": "Have you ever flown in a helicopter?",
        "sentenceZh": "你曾經搭直升機飛行過嗎？"
    },
    {
        "word": "forgot",
        "meaning": "(forget過去式) 忘記",
        "theme": "不規則動詞三態",
        "sentence": "I forgot to bring my vocabulary passport today.",
        "sentenceZh": "我今天忘記帶單字護照了。"
    },
    {
        "word": "forgotten",
        "meaning": "(forget過去分詞) 忘記",
        "theme": "不規則動詞三態",
        "sentence": "He had completely forgotten the grammar rule.",
        "sentenceZh": "他完全忘記了那個文法規則。"
    },
    {
        "word": "forgave",
        "meaning": "(forgive過去式) 原諒",
        "theme": "不規則動詞三態",
        "sentence": "She forgave him for making the stupid mistake.",
        "sentenceZh": "她原諒了他犯下這個愚蠢的錯誤。"
    },
    {
        "word": "forgiven",
        "meaning": "(forgive過去分詞) 原諒",
        "theme": "不規則動詞三態",
        "sentence": "Your careless mistake has been forgiven.",
        "sentenceZh": "你粗心的錯誤已經被原諒了。"
    },
    {
        "word": "fought",
        "meaning": "(fight過去式、過去分詞) 打架",
        "theme": "不規則動詞三態",
        "sentence": "The brave soldiers fought to protect their country.",
        "sentenceZh": "勇敢的士兵為了保護國家而戰鬥。"
    },
    {
        "word": "found",
        "meaning": "(find過去式、過去分詞) 找到",
        "theme": "不規則動詞三態",
        "sentence": "I found a bug in my HTML game code.",
        "sentenceZh": "我在我的 HTML 遊戲程式碼中找到了一個錯誤。"
    },
    {
        "word": "froze",
        "meaning": "(freeze過去式) 結冰",
        "theme": "不規則動詞三態",
        "sentence": "The water in the bucket froze during the cold night.",
        "sentenceZh": "水桶裡的水在寒冷的夜晚結冰了。"
    },
    {
        "word": "frozen",
        "meaning": "(freeze過去分詞) 結冰",
        "theme": "不規則動詞三態",
        "sentence": "We bought some frozen dumplings from the supermarket.",
        "sentenceZh": "我們從超市買了一些冷凍水餃。"
    },
    {
        "word": "gave",
        "meaning": "(give過去式) 給",
        "theme": "不規則動詞三態",
        "sentence": "The teacher gave us a useful tip for the exam.",
        "sentenceZh": "老師給了我們一個有用的考試提示。"
    },
    {
        "word": "given",
        "meaning": "(give過去分詞) 給",
        "theme": "不規則動詞三態",
        "sentence": "He has been given a second chance to pass the test.",
        "sentenceZh": "他得到了一次重新通過考試的機會。"
    },
    {
        "word": "gone",
        "meaning": "(go過去分詞) 去",
        "theme": "不規則動詞三態",
        "sentence": "My brother is not home; he has gone to the library.",
        "sentenceZh": "我哥哥不在家，他去圖書館了。"
    },
    {
        "word": "got",
        "meaning": "(get過去式、過去分詞) 得到",
        "theme": "不規則動詞三態",
        "sentence": "I got a perfect score on the syntax repair game!",
        "sentenceZh": "我在語法修復遊戲中得到了滿分！"
    },
    {
        "word": "gotten",
        "meaning": "(get過去分詞) 得到",
        "theme": "不規則動詞三態",
        "sentence": "The weather has gotten much cooler this week.",
        "sentenceZh": "這禮拜天氣變得涼爽多了。"
    },
    {
        "word": "grew",
        "meaning": "(grow過去式) 成長",
        "theme": "不規則動詞三態",
        "sentence": "The small plant grew quickly in the warm sunlight.",
        "sentenceZh": "小植物在溫暖的陽光下快速生長。"
    },
    {
        "word": "grown",
        "meaning": "(grow過去分詞) 成長",
        "theme": "不規則動詞三態",
        "sentence": "You have grown so much taller since last year!",
        "sentenceZh": "從去年到現在你長高了好多！"
    },
    {
        "word": "had",
        "meaning": "(have過去式、過去分詞) 有",
        "theme": "不規則動詞三態",
        "sentence": "We had a lot of fun playing dodge ball yesterday.",
        "sentenceZh": "我們昨天玩躲避球玩得很開心。"
    },
    {
        "word": "heard",
        "meaning": "(hear過去式、過去分詞) 聽",
        "theme": "不規則動詞三態",
        "sentence": "Have you heard this classic 80s pop song?",
        "sentenceZh": "你有聽過這首經典的 80 年代流行歌嗎？"
    },
    {
        "word": "held",
        "meaning": "(hold過去式、過去分詞) 握住 / 保持",
        "theme": "不規則動詞三態",
        "sentence": "He held the badminton racket tightly in his hand.",
        "sentenceZh": "他緊緊握著手中的羽球拍。"
    },
    {
        "word": "hid",
        "meaning": "(hide過去式) 隱藏",
        "theme": "不規則動詞三態",
        "sentence": "The naughty boy hid my eraser inside his pencil box.",
        "sentenceZh": "頑皮的男孩把我的橡皮擦藏在他的鉛筆盒裡。"
    },
    {
        "word": "hidden",
        "meaning": "(hide過去分詞) 隱藏",
        "theme": "不規則動詞三態",
        "sentence": "The treasure was hidden deep inside the dark cave.",
        "sentenceZh": "寶藏被隱藏在黑暗的洞穴深處。"
    },
    {
        "word": "hit",
        "meaning": "(hit過去式、過去分詞) 打",
        "theme": "不規則動詞三態",
        "sentence": "He hit the ball perfectly over the net.",
        "sentenceZh": "他完美地將球擊過網子。"
    },
    {
        "word": "hung",
        "meaning": "(hang過去式、過去分詞) 懸掛",
        "theme": "不規則動詞三態",
        "sentence": "She hung her wet raincoat on the balcony.",
        "sentenceZh": "她把濕雨衣掛在陽台上。"
    },
    {
        "word": "hurt",
        "meaning": "(hurt過去式、過去分詞) 傷害",
        "theme": "不規則動詞三態",
        "sentence": "I hurt my right ankle during the relay race.",
        "sentenceZh": "我在大隊接力賽中傷了右腳踝。"
    },
    {
        "word": "kept",
        "meaning": "(keep過去式、過去分詞) 保持",
        "theme": "不規則動詞三態",
        "sentence": "We kept quiet while the principal was speaking.",
        "sentenceZh": "校長說話時我們保持安靜。"
    },
    {
        "word": "knew",
        "meaning": "(know過去式) 知道",
        "theme": "不規則動詞三態",
        "sentence": "He already knew how to fix the broken computer.",
        "sentenceZh": "他已經知道如何修理壞掉的電腦了。"
    },
    {
        "word": "known",
        "meaning": "(know過去分詞) 知道",
        "theme": "不規則動詞三態",
        "sentence": "She is well known for her beautiful singing voice.",
        "sentenceZh": "她以優美的歌聲而聞名。"
    },
    {
        "word": "laid",
        "meaning": "(lay過去式、過去分詞) 放置 / 產卵",
        "theme": "不規則動詞三態",
        "sentence": "She carefully laid the dictionary on the desk.",
        "sentenceZh": "她小心地把字典放在書桌上。"
    },
    {
        "word": "lain",
        "meaning": "(lie過去分詞) 躺",
        "theme": "不規則動詞三態",
        "sentence": "The book has lain on the floor for three days.",
        "sentenceZh": "這本書已經在地上躺了三天了。"
    },
    {
        "word": "lay",
        "meaning": "(lie過去式) 躺",
        "theme": "不規則動詞三態",
        "sentence": "He felt dizzy and lay down on the bed to rest.",
        "sentenceZh": "他覺得頭暈，於是躺在床上休息。"
    },
    {
        "word": "learned",
        "meaning": "(learn過去式、過去分詞) 學習",
        "theme": "不規則動詞三態",
        "sentence": "We learned some basic HTML coding skills today.",
        "sentenceZh": "我們今天學了一些基本的 HTML 程式碼技能。"
    },
    {
        "word": "learnt",
        "meaning": "(learn過去式、過去分詞) 學習",
        "theme": "不規則動詞三態",
        "sentence": "She has learnt all the 2000 vocabulary words!",
        "sentenceZh": "她已經學會了所有的兩千個單字！"
    },
    {
        "word": "led",
        "meaning": "(lead過去式、過去分詞) 領導",
        "theme": "不規則動詞三態",
        "sentence": "The captain led the team to a great victory.",
        "sentenceZh": "隊長帶領隊伍取得了一場偉大的勝利。"
    },
    {
        "word": "left",
        "meaning": "(leave過去式、過去分詞) 離開",
        "theme": "不規則動詞三態",
        "sentence": "I left my umbrella on the train this morning.",
        "sentenceZh": "我今天早上把雨傘忘在火車上了。"
    },
    {
        "word": "lent",
        "meaning": "(lend過去式、過去分詞) 借出",
        "theme": "不規則動詞三態",
        "sentence": "He lent me his notebook so I could copy the rules.",
        "sentenceZh": "他把筆記本借給我，讓我能抄寫規則。"
    },
    {
        "word": "let",
        "meaning": "(let過去式、過去分詞) 讓",
        "theme": "不規則動詞三態",
        "sentence": "The teacher let us play a game after the test.",
        "sentenceZh": "老師在考試後讓我們玩遊戲。"
    },
    {
        "word": "lighted",
        "meaning": "(light過去式、過去分詞) 點燃",
        "theme": "不規則動詞三態",
        "sentence": "She lighted the candles on the birthday cake.",
        "sentenceZh": "她點燃了生日蛋糕上的蠟燭。"
    },
    {
        "word": "lit",
        "meaning": "(light過去式、過去分詞) 點燃",
        "theme": "不規則動詞三態",
        "sentence": "The room was brightly lit by the large lamp.",
        "sentenceZh": "房間被大檯燈照得很明亮。"
    },
    {
        "word": "lost",
        "meaning": "(lose過去式、過去分詞) 失去",
        "theme": "不規則動詞三態",
        "sentence": "He was sad because he lost the important match.",
        "sentenceZh": "他很難過，因為他輸了那場重要的比賽。"
    },
    {
        "word": "made",
        "meaning": "(make過去式、過去分詞) 製作",
        "theme": "不規則動詞三態",
        "sentence": "My mother made a delicious breakfast for me.",
        "sentenceZh": "我媽媽為我做了一頓美味的早餐。"
    },
    {
        "word": "meant",
        "meaning": "(mean過去式、過去分詞) 意味著",
        "theme": "不規則動詞三態",
        "sentence": "I didn't know what that strange symbol meant.",
        "sentenceZh": "我不知道那個奇怪的符號是什麼意思。"
    },
    {
        "word": "met",
        "meaning": "(meet過去式、過去分詞) 遇見",
        "theme": "不規則動詞三態",
        "sentence": "I met Director Lee in the hallway yesterday.",
        "sentenceZh": "我昨天在走廊遇見了李主任。"
    },
    {
        "word": "mistaken",
        "meaning": "(mistake過去分詞) 弄錯",
        "theme": "不規則動詞三態",
        "sentence": "You must be mistaken; I didn't say that.",
        "sentenceZh": "你一定是弄錯了，我沒說過那樣的話。"
    },
    {
        "word": "mistook",
        "meaning": "(mistake過去式) 弄錯",
        "theme": "不規則動詞三態",
        "sentence": "He mistook my umbrella for his own.",
        "sentenceZh": "他把我的雨傘錯認成他自己的。"
    },
    {
        "word": "overcame",
        "meaning": "(overcome過去式) 克服",
        "theme": "不規則動詞三態",
        "sentence": "He overcame his fear and gave the speech bravely.",
        "sentenceZh": "他克服了恐懼，勇敢地發表演講。"
    },
    {
        "word": "overcome",
        "meaning": "(overcome過去分詞) 克服",
        "theme": "不規則動詞三態",
        "sentence": "She has overcome many difficulties to win the game.",
        "sentenceZh": "她已經克服了許多困難才贏得比賽。"
    },
    {
        "word": "paid",
        "meaning": "(pay過去式、過去分詞) 支付",
        "theme": "不規則動詞三態",
        "sentence": "I paid two hundred dollars for this English book.",
        "sentenceZh": "我花了兩百元買這本英文書。"
    },
    {
        "word": "put",
        "meaning": "(put過去式、過去分詞) 放",
        "theme": "不規則動詞三態",
        "sentence": "He put his cell phone in his backpack before class.",
        "sentenceZh": "上課前他把手機放進背包裡。"
    },
    {
        "word": "quit",
        "meaning": "(quit過去式、過去分詞) 退出 / 放棄",
        "theme": "不規則動詞三態",
        "sentence": "She quit playing the game because it was too difficult.",
        "sentenceZh": "她放棄玩這個遊戲了，因為它太難了。"
    },
    {
        "word": "ran",
        "meaning": "(run過去式) 跑",
        "theme": "不規則動詞三態",
        "sentence": "The cat ran away when it saw the big dog.",
        "sentenceZh": "貓看到大狗時就跑走了。"
    },
    {
        "word": "rang",
        "meaning": "(ring過去式) 響",
        "theme": "不規則動詞三態",
        "sentence": "The phone rang while we were having dinner.",
        "sentenceZh": "我們吃晚餐時電話響了。"
    },
    {
        "word": "read",
        "meaning": "(read過去式、過去分詞) 讀",
        "theme": "不規則動詞三態",
        "sentence": "I read a fascinating story about the weather gods.",
        "sentenceZh": "我讀了一個關於天氣神明的迷人故事。"
    },
    {
        "word": "ridden",
        "meaning": "(ride過去分詞) 騎",
        "theme": "不規則動詞三態",
        "sentence": "I have never ridden a motorcycle on the highway.",
        "sentenceZh": "我從來沒有在高速公路上騎過機車。"
    },
    {
        "word": "risen",
        "meaning": "(rise過去分詞) 上升",
        "theme": "不規則動詞三態",
        "sentence": "The sun had already risen when I woke up.",
        "sentenceZh": "我醒來時太陽已經升起了。"
    },
    {
        "word": "rode",
        "meaning": "(ride過去式) 騎",
        "theme": "不規則動詞三態",
        "sentence": "We rode our bikes to the park yesterday afternoon.",
        "sentenceZh": "我們昨天下午騎腳踏車去公園。"
    },
    {
        "word": "rose",
        "meaning": "(rise過去式) 上升",
        "theme": "不規則動詞三態",
        "sentence": "Everyone rose to sing the school song.",
        "sentenceZh": "每個人都起立唱校歌。"
    },
    {
        "word": "run",
        "meaning": "(run過去分詞) 跑",
        "theme": "不規則動詞三態",
        "sentence": "I have run three kilometers in the park today.",
        "sentenceZh": "我今天在公園裡跑了三公里。"
    },
    {
        "word": "rung",
        "meaning": "(ring過去分詞) 響",
        "theme": "不規則動詞三態",
        "sentence": "The school bell has just rung; let's go to class.",
        "sentenceZh": "學校鐘聲剛響過，我們去上課吧。"
    },
    {
        "word": "said",
        "meaning": "(say過去式、過去分詞) 說",
        "theme": "不規則動詞三態",
        "sentence": "The teacher said that we will have a quiz tomorrow.",
        "sentenceZh": "老師說我們明天會有小考。"
    },
    {
        "word": "sang",
        "meaning": "(sing過去式) 唱",
        "theme": "不規則動詞三態",
        "sentence": "We sang a beautiful 80s song together at the party.",
        "sentenceZh": "我們在派對上一起唱了一首美麗的 80 年代歌曲。"
    },
    {
        "word": "sank",
        "meaning": "(sink過去式) 沉",
        "theme": "不規則動詞三態",
        "sentence": "The heavy stone sank quickly to the bottom of the lake.",
        "sentenceZh": "重石頭迅速沉到了湖底。"
    },
    {
        "word": "sat",
        "meaning": "(sit過去式、過去分詞) 坐",
        "theme": "不規則動詞三態",
        "sentence": "We sat under the big tree to eat our picnic lunch.",
        "sentenceZh": "我們坐在大樹下吃我們的野餐午餐。"
    },
    {
        "word": "saw",
        "meaning": "(see過去式) 看",
        "theme": "不規則動詞三態",
        "sentence": "I saw a colorful rainbow in the sky after the shower.",
        "sentenceZh": "陣雨過後我在天空中看到一道色彩繽紛的彩虹。"
    },
    {
        "word": "seen",
        "meaning": "(see過去分詞) 看",
        "theme": "不規則動詞三態",
        "sentence": "Have you seen my missing English dictionary?",
        "sentenceZh": "你有看到我不見的英文字典嗎？"
    },
    {
        "word": "sent",
        "meaning": "(send過去式、過去分詞) 寄送",
        "theme": "不規則動詞三態",
        "sentence": "I sent an email to invite him to our English club.",
        "sentenceZh": "我寄了封電子郵件邀請他參加我們的英文社團。"
    },
    {
        "word": "set",
        "meaning": "(set過去式、過去分詞) 設定",
        "theme": "不規則動詞三態",
        "sentence": "I set my alarm clock for six o'clock tomorrow morning.",
        "sentenceZh": "我把鬧鐘設定在明天早上六點。"
    },
    {
        "word": "shaken",
        "meaning": "(shake過去分詞) 搖",
        "theme": "不規則動詞三態",
        "sentence": "The trees were completely shaken by the strong wind.",
        "sentenceZh": "樹木被強風搖晃得非常厲害。"
    },
    {
        "word": "shined",
        "meaning": "(shine過去式、過去分詞) 發光",
        "theme": "不規則動詞三態",
        "sentence": "He shined his flashlight into the dark tunnel.",
        "sentenceZh": "他把手電筒照進黑暗的隧道裡。"
    },
    {
        "word": "shone",
        "meaning": "(shine過去式、過去分詞) 發光",
        "theme": "不規則動詞三態",
        "sentence": "The stars shone brightly in the clear night sky.",
        "sentenceZh": "星星在晴朗的夜空中明亮地閃耀著。"
    },
    {
        "word": "shook",
        "meaning": "(shake過去式) 搖",
        "theme": "不規則動詞三態",
        "sentence": "The principal shook hands with the winning students.",
        "sentenceZh": "校長與獲勝的學生們握手。"
    },
    {
        "word": "shot",
        "meaning": "(shoot過去式、過去分詞) 射擊",
        "theme": "不規則動詞三態",
        "sentence": "He shot the basketball exactly into the net.",
        "sentenceZh": "他精準地將籃球投進了網內。"
    },
    {
        "word": "showed",
        "meaning": "(show過去式) 展示",
        "theme": "不規則動詞三態",
        "sentence": "The teacher showed us how to use the vocabulary app.",
        "sentenceZh": "老師向我們展示如何使用這個單字應用程式。"
    },
    {
        "word": "shown",
        "meaning": "(show過去分詞) 展示",
        "theme": "不規則動詞三態",
        "sentence": "This grammar rule has been shown to be very important.",
        "sentenceZh": "這個文法規則已被證明是非常重要的。"
    },
    {
        "word": "shrank",
        "meaning": "(shrink過去式) 縮水",
        "theme": "不規則動詞三態",
        "sentence": "My wool sweater shrank after I washed it in hot water.",
        "sentenceZh": "我的羊毛毛衣在熱水裡洗過後縮水了。"
    },
    {
        "word": "shrunk",
        "meaning": "(shrink過去式、過去分詞) 縮水",
        "theme": "不規則動詞三態",
        "sentence": "The shirt has shrunk so much that it doesn't fit me now.",
        "sentenceZh": "這件襯衫縮水太多了，現在我穿不下了。"
    },
    {
        "word": "shut",
        "meaning": "(shut過去式、過去分詞) 關閉",
        "theme": "不規則動詞三態",
        "sentence": "He shut the computer down after finishing his code.",
        "sentenceZh": "他寫完程式碼後把電腦關機了。"
    },
    {
        "word": "slept",
        "meaning": "(sleep過去式、過去分詞) 睡覺",
        "theme": "不規則動詞三態",
        "sentence": "I slept very well because the bed was comfortable.",
        "sentenceZh": "我睡得很好，因為床很舒服。"
    },
    {
        "word": "slid",
        "meaning": "(slide過去式、過去分詞) 滑動",
        "theme": "不規則動詞三態",
        "sentence": "The glass slid off the table and broke into pieces.",
        "sentenceZh": "玻璃杯從桌上滑落摔成了碎片。"
    },
    {
        "word": "smelled",
        "meaning": "(smell過去式、過去分詞) 聞",
        "theme": "不規則動詞三態",
        "sentence": "The kitchen smelled strongly of fried chicken.",
        "sentenceZh": "廚房裡充滿了炸雞的濃烈香味。"
    },
    {
        "word": "smelt",
        "meaning": "(smell過去式、過去分詞) 聞",
        "theme": "不規則動詞三態",
        "sentence": "The dog smelt the food from far away.",
        "sentenceZh": "狗從很遠的地方就聞到了食物的味道。"
    },
    {
        "word": "sold",
        "meaning": "(sell過去式、過去分詞) 賣",
        "theme": "不規則動詞三態",
        "sentence": "He sold his old bicycle and bought a new one.",
        "sentenceZh": "他賣掉了舊腳踏車並買了一輛新的。"
    },
    {
        "word": "sought",
        "meaning": "(seek過去式、過去分詞) 尋找",
        "theme": "不規則動詞三態",
        "sentence": "We sought shelter under a tree when it began to rain.",
        "sentenceZh": "開始下雨時我們在樹下尋找遮蔽處。"
    },
    {
        "word": "sped",
        "meaning": "(speed過去式、過去分詞) 加速",
        "theme": "不規則動詞三態",
        "sentence": "The sports car sped quickly down the highway.",
        "sentenceZh": "跑車在高速公路上快速奔馳。"
    },
    {
        "word": "speeded",
        "meaning": "(speed過去式、過去分詞) 加速",
        "theme": "不規則動詞三態",
        "sentence": "The development of the game has been speeded up.",
        "sentenceZh": "這款遊戲的開發速度已經加快了。"
    },
    {
        "word": "spelled",
        "meaning": "(spell過去式、過去分詞) 拼寫",
        "theme": "不規則動詞三態",
        "sentence": "I carefully spelled my English name on the test paper.",
        "sentenceZh": "我在考卷上仔細地拼寫出我的英文名字。"
    },
    {
        "word": "spelt",
        "meaning": "(spell過去式、過去分詞) 拼寫",
        "theme": "不規則動詞三態",
        "sentence": "Have you spelt all the vocabulary words correctly?",
        "sentenceZh": "你把所有的單字都拼寫正確了嗎？"
    },
    {
        "word": "spent",
        "meaning": "(spend過去式、過去分詞) 花費",
        "theme": "不規則動詞三態",
        "sentence": "I spent two hours reviewing my English grammar.",
        "sentenceZh": "我花了兩小時複習英文文法。"
    },
    {
        "word": "spilled",
        "meaning": "(spill過去式、過去分詞) 灑出",
        "theme": "不規則動詞三態",
        "sentence": "He accidentally spilled milk on his new shirt.",
        "sentenceZh": "他不小心把牛奶灑在了新襯衫上。"
    },
    {
        "word": "spilt",
        "meaning": "(spill過去式、過去分詞) 灑出",
        "theme": "不規則動詞三態",
        "sentence": "Don't cry over spilt milk; just clean it up.",
        "sentenceZh": "覆水難收，別為了打翻的牛奶哭泣，擦乾淨就好。"
    },
    {
        "word": "spoke",
        "meaning": "(speak過去式) 說",
        "theme": "不規則動詞三態",
        "sentence": "The principal spoke to the students about safety.",
        "sentenceZh": "校長向學生們講述了關於安全的事。"
    },
    {
        "word": "spoken",
        "meaning": "(speak過去分詞) 說",
        "theme": "不規則動詞三態",
        "sentence": "English is spoken in many countries around the world.",
        "sentenceZh": "英文在世界上許多國家被使用。"
    },
    {
        "word": "spread",
        "meaning": "(spread過去式、過去分詞) 傳播 / 展開",
        "theme": "不規則動詞三態",
        "sentence": "The news of his victory spread quickly through the school.",
        "sentenceZh": "他獲勝的消息迅速傳遍了全校。"
    },
    {
        "word": "stood",
        "meaning": "(stand過去式、過去分詞) 站",
        "theme": "不規則動詞三態",
        "sentence": "Everyone stood up when the teacher walked in.",
        "sentenceZh": "當老師走進來時每個人都起立了。"
    },
    {
        "word": "stole",
        "meaning": "(steal過去式) 偷",
        "theme": "不規則動詞三態",
        "sentence": "A thief stole my wallet while I was at the market.",
        "sentenceZh": "我在市場時一個小偷摸走了我的錢包。"
    },
    {
        "word": "stolen",
        "meaning": "(steal過去分詞) 偷",
        "theme": "不規則動詞三態",
        "sentence": "My brand new bicycle was stolen from the park.",
        "sentenceZh": "我全新的腳踏車在公園裡被偷了。"
    },
    {
        "word": "struck",
        "meaning": "(strike過去式、過去分詞) 打擊",
        "theme": "不規則動詞三態",
        "sentence": "An amazing idea struck me while I was taking a shower.",
        "sentenceZh": "我洗澡時突然想到一個絕妙的主意。"
    },
    {
        "word": "stuck",
        "meaning": "(stick過去式、過去分詞) 黏貼",
        "theme": "不規則動詞三態",
        "sentence": "I used glue to keep the picture stuck to the paper.",
        "sentenceZh": "我用膠水讓圖片黏在紙上。"
    },
    {
        "word": "sung",
        "meaning": "(sing過去分詞) 唱",
        "theme": "不規則動詞三態",
        "sentence": "This famous 80s pop song was sung by a great band.",
        "sentenceZh": "這首著名的 80 年代流行歌是由一個偉大樂團演唱的。"
    },
    {
        "word": "sunk",
        "meaning": "(sink過去分詞) 沉",
        "theme": "不規則動詞三態",
        "sentence": "The old ship has sunk to the bottom of the deep ocean.",
        "sentenceZh": "那艘舊船已經沉入了深海的底部。"
    },
    {
        "word": "swam",
        "meaning": "(swim過去式) 游泳",
        "theme": "不規則動詞三態",
        "sentence": "We swam in the cool pool for a whole afternoon.",
        "sentenceZh": "我們在涼爽的游泳池游了一個下午。"
    },
    {
        "word": "swept",
        "meaning": "(sweep過去式、過去分詞) 掃",
        "theme": "不規則動詞三態",
        "sentence": "I swept the classroom floor to make it very clean.",
        "sentenceZh": "我把教室地板掃得非常乾淨。"
    },
    {
        "word": "swore",
        "meaning": "(swear過去式) 發誓",
        "theme": "不規則動詞三態",
        "sentence": "He swore that he was telling the honest truth.",
        "sentenceZh": "他發誓他說的都是實話。"
    },
    {
        "word": "sworn",
        "meaning": "(swear過去分詞) 發誓",
        "theme": "不規則動詞三態",
        "sentence": "I have sworn to keep your secret safe forever.",
        "sentenceZh": "我已經發誓會永遠保守你的秘密。"
    },
    {
        "word": "swum",
        "meaning": "(swim過去分詞) 游泳",
        "theme": "不規則動詞三態",
        "sentence": "I have never swum across such a wide river before.",
        "sentenceZh": "我以前從來沒有游過這麼寬的河。"
    },
    {
        "word": "swung",
        "meaning": "(swing過去式、過去分詞) 搖擺",
        "theme": "不規則動詞三態",
        "sentence": "He swung his racket powerfully to hit the shuttlecock.",
        "sentenceZh": "他用力揮舞球拍擊打羽毛球。"
    },
    {
        "word": "taken",
        "meaning": "(take過去分詞) 拿",
        "theme": "不規則動詞三態",
        "sentence": "The books have already been taken from the library.",
        "sentenceZh": "那些書已經被從圖書館借走了。"
    },
    {
        "word": "taught",
        "meaning": "(teach過去式、過去分詞) 教",
        "theme": "不規則動詞三態",
        "sentence": "Mr. Wang taught us how to play the syntax game.",
        "sentenceZh": "王老師教我們怎麼玩語法遊戲。"
    },
    {
        "word": "thought",
        "meaning": "(think過去式、過去分詞) 想",
        "theme": "不規則動詞三態",
        "sentence": "I thought the English exam was going to be much harder.",
        "sentenceZh": "我原本以為英文考試會難得多。"
    },
    {
        "word": "threw",
        "meaning": "(throw過去式) 丟",
        "theme": "不規則動詞三態",
        "sentence": "He threw the baseball straight to the catcher.",
        "sentenceZh": "他把棒球直直地丟向捕手。"
    },
    {
        "word": "thrown",
        "meaning": "(throw過去分詞) 丟",
        "theme": "不規則動詞三態",
        "sentence": "The broken cup was thrown into the trash can.",
        "sentenceZh": "破掉的杯子被丟進了垃圾桶。"
    },
    {
        "word": "told",
        "meaning": "(tell過去式、過去分詞) 告訴",
        "theme": "不規則動詞三態",
        "sentence": "My grandmother told me a story about a brave hero.",
        "sentenceZh": "我奶奶告訴我一個關於勇敢英雄的故事。"
    },
    {
        "word": "took",
        "meaning": "(take過去式) 拿",
        "theme": "不規則動詞三態",
        "sentence": "I took an umbrella with me because it was cloudy.",
        "sentenceZh": "因為多雲，所以我隨身帶了一把傘。"
    },
    {
        "word": "tore",
        "meaning": "(tear過去式) 撕",
        "theme": "不規則動詞三態",
        "sentence": "The dog tore the newspaper into many small pieces.",
        "sentenceZh": "狗把報紙撕成了許多小碎片。"
    },
    {
        "word": "torn",
        "meaning": "(tear過去分詞) 撕",
        "theme": "不規則動詞三態",
        "sentence": "My old jacket is badly torn and I need a new one.",
        "sentenceZh": "我的舊夾克破得很嚴重，我需要一件新的。"
    },
    {
        "word": "understood",
        "meaning": "(understand過去式、過去分詞) 了解",
        "theme": "不規則動詞三態",
        "sentence": "I finally understood the meaning of this difficult word.",
        "sentenceZh": "我終於了解這個困難單字的意思了。"
    },
    {
        "word": "upset",
        "meaning": "(upset過去式、過去分詞) 使心煩",
        "theme": "不規則動詞三態",
        "sentence": "The bad news about the canceled trip really upset us.",
        "sentenceZh": "旅行取消的壞消息真的讓我們很心煩。"
    },
    {
        "word": "was",
        "meaning": "(be過去式) 是",
        "theme": "不規則動詞三態",
        "sentence": "It was raining heavily when I left the school.",
        "sentenceZh": "我離開學校時正下著大雨。"
    },
    {
        "word": "went",
        "meaning": "(go過去式) 去",
        "theme": "不規則動詞三態",
        "sentence": "We went to the movie theater to watch an action film.",
        "sentenceZh": "我們去電影院看了一部動作片。"
    },
    {
        "word": "were",
        "meaning": "(be過去式) 是",
        "theme": "不規則動詞三態",
        "sentence": "They were studying together in the library yesterday.",
        "sentenceZh": "他們昨天在圖書館一起讀書。"
    },
    {
        "word": "woke",
        "meaning": "(wake過去式) 醒來",
        "theme": "不規則動詞三態",
        "sentence": "I woke up early to check the weather outside.",
        "sentenceZh": "我很早醒來查看外面的天氣。"
    },
    {
        "word": "woken",
        "meaning": "(wake過去分詞) 醒來",
        "theme": "不規則動詞三態",
        "sentence": "I was woken up by the loud alarm clock at 6 a.m.",
        "sentenceZh": "我早上六點被大聲的鬧鐘吵醒。"
    },
    {
        "word": "won",
        "meaning": "(win過去式、過去分詞) 贏",
        "theme": "不規則動詞三態",
        "sentence": "Our badminton team won the championship game easily.",
        "sentenceZh": "我們羽球隊輕鬆地贏得了冠軍賽。"
    },
    {
        "word": "wore",
        "meaning": "(wear過去式) 穿",
        "theme": "不規則動詞三態",
        "sentence": "She wore a beautiful dress to the birthday party.",
        "sentenceZh": "她穿了一件美麗的洋裝去參加生日派對。"
    },
    {
        "word": "worn",
        "meaning": "(wear過去分詞) 穿",
        "theme": "不規則動詞三態",
        "sentence": "This jacket has been worn by my older brother for years.",
        "sentenceZh": "這件夾克我哥哥已經穿了好幾年了。"
    },
    {
        "word": "written",
        "meaning": "(write過去分詞) 寫",
        "theme": "不規則動詞三態",
        "sentence": "This interactive web game was written in HTML and JavaScript.",
        "sentenceZh": "這個互動網頁遊戲是用 HTML 和 JavaScript 寫成的。"
    },
    {
        "word": "wrote",
        "meaning": "(write過去式) 寫",
        "theme": "不規則動詞三態",
        "sentence": "I wrote a long letter to my pen pal in America.",
        "sentenceZh": "我寫了一封長信給美國的筆友。"
    }
];