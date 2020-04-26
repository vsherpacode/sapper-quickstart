<script context="module">
  export async function preload({ params, query }) {
    const { slug } = params;
    const res = await this.fetch(`cars/${slug}.json`);
    const data = await res.json();
    if(res.status === 200) {
      return { car: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let car;
</script>

<img src={`/cars/${ car.year + car.model }.jpg`}
     alt={`Picture of ${car.year} ${car.make} ${car.model}`} />
<h1>{car.year} {car.make} {car.model}</h1>
<h2>{car.mileage} miles</h2>
{car.description}

<style>
  img {
    width: 400px;
  }
</style>