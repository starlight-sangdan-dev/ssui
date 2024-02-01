import React from "react";
import { Button } from "../../components";

describe("Button.cy.tsx", () => {
    it("Button Component Test", () => {
        cy.mount(<Button />);
        cy.get("button").should("contain.text", "이것은 버튼");
    });
});
