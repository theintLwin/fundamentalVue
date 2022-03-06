const app = Vue.createApp({
     
    data(){
        return {
            books:[ 
                {
                    name:"Don't giving a fuck",
                    author:"Peter Pen",
                    ages:20,
                    img:"imgs/api.png",
                    isFav:true
                }, //books[0].name
                {
                    name:"Book2",
                    author:"Aung Aung",
                    ages:24,
                    img:"imgs/laravel.png",
                    isFav:true
                },
                {
                    name:"Book3",
                    author:"Hla Hla",
                    ages:28,
                    img:"imgs/react.png",
                    isFav:true
                }
                    ]
           ,
            extra:"NU NU",
            showBook:true,
            link:"http://www.google.com"

        }
    },
    methods:{
       
        clickHandler(book){
            book.isFav= !book.isFav;
        }
    } 


});

app.mount('#app');