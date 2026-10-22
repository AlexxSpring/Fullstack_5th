/*

Create a quiz app : JS Quiz Arena

Expected outcomes : 

1. Show one question at a time with 4 clickable options, a progress line ("Q3/25"), and a live score.
2. After a click, turn the chosen option green or red, reveal the correct one, show the explanantion, and lock the other options.
3. Include Next and Restart buttons. At the end, show the final score and a rating message.
4. Add a 30-second countdown per question. When it hits 0, auto-lock the question and reveal the answer.
5. Add a "review wrong answers" screen at the end.

*/


const TimePerQues = 30; // seconds

const Question = [
    {
        question : "What is the full form of JS ?",
        options : ["JavaScript", "JavaSource", "JavScript", "None of the above"],
        answer : 0, // Index of the correct option
        explanation : "Self-explanatory, JS stands for JavaScript."
    },
    {
        question : "Which company developed JavaScript ?",
        options : ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"],
        answer : 0,
        explanation : "JavaScript was developed by Netscape."
    },
    {
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: 1, // index of the correct option
    explanation: "`let` is block-scoped and reassignable. `const` is block-scoped but cannot be reassigned."
  },
  {
    question: "What does typeof null return?",
    options: ["'null'", "'undefined'", "'object'", "'number'"],
    answer: 2,
    explanation: "This is a historic JavaScript bug: typeof null returns 'object'."
  },
  {
    question: "Which method adds an element to the END of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
    explanation: "push() appends to the end. pop() removes from the end; shift()/unshift() work on the start."
  },
  {
    question: "What is the result of '5' + 3 in JavaScript?",
    options: ["8", "'53'", "NaN", "TypeError"],
    answer: 1,
    explanation: "With +, if one operand is a string, JS converts the other to a string and concatenates."
  },
  {
    question: "Which operator checks both value AND type?",
    options: ["==", "=", "===", "!="],
    answer: 2,
    explanation: "=== is strict equality: no type coercion happens."
  },
  {
    question: "What does Array.isArray([]) return?",
    options: ["false", "true", "undefined", "'array'"],
    answer: 1,
    explanation: "Array.isArray() returns true for real arrays, unlike typeof which gives 'object'."
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
    answer: 1,
    explanation: "JSON.parse() string → object. JSON.stringify() does the reverse."
  },
  {
    question: "What will console.log(0.1 + 0.2 === 0.3) print?",
    options: ["true", "false", "undefined", "Error"],
    answer: 1,
    explanation: "Floating-point precision makes 0.1 + 0.2 equal 0.30000000000000004."
  },
  {
    question: "Which of these is NOT a primitive type in JavaScript?",
    options: ["string", "symbol", "object", "boolean"],
    answer: 2,
    explanation: "Objects (including arrays and functions) are reference types, not primitives."
  },
  {
    question: "What does the 'this' keyword refer to inside a regular function called on its own (non-strict mode)?",
    options: ["The function itself", "The global object", "undefined", "The parent function"],
    answer: 1,
    explanation: "In non-strict mode, a standalone call has `this` set to the global object (window in browsers)."
  }
];


// STATE : Everything about the current state of the quiz is stored here 
// Every dynamic change during the quiz is reflected in this state object.

const state = {
    current: 0,
    score: 0,
    locked: false, // Turns true after an option is clicked or time runs out, preventing further clicks
    timer: TimePerQues,
    timerid: null,
    wrongAnswers: [] // Store wrong answers for review
}



