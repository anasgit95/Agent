import gql from "graphql-tag";

export const login = gql`
mutation login($data: LogInputs){
    login(input:$data){
        FirstName
        LastName
        Phone1
        Email    
        Token
        Role
    }    
  }
`


export const NEW_CUSTOMER = gql`
mutation newCustomer($input: CustomerInputs,$file: Upload){
  newCustomer(input:$input,file:$file){
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
    }    
  }
`


export const NEW_EDITEUR = gql`
mutation newEditor($input: EditorInputs,$file: Upload){
  newEditor(input:$input,file:$file){
    Creator
    _id
    FirstName
    LastName
    Birthday
    Picture
    Phone1
    Email
    }    
  }
`

export const NEW_ADMIN = gql`
mutation newAdmin($input: AdminInputs,$file: Upload ){
  newAdmin(input:$input,file:$file){
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


export const NEW_CATEGORIE = gql`
mutation addCategory($input: ParametersInputs){
  addCategory(input:$input){
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

export const NEW_DEPARTMENT = gql`
mutation addDepartment($input: ParametersInputs){
  addDepartment(input:$input){
    _id
    Active 
    Modifier 
    Deleted 
    Designation 
    Description 
    }    
  }
`

export const NEW_FAMILY = gql`
mutation addFamily($input: ParametersInputs){
  addFamily(input:$input){
    _id

    Active 
    Modifier 
    Deleted 
    Designation 
    Description 
    }    
  }
`

export const EDIT_FAMILY = gql`
mutation editFamily($input: ParametersInputs){
  editFamily(input:$input){
    _id

    Active 
    Modifier 
    Deleted 
    Designation 
    Description 
    }    
  }
`

export const EDIT_ADMIN = gql`
mutation editAdmin($input: AdminInputs){
  editAdmin(input:$input){
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

export const EDIT_EDITOR = gql`
mutation editEditor($input: EditorInputs){
  editEditor(input:$input){
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

export const EDIT_GATEGORIE = gql`
mutation editCategory($input: ParametersInputs){
  editCategory(input:$input){
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
 

export const EDIT_DEPARTMENT = gql`
mutation editDepartment($input: ParametersInputs){
  editDepartment(input:$input){
    _id

    Active 
    Modifier 
    Deleted 
    Designation 
    Description 
    }    
  }
`

export const EDIT_CUSTOMER = gql`
mutation editCustomer($input: CustomerInputs){
  editCustomer(input:$input){
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

export const BANNIR_USER = gql`
mutation banishUser($id: String){
  banishUser(id:$id){
    Deleted
    Active
    }    
  }
`
export const UPLOAD_IMAGE = gql`
mutation editPicture($file: Upload){
  editPicture(file:$file) 
  }
`
 