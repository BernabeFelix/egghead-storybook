import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import Button from "./Button";

storiesOf("Button", module)
  .addParameters({ info: "This is a basic example" })
  .addWithJSX("with background", () => (
    <Button bg={text("bg", "lightblue")}>
      I'm a button with blue background
    </Button>
  ));
