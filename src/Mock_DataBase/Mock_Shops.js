const MockShops = [
  {
    businessId: 1,
    name: 'Urban Outfitters',
    slug: 'urban-outfitters',
    description: 'Trendy and casual clothing for young adults.',
    address: 'Bulevardi Dëshmorët e Kombit, Tirana',
    latitude: 41.3275,
    longitude: 19.8189,
    categories: ['Men\'s Clothing', 'Women\'s Clothing', 'Accessories'],
    coverImage: '/Assets/urban-cover.jpg', // Cover image
    logoImage: '/Assets/urbanlogo.png',   // Logo image
    clothingItems: [
      { itemId: 1, name: 'Hoodie', price: 59.99, imageUrl: '/Assets/hoodie.png', category: 'Men\'s Clothing' },
      { itemId: 2, name: 'Jeans', price: 79.99, imageUrl: '/Assets/jeans.png', category: 'Women\'s Clothing' }
    ]
  },
  {
    businessId: 2,
    name: 'Audi Apparel',
    slug: 'audi-apparel',
    description: 'Premium apparel inspired by the luxury automotive brand.',
    address: 'Rruga Barrikadave, Tirana',
    latitude: 41.3294,
    longitude: 19.8190,
    categories: ['Outerwear', 'Accessories'],
    coverImage: '/Assets/audi-cover.jpg',
    logoImage: '/Assets/audi-logo.png',
    clothingItems: [
      { itemId: 3, name: 'Audi T-Shirt', price: 45.00, imageUrl: '/Assets/audi-shirt.png', category: 'Outerwear' },
      { itemId: 4, name: 'Audi Jacket', price: 150.00, imageUrl: '/Assets/audi-jacket.png', category: 'Outerwear' }
    ]
  },
  {
    businessId: 3,
    name: 'Nike Store',
    slug: 'nike-store',
    description: 'Official Nike store offering sportswear and footwear.',
    address: 'Rruga e Dibrës, Tirana',
    latitude: 41.3320,
    longitude: 19.8214,
    categories: ['Footwear', 'Sportswear'],
    coverImage: '/Assets/nike-cover.jpg',
    logoImage: '/Assets/nike-logo.png',
    clothingItems: [
      { itemId: 5, name: 'Running Shoes', price: 120.00, imageUrl: '/Assets/nike-shoes.png', category: 'Footwear' },
      { itemId: 6, name: 'Track Pants', price: 60.00, imageUrl: '/Assets/nike-pants.png', category: 'Sportswear' }
    ]
  },
  {
    businessId: 4,
    name: 'Adidas Store',
    slug: 'adidas-store',
    description: 'Explore the latest Adidas collections for men and women.',
    address: 'Sheshi Skënderbej, Tirana',
    latitude: 41.3271,
    longitude: 19.8197,
    categories: ['Footwear', 'Accessories', 'Sportswear'],
    coverImage: '/Assets/adidas-cover.jpg',
    logoImage: '/Assets/adidas-logo.png',
    clothingItems: [
      { itemId: 7, name: 'Adidas Cap', price: 25.00, imageUrl: '/Assets/adidas-cap.png', category: 'Accessories' },
      { itemId: 8, name: 'Sneakers', price: 90.00, imageUrl: '/Assets/adidas-sneakers.png', category: 'Footwear' }
    ]
  },
  {
    businessId: 5,
    name: 'Zara',
    slug: 'zara',
    description: 'Fashion-forward clothing for men, women, and kids.',
    address: 'Rruga Myslym Shyri, Tirana',
    latitude: 41.3235,
    longitude: 19.8166,
    categories: ['Men\'s Clothing', 'Women\'s Clothing', 'Footwear'],
    coverImage: '/Assets/zara-cover.jpg',
    logoImage: '/Assets/zara-logo.png',
    clothingItems: [
      { itemId: 9, name: 'Blazer', price: 140.00, imageUrl: '/Assets/zara-blazer.png', category: 'Men\'s Clothing' },
      { itemId: 10, name: 'Boots', price: 110.00, imageUrl: '/Assets/zara-boots.png', category: 'Footwear' }
    ]
  },
  {
    businessId: 6,
    name: 'Levi\'s',
    slug: 'levis',
    description: 'Iconic denim clothing and accessories.',
    address: 'Rruga Kavajës, Tirana',
    latitude: 41.3248,
    longitude: 19.8127,
    categories: ['Denim', 'Men\'s Clothing', 'Women\'s Clothing'],
    coverImage: '/Assets/levis-cover.jpg',
    logoImage: '/Assets/levis-logo.png',
    clothingItems: [
      { itemId: 11, name: 'Denim Jacket', price: 150.00, imageUrl: '/Assets/levis-jacket.png', category: 'Denim' },
      { itemId: 12, name: 'Jeans', price: 80.00, imageUrl: '/Assets/levis-jeans.png', category: 'Denim' }
    ]
  }
];

export default MockShops;
