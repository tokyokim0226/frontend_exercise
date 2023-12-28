//Method 1 -using selectors inside the element

const questions = document.querySelectorAll(".question");
questions.forEach(function(question){
    const btn = question.querySelector(".question-btn"); //limiting where you are looking for to only within the question instead of from the whole document
    console.log(btn);
    btn.addEventListener('click', function() {
        questions.forEach(function(item){
            if(item !== question) {
                item.classList.remove("show-text");
            }

        })
        question.classList.toggle("show-text");
    })
;})



// Method 2 - traversing the dom
// Uncomment the portion below

// btns = document.querySelectorAll('.question-btn'); //careful of typos

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement; //parent of the parent element (the parent container which also has the text that each question must show)
//         question.classList.toggle("show-text");
//     });
// });