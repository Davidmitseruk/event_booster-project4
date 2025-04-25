const templateSource = document.querySelector('.modal').innerHTML;
const template = Handlebars.compile(templateSource);
const html = template(context);
document.querySelector('.modal').innerHTML = html;
const context = {
posterImage: 'blackeyedpeas.jpg',
eventInfo: 'Atlas Weekend is the largest music festival in Ukraine. More than 200 artists will create a proper music festival atmosphere on 10 stages',
eventDate: '2021-06-09',
eventTime: '20:00',
eventLocation: 'Kyiv/Ukraine',
eventCity: 'Kyiv',
eventCountry: 'Ukraine',
eventVenue: 'VDNH',
eventArtists: 'The Black Eyed Peas',
priceStandard: 'Standart 300–500 UAH',
priceVIP: 'VIP 1000–1500 UAH'
};