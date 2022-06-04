/**
 * Composant racine
 */
 
const RootComponent = {
  /* Data properties */
  data() {
    return {
      
      
      todolist:[
        // {
        //   'id':1,
        //   'title':'test',
        //   'completed':false,
        // }
      ],
      todoinput:"",
      newtodo:"",
      Encours:"Encours",
      termine:"termine",
      Afaire:"Afaire",
      encourlist:[],
      terminelist:[],
    };
  },
  computed:{
    
  },

  /* Methodes */
  methods: {
    /* Changement du texte */
    changeText(e) {
      let name = e.target.name;
      this[name] = e.target.value;
    },

   addtodo(){
  if(this.todoinput.trim()==""){
    return
  }
  this.todolist.push(
    // id:this.idFortodo,
    this.todoinput,
    // completed:false,
  );

  // this.idFortodo++
  this.todoinput = "";
    //  todoinput='';
     
   },
   removeitems(e){
    
     const index = e.target.dataset.index;
     console.log(e.target.parentNode.parentNode.firstChild);
     console.log(e.target.parentNode.parentNode);
     console.log(e.target.parentNode.parentNode.firstChild.textContent);
     console.log(this.todolist);
     const nomT = e.target.parentNode.parentNode.firstChild.textContent;
     const nomN = e.target.parentNode.parentNode.firstChild.nodeValue;
     console.log(nomT);
     console.log(this.todolist.includes(nomN.trim()));
     if(this.todolist.includes(e.target.parentNode.parentNode.firstChild.nodeValue)){
     this.todolist.splice(index,1)
     }
     else if (this.terminelist.includes(e.target.parentNode.parentNode.firstChild.nodeValue)){
      this.terminelist.splice(index,1)
   }
   else if (this.encourlist.includes(e.target.parentNode.parentNode.firstChild.nodeValue)){
    this.encourlist.splice(index,1)}
   },
   

   Mtermine(e){
    const { index, list } = e.target.dataset;
      
    
    this.terminelist.push(this[list][index]);
    this[list].splice(index,1)
      // removeitems(e);
       // id:this.idFortodo,;

   },
   MEncours(e){
    const { index, list } = e.target.dataset;
      
    
    this.encourlist.push(this[list][index]);
    this[list].splice(index,1)

   },
  },
};

/**
 * Instance d'app montée
 */
Vue.createApp(RootComponent).mount("#root");
