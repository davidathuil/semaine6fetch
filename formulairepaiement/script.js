/**
 * Composant racine
 */

   
 
const RootComponent = {
  /* Data properties */
  data() {
    return {
      CBInput:"",
      CVCInput:"",
      dateExpInput:"",
      logina:"",

    };
  },

  computed:{
    
    SringCBinputClass(){
     if (String(this.CBInput).length==16) {return "vert"}
      else if(String(this.CBInput).length!==16) {return "rouge"}
    },

    SringCVCInputClass(){
      if (String(this.CBInput).length==3) {return "vert"}
      else if(String(this.CBInput).length!==3) {return "rouge"}
    },
    
    
    dateExpInputValid(){
      let diffDate= new Date().getTime() - new Date(this.dateExpInput).getTime();






      
      return diffDate;
  },

 age(){
    // let ageT=new Date() - new Date(this.birthdate);00
    // return00 ageT
    var today = new Date();
    var dateExpInput = new Date(this.dateExpInput); 
    var age = dateExpInput.getFullYear();
    var m = dateExpInput.getMonth(); 
    // if (m < 0 || (m === 0 && today.getDate() < dateExpInput.getDate())) { age--; } 
    return m;


  }



},


  




  /* Methodes */
  methods: {
    /* Changement du texte */
   
   
  }

};
/**
 * Instance d'app montée
 */
Vue.createApp(RootComponent).mount("#root");




