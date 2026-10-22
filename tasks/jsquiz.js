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
    }
    {
        
    }
]