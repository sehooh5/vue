var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

app.message = '데이터를 바꿔서 화면에 표출했다!!';


var app2 = new Vue({
    el: '#app-2',
    data: {
      message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
    }
})

app2.message = '데이터를 바꿔서 화면에 표출했다!!2222';


var app3 = new Vue({
el: '#app-3',
data: {
    seen: true
}
})

app3.seen = false


var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'JavaScript 배우기' },
        { text: 'Vue 배우기' },
        { text: '무언가 멋진 것을 만들기' }
      ]
    }
})


var app5 = new Vue({
    el: '#app-5',
    data: {
      message: '안녕하세요! Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
})

app5.message = "바꿧지롱~~~~~~!!"


var app6 = new Vue({
    el: '#app-6',
    data: {
      message: '안녕하세요 Vue!'
    }
})

