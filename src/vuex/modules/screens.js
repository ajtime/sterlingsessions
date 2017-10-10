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
    textResponse1: 'VMLs first client was Olathe Daily News, but the founders say they really felt like they made it when VML won over Northwest Airlines.',
    items: [],
    speaker: false,
    channelHeaders: [],
    channels: [],
    errorQuestionTitle: null,
    errorQuestionMessage: null,
    testImage2: require('../../images/2-Heritage-alexa-25.002.jpg'),
    testImage: require('../../images/questions/19/pour.gif'),
    testTimeSeconds: 25,
    testVideo: require('../../videos/vmlsizzle1.mp4'),
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
          require('../../images/questions/25/InnovationQ.mp4'),
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
