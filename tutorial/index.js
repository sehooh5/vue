var app = new Vue({ 
    el: '#app',
    data: {
        person : {
            name: 'seho',
            age: 99
        },
        inputData: 'this is input data',
        type: 'text',
        link: 'https://www.youtube.com/'
    },
    methods: {
        getSehoLink(channel){
          return this.link + channel  
        },
        nextYear(greeting){
            return greeting + '! ' + this.person.name + ' 는 내년에 ' + (this.person.age+1) + ' 살 입니다.'
        },
        otherMethod(){
            this.nextYear();
        }
    }
});

var app2 = new Vue({ 
    el: '#app2',
    data: {
        year: 2021
    },
    methods: {
        plus(){
            this.year++;
        },
        minus(){
            this.year--;
        }
    }
});

var app3 = new Vue({ 
    el: '#app3',
    data: {
    },
    methods: {
        submit(){
            alert('submitted')
            console.log('hihihihihi')
        }
    }
});

