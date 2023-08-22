import './style.css';
import image from './img1.jpg'
import { specialeFunction } from './speciale';
import { contactFunction } from './contact';

function innerelement() {
    const element = document.createElement('div');
    element.setAttribute('id','tabs');
    
    const option1 = document.createElement('button');
    option1.innerHTML = 'Home';
    option1.setAttribute('class','selected');
    element.appendChild(option1);

    const option2 = document.createElement('button');
    option2.innerHTML = 'Speciale';
    element.appendChild(option2);

    const option3 = document.createElement('button');
    option3.innerHTML = 'Contact';
    element.appendChild(option3);


    return element
}


function element() {
    //Create div for all generated elements to be children of
    const element = document.createElement('div');
    element.setAttribute('id','mainDiv');

    const heading = document.createElement('h3');
    heading.innerHTML = 'Fuscini\'s Ristorante';
    element.appendChild(heading);


    const myimage = new Image();
    myimage.src = image;
    element.appendChild(myimage);

    const quote = document.createElement('p');
    quote.innerHTML = 'Explore the most delectable dishes, inspired by Italian culture with farm-fresh foods.';
    element.appendChild(quote);



    //Create inner Div for tabs
    element.appendChild(innerelement());

    const footer = document.createElement('footer');
    footer.innerHTML = 'Image of Italian farm by www.propertyguides.com - Image of chef from www.loc.gov/item/2017821678/ - Image of pasta from www.italyfoodies.com';
    element.appendChild(footer);

    return element;
}


const content = document.getElementById('content');
content.appendChild(element());

//Logic for switching page per tab clicked
const refreshpage = (event) => {
    content.setAttribute('class','reappear');
    const target = event.target;
    if (target.textContent == 'Home') {
        content.appendChild(element());
    } else if (target.textContent == 'Speciale') {
        content.appendChild(specialeFunction());
    } else if (target.textContent == 'Contact') {
        content.appendChild(contactFunction());
    }

}

document.addEventListener('click',(event) => {
    const target = event.target.nodeName;

    if (target == 'BUTTON') {
        content.setAttribute('class','disappear');
        setTimeout(() => {
            content.replaceChildren();
            refreshpage(event);
        }, 1300);

    };
})

export {innerelement};