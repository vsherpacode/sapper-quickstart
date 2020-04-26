<svelte:head>
	<title>Buy my cars!</title>
</svelte:head>

<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`cars.json`).then(r => r.json()).then(cars => {
      return { cars };
    });
  }
</script>

<script>
	import InventoryList from '../components/InventoryList.svelte';
	export let cars;
</script>

<InventoryList cars={cars}></InventoryList>