const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

// write logic to meet the expected outcome:
// ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human']

const newAnimalArrey = animals.map((animal) => "Baby" + " " + animal);
console.log(newAnimalArrey);
