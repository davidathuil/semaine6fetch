/**
 * Composant racine
 */

   
 
const RootComponent = {
  /* Data properties */
  data() {
    return {
      Recherche:"",
      results: [],
      strDrinkThumb:"",
      strInstructions:"",
      Ingredient1:"",
      Ingredient2  :"",  
      Ingredient3 :"",   
      Ingredient4 :"",   
      Measure1 :"",
      Measure2 :"",
      Measure3:"",
      Measure4:"",

    };
  },

  computed:{
   Newadresse(){
     return "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+this.Recherche+'"'
   }

  },

  




  /* Methodes */
  methods: {
    
    async  Actus() {
      let response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+this.Recherche);
      console.log(response);
      let donnees = await response.json();
      this.results = donnees.drinks;
      // this.strDrinkThumb = donnees.drinks.strDrinkThumb;
      // this.strInstructions = donnees.drinks.strInstructions;
      // this.Ingredient1 = donnees.drinks.Ingredient1;
      // this.Ingredient2 = donnees.drinks.Ingredient2;
      // this.ngredient3 = donnees.drinks.Ingredient3;
      // this.ngredient4 = donnees.drinks.Ingredient4;
      // this.Measure1 = donnees.drinks.Measure1;
      // this.Measure2 = donnees.drinks.Measure2;
      // this.Measure3 = donnees.drinks.Measure3;
      // this.Measure4 = donnees.drinks.Measure4;








      },
    
   
   
  },
};

/**
 * Instance d'app montée
 */
Vue.createApp(RootComponent).mount("#root");





