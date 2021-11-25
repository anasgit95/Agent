import React, { useState, useEffect } from "react";

import { s3_config } from '../aws-s3';


const aws = require('aws-sdk');
const s3 = new aws.S3(s3_config);
const ImageToShow = (name) => {

    const [base64String, setbase64String] = useState("")
    const [loading, setLoading] = useState(true)
    const getPicture = React.useCallback(async () => {
        // if (ReadFromCache && ReadFromCache.authUser && ReadFromCache.authUser.Picture) {
        await s3.getObject({ Bucket: 'digividz', Key: 'pictures/' + name }).promise().then((res) => {
            setLoading(false)
            setbase64String(btoa(String.fromCharCode(...new Uint8Array(res.Body))));
        }, function (err) { console.log(err) });
        // console.log('data', file.Body)
        // console.log('mimetype', file.ContentType)

        // }
    }
    )
    useEffect(() => {
        getPicture()
    }, [])






    return { base64String, loading }
}


export default ImageToShow;