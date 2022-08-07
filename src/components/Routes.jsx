import React from "react";

import { Navigate, Routes as Switch, Route } from "react-router-dom";
import { Results } from "./Results";

export const Routes = () => {
    return (
        <div className="p-4">
            <Switch>
                <Route path="/" element={<Navigate to="/search" />}></Route>
                {["/search", "/image", "/news", "/videos"].map((path) => (
                    <Route exact key={path} path={path} element={<Results />}></Route>
                ))}
            </Switch>
        </div>
    );
};
