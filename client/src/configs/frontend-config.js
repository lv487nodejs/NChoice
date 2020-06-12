export const itemsPerPage = [15, 30, 60];
export const PRODUCT_LIST_URL = '/productlist/';
export const CATALOGS_URL = '/catalogs/'
export const placeholder = "Type here..."
export const countries = {
    title: 'Country',
    name: 'country',
    value: [
        "",
        "Ukraine",
        "Italy",
        "Netherlands",
        "Poland",
        "Portugal",
        "France",
        "Germany",
        "Greece",
        "Spain",
        "Hungary",
        "Sweden",
        "England",
        "USA"
    ]
};
export const paymentMethods = {
    title: "Payment Method",
    name: "paymentMethod",
    value: [
        "",
        "credit card",
        "pay pal",
        "cash",
        "google pay",
        "amazon pay",
        "apple pay"
    ]
};
export const deliveryType = {
    title: "Delivery Type",
    name: "deliveryType",
    value: [
        "",
        "currier",
        "post",
        "delivery servise"
    ]
};
export const _apiBase = 'http://localhost:5000/';

export const socialNetworksURL = {
    telegram: 'https://web.telegram.org',
    facebook: 'https://www.facebook.com/Fn-100171608356044/',
    instagram: 'https://www.instagram.com/'
};
export const policiesFooter = {
    title: 'Information',
    items: [
        { id: 1, url: '/about-us', item: 'About us' },
        { id: 2, url: '#', item: 'Terms and Conditions' },
        { id: 3, url: '#', item: 'Privacy Policy' },
        { id: 4, url: '/materials', item: 'Materials' }]
};
export const contactInformationFooter = {
    title: 'Contacts',
    items: ['FashionNode',
        'fashionnode@gmail.com',
        '+380630123456']
}
export const catalogsFooter = {
    title: 'Catalogs',
    items: [
        { id: 1, url: 'men', item: 'Men' },
        { id: 2, url: 'women', item: 'Women' },
        { id: 3, url: 'kids', item: 'Kids' }
    ]
}
export const formRegExp = {
    email: '^(?=.{1,60}$)(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])',
    name: '^(?=.{1,30}$)[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$',
    password: '.{8,30}',
    phone: /^\+?[0-9]{3}-?[0-9]{6,12}$/g ,
        // /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g,
    //^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$
    country: '^(?=.{1,30}$)[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$',
    city: '^(?=.{1,30}$)[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$',
    street: '^(?=.{1,30}$)[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$',
    buildingNum: '^[a-zA-Z0-9_.-]*$',
    deliveryType: '^(?=.{1,30}$)[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$',
    deliveryMethod: '^(?=.{1,30}$)[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$'
}
