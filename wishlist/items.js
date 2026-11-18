/*
 * ============================================================
 *  Jon's Wishlist: item data
 * ============================================================
 *  This is the only file you need to edit to add, change, or
 *  remove items. Each item is one { ... } block in the list below.
 *
 *  Tip: open /wishlist/add.html in your browser, fill in the form,
 *  and it will write a ready-to-paste block for you.
 *
 *  Fields
 *  ------
 *  id         (required) short unique slug, used in the page URL.
 *             Lowercase letters, numbers, and dashes only.
 *  title      (required) item name.
 *  url        (required) link to the product page at the store.
 *  store      store name shown on the button ("Amazon", "REI", ...).
 *  price      number, e.g. 49.99. Leave out if it varies.
 *  image      main image. Either a full https:// image URL from the
 *             store (right-click the product photo > Copy Image Address)
 *             or a local file like "../assets/img/wishlist/skillet.jpg".
 *  images     optional list of extra images for the detail page.
 *  category   used for the filter buttons ("Kitchen", "Tech", ...).
 *  priority   "top", "high", or "nice". "top" items are featured
 *             in the spotlight section at the top of the page.
 *  summary    one line shown under the title.
 *  notes      anything the buyer needs to know: size, color, model.
 *  details    optional list of [label, value] pairs.
 *  qty        optional, how many you would like (default 1).
 *  gifted     set to true to mark an item as already received.
 *  added      date added, "YYYY-MM-DD". Used for "newest" sorting.
 * ============================================================
 */

window.WISHLIST_CONFIG = {
  title: "Christmas Wishlist",
  subtitle: "A few things I'd love this year",
  year: 2026,
  // Shown in the intro block under the hero
  intro:
    "Thanks for looking! Everything here links straight to the store. " +
    "Sizes, colors, and models are listed on each item, so you can grab exactly the right one."
};

window.WISHLIST = [
  {
    "id": "french-kitchen-marble-covered-butter-dish",
    "title": "French Kitchen Marble Covered Butter Dish",
    "url": "https://www.crateandbarrel.com/french-kitchen-marble-covered-butter-dish/s239165",
    "store": "Crate & Barrel",
    "price": 34.95,
    "image": "https://cb.scene7.com/is/image/Crate/FrenchKchMrblCvrdBttrDshSSF21?wid=800&fmt=jpg",
    "category": "Kitchen",
    "priority": "high",
    "summary": "White marble base with a glass dome; holds a half cup of butter.",
    "added": "2026-11-18"
  },
  {
    "id": "tuscan-marble-risers-set-of-2",
    "title": "Tuscan Marble Risers, Set of 2",
    "url": "https://www.crateandbarrel.com/tuscan-marble-risers-set-of-2/s398855",
    "store": "Crate & Barrel",
    "price": 97.96,
    "image": "https://cb.scene7.com/is/image/Crate/TuscanMarbleRiserS2SSS26?wid=800&fmt=jpg",
    "category": "Entertaining",
    "priority": "high",
    "summary": "Beige Tuscan marble rounds on stainless steel bases, two heights.",
    "added": "2026-11-18"
  },
  {
    "id": "carson-acacia-wood-cake-pedestal",
    "title": "Carson Acacia Wood Cake Pedestal",
    "url": "https://www.crateandbarrel.com/carson-acacia-wood-cake-pedestal/s146429",
    "store": "Crate & Barrel",
    "price": 79.95,
    "image": "https://cb.scene7.com/is/image/Crate/CarsonWoodPedSrvWDomeSHS18?wid=800&fmt=jpg",
    "category": "Entertaining",
    "priority": "high",
    "summary": "Acacia wood pedestal with a glass dome for cakes, cheese, and desserts.",
    "added": "2026-11-18"
  },
  {
    "id": "orchard-wooden-14-round-footed-serve-board",
    "title": "Orchard Wooden 14\" Round Footed Serve Board",
    "url": "https://www.crateandbarrel.com/orchard-wooden-14-round-footed-serve-board/s633584",
    "store": "Crate & Barrel",
    "price": 47.95,
    "image": "https://cb.scene7.com/is/image/Crate/OrchardWdn14inRdSrvBrdSSF25?wid=800&fmt=jpg",
    "category": "Entertaining",
    "priority": "high",
    "summary": "Footed mango wood board for cheese, charcuterie, or desserts.",
    "added": "2026-11-18"
  },
  {
    "id": "madeira-17-oak-wood-salad-serving-bowl",
    "title": "Madeira 17\" Oak Wood Salad Serving Bowl",
    "url": "https://www.crateandbarrel.com/madeira-17-oak-wood-salad-serving-bowl/s147254",
    "store": "Crate & Barrel",
    "price": 55.96,
    "image": "https://cb.scene7.com/is/image/Crate/MadeiraOakServeBwl17inSSF25?wid=800&fmt=jpg",
    "category": "Entertaining",
    "priority": "high",
    "summary": "Wide, shallow oak serving bowl for salads.",
    "details": [
      [
        "Size",
        "17 inch"
      ],
      [
        "Finish",
        "Oak"
      ]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "tuscan-kitchen-13-marble-platter",
    "title": "Tuscan Kitchen 13\" Marble Platter",
    "url": "https://www.crateandbarrel.com/tuscan-kitchen-13-marble-platter/s403505",
    "store": "Crate & Barrel",
    "price": 49.95,
    "image": "https://cb.scene7.com/is/image/Crate/TscnKtchnMrblPlttr1AVSSF26?wid=800&fmt=jpg",
    "category": "Entertaining",
    "priority": "high",
    "summary": "Round beige marble platter for cheese or charcuterie.",
    "details": [
      [
        "Size",
        "13 inch"
      ]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "madeira-14-walnut-finished-acacia-salad-serving-bowl",
    "title": "Madeira 14\" Walnut-Finished Acacia Salad Serving Bowl",
    "url": "https://www.crateandbarrel.com/madeira-14-walnut-finished-acacia-wood-salad-serving-bowl/s150483",
    "store": "Crate & Barrel",
    "price": 47.95,
    "image": "https://cb.scene7.com/is/image/Crate/MadeiraWnAcServeBwl14inSSF25?wid=800&fmt=jpg",
    "category": "Entertaining",
    "priority": "high",
    "summary": "Wide, shallow acacia serving bowl in a walnut finish.",
    "details": [
      [
        "Size",
        "14 inch"
      ],
      [
        "Finish",
        "Walnut"
      ]
    ],
    "added": "2026-11-18",
    "notes": "The 14 inch size, please."
  },
  {
    "id": "french-kitchen-marble-lazy-susan",
    "title": "French Kitchen Marble Lazy Susan",
    "url": "https://www.crateandbarrel.com/french-kitchen-marble-lazy-susan/s267718",
    "store": "Crate & Barrel",
    "price": 79.95,
    "image": "https://cb.scene7.com/is/image/Crate/FrenchKitchenLazySusanSSS20?wid=800&fmt=jpg",
    "category": "Entertaining",
    "priority": "high",
    "summary": "White marble spinning server for desserts, snacks, and dips.",
    "added": "2026-11-18"
  },
  {
    "id": "anchor-hocking-6-oz-glass-prep-bowl",
    "title": "Anchor Hocking 6-Oz. Glass Prep Bowl",
    "url": "https://www.crateandbarrel.com/anchor-hocking-6-oz.-glass-prep-bowl/s474740",
    "store": "Crate & Barrel",
    "price": 3.95,
    "image": "https://cb.scene7.com/is/image/Crate/GlassPrepBowl2SSF24?wid=800&fmt=jpg",
    "category": "Kitchen",
    "priority": "high",
    "summary": "Stackable glass bowls for mise en place.",
    "added": "2026-11-18",
    "qty": 6,
    "notes": "Please get 6. Price shown is per bowl."
  },
  {
    "id": "aspen-coupe-stoneware-mixing-and-serving-bowls-set-of-4",
    "title": "Aspen Coupe Stoneware Mixing and Serving Bowls, Set of 4",
    "url": "https://www.crateandbarrel.com/aspen-coupe-stoneware-mixing-and-serving-bowls-set-of-4/s434081",
    "store": "Crate & Barrel",
    "price": 44.95,
    "image": "https://cb.scene7.com/is/image/Crate/AspnCpStnwrMxgSvgBwlsS4SSF26?wid=800&fmt=jpg",
    "category": "Kitchen",
    "priority": "high",
    "summary": "Nesting stoneware bowls with a clean coupe shape.",
    "added": "2026-11-18"
  },
  {
    "id": "mori-matte-white-chip-and-dip-set-of-2",
    "title": "Mori Matte White Chip and Dip Set of 2",
    "url": "https://www.cb2.com/mori-matte-white-chip-and-dip-set-of-2/s524198",
    "store": "CB2",
    "price": 27,
    "image": "https://cb2.scene7.com/is/image/CB2/MoriMatteWhiteChipNDipS2AVSHS25?wid=800&fmt=jpg",
    "category": "Entertaining",
    "priority": "high",
    "summary": "Oval platter and dip bowl in a hand-applied matte white glaze.",
    "added": "2026-11-18"
  },
  {
    "id": "drift-ivory-cake-stand-with-matte-reactive-glaze",
    "title": "Drift Ivory Cake Stand With Matte Reactive Glaze",
    "url": "https://www.cb2.com/drift-ivory-cake-stand-with-matte-reactive-glaze/s302291",
    "store": "CB2",
    "price": 27,
    "image": "https://cb2.scene7.com/is/image/CB2/DriftIvryCkStdMttRctvGlzSHF26?wid=800&fmt=jpg",
    "category": "Entertaining",
    "priority": "high",
    "summary": "Stoneware cake stand with a crackled ivory glaze.",
    "added": "2026-11-18"
  },
  {
    "id": "small-brass-holiday-reindeer-decoration-8",
    "title": "Small Brass Holiday Reindeer Decoration 8\"",
    "url": "https://www.cb2.com/brass-holiday-reindeer-decoration-8/s563507",
    "store": "CB2",
    "price": 119,
    "image": "https://cb2.scene7.com/is/image/CB2/BrassReindeerSmallHolSHF26?wid=800&fmt=jpg",
    "category": "Home & Holiday",
    "priority": "high",
    "summary": "Unlacquered brass reindeer that develops a patina over time.",
    "details": [
      [
        "Size",
        "8 inch"
      ]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "nike-men-s-lightweight-training-shirts-browse",
    "title": "Nike Men's Lightweight Training Shirts (any)",
    "url": "https://www.nike.com/w/mens-training-gym-lightweight-short-sleeve-shirts-3k5ikz58jtoz6cb3pznik1",
    "store": "Nike",
    "image": "",
    "category": "Apparel",
    "priority": "nice",
    "summary": "Any of the lightweight short-sleeve training shirts on this page.",
    "notes": "Size: Medium",
    "added": "2026-11-18"
  },
  {
    "id": "nike-rise-365-men-s-dri-fit-running-top",
    "title": "Nike Rise 365 Men's Dri-FIT Running Top",
    "url": "https://www.nike.com/t/rise-365-mens-dri-fit-short-sleeve-running-top-rPq09C/CZ9184-084",
    "store": "Nike",
    "price": 55,
    "image": "https://static.nike.com/a/images/t_default/fe8af39f-8246-40ab-ab7a-739538296c8a/M+NK+DF+RISE+365+SS.png",
    "category": "Apparel",
    "priority": "high",
    "summary": "Short-sleeve Dri-FIT running top.",
    "notes": "Color as linked (style CZ9184-084). Size: Medium",
    "added": "2026-11-18"
  },
  {
    "id": "nike-dri-fit-men-s-fitness-t-shirt",
    "title": "Nike Dri-FIT Men's Fitness T-Shirt",
    "url": "https://www.nike.com/t/dri-fit-mens-fitness-t-shirt-nhgSHx/AR6029-010",
    "store": "Nike",
    "price": 26.97,
    "image": "https://static.nike.com/a/images/t_default/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8a8db8e2-13eb-4572-9ce9-8659ab63dd9b/M+NK+DF+TEE+DFC+CREW+SOLID.png",
    "category": "Apparel",
    "priority": "high",
    "summary": "Everyday Dri-FIT crew tee.",
    "notes": "Color as linked (style AR6029-010). Size: Medium",
    "added": "2026-11-18"
  },
  {
    "id": "nike-dri-fit-legend-men-s-fitness-t-shirt",
    "title": "Nike Dri-FIT Legend Men's Fitness T-Shirt",
    "url": "https://www.nike.com/t/dri-fit-legend-mens-fitness-t-shirt-JmKL0d/DX0989-451",
    "store": "Nike",
    "price": 32,
    "image": "https://static.nike.com/a/images/t_default/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e626672f-9503-4df3-a157-213c417b8fb3/M+NK+DF+TEE+RLGD+RESET.png",
    "category": "Apparel",
    "priority": "high",
    "summary": "Dri-FIT Legend training tee.",
    "notes": "Color as linked (style DX0989-451). Size: Medium",
    "added": "2026-11-18"
  },
  {
    "id": "scotsman-leather-dopp-kit",
    "title": "Scotsman Leather Dopp Kit",
    "url": "https://www.laurelmercantile.com/products/leather-dopp-kit",
    "store": "Laurel Mercantile",
    "price": 99.99,
    "image": "https://www.laurelmercantile.com/cdn/shop/files/Leather-Dopp-Kit-00001.webp?v=1774964778",
    "category": "Accessories",
    "priority": "high",
    "summary": "Handmade in Mississippi from premium leather with solid brass hardware.",
    "details": [
      [
        "Size",
        "10 x 6 x 6 in"
      ]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "penzeys-spices-browse",
    "title": "Penzeys Spices (any)",
    "url": "https://www.penzeys.com/shop/spices/?categoryId=166",
    "store": "Penzeys",
    "image": "",
    "category": "Pantry",
    "priority": "nice",
    "summary": "A gift card or any spices from Penzeys are always welcome.",
    "added": "2026-11-18"
  },
  {
    "id": "fox-point-seasoning",
    "title": "Fox Point Seasoning",
    "url": "https://www.penzeys.com/online-catalog/fox-point-seasoning/c-24/p-393/pd-s",
    "store": "Penzeys",
    "image": "https://www.penzeys.com/media/1981/fox_point_pot.jpg",
    "category": "Pantry",
    "priority": "high",
    "summary": "Penzeys blend for fish, vegetables, and dips.",
    "notes": "Please get the 1/2 cup jar (net 1.4 oz).",
    "added": "2026-11-18",
    "details": [
      [
        "Size",
        "1/2 cup jar, net 1.4 oz"
      ]
    ]
  },
  {
    "id": "smoked-spanish-paprika",
    "title": "Smoked Spanish Paprika",
    "url": "https://www.penzeys.com/online-catalog/smoked-spanish-paprika/c-24/p-1159/pd-s",
    "store": "Penzeys",
    "image": "https://www.penzeys.com/media/2147/paprika_smoked_pot.jpg",
    "category": "Pantry",
    "priority": "high",
    "summary": "Spanish-style paprika smoked over oak.",
    "notes": "Please get the 1/2 cup jar (net 1.4 oz).",
    "added": "2026-11-18",
    "details": [
      [
        "Size",
        "1/2 cup jar, net 1.4 oz"
      ]
    ]
  },
  {
    "id": "szechuan-pepper-salt",
    "title": "Szechuan Pepper Salt",
    "url": "https://www.penzeys.com/online-catalog/szechuan-pepper-salt/c-24/p-447/pd-s",
    "store": "Penzeys",
    "image": "https://www.penzeys.com/media/2310/szechuanpeppersalt_pot_13oz.jpg",
    "category": "Pantry",
    "priority": "high",
    "summary": "Szechuan peppercorns blended with salt.",
    "notes": "Please get the 1/2 cup jar (net 1.4 oz).",
    "added": "2026-11-18",
    "details": [
      [
        "Size",
        "1/2 cup jar, net 1.4 oz"
      ]
    ]
  },
  {
    "id": "yeahome-garden-flag-holder-stand",
    "title": "YEAHOME Garden Flag Holder Stand",
    "url": "https://www.amazon.com/dp/B088RLLQBG",
    "store": "Amazon",
    "price": 7.99,
    "image": "https://m.media-amazon.com/images/I/41sEkxPKlSL._AC_SL1500_.jpg",
    "category": "Home & Holiday",
    "priority": "high",
    "summary": "Weather-proof powder-coated metal yard flag stand with clip and stopper.",
    "added": "2026-11-18"
  },
  {
    "id": "pottery-barn-outdoor-lighting-browse",
    "title": "Pottery Barn Outdoor Lighting (any)",
    "url": "https://www.potterybarn.com/shop/lighting/outdoor-lighting-string-lights/",
    "store": "Pottery Barn",
    "image": "",
    "category": "Home & Holiday",
    "priority": "nice",
    "summary": "Anything from Pottery Barn's outdoor and string lighting collection.",
    "added": "2026-11-18"
  },
  {
    "id": "solar-outdoor-lit-dandelion-led-lawn-stakes",
    "title": "Solar Outdoor Lit Dandelion LED Lawn Stakes",
    "url": "https://www.potterybarn.com/products/solar-outdoor-lit-dandelion-lawn-stakes-mp/",
    "store": "Pottery Barn",
    "price": 45,
    "image": "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202642/0161/solar-outdoor-lit-dandelion-led-lawn-stakes-9-c.jpg",
    "category": "Home & Holiday",
    "priority": "high",
    "summary": "Solar LED dandelion stakes for the garden.",
    "added": "2026-11-18"
  },
  {
    "id": "pina-pro-rechargeable-led-table-lamp",
    "title": "Pina Pro Rechargeable LED Table Lamp",
    "url": "https://www.lumens.com/pina-pro-rechargeable-led-table-lamp-by-zafferano-america-AIL2161114.html",
    "store": "Lumens",
    "price": 96,
    "image": "https://images.lumens.com/is/image/Lumens/AILP311315_alt09?wid=800&fmt=jpg",
    "category": "Home & Holiday",
    "priority": "high",
    "summary": "Cordless rechargeable table lamp by Zafferano America.",
    "notes": "Comes in 10 finishes; the page defaults to Black.",
    "details": [
      [
        "Designer",
        "Federico De Majo"
      ]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "rice-university-owls-adjustable-cap",
    "title": "Rice University Owls Adjustable Cap",
    "url": "https://www.bkstr.com/riceuniversitystore/product/rice-university-owls-adjustable-cap--23664-1",
    "store": "Rice University Store",
    "price": 40,
    "image": "https://bkstr.scene7.com/is/image/Bkstr/1545-RICE-PATCH-Off-White?wid=800&fmt=jpg",
    "category": "Rice Owls",
    "priority": "high",
    "summary": "No Rivals cotton cap with an Owls patch.",
    "details": [
      [
        "Color",
        "Off White"
      ],
      [
        "Size",
        "One size"
      ]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "rice-university-heritage-adjustable-cap",
    "title": "Rice University Heritage Adjustable Cap",
    "url": "https://www.bkstr.com/riceuniversitystore/product/cap-adj-heritage-t-navy-h-adj--567053-1",
    "store": "Rice University Store",
    "price": 32,
    "image": "https://bkstr.scene7.com/is/image/Bkstr/1545-HTA-387M-EO-Navy?wid=800&fmt=jpg",
    "category": "Rice Owls",
    "priority": "high",
    "summary": "Legacy cotton cap, made in USA.",
    "details": [
      [
        "Color",
        "Navy"
      ],
      [
        "Size",
        "Adjustable"
      ]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "rice-university-julia-gash-can-coozie",
    "title": "Rice University Julia Gash Can Coozie",
    "url": "https://www.bkstr.com/riceuniversitystore/product/can-coozie-julia-g-scspc-------13301-1",
    "store": "Rice University Store",
    "price": 8.95,
    "image": "https://bkstr.scene7.com/is/image/Bkstr/1545-4124-SCSPC-School-Specific-School-Color?wid=800&fmt=jpg",
    "category": "Rice Owls",
    "priority": "high",
    "summary": "Hand-illustrated Rice art by Julia Gash.",
    "added": "2026-11-18"
  },
  {
    "id": "rice-university-julia-gash-15-oz-mug",
    "title": "Rice University Julia Gash 15 oz. Mug",
    "url": "https://www.bkstr.com/riceuniversitystore/product/mug-15oz-impact-ju-scspc-------372325-1",
    "store": "Rice University Store",
    "price": 18,
    "image": "https://bkstr.scene7.com/is/image/Bkstr/1545-1656B-SCSPC-School-Color?wid=800&fmt=jpg",
    "category": "Rice Owls",
    "priority": "high",
    "summary": "15 oz mug with Julia Gash's Rice illustration.",
    "added": "2026-11-18"
  },
  {
    "id": "rice-university-owls-18-x-18-pennant",
    "title": "Rice University Owls 18\" x 18\" Pennant",
    "url": "https://www.bkstr.com/riceuniversitystore/product/pennant-18x18-shap-navy--------836597-1",
    "store": "Rice University Store",
    "price": 15,
    "image": "https://bkstr.scene7.com/is/image/Bkstr/1545-SSP01-M-Navy?wid=800&fmt=jpg",
    "category": "Rice Owls",
    "priority": "high",
    "summary": "Navy Owls pennant.",
    "details": [
      [
        "Size",
        "18 x 18 in"
      ]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "rice-university-tour-polo",
    "title": "Rice University Tour Polo",
    "url": "https://www.bkstr.com/riceuniversitystore/product/tour-stripe-polo-p-wh-gr-sm---127094-1",
    "store": "Rice University Store",
    "price": 85,
    "image": "https://bkstr.scene7.com/is/image/Bkstr/1545-M51840-E00100-White-Grey?wid=800&fmt=jpg",
    "category": "Rice Owls",
    "priority": "high",
    "summary": "Nike stripe polo in Rice colors.",
    "notes": "Color: White/Grey. Size: Medium",
    "details": [
      [
        "Brand",
        "Nike"
      ],
      [
        "Fit",
        "Athletic"
      ]
    ],
    "added": "2026-11-18"
  }
];
