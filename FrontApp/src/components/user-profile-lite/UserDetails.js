import React,{  useRef} from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
   ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";
import './style.css'
import { useToasts } from 'react-toast-notifications';
import { UPLOAD_IMAGE } from '../../actions/mutations'
import { useMutation } from '@apollo/client';
import { GET_USER } from '../../actions/queries'
import ImageToShow from '../../HooksApi/ImageHooksApi'

const UserDetails = ({ userDetails,authUser,myprofile }) => 


{ 
  const {   base64String } = ImageToShow("admins/6062f15f6e5146001f1e7028-callvideogre.png")


const { addToast } = useToasts();
  const [UploadImage] = useMutation(UPLOAD_IMAGE, {
    update(cache, { data: { editPicture } }) {
        try {
            const data = cache.readQuery({
                query: GET_USER,

            });
            data.authUser.Picture=editPicture
     

            // data.fetchEditors.unshift(newEditor)
            cache.writeQuery({
                query: GET_USER,
                data: data
            });
 
            // setLoading(false)
         }
        catch (error) {
            //    console.log(error)
        }
    }
});
  const inputFileRef = useRef( null );
  const onFilechange = async ( e ) => {
if(e.target.files && e.target.files.length>0) {
 
  await UploadImage({ variables: {  file:  e.target.files[0] } })
  .then(({ data }) => {
       addToast("Image modifier", { appearance: 'success' });

   })
  .catch(e => {
      addToast(e.message, { appearance: 'warning' });

 
  })
}
  }


  const handleBtnClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click();
  }
  return (
  <Card small className="mb-4 pt-3" style={{height:470}}>
    <CardHeader className="border-bottom text-center">
      { myprofile?

      <div onClick={handleBtnClick } className="mb-3 mx-auto img__wrap">
        <img 
        class="img__img"
           src={
            authUser.Picture?`data:image/png;base64,${base64String}` :
            "https://i.stack.imgur.com/l60Hf.png  "                         
          }        
            alt={authUser.FirstName}
          style={{
            borderRadius: "50%",
            height: 100,
            width: 100,
            marginRight: 10
          }} 
                 
           />
  <p class="img__description">Changer la photo</p>

      </div>
 : <div  >
  <img 
      src={
      authUser.Picture?`data:image/png;base64,${base64String}` :
      "https://i.stack.imgur.com/l60Hf.png  "                         
    }        
      alt={authUser.FirstName}
    style={{
      borderRadius: "50%",
      height: 100,
      width: 100,
      marginRight: 10
    }} 
           
     />
 
</div>

}
      <h4 className="mb-0">{authUser.FirstName +  " " +authUser.LastName}</h4>
      <span className="text-muted d-block mb-2">{authUser.Role}</span>
      {/* <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">person_add</i> Follow
      </Button> */}
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
            {userDetails.performanceReportTitle}
          </strong>
          <Progress
            className="progress-sm"
            value={userDetails.performanceReportValue}
          >
            <span className="progress-value">
              {userDetails.performanceReportValue}%
            </span>
          </Progress>
        </div>
      </ListGroupItem>
      <input
      style={{display:"none"}}
        type="file"
        ref={inputFileRef}
        onChange={onFilechange}
      />
    </ListGroup>
  </Card>
) }
UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: "Sierra Brooks",
    avatar: require("./../../images/avatars/0.jpg"),
    jobTitle: "Project Manager",
    performanceReportTitle: "Projects complet",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
  }
};

export default UserDetails;
