/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl = 'https://platzi-avo.vercel.app';
const appNode = document.querySelector("#app");

appNode.addEventListener('click', (event) => {
    if(event.target.nodeName === 'H2'){
        window.alert('Hola')
    }    
})

// api Intl - API Internalización
// 1 - format fechas
// 2 - format monedas

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD'
    }).format(price)

    return newPrice;
}


// // web api
// //Conoectarnos al server para
// // JSON => Data => Denderizar info browser

// PROMESAS
window.fetch(`${baseUrl}/api/avo`)
// //procesar la respuesta y convertirlo en JSON
.then(respuesta => respuesta.json())
// // JSON => Data => Denderizar info browser
.then(resJSON => {
    const array = [];
    resJSON.data.forEach(element => {
        // crear la imagen el
        const imagen = document.createElement('img');
        imagen.src = `${baseUrl}${element.image}`;
        // crear el titulo
        const titulo = document.createElement('h2');
        titulo.textContent = element.name;
        titulo.className = 'titulo';
        
        // crear el precio
        const price = document.createElement('div');
        price.textContent = formatPrice(element.price);
        price.className = 'price';

        const card = document.createElement('div');
        card.className = 'card';
        const container = document.createElement('div');
        container.className = 'container';
        container.append(imagen,card); 
        card.append(titulo, price)       
        array.push(container);        
    });
    appNode.append(...array);
})
.catch (error => console.error(error));


// // ASYNC & AWAIT

// const data = async (url) => {
//     try {
//         // conectamos al servidor
//         const respuesta = await window.fetch(url);
//         // obteniendo los resultados los convertimos en json
//         const dataJSON = await respuesta.json();
//         // recorremos el json para obtener el nombre
//         dataJSON.data.forEach(item => {
//             console.log(item.name);
//         })
//     } catch (error) {
//         console.error(error);
//     }

// }

// data(url);