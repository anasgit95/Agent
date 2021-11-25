import React from "react";
import ImageUploading from "react-images-uploading";


export default function Upload({ GetImages,picture }) {
    const [images, setImages] = React.useState(picture?[picture]:[]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
       
        GetImages(imageList)
        setImages(imageList);
    };

    return (
        <div className="App">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,

                    onImageRemove,
                    isDragging,
                    dragProps
                }) => (
                    // write your building UI
                    <div style={{ textAlign: "center" }} >
                        {imageList.length === 0 ?
                            <button
                                style={isDragging ? { color: "red" } : { borderColor: "transparent", backgroundColor: 'transparent', marginTop: 10 }}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                <img alt="" src="https://user-images.githubusercontent.com/6290720/91559755-9d6e8c00-e973-11ea-9bde-4b60c89f441a.png" width="150"></img>
                            </button>
                            : null
                        }
            &nbsp;
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item" style={{ textAlign: "center" }}>

                                <img style={{ display: "initial" }} src={image.data_url} alt="" width="150" />
                                <i onClick={() => onImageRemove(index)} className="material-icons" style={{ cursor: "pointer" }}>delete</i>

                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}

