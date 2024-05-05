let pronoun = ["the", "our"];
let adj = ["amazing", "increible"];
let noun = ["raton", "messi"];
let domains= [".com",".es",".ve",".org"];

// for (let i = 0; i < pronoun.length; i++) {
//   for (let j = 0; j < adj.length; j++) {
//       for (let k = 0; k < noun.length; k++) {
//           for (let l = 0; l < domains.length; l++) {
//               console.log(pronoun[i] + adj[j] + noun[k] + domains[l]);
//           }
//       }
//   }
// }
pronoun.forEach(pronounItem => {
  adj.forEach(adjItem => {
      noun.forEach(nounItem => {
          domains.forEach(domainItem => {
              console.log(pronounItem + adjItem + nounItem + domainItem);
          });
      });
  });
});




