var app = new Vue({
    el: '#app',
    data: {
        gameOn: false,
        myHealth: 100,
        monsterHealth: 100,
        myAttacks: [],
        hisAttacks: [],
        myHeals:[]
    },
    watch: {
        myHealth: function (value) {
            if(value <= 0) {
                alert("perdeu preiboi");
                this.resetGame();
            }
        },
        monsterHealth: function(value) {
            if(value <= 0) {
                alert("ganhou preiboi");
                this.resetGame();
            }
        }
    },
    methods: {
        startGame: function() {
            this.myHealth = 100;
            this.monsterHealth = 100;
            this.gameOn = true;
        },
        attack: function(max) {
            this.attackMe(this.howMuch(max));
            this.attackMonster(this.howMuch(max))
        },
        heal: function(max) {
            this.healMe(this.howMuch(max*2));
            this.attackMe(this.howMuch(max))
        },
        howMuch: function(max) {
          return Math.floor(Math.random() * ++max)
        },
        attackMe: function(howMuch) {
            this.myHealth -= howMuch;
            this.hisAttacks.push(howMuch);
        },
        attackMonster: function(howMuch) {
            this.monsterHealth -= howMuch;
            this.myAttacks.push(howMuch);
        },
        healMe: function (howMuch) {
            this.myHealth += howMuch;
            this.myHeals.push(howMuch);
        },
        resetGame: function() {
            this.gameOn = false;
            this.myHealth = 100;
            this.monsterHealth = 100;
            this.myAttacks = [];
            this.hisAttacks = [];
            this.myHeals = [];
        }
    }
});