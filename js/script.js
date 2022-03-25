window.addEventListener('load', () => {
});

const persons = document.querySelectorAll('.person__image');
const personElt = document.querySelector('.person');
const mainImgElt = document.querySelector('.main-img');

persons.forEach(element => {
    // element.addEventListener('mouseover', showImage);
    // element.addEventListener('mouseout', replaceImage);
});

function showImage(){
    this.style.width = '58%';

}
function replaceImage(){
    this.style.width = '21%';
    // if (this.dataset.img != "1"){
    //     console.log('pouette');
    // }

}

personElt.addEventListener('mouseout', (event) => {
    mainImgElt.style.width = '58%';
    console.log('pouette');
    event.stopPropagation();

    
});


