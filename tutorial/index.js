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
        text: 'text'
    },
    methods: {
        // updateText(event){
        //     this.text = event.target.value;
        // },
        submit(){
            alert('submitted')
            console.log('hihihihihi')
        }
    }
});

var app4 = new Vue({ 
    el: '#app4',
    data: {
        message: "안녕하세요"
    },
    methods: {
        changeMessage(){
            this.message = 'seho!!!';
        }
    },
    computed: {
        reversedMessage(){
            return this.message.split('').reverse().join('' )
        }
    }
});

var watch = new Vue({ 
    el: '#watch',
    data: {
        message: "안녕하세요",
        updated: "아니요"
    },
    methods: {
        changeMessage(){
            this.message = 'seho!!!';
        }
    },
    computed: {
        reversedMessage(){
            return this.message.split('').reverse().join('' )
        }
    },
    watch: {
        message(newVal, oldVal) {
            console.log(newVal, oldVal);
            this.updated = "네~!";
        }
    }
});

var cnb = new Vue({ 
    el: '#cnb',
    data: {
        isRed: false,
        isBold: false,
        styleObject: {
            color: 'red',
            fontSize: '30px'
        }
    },
    methods: {
        update(){
            this.isBold = !this.isBold;
            this.isRed = !this.isRed;
        }
    },
    
});