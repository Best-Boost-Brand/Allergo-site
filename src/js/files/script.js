// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


const dishesData = [
  {
    id: 24,
    name: null,
    caption: "М'ясні страви",
    imageUrl:
      "https://vikna.tv/wp-content/uploads/2023/01/04/kachka-1800x1200.jpeg",
    order: 20,
    dishes: [
      {
        id: 6,
        name: "kyiv_style_meat_ball",
        caption: "Котлета по-київськи",
        description: "Курятина, масло вершкове, кляр",
        imageUrl:
          "https://bigkyiv.com.ua/wp-content/uploads/2022/01/kotlety-po-kievski-800x600.jpg",
        price: 110.0,
        order: 10,
      },
      {
        id: 7,
        name: "home_style_meat_boal",
        caption: "Котлета по-домашньому",
        description: "Смакує з пюрехою",
        imageUrl:
          "https://img.fozzyshop.com.ua/157472-thickbox_default/kotlety-domashnie.jpg",
        price: 65.99,
        order: 20,
      },
      {
        id: 8,
        name: "pork_ribs",
        caption: "Свинячі реберця",
        description: "З журавлиновим соусом",
        imageUrl: "https://images.unian.net/photos/2020_07/1593714242-3350.jpg",
        price: 200.0,
        order: 30,
      },
      {
        id: 9,
        name: "chicken_chop",
        caption: "Куряча відбивна",
        description: "Куряча відбивна в клярі\n Топ за свої гроші",
        imageUrl:
          "https://kuldim.com/wa-data/public/shop/products/89/21/2189/images/54555/54555.970.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 10,
        name: "beef_steak",
        caption: "Борщ",
        description: "З мармурової яловичини, відчуй себе мажором",
        imageUrl:
          "https://shashlyk-master.com.ua/wp-content/uploads/2018/02/stejk-govyazhij.png",
        price: 700.0,
        order: 50,
      },
    ],
  },
  {
    id: 11,
    name: "first_dishes",
    caption: "Перші страви",
    imageUrl:
   "https://tuca.com.ua/wp-content/uploads/2020/03/recept_7678_p0nh.jpg",
    order: 10,
    dishes: [
      {
        id: 1,
        name: "borsch",
        caption: "Борщ червоний",
        description: "На свинячих реберцях\n Калорійність - на всі гроші",
        imageUrl:
          "https://gurman.com.ua/wp-content/uploads/2023/03/IMG_7073.webp",
        price: 70.0,
        order: 10,
      },
      {
        id: 2,
        name: "green_borsch",
        caption: "Борщ зелений",
        description: "Дуже смачний\n Калорійність - так собі",
        imageUrl:
          "https://klopotenko.com/wp-content/uploads/2022/04/zelenyy-borshch-zi-shpynatom-img-1000x600.jpg",
        price: 64.99,
        order: 20,
      },
      {
        id: 3,
        name: "fish_soup",
        caption: "Рибна юшка",
        description: "На форелі\n Калорійність - лайт",
        imageUrl: "https://images.unian.net/photos/2021_04/1617620232-2719.jpg",
        price: 80.5,
        order: 30,
      },
      {
        id: 4,
        name: "mushroom_soup",
        caption: "Грибна юшка",
        description: "З білих карпатських грибів Калорійність - ",
        imageUrl:
          "https://tuca.com.ua/wp-content/uploads/2020/03/recept_7678_p0nh.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 5,
        name: "borsch",
        caption: "Борщ",
        description: "100 видів м'яса\n Калорійність - смерть на місці",
        imageUrl:
          "https://bazylik.com.ua/wp-content/uploads/2024/01/image11_retsept-solianka-zbirna-miasna.webp",
        price: 100.0,
        order: 50,
      },
    ],
  },
  {
    id: 12,
    name: null,
    caption: "рибові страви",
    imageUrl:
      "https://vikna.tv/wp-content/uploads/2023/01/04/kachka-1800x1200.jpeg",
    order: 20,
    dishes: [
      {
        id: 6,
        name: "kyiv_style_meat_ball",
        caption: "Котлета по-київськи",
        description: "Курятина, масло вершкове, кляр",
        imageUrl:
          "https://bigkyiv.com.ua/wp-content/uploads/2022/01/kotlety-po-kievski-800x600.jpg",
        price: 110.0,
        order: 10,
      },
      {
        id: 7,
        name: "home_style_meat_boal",
        caption: "Котлета по-домашньому",
        description: "Смакує з пюрехою",
        imageUrl:
          "https://img.fozzyshop.com.ua/157472-thickbox_default/kotlety-domashnie.jpg",
        price: 65.99,
        order: 20,
      },
      {
        id: 8,
        name: "pork_ribs",
        caption: "Свинячі реберця",
        description: "З журавлиновим соусом",
        imageUrl: "https://images.unian.net/photos/2020_07/1593714242-3350.jpg",
        price: 200.0,
        order: 30,
      },
      {
        id: 9,
        name: "chicken_chop",
        caption: "Куряча відбивна",
        description: "Куряча відбивна в клярі\n Топ за свої гроші",
        imageUrl:
          "https://kuldim.com/wa-data/public/shop/products/89/21/2189/images/54555/54555.970.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 10,
        name: "beef_steak",
        caption: "Борщ",
        description: "З мармурової яловичини, відчуй себе мажором",
        imageUrl:
          "https://shashlyk-master.com.ua/wp-content/uploads/2018/02/stejk-govyazhij.png",
        price: 700.0,
        order: 50,
      },
    ],
  },
  {
    id: 25,
    name: null,
    caption: "пташині страви",
    imageUrl:
      "https://vikna.tv/wp-content/uploads/2023/01/04/kachka-1800x1200.jpeg",
    order: 20,
    dishes: [
      {
        id: 6,
        name: "kyiv_style_meat_ball",
        caption: "Котлета по-київськи",
        description: "Курятина, масло вершкове, кляр",
        imageUrl:
          "https://bigkyiv.com.ua/wp-content/uploads/2022/01/kotlety-po-kievski-800x600.jpg",
        price: 110.0,
        order: 10,
      },
      {
        id: 7,
        name: "home_style_meat_boal",
        caption: "Котлета по-домашньому",
        description: "Смакує з пюрехою",
        imageUrl:
          "https://img.fozzyshop.com.ua/157472-thickbox_default/kotlety-domashnie.jpg",
        price: 65.99,
        order: 20,
      },
      {
        id: 8,
        name: "pork_ribs",
        caption: "Свинячі реберця",
        description: "З журавлиновим соусом",
        imageUrl: "https://images.unian.net/photos/2020_07/1593714242-3350.jpg",
        price: 200.0,
        order: 30,
      },
      {
        id: 9,
        name: "chicken_chop",
        caption: "Куряча відбивна",
        description: "Куряча відбивна в клярі\n Топ за свої гроші",
        imageUrl:
          "https://kuldim.com/wa-data/public/shop/products/89/21/2189/images/54555/54555.970.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 10,
        name: "beef_steak",
        caption: "Борщ",
        description: "З мармурової яловичини, відчуй себе мажором",
        imageUrl:
          "https://shashlyk-master.com.ua/wp-content/uploads/2018/02/stejk-govyazhij.png",
        price: 700.0,
        order: 50,
      },
    ],
  },
  {
    id: 17,
    name: null,
    caption: "десерторві страви",
    imageUrl:
      "https://vikna.tv/wp-content/uploads/2023/01/04/kachka-1800x1200.jpeg",
    order: 20,
    dishes: [
      {
        id: 6,
        name: "kyiv_style_meat_ball",
        caption: "Котлета по-київськи",
        description: "Курятина, масло вершкове, кляр",
        imageUrl:
          "https://bigkyiv.com.ua/wp-content/uploads/2022/01/kotlety-po-kievski-800x600.jpg",
        price: 110.0,
        order: 10,
      },
      {
        id: 7,
        name: "home_style_meat_boal",
        caption: "Котлета по-домашньому",
        description: "Смакує з пюрехою",
        imageUrl:
          "https://img.fozzyshop.com.ua/157472-thickbox_default/kotlety-domashnie.jpg",
        price: 65.99,
        order: 20,
      },
      {
        id: 8,
        name: "pork_ribs",
        caption: "Свинячі реберця",
        description: "З журавлиновим соусом",
        imageUrl: "https://images.unian.net/photos/2020_07/1593714242-3350.jpg",
        price: 200.0,
        order: 30,
      },
      {
        id: 9,
        name: "chicken_chop",
        caption: "Куряча відбивна",
        description: "Куряча відбивна в клярі\n Топ за свої гроші",
        imageUrl:
          "https://kuldim.com/wa-data/public/shop/products/89/21/2189/images/54555/54555.970.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 10,
        name: "beef_steak",
        caption: "Борщ",
        description: "З мармурової яловичини, відчуй себе мажором",
        imageUrl:
          "https://shashlyk-master.com.ua/wp-content/uploads/2018/02/stejk-govyazhij.png",
        price: 700.0,
        order: 50,
      },
    ],
  },
  {
    id: 22,
    name: null,
    caption: "несмачні страви",
    imageUrl:
      "https://vikna.tv/wp-content/uploads/2023/01/04/kachka-1800x1200.jpeg",
    order: 20,
    dishes: [
      {
        id: 6,
        name: "kyiv_style_meat_ball",
        caption: "Котлета по-київськи",
        description: "Курятина, масло вершкове, кляр",
        imageUrl:
          "https://bigkyiv.com.ua/wp-content/uploads/2022/01/kotlety-po-kievski-800x600.jpg",
        price: 110.0,
        order: 10,
      },
      {
        id: 7,
        name: "home_style_meat_boal",
        caption: "Котлета по-домашньому",
        description: "Смакує з пюрехою",
        imageUrl:
          "https://img.fozzyshop.com.ua/157472-thickbox_default/kotlety-domashnie.jpg",
        price: 65.99,
        order: 20,
      },
      {
        id: 8,
        name: "pork_ribs",
        caption: "Свинячі реберця",
        description: "З журавлиновим соусом",
        imageUrl: "https://images.unian.net/photos/2020_07/1593714242-3350.jpg",
        price: 200.0,
        order: 30,
      },
      {
        id: 9,
        name: "chicken_chop",
        caption: "Куряча відбивна",
        description: "Куряча відбивна в клярі\n Топ за свої гроші",
        imageUrl:
          "https://kuldim.com/wa-data/public/shop/products/89/21/2189/images/54555/54555.970.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 10,
        name: "beef_steak",
        caption: "Борщ",
        description: "З мармурової яловичини, відчуй себе мажором",
        imageUrl:
          "https://shashlyk-master.com.ua/wp-content/uploads/2018/02/stejk-govyazhij.png",
        price: 700.0,
        order: 50,
      },
    ],
  },
  {
    id: 122,
    name: "first_dishes",
    caption: "треті страви",
    imageUrl:
   "https://tuca.com.ua/wp-content/uploads/2020/03/recept_7678_p0nh.jpg",
    order: 10,
    dishes: [
      {
        id: 1,
        name: "borsch",
        caption: "Борщ червоний",
        description: "На свинячих реберцях\n Калорійність - на всі гроші",
        imageUrl:
          "https://gurman.com.ua/wp-content/uploads/2023/03/IMG_7073.webp",
        price: 70.0,
        order: 10,
      },
      {
        id: 2,
        name: "green_borsch",
        caption: "Борщ зелений",
        description: "Дуже смачний\n Калорійність - так собі",
        imageUrl:
          "https://klopotenko.com/wp-content/uploads/2022/04/zelenyy-borshch-zi-shpynatom-img-1000x600.jpg",
        price: 64.99,
        order: 20,
      },
      {
        id: 3,
        name: "fish_soup",
        caption: "Рибна юшка",
        description: "На форелі\n Калорійність - лайт",
        imageUrl: "https://images.unian.net/photos/2021_04/1617620232-2719.jpg",
        price: 80.5,
        order: 30,
      },
      {
        id: 4,
        name: "mushroom_soup",
        caption: "Грибна юшка",
        description: "З білих карпатських грибів Калорійність - ",
        imageUrl:
          "https://tuca.com.ua/wp-content/uploads/2020/03/recept_7678_p0nh.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 5,
        name: "borsch",
        caption: "Борщ",
        description: "100 видів м'яса\n Калорійність - смерть на місці",
        imageUrl:
          "https://bazylik.com.ua/wp-content/uploads/2024/01/image11_retsept-solianka-zbirna-miasna.webp",
        price: 100.0,
        order: 50,
      },
    ],
  },
  {
    id: 9,
    name: null,
    caption: "восьмі страви",
    imageUrl:
      "https://vikna.tv/wp-content/uploads/2023/01/04/kachka-1800x1200.jpeg",
    order: 20,
    dishes: [
      {
        id: 6,
        name: "kyiv_style_meat_ball",
        caption: "Котлета по-київськи",
        description: "Курятина, масло вершкове, кляр",
        imageUrl:
          "https://bigkyiv.com.ua/wp-content/uploads/2022/01/kotlety-po-kievski-800x600.jpg",
        price: 110.0,
        order: 10,
      },
      {
        id: 7,
        name: "home_style_meat_boal",
        caption: "Котлета по-домашньому",
        description: "Смакує з пюрехою",
        imageUrl:
          "https://img.fozzyshop.com.ua/157472-thickbox_default/kotlety-domashnie.jpg",
        price: 65.99,
        order: 20,
      },
      {
        id: 8,
        name: "pork_ribs",
        caption: "Свинячі реберця",
        description: "З журавлиновим соусом",
        imageUrl: "https://images.unian.net/photos/2020_07/1593714242-3350.jpg",
        price: 200.0,
        order: 30,
      },
      {
        id: 9,
        name: "chicken_chop",
        caption: "Куряча відбивна",
        description: "Куряча відбивна в клярі\n Топ за свої гроші",
        imageUrl:
          "https://kuldim.com/wa-data/public/shop/products/89/21/2189/images/54555/54555.970.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 10,
        name: "beef_steak",
        caption: "Борщ",
        description: "З мармурової яловичини, відчуй себе мажором",
        imageUrl:
          "https://shashlyk-master.com.ua/wp-content/uploads/2018/02/stejk-govyazhij.png",
        price: 700.0,
        order: 50,
      },
    ],
  },
  {
    id: 8,
    name: null,
    caption: "десяті страви",
    imageUrl:
      "https://vikna.tv/wp-content/uploads/2023/01/04/kachka-1800x1200.jpeg",
    order: 20,
    dishes: [
      {
        id: 6,
        name: "kyiv_style_meat_ball",
        caption: "Котлета по-київськи",
        description: "Курятина, масло вершкове, кляр",
        imageUrl:
          "https://bigkyiv.com.ua/wp-content/uploads/2022/01/kotlety-po-kievski-800x600.jpg",
        price: 110.0,
        order: 10,
      },
      {
        id: 7,
        name: "home_style_meat_boal",
        caption: "Котлета по-домашньому",
        description: "Смакує з пюрехою",
        imageUrl:
          "https://img.fozzyshop.com.ua/157472-thickbox_default/kotlety-domashnie.jpg",
        price: 65.99,
        order: 20,
      },
      {
        id: 8,
        name: "pork_ribs",
        caption: "Свинячі реберця",
        description: "З журавлиновим соусом",
        imageUrl: "https://images.unian.net/photos/2020_07/1593714242-3350.jpg",
        price: 200.0,
        order: 30,
      },
      {
        id: 9,
        name: "chicken_chop",
        caption: "Куряча відбивна",
        description: "Куряча відбивна в клярі\n Топ за свої гроші",
        imageUrl:
          "https://kuldim.com/wa-data/public/shop/products/89/21/2189/images/54555/54555.970.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 10,
        name: "beef_steak",
        caption: "Борщ",
        description: "З мармурової яловичини, відчуй себе мажором",
        imageUrl:
          "https://shashlyk-master.com.ua/wp-content/uploads/2018/02/stejk-govyazhij.png",
        price: 700.0,
        order: 50,
      },
    ],
  },
  {
    id: 12,
    name: null,
    caption: "дитячі страви",
    imageUrl:
      "https://vikna.tv/wp-content/uploads/2023/01/04/kachka-1800x1200.jpeg",
    order: 20,
    dishes: [
      {
        id: 6,
        name: "kyiv_style_meat_ball",
        caption: "Котлета по-київськи",
        description: "Курятина, масло вершкове, кляр",
        imageUrl:
          "https://bigkyiv.com.ua/wp-content/uploads/2022/01/kotlety-po-kievski-800x600.jpg",
        price: 110.0,
        order: 10,
      },
      {
        id: 7,
        name: "home_style_meat_boal",
        caption: "Котлета по-домашньому",
        description: "Смакує з пюрехою",
        imageUrl:
          "https://img.fozzyshop.com.ua/157472-thickbox_default/kotlety-domashnie.jpg",
        price: 65.99,
        order: 20,
      },
      {
        id: 8,
        name: "pork_ribs",
        caption: "Свинячі реберця",
        description: "З журавлиновим соусом",
        imageUrl: "https://images.unian.net/photos/2020_07/1593714242-3350.jpg",
        price: 200.0,
        order: 30,
      },
      {
        id: 9,
        name: "chicken_chop",
        caption: "Куряча відбивна",
        description: "Куряча відбивна в клярі\n Топ за свої гроші",
        imageUrl:
          "https://kuldim.com/wa-data/public/shop/products/89/21/2189/images/54555/54555.970.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 10,
        name: "beef_steak",
        caption: "Борщ",
        description: "З мармурової яловичини, відчуй себе мажором",
        imageUrl:
          "https://shashlyk-master.com.ua/wp-content/uploads/2018/02/stejk-govyazhij.png",
        price: 700.0,
        order: 50,
      },
    ],
  },
    {
    id: 0,
    name: null,
    caption: "М'ясні страви",
    imageUrl:
      "https://vikna.tv/wp-content/uploads/2023/01/04/kachka-1800x1200.jpeg",
    order: 20,
    dishes: [
      {
        id: 6,
        name: "kyiv_style_meat_ball",
        caption: "Котлета по-київськи",
        description: "Курятина, масло вершкове, кляр",
        imageUrl:
          "https://bigkyiv.com.ua/wp-content/uploads/2022/01/kotlety-po-kievski-800x600.jpg",
        price: 110.0,
        order: 10,
      },
      {
        id: 7,
        name: "home_style_meat_boal",
        caption: "Котлета по-домашньому",
        description: "Смакує з пюрехою",
        imageUrl:
          "https://img.fozzyshop.com.ua/157472-thickbox_default/kotlety-domashnie.jpg",
        price: 65.99,
        order: 20,
      },
      {
        id: 8,
        name: "pork_ribs",
        caption: "Свинячі реберця",
        description: "З журавлиновим соусом",
        imageUrl: "https://images.unian.net/photos/2020_07/1593714242-3350.jpg",
        price: 200.0,
        order: 30,
      },
      {
        id: 9,
        name: "chicken_chop",
        caption: "Куряча відбивна",
        description: "Куряча відбивна в клярі\n Топ за свої гроші",
        imageUrl:
          "https://kuldim.com/wa-data/public/shop/products/89/21/2189/images/54555/54555.970.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 10,
        name: "beef_steak",
        caption: "Борщ",
        description: "З мармурової яловичини, відчуй себе мажором",
        imageUrl:
          "https://shashlyk-master.com.ua/wp-content/uploads/2018/02/stejk-govyazhij.png",
        price: 700.0,
        order: 50,
      },
    ],
  },
  {
    id: 1,
    name: "first_dishes",
    caption: "Перші страви",
    imageUrl:
   "https://tuca.com.ua/wp-content/uploads/2020/03/recept_7678_p0nh.jpg",
    order: 10,
    dishes: [
      {
        id: 1,
        name: "borsch",
        caption: "Борщ червоний",
        description: "На свинячих реберцях\n Калорійність - на всі гроші",
        imageUrl:
          "https://gurman.com.ua/wp-content/uploads/2023/03/IMG_7073.webp",
        price: 70.0,
        order: 10,
      },
      {
        id: 2,
        name: "green_borsch",
        caption: "Борщ зелений",
        description: "Дуже смачний\n Калорійність - так собі",
        imageUrl:
          "https://klopotenko.com/wp-content/uploads/2022/04/zelenyy-borshch-zi-shpynatom-img-1000x600.jpg",
        price: 64.99,
        order: 20,
      },
      {
        id: 3,
        name: "fish_soup",
        caption: "Рибна юшка",
        description: "На форелі\n Калорійність - лайт",
        imageUrl: "https://images.unian.net/photos/2021_04/1617620232-2719.jpg",
        price: 80.5,
        order: 30,
      },
      {
        id: 4,
        name: "mushroom_soup",
        caption: "Грибна юшка",
        description: "З білих карпатських грибів Калорійність - ",
        imageUrl:
          "https://tuca.com.ua/wp-content/uploads/2020/03/recept_7678_p0nh.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 5,
        name: "borsch",
        caption: "Борщ",
        description: "100 видів м'яса\n Калорійність - смерть на місці",
        imageUrl:
          "https://bazylik.com.ua/wp-content/uploads/2024/01/image11_retsept-solianka-zbirna-miasna.webp",
        price: 100.0,
        order: 50,
      },
    ],
  },
  {
    id: 2,
    name: null,
    caption: "М'ясні страви",
    imageUrl:
      "https://vikna.tv/wp-content/uploads/2023/01/04/kachka-1800x1200.jpeg",
    order: 20,
    dishes: [
      {
        id: 6,
        name: "kyiv_style_meat_ball",
        caption: "Котлета по-київськи",
        description: "Курятина, масло вершкове, кляр",
        imageUrl:
          "https://bigkyiv.com.ua/wp-content/uploads/2022/01/kotlety-po-kievski-800x600.jpg",
        price: 110.0,
        order: 10,
      },
      {
        id: 7,
        name: "home_style_meat_boal",
        caption: "Котлета по-домашньому",
        description: "Смакує з пюрехою",
        imageUrl:
          "https://img.fozzyshop.com.ua/157472-thickbox_default/kotlety-domashnie.jpg",
        price: 65.99,
        order: 20,
      },
      {
        id: 8,
        name: "pork_ribs",
        caption: "Свинячі реберця",
        description: "З журавлиновим соусом",
        imageUrl: "https://images.unian.net/photos/2020_07/1593714242-3350.jpg",
        price: 200.0,
        order: 30,
      },
      {
        id: 9,
        name: "chicken_chop",
        caption: "Куряча відбивна",
        description: "Куряча відбивна в клярі\n Топ за свої гроші",
        imageUrl:
          "https://kuldim.com/wa-data/public/shop/products/89/21/2189/images/54555/54555.970.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 10,
        name: "beef_steak",
        caption: "Борщ",
        description: "З мармурової яловичини, відчуй себе мажором",
        imageUrl:
          "https://shashlyk-master.com.ua/wp-content/uploads/2018/02/stejk-govyazhij.png",
        price: 700.0,
        order: 50,
      },
    ],
  },
  {
    id: 5,
    name: null,
    caption: "М'ясні страви",
    imageUrl:
      "https://vikna.tv/wp-content/uploads/2023/01/04/kachka-1800x1200.jpeg",
    order: 20,
    dishes: [
      {
        id: 6,
        name: "kyiv_style_meat_ball",
        caption: "Котлета по-київськи",
        description: "Курятина, масло вершкове, кляр",
        imageUrl:
          "https://bigkyiv.com.ua/wp-content/uploads/2022/01/kotlety-po-kievski-800x600.jpg",
        price: 110.0,
        order: 10,
      },
      {
        id: 7,
        name: "home_style_meat_boal",
        caption: "Котлета по-домашньому",
        description: "Смакує з пюрехою",
        imageUrl:
          "https://img.fozzyshop.com.ua/157472-thickbox_default/kotlety-domashnie.jpg",
        price: 65.99,
        order: 20,
      },
      {
        id: 8,
        name: "pork_ribs",
        caption: "Свинячі реберця",
        description: "З журавлиновим соусом",
        imageUrl: "https://images.unian.net/photos/2020_07/1593714242-3350.jpg",
        price: 200.0,
        order: 30,
      },
      {
        id: 9,
        name: "chicken_chop",
        caption: "Куряча відбивна",
        description: "Куряча відбивна в клярі\n Топ за свої гроші",
        imageUrl:
          "https://kuldim.com/wa-data/public/shop/products/89/21/2189/images/54555/54555.970.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 10,
        name: "beef_steak",
        caption: "Борщ",
        description: "З мармурової яловичини, відчуй себе мажором",
        imageUrl:
          "https://shashlyk-master.com.ua/wp-content/uploads/2018/02/stejk-govyazhij.png",
        price: 700.0,
        order: 50,
      },
    ],
  },
  {
    id: 7,
    name: null,
    caption: "М'ясні страви",
    imageUrl:
      "https://vikna.tv/wp-content/uploads/2023/01/04/kachka-1800x1200.jpeg",
    order: 20,
    dishes: [
      {
        id: 6,
        name: "kyiv_style_meat_ball",
        caption: "Котлета по-київськи",
        description: "Курятина, масло вершкове, кляр",
        imageUrl:
          "https://bigkyiv.com.ua/wp-content/uploads/2022/01/kotlety-po-kievski-800x600.jpg",
        price: 110.0,
        order: 10,
      },
      {
        id: 7,
        name: "home_style_meat_boal",
        caption: "Котлета по-домашньому",
        description: "Смакує з пюрехою",
        imageUrl:
          "https://img.fozzyshop.com.ua/157472-thickbox_default/kotlety-domashnie.jpg",
        price: 65.99,
        order: 20,
      },
      {
        id: 8,
        name: "pork_ribs",
        caption: "Свинячі реберця",
        description: "З журавлиновим соусом",
        imageUrl: "https://images.unian.net/photos/2020_07/1593714242-3350.jpg",
        price: 200.0,
        order: 30,
      },
      {
        id: 9,
        name: "chicken_chop",
        caption: "Куряча відбивна",
        description: "Куряча відбивна в клярі\n Топ за свої гроші",
        imageUrl:
          "https://kuldim.com/wa-data/public/shop/products/89/21/2189/images/54555/54555.970.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 10,
        name: "beef_steak",
        caption: "Борщ",
        description: "З мармурової яловичини, відчуй себе мажором",
        imageUrl:
          "https://shashlyk-master.com.ua/wp-content/uploads/2018/02/stejk-govyazhij.png",
        price: 700.0,
        order: 50,
      },
    ],
  },
];

localStorage.setItem('category',JSON.stringify(dishesData))

document.addEventListener("DOMContentLoaded", function () {

// не має коду аби витягувати з локал сторедж  
const newMenu=localStorage.getItem('category')

const slideContainer = document.querySelector('.wrapper__wrapper');
if(slideContainer){
    dishesData.forEach(category => {
        const categoryItem = document.createElement("div");
        if(categoryItem){
        categoryItem.classList.add("wrapper__slide", "swiper-slide");
        categoryItem.setAttribute("data-id", category.id);
        categoryItem.innerHTML = `
            <a href="secondLayout.html"><img src="${category.imageUrl}" alt="" /></a>
            <h4>${category.caption}</h4>
        `;
        slideContainer.appendChild(categoryItem);
        console.log(`атрибут першого леєра== ${categoryItem.getAttribute('data-id')}`);
       // console.log(categoryItem);
        }
    });
  
    // Додаємо делегування подій на slideContainer
    slideContainer.addEventListener('click', function(event) {
        const clickedCategory = event.target.closest('.wrapper__slide'); 

        if (clickedCategory) {
            const clickedId = clickedCategory.getAttribute('data-id');
            localStorage.setItem('chosedID', clickedId)
            console.log(`Selected category ID: ${clickedId}`);
        } else {
            console.log('Категорію не знайдено');
        }
    });



      let chosedDataID=localStorage.getItem('chosedID')
      console.log(chosedDataID)
  // Динамічно створюємо картки


  

 
  // Делегування подій для + -
 /* dishContainer.addEventListener('click', function (event) {
    const target = event.target;
    const parentCard = target.closest('.item');
    if (target.closest('.basket__btn')) {
     
      const quantityBlock = parentCard.querySelector('.navigate__quantity');
      const basketBtn = parentCard.querySelector('.basket__btn');
      quantityBlock.style.display = "flex";
      basketBtn.style.display = "none";
    }

  
    if (target.matches('#minus')) {
      const parentCard = target.closest('.item');
      let dishValue = parentCard.querySelector(".navigate__input");
      const btnMinus=parentCard.querySelector('.navigate__minus')
      let curentDishValue = parseInt(dishValue.value);
      


      // страшний костиль))))
      if(btnMinus){
        btnMinus.style.background='orange'
        setTimeout(()=>{
            btnMinus.style.background=''
        },100)
      }
      if (curentDishValue < 0) {
        curentDishValue = 0;
      }
      if (curentDishValue === 0) {
        const basketBtn = parentCard.querySelector('.basket__btn');
        const quantityBlock = parentCard.querySelector('.navigate__quantity');

        basketBtn.style.display = "block";
        quantityBlock.style.display = "none";
      }
      dishValue.value = curentDishValue;
    }

    if (target.matches('#plus')) {
      const parentCard = target.closest('.item');
      const valueDish = parentCard.querySelector('.navigate__input');
      const btnPlus=parentCard.querySelector('.navigate__plus')
     
      if(btnPlus){
        
        btnPlus.style.background='orange'
        setTimeout(()=>{
            btnPlus.style.background=''
        },100)
      }
    }
  });
*/
  /// додаємо lockal storage
  localStorage.removeItem("selectedDishes");
  /*dishContainer.addEventListener('click', function (event) {
    const target = event.target;
    
    if (target.closest('.basket__btn')) {
      const parentCard = target.closest('.item');
      let dishData = {
        id: parentCard.id,
        caption: parentCard.querySelector('.text__title').innerText,
        price: parseFloat(parentCard.querySelector('.price__amount h4').innerText),
        quantity: parseInt(parentCard.querySelector('.navigate__input').value),
        description: parentCard.querySelector('.text__describe').innerText,
        imageUrl: parentCard.querySelector('.item__image').src,
        //dishPrice: parseFloat(parentCard.querySelector('.price__amount h4').innerText)*parseInt(parentCard.querySelector('.navigate__input').value),
      };
  
      // Отримуємо поточні дані з локального сховища та перетворюємо в масив, якщо необхідно
      let selectedDishes = JSON.parse(localStorage.getItem("selectedDishes"));
  
      // Перевірка, чи є дані масивом. Якщо ні, створюємо новий масив.
      if (!Array.isArray(selectedDishes)) {
        selectedDishes = [];
      }
  
      // Додаємо нову страву до масиву
      selectedDishes.push(dishData);
  
      // Зберігаємо оновлений масив у локальному сховищі
      localStorage.setItem("selectedDishes", JSON.stringify(selectedDishes));
  
      console.log(localStorage.getItem("selectedDishes"));
    }
  
    if (target.closest('.navigate__plus')) {
      const parentCard = target.closest('.item');
      const quantityInput = parentCard.querySelector('.navigate__input');
      let quantity = parseInt(quantityInput.value);
      quantity++;
      quantityInput.value = quantity;
  
      let selectedDishes = JSON.parse(localStorage.getItem("selectedDishes"));
      if (Array.isArray(selectedDishes)) {
        const dishIndex = selectedDishes.findIndex(dish => dish.id === parentCard.id);
        if (dishIndex !== -1) {
          selectedDishes[dishIndex].quantity = quantity;
          localStorage.setItem("selectedDishes", JSON.stringify(selectedDishes));
        }
      }
    }
  
    if (target.closest('.navigate__minus')) {
      const parentCard = target.closest('.item');
      const quantityInput = parentCard.querySelector('.navigate__input');
      let quantity = parseInt(quantityInput.value);
      quantity--;
      if (quantity < 0) quantity = 0;
      quantityInput.value = quantity;
  
      let selectedDishes = JSON.parse(localStorage.getItem("selectedDishes"));
      if (Array.isArray(selectedDishes)) {
        const dishIndex = selectedDishes.findIndex(dish => dish.id === parentCard.id);
        if (dishIndex !== -1) {
          selectedDishes[dishIndex].quantity = quantity;
          localStorage.setItem("selectedDishes", JSON.stringify(selectedDishes));
        }
      }
  
      if (quantity === 0) {
        const basketBtn = parentCard.querySelector('.basket__btn');
        const quantityBlock = parentCard.querySelector('.navigate__quantity');
        basketBtn.style.display = "block";
        quantityBlock.style.display = "none";
      }
    }
  
    console.log(localStorage);
  });
  */
}
});



// Додати обробник подій для кнопки "додати до кошика"


/// перехід на сторінку перевірки замовлення 




//==================================випадаюче меню
/**document.addEventListener("DOMContentLoaded", function () {
  const select = document.querySelector(".select__selected");
  const items = document.querySelector(".select__items");
  const selectContainer = document.querySelector(".curier__select");
  const selectedText = select.querySelector(".select__text");
  const selectedImage = select.querySelector(".select__image");

  select.addEventListener("click", function () {
    selectContainer.classList.toggle("active");
  });

  document.querySelectorAll(".select__item").forEach((item) => {
    item.addEventListener("click", function () {
      selectedImage.src = this.getAttribute("data-image");
      selectedText.textContent = this.textContent;
      selectContainer.classList.remove("active");
    });
  });
}); */


//==========
document.addEventListener("DOMContentLoaded", function () {
  menuInit();
});
import { menuInit } from "./functions.js";
import { stringify } from "postcss";

//+++=================

function navigateToaprovePage(){
  window.location.href="aprooveOrderPage.html"
}

document.addEventListener("DOMContentLoaded", function () {
  const basketBtn=document.querySelector('.page__bigbasket-btn')
  if (basketBtn) {
    basketBtn.addEventListener('click',navigateToaprovePage)
  }
   
});