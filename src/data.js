import birthdayCake from './img/birthday-cake.jpg'
import boneBites from './img/bone-bites.JPG'
import cupcakeSet from './img/cupcake-set.JPG'
import picnicCake from './img/picnic-cake.JPG'
import canele from './img/canele.jpg'
import doggieCookie from './img/doggie-cookie.jpg'

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





export const products = [
    {
        name: 'Birthday Cake',
        id: generateId(),
        category: 'cake',
        description: 'Customize a cake for your own dog',
        img: birthdayCake
    },
    {
        name: 'Bone Bites',
        id: generateId(),
        category: 'snack',
        description: 'Perfect size for training',
        img: boneBites
    },
    {
        name: '4-inch Picnic Cake',
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
        img: doggieCookie
    },
    {
        name: 'Canele',
        id: generateId(),
        category: 'dessert',
        description: 'French Dessert but doggie version',
        img: canele
    },
    {
        name: 'Birthday Cupcake Set',
        id: generateId(),
        category: 'cake',
        description: 'Even a little doggie wants to share cakes with friends',
        img: cupcakeSet
    }
]