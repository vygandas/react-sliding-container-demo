import * as React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import App from "./App";

const rootEl = document.getElementById("root");

render(
    <AppContainer>
        <App/>
    </AppContainer>
    ,
    rootEl
);

document.getElementById("master").classList.remove("pre-loading");

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./App", () => {
        const NewApp = require("./App").default;

        render(
            <AppContainer>
                <NewApp/>
            </AppContainer>
            ,
            rootEl
        );
    });
}
