import React from "react";
import { addParameters, storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .addParameters({ info: "This is a basic example" })
  .addWithJSX("with background", () => (
    <Button bg={"lightblue"}> I'm a button with blue background</Button>
  ));
