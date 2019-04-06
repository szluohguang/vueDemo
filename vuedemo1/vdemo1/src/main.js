import Vue from 'vue'
// import App from './App.vue'

new Vue({
  el: '#app',
  data: {
    message : 'hello world!',
    seen: false,
    
    todos: [
      { text: "学习vue"},
      { text: "学习java"},
      { text: "学习英语"}
    ]
  }
//  render: h => h(App)
})
