export default function() {
  return [
    {
      title: "Tableau de bord",
      to: "/Dashboard",
      htmlBefore: '<i class="material-icons">dashboard</i>',
      htmlAfter: ""
    },
    {
      title: "Liste  des adminstrateurs",
      htmlBefore: '<i class="material-icons">group</i>',
      to: "/admins",
    },
    {
      title: "Liste des clients",
      htmlBefore: '<i class="material-icons">group</i>',
      to: "/client",
    },
    {
      title: "Liste des monteurs",
      htmlBefore: '<i class="material-icons">group</i>',
      to: "/Monteur",
    },
    {
      title: "Liste des projets",
     htmlBefore: '<i class="material-icons">business</i>',
    to: "/Projets",
    },
    // {
    //   title: "Entreprises",
    //   htmlBefore: '<i class="material-icons">business</i>',
    //   to: "/entreprises",
    // },
    // {
    //   title: "Commandes",
    //   htmlBefore: '<i class="material-icons">fact_check</i>',
    //   to: "/commandes",
    // },
    // {
    //   title: "Paiements",
    //   htmlBefore: '<i class="material-icons">credit_card</i>',
    //   to: "/payment",
    // },
    // {
    //   title: "Paramètres",
    //   htmlBefore: '<i class="material-icons">settings</i>',
    //   to: "/setting",
    // }
      
  ];
}
