let btnOpenModal = document.getElementById('openModal');
let btnCloseModal = document.getElementById('closeModal');
let modalWindows = document.getElementById('modalWindows');

function modalVisibility (){
    modalWindows.style.visibility= "visible";
}

function modalClose (){
    modalWindows.style.visibility = "hidden";
}

btnOpenModal.addEventListener('click', modalVisibility);
btnCloseModal.addEventListener('click', modalClose);