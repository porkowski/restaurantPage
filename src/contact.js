import './style.css';
import img1 from './chef1.png'

function contactFunction() {
    //Create div for all generated elements to be children of
    const element = document.createElement('div');
    element.setAttribute('id','mainDiv');

    const heading = document.createElement('h3');
    heading.innerHTML = 'Fuscini\'s Ristorante';
    element.appendChild(heading);
    
    function contactDiv() {
        const element = document.createElement('div');
        element.setAttribute('id','contactDiv');

        const headChef = document.createElement('h2');
        headChef.innerHTML = 'Lorenzo Fuscini';
        element.appendChild(headChef);

        const hChefquote = document.createElement('p');
        hChefquote.innerHTML = 'Lorenzo, Head Chef and Founder of Fuschini\'s has been passionate about cooking since the age of 13, helping his grandmother pick ingredients from their fattoria every day before dinner. Upon his move to the United States in 1962, Lorenzo carried over his dedication to providing fresh food for all and opened Fuschini\'s in the winter of 1964.';
        element.appendChild(hChefquote);

        const chef1 = new Image();
        chef1.src = img1;
        chef1.setAttribute('id','hchefpic');
        element.appendChild(chef1);

        const picDescription = document.createElement('p');
        picDescription.setAttribute('id','smallpicfooter');
        picDescription.innerHTML = 'Lorenzo cooking up pasta with fresh cheese imported from Lazio, circa 1980\'s.';
        element.appendChild(picDescription);

        const secondChef = document.createElement('h2');
        secondChef.innerHTML = 'Alessandro Rossi';
        element.appendChild(secondChef);


        const secondquote = document.createElement('p');
        secondquote.innerHTML = 'Alessandro has been trained directly under Lorenzo\'s wing since his move from Italy in 2005. As they share the same core values, including providing customers with the freshest, most delectable traditional dishes, Lorenzo hopes that one day Alessandro will be taking over Fuschini\'s as head chef.'
        element.appendChild(secondquote);
    
        return element;
    };

    element.appendChild(contactDiv());

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
            element.appendChild(option2);

            const option3 = document.createElement('button');
            option3.setAttribute('class','selected');
            option3.innerHTML = 'Contact';
            element.appendChild(option3);


            return element
        }

    element.appendChild(innerelement());

    return element;
}

export {contactFunction};