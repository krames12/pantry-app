import { v4 as uuidv4 } from "uuid";

const foodInventory = {
  categories: [
    {
      id: uuidv4(),
      name: "Vegetables",
      products: [
        {
          id: uuidv4(),
          name: "Potatoes",
          inStock: 10,
          unit: "individual",
          restockSoon: false,
        },
        {
          id: uuidv4(),
          name: "Carrots",
          inStock: 15,
          unit: "individual",
          restockSoon: false,
        },
        {
          id: uuidv4(),
          name: "Brocoli",
          inStock: 1,
          unit: "individual",
          restockSoon: true,
        },
      ]
    },
    {
      id: uuidv4(),
      name: "Meat",
      products: [
        {
          id: uuidv4(),
          name: "Chicken Breast",
          inStock: 6,
          unit: "individual",
          restockSoon: false,
        },
        {
          id: uuidv4(),
          name: "Ground Beef",
          inStock: 15,
          unit: "lbs",
          restockSoon: false,
        },
        {
          id: uuidv4(),
          name: "Chicken Thighs",
          inStock: 2,
          restockSoon: true,
        },
      ]
    },
    {
      id: uuidv4(),
      name: "Seasonings",
      products: [
        {
          id: uuidv4(),
          name: "Lawry's",
          inStock: 1,
          unit: "container",
          restockSoon: false,
        },
        {
          id: uuidv4(),
          name: "Salt",
          inStock: 2,
          unit: "container",
          restockSoon: false,
        },
        {
          id: uuidv4(),
          name: "Garlic Powder",
          inStock: 1,
          unit: "container",
          restockSoon: true,
        },
      ]
    },
  ]
}

export default foodInventory;