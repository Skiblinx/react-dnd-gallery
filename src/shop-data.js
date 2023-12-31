const SHOP_DATA = [
  {
    id: 1,
    name: 'Nigeria',
    tag: 'Africa',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/nigeria-flag-png-large.png',
    price: 25,
  },
  {
    id: 2,
    name: 'Niger',
    tag: 'Africa',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/niger-flag-png-large.png',
    price: 160,
  },
  {
    id: 3,
    name: 'Mali',
    tag: 'Africa',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/mali-flag-png-large.png',
    price: 160,
  },
  {
    id: 4,
    name: 'Cameroon',
    tag: 'Africa',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/cameroon-flag-png-large.png',
    price: 160,
  },
  {
    id: 5,
    name: 'Burkinafaso',
    tag: 'Africa',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/burkina-faso-flag-png-large.png',
    price: 160,
  },
  {
    id: 6,
    name: 'Afghanistan',
    tag: 'Asia',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-1-2048x1365.jpg',
    price: 160,
  },
  {
    id: 7,
    name: 'Bangladesh',
    tag: 'Asia',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-14-768x461.jpg',
    price: 160,
  },
  {
    id: 8,
    name: 'Cambodia',
    tag: 'Asia',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/cambodia-flag-png-large.png',
    price: 160,
  },
  {
    id: 9,
    name: 'China',
    tag: 'Asia',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png',
    price: 160,
  },
  {
    id: 10,
    name: 'India',
    tag: 'Asia',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png',
    price: 160,
  },
  {
    id: 11,
    name: 'Albania',
    tag: 'Europe',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/albania-albanian-flag-png-square-large.png',
    price: 160,
  },
  {
    id: 12,
    name: 'Belgium',
    tag: 'Europe',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-18-768x666.jpg',
    price: 160,
  },
  {
    id: 13,
    name: 'Austria',
    tag: 'Europe',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-10-768x512.jpg',
    price: 160,
  },
  {
    id: 14,
    name: 'Russia',
    tag: 'Europe',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/russia-flag-png-large.png',
    price: 160,
  },
  {
    id: 15,
    name: 'Denmark',
    tag: 'Europe',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/denmark-flag-png-large.png',
    price: 160,
  },
  {
    id: 16,
    name: 'Bahamas',
    tag: 'North America',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-12-768x384.jpg',
    price: 160,
  },
  {
    id: 17,
    name: 'Barbados',
    tag: 'North America',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-15-768x512.jpg',
    price: 160,
  },
  {
    id: 18,
    name: 'Canada',
    tag: 'North America',
    imageUrl: 'https://cdn.countryflags.com/thumbs/canada/flag-800.png',
    price: 160,
  },
  {
    id: 19,
    name: 'Costa Rica',
    tag: 'North America',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/costa-rica-flag-png-large.png',
    price: 160,
  },
  {
    id: 20,
    name: 'Haiti',
    tag: 'North America',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/haiti-flag-png-large.png',
    price: 160,
  },
  {
    id: 21,
    name: 'Australia',
    tag: 'Oceania and Australia',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-768x384.jpg',
    price: 160,
  },
  {
    id: 22,
    name: 'Fiji',
    tag: 'Oceania and Australia',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/fiji-flag-png-large.png',
    price: 160,
  },
  {
    id: 23,
    name: 'New Zealand',
    tag: 'Oceania and Australia',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/new-zealand-flag-png-large.png',
    price: 160,
  },
  {
    id: 24,
    name: 'Palau',
    tag: 'Oceania and Australia',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/palau-flag-png-large.png',
    price: 160,
  },
  {
    id: 25,
    name: 'Tonga',
    tag: 'Oceania and Australia',
    imageUrl: 'https://cdn.countryflags.com/thumbs/tonga/flag-800.png',
    price: 160,
  },
  {
    id: 26,
    name: 'Argentina',
    tag: 'South America',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-7-768x481.jpg',
    price: 160,
  },
  {
    id: 27,
    name: 'Bolivia',
    tag: 'South America',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-768x525.jpg',
    price: 160,
  },
  {
    id: 28,
    name: 'Brazil',
    tag: 'South America',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png',
    price: 160,
  },
  {
    id: 29,
    name: 'Chile',
    tag: 'South America',
    imageUrl: 'https://www.countryflags.com/wp-content/uploads/chile-flag-png-large.png',
    price: 160,
  },
  {
    id: 30,
    name: 'Guyana',
    tag: 'South America',
    imageUrl: 'https://cdn.countryflags.com/thumbs/guyana/flag-800.png',
    price: 160,
  },

]

export default SHOP_DATA;