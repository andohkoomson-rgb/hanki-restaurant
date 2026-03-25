// Hanki Korean Restaurant — Brand & Content Configuration
// Korkalonkatu 2C, 96100 Rovaniemi, Finland

export const restaurant = {
  name: 'Hanki',
  tagline: 'Korean flavours, Lappish soul',
  nameOrigin: {
    korean: 'One meal — a single, complete experience',
    finnish:
      'The moment spring sun first touches snow. The warmth that ends a long winter.',
  },
  address: 'Korkalonkatu 2C, 96100 Rovaniemi, Finland',
  phone: '+358 40 161 7898',
  email: null,
  social: {
    instagram: 'https://www.instagram.com/hanki_restaurant_official/',
    facebook: 'https://www.facebook.com/tangoHanski/',
  },
  delivery: {
    wolt: 'https://wolt.com/en/fin/rovaniemi/restaurant/hanki-korean-restaurant',
  },
  hours: {
    weekdays: { open: '11:00', close: '20:00', label: 'Mon – Fri' },
    saturday: { open: '13:00', close: '20:00', label: 'Saturday' },
    sunday: null,
  },
  ratings: {
    google: 4.9,
    tripadvisor: { score: 4.9, rank: 6, total: 120 },
    reviewCount: 876,
  },
  about:
    'A family-run Korean restaurant in the heart of Rovaniemi, blending traditional Korean recipes with local Lappish ingredients. Authentic, warm, and a little unexpected.',
};

export const menu = {
  starters: [
    {
      id: 'dumplings',
      name: 'Korean Handmade Dumpling Soup',
      description: 'Delicate handmade dumplings in a clear, savoury broth.',
      tags: [],
    },
    {
      id: 'fried-chicken',
      name: 'Fried Chicken with Korean Sauce',
      description: 'Crispy fried chicken glazed in house Korean sauce.',
      tags: [],
    },
  ],
  mains: [
    {
      id: 'bibimbap-beef',
      name: 'Bulgogi Bibimbap',
      description:
        'Marinated beef with seasonal vegetables and gochujang sauce.',
      price: 17.9,
      tags: [],
    },
    {
      id: 'bibimbap-vegan',
      name: 'Original Bibimbap',
      description: 'Classic bibimbap, fully plant-based.',
      price: 17.9,
      tags: ['vegan'],
    },
    {
      id: 'kimchi-jjigae',
      name: 'Kimchi Jjigae',
      description:
        'Rich spicy kimchi stew with pork or tuna, tofu, and green onions.',
      tags: [],
    },
    {
      id: 'salmon-avocado',
      name: 'Salmon & Avocado',
      description:
        'Grilled salmon with creamy avocado, pickled arugula, broccolini, and fried onion.',
      tags: [],
    },
    {
      id: 'pork-stir-fry',
      name: 'Jeyuk Bokkeum',
      description:
        'Tender pork strips stir-fried with onions, served with fresh seasonal salad.',
      tags: ['spicy'],
    },
    {
      id: 'korean-bbq-pork',
      name: 'Korean BBQ Pork',
      description: 'Grilled pork in homemade Korean BBQ sauce with eggplant mixed rice.',
      tags: [],
    },
    {
      id: 'crispy-tofu',
      name: 'Crispy Tofu',
      description:
        'Crispy fried tofu in fermented soy and gochujang sauce.',
      tags: ['vegan'],
    },
    {
      id: 'kimchi-burger',
      name: 'Kimchi Avocado Burger',
      description: 'Avocado, kimchi, cabbage and spinach burger with crispy tofu chips.',
      tags: ['vegan'],
    },
  ],
  drinks: [
    { id: 'green-tea', name: 'Hot Green Tea', price: null, note: 'Complimentary' },
    { id: 'coffee', name: 'Coffee', price: null, note: 'Complimentary' },
    { id: 'cocopalm', name: 'Cocopalm', price: 3.5, tags: ['cold'] },
    { id: 'honey-citron', name: 'Honey-Citron Tea', price: 5.5 },
  ],
};
