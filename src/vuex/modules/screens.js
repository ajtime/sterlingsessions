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
    // testImage2: require('../../images/2-Heritage-alexa-25.002.jpg'),
    // testImage: require('../../images/questions/19/pour.gif'),
    testTimeSeconds: 25,
    //testVideo: require('../../videos/vmlsizzle1.mp4'),
    images: [
      require('../../images/questions/01/1-Heritage-alexa-25.001.jpeg'),
      require('../../images/questions/03/3-Heritage-alexa-25.003.jpeg'),
      require('../../images/questions/07/Heritage-alexa-25.014.jpeg'),
      require('../../images/questions/07/Heritage-alexa-25.015.jpeg'),
      require('../../images/questions/07/Heritage-alexa-25.016.jpeg'),
      require('../../images/questions/11/Heritage-alexa-25.032.jpeg'),
      require('../../images/questions/11/Heritage-alexa-25.033.jpeg'),
      require('../../images/questions/11/Heritage-alexa-25.034.jpeg'),
      require('../../images/questions/11/Heritage-alexa-25.035.jpeg'),
      require('../../images/questions/11/Heritage-alexa-25.036.jpeg'),
      require('../../images/questions/20/Heritage-alexa-25.051.jpeg'),
      require('../../images/questions/20/Heritage-alexa-25.052.jpeg'),
      require('../../images/questions/20/Heritage-alexa-25.053.jpeg'),
      require('../../images/questions/20/Heritage-alexa-25.054.jpeg'),
      require('../../images/questions/20/Heritage-alexa-25.055.jpeg'),
      require('../../images/questions/20/Heritage-alexa-25.056.jpeg'),
      require('../../images/questions/20/Heritage-alexa-25.057.jpeg'),
      require('../../images/questions/20/Heritage-alexa-25.058.jpeg'),
      require('../../images/questions/20/Heritage-alexa-25.059.jpeg'),
    ],
    slideshowimages: [
        require('../../images/slideshow/_MG_0229-103.jpg'),
        require('../../images/slideshow/_MG_0818.jpg'),
        require('../../images/slideshow/_MG_0927.jpg'),
        require('../../images/slideshow/_MG_1031.jpg'),
        require('../../images/slideshow/_MG_1110.jpg'),
        require('../../images/slideshow/_MG_1111.jpg'),
        require('../../images/slideshow/_MG_1303.jpg'),
        require('../../images/slideshow/_MG_8556.jpg'),
        require('../../images/slideshow/_MG_9208.jpg'),
        require('../../images/slideshow/_MG_9224.jpg'),
        require('../../images/slideshow/_MG_9835.JPG'),
        require('../../images/slideshow/_MG_9858.JPG'),
        require('../../images/slideshow/_MG_9861.JPG'),
        require('../../images/slideshow/0L1B4200.jpg'),
        require('../../images/slideshow/1ea717ea0ee111e2a62d1231380fd04a_7.jpg'),
        require('../../images/slideshow/011.jpg'),
        require('../../images/slideshow/11YR19315.jpg'),
        require('../../images/slideshow/25Hands.jpg'),
        require('../../images/slideshow/0060_VML_Holiday_121214_4527_Print.jpg.jpg'),
        require('../../images/slideshow/0074_VML_Holiday_121214_4585_Print.jpg'),
        require('../../images/slideshow/0101_VML_Holiday_121214_4681_Print.jpg'),
        require('../../images/slideshow/0127_VML_Holiday_121214_4778_Print.jpg'),
        require('../../images/slideshow/0188_VML_Holiday_121214_4860_Print.jpg'),
        require('../../images/slideshow/0194_VML_Holiday_121214_4998_Print.jpg'),
        require('../../images/slideshow/1992SummerParty.png'),
        require('../../images/slideshow/1992SummerParty2.png'),
        require('../../images/slideshow/2008GroupShot.jpg'),
        require('../../images/slideshow/2009Royals.jpg'),
        require('../../images/slideshow/2011FD.jpg'),
        require('../../images/slideshow/2011Slugger.jpg'),
        require('../../images/slideshow/2014CannesLions.jpg'),
        require('../../images/slideshow/2014CorpChallenge.jpg'),
        require('../../images/slideshow/2014GoldOuting.jpg'),
        require('../../images/slideshow/2017Interns_KC_Airplane.jpg'),
        require('../../images/slideshow/2017shavetosave.jpg'),
        require('../../images/slideshow/10919_10152683845732125_7897104279086167493_n.jpg'),
        require('../../images/slideshow/10169342_10152885117557125_6872498266809216715_n.jpg'),
        require('../../images/slideshow/10411237_10152683845457125_2399139324399163834_n.jpg'),
        require('../../images/slideshow/10446715_10204354196966437_401931690996390300_n.jpg'),
        require('../../images/slideshow/10527900_10152748415837125_1499086268975079795_n.jpg'),
        require('../../images/slideshow/10544354_10152683845742125_3262267466717566827_n.jpg'),
        require('../../images/slideshow/10612817_10152683845477125_4403659478847514406_n.jpg'),
        require('../../images/slideshow/11008506_10153222807699000_313232483512642743_n-625.jpg'),
        require('../../images/slideshow/11167686_10153786828202125_359040104065223106_n-643.jpg'),
        require('../../images/slideshow/11169601_10153374896687125_4709549603039668802_o-633.jpg'),
        require('../../images/slideshow/11218912_10153671364577125_1771260983265779207_n-624.jpg'),
        require('../../images/slideshow/11990577_10153671364352125_6531618473400463790_n-639.jpg'),
        require('../../images/slideshow/12027680_10153723699107125_4560471044560578726_n-635.jpg'),
        require('../../images/slideshow/12052510_10153743530747125_1846959380552631768_o-621.jpg'),
        require('../../images/slideshow/12244657_10153840852387125_4989496715208543304_o-634.jpg'),
        require('../../images/slideshow/13161878_10154277255177125_89115915440716980_o-1195.jpg'),
        require('../../images/slideshow/13503023_1043804729022547_3728893449168605668_o-713.jpg'),
        require('../../images/slideshow/13653411_10209418555197806_4285155143061355303_o.jpg'),
        require('../../images/slideshow/13767248_1072085599511522_1996426512273854549_o-705.jpg'),
        require('../../images/slideshow/13987377_1078756742194012_3884367069038971995_o-717.jpg'),
        require('../../images/slideshow/14241558_10153753713747097_6190917723235891205_o-730.jpg'),
        require('../../images/slideshow/14311374_10210013663395139_6363764088891439275_o.jpg'),
        require('../../images/slideshow/14329938_1117026645033688_5628998728980409437_n-711.jpg'),
        require('../../images/slideshow/14680963_1139150956138319_3827236476074636279_o-708.jpg'),
        require('../../images/slideshow/15440414_10154933222892125_6888422613418020011_o-724.jpg'),
        require('../../images/slideshow/15625853_10154048290052097_802604065127373291_o-733.jpg'),
        require('../../images/slideshow/17349585_10210847440760514_6780965373771634911_o.jpg') 

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
        images: [
          require('../../images/questions/06/Heritage-alexa-25.006.jpeg'),
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
          require('../../images/questions/07/Heritage-alexa-25.013.jpeg'),
          require('../../images/questions/07/Heritage-alexa-25.014.jpeg'),
          require('../../images/questions/07/Heritage-alexa-25.015.jpeg'),
          require('../../images/questions/07/Heritage-alexa-25.016.jpeg'),
          require('../../images/questions/07/Heritage-alexa-25.017.jpeg'),
          require('../../images/questions/07/Heritage-alexa-25.018.jpeg'),
          require('../../images/questions/07/Heritage-alexa-25.019.jpeg')
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
          require('../../images/questions/09/FavoriteCampaigns-02.mp4')
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
