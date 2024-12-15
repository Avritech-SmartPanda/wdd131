const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
	{
        templeName: "Bern Switzerland Temple",
        location: "Bern, Switzerland",
        dedicated: "1992, January, 1",
        area: 10130,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/320x200/bern-switzerland-temple-lds-784288-wallpaper.jpg"
    },
    {
        templeName: "Billings Montana Temple",
        location: "Billings, Montana, United States",
        dedicated: "2008, November, 21",
        area: 10000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/320x200/02-Billings-Montana-Temple-1572044.jpg"
    },
    {
        templeName: "Boise Idaho Temple",
        location: "Boise, Idaho, United States",
        dedicated: "1984, September, 23",
        area: 10600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/2018/320x200/1-Boise-Idaho-Temple-1968984.jpg"
    }
];



function createTempleCard(temple) {
	const card = document.createElement('div');
	card.classList.add('temple-card');

	const img = document.createElement('img');
	img.classList.add('temple-image');
	img.src = temple.imageUrl;
	img.alt = `${temple.templeName} image`;
	img.loading = 'lazy'; 

	const name = document.createElement('h3');
	name.textContent = temple.templeName;

	const location = document.createElement('p');
	location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
	
	const dedicated = document.createElement('p');
	dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

	const area = document.createElement('p');
	area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq. ft.`;

	card.appendChild(img);
	card.appendChild(name);
	card.appendChild(location);
	card.appendChild(dedicated);
	card.appendChild(area);

	return card;
}


function filterTemples(category) {
	const container = document.getElementById('temple-cards-container');
	container.innerHTML = '';

	let filteredTemples = [];

	switch (category) {
		case 'Old':
			filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
			break;
		case 'New':
			filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
			break;
		case 'Large':
			filteredTemples = temples.filter(temple => temple.area > 90000);
			break;
		case 'Small':
			filteredTemples = temples.filter(temple => temple.area < 10000);
			break;
		default:
			filteredTemples = temples;
			break;
	}

	filteredTemples.forEach(temple => {
		container.appendChild(createTempleCard(temple));
	});
}


filterTemples('Home');