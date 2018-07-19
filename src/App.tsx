import * as React from "react";

// This is the main component that you need.
import SlidingContainer from "react-sliding-container";
// Component comes without CSS styles, so if you want to have default ones you must include this
import "../node_modules/react-sliding-container/lib/main.css";

import "assets/scss/App.scss";

export default class App extends React.Component<undefined, undefined> {
    render(): JSX.Element {
        return (
            <div className="container app-component">
                <div className="row">
                    <div className="col-12 text-center py-5">
                        <h1 className="display-5 mb-5">React Sliding Container Demo App</h1>
                        <SlidingContainer/>
                    </div>
                </div>
            </div>
        );
    }
}
