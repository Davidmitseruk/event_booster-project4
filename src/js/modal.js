const API_KEY = 'ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS';
const apiUrl = `https://app.ticketmaster.com/discovery/v2/events`;
const refs = {
  backdrop: document.querySelector('.backdrop'),
  modalCloseBtn: document.querySelector('.modal__close'),
  dataCards: document.querySelector('.hero__list'),
};
if (refs.dataCards) {
  refs.dataCards.addEventListener('click', async e => {
    const cardEl = e.target.closest('.hero__item').dataset.id;
    if (cardEl) {
      await fetchItem(cardEl);
    }
  });
} else {
  console.error('Element with class "hero__list" not found');
}

async function fetchItem(id) {
  try {
    const r = await fetch(`${apiUrl}/${id}`);
    const data = await r.json();
    displayItem(data);
  } catch (error) {
    console.error(error, `Error with fetch current id item`);
  }
}

function displayItem(data) {
  const dataImages = data.images || [];
  const image =
    dataImages.find(img => img.ratio === '16_9' && img.width > 300) ||
    dataImages[0];
  console.log(data);
//   const formattedItem = {
//     dataInfo: data.id,
//     dataDate: data,
//     dataTime: data,
//     dataLocation: data,
//     dataCity: data,
//     dataCountry: data,
//     dataVenue: data,
//     dataArtists: data,
//     priceStandard: data,
//     priceVIP: data,
//   };
}
