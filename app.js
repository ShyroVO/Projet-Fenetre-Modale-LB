let btnOpenModal = document.getElementById('openModal');

btnOpenModal.addEventListener('click', openRequestedPopup);

let WindowObjectReference;

function openRequestedPopup() {
    WindowObjectReference = window.open('modal.html',
        "Modal",
        "width=550,height=300,directories=no,modal=yes,status=1,");
}