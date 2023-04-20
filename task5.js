const sentence = ["sense.", "make", "all", "will", "This"];

// expected outcome: ['This', 'will', 'all', 'make', 'sense.']

const sortedSentence = sentence.sort(function (a, b) {
  return b.localeCompare(a);
});

console.log(sortedSentence);
