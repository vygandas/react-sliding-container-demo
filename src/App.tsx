import * as React from "react";
import SlidingContainer from "react-sliding-container";

import "assets/scss/App.scss";

export default class App extends React.Component<undefined, undefined> {
    render(): JSX.Element {
        return (
            <div className="container app-component">
                <div className="row">
                    <div className="col-12">
                        <h1>Hello</h1>
                        <SlidingContainer/>
                    </div>
                </div>
            </div>
        );
    }
}
