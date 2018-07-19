import * as React from "react";
import App from "../src/App";
import "./__mocks__/setupTests";
import { shallow } from "enzyme";

describe("<App/>", () => {

    it("should render without throwing an error", () => {
        expect(shallow(<App/>).find(".app-component").exists()).toBe(true);
    });

});
