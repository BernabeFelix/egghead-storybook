import { configure, setAddon, addDecorator } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withInfo } from "@storybook/addon-info";

addDecorator(withInfo);
setAddon(JSXAddon);
// it looks through the src folder, for files that ends in .stories.js
const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
