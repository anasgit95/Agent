import React from "react";
import { Route } from "react-router-dom";

 
import routesAdmin from "./routes/routesAdmin";
 

import withTracker from "./withTracker";
 



export default () => {
    

    return (


             routesAdmin.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={withTracker(props => {
                            return (
                                <route.layout {...props}>
                                    <route.component {...props} />
                                </route.layout>
                            );
                        })}
                    />
                );
            })


 

                 
    )
}
