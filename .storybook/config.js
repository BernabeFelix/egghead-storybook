import { configure } from "@storybook/react";

// it looks through the src folder, for files that ends in .stories.js
const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
