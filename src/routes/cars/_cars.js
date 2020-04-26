const cars = [{
    year: 2019,
    make: 'Honda',
    model: 'Accord',
    description: 'Duo at est et elitr dolor sed eos ipsum, nonumy et nonumy justo elitr labore amet. Nonumy dolor est erat.',
    price: 19999.99,
    mileage: 10000
  }, {
    year: 2018,
    make: 'Smart',
    model: 'fortwo',
    description: 'Duo at est et elitr dolor sed eos ipsum, nonumy et nonumy justo elitr labore amet. Nonumy dolor est erat.',
    price: 8999.99,
    mileage: 12000
  }, {
    year: 2018,
    make: 'Tesla',
    model: 'Model 3',
    description: 'Duo at est et elitr dolor sed eos ipsum, nonumy et nonumy justo elitr labore amet. Nonumy dolor est erat.',
    price: 51000,
    mileage: 20000
  }, {
    year: 2017,
    make: 'Toyota',
    model: 'Tacoma',
    description: 'Duo at est et elitr dolor sed eos ipsum, nonumy et nonumy justo elitr labore amet. Nonumy dolor est erat.',
    price: 26900, 
    mileage: 15000
  }, {
    year: 2015, 
    make: 'Honda',
    model: 'CRV',
    description: 'Duo at est et elitr dolor sed eos ipsum, nonumy et nonumy justo elitr labore amet. Nonumy dolor est erat.',
    price: 16000
  }, {
    year: 2012,
    make: 'Toyota',
    model: 'Tundra',
    description: 'Duo at est et elitr dolor sed eos ipsum, nonumy et nonumy justo elitr labore amet. Nonumy dolor est erat.',
    price: 24000,
    mileage: 25000
  }, {
    year: 2007,
    make: 'Toyota',
    model: 'Rav 4',
    description: 'Duo at est et elitr dolor sed eos ipsum, nonumy et nonumy justo elitr labore amet. Nonumy dolor est erat.',
    price: 8000,
    mileage: 150000
  }, {
    year: 2019,
    make: 'Honda',
    model: 'Accord',
    description: 'Duo at est et elitr dolor sed eos ipsum, nonumy et nonumy justo elitr labore amet. Nonumy dolor est erat.',
    price: 19999.99,
    mileage: 10000
  }, {
    year: 2018,
    make: 'Smart',
    model: 'fortwo',
    description: 'Duo at est et elitr dolor sed eos ipsum, nonumy et nonumy justo elitr labore amet. Nonumy dolor est erat.',
    price: 8999.99
  }, {
    year: 2018,
    make: 'Tesla',
    model: 'Model 3',
    description: 'Duo at est et elitr dolor sed eos ipsum, nonumy et nonumy justo elitr labore amet. Nonumy dolor est erat.',
    price: 51000,
    mileage: 18000
  }, {
    year: 2017,
    make: 'Toyota',
    model: 'Tacoma',
    description: 'Duo at est et elitr dolor sed eos ipsum, nonumy et nonumy justo elitr labore amet. Nonumy dolor est erat.',
    price: 26900,
    mileage: 18100
  }, {
    year: 2015, 
    make: 'Honda',
    model: 'CRV',
    description: 'Duo at est et elitr dolor sed eos ipsum, nonumy et nonumy justo elitr labore amet. Nonumy dolor est erat.',
    price: 16000,
    mileage: 15000
  }, {
    year: 2012,
    make: 'Toyota',
    model: 'Tundra',
    description: 'Duo at est et elitr dolor sed eos ipsum, nonumy et nonumy justo elitr labore amet. Nonumy dolor est erat.',
    price: 24000
  }, {
    year: 2007,
    make: 'Toyota',
    model: 'Rav 4',
    description: 'Duo at est et elitr dolor sed eos ipsum, nonumy et nonumy justo elitr labore amet. Nonumy dolor est erat.',
    price: 8000
  }
];

var id = 1;
cars.forEach((car) => {
  car.id = id++;
}); 

export default cars;