// MockShops.js

const MockShops = [
  {
    businessId: 1,
    name: 'Urban Outfitters',
    slug: 'urban-outfitters',
    description: 'Trendy and casual clothing for young adults.',
    address: 'Bulevardi Dëshmorët e Kombit, Tirana',
    latitude: 41.3275,
    longitude: 19.8189,
    categories: [
      "Men's Clothing",
      "Women's Clothing",
      'Accessories',
      'Kapuca',
      'Doreza',
      'Thika',
      'Dildo',
      'Pasaporta Fals',
      'Arme',
      'Pistoleta',
      'Kobure',
      'Flamuj',
      'Tanga Per Burra',
      'Shampo',
      'Kpuc te Kuqe',
      'Zezak per pun',
      'Ani',
    ],
    coverImage: '/Assets/urban-cover.jpg',
    logoImage: '/Assets/urbanlogo.png',
    clothingItems: [
      {
        itemId: 1,
        slug: 'hoodie',
        name: 'Hoodie',
        price: 59.99,
        imageUrl: '/Assets/hoodie.png',
        category: "Men's Clothing",
        info: 'Great hoodie for winter',
        images: [
          '/Assets/hoodie.png',
          '/Assets/jeans.png',
          '/Assets/hoodie3.png',
          '/Assets/hoodie4.png',
          '/Assets/hoodie5.png',
          '/Assets/hoodie6.png',
          '/Assets/hoodie7.png',
          '/Assets/hoodie8.png',
          '/Assets/hoodie9.png',
          '/Assets/hoodie10.png'
        ],
        available: true,
        stockLeft: 15
      },
      {
        itemId: 2,
        slug: 'jeans',
        name: 'Jeans',
        price: 79.99,
        imageUrl: '/Assets/jeans.png',
        category: "Women's Clothing",
        info: 'Good material',
        images: [
          '/Assets/jeans1.png',
          '/Assets/jeans2.png',
          '/Assets/jeans3.png',
          '/Assets/jeans4.png',
          '/Assets/jeans5.png',
          '/Assets/jeans6.png',
          '/Assets/jeans7.png',
          '/Assets/jeans8.png',
          '/Assets/jeans9.png',
          '/Assets/jeans10.png'
        ],
        available: true,
        stockLeft: 8
      },
      {
        itemId: 3,
        slug: 'brekushe',
        name: 'Brekushe',
        price: 79.99,
        imageUrl: '/Assets/jeans.png',
        category: 'Accessories',
        info: 'Good material',
        images: ['/Assets/brekushe1.png'],
        available: false,
        stockLeft: 0
      },
      {
        itemId: 4,
        slug: 'kapuc',
        name: 'Kapuc',
        price: 79.99,
        imageUrl: '/Assets/jeans.png',
        category: 'Kapuca',
        info: 'Good material',
        images: [
          '/Assets/kapuc1.png',
          '/Assets/kapuc2.png',
          '/Assets/kapuc3.png',
          '/Assets/kapuc4.png',
          '/Assets/kapuc5.png',
          '/Assets/kapuc6.png',
          '/Assets/kapuc7.png',
          '/Assets/kapuc8.png',
          '/Assets/kapuc9.png',
          '/Assets/kapuc10.png'
        ],
        available: true,
        stockLeft: 5
      },
      {
        itemId: 5,
        slug: 'dorez',
        name: 'Dorez',
        price: 79.99,
        imageUrl: '/Assets/jeans.png',
        category: 'Doreza',
        info: 'Good material',
        images: [
          '/Assets/dorez1.png',
          '/Assets/dorez2.png',
          '/Assets/dorez3.png',
          '/Assets/dorez4.png',
          '/Assets/dorez5.png',
          '/Assets/dorez6.png',
          '/Assets/dorez7.png',
          '/Assets/dorez8.png',
          '/Assets/dorez9.png',
          '/Assets/dorez10.png'
        ],
        available: true,
        stockLeft: 12
      },
      {
        itemId: 6,
        slug: 'thik',
        name: 'Thik',
        price: 79.99,
        imageUrl: '/Assets/jeans.png',
        category: 'Thika',
        info: 'Good material',
        images: [
          '/Assets/thik1.png',
          '/Assets/thik2.png',
          '/Assets/thik3.png',
          '/Assets/thik4.png',
          '/Assets/thik5.png',
          '/Assets/thik6.png',
          '/Assets/thik7.png',
          '/Assets/thik8.png',
          '/Assets/thik9.png',
          '/Assets/thik10.png'
        ],
        available: false,
        stockLeft: 0
      },
      {
        itemId: 7,
        slug: 'dildo-roz',
        name: 'Dildo Roz',
        price: 79.99,
        imageUrl: '/Assets/jeans.png',
        category: 'Dildo',
        info: 'Good material',
        images: [
          '/Assets/dildo-roz1.png',
          '/Assets/dildo-roz2.png',
          '/Assets/dildo-roz3.png',
          '/Assets/dildo-roz4.png',
          '/Assets/dildo-roz5.png',
          '/Assets/dildo-roz6.png',
          '/Assets/dildo-roz7.png',
          '/Assets/dildo-roz8.png',
          '/Assets/dildo-roz9.png',
          '/Assets/dildo-roz10.png'
        ],
        available: true,
        stockLeft: 20
      },
      {
        itemId: 8,
        slug: 'dildo-blu',
        name: 'Dildo Blu',
        price: 79.99,
        imageUrl: '/Assets/jeans.png',
        category: 'Dildo',
        info: 'Good material',
        images: [
          '/Assets/dildo-blu1.png',
          '/Assets/dildo-blu2.png',
          '/Assets/dildo-blu3.png',
          '/Assets/dildo-blu4.png',
          '/Assets/dildo-blu5.png',
          '/Assets/dildo-blu6.png',
          '/Assets/dildo-blu7.png',
          '/Assets/dildo-blu8.png',
          '/Assets/dildo-blu9.png',
          '/Assets/dildo-blu10.png'
        ],
        available: false,
        stockLeft: 0
      },
      {
        itemId: 9,
        slug: 'pasaport-franceze',
        name: 'Pasaport Franceze',
        price: 79.99,
        imageUrl: '/Assets/jeans.png',
        category: 'Pasaporta Fals',
        info: 'Good material',
        images: [
          '/Assets/pasaport-franceze1.png',
          '/Assets/pasaport-franceze2.png',
          '/Assets/pasaport-franceze3.png',
          '/Assets/pasaport-franceze4.png',
          '/Assets/pasaport-franceze5.png',
          '/Assets/pasaport-franceze6.png',
          '/Assets/pasaport-franceze7.png',
          '/Assets/pasaport-franceze8.png',
          '/Assets/pasaport-franceze9.png',
          '/Assets/pasaport-franceze10.png'
        ],
        available: true,
        stockLeft: 3
      },
      // New items added below (itemId: 13 - 22)
      {
        itemId: 13,
        slug: 't-shirt-basic',
        name: 'Basic T-Shirt',
        price: 25.0,
        imageUrl: '/Assets/tshirt.png',
        category: "Men's Clothing",
        info: 'Simple and stylish basic t-shirt.',
        images: [
          '/Assets/tshirt.png',
          '/Assets/tshirt_alt1.png',
          '/Assets/tshirt_alt2.png'
        ],
        available: true,
        stockLeft: 20
      },
      {
        itemId: 14,
        slug: 'floral-dress',
        name: 'Floral Dress',
        price: 65.0,
        imageUrl: '/Assets/floral-dress.png',
        category: "Women's Clothing",
        info: 'Light and breezy floral dress for summer.',
        images: [
          '/Assets/floral-dress.png',
          '/Assets/floral-dress_alt1.png',
          '/Assets/floral-dress_alt2.png'
        ],
        available: true,
        stockLeft: 10
      },
      {
        itemId: 15,
        slug: 'beanie',
        name: 'Beanie',
        price: 15.0,
        imageUrl: '/Assets/beanie.png',
        category: 'Accessories',
        info: 'Warm beanie to keep you cozy.',
        images: [
          '/Assets/beanie.png',
          '/Assets/beanie_alt1.png'
        ],
        available: true,
        stockLeft: 30
      },
      {
        itemId: 16,
        slug: 'sneaker',
        name: 'Sneaker',
        price: 85.0,
        imageUrl: '/Assets/sneaker.png',
        category: "Men's Clothing",
        info: 'Comfortable everyday sneakers.',
        images: [
          '/Assets/sneaker.png',
          '/Assets/sneaker_alt1.png'
        ],
        available: true,
        stockLeft: 12
      },
      {
        itemId: 17,
        slug: 'mini-skirt',
        name: 'Mini Skirt',
        price: 45.0,
        imageUrl: '/Assets/mini-skirt.png',
        category: "Women's Clothing",
        info: 'Trendy mini skirt for a casual look.',
        images: [
          '/Assets/mini-skirt.png',
          '/Assets/mini-skirt_alt1.png'
        ],
        available: true,
        stockLeft: 18
      },
      {
        itemId: 18,
        slug: 'scarf',
        name: 'Scarf',
        price: 20.0,
        imageUrl: '/Assets/scarf.png',
        category: 'Accessories',
        info: 'Warm and fashionable scarf.',
        images: [
          '/Assets/scarf.png',
          '/Assets/scarf_alt1.png'
        ],
        available: true,
        stockLeft: 25
      },
      {
        itemId: 19,
        slug: 'hooded-jacket',
        name: 'Hooded Jacket',
        price: 95.0,
        imageUrl: '/Assets/hooded-jacket.png',
        category: "Men's Clothing",
        info: 'Stylish hooded jacket for cooler days.',
        images: [
          '/Assets/hooded-jacket.png',
          '/Assets/hooded-jacket_alt1.png'
        ],
        available: true,
        stockLeft: 8
      },
      {
        itemId: 20,
        slug: 'pencil-skirt',
        name: 'Pencil Skirt',
        price: 70.0,
        imageUrl: '/Assets/pencil-skirt.png',
        category: "Women's Clothing",
        info: 'Elegant pencil skirt perfect for work.',
        images: [
          '/Assets/pencil-skirt.png',
          '/Assets/pencil-skirt_alt1.png'
        ],
        available: true,
        stockLeft: 15
      },
      {
        itemId: 21,
        slug: 'sunglasses',
        name: 'Sunglasses',
        price: 40.0,
        imageUrl: '/Assets/sunglasses.png',
        category: 'Accessories',
        info: 'UV protection sunglasses with a modern design.',
        images: [
          '/Assets/sunglasses.png',
          '/Assets/sunglasses_alt1.png'
        ],
        available: true,
        stockLeft: 20
      },
      {
        itemId: 22,
        slug: 'leather-belt',
        name: 'Leather Belt',
        price: 35.0,
        imageUrl: '/Assets/leather-belt.png',
        category: 'Accessories',
        info: 'Genuine leather belt that lasts.',
        images: [
          '/Assets/leather-belt.png',
          '/Assets/leather-belt_alt1.png'
        ],
        available: true,
        stockLeft: 22
      }
    ],
    hours: 'Mon-Sat 10:00-21:00, Sun 12:00-18:00',
    currently: 'Open',
    contact: { email: 'contact@urbanoutfitters.com', phone: '+355 4 123 4567' },
    socialMedia: {
      instagram: 'https://instagram.com/urban_outfitters',
      facebook: 'https://facebook.com/urbanoutfitters'
    }
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
      {
        itemId: 3,
        slug: 'audi-t-shirt',
        name: 'Audi T-Shirt',
        price: 45.0,
        imageUrl: '/Assets/audi-shirt.png',
        category: 'Outerwear',
        info: 'Comfortable and stylish',
        images: [
          '/Assets/audi-t-shirt1.png',
          '/Assets/audi-t-shirt2.png',
          '/Assets/audi-t-shirt3.png',
          '/Assets/audi-t-shirt4.png',
          '/Assets/audi-t-shirt5.png',
          '/Assets/audi-t-shirt6.png',
          '/Assets/audi-t-shirt7.png',
          '/Assets/audi-t-shirt8.png',
          '/Assets/audi-t-shirt9.png',
          '/Assets/audi-t-shirt10.png'
        ],
        available: true,
        stockLeft: 10
      },
      {
        itemId: 4,
        slug: 'audi-jacket',
        name: 'Audi Jacket',
        price: 150.0,
        imageUrl: '/Assets/audi-jacket.png',
        category: 'Outerwear',
        info: 'Premium quality jacket',
        images: [
          '/Assets/audi-jacket1.png',
          '/Assets/audi-jacket2.png',
          '/Assets/audi-jacket3.png',
          '/Assets/audi-jacket4.png',
          '/Assets/audi-jacket5.png',
          '/Assets/audi-jacket6.png',
          '/Assets/audi-jacket7.png',
          '/Assets/audi-jacket8.png',
          '/Assets/audi-jacket9.png',
          '/Assets/audi-jacket10.png'
        ],
        available: false,
        stockLeft: 0
      }
    ],
    hours: 'Mon-Sat 9:00-20:00',
    contact: { email: 'info@audifashion.com', phone: '+355 4 234 5678' },
    socialMedia: {
      instagram: 'https://instagram.com/audi_apparel',
      facebook: 'https://facebook.com/audifashion'
    }
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
      {
        itemId: 5,
        slug: 'running-shoes',
        name: 'Running Shoes',
        price: 120.0,
        imageUrl: '/Assets/nike-shoes.png',
        category: 'Footwear',
        info: 'Lightweight and durable',
        images: [
          '/Assets/running-shoes1.png',
          '/Assets/running-shoes2.png',
          '/Assets/running-shoes3.png',
          '/Assets/running-shoes4.png',
          '/Assets/running-shoes5.png',
          '/Assets/running-shoes6.png',
          '/Assets/running-shoes7.png',
          '/Assets/running-shoes8.png',
          '/Assets/running-shoes9.png',
          '/Assets/running-shoes10.png'
        ],
        available: true,
        stockLeft: 7
      },
      {
        itemId: 6,
        slug: 'track-pants',
        name: 'Track Pants',
        price: 60.0,
        imageUrl: '/Assets/nike-pants.png',
        category: 'Sportswear',
        info: 'Comfortable for workouts',
        images: [
          '/Assets/track-pants1.png',
          '/Assets/track-pants2.png',
          '/Assets/track-pants3.png',
          '/Assets/track-pants4.png',
          '/Assets/track-pants5.png',
          '/Assets/track-pants6.png',
          '/Assets/track-pants7.png',
          '/Assets/track-pants8.png',
          '/Assets/track-pants9.png',
          '/Assets/track-pants10.png'
        ],
        available: true,
        stockLeft: 20
      }
    ],
    hours: 'Daily 10:00-22:00',
    contact: { email: 'support@nike.com', phone: '+355 4 345 6789' },
    socialMedia: {
      instagram: 'https://instagram.com/nikestore',
      facebook: 'https://facebook.com/nikestore'
    }
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
      {
        itemId: 7,
        slug: 'adidas-cap',
        name: 'Adidas Cap',
        price: 25.0,
        imageUrl: '/Assets/adidas-cap.png',
        category: 'Accessories',
        info: 'Stylish cap',
        images: [
          '/Assets/adidas-cap1.png',
          '/Assets/adidas-cap2.png',
          '/Assets/adidas-cap3.png',
          '/Assets/adidas-cap4.png',
          '/Assets/adidas-cap5.png',
          '/Assets/adidas-cap6.png',
          '/Assets/adidas-cap7.png',
          '/Assets/adidas-cap8.png',
          '/Assets/adidas-cap9.png',
          '/Assets/adidas-cap10.png'
        ],
        available: true,
        stockLeft: 15
      },
      {
        itemId: 8,
        slug: 'sneakers',
        name: 'Sneakers',
        price: 90.0,
        imageUrl: '/Assets/adidas-sneakers.png',
        category: 'Footwear',
        info: 'Comfortable sneakers',
        images: [
          '/Assets/sneakers1.png',
          '/Assets/sneakers2.png',
          '/Assets/sneakers3.png',
          '/Assets/sneakers4.png',
          '/Assets/sneakers5.png',
          '/Assets/sneakers6.png',
          '/Assets/sneakers7.png',
          '/Assets/sneakers8.png',
          '/Assets/sneakers9.png',
          '/Assets/sneakers10.png'
        ],
        available: false,
        stockLeft: 0
      }
    ],
    hours: 'Mon-Sat 9:00-19:00',
    contact: { email: 'hello@adidasstore.com', phone: '+355 4 456 7890' },
    socialMedia: {
      instagram: 'https://instagram.com/adidasstore',
      facebook: 'https://facebook.com/adidasstore'
    }
  },
  {
    businessId: 5,
    name: 'Zara',
    slug: 'zara',
    description: 'Fashion-forward clothing for men, women, and kids.',
    address: 'Rruga Myslym Shyri, Tirana',
    latitude: 41.3235,
    longitude: 19.8166,
    categories: ["Men's Clothing", "Women's Clothing", 'Footwear'],
    coverImage: '/Assets/zara-cover.jpg',
    logoImage: '/Assets/zara-logo.png',
    clothingItems: [
      {
        itemId: 9,
        slug: 'blazer',
        name: 'Blazer',
        price: 140.0,
        imageUrl: '/Assets/zara-blazer.png',
        category: "Men's Clothing",
        info: 'Elegant blazer',
        images: [
          '/Assets/blazer1.png',
          '/Assets/blazer2.png',
          '/Assets/blazer3.png',
          '/Assets/blazer4.png',
          '/Assets/blazer5.png',
          '/Assets/blazer6.png',
          '/Assets/blazer7.png',
          '/Assets/blazer8.png',
          '/Assets/blazer9.png',
          '/Assets/blazer10.png'
        ],
        available: true,
        stockLeft: 4
      },
      {
        itemId: 10,
        slug: 'boots',
        name: 'Boots',
        price: 110.0,
        imageUrl: '/Assets/zara-boots.png',
        category: 'Footwear',
        info: 'Durable boots',
        images: [
          '/Assets/boots1.png',
          '/Assets/boots2.png',
          '/Assets/boots3.png',
          '/Assets/boots4.png',
          '/Assets/boots5.png',
          '/Assets/boots6.png',
          '/Assets/boots7.png',
          '/Assets/boots8.png',
          '/Assets/boots9.png',
          '/Assets/boots10.png'
        ],
        available: false,
        stockLeft: 0
      }
    ],
    hours:
      'Mon-Fri 9:30-21:00, Sat 9:30-22:00, Sun 11:00-20:00',
    contact: { email: 'service@zara.com', phone: '+355 4 567 8901' },
    socialMedia: {
      instagram: 'https://instagram.com/zara',
      facebook: 'https://facebook.com/zara'
    }
  },
  {
    businessId: 6,
    name: "Levi's",
    slug: 'levis',
    description: 'Iconic denim clothing and accessories.',
    address: 'Rruga Kavajës, Tirana',
    latitude: 41.3248,
    longitude: 19.8127,
    categories: ['Denim', "Men's Clothing", "Women's Clothing"],
    coverImage: '/Assets/levis-cover.jpg',
    logoImage: '/Assets/levis-logo.png',
    clothingItems: [
      {
        itemId: 11,
        slug: 'denim-jacket',
        name: 'Denim Jacket',
        price: 150.0,
        imageUrl: '/Assets/levis-jacket.png',
        category: 'Denim',
        info: 'Classic denim jacket',
        images: [
          '/Assets/denim-jacket1.png',
          '/Assets/denim-jacket2.png',
          '/Assets/denim-jacket3.png',
          '/Assets/denim-jacket4.png',
          '/Assets/denim-jacket5.png',
          '/Assets/denim-jacket6.png',
          '/Assets/denim-jacket7.png',
          '/Assets/denim-jacket8.png',
          '/Assets/denim-jacket9.png',
          '/Assets/denim-jacket10.png'
        ],
        available: true,
        stockLeft: 5
      },
      {
        itemId: 12,
        slug: 'levis-jeans',
        name: 'Jeans',
        price: 80.0,
        imageUrl: '/Assets/levis-jeans.png',
        category: 'Denim',
        info: 'Comfortable denim jeans',
        images: [
          '/Assets/levis-jeans1.png',
          '/Assets/levis-jeans2.png',
          '/Assets/levis-jeans3.png',
          '/Assets/levis-jeans4.png',
          '/Assets/levis-jeans5.png',
          '/Assets/levis-jeans6.png',
          '/Assets/levis-jeans7.png',
          '/Assets/levis-jeans8.png',
          '/Assets/levis-jeans9.png',
          '/Assets/levis-jeans10.png'
        ],
        available: true,
        stockLeft: 9
      }
    ],
    hours: 'Mon-Sat 10:00-20:00, Sun 12:00-18:00',
    contact: { email: 'ask@levis.com', phone: '+355 4 678 9012' },
    socialMedia: {
      instagram: 'https://instagram.com/levis',
      facebook: 'https://facebook.com/levis'
    }
  }
];

export default MockShops;
