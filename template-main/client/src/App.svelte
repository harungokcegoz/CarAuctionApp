<script>
    import HomepageHeader from "./components/Homepage/HomepageHeader.svelte";
    import Homepage from "./components/Homepage/Homepage.svelte";
    import Footer from "./components/Footer/Footer.svelte";
    import Inventory from "./components/Inventory/Inventory.svelte";
    import Navigator from "./components/Navigator.svelte";
    import router from "page";
    let page;



    router("/", () => (page = Homepage));
    router("/inventory", () => (page = Inventory));
   
    router.start();


</script>

      

    <HomepageHeader/>
    <Navigator/>
   

<main>
    <svelte:component this={page}/>
</main>

    <Footer/>


<style>
</style>


