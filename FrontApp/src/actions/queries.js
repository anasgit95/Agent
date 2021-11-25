
import gql from "graphql-tag";

export const GET_USER = gql`
query authUser{
    authUser{
        FirstName
        LastName
        Birthday
        Picture
        Phone1
        Phone2
        Email    
        Role    
        _id
      }  
  }
`



export const GET_CUSTOMERS = gql`
query fetchCustomers{
  fetchCustomers{
    _id
    FirstName
    LastName
    Picture
    Email
    Birthday
    Phone1
    Phone2
    Creator 
    Archived
    Deleted
    Active
    Family
    Category
    Department
      }  
  }
`





export const GET_EDITORS = gql`
query fetchEditors{
  fetchEditors{
    _id
    FirstName
    LastName
    Picture
    Email
    Birthday
    Phone1
    Phone2
    Creator 
    Archived
    Deleted
    Active
    ContractDate
     ExpirationDate
      }  
  }
`

export const GET_ADMINS = gql`
query fetchAdmins{
  fetchAdmins{
    _id
    FirstName
    LastName
    Picture
    Email
    Birthday
    Phone1
    Phone2
     Archived
    Deleted
    Active
      }  
  }
`


export const GET_CATEGORIES = gql`
query fetchCategories{
  fetchCategories{ 
    _id
    Active 
    Modifier 
    Deleted 
    Designation 
    Description 
    Color
      }  
  }
`
export const GET_DEPARTMENT = gql`
query fetchDepartments{
  fetchDepartments{ 
    _id
    Active 
    Modifier 
    Deleted 
    Designation 
    Description 
      }  
  }
`
export const GET_FAMILY = gql`
query fetchFamilies{
  fetchFamilies{ 
    _id
    Active 
    Modifier 
    Deleted 
    Designation 
    Description 
      }  
  }
`

export const GET_USER_PROFILE = gql`
query getProfile($id: String){
  getProfile(id:$id){ 
    FirstName 
    LastName 
    Email 
    Birthday 
    Phone1 
    Phone2   
    Picture
    Family
    Category
    Department
       }  
  }
`

export const GET_MONTEUR_PROFILE = gql`
query getProfile($id: String){
  getProfile(id:$id){ 
    FirstName 
    LastName 
    Email 
    Birthday 
    Phone1 
    Phone2   
    Picture
    Skills{MD VE} WorkMode{FT FL HT}
    ContractDate
    ExpirationDate
       }  
  }
`

