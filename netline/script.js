/**
 * Composant racine
 */
 const Offres={

  data() {
    return {
      TitresOffres:"DECOUVREZ TRÈS BIENTÔT NOS OFFRES" ,
      DescriptionOffres:"",
      PrixOffres:"A PARTIR DE 9,99€/MOIS",  
    };
  },

  props:{
    
},
  template:
  `
  <div>
    <div class="FondBleu">
    <h3>{{TitresOffres}}</h3>
    <p>{{DescriptionOffres}}</p>
    <p>{{PrixOffres}}</p>
    <button class="Boutton">En Savoir Plus</button>
    </div>
  </div> 
  `
  ,

}

const Page={

  data() {
    return {
   MiniTitre:"Nos Formules d'abonnement",
   Content:"Toutes nos formules d'abonnement sont 100% sans engagement et résiliable à tout moment .Paiement par CB ,Paypal et bitcoin possible",
    TitresOffres:"DECOUVREZ TRÈS BIENTÔT NOS OFFRES" ,
    PrixOffres:"A PARTIR DE 9,99€/MOIS",
    };
  },

  components:
  {
  
  "Offres" : Offres,
  
  },


  template
  :
  // <div class="FondBleu">
  // <h3>{{TitresOffres}}</h3>
  // <p>{{PrixOffres}}</p>
  // <button class="Boutton">En Savoir Plus</button>
  // </div>
  `
  <div>
      <h2 style="color:rgb(18, 131, 223)">{{MiniTitre}}</h2><p class="Content">{{Content}}</p>
    <Offres></Offres>
    </div>

  `
  ,
  

}
const Menu={

  data() {
    return {
   Titre:"NetPrime+",
   Slogan:"La plateforme vidéo completement dingue"

    };
  },

  template
  :
  `
  <div>
    <div class="Menu">
      <h2>{{Titre}}</h2><p>{{Slogan}}</p>
    </div>
  </div>

  `
  ,

}
const FooterN={
  data() {
    return {
   Titre:"NetPrime+",
   CGV:" @Tout droit reserves"

    };
  },

  template
  :
  `
  <div>
    <div class="Footer">
      <h2 style="align-content:left">{{Titre}}</h2>
      <div style="align-self:center">{{CGV}}</div>
    </div>
  </div>

  `
  ,
}
   
 
const RootComponent = {
  /* Data properties */
  data() {
    return {
   

    };
  },

  components:
  {
  "Menu" : Menu,
  "FooterN" : FooterN,
  "Page" : Page,
  },
  template
  :
  `
  
 

<Menu></Menu>

<Page></Page>
<FooterN></FooterN>

`
,
   
   
  
};

/**
 * Instance d'app montée
 */
Vue.createApp(RootComponent).mount("#root");





