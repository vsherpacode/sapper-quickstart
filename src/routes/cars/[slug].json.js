import cars from './_cars.js';

export function get(req, res, next) {
  const { slug } = req.params;
  const filteredCars = cars.filter(car => car.id === parseInt(slug));
  if(filteredCars.length > 0) {
    const car = filteredCars[0]; // not perfect but good enough
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(car));
  } else {
    res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `That car was not found`
		}));
  }
}