/**
 * Composant racine
 */
 const Offres={

  data() {
    return {
      // TitresOffres:"DECOUVREZ TRÈS BIENTÔT NOS OFFRES" ,
     
      // DescriptionOffres:"",
      
      // PrixOffres:"A PARTIR DE 9,99€/MOIS",
      
    };
  },

  props:{
    details: {
      type: Number,
      
  },
  DescriptionOffres:{type:String,},

  TitresOffres:{type:String,},
  PrixOffres:{type:String,},

 


  },
  template:
  /*html*/
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
    TitresOffres1:"SOLO" ,
    TitresOffres2:"FAMILY" ,
    TitresOffres3:"FAMILY 4K" ,
    DescriptionOffres:"",
    DescriptionOffres1:"1 ECRAN video HD",
    DescriptionOffres2:"4 ECRANS video HD",
    DescriptionOffres3:"4 ECRANS video 4K",
    PrixOffres1:"A PARTIR DE 9,99€/MOIS",  
    PrixOffres2:"A PARTIR DE 12,99€/MOIS",  
    PrixOffres3:"A PARTIR DE 15,99€/MOIS",  
    PrixOffres11:9.99  ,
    PrixOffres12:12.99  ,
    PrixOffres13:15.99  ,
tableau1:[
 { id:1,
  DescriptionOffres:"1 ECRAN video HD",
  PrixOffres:"A PARTIR DE 9,99€/MOIS",
  TitresOffres:"SOLO" },
{ id:2,
    DescriptionOffres:"4 ECRANS video HD",
    PrixOffres:"A PARTIR DE 12,99€/MOIS",
    TitresOffres:"FAMILY" },
{ id:3,
      DescriptionOffres:"4 ECRANS video 4K",
      PrixOffres:"A PARTIR DE 15,99€/MOIS",
      TitresOffres:"FAMILY 4K" }
 ]

    };
  },
  computed:
  {
  Detailsprops(){
    if (details=1)
    {return this.TitresOffres=this.TitresOffres1} 
    else if(details=2)
    
      {return this.TitresOffres=this.TitresOffres2
    };

  },
   PrixOffresNEW(chiffre){
     return chiffre=> this.PrixOffres="A PARTIR DE "+chiffre+"€/MOIS";

  // },
  // PrixOffresNom(chiffre){
  //   return PrixOffresNom=PrixOffres+chiffre

   }, 

   
},

  components:
  {
  
  "Offres" : Offres,
  
  },


  template
  :

  `
  <div>
      <h2 style="color:rgb(18, 131, 223)">{{MiniTitre}}</h2><p class="Content">{{Content}}</p>
      
    
    
    <Offres :details="1" :TitresOffres="Detailsprops"></Offres>
    <Offres :details="2" :TitresOffres="Detailsprops"></Offres>
    <Offres :TitresOffres="TitresOffres3" :DescriptionOffres="DescriptionOffres3" :PrixOffres="PrixOffres3" ></Offres>
         
    </div>

  `
  ,


  // for index1=0 to Object.keys(tableau1).lenght ,i++
  //   for index=0 to
  //   index
  //   <Offres :Object.keys(tableau1)[index1]=tableau1.(Object.keys(tableau1)[index1])[index]></Offres>
 // <Offres :PrixOffres="PrixOffresNEW(55)"></Offres>

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





