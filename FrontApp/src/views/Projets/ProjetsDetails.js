import React, { useEffect, useState, useRef } from "react";


import { Container, Row, Col, Button } from "shards-react";
import './style.css'

class ProjetDetails extends React.PureComponent {
  render() {

    const { data } = this.props



    return (

      <Container fluid className="main-content-container px-4"   >


        <Row  >
          <Col lg={8}>
            <h2 style={{ color: "green" }}> Généralité </h2>
            <h6> Type : {data.generaliter.type} </h6>
            <h6> Année de construction  : {data.generaliter.yearConstruction} </h6>
            <h6> Nombre des occupants  : {data.generaliter.occupantNumber} </h6>
            <h6> Nombre d'adultes : {data.generaliter.adultNumber} </h6>
          </Col>
          <Col lg={4}  >
            <h2 style={{ color: "green" }}> Client </h2>
            <h6>Nom : {data.generaliter.fullName} </h6>
            <h6>Téléphone : {data.generaliter.phone} </h6>
            <h6>Email :  {data.generaliter.email} </h6>
            <h6>Adresse : {data.generaliter.adresse} </h6>

          </Col>
          {/* <table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
  </tr>
  <tr>
    <td>Lois</td>
    <td>Griffin</td>
  </tr>
</table> */}
          <Col lg={8}>
            <h2 style={{ color: "green" }}> Contexte  </h2>
            <h6> Priorités du client : {data.context && data.context.priority && data.context.priority.map(item => <p> {item}</p>)} </h6>
            <h6> Solution technique  : {data.context.valueTechnique} </h6>
            <h6> Occupation du logement  : {data.context.logement} </h6>
            <h6> Logement occupé pendant les travaux : {data.context.logement} </h6>
            <h6> Niveau de confort
              <p>   hiver : {data.context.confortAccoutique} </p>

              <p> Eté  : {data.context.confortEte} </p>
              <p>  Acoustique  : {data.context.confortAccoutique} </p>
            </h6>

            <h6> Plafond de ressource :  {data.context.profond}</h6>

            <h6> Projet bénéficiant des certificats d'économie d'énergie : {data.context.certificatEco} </h6>
            <h6> Extension Effectuée au bâtiment  :{data.context.certificatEco} </h6>
              {data.context.images.map(item=>
              <div> 
              <img src={"data:image/png;base64,"+item.photo}  style={{height:250,width:250}}/>
              <h6>{item.name}</h6>
              </div>
              )}

          </Col>


          <Col lg={8}>
            <h2 style={{ color: "green" }}> Architecture  </h2>


            <h6> Surface habitable du batiment : {data.architecture.surfacehabtable}  </h6>
            <h6> Nombre de niveaux:
              <p> Sous sol : {data.architecture.sousSol}</p>
              <p> RDC : {data.architecture.rdc}</p>
              <p> R+1 : {data.architecture.r1}</p>
              <p> R+2: {data.architecture.r2}</p>



            </h6>
            <h6> Nature du plafond  : {data.architecture.platFondLvl} </h6>
            <h6> Nature du plancher base  : {data.architecture.plancherBas} </h6>

           {data.architecture.images.map(item=><img src={"data:image/png;base64,"+item} /> )}
            
          </Col>
          <Col lg={12}>
            <h2 style={{ color: "green" }}>           Plan masse (Croquis avec l'indication des orientations)  </h2>


 
           <img src={"data:image/png;base64,"+data.planMasse.image} />
            
          </Col>
          <Col lg={8}>
            <h2 style={{ color: "green" }}> Forme Batiment  </h2>


            <h6> Longeur : {data.dimension.longeur}  </h6>
            <h6> largeur : {data.dimension.largeur}</h6>
            <h6> Hauteur {data.dimension.hauteur}</h6>
            <h6> Orientation facade principale  : {data.dimension.orientationPrincipale}</h6>




          </Col>
          <Col lg={12}>
            <h2> Répartition mur   </h2>
            <table className="tableClassname">
              <tr>
                <th>nom De mur</th>
                <th>Composition</th>
                <th>Epaisseur</th>
                <th> epaisseur-Isolation</th>
                <th> hauteur</th>
                <th> isolation</th>
                <th> longeur</th>
                <th> orientation</th>
                <th> position</th>
                <th> resistance Isolation</th>
                <th> type Isolation</th>

              </tr>
              {data.repartissant.map(reparti =>

                <tr>

                  <td>{reparti.nomDeMur}</td>
                  <td>{reparti.composition}</td>
                  <td>{reparti.epaisseur}</td>
                  <td>{reparti.epaisseurIsolation}</td>
                  <td>{reparti.hauteur}</td>
                  <td>{reparti.isolation}</td>

                  <td>{reparti.longeur}</td>

                  <td>{reparti.orientation}</td>

                  <td>{reparti.position}</td>


                  <td>{reparti.resistanceIsolation}</td>

                  <td>{reparti.typeIsolation}</td>
                </tr>
              )
              }






            </table>




            <h2>  Ouvrant type   </h2>

            <table style={{ marginTop: 20 }} className="tableClassname">
              <tr>
                <th>Ouvrant type </th>
                <th>Nom</th>
                <th>Designation</th>
                <th> materiaux</th>
                <th> Type De Viltrage</th>
                <th> Type de paroi</th>
                <th> longeur</th>
                <th> orientation</th>
                <th> position</th>
                <th> resistance Isolation</th>
                <th> type Isolation</th>

              </tr>
              {data.ouvrantType.map(reparti =>
                <tr>
                  <td> {reparti.nom}</td>
                  <td> {reparti.designation}</td>
                  <td> {reparti.materiaux} </td>
                  <td> {reparti.TypeDeViltrage}</td>
                  <td>{reparti.typeDeParoi}</td>
                  <td>{ }</td>
                  <td>{ }</td>
                  <td>{ }</td>
                  <td>{ }</td>
                  <td>{ }</td>
                  <td>{ }</td>

                </tr>

              )

              }
            </table>



            <table style={{ marginTop: 20 }} className="tableClassname">
              <tr>
                <th>Désignation  Type</th>
                <th>Largeur (m)</th>
                <th>Hauteur (m)</th>
                <th> Nombre d'ouvrants</th>
                <th> Orientation</th>
                <th> Liason Mur/toit </th>
                <th> Protection (N) </th>
                <th> Masque</th>


              </tr>
              {data.ouvrantTypeRelation && data.ouvrantTypeRelation.map(reparti =>
                <tr>
                  <td> {reparti.designationValue}</td>
                  <td> {reparti.logneur}</td>
                  <td> {reparti.hauteur} </td>
                  <td> {reparti.ouvrantNumber}</td>
                  <td>{reparti.orientation}</td>
                  <td>{reparti.laison}</td>
                  <td>{reparti.protection}</td>
                  <td>{reparti.masque}</td>

                </tr>

              )

              }
            </table>



            <h2 style={{ color: "green" }}>  Porte   </h2>

            <table style={{ marginTop: 20 }} className="tableClassname">
              <tr>
                <th>Type</th>
                <th>Nature de la menuiserie</th>
                <th>Type de porte</th>
                <th> Coefficient</th>



              </tr>
              {data.porte.map(reparti =>
                <tr>
                  <td> {reparti.Type}</td>
                  <td> {reparti.nature}</td>
                  <td> {reparti.typeDePorte} </td>
                  <td> {reparti.coefficient}</td>

                </tr>

              )

              }
            </table>

            <table style={{ marginTop: 20 }} className="tableClassname">
              <tr>
                <th>Désignation (Type P1 OU P2) </th>
                <th>Longeur (m)</th>
                <th>Hauteur (m)</th>
                <th> Nombre</th>
                <th> Orientation</th>
                <th> Laison mur </th>

              </tr>
              {data.porteDesignation && data.porteDesignation.map(reparti =>
                <tr>
                  <td> {reparti.designationValue}</td>
                  <td> {reparti.longeur}</td>
                  <td> {reparti.hauteur} </td>
                  <td> {reparti.ouvrantNumber}</td>
                  <td> {reparti.orienation}</td>
                  <td> {reparti.laison}</td>

                </tr>

              )

              }
            </table>

          </Col>


          <h2 style={{ color: "green" }}>  Masque mur   </h2>

          <table style={{ marginTop: 20 }} className="tableClassname">
            <tr>
              <th>Désignation des murs avec orientation et niveau</th>
              <th>Masque proche </th>
              <th>Masque lointain</th>
              <th> Distance moyenne</th>
              <th> Hauteur moyenne</th>



            </tr>
            {data.masqueMur.map(reparti =>
              <tr>
                <td> {reparti.designation}</td>
                <td> {reparti.masqueProche}</td>
                <td> {reparti.masqueLoitin} </td>
                <td> {reparti.distanceMoyenne}</td>
                <td> {reparti.hauteurMoyenne}</td>


              </tr>

            )

            }
          </table>

          <h2 style={{ color: "green" }}>  Plancher bas   </h2>

          <table style={{ marginTop: 20 }} className="tableClassname">
            <tr>
              <th>Type</th>
              <th>Composition plancher bas </th>
              <th>Position du plancher base ( sur terre-plein LNC)</th>
              <th> Epaisseur du plancher bas (cm) </th>
              <th> Plancher bas isolé ( oui/non )</th>
              <th> Type d'isolant Epaisseur de l'isolant ( cm ) </th>
              <th> Résistance d'isolant  </th>



            </tr>
            {data.plancherBas.map((reparti, index) =>
              <tr>
                <td> {index}</td>
                <td> {reparti.compositionPlancherBas}</td>
                <td> {reparti.positionPlancherBas} </td>
                <td> {reparti.EpaisseurPlancher}</td>
                <td> {reparti.PlancherBasIsoler}</td>
                <td> {reparti.TypeIsolant}</td>
                <td> {reparti.ResistanceIsolant}</td>
              </tr>

            )

            }
          </table>
          <Col lg={12}>
            <h2 style={{ color: "green" }}> Sous sol  </h2>


            <h6> Type  : {data.sousSol.typeSousSol}  </h6>
            <h6> Surface  : {data.sousSol.surface}</h6>
            <h6> Hauteur : {data.sousSol.hauteur}</h6>




          </Col>

          <h2 style={{ color: "green" }}>  Plancher haut   </h2>

          <table style={{ marginTop: 20 }} className="tableClassname">
            <tr>
              <th>Type</th>
              <th>Composition plancher haut </th>
              <th>Position du plancher haut ( terrase comble aménagé)</th>
              <th> Epaisseur du plancher bas (cm) </th>
              <th> Plancher bas isolé ( oui/non )</th>
              <th> Type d'isolant Epaisseur de l'isolant ( cm ) </th>
              <th> Résistance d'isolant  </th>



            </tr>
            {data.plancherHaut.map((reparti, index) =>
              <tr>
                <td> {index}</td>
                <td> {reparti.compositionPlancherBas}</td>
                <td> {reparti.positionPlancherBas} </td>
                <td> {reparti.EpaisseurPlancher}</td>
                <td> {reparti.PlancherBasIsoler}</td>
                <td> {reparti.TypeIsolant}</td>
                <td> {reparti.ResistanceIsolant}</td>

              </tr>

            )

            }
          </table>
          <Col lg={12}>
            <h2 style={{ color: "green" }}> Linétique  </h2>

            <h4>  Type mur refend  </h4>
            <h6> Détail  {data.linetique.detail}  </h6>
            <h6> longeur liason Mur ext/Mur refend : {data.linetique.liasonLongeur}</h6>
            <h4>  Isolation poutres plancher bas   </h4>
            <h6>  {data.linetique.isolationPoutrse}</h6>
            <h6> longeur: {data.dimension.largeur}</h6>
            <h4>  Plancher Intermédiare :  {data.linetique.plancherIntermediare}   </h4>
            <h6> Comble aménagé  : {data.linetique.comble}</h6>
            <h6> Surface plancher bas comble  : {data.linetique.surfaceComble} m²</h6>
            <h6> Hauteur moyenne sous plafond  : {data.linetique.hauteurMoyenne}m²</h6>





          </Col>

          <h2 style={{ color: "green" }}>  Répartition   </h2>

          <table style={{ marginTop: 20 }} className="tableClassname">
            <tr>
              <th>L</th>
              <th>L1 </th>

              <th>L2 </th>
              <th>L3</th>
              <th> L4 </th>
              <th> H1</th>
              <th> H2</th>

            </tr>
            {data.repartitionLinetique.map((reparti, index) =>
              <tr>
                <td> {reparti.L}</td>
                <td> {reparti.L1} </td>
                <td> {reparti.L2}</td>
                <td> {reparti.L3}</td>
                <td> {reparti.L4}</td>
                <td> {reparti.H1}</td>
                <td> {reparti.H2}</td>

              </tr>

            )

            }
          </table>

          <h2 style={{ color: "green" }}>  Décrochement du batiment   </h2>

          <table style={{ marginTop: 20 }} className="tableClassname">
            <tr>
              <th>Niveau</th>

              <th>Sous sol</th>
              <th>RDC </th>

              <th>R+1 </th>


            </tr>
            {data.decrechement.map((reparti, index) =>
              <tr>
                {index === 0 ?
                  <td>Forme du batiment (A,B,C,....)</td>
                  : index === 1 ?
                    <td>Orientation</td>
                    : <td>L+{index - 1}</td>

                }
                <td> {reparti.sousSol}</td>
                <td> {reparti.rdc} </td>
                <td> {reparti.rPlus}</td>


              </tr>

            )

            }
          </table>





          <h2 style={{ color: "green" }}>  Sytéme de chauffage   </h2>

          <table style={{ marginTop: 20 }} className="tableClassname">
            {/*                            
                            <thead>
        <tr>
            <th colspan="2">Génerateur de chauffage</th>
        </tr>
    </thead> */}
            <tbody>

              <tr>
                <th>Energie de chauffage</th>
                <th>Type de Génerateur</th>

                <th>Puissance nominale </th>
                <th>Nombre de générateur </th>
                <th>Position (en vol chauffé/hors vol chauffé ) </th>
                <th>Années</th>



              </tr>
              <tr>

                <td> {data.emission.energieDeChuaffage}</td>

                <td> {data.emission.typeGenerateur}</td>
                <td> {data.emission.puissanceNominale} </td>
                <td> {data.emission.nombreDeGenerateur}</td>
                <td> {data.emission.poisition}</td>
                <td> {data.emission.annee}</td>


              </tr>
            </tbody>



          </table>
          <Col lg={12}>

            <h2 style={{ color: "green" }}>  Sytéme d'appoint ({data.emetteur.systemDappoint} )    </h2>
            <h5>Puissance de l'appoint (KW):</h5>

          </Col>
          <h2 style={{ color: "green" }}>  Emeteurs    </h2>

          <table style={{ marginTop: 20 }} className="tableClassname">
            {/*                            
                            <thead>
        <tr>
            <th colspan="2">Génerateur de chauffage</th>
        </tr>
    </thead> */}
            <tbody>

              <tr>
                <th>Type d'émetteur</th>
                <th>Systéme de régulation </th>

                <th>Programmation chauffage </th>
                <th>Systéme d'appoint </th>
                <th>Années</th>



              </tr>
              <tr>

                <td> {data.emetteur.typeDeEmmetteur}</td>
                <td> {data.emetteur.systemeDeregulation} </td>
                <td> {data.emetteur.ProgrammationChauffage}</td>
                <td> {data.emetteur.systemDappoint}</td>
                <td> {data.emetteur.annee}</td>


              </tr>
            </tbody>



          </table>










          <h2 style={{ color: "green" }}>  Réseaux de Distribution    </h2>

          <table style={{ marginTop: 20 }} className="tableClassname">
            {/*                            
                            <thead>
        <tr>
            <th colspan="2">Génerateur de chauffage</th>
        </tr>
    </thead> */}
            <tbody>

              <tr>
                <th>Type (émission HT, émission BT..)
                </th>
                <th>Distribution des
                  réseaux
                  (Monotube,
                  bitube..) </th>

                <th>Régulation
                  température </th>
                <th>Circulateur
                  (oui/non)
                </th>



              </tr>
              <tr>

                <td> {data.reseau.typeOfemssion}</td>
                <td> {data.reseau.distrubtionDesReseau} </td>
                <td> {data.reseau.regulationTemperature}</td>
                <td> {data.reseau.circulateur}</td>


              </tr>
            </tbody>



          </table>






          <h2 style={{ color: "green" }}>  Eau chaude Sanitaire    </h2>
          {/* <h4 >  Systéme ECS    </h4> */}

          <table style={{ marginTop: 20 }} className="tableClassname">

            <tbody>

              <tr>
                <th>Systéme </th>
                <th>TYPE ECS </th>

                <th>Type génerateur   </th>
                <th>capacité ballon (L) </th>
                <th>Nombre de ballon</th>
                <th>Année de générateur </th>



              </tr>
              <tr>

                <td> {data.emetteur.typeDeEmmetteur}</td>
                <td> {data.emetteur.systemeDeregulation} </td>
                <td> {data.emetteur.ProgrammationChauffage}</td>
                <td> {data.emetteur.systemDappoint}</td>
                <td> {data.emetteur.annee}</td>
                <td> {data.emetteur.annee}</td>


              </tr>
            </tbody>



          </table>


          <h6>  Emplacement du ballon :{data.emplacementduballon.emplacementduballon} </h6>

          <Col lg={12} />
          <h2 style={{ color: "green" }}>  Refroidissement    </h2>
          <Col lg={12} />
          <h4 style={{ color: "green" }}>  Systéme de Refroidissement    </h4>
          <Col lg={12} />

          <h6> Présence : {data.refroidissement.systemeRefroidissement} </h6>
          <Col lg={12} />

          <h6> Surface refroidie :  {data.refroidissement.surfacesRefroidie}</h6>

          <Col lg={12} />
          <h2 style={{ color: "green" }}>  Ventillation     </h2>
          <Col lg={12} />
          <h4 style={{ color: "green" }}>  Systéme de Ventillation    </h4>
          <Col lg={12} />

          <h6> Type de Ventillation  : {data.ventilation.typeventilation} </h6>
          <Col lg={12} />

          <h6>  Systéme de Ventillation :  {data.ventilation.systemventilation}</h6>
          <Col lg={12} />
          <h3>  Nombre de piéce  </h3>

          <Col lg={12} />

          <h6>  Piéce principale  :  {data.ventilation.nombreDePiece && data.ventilation.nombreDePiece.principale}</h6>
          <Col lg={12} />
          <h6>  SDB  :  {data.ventilation.nombreDePiece && data.ventilation.nombreDePiece.sdb}</h6>
          <Col lg={12} />
          <h6>  salle d'eau  :  {data.ventilation.nombreDePiece && data.ventilation.nombreDePiece.salleEau}</h6>
          <Col lg={12} />
          <h6>  WC  :  {data.ventilation && data.ventilation.nombreDePiece.wc}</h6>
          <Col lg={12} />

          <h3>  Caractéristique   </h3>
          <Col lg={12} />

          <h6>  Puissance ventilateur   :  {data.ventilation.caracteristique && data.ventilation.caracteristique.puissance}</h6>
          <Col lg={12} />
          <h6>  Année  :  {data.ventilation.surfacesRefroidie && data.ventilation.surfacesRefroidie.annee}</h6>
          <Col lg={12} />

































          <Col lg={12} />
          <h2 style={{ color: "green" }}>  EQUIPEMENTS ELECTRIQUES
          </h2>
          <Col lg={12} />
          <h4 style={{ color: "green" }}>  Eclairage     </h4>
          <Col lg={12} />

          {/* {
                    Object.keys(data.eclairage).map(function(key, index) {
                      <div> 
                          <h6> Type   : {key} </h6>
                          <h6> Nombre des ampoules    : {data.eclairage[key].nombre} </h6>
                        </div>
                     })
                    
                  } */}
          {data.eclairage.induction.checked ?
            <div>
              <Col lg={12} />

              <h6> Type   : Ampoule à induction </h6>
              <Col lg={12} />

              <h6> Nombre des ampoules    : {data.eclairage.induction.nombre} </h6>
            </div>
            : null
          }
          <Col lg={12} />

          {data.eclairage.fluorescent.checked ?
            <div>
              <Col lg={12} />

              <h6> Type   : Linéaire fluorescent </h6>
              <Col lg={12} />

              <h6> Nombre des ampoules    : {data.eclairage.fluorescent.nombre} </h6>
            </div>
            : null
          }
          <Col lg={12} />

          {data.eclairage.halogene.checked ?
            <div>
              <Col lg={12} />

              <h6> Type   : Ampoule halogéne  </h6>

              <Col lg={12} />

              <h6> Nombre des ampoules    : {data.eclairage.halogene.nombre} </h6>
            </div>
            : null
          }
          <Col lg={12} />

          {data.eclairage.fluo.checked ?
            <div>
              <Col lg={12} />

              <h6> Type   : Ampoules fluo compact  </h6>
              <Col lg={12} />

              <h6> Nombre des ampoules    : {data.eclairage.fluo.nombre} </h6>
            </div>
            : null
          }
          <Col lg={12} />

          {data.eclairage.led.checked ?
            <div>
              <Col lg={12} />

              <h6> Type   : Led  </h6>
              <Col lg={12} />

              <h6> Nombre des ampoules    : {data.eclairage.led.nombre} </h6>
            </div>
            : null
          }


          <Col lg={12} ></Col>
          <h2 style={{ color: "green" }}>  Cuisson (Préciser le nombre d'appareils) </h2>
          <Col lg={12} ></Col>
          {data.cuisson && data.cuisson.map((item, index) =>
            <> <Col lg={12} ></Col><h6> {index + 1}){item}</h6> </>
          )}


          <Col lg={12} ></Col>
          <h2 style={{ color: "green" }}>  Gros électroménager
            (Préciser le nombre d'appareils ) </h2>
          <Col lg={12} ></Col>
          {data.electromenager && data.electromenager.map((item, index) =>
            <> <Col lg={12} ></Col><h6> {index + 1}){item}</h6> </>
          )}

          <Col lg={12} ></Col>
          <h2 style={{ color: "green" }}>  Bureautique et audiovisuel
            (Préciser le nombre d'appareils)
          </h2>
          <Col lg={12} ></Col>
          {data.bureautique && data.bureautique.map((item, index) =>
            <> <Col lg={12} ></Col><h6> {index + 1}){item}</h6> </>
          )}
          <Col lg={12} ></Col>
          <h2 style={{ color: "green" }}> Divers
          </h2>
          <Col lg={12} ></Col>
          <h6>{data.diver}</h6>
          <Col lg={12} ></Col>

          <h2 style={{ color: "green" }}> Caractéristique d'abonnement
          </h2>
          <Col lg={12} ></Col>
          <h4 style={{ color: "green" }}> Abonnement d'électicité
          </h4>
          <Col lg={12} ></Col>
          {data.electriciter && data.electriciter.map((item, index) =>
            <> <Col lg={12} ></Col><h6> {index + 1}){item}</h6> </>
          )}

          <Col lg={12} ></Col>
          <h4 style={{ color: "green" }}> Tarif Gaz  géneral
          </h4>
          <Col lg={12} ></Col>
          {data.gazGenral && data.gazGenral.map((item, index) =>
            <> <Col lg={12} ></Col><h6> {index + 1}){item}</h6> </>
          )}

          <Col lg={12} ></Col>
          <h4 style={{ color: "green" }}> Tarif  d'électicité  géneral
          </h4>
          <Col lg={12} ></Col>
          {data.electriciter&& data.electriciter.map((item, index) =>
            <> <Col lg={12} ></Col><h6> {index + 1}){item}</h6> </>
          )}


          <Col lg={12} ></Col>
          <h4 style={{ color: "green" }}>Programmation
          </h4>
          <Col lg={12} ></Col>
          {data.programmation && data.programmation.map((item, index) =>
            <> <Col lg={12} ></Col><h6> {index + 1}){item}</h6> </>
          )}



          <Col lg={12} />
          <h2> Consommation    </h2>
          <table className="tableClassname">
            <tr>
              <th>Année   </th>
              <th>chauffage</th>
              <th>Ecs</th>
              <th> Refroidissement</th>
              <th> Eclairage</th>


            </tr>
            {data.consomationenergie && data.consomationenergie.map((reparti, index) =>

              <tr>
                <td> 200{9 + index} </td>
                <td>{reparti.chauffage}</td>
                <td>{reparti.ecs}</td>
                <td>{reparti.refroidissement}</td>
                <td>{reparti.eclairage}</td>



              </tr>
            )
            }






          </table>














          <Col lg={12} />
          <h2 style={{ color: "green" }}>  Système Photovoltaïque (si existe)
     </h2>
          <Col lg={12} />
          <h4 style={{ color: "green" }}>  Type     </h4>
 
          <Col lg={12} />
          {data.photovoltaique && data.photovoltaique.moduleType && data.photovoltaique.moduleType.map(item=><><h6> {item} </h6>          <Col lg={12} />
</>)}
          <h6>  Surface de module :  {data.photovoltaique && data.photovoltaique.surfaceDuModule}</h6>
          <Col lg={12} />
          <h6>  Nombre de capteurs :  {data.photovoltaique && data.photovoltaique.capeteurNombre}</h6>
          <Col lg={12} />
          <h6>  Orientation  :  {data.photovoltaique && data.photovoltaique.orientation}</h6>
          <Col lg={12} />
          <h6>  Inclinaison  :  {data.photovoltaique && data.photovoltaique.inclinaison}</h6>
          <Col lg={12} />

          <h4 style={{ color: "green" }}>  Pose     </h4>

          <Col lg={12} />
          {data.photovoltaique && data.photovoltaique.pose && data.photovoltaique.pose.map(item=><><h6> {item} </h6>          <Col lg={12} />
</>)}
<Col lg={12} />
          <h6>  Puissance crée par module  :  </h6>






        </Row>
        {/* {
             Object.keys(data).map((key) => {
                  return <p className="whiteSpaceNoWrap"><p> {key} </p>     </p>
             })
         } */}

      </Container>
    );
  }

}
export default ProjetDetails



