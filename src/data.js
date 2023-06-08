import birthdayCake from './img/birthday-cake.jpg'
import boneBites from './img/bone-bites.JPG'
import cupcakeSet from './img/cupcake-set.JPG'
import picnicCake from './img/picnic-cake.JPG'
import canele from './img/canele.jpg'
import doggieCookie from './img/doggie-cookie.jpg'
import macaron from './img/makaron.JPG'
import pizza from './img/pizza.JPG'
import specialCake from './img/specialcake.JPG'
import sixInchCake from './img/6-inch-cake.JPG'


const generateId = () => {
    return Math.floor(Math.random() * 1000);
}


export const categories = [
    {
        title: 'Cake',
        id: generateId(),
        background_color: '#abc7c0',
        img: birthdayCake
    },
    {
        title: 'Snack',
        id: generateId(),
        background_color: '#e3adab',
        img: boneBites
    },
    {
        title: 'Dessert',
        id: generateId(),
        background_color: '#e8d390',
        img: doggieCookie
    }
]





export const PRODUCTS = [
    {
        name: 'Special Shaped Birthday Cake',
        id: generateId(),
        category: 'cake',
        description: 'Customize a cake for your own dog',
        img: specialCake,
        price: 80
    },
    {
        name: 'Bone Bites',
        id: generateId(),
        category: 'snack',
        description: 'Perfect size for training',
        img: boneBites,
        price: 10
    },
    {
        name: '4-Inch Picnic Cake',
        id: generateId(),
        category: 'cake',
        description: 'Enjoy a date with your cuties. Don\'t forget to bring their favorite cake',
        img: picnicCake
    },
    {
        name: 'Doggie Cookie',
        id: generateId(),
        category: 'dessert',
        description: 'Doggie cookies for doggies',
        img: doggieCookie,
        price: 20
    },
    {
        name: 'Canele',
        id: generateId(),
        category: 'dessert',
        description: 'French Dessert but doggie version',
        img: canele,
        price: 25
    },
    {
        name: 'Birthday Cupcake Set',
        id: generateId(),
        category: 'cake',
        description: 'Even a little doggie wants to share cakes with friends',
        img: cupcakeSet,
        price: 40
    },
    {
        name: '6-Inch Birthday Cake',
        id: generateId(),
        category: 'cake',
        description: 'For big ones',
        img: sixInchCake,
        price: 80
    },
    {
        name: 'Doggie Macaron',
        id: generateId(),
        category: 'dessert',
        description: 'Enjoy an afternoon tea with your cutties',
        img: macaron,
        price: 40
    },
    {
        name: 'Doggie Pizza',
        id: generateId(),
        category: 'dessert',
        description: 'Doges are crazy about pizza!',
        img: pizza,
        price: 40
    }
]
