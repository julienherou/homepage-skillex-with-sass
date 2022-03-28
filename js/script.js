window.addEventListener('load', () => {
});

const persons = document.querySelectorAll('.person__image');
const person1 = document.querySelector('.person-nb1');
const person2 = document.querySelector('.person-nb2');
const person3 = document.querySelector('.person-nb3');
const personElt = document.querySelector('.person');

persons.forEach(element => {
    element.addEventListener('mouseover', showImage);
});

function showImage(){
    
    if (this.classList.contains('person-nb1')) {
        this.style.width = '58%';
        person2.style.width = '21%';
        person3.style.width = '21%';
    } else if (this.classList.contains('person-nb2')) {
        this.style.width = '58%';
        person1.style.width = '21%';
        person3.style.width = '21%';
    } else if (this.classList.contains('person-nb3')) {
        this.style.width = '58%';
        person1.style.width = '21%';
        person2.style.width = '21%';
    }
}



personElt.addEventListener('mouseout', (event) => {
    person1.style.width = '58%';
    person2.style.width = '21%';
    person3.style.width = '21%';
});


