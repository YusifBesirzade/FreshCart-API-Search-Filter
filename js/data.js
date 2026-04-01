// Filter Data post api start
const filterdata = [
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/category/category-dairy-bread-eggs.jpg",
        "category": "Dairy, Bread & Eggs"
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/category/category-snack-munchies.jpg",
        "category": "Snack & Munchies"
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/category/category-bakery-biscuits.jpg",
        "category": "Bakery & Biscuits"
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/category/category-instant-food.jpg",
        "category": "Instant Food"
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/category/category-tea-coffee-drinks.jpg",
        "category": "Tea, Coffee & Drinks"
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/category/category-atta-rice-dal.jpg",
        "category": "Atta, Rice & Dal"
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/category/category-baby-care.jpg",
        "category": "Baby Care"
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/category/category-chicken-meat-fish.jpg",
        "category": "Chicken, Meat & Fish"
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/category/category-cleaning-essentials.jpg",
        "category": "Cleaning Essentials"
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/category/category-pet-care.jpg",
        "category": "Pet Care"
    },
]

// filterdata.forEach(item => {
//   fetch('https://69c575498a5b6e2dec2c8520.mockapi.io/api/pr1/productfilter', {
//   method: 'POST',
//   body: JSON.stringify(item),
//   headers: {
//     'Content-Type': 'application/json' 
//   }
// })
// .then((response) => response.json()) 
// .then(res => console.log(res)) 
// })


// End

// Products post api start
const productsdata = [
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/products/product-img-1.jpg",
        "category": "Snack & Munchies",
        "name": "Haldiram's Sev Bhujia",
        "commentcount": 149,
        "price": 18
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/products/product-img-2.jpg",
        "category": "Bakery & Biscuits  ",
        "name": "NutriChoice Digestive",
        "commentcount": 25,
        "price": 24
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/products/product-img-3.jpg",
        "category": "Bakery & Biscuits",
        "name": "Cadbury 5 Star Chocolate",
        "commentcount": 469,
        "price": 32
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/products/product-img-4.jpg",
        "category": "Snack & Munchies",
        "name": "Onion Flavour Potato",
        "commentcount": 456,
        "price": 3
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/products/product-img-5.jpg",
        "category": "Instant Food",
        "name": "Salted Instant Popcorn",
        "commentcount": 39,
        "price": 13
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/products/product-img-6.jpg",
        "category": "Dairy, Bread & Eggs",
        "name": "Blueberry Greek Yogurt",
        "commentcount": 189,
        "price": 18
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/products/product-img-7.jpg",
        "category": "Dairy, Bread & Eggs",
        "name": "Britannia Cheese Slices",
        "commentcount": 345,
        "price": 24
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/products/product-img-8.jpg",
        "category": "Instant Food",
        "name": "Kellogg's Original Cereals",
        "commentcount": 90,
        "price": 32
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/products/product-img-9.jpg",
        "category": "Snack & Munchies",
        "name": "Slurrp Millet Chocolate",
        "commentcount": 90,
        "price": 3
    },
    {
        "image": "https://themewagon.github.io/freshcart/assets/images/products/product-img-10.jpg",
        "category": "Dairy Bread & Eggs",
        "name": "Amul Butter - 500 g",
        "commentcount": 90,
        "price": 13
    },
]

// productsdata.forEach(item => {
//   fetch('https://69c575498a5b6e2dec2c8520.mockapi.io/api/pr1/products', {
//   method: 'POST',
//   body: JSON.stringify(item),
//   headers: {
//     'Content-Type': 'application/json' 
//   }
// })
// .then((response) => response.json()) 
// .then(res => console.log(res)) 
// })

// End

// Detail page data start

const detaildata = [
  {
    "productId": 1,
    "description": "Xırt-xırtlı və ədviyyəli hind qəlyanaltısıdır. Gün ərzində snack kimi istifadə üçün idealdır.",
    "brand": "Haldiram's",
    "stock": 50,
    "rating": 4.5,
    "reviews": 149,
    "weight": "200g",
    "sku": "SNACK-001"
  },
  {
    "productId": 2,
    "description": "Sağlamlıq üçün faydalı liflə zəngin biskvitdir. Çay və qəhvə ilə mükəmməl uyğunlaşır.",
    "brand": "NutriChoice",
    "stock": 30,
    "rating": 4.2,
    "reviews": 25,
    "weight": "300g",
    "sku": "BISC-002"
  },
  {
    "productId": 3,
    "description": "Dadlı və yumşaq pendir dilimləri. Səhər yeməkləri üçün ideal seçimdir.",
    "brand": "Britannia",
    "stock": 40,
    "rating": 4.7,
    "reviews": 345,
    "weight": "150g",
    "sku": "CHEESE-003"
  },
  {
    "productId": 4,
    "description": "Proteinlə zəngin blueberry dadlı yunan qatığı. Sağlam həyat üçün ideal seçimdir.",
    "brand": "Greek Fresh",
    "stock": 35,
    "rating": 4.6,
    "reviews": 189,
    "weight": "250g",
    "sku": "YOG-004"
  },
  {
    "productId": 5,
    "description": "Soğan dadlı xırt-xırtlı kartof çipsləri. Əyləncə və film gecələri üçün əla seçimdir.",
    "brand": "Crunchy",
    "stock": 100,
    "rating": 4.3,
    "reviews": 456,
    "weight": "120g",
    "sku": "CHIPS-005"
  },
  {
    "productId": 6,
    "description": "Karamelli və şokoladlı məşhur Cadbury 5 Star baton. Şirin sevənlər üçün idealdır.",
    "brand": "Cadbury",
    "stock": 80,
    "rating": 4.8,
    "reviews": 469,
    "weight": "50g",
    "sku": "CHOCO-006"
  },
  {
    "productId": 7,
    "description": "Enerji verən səhər yeməyi taxılları. Süd ilə istifadə üçün uyğundur.",
    "brand": "Kellogg's",
    "stock": 60,
    "rating": 4.4,
    "reviews": 90,
    "weight": "500g",
    "sku": "CEREAL-007"
  },
  {
    "productId": 8,
    "description": "Tez hazırlanan duzlu popkorn. Film izləyərkən mükəmməl seçimdir.",
    "brand": "PopMagic",
    "stock": 75,
    "rating": 4.1,
    "reviews": 39,
    "weight": "100g",
    "sku": "POP-008"
  },
  {
    "productId": 9,
    "description": "Sağlam tərkibli şokoladlı qəlyanaltı. Uşaqlar və böyüklər üçün uyğundur.",
    "brand": "Slurrp",
    "stock": 45,
    "rating": 4.2,
    "reviews": 90,
    "weight": "80g",
    "sku": "SNACK-009"
  },
  {
    "productId": 10,
    "description": "Təzə və kremli kərə yağı. Səhər yeməkləri üçün ideal seçimdir.",
    "brand": "Amul",
    "stock": 55,
    "rating": 4.6,
    "reviews": 90,
    "weight": "500g",
    "sku": "BUTTER-010"
  }
]

// detaildata.forEach(item => {
//   fetch('https://69ccfa2cddc3cabb7bd1da79.mockapi.io/pd/pdetail', {
//   method: 'POST',
//   body: JSON.stringify(item),
//   headers: {
//     'Content-Type': 'application/json' 
//   }
// })
// .then((response) => response.json()) 
// .then(res => console.log(res)) 
// })

// End