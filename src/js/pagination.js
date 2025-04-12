const API_KEY = process.env.TICKETMASTER_API_KEY;
const itemsPerPage = 20;
const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&size=${itemsPerPage}`;

let currentPage = 1;
let totalPages = 1;
let items = [];
let pageGroupStart = 1; 

const refs = {
  itemsContainer: document.getElementById('items'),
  paginationContainer: document.getElementById('pagination'),
};

async function fetchItems(page) {
  try {
    const response = await fetch(`${apiUrl}&page=${page - 1}`);
    if (!response.ok) console.error('Помилка API');
    const data = await response.json();
    items = data._embedded?.events || [];
    totalPages = data.page.totalPages || 1;

    if (!items.length) {
      refs.itemsContainer.innerHTML = '<p>Події не знайдено</p>';
      refs.paginationContainer.innerHTML = '';
      return;
    }

    displayItems(currentPage);
    setupPagination();
  } catch (error) {
    console.error('Помилка:', error);
    refs.itemsContainer.innerHTML = '<p>Помилка завантаження подій</p>';
  }
}

function displayItems(items) {
}
function setupPagination() {}