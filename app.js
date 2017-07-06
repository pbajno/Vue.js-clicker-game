new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false,
        rotation: 0,
        shout: false,
        quote: 'Pick a quote',
        quotes: [
            "Good!",
            "You can win this!",
            "Aim straight!",
            "I bet for you my money!",
            "You're the next Rocky Balboa",
            "Finish it!",
            "You can be the champion!"
        ]
    },
    methods: {
        /*
            General data operations
        */
        getRandomNumber: function(min, max) {
            return Math.floor(Math.random() * (max -min +1)) + min;
        },
        punch: function(){
            if(!this.ended) {
                this.health -= this.getRandomNumber(5,10);
                if(this.health <= 0){
                    this.health = 0;
                    this.ended = true;
                }
                this.rotation = this.getRandomNumber(-45, 45);
                this.shout = !this.shout;
                this.random = Math.floor(Math.random() * this.quotes.length);  
                this.quote = this.quotes[this.random];
            }
        },
        restart: function(){
            this.health = 100;
            this.ended = false;
        },
        /*
            Animations
        */
        beforeEnter: function (el) {
            el.style.opacity = 0
        },
        enter: function (el, done) {
            Velocity(el, { opacity: 1, fontSize: '1.5em' }, { duration: 150 })
            Velocity(el, { fontSize: '2em' }, { complete: done })
            Velocity(el, {
                rotateZ: this.getRandomNumber(-45,45) + 'deg',
                translateY: this.getRandomNumber(10,30) + 'px',
                translateX: this.getRandomNumber(10,30) + 'px',
                opacity: 0
            }, { complete: done })
            this.shout = !this.shout;
        },
        leave: function (el, done) {
            Velocity(el, {
                translateX: this.getRandomNumber(10,15) + 'px',
                rotateZ: this.getRandomNumber(40,50) + 'deg'
            }, { duration: 200 })
            Velocity(el, { rotateZ: this.getRandomNumber(80,100) + 'deg' }, { loop: 2 })
        }
    },
    computed: { }
});