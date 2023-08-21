import './style.css';
import pasta1 from './pasta.jpg';

function specialeFunction() {
    //Create div for all generated elements to be children of
    const element = document.createElement('div');
    element.setAttribute('id','mainDiv');

    const heading = document.createElement('h3');
    heading.innerHTML = 'Fuscini\'s Ristorante';
    element.appendChild(heading);

    const specialHeading = document.createElement('h4');
    specialHeading.innerHTML = 'Special of the Week';
    element.appendChild(specialHeading);

    const pasta = new Image();
    pasta.src = pasta1;
    pasta.setAttribute('id','pastapic');
    element.appendChild(pasta);

    const description = document.createElement('p');
    description.setAttribute('id','pastadesc');
    description.innerHTML = 'This weeks special happens to be Lorenzo\'s most perfected dish, the same one he is pictured making back in the 1980\'s. Pasta with the customers meat of choice, along with signature cheese imported from Lazio';
    element.appendChild(description);

    const footer = document.createElement('footer');
    footer.innerHTML = 'Image of Italian farm by www.propertyguides.com - Image of chef from www.loc.gov/item/2017821678/ - Image of pasta from www.italyfoodies.com';
    element.appendChild(footer);

    //Create inner Div for tabs
        function innerelement() {
            const element = document.createElement('div');
            element.setAttribute('id','tabs');
            
            const option1 = document.createElement('button');
            option1.innerHTML = 'Home';
            element.appendChild(option1);

            const option2 = document.createElement('button');
            option2.innerHTML = 'Speciale';
            option2.setAttribute('class','selected');
            element.appendChild(option2);

            const option3 = document.createElement('button');
            option3.innerHTML = 'Contact';
            element.appendChild(option3);


            return element
        }

    element.appendChild(innerelement());

    return element;
}

export {specialeFunction};