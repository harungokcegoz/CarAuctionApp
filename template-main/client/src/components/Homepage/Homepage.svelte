<script>
    import CarSlider from "../Car-Slider/CarSlider.svelte";
    import HomepageInfo from "./HomepageInfo.svelte";
    import { tokenStore } from "../store";
  import Navigator from "../Navigator.svelte";
  console.log(tokenStore)
</script>
    {#if ([undefined, null, ''].includes($tokenStore))}
    <div class="banner">
        <h1>You need to login firstly!</h1>
    </div>

        {:else}
        <Navigator/>
        <main>
            <div class="main-cars-slider">
                <CarSlider/>
            </div>
        
            <div class="main-info">
               <HomepageInfo/>
            </div>
            </main>
    {/if}
    
<style>
.main-cars-slider{
    text-align: center;
    margin-top: 2em;
    margin-bottom: 8em;
   
}
.main-info{
    margin: 1em;
    text-align: justify;
    padding: 1em;
    margin-bottom: 10em;
}
.banner{
    text-align: center;
    margin: 5em auto;
}


</style>


