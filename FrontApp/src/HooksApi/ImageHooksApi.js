import React, { useState, useEffect } from "react";

import { s3_config } from '../aws-s3';


const aws = require('aws-sdk');
const s3 = new aws.S3(s3_config);
const ImageToShow = (name) => {

    const [base64String, setbase64String] = useState("")
    const [loading, setLoading] = useState(true)
    const getPicture = React.useCallback(async () => {
     
    }
    )
    useEffect(() => {
        getPicture()
    }, [])






    return { base64String, loading }
}


export default ImageToShow;