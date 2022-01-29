"use strict";

var nameComponent = React.createElement("div", {
  id: "out"
}, React.createElement("h2", {
  id: "name_comp"
}, "Priti Badlani"));
var pictureComponent = React.createElement("div", {
  id: "picture_out"
}, React.createElement("img", {
  id: "picture_comp",
  src: "../wolf.jpg"
}));
var introComponent = React.createElement("div", {
  id: "intro_out"
}, React.createElement("p", {
  id: "intro_comp"
}, "Myself Priti Badlani, I am currently pursuing Masters in Computer Science. I completed my undergrad from Mumbai University in Oct 2020. I have this curiosity to learn new things, solve complex problems."));
var buttonComponent = React.createElement("div", {
  id: "button_out"
}, React.createElement("a", {
  href: "https://github.com/pritibadlani"
}, React.createElement("button", {
  id: "button_comp"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('picture'));
ReactDOM.render(introComponent, document.getElementById('introduction'));
ReactDOM.render(buttonComponent, document.getElementById('button'));