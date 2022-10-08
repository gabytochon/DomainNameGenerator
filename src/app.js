/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let domainGenerator = [];
let pronoun = ["the", "our"];
let adj = ["great", "big", "awesome"];
let noun = ["jogger", "racoon", "whale", "panda"];
let domain = [".com", ".net"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < domain.length; l++) {
        domainGenerator.push(" " + pronoun[i] + adj[j] + noun[k] + domain[l]);
      }
    }
  }
}
console.log(domainGenerator);
