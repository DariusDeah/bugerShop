export const fakeDB = {
  burgers: [
    {
      id: 1,
      name: 'CheeseBurger',
      price: 5,
      toppings: [
        {
          name: 'Cheese',
          CheeseOptions: ['Pepperjack', 'blueCheese', 'Swiss', 'Cheddar'],
          isIn: true
        },
        {
          name: 'Onions',
          OnionOptions: ['Yellow', 'White']
        },
        {
          name: 'Tomatoes'

        },
        {
          pickles: {
            isIn: true
          }
        },
        {
          lettuce: {
            isIn: true
          }
        }]
    },
    {
      id: 2,
      name: 'BaconCheeseBurger',
      toppings: [
        {
          cheese: {
            cheeseType: ['Pepper Jack', 'Swiss', 'Blue Cheese'],
            isIn: true
          }
        },
        {
          onions: {
            isIn: true
          }
        },
        {
          tomatoes: {
            isIn: true
          }
        },
        {
          pickles: {
            isIn: true
          }
        },
        {
          lettuce: {
            isIn: true
          }
        },
        {
          bacon: {
            isIn: true
          }
        }],
      price: 8
    }
  ]
}
