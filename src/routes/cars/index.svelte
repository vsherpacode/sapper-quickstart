<svelte:head>
	<title>Inventory List</title>
</svelte:head>

<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`cars.json`).then(r => r.json()).then(cars => {
      return { cars };
    });
  }
</script>

<script>
  import InventoryList from '../../components/InventoryList.svelte';
  export let cars;
</script>

<h1>My Inventory</h1>

<InventoryList cars={cars}></InventoryList>

