new Vue({
  el: "#flashcards-app",
  data: {
    cards:[
      {
        question:"What year was IUPUI founded?",
        answer:"1969",
        category:"history",
        flipped:false
      },
      {
        question:"What is 2+2?",
        answer:"Fish",
        category:"math",
        flipped:false
      },{
        question:"Is mayonnaise an instrument?",
        answer:"No",
        category:"science",
        flipped:false
      }
    ]
  },
  methods:{
    submit: function(){
      this.cards.push({question: this.cards.question, answer: this.cards.answer, category: this.cards.category, flipped:false})
    },
    flipCards: function(item){
      item.flipped = !item.flipped
    }
  }
})