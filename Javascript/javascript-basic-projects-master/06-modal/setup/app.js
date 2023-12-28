// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const openModalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

//checking to see if the constants declared above are properly selected
// console.log(closeBtn);
// console.log(openModalBtn);
// console.log(modalOverlay);

openModalBtn.addEventListener("click", () => {
    //open the modal overlay
    modalOverlay.classList.add("open-modal"); //can also use toggle
})


closeBtn.addEventListener("click", function(){
    //hide the modal overlay
    modalOverlay.classList.remove("open-modal");
})