// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here

minScore = scores[0];

for (let i of scores) {
  if (i <= minScore) {
    minScore = i;
  }
}

console.log(minScore);
