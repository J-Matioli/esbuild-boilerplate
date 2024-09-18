import template from "./home.html";
import "./home.scss";

export function renderHome() {
    const home = document.createElement('div')
    home.innerHTML = template;
    document.querySelector('body').appendChild(home)
}