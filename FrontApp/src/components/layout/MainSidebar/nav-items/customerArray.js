 
export default () =>{ 

    return [
     {
       title: "Tableau de bord",
       to: "/Dashboard",
       htmlBefore: '<i class="material-icons">dashboard</i>',
       htmlAfter: ""
     },
   
     {
       title: "Liste des projets",
      htmlBefore: '<i class="material-icons">business</i>',
     to: "/Projets",
     },
    
       
   ];
 
 }
 