import   { useState,useEffect } from "react";
 
import {  GET_FAMILY, GET_DEPARTMENT, GET_CATEGORIES,  } from '../actions/queries'
  
import { useQuery } from '@apollo/client';



const List = () => {
    const { loading:loadingFamily,  data:dataFamily } = useQuery(GET_FAMILY);
    const { loading: loadingDepartement , data:dataDepartement } = useQuery(GET_DEPARTMENT);
    const { loading: loadingdataGategorie,  data:dataGategorie } = useQuery(GET_CATEGORIES);
    const [arrayOfFamily, setArrayOfFamily] = useState([]);
    const [arrayDepartement, setArrayDepartement] = useState([]);
    const [arrayCategorie, setArrayCategorie] = useState([]);

       let objectToadd
    useEffect(() => {
        if(!loadingFamily && dataFamily)
 {    

    let  newarrayOfFamily = []
       for (let i = 0; i < dataFamily.fetchFamilies.length; i++) {
           objectToadd = {
               value: dataFamily.fetchFamilies[i]._id,

               label: dataFamily.fetchFamilies[i].Designation,
               text: dataFamily.fetchFamilies[i].Designation

            }

           newarrayOfFamily.push(objectToadd)

       }
       setArrayOfFamily(newarrayOfFamily)

    }
     }, [dataFamily]); 
     useEffect(() => {
        if(!loadingDepartement && dataDepartement)
 {    

    let  newarrayOfFamily = []
       for (let i = 0; i < dataDepartement.fetchDepartments.length; i++) {
           objectToadd = {
               value: dataDepartement.fetchDepartments[i]._id,

               label: dataDepartement.fetchDepartments[i].Designation,
               text: dataDepartement.fetchDepartments[i].Designation

            }

           newarrayOfFamily.push(objectToadd)

       }
       setArrayDepartement(newarrayOfFamily)

    }
     }, [dataDepartement]); 
  
     useEffect(() => {
        if(!loadingdataGategorie && dataGategorie)
 {    

    let  newarrayOfFamily = []
       for (let i = 0; i < dataGategorie.fetchCategories.length; i++) {
           objectToadd = {
               value: dataGategorie.fetchCategories[i]._id,

               label: dataGategorie.fetchCategories[i].Designation,
               Color:dataGategorie.fetchCategories[i].Color,
           }

           newarrayOfFamily.push(objectToadd)

       }
       setArrayCategorie(newarrayOfFamily)

    }
     }, [dataGategorie]); 
   
  


 
    return {arrayOfFamily,arrayCategorie,arrayDepartement}
}


export default List;