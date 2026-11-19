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
    "priority": "nice",
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
    "priority": "nice",
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
    "priority": "nice",
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
    "priority": "nice",
    "summary": "Footed mango wood board for cheese, charcuterie, or desserts.",
    "added": "2026-11-18"
  },
  {
    "id": "madeira-17-walnut-finished-acacia-wood-salad-serving-bowl",
    "title": "Madeira 17\" Walnut-Finished Acacia Wood Salad Serving Bowl",
    "url": "https://www.crateandbarrel.com/madeira-17-walnut-finished-acacia-wood-salad-serving-bowl/s151945",
    "store": "Crate & Barrel",
    "price": 95.95,
    "image": "https://cb.scene7.com/is/image/Crate/MadeiraWnAcServeBwl17inSSF25?wid=800&fmt=jpg",
    "category": "Entertaining",
    "priority": "top",
    "summary": "Wide, shallow walnut-finished acacia wood bowl for salads.",
    "details": [
      [
        "Size",
        "17 inch"
      ],
      [
        "Finish",
        "Walnut"
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
    "priority": "nice",
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
    "priority": "nice",
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
    "priority": "top",
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
    "priority": "nice",
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
    "priority": "nice",
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
    "priority": "nice",
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
    "priority": "nice",
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
    "priority": "nice",
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
    "id": "nike-rise-365-men-s-dri-fit-running-top",
    "title": "Nike Rise 365 Men's Dri-FIT Running Top",
    "url": "https://www.nike.com/t/rise-365-mens-dri-fit-short-sleeve-running-top-rPq09C/CZ9184-084",
    "store": "Nike",
    "price": 55,
    "image": "https://static.nike.com/a/images/t_default/fe8af39f-8246-40ab-ab7a-739538296c8a/M+NK+DF+RISE+365+SS.png",
    "category": "Apparel",
    "priority": "nice",
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
    "priority": "nice",
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
    "priority": "nice",
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
    "priority": "top",
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
    "id": "fox-point-seasoning",
    "title": "Fox Point Seasoning",
    "url": "https://www.penzeys.com/online-catalog/fox-point-seasoning/c-24/p-393/pd-s",
    "store": "Penzeys",
    "image": "https://www.penzeys.com/media/1981/fox_point_pot.jpg",
    "category": "Pantry",
    "priority": "nice",
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
    "priority": "nice",
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
    "priority": "nice",
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
    "priority": "nice",
    "summary": "Weather-proof powder-coated metal yard flag stand with clip and stopper.",
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
    "priority": "nice",
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
    "priority": "top",
    "summary": "Cordless rechargeable table lamp by Zafferano America.",
    "notes": "Comes in 10 finishes. I'd like the black one.",
    "details": [
      [
        "Designer",
        "Federico De Majo"
      ],
      [
        "Color",
        "Black"
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
    "priority": "top",
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
    "priority": "nice",
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
    "priority": "nice",
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
    "priority": "nice",
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
  },
  {
    "id": "rustic-metal-flower-wind-spinner-kinetic-garden-sculpture",
    "title": "Rustic Metal Flower Wind Spinner, Kinetic Garden Sculpture",
    "url": "https://www.etsy.com/listing/4601336149/rustic-metal-flower-wind-spinner-kinetic",
    "store": "Etsy",
    "price": 174.4,
    "image": "https://i.etsystatic.com/67750092/r/il/97374e/8841684068/il_794xN.8841684068_9v40.jpg",
    "images": [
      "https://i.etsystatic.com/67750092/r/il/a5fa95/8889461351/il_794xN.8889461351_oct7.jpg",
      "https://i.etsystatic.com/67750092/r/il/dc7eff/8889461459/il_794xN.8889461459_ew55.jpg",
      "https://i.etsystatic.com/67750092/r/il/d08827/8841684504/il_794xN.8841684504_8kig.jpg"
    ],
    "category": "Home & Holiday",
    "priority": "nice",
    "summary": "Kinetic metal flower wind spinner for the yard.",
    "details": [
      ["Seller", "ArtisanMetalART"],
      ["Size", "83\"H × 24\"W"],
      ["Material", "Metal with a natural rust finish"],
      ["Weight", "34 oz"]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "twist-bloom-metal-flower-wind-spinner",
    "title": "Twist & Bloom Metal Flower Wind Spinner",
    "url": "https://www.etsy.com/listing/4574297351/twist-bloom-metal-flower-wind-spinner",
    "store": "Etsy",
    "price": 138.4,
    "image": "https://i.etsystatic.com/67750092/r/il/643ce2/8843724382/il_794xN.8843724382_m4ox.jpg",
    "images": [
      "https://i.etsystatic.com/67750092/r/il/3bb7fd/8843724452/il_794xN.8843724452_6cry.jpg",
      "https://i.etsystatic.com/67750092/r/il/b6d6a8/8891500251/il_794xN.8891500251_jl35.jpg",
      "https://i.etsystatic.com/67750092/r/il/11dd01/8843724984/il_794xN.8843724984_263z.jpg"
    ],
    "category": "Home & Holiday",
    "priority": "nice",
    "summary": "Rustic metal flower wind spinner for the yard.",
    "notes": "Please choose the Small size (71\"H × 22\"W), $138.40.",
    "details": [
      ["Seller", "ArtisanMetalART"],
      ["Size", "Small: 71\"H × 22\"W (Large is 105\"H × 34\"W)"],
      ["Material", "Metal with a rust finish"]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "adafruit-qt-py-esp32-s2-wifi-dev-board-with-stemma-qt",
    "title": "Adafruit QT Py ESP32-S2 WiFi Dev Board with STEMMA QT",
    "url": "https://www.adafruit.com/product/5325",
    "store": "Adafruit",
    "price": 12.5,
    "image": "https://cdn-shop.adafruit.com/970x728/5325-12.jpg",
    "category": "Tech",
    "priority": "nice",
    "summary": "Tiny Wi-Fi board that will be the brain of my house environmental sensor.",
    "notes": "Part of a DIY environmental sensor for the house I'd love to build. This board reads all the sensors over STEMMA QT and sends the data over Wi-Fi.",
    "details": [
      [
        "Processor",
        "ESP32-S2, 240 MHz, 2.4 GHz Wi-Fi"
      ],
      [
        "Memory",
        "4 MB flash, 2 MB PSRAM"
      ],
      [
        "Connector",
        "USB-C and STEMMA QT"
      ]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "adafruit-scd-41-true-co2-temperature-and-humidity-sensor",
    "title": "Adafruit SCD-41 True CO2, Temperature and Humidity Sensor",
    "url": "https://www.adafruit.com/product/5190",
    "store": "Adafruit",
    "price": 49.95,
    "image": "https://cdn-shop.adafruit.com/970x728/5190-06.jpg",
    "category": "Tech",
    "priority": "nice",
    "summary": "Measures CO2, temperature, and humidity for my house environmental sensor.",
    "notes": "Part of a DIY environmental sensor for the house I'd love to build. Tracks indoor CO2 so I can see when a room needs fresh air. STEMMA QT / Qwiic version.",
    "details": [
      [
        "Measures",
        "CO2, temperature, humidity"
      ],
      [
        "CO2 range",
        "400 to 5000 ppm"
      ],
      [
        "Interface",
        "I2C (STEMMA QT / Qwiic)"
      ]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "adafruit-pmsa003i-air-quality-breakout",
    "title": "Adafruit PMSA003I Air Quality Breakout",
    "url": "https://www.adafruit.com/product/4632",
    "store": "Adafruit",
    "price": 44.95,
    "image": "https://cdn-shop.adafruit.com/970x728/4632-10.jpg",
    "category": "Tech",
    "priority": "nice",
    "summary": "Particulate sensor for air quality in my house environmental sensor.",
    "notes": "Part of a DIY environmental sensor for the house I'd love to build. Measures dust and smoke particles (PM1.0, PM2.5, PM10). STEMMA QT / Qwiic version.",
    "details": [
      [
        "Measures",
        "PM1.0, PM2.5, PM10"
      ],
      [
        "Interface",
        "I2C (STEMMA QT / Qwiic)"
      ]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "adafruit-bme280-i2c-or-spi-temperature-humidity-pressure-sensor",
    "title": "Adafruit BME280 I2C or SPI Temperature Humidity Pressure Sensor",
    "url": "https://www.adafruit.com/product/2652",
    "store": "Adafruit",
    "price": 14.95,
    "image": "https://cdn-shop.adafruit.com/970x728/2652-04.jpg",
    "category": "Tech",
    "priority": "nice",
    "summary": "Temperature, humidity, and barometric pressure for my house environmental sensor.",
    "notes": "Part of a DIY environmental sensor for the house I'd love to build. The STEMMA QT version, so no soldering is needed to connect it.",
    "details": [
      [
        "Measures",
        "Temperature, humidity, pressure"
      ],
      [
        "Interface",
        "I2C or SPI (STEMMA QT)"
      ]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "gravity-analog-decibel-meter-for-arduino",
    "title": "Gravity: Analog Decibel Meter for Arduino",
    "url": "https://www.dfrobot.com/product-1663.html",
    "store": "DFRobot",
    "price": 39.5,
    "image": "https://dfimg.dfrobot.com/enshop/image/data/SEN0232/SEN0232_Main_01.jpg",
    "category": "Tech",
    "priority": "nice",
    "summary": "Sound level sensor for my house environmental sensor.",
    "notes": "Part of a DIY environmental sensor for the house I'd love to build. Adds noise level (dBA) to the readings.",
    "details": [
      [
        "Range",
        "30 to 130 dBA"
      ],
      [
        "Output",
        "Analog voltage, 0.6 to 2.6 V"
      ]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "x-tronic-3020-xts-75w-soldering-iron-station",
    "title": "The Original X-Tronic 3020-XTS 75W Soldering Iron Station",
    "url": "https://www.amazon.com/dp/B01DGZFSNE",
    "store": "Amazon",
    "price": 54.75,
    "image": "../assets/img/wishlist/x-tronic-3020-xts.jpg",
    "category": "Tech",
    "priority": "nice",
    "summary": "Soldering station for assembling my house environmental sensor.",
    "notes": "Style: Classic Style, 1 Solder Tip. Needed for the house environmental sensor project: together with the Adafruit boards, sensors, and decibel meter, it makes the whole build possible.",
    "details": [
      [
        "Power",
        "75W"
      ],
      [
        "Includes",
        "LED display, 2 helping hands, solder, brass sponge with cleaning flux, wet sponge"
      ],
      [
        "Features",
        "°C/°F switch, 10 minute sleep"
      ]
    ],
    "added": "2026-11-18"
  },
  {
    "id": "bonobos-the-chino-2-0-graphites",
    "title": "Bonobos The Chino 2.0, Graphites",
    "url": "https://bonobos.com/products/stretch-washed-chino-graphites-0?variant=48493125763313&color=Graphites&pant-waist=31&pant-fit=Slim&pant-length=28",
    "store": "Bonobos",
    "price": 99,
    "image": "https://bonobos.com/cdn/shop/files/PANT_CHINO-PANT_BPT10629S1052G_1_cbcc27e1-d1e4-4614-a11d-0c38d1b38227.jpg?width=800",
    "category": "Apparel",
    "priority": "high",
    "summary": "Stretch washed chino in Graphites.",
    "notes": "Waist 31, Slim fit, length 28.",
    "details": [
      [
        "Color",
        "Graphites"
      ],
      [
        "Waist",
        "31"
      ],
      [
        "Fit",
        "Slim"
      ],
      [
        "Length",
        "28"
      ]
    ],
    "added": "2026-11-19"
  },
  {
    "id": "bonobos-the-chino-2-0-after-midnights",
    "title": "Bonobos The Chino 2.0, After Midnights",
    "url": "https://bonobos.com/products/stretch-washed-chino-after-midnights-0?variant=48493072679153&color=After+Midnights&pant-waist=31&pant-fit=Slim&pant-length=28",
    "store": "Bonobos",
    "price": 99,
    "image": "https://bonobos.com/cdn/shop/files/PANT_CHINO-PANT_BPT10629S1051G_1_b71e83ca-a3ff-42c6-823d-ed65a12071fe.jpg?width=800",
    "category": "Apparel",
    "priority": "high",
    "summary": "Stretch washed chino in After Midnights.",
    "notes": "Waist 31, Slim fit, length 28.",
    "details": [
      [
        "Color",
        "After Midnights"
      ],
      [
        "Waist",
        "31"
      ],
      [
        "Fit",
        "Slim"
      ],
      [
        "Length",
        "28"
      ]
    ],
    "added": "2026-11-19"
  },
  {
    "id": "bonobos-the-chino-2-0-congos",
    "title": "Bonobos The Chino 2.0, Congos",
    "url": "https://bonobos.com/products/stretch-washed-chino-congos-0?variant=48493274005745&color=Congos&pant-waist=31&pant-fit=Slim&pant-length=28",
    "store": "Bonobos",
    "price": 99,
    "image": "https://bonobos.com/cdn/shop/files/PANT_CHINO-PANT_BPT10629SOL001_1_1a4f3af6-d5b7-4053-82b4-f4976875dd78.jpg?width=800",
    "category": "Apparel",
    "priority": "high",
    "summary": "Stretch washed chino in Congos.",
    "notes": "Waist 31, Slim fit, length 28.",
    "details": [
      [
        "Color",
        "Congos"
      ],
      [
        "Waist",
        "31"
      ],
      [
        "Fit",
        "Slim"
      ],
      [
        "Length",
        "28"
      ]
    ],
    "added": "2026-11-19"
  },
  {
    "id": "luxury-touch-t-shirt",
    "title": "Luxury-Touch T-Shirt",
    "url": "https://bananarepublic.gap.com/browse/product.do?pid=811426012&vid=1&pcid=80117&cid=80117&nav=meganav%3AMEN%3AMEN%27S+CLOTHING%3AT-Shirts#pdp-page-content",
    "store": "Banana Republic",
    "price": 50,
    "image": "https://bananarepublic.gap.com/webcontent/0060/356/962/cn60356962.jpg",
    "images": [
      "https://bananarepublic.gap.com/webcontent/0057/437/438/cn57437438.jpg",
      "https://bananarepublic.gap.com/webcontent/0057/437/506/cn57437506.jpg"
    ],
    "category": "Apparel",
    "priority": "high",
    "summary": "Soft, dressed-up crew-neck tee in Luxury Touch fabric.",
    "notes": "Size Medium, Regular fit. Color: Black (as shown on the linked page).",
    "details": [
      [
        "Size",
        "Medium"
      ],
      [
        "Fit",
        "Regular"
      ],
      [
        "Color",
        "Black"
      ]
    ],
    "added": "2026-11-19"
  },
  {
    "id": "silky-cotton-t-shirt",
    "title": "Silky Cotton T-Shirt",
    "url": "https://bananarepublic.gap.com/browse/product.do?pid=8944400420002&vid=1&pcid=80117&cid=80117&nav=meganav%3AMEN%3AMEN%27S+CLOTHING%3AT-Shirts#pdp-page-content",
    "store": "Banana Republic",
    "price": 29.99,
    "image": "https://bananarepublic.gap.com/webcontent/0062/714/850/cn62714850.jpg",
    "images": [
      "https://bananarepublic.gap.com/webcontent/0062/618/318/cn62618318.jpg",
      "https://bananarepublic.gap.com/webcontent/0062/618/340/cn62618340.jpg"
    ],
    "category": "Apparel",
    "priority": "high",
    "summary": "Classic crew-neck tee in a lightweight silky cotton.",
    "notes": "Size Medium, Regular fit. Color: Navy Blue (as shown on the linked page).",
    "details": [
      [
        "Size",
        "Medium"
      ],
      [
        "Fit",
        "Regular"
      ],
      [
        "Color",
        "Navy Blue"
      ]
    ],
    "added": "2026-11-19"
  },
  {
    "id": "lightweight-cotton-crew-neck-t-shirt",
    "title": "Lightweight Cotton Crew-Neck T-Shirt",
    "url": "https://bananarepublic.gap.com/browse/product.do?pid=865479072&vid=1&pcid=80117&cid=80117&nav=meganav%3AMEN%3AMEN%27S+CLOTHING%3AT-Shirts#pdp-page-content",
    "store": "Banana Republic",
    "price": 40,
    "image": "https://bananarepublic.gap.com/webcontent/0061/412/712/cn61412712.jpg",
    "images": [
      "https://bananarepublic.gap.com/webcontent/0061/223/837/cn61223837.jpg",
      "https://bananarepublic.gap.com/webcontent/0061/223/835/cn61223835.jpg"
    ],
    "category": "Apparel",
    "priority": "high",
    "summary": "Garment-dyed, ultra-light cotton tee.",
    "notes": "Size Medium, Regular fit. Color: Navy Blue (as shown on the linked page).",
    "details": [
      [
        "Size",
        "Medium"
      ],
      [
        "Fit",
        "Regular"
      ],
      [
        "Color",
        "Navy Blue"
      ]
    ],
    "added": "2026-11-19"
  },
  {
    "id": "wool-blend-fair-isle-socks",
    "title": "Wool-blend Fair Isle Socks",
    "url": "https://www.jcrew.com/p/mens/categories/accessories/wool-blend-fair-isle-socks/CY216?display=standard&fit=Classic&color_name=ivory-black-multi&colorProductCode=CY216",
    "store": "J.Crew",
    "price": 29.5,
    "image": "https://www.jcrew.com/s7-img-facade/CY216_PP8723?fmt=jpeg&wid=800",
    "category": "Apparel",
    "priority": "high",
    "summary": "Fair Isle wool-blend socks in ivory and black.",
    "notes": "One size.",
    "details": [
      [
        "Color",
        "Ivory Black Multi"
      ],
      [
        "Size",
        "One size"
      ]
    ],
    "added": "2026-11-19"
  },
  {
    "id": "dress-socks-in-dots",
    "title": "Dress Socks in Dots",
    "url": "https://www.jcrew.com/p/mens/categories/accessories/socks/dress-sock/dress-socks-in-dots/BP949?display=standard&fit=Classic&color_name=navy-lavender-dot&colorProductCode=BP949",
    "store": "J.Crew",
    "price": 24.5,
    "image": "https://www.jcrew.com/s7-img-facade/BP949_PP6243?fmt=jpeg&wid=800",
    "category": "Apparel",
    "priority": "high",
    "summary": "Dress socks with a navy and lavender dot pattern.",
    "notes": "Color as linked: Navy Lavender Dot.",
    "details": [
      [
        "Color",
        "Navy Lavender Dot"
      ]
    ],
    "added": "2026-11-19"
  },
  {
    "id": "druthers-merino-wool-boot-socks",
    "title": "Druthers Merino Wool Boot Socks",
    "url": "https://www.jcrew.com/p/mens/categories/accessories/socks/heavyweight/druthers-merino-wool-boot-socks/M8807?display=standard&fit=Classic&color_name=black&colorProductCode=M8807",
    "store": "J.Crew",
    "price": 20,
    "image": "https://www.jcrew.com/s7-img-facade/M8807_BK0001?fmt=jpeg&wid=800",
    "category": "Apparel",
    "priority": "high",
    "summary": "Heavyweight merino wool boot socks.",
    "notes": "Color as linked: Black.",
    "details": [
      [
        "Color",
        "Black"
      ]
    ],
    "added": "2026-11-19"
  },
  {
    "id": "patterned-dress-socks",
    "title": "Patterned Dress Socks",
    "url": "https://www.jcrew.com/p/mens/categories/accessories/socks/dress-sock/patterned-dress-socks/CO543?display=standard&fit=Classic&color_name=black&colorProductCode=CO543",
    "store": "J.Crew",
    "price": 24.5,
    "image": "https://www.jcrew.com/s7-img-facade/CO543_BK0001?fmt=jpeg&wid=800",
    "category": "Apparel",
    "priority": "high",
    "summary": "Patterned dress socks in black.",
    "notes": "Color as linked: Black.",
    "details": [
      [
        "Color",
        "Black"
      ]
    ],
    "added": "2026-11-19"
  },
  {
    "id": "microstripe-socks",
    "title": "Microstripe Socks",
    "url": "https://www.jcrew.com/p/mens/categories/accessories/socks/lightweight/microstripe-socks/CO544?display=standard&fit=Classic&color_name=sand-dollar&colorProductCode=CO544",
    "store": "J.Crew",
    "price": 19.5,
    "image": "https://www.jcrew.com/s7-img-facade/CO544_NA0292?fmt=jpeg&wid=800",
    "category": "Apparel",
    "priority": "high",
    "summary": "Lightweight microstripe socks.",
    "notes": "Color as linked: Sand Dollar.",
    "details": [
      [
        "Color",
        "Sand Dollar"
      ]
    ],
    "added": "2026-11-19"
  },
  {
    "id": "camden-leather-penny-loafers-with-leather-soles",
    "title": "Camden Leather Penny Loafers with Leather Soles",
    "url": "https://www.jcrew.com/p/mens/categories/shoes/dress-shoes/camden-loafers-with-leather-soles/BJ009?display=standard&fit=Classic&color_name=whiskey&colorProductCode=BJ009",
    "store": "J.Crew",
    "price": 258,
    "image": "https://www.jcrew.com/s7-img-facade/BJ009_PP3650?fmt=jpeg&wid=800",
    "category": "Apparel",
    "priority": "high",
    "summary": "Leather penny loafers with an unlined interior and leather sole.",
    "notes": "Size 9.5. Color: Whiskey.",
    "details": [
      [
        "Size",
        "9.5"
      ],
      [
        "Color",
        "Whiskey"
      ]
    ],
    "added": "2026-11-19"
  }
];
