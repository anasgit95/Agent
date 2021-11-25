import React from "react";




export default () => {

    return (

        <div className="loader-container">
            <div style={{
                margin: "auto",
                /* width: 100px; */
                height: "100px"

            }}>

                <img
                    src={require("../../assets/images/digividz.png")}
                    alt="User Avatar"
                />
            </div>

        </div>

    )
}
