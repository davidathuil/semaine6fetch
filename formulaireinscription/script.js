/**
 * Composant racine
 */

   
 
const RootComponent = {
  /* Data properties */
  data() {
    return {
      login:"",
      password:"",
      logina:"",
      counter:0,
      birthdate:""

    };
  },
  computed:{
    Nbrlogin(){
      return this.login.length;

  },

  age(){
    // let ageT=new Date() - new Date(this.birthdate);
    // return ageT
    var today = new Date();
    var birthDate = new Date(this.birthdate); 
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth(); 
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { age--; } 
    return age;


  }


},

  /* Methodes */
  methods: {
    /* Changement du texte */
    changeText(e) {
      let name = e.target.name;
      this[name] = e.target.value;
      
    },
    
    shiftcount(e){
      this.counter += 1;
      // alert(this.counter)
    }
   
  },
};

/**
 * Instance d'app montée
 */
Vue.createApp(RootComponent).mount("#root");




