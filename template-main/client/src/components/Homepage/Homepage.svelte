<script>
    import CarSlider from "../Car-Slider/CarSlider.svelte";
    import HomepageInfo from "./HomepageInfo.svelte";
</script>
        <main>
        <div class="main-cars-slider">
            <CarSlider/>
        </div>
    
        <div class="main-info">
           <HomepageInfo/>
        </div>
        </main>
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


</style>


