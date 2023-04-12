const {createApp} = Vue;


createApp({
  data(){
    return{
      messaggio: 'ciao pizza',
      immagine: '../img/pizza-napoli.jpg'
    }
    
    
  }
}).mount('#app')

