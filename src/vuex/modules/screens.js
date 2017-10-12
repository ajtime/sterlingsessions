const mutations = {
  show () {
    console.log('show called');
    state.showMessage = true;
  },
  hide () {
    console.log('hide called');
    state.showMessage = false;
  },

  increment () {
    state.currentNumber += 1
  },

  decrement () {
    state.currentNumber -= 1
  },


  setValue (state, value) {
    console.log('setvalue inside mutation -state:value', state, value);
    state.message = value
  },




  //setting up slide view
  setQuestion  (state, value) {
    //console.log('setQuestion state value', state, value);
    state.question = value;
  },

  setSeconds (state, value) {
    state.seconds = value;
  },

  setScreentype (state, value) {
    state.screentype = value;
  },


  //setting up error view
  setErrorQuestionTitle  (state, value) {
    //console.log('setQuestion state value', state, value);
    state.errorQuestionTitle = value;
  },

  setErrorQuestionMessage (state, value) {
    state.errorQuestionMessage = value;
  },


    //setting up question view
    setQuestionTitle  (state, value) {
    //console.log('setQuestion state value', state, value);
        state.listOfQuestionsTitle = value;
    },
    setQuestionList (state, value) {
        state.listOfQuestions = value;
    },



};

const actions = {
  updateText ({ commit }, value) {
    console.log('updatetext in actions value:', value);
    commit('setValue', value)
  },

  increment ({ commit }) {
    //console.log('updatetext in actions value:', value);
    commit('increment')
  },

  decrement ({ commit }) {
    //console.log('updatetext in actions value:', value);
    commit('decrement')
  },

  setUpQuestionList ({ commit }, value) {
    console.log('setUpQuestionList action in state called payload', value);
    
    //console.log('value.questionNumber', value.questionNumber);
    //console.log('typeof', typeof value.questionNumber);

    commit('setQuestionTitle', value.title);
    commit('setQuestionList', value.message);
  },



  setUpError ({ commit }, value) {
    console.log('setUpError action in state called payload', value);
    
    //console.log('value.questionNumber', value.questionNumber);
    //console.log('typeof', typeof value.questionNumber);

    commit('setErrorQuestionTitle', value.title);
    commit('setErrorQuestionMessage', value.body);
  },

  setUpSlide ({ commit }, value) {
    //console.log('action in state called payload', value);
    
    //console.log('value.questionNumber', value.questionNumber);
    //console.log('typeof', typeof value.questionNumber);

    commit('setQuestion', value.questionNumber);
    commit('setSeconds', value.answerTimeLengthInSeconds);
    commit('setScreentype', value.displayType);
  },

  setUpVideo ({ commit }, value) {
    //console.log('action in state called payload', value);
    //console.log('value.questionNumber', value.questionNumber);
    //console.log('typeof', typeof value.questionNumber);
    commit('setQuestion', value.questionNumber);
    commit('setSeconds', value.answerTimeLengthInSeconds);
    commit('setScreentype', value.displayType);
  },
  //these are both the same - maybe rename setUpMedia?


};

const getters = {
  getTitle(state) {
    //console.log('tst');
    return state.title;
  },
  getItems(state) {
    return state.items;
  },

  userSet: (state) => state.userList.map( userId => state.users[userId] ),
  
  //getImage: (state) => state.questionList.map( questionNum => state.questionDetails[questionNum] ),
  //getImage: (state) => state.question( questionNum => state.questionDetails[questionNum] ),
  //myArray.find(item => item.id === 2);
  getImage: (state) => state.questionDetails.find(item => item === 2),

  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  
};

const state = {
    question: 0,
    screentype: null,
    seconds: 0,
    showError: false,
    showSingle: false,
    showList: false,
    showDefault: true,
    message: '',
    title: null,
    //textResponse1: 'VMLs first client was Olathe Daily News, but the founders say they really felt like they made it when VML won over Northwest Airlines.',
    items: [],
    //speaker: false,
    //channelHeaders: [],
    //channels: [],
    errorQuestionTitle: null,
    errorQuestionMessage: null,
    listOfQuestionsTitle: 'Question List',
    listOfQuestionsdefault: [],
    listOfQuestions: [
        {
          "title": "What did VML originally stand for?",
          "questionNumber": 1
        },
        {
          "title": "Who was VML’s first client?",
          "questionNumber": 2
        },
        {
          "title": "Where in the world are VML offices?",
          "questionNumber": 3
        },
        {
          "title": "How many Cannes awards has VML won?",
          "questionNumber": 4
        },
        {
          "title": "How many miles do VMLers travel each year?",
          "questionNumber": 5
        },
        {
          "title": "What is the Spark award?",
          "questionNumber": 6
        },
        {
          "title": "How does the VML Foundation contribute to its local communities?",
          "questionNumber": 7
        },
        {
          "title": "How many projects have VML employees worked on in the last year?",
          "questionNumber": 8
        },
        {
          "title": "What are some favorite VML campaigns?",
          "questionNumber": 9
        },
        {
          "title": "How many animal crackers do VMLers in Kansas City eat?",
          "questionNumber": 10
        },
        {
          "title": "Is this the best anniversary VML has ever had?",
          "questionNumber": 11
        },
        {
          "title": "What one word would you use to describe the culture at VML?",
          "questionNumber": 12
        },
        {
          "title": "Where are the VML founders now?",
          "questionNumber": 13
        },
        {
          "title": "What was VML's first digital project?",
          "questionNumber": 14
        },
        {
          "title": "How many emails are sent and received between VMLers in a year?",
          "questionNumber": 15
        },
        {
          "title": "What is VML’s favorite Kansas City BBQ?",
          "questionNumber": 16
        },
        {
          "title": "Who is the most famous person to come to a VML office?",
          "questionNumber": 17
        },
        {
          "title": "Where was the first VML office outside of the United States?",
          "questionNumber": 18
        },
        {
          "title": "How much beer do VMLers in Kansas City drink?",
          "questionNumber": 19
        },
        {
          "title": "Show me some of VML's best party moments.",
          "questionNumber": 20
        },
        {
          "title": "Why is VML headquarters in Kansas City?",
          "questionNumber": 21
        },
        {
          "title": "Show me the evolution of VML logos.",
          "questionNumber": 22
        },
        {
          "title": "Where was VML's first office space?",
          "questionNumber": 23
        },
        {
          "title": "When did VML join WPP?",
          "questionNumber": 24
        },
        {
          "title": "How has VML lead digital innovation?",
          "questionNumber": 25
        }
      ],

    testTimeSeconds: 25,
    //testVideo: require('../../videos/vmlsizzle1.mp4'),
    
    slideshowimages: [
        require('../../images/slideshow/one/_MG_0229-103.jpg'),
        require('../../images/slideshow/one/_MG_0818.jpg'),
        require('../../images/slideshow/one/_MG_0927.jpg'),
        require('../../images/slideshow/one/_MG_1031.jpg'),
        require('../../images/slideshow/one/_MG_1111.jpg'),
        require('../../images/slideshow/one/_MG_1303.jpg'),
        require('../../images/slideshow/one/_MG_8556.jpg'),
        require('../../images/slideshow/one/_MG_9208.jpg'),
        require('../../images/slideshow/one/_MG_9224.jpg'),
        require('../../images/slideshow/one/_MG_9835.JPG'),
        require('../../images/slideshow/one/_MG_9858.JPG'),
        require('../../images/slideshow/one/_MG_9861.JPG'),
        require('../../images/slideshow/one/0L1B4200.jpg'),
        require('../../images/slideshow/one/1ea717ea0ee111e2a62d1231380fd04a_7.jpg'),
        require('../../images/slideshow/one/011.jpg'),
        require('../../images/slideshow/one/11YR19315.jpg'),
        require('../../images/slideshow/one/25Hands.jpg'),
        require('../../images/slideshow/one/0074_VML_Holiday_121214_4585_Print.jpg'),
        require('../../images/slideshow/one/0101_VML_Holiday_121214_4681_Print.jpg'),
        require('../../images/slideshow/one/0127_VML_Holiday_121214_4778_Print.jpg'),
        require('../../images/slideshow/one/0188_VML_Holiday_121214_4860_Print.jpg'),
        require('../../images/slideshow/one/0194_VML_Holiday_121214_4998_Print.jpg'),
        require('../../images/slideshow/one/2008GroupShot.jpg'),
        require('../../images/slideshow/one/2009Royals.jpg'),
        require('../../images/slideshow/one/2011FD.jpg'),
        require('../../images/slideshow/one/2011Slugger.jpg'),
        require('../../images/slideshow/one/2014CannesLions.jpg'),
        require('../../images/slideshow/one/2014CorpChallenge.jpg'),
        require('../../images/slideshow/one/2014GoldOuting.jpg'),
        require('../../images/slideshow/one/2017Interns_KC_Airplane.jpg'),
        require('../../images/slideshow/one/2017shavetosave.jpg'),
        require('../../images/slideshow/one/10919_10152683845732125_7897104279086167493_n.jpg'),
        require('../../images/slideshow/one/10411237_10152683845457125_2399139324399163834_n.jpg'),
        require('../../images/slideshow/one/10446715_10204354196966437_401931690996390300_n.jpg'),
        require('../../images/slideshow/one/10527900_10152748415837125_1499086268975079795_n.jpg'),
        require('../../images/slideshow/one/10544354_10152683845742125_3262267466717566827_n.jpg'),
        require('../../images/slideshow/one/10612817_10152683845477125_4403659478847514406_n.jpg'),
        require('../../images/slideshow/one/11008506_10153222807699000_313232483512642743_n-625.jpg'),
        require('../../images/slideshow/one/11167686_10153786828202125_359040104065223106_n-643.jpg'),
        require('../../images/slideshow/one/11169601_10153374896687125_4709549603039668802_o-633.jpg'),
        require('../../images/slideshow/one/11218912_10153671364577125_1771260983265779207_n-624.jpg'),
        require('../../images/slideshow/one/11990577_10153671364352125_6531618473400463790_n-639.jpg'),
        require('../../images/slideshow/one/12027680_10153723699107125_4560471044560578726_n-635.jpg'),
        require('../../images/slideshow/one/12052510_10153743530747125_1846959380552631768_o-621.jpg'),
        require('../../images/slideshow/one/12244657_10153840852387125_4989496715208543304_o-634.jpg'),
        require('../../images/slideshow/one/13161878_10154277255177125_89115915440716980_o-1195.jpg'),
        require('../../images/slideshow/one/13503023_1043804729022547_3728893449168605668_o-713.jpg'),
        require('../../images/slideshow/one/13653411_10209418555197806_4285155143061355303_o.jpg'),
        require('../../images/slideshow/one/13767248_1072085599511522_1996426512273854549_o-705.jpg'),
        require('../../images/slideshow/one/13987377_1078756742194012_3884367069038971995_o-717.jpg'),
        require('../../images/slideshow/one/14241558_10153753713747097_6190917723235891205_o-730.jpg'),
        require('../../images/slideshow/one/14311374_10210013663395139_6363764088891439275_o.jpg'),
        require('../../images/slideshow/one/14329938_1117026645033688_5628998728980409437_n-711.jpg'),
        require('../../images/slideshow/one/14680963_1139150956138319_3827236476074636279_o-708.jpg'),
        require('../../images/slideshow/one/15440414_10154933222892125_6888422613418020011_o-724.jpg'),
        require('../../images/slideshow/one/15625853_10154048290052097_802604065127373291_o-733.jpg'),
        require('../../images/slideshow/one/17349585_10210847440760514_6780965373771634911_o.jpg'),



        require('../../images/slideshow/one/17390770_10210895955893362_5526078613868552690_o.jpg'),
        require('../../images/slideshow/one/17800047_10100437400961919_5105941455048319011_n.jpg'),
        require('../../images/slideshow/one/20141030_191608_resized.jpg'),
        require('../../images/slideshow/one/20141104_193408.jpg'),
        require('../../images/slideshow/one/20151015_170410-702.jpg'),
        require('../../images/slideshow/one/21316141_1398869536828691_7777896443881262420_o.jpg'),
        require('../../images/slideshow/one/AAFKC_Kristina_Kerr_-_April_30_2015-598.JPG'),
        require('../../images/slideshow/one/AListNewYork2017.jpg'),
        require('../../images/slideshow/one/Annual_Meeting_2017_After_Party_at_The_Guild_back_bar_3_(15Feb17).jpg'),
        require('../../images/slideshow/one/Annual_Meeting_2017_After_Party_at_The_Guild_Team_Sprint_(15Feb17).jpg'),
        require('../../images/slideshow/one/Annual_Meeting_2017_After_Party_at_The_Guild_wide_angle_(15Feb17).jpg'),
        require('../../images/slideshow/one/Annual_Meeting_2017_After_Party_Spark_Award_Winners_1_(15Feb17).jpg'),
        require('../../images/slideshow/one/AutoShow_2016_Team_Pic-788.jpg'),
        require('../../images/slideshow/one/BayerAtTED.JPG'),
        require('../../images/slideshow/one/BDG2_000050ac-356.jpg'),
        require('../../images/slideshow/one/Beer_03.JPG'),
        require('../../images/slideshow/one/Beer_06.JPG'),
        require('../../images/slideshow/one/Beer_08.JPG'),
        require('../../images/slideshow/one/Beer_12.JPG'),
        require('../../images/slideshow/one/Betty-YCT-Kevin-Clark-721.jpg'),
        require('../../images/slideshow/one/Big_KC_Pre_Party_Panelists_(8Oct14).jpg'),
        require('../../images/slideshow/one/Big_KC_Pre_Party_Patio_Couch_Potatoes_facing_South_(8Oct14)-339.jpg'),
        require('../../images/slideshow/one/Big_KC_Pre_Party_Patio_Deck_(8Oct14).jpg'),
        require('../../images/slideshow/one/Big_KC_Pre_Party_Patio_Deck_Party_(8Oct14).jpg'),
        require('../../images/slideshow/one/Big_KC_Pre_Party_Patio_Kelly_&_Friends_(8Oct14).jpg'),
        require('../../images/slideshow/one/Big_KC_Pre_Party_Perry_Presenting_(8Oct14).jpg'),
        require('../../images/slideshow/one/butch_and_his_honeys[1].jpg'),
        require('../../images/slideshow/one/Chuck_Searl_Amelia_&_Julia_Sporting_KC_(27Sept13).jpg'),
        require('../../images/slideshow/one/CIO_01.jpg'),
        require('../../images/slideshow/one/CIO_02.jpg'),
        require('../../images/slideshow/one/CIO_14.JPG'),
        require('../../images/slideshow/one/CIO_15.JPG'),
        require('../../images/slideshow/one/CMH_Marketing_.jpg'),
        require('../../images/slideshow/one/Cookout_02.JPG'),
        require('../../images/slideshow/one/Cover_Image_1440x800_Cape_Town_2.jpg'),
        require('../../images/slideshow/one/CYtPMv6W8AUSsP8-628.jpg'),
        require('../../images/slideshow/one/Dig_in_Cultivate_3.jpg'),
        require('../../images/slideshow/one/Dolly_and_Team-503.jpg'),
        require('../../images/slideshow/one/DSC_0368.JPG'),
        require('../../images/slideshow/one/DSC_0374.JPG'),
        require('../../images/slideshow/one/DSC_0544.JPG'),
        require('../../images/slideshow/one/DSC_0549.JPG'),
        require('../../images/slideshow/one/DSC_0551.JPG'),
        require('../../images/slideshow/one/DSC_0559.JPG'),
        require('../../images/slideshow/one/DSC_0574.JPG'),
        require('../../images/slideshow/one/DSC_0580.JPG'),
        require('../../images/slideshow/one/DSC_0588.JPG'),
        require('../../images/slideshow/one/DSC_0595.JPG'),
        require('../../images/slideshow/one/DSC_0600.JPG'),
        require('../../images/slideshow/one/DSC_0601.JPG'),
        require('../../images/slideshow/one/DSC_0604.JPG'),
        require('../../images/slideshow/one/DSC_0607.JPG'),
        require('../../images/slideshow/one/DSC_0619.JPG'),
        require('../../images/slideshow/one/DSC03649-4076.JPG'),
        require('../../images/slideshow/one/DSCF2205.jpg'),
        require('../../images/slideshow/one/DSCF2224.jpg'),
        require('../../images/slideshow/one/DSCF2229.jpg'),
        require('../../images/slideshow/one/DSCF2247.jpg'),
        require('../../images/slideshow/one/DSCN0319.JPG'),
        require('../../images/slideshow/one/DSCN0322.JPG'),
        require('../../images/slideshow/one/Eclipse2017.jpg'),
        require('../../images/slideshow/one/EntrepreneuroftheYear2012.jpg'),
        require('../../images/slideshow/one/ESTO_AWARD-847.jpg'),
        require('../../images/slideshow/one/F_Day_2015_Pop_Up_Party_Tech_Table_(23Sept15).jpg'),
        require('../../images/slideshow/one/FD_NATIVE_3-573.jpg'),
        require('../../images/slideshow/one/FD_VML_KC_3-570.jpg'),
        require('../../images/slideshow/one/FD_VML_KC_4-574.jpg'),
        require('../../images/slideshow/one/FD_VML_KC_7-577.jpg'),
        require('../../images/slideshow/one/FD_VML_KZOO_2-568.jpg'),
        require('../../images/slideshow/one/FD_VML_SEATTLE-566.jpg'),
        require('../../images/slideshow/one/fernando.jpg'),
        require('../../images/slideshow/one/FI_9926-842.jpg'),
        require('../../images/slideshow/one/file.jpeg'),
        require('../../images/slideshow/one/file1.jpeg'),
        require('../../images/slideshow/one/file2.jpeg'),
        require('../../images/slideshow/one/file3.jpeg'),
        require('../../images/slideshow/one/file4.jpeg'),
        require('../../images/slideshow/one/file5.jpeg'),
        require('../../images/slideshow/one/Fishbowl_Band_Main.JPG'),
        require('../../images/slideshow/one/FOT6821.jpg'),
        require('../../images/slideshow/one/Foundation_Day_2015_Pop_Up_Happy_Hour-677.jpg'),
        require('../../images/slideshow/one/FullSizeRender-837.jpg'),
        require('../../images/slideshow/one/FullSizeRender[1]-850.jpg'),
        require('../../images/slideshow/one/GarfieldPark1-4084.JPG'),
        require('../../images/slideshow/one/GILDASHOUSE1-4088.jpg'),
        require('../../images/slideshow/one/GlobalCreative2012.jpg'),
        require('../../images/slideshow/one/GlobalCreativeLeadershipRetreat2016.jpg'),
        require('../../images/slideshow/one/GlobalSisterCitiesSwap_London.jpg'),
        require('../../images/slideshow/one/GreaterKCDay-261.JPG'),
        require('../../images/slideshow/one/Hackathon_Team_3.jpg'),
        require('../../images/slideshow/one/HFTCredfusegroup-256.jpg'),
        require('../../images/slideshow/one/image[2].jpeg'),
        require('../../images/slideshow/one/image2.JPG'),
        require('../../images/slideshow/one/image4.JPG'),
        require('../../images/slideshow/one/IMD3-4082.JPG'),
        require('../../images/slideshow/one/IMG_0023_copy.JPG'),
        require('../../images/slideshow/one/IMG_0023.JPG'),
        require('../../images/slideshow/one/IMG_0069.jpg'),
        require('../../images/slideshow/one/IMG_0123.jpg'),
        require('../../images/slideshow/one/IMG_0155.jpg'),
        require('../../images/slideshow/one/IMG_0156.JPG'),
        require('../../images/slideshow/one/IMG_0288.jpg'),
        require('../../images/slideshow/one/IMG_0402-287.JPG'),
        require('../../images/slideshow/one/IMG_0431.jpg'),
        require('../../images/slideshow/one/IMG_0451.jpg'),
        require('../../images/slideshow/one/IMG_0490.jpg'),
        require('../../images/slideshow/one/IMG_0521.jpg'),
        require('../../images/slideshow/one/IMG_0526-683.JPG'),
        require('../../images/slideshow/one/IMG_0562-686.JPG'),
        require('../../images/slideshow/one/IMG_0567.jpg'),
        require('../../images/slideshow/one/IMG_0570.jpg'),
        require('../../images/slideshow/one/IMG_0577.jpg'),
        require('../../images/slideshow/one/IMG_0601.jpg'),
        require('../../images/slideshow/one/IMG_0611.jpg'),
        require('../../images/slideshow/one/IMG_0618.jpg'),
        require('../../images/slideshow/one/IMG_0712.jpg'),
        require('../../images/slideshow/one/IMG_0737.jpg'),
        require('../../images/slideshow/one/IMG_0787.jpg'),
        require('../../images/slideshow/one/IMG_0845.jpg'),
        require('../../images/slideshow/one/IMG_0854.jpg'),
        require('../../images/slideshow/one/IMG_1023.jpg'),
        require('../../images/slideshow/one/IMG_1043.jpg'),
        require('../../images/slideshow/one/IMG_1069.jpg'),
        require('../../images/slideshow/one/IMG_1090.jpg'),
        require('../../images/slideshow/one/IMG_1106.jpg'),
        require('../../images/slideshow/one/IMG_1109.jpg'),
        require('../../images/slideshow/one/IMG_1111-289.jpg'),
        require('../../images/slideshow/one/IMG_1116.jpg'),
        require('../../images/slideshow/one/IMG_1134.jpg'),
        require('../../images/slideshow/one/IMG_1145.jpg'),
        require('../../images/slideshow/one/IMG_1196.jpg'),
        require('../../images/slideshow/one/IMG_1381.JPG'),
        require('../../images/slideshow/one/IMG_1386.JPG'),
        require('../../images/slideshow/one/IMG_1393.JPG'),
        require('../../images/slideshow/one/IMG_1404.JPG'),
        require('../../images/slideshow/one/IMG_1412.JPG'),
        require('../../images/slideshow/one/IMG_1432-small-346.jpg'),
        require('../../images/slideshow/one/IMG_1437.JPG'),
        require('../../images/slideshow/one/IMG_2122[1]-785.jpeg'),
        require('../../images/slideshow/one/IMG_2123[1]-784.jpeg'),
        require('../../images/slideshow/one/IMG_2342.jpg'),
        require('../../images/slideshow/one/IMG_2360.JPG'),
        require('../../images/slideshow/one/IMG_2365.JPG'),
        require('../../images/slideshow/one/IMG_2638-546.jpg'),
        require('../../images/slideshow/one/IMG_2682-543.jpg'),
        require('../../images/slideshow/one/IMG_2708-small-548.jpg'),
        require('../../images/slideshow/one/IMG_2853-544.jpg'),
        require('../../images/slideshow/one/IMG_3106_2.jpg'),
        require('../../images/slideshow/one/IMG_3292_2.jpg'),
        require('../../images/slideshow/one/IMG_3347.jpg'),
        require('../../images/slideshow/one/IMG_3415-541.jpg'),
        require('../../images/slideshow/one/IMG_3451.jpg'),
        require('../../images/slideshow/one/IMG_3474.JPG'),
        require('../../images/slideshow/one/IMG_3476.JPG'),
        require('../../images/slideshow/one/IMG_3483.jpg'),
        require('../../images/slideshow/one/IMG_3488.JPG'),
        require('../../images/slideshow/one/IMG_3489.JPG'),
        require('../../images/slideshow/one/IMG_3491.JPG'),
        require('../../images/slideshow/one/IMG_3498.JPG'),
        require('../../images/slideshow/one/IMG_3503.JPG'),
        require('../../images/slideshow/one/IMG_3527-547.JPG'),
        require('../../images/slideshow/one/IMG_4061.jpg'),
        require('../../images/slideshow/one/IMG_4149.jpg'),
        require('../../images/slideshow/one/IMG_4311[1].JPG'),
        require('../../images/slideshow/one/IMG_4505-4101.JPG'),
        require('../../images/slideshow/one/IMG_4661-720.JPG'),
        require('../../images/slideshow/one/IMG_4662-723.JPG'),
        require('../../images/slideshow/one/IMG_5166.JPG'),
        require('../../images/slideshow/one/IMG_5236.JPG'),
        require('../../images/slideshow/one/IMG_5496.JPG'),
        require('../../images/slideshow/one/IMG_5585-682.jpg'),
        require('../../images/slideshow/one/IMG_5704-filtered-925.jpeg'),
        require('../../images/slideshow/one/IMG_6057.jpg'),
        require('../../images/slideshow/one/IMG_6221-4078.JPG'),
        require('../../images/slideshow/one/IMG_6266.JPG'),
        require('../../images/slideshow/one/IMG_6708.JPG'),
        require('../../images/slideshow/one/IMG_6814.JPG'),
        require('../../images/slideshow/one/IMG_6821.JPG'),
        require('../../images/slideshow/one/IMG_6945.JPG'),
        require('../../images/slideshow/one/IMG_6952.JPG'),
        require('../../images/slideshow/one/IMG_6968-722.JPG'),
        require('../../images/slideshow/one/IMG_7178[2]-806.JPG'),
        require('../../images/slideshow/one/IMG_7279-small-311.jpg'),
        require('../../images/slideshow/one/IMG_7393[1]-865.JPG'),
        require('../../images/slideshow/one/IMG_7400_2-400.jpg'),
        require('../../images/slideshow/one/IMG_7472-small-864.jpg'),
        require('../../images/slideshow/one/IMG_7557-small-816.jpg'),
        require('../../images/slideshow/one/IMG_7560-small-822.jpg'),
        require('../../images/slideshow/one/IMG_7567-small-1074.jpg'),
        require('../../images/slideshow/one/IMG_7585-small-833.jpg'),
        require('../../images/slideshow/one/IMG_7609-small-838.jpg'),
        require('../../images/slideshow/one/IMG_7628.jpg'),
        require('../../images/slideshow/one/IMG_7641.jpg'),
        require('../../images/slideshow/one/IMG_7648.jpg'),
        require('../../images/slideshow/one/IMG_7673.jpg'),
        require('../../images/slideshow/one/IMG_7689.jpg'),
        require('../../images/slideshow/one/IMG_7732.jpg'),
        require('../../images/slideshow/one/IMG_7930[3].JPG'),
        require('../../images/slideshow/one/IMG_8275-351.jpg'),
        require('../../images/slideshow/one/IMG_8318.jpg'),
        require('../../images/slideshow/one/IMG_8463-873.JPG'),
        require('../../images/slideshow/one/IMG_8465-803.JPG'),
        require('../../images/slideshow/one/IMG_8470_2-866.JPG'),
        require('../../images/slideshow/one/IMG_8571-874.JPG'),
        require('../../images/slideshow/one/IMG_8697.JPG'),
        require('../../images/slideshow/one/IMG_8731.JPG'),
        require('../../images/slideshow/one/IMG_8761.JPG'),
        require('../../images/slideshow/one/IMG_8815-792.jpg'),
        require('../../images/slideshow/one/IMG_8866-102.jpg'),
        require('../../images/slideshow/one/IMG_8873-104.jpg'),
        require('../../images/slideshow/one/IMG_8968-105.jpg'),
        require('../../images/slideshow/one/IMG_9066[3].JPG'),
        require('../../images/slideshow/one/IMG_20170201_164142[1]-798.jpg'),
        require('../../images/slideshow/one/jon_and_eric.jpg'),
        require('../../images/slideshow/one/Jon-Cook-desk.jpg'),
        require('../../images/slideshow/one/JonCooks20Years.jpg'),
        require('../../images/slideshow/one/KC_HOLIDAY_PARTY_7-679.jpg'),
        require('../../images/slideshow/one/KC_HOLIDAY_PARTY-618.jpg'),
        require('../../images/slideshow/one/KCAward2012Group.jpg'),
        require('../../images/slideshow/one/KCCC_8.jpg'),
        require('../../images/slideshow/one/kcusmmerparty2.jpg'),
        require('../../images/slideshow/one/London_Crisis_Run_1_27Sept13-263.jpg'),
        require('../../images/slideshow/one/melb_cup_photos.png'),
        require('../../images/slideshow/one/Milestone_Launch4.0-801.JPG'),
        require('../../images/slideshow/one/News_1440x800.jpg'),
        require('../../images/slideshow/one/OS0C0899.jpg'),
        require('../../images/slideshow/one/OS0C0904.jpg'),
        require('../../images/slideshow/one/OS0C1125.jpg'),
        require('../../images/slideshow/one/OS0C1138.jpg'),
        require('../../images/slideshow/one/OS0C1164.jpg'),
        require('../../images/slideshow/one/OS0C1868.jpg'),
        require('../../images/slideshow/one/OS0C1938.jpg'),
        require('../../images/slideshow/one/OS0C1987.jpg'),
        require('../../images/slideshow/one/OS0C2009.jpg'),
        require('../../images/slideshow/one/OS0C3434.jpg'),
        require('../../images/slideshow/one/OS0C4422-314.jpg'),
        require('../../images/slideshow/one/OS0C5084.jpg'),
        require('../../images/slideshow/one/OS0C5478.jpg'),
        require('../../images/slideshow/one/OS0C7721.jpg'),
        require('../../images/slideshow/one/OS0C7812.jpg'),
        require('../../images/slideshow/one/OS0C9206.jpg'),
        require('../../images/slideshow/one/Our_Work_2_1440x800.jpg'),
        require('../../images/slideshow/one/Our_Work_1440x800.jpg'),
        require('../../images/slideshow/one/Parade03.JPG'),
        require('../../images/slideshow/one/Parade04.JPG'),
        require('../../images/slideshow/one/Parade05.JPG'),
        require('../../images/slideshow/one/party1-516.jpg'),
        require('../../images/slideshow/one/party003-518.jpg'),
        require('../../images/slideshow/one/pasted-image-4117.jpg'),
        require('../../images/slideshow/one/photo_2-4104.JPG'),
        require('../../images/slideshow/one/photo_2.JPG'),
        require('../../images/slideshow/one/photo_6.JPG'),
        require('../../images/slideshow/one/PMH_5763.JPG'),
        require('../../images/slideshow/one/PMH_5767.JPG'),
        require('../../images/slideshow/one/PMH_5778.JPG'),
        require('../../images/slideshow/one/PMH_5788.JPG'),
        require('../../images/slideshow/one/PMH_5796.JPG'),
        require('../../images/slideshow/one/PMH_5817.JPG'),
        require('../../images/slideshow/one/PMH_5840.JPG'),
        require('../../images/slideshow/one/PMH_5881.JPG'),
        require('../../images/slideshow/one/PMH_6793.JPG'),
        require('../../images/slideshow/one/Scan-3.jpeg'),
        require('../../images/slideshow/one/Scan-4.jpeg'),
        require('../../images/slideshow/one/Scan-13.jpeg'),
        require('../../images/slideshow/one/Scan.jpeg'),
        require('../../images/slideshow/one/Scan2.jpeg'),
        require('../../images/slideshow/one/Scan3.jpeg'),
        require('../../images/slideshow/one/Scan4.jpeg'),
        require('../../images/slideshow/one/Scan6.jpeg'),
        require('../../images/slideshow/one/Scan7.jpeg'),
        require('../../images/slideshow/one/Scan8.jpeg'),
        require('../../images/slideshow/one/Scan9.jpg'),
        require('../../images/slideshow/one/Scan94.jpeg'),
        require('../../images/slideshow/one/Scan95.jpeg'),
        require('../../images/slideshow/one/Scan96.jpeg'),
        require('../../images/slideshow/one/Scan97.jpeg'),
        require('../../images/slideshow/one/Scan98.jpeg'),
        require('../../images/slideshow/one/Scan99.jpeg'),
        require('../../images/slideshow/one/Scan100.jpeg'),
        require('../../images/slideshow/one/SitStayRead1-4080.jpg'),
        require('../../images/slideshow/one/SocialMediaDay4-711.jpg'),
        require('../../images/slideshow/one/Summer_Party-681.jpg'),
        require('../../images/slideshow/one/summerpartycrew-4108.jpeg'),
        require('../../images/slideshow/one/tailgate3.jpg'),
        require('../../images/slideshow/one/tailgate4.jpg'),
        require('../../images/slideshow/one/Team2-797.jpeg'),
        require('../../images/slideshow/one/TEDxKC1.jpg'),
        require('../../images/slideshow/one/TEDxKC2.jpg'),
        require('../../images/slideshow/one/TEDxKC3.jpg'),
        require('../../images/slideshow/one/TEDxKC5.jpg'),
        require('../../images/slideshow/one/TEDxKC6.jpg'),
        require('../../images/slideshow/one/TEDxKC8.jpg'),
        require('../../images/slideshow/one/TEDxKC9.jpg'),
        require('../../images/slideshow/one/TEDxKC10.jpg'),
        require('../../images/slideshow/one/TEDxKC11.jpg'),
        require('../../images/slideshow/one/TEDxKC12.jpg'),
        require('../../images/slideshow/one/TEDxKC13.jpg'),
        require('../../images/slideshow/one/TEDxKC14.jpg'),
        require('../../images/slideshow/one/TEDxKC16.jpg'),
        require('../../images/slideshow/one/TEDxKC17.jpg'),
        require('../../images/slideshow/one/TMMAdoption-804.jpg'),
        require('../../images/slideshow/one/tn2.jpeg'),
        require('../../images/slideshow/one/Union_Station_Demo_Day_Jon_Adam_Josh_Maria_(23Oct14).jpg'),
        require('../../images/slideshow/one/Unknown-1-597.jpeg'),
        require('../../images/slideshow/one/USA_Soccer_Watch_Party_(1).jpg'),
        require('../../images/slideshow/one/USA_Soccer_Watch_Party_(12).jpg'),
        require('../../images/slideshow/one/VML_Attendees_with_KCB_rep.jpg'),
        require('../../images/slideshow/one/VML_Australia_State_of_Origin_NRL_Mission_Control.jpg'),
        require('../../images/slideshow/one/VML_CITIES.jpg'),
        require('../../images/slideshow/one/VML_Day_at_the_K-685.jpg'),
        require('../../images/slideshow/one/VML_SAO_PAULO,_BRAZIL-157.jpg'),
        require('../../images/slideshow/one/VML-17.1.png'),
        require('../../images/slideshow/one/VML-17.2.png'),
        require('../../images/slideshow/one/VML-17.png'),
        require('../../images/slideshow/one/VML-freda.jpg'),
        require('../../images/slideshow/one/VMLChina.jpg'),
        require('../../images/slideshow/one/VMLChina2.jpg'),
        require('../../images/slideshow/one/VMLChina3.jpg'),
        require('../../images/slideshow/one/VMLChina4.jpg'),
        require('../../images/slideshow/one/VMLDayatTheK_1_13Jul14.JPG'),
        require('../../images/slideshow/one/VMLDayatTheK_2_13Jul14.JPG'),
        require('../../images/slideshow/one/VMLDayatTheK_3_13Jul14.JPG'),
        require('../../images/slideshow/one/VMLDayatTheK_4_13Jul14.JPG'),
        require('../../images/slideshow/one/VMLDayatTheK_6_13Jul14.JPG'),
        require('../../images/slideshow/one/VMLDayatTheK_13Jul14.JPG'),
        require('../../images/slideshow/one/VMLNewYorkSign.jpg'),
        require('../../images/slideshow/one/VMLo_2015_Tech_Dudes_(1May15)-678.jpg'),
        require('../../images/slideshow/one/VMLqaisjohnmike.jpg'),
        require('../../images/slideshow/one/VMLWest2.jpg'),
        require('../../images/slideshow/one/WendyArriving.jpg'),
        require('../../images/slideshow/one/WendysAtBoulevard.JPG'),
        require('../../images/slideshow/one/wendysHolidayParty.jpg'),
        require('../../images/slideshow/one/WendysShoot.JPG'),
        require('../../images/slideshow/one/WendysShoot2.JPG'),
        require('../../images/slideshow/one/What_We_Do_1440x800.jpg'),
        require('../../images/slideshow/one/Who_We_Are_1440x800.jpg'),
        require('../../images/slideshow/one/WinningWendys.jpg'),
        require('../../images/slideshow/one/Women_at_VML_Port_Plug_In_Panelists_(11June15)-600.jpg'),
        require('../../images/slideshow/one/Women@VML_Wine_Main.JPG'),


        require('../../images/slideshow/one/PMH_6778.JPG'),
        require('../../images/slideshow/one/PMH_6878.JPG'),
        require('../../images/slideshow/one/PMH_6890.JPG'),
        require('../../images/slideshow/one/PMH_7048.JPG'),
        require('../../images/slideshow/one/PMH_7051.JPG'),
        require('../../images/slideshow/one/PMH_7153.JPG'),
        require('../../images/slideshow/one/PMH_7303.JPG'),
        require('../../images/slideshow/one/HolidayParty16.JPG'),
        require('../../images/slideshow/one/HolidayParty09.JPG'),
        require('../../images/slideshow/one/HolidayParty07.JPG'),
        require('../../images/slideshow/one/HolidayParty04.JPG'),
        require('../../images/slideshow/one/HolidayParty14.JPG'),
        require('../../images/slideshow/one/Jazzoo01.jpg'),
        require('../../images/slideshow/one/MAnthony&JMcGuigan.JPG'),
        require('../../images/slideshow/one/PSDDept004.jpeg'),
        
        
        require('../../images/slideshow/one/Scan_91.jpeg'),
        require('../../images/slideshow/one/Scan_1.jpeg'),
        require('../../images/slideshow/one/Scan_9.jpeg'),
        require('../../images/slideshow/one/Scan_26.jpeg'),
        require('../../images/slideshow/one/Scan_33.jpeg'),
        require('../../images/slideshow/one/Scan_34.jpeg'),
        require('../../images/slideshow/one/Scan_35.jpeg'),
        require('../../images/slideshow/one/Scan_37.jpeg'),
        require('../../images/slideshow/one/Scan_51.jpeg'),
        require('../../images/slideshow/one/Scan_59.jpeg'),
        require('../../images/slideshow/one/Scan_80.jpeg'),
        require('../../images/slideshow/one/Scan_82.jpeg'),
        require('../../images/slideshow/one/Scan_90.jpeg'),
        require('../../images/slideshow/one/Scan_99.jpeg'),
        require('../../images/slideshow/one/Scan_112.jpeg'),
        require('../../images/slideshow/one/Scan_115.jpeg'),
        require('../../images/slideshow/one/Scan_127.jpeg'),
        require('../../images/slideshow/one/Scan_128.jpeg'),
        require('../../images/slideshow/one/Scan_138.jpeg'),
        

    ],


    todos: [
      { 
        id: 1, 
        text: 'blah blah 1', 
        done: true ,
        images: [
          require('../../images/2-Heritage-alexa-25.002.jpg'),
          require('../../images/vmlsizzle1.jpg'),
          require('../../images/careers_02.jpg'),
          require('../../images/4-Heritage-alexa-25.004.jpg'),
          require('../../images/3-Heritage-alexa-25.003.jpg')
        ]
        
      },
      { 
        id: 2, 
        text: 'blah blah 2', 
        done: false 
      }
    ],
    users: {
      1234: { name: 'AJ', topics: [123, 321] }, // ids as keys
      46473: { name: 'Tom', topics: [345, 3456] } // keep only ids of nested items.
    },
    userList: [46473, 1234],
    topics: { // nested items have a collection at the top-level as well  -> no nesting.
      345: { title: 'dwarf' }, 
      3456: { title: 'time' }, 
      123: { title: 'backroom' }, 
      321: { title: 'frontroom' }, 
    },
    questionDetails: [
      {
        question: 1,
        images: [
          require('../../images/questions/01/1-Heritage-alexa-25.001.jpeg')
        ]
      },
      {
        question: 2,
        images: [
          require('../../images/questions/02/2-Heritage-alexa-25.002.jpeg')
        ],
        video: [
          require('../../images/questions/02/BucketBoysEdit.mp4')
        ]
      },
      {
        question: 3,
        images: [
          require('../../images/questions/03/3-Heritage-alexa-25.003.jpeg')
        ]
      },
      {
        question: 4,
        images: [
          require('../../images/questions/04/4-Heritage-alexa-25.004.jpeg')
        ]
      },
      {
        question: 5,
        images: [
          require('../../images/questions/05/5-Heritage-alexa-25.005.jpeg')
        ]
      },
      {
        question: 6,
        special: [require('../../images/questions/06/Heritage-alexa-25.006.jpeg')],
        images: [
          require('../../images/questions/06/Heritage-alexa-25.007.jpeg'),
          require('../../images/questions/06/Heritage-alexa-25.008.jpeg'),
          require('../../images/questions/06/Heritage-alexa-25.009.jpeg'),
          require('../../images/questions/06/Heritage-alexa-25.010.jpeg'),
          require('../../images/questions/06/Heritage-alexa-25.011.jpeg'),
          require('../../images/questions/06/Heritage-alexa-25.012.jpeg')
        ]
      },
      {
        question: 7,
        images: [
          
          require('../../images/questions/07/Heritage-alexa-25.014.jpeg'),
          require('../../images/questions/07/Heritage-alexa-25.015.jpeg'),
          require('../../images/questions/07/Heritage-alexa-25.017.jpeg'),
          require('../../images/questions/07/Heritage-alexa-25.018.jpeg'),
          require('../../images/questions/07/Heritage-alexa-25.019.jpeg'),
          require('../../images/questions/07/Heritage-alexa-25.013.jpeg'),
        ]
      },
      {
        question: 8,
        images: [
          
        ],
        video: [
          //require('../../images/questions/08/vmlsizzle1.mp4')
          require('../../images/questions/08/sizzle-edit.mp4')
        ]
      },
      {
        question: 9,
        images: [
          
        ],
        video: [
          require('../../images/questions/09/VML-campaign-alexa.mp4')
        ]
      },
      {
        question: 10,
        images: [
          require('../../images/questions/10/10-Heritage-alexa.gif')
        ]
      },
      {
        question: 11,
        images: [
          require('../../images/questions/11/Heritage-alexa-25.028.jpeg'),
          require('../../images/questions/11/Heritage-alexa-25.029.jpeg'),
          require('../../images/questions/11/Heritage-alexa-25.030.jpeg'),
          require('../../images/questions/11/Heritage-alexa-25.031.jpeg'),
          require('../../images/questions/11/Heritage-alexa-25.032.jpeg'),
          require('../../images/questions/11/Heritage-alexa-25.033.jpeg'),
          require('../../images/questions/11/Heritage-alexa-25.034.jpeg'),
          require('../../images/questions/11/Heritage-alexa-25.035.jpeg'),
          require('../../images/questions/11/Heritage-alexa-25.036.jpeg'),
          require('../../images/questions/11/Heritage-alexa-25.037.jpeg'),
          require('../../images/questions/11/Heritage-alexa-25.038.jpeg'),
          require('../../images/questions/11/Heritage-alexa-25.039.jpeg')
        ]
      },
      {
        question: 12, //video
        images: [
          
        ],
        video: [
          //require('../../videos/vmlsizzle1.mp4'),
          require('../../images/questions/12/OneWord-01.mp4')
        ]
      },
      {
        question: 13,
        images: [
            require('../../images/questions/13/VML-founders-alexa.001.jpeg')
        ]
      },
      {
        question: 14,
        images: [
          require('../../images/questions/14/Heritage-alexa-25.042.jpeg')
        ]
      },
      {
        question: 15,
        images: [
          
        ],
        video: [
          require('../../images/questions/15/Mail-02.mp4')
        ]
      },
      {
        question: 16,
        images: [
          require('../../images/questions/16/Heritage-alexa-25.045.jpeg')
        ]
      },
      {
        question: 17,
        images: [
          require('../../images/questions/17/17-Heritage-alexa-25.026.jpeg')
        ]
      },
      {
        question: 18,
        images: [
          require('../../images/questions/18/Heritage-alexa-25.048.jpeg')
        ]
      },
      {
        question: 19,
        images: [
          require('../../images/questions/19/pour.gif'),
        ]
      },
      {
        question: 20,
        images: [
          require('../../images/questions/20/Heritage-alexa-25.050.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.051.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.052.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.053.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.054.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.055.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.056.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.057.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.058.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.059.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.060.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.061.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.062.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.063.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.064.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.065.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.066.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.067.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.068.jpeg'),
          require('../../images/questions/20/Heritage-alexa-25.069.jpeg')
        ]
      },
      {
        question: 21,
        images: [
          
          require('../../images/questions/21/21-Heritage-alexa-25.030.jpeg'),
        ]
      },
      {
        question: 22,
        images: [
          require('../../images/questions/22/Heritage-alexa-25.001.jpeg'),
          require('../../images/questions/22/Heritage-alexa-25.002.jpeg'),
          require('../../images/questions/22/Heritage-alexa-25.003.jpeg'),
          require('../../images/questions/22/Heritage-alexa-25.004.jpeg'),
          require('../../images/questions/22/Heritage-alexa-25.005.jpeg'),
          require('../../images/questions/22/Heritage-alexa-25.006.jpeg')
        ]
      },
      {
        question: 23,
        images: [
          require('../../images/questions/23/23-Heritage-alexa-25.032.jpeg'),
        ]
      },
      {
        question: 24,
        images: [
         
          require('../../images/questions/24/24-Heritage-alexa-25.033.jpeg'),
        ]
      },
      {
        question: 25,
        images: [
          
        ],
        video: [
          require('../../images/questions/25/InnovationQ-02.mp4'),
        ]
      },
      {
        question: 26,
        images: [
          require('../../images/questions/26/vml-founders-q.001.jpeg'),
          require('../../images/questions/26/vml-founders-q.002.jpeg'),
          require('../../images/questions/26/vml-founders-q.003.jpeg'),
          require('../../images/questions/26/vml-founders-q.004.jpeg'),
          require('../../images/questions/26/vml-founders-q.005.jpeg'),
          require('../../images/questions/26/vml-founders-q.006.jpeg'),
          require('../../images/questions/26/vml-founders-q.007.jpeg'),
          require('../../images/questions/26/vml-founders-q.008.jpeg')
        ],
        video: [
          
        ]
      }

    ],
    currentNumber: 0,
    timer: null,
    show: true,
    showMessage: false
};

export default {
  namespaced: true,
  actions,
  getters,
  state,
  mutations
};
