let string = "Javascript";
let n = 2;
//Rotate the String n Times in the Left Direction
// expected outcome: vascriptja

function rotateStringLeft(str, n) {
  let chars = str.split("");

  for (let i = 0; i < n; i++) {
    let firstChar = chars.shift();
    chars.push(firstChar);
  }
  let rotatedStr = chars.join("");
  return rotatedStr;
}
let rotatedString = rotateStringLeft("Javascript", 2);
console.log(rotatedString);
