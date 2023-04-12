const {createApp} = Vue;

createApp({
  data(){
    return{
      messaggio: 'ciao',
      immagine: './img/pizza-napoli.jpg'
    }
    
  }
}).mount('#app')