import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module).addWithJSX("with background", () => (
  <Button bg={"lightblue"}> I'm a button with blue background</Button>
));
