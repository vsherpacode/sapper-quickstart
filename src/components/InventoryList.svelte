<script>
  import { goto } from '@sapper/app';
  export let cars;
</script>


{#each cars as car}
  <div class="car-card" on:click={() => goto(`/cars/${car.id}`)}>
    <div class="details">
      <img src={`/cars/${ car.year + car.model }.jpg`}
           class="thumbnail"
           alt={`Picture of ${car.year} ${car.make} ${car.model}`} />
      <h3>{`${car.year} ${car.make} ${car.model}`}</h3>
      <h4>${car.price}</h4>
      {#if car.mileage === undefined}
        <h4>Not known</h4>
      {:else}
        <h4>{car.mileage} miles</h4>
      {/if}
    </div>
    <div class="middle">
      <div class="text">Buy now!</div>
    </div>  
  </div>
{/each}







<style>
  .car-card { 
    display: inline-block;
    position: relative;
    border: 1px solid gray;
    margin-top: 20px;
    margin-right: 15px;
    padding: 10px 15px;
    text-decoration: none;
  }

  .car-card:hover {
    cursor: pointer;
  }

  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .car-card:hover .details {
    opacity: 0.3;
  }

  .car-card:hover .middle {
    opacity: 1;
  }

  .car-card .thumbnail {
    width: 250px;
    height: 200px;
  }

  .car-card .thumbnail img {
    width: 100%;
    height: auto;
  }

  .text {
    background-color: rgb(255,62,0);
    color: white;
    font-size: 16px;
    padding: 16px 32px;
  }
</style>
