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