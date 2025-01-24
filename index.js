// Arrays for the Inspirational Message Generator
const subjects = [
  "Success",
  "Happiness",
  "Love",
  "Courage",
  "Determination",
  "Kindness",
];

const actions = [
  "comes from within",
  "requires effort",
  "is built over time",
  "starts with small steps",
  "is achieved through persistence",
  "is fueled by belief in yourself",
];

const conclusions = [
  "like climbing a mountain.",
  "as steady as the sun rising each day.",
  "one day at a time.",
  "like planting seeds for a better tomorrow.",
  "if you dare to dream big.",
  "when you take that first leap.",
];

const generateMessage = () => {
  let subject = subjects[Math.floor(Math.random() * subjects.length)];
  let action = actions[Math.floor(Math.random() * actions.length)];
  let conclusion = conclusions[Math.floor(Math.random() * conclusions.length)];
  return `${subject} ${action} ${conclusion}`;
};

console.log(generateMessage());

let messageSection = document.getElementById("messageSection");
let message = messageSection.appendChild(document.createElement("p"));
message.textContent = generateMessage();
