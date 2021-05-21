export const orderSelections = [
  {
    category: "method",
    question: "How do you drink your coffee?",
    options: [
      {
        title: "Capsule",
        text: "Compatible with Nespresso systems and similar brewers",
      },
      {
        title: "Filter",
        text: "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        title: "Espresso",
        text:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    category: "type",
    question: "What type of coffee?",
    options: [
      {
        title: "Single Origin",
        text: "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        title: "Decaf",
        text: "Just like regular coffee, except the caffeine has been removed",
      },
      {
        title: "Blended",
        text:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    category: "amount",
    question: "How much would you like?",
    options: [
      {
        title: "250g",
        text: "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        title: "500g",
        text: "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        title: "1000g",
        text:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    category: "grind",
    question: "Want us to grind them?",
    options: [
      {
        title: "Wholebean",
        text: "Best choice if you cherish the full sensory experience",
      },
      {
        title: "Filter",
        text: "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        title: "Cafetiére",
        text: "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    category: "delivery",
    question: "How often should we deliver?",
    options: [
      {
        title: "Every week",
        text: "$7.20 per shipment. Includes free first-class shipping.",
      },
      {
        title: "Every 2 weeks",
        text: "$9.60 per shipment. Includes free priority shipping.",
      },
      {
        title: "Every month",
        text: "$12.00 per shipment. Includes free priority shipping.",
      },
    ],
  },
]
// - Updating per shipment price (shown in "How often should we deliver?" section at the bottom) based on weight selected
//   - If 250g weight is selected
//     - Every Week price per shipment is $7.20
//     - Every 2 Weeks price per shipment is $9.60
//     - Every Month price per shipment is $12.00
//   - If 500g weight is selected
//     - Every Week price per shipment is $13.00
//     - Every 2 Weeks price per shipment is $17.50
//     - Every Month price per shipment is $22.00
//   - If 1000g weight is selected
//     - Every Week price per shipment is $22.00
//     - Every 2 Weeks price per shipment is $32.00
//     - Every Month price per shipment is $42.00

export const pricingTable = {
  "250g": {
    "Every week": "$7.20",
    "Every 2 weeks": "$9.60",
    "Every month": "$12.00",
  },
  "500g": {
    "Every week": "$13.00",
    "Every 2 weeks": "$17.50",
    "Every month": "$22.00",
  },
  "1000g": {
    "Every week": "$22.00",
    "Every 2 weeks": "$32.00",
    "Every month": "42.00",
  },
}
