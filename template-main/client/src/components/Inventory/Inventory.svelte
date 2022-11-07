<script>
    import Lottery from "./LotteryCards.svelte"
    import {getAllLotteries} from "../../utils/network-utils"
    import LotteryDetails from "./LotteryDetails.svelte"
    import { tokenStore} from "../store.js";
    import { writable } from "svelte/store";
    import router from "page"; 


    let carMakeFilterStore = writable('')
    let locationFilterStore = writable('')

    async function uniqueMakes() {
        const lotteries = await getAllLotteries($tokenStore)
        return [...new Set(lotteries.map(lottery => lottery.carMake))]
    }
    async function uniqueLocations() {
        const lotteries = await getAllLotteries($tokenStore)
        return [...new Set(lotteries.map(lottery => lottery.location))]
    }
    let page;
    let params;
    let carMakeFilter, locationFilter;
    $: cars = getCars([$carMakeFilterStore, $locationFilterStore])
    let filterData
    // router("/inventory", () => (page = "/"));
    router(
        "/inventory/lotteries/:id",
        (ctx, next) => {
            params = ctx.params;
            next();
        },
        ()=>(page = LotteryDetails)
    )
    router.start();
    async function getCars(queryParams){
         const response = await fetch(
            "http://localhost:3000/lotteries" + (queryParams ? '?' + queryParams.join('&') : ''), {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + $tokenStore,
                },  
            }
            )
         return await response.json()
    }
</script>
{#if ([undefined, null, ''].includes($tokenStore))}
<div class="banner">
    <h1>You need to login firstly!</h1>
</div>
    {:else}
    <main>
        <div class="title">
           <h1 style="text-align: center; border-bottom: solid rgba(128, 128, 128, 0.585);
           padding: 8px 1em">Lotteries Inventory</h1>  
        </div>
        <form on:submit|preventDefault ={() => {console.log()}}>
            <div class="filterBar">
                <div class="bar-title">
                    <h3>Filter</h3>
                </div>
                <div class="input-field">
                    <label for="">Car Make:</label>
                    <select bind:value={carMakeFilter} on:change={() => {
                        carMakeFilterStore.set(carMakeFilter === undefined ? '' : `carMake=${carMakeFilter}`)
                        }}>
                   {#await uniqueMakes()}
                        <option value="">Waiting</option>
                   {:then makes} 
                   <option selected value={undefined}>Select Make</option>
                    {#each makes as carMake}
                    <option>{carMake}</option> 
                    {/each}
                   {/await}
                    </select>
                 </div>
                 
                <div class="input-field">
                    <label for="">Location:</label>
                    <select bind:value={locationFilter} on:change={() => {
                        locationFilterStore.set(locationFilter === undefined ? '' : `location=${locationFilter}`)
                    }}>
                   {#await uniqueLocations()}
                        <option value="">Waiting</option>
                   {:then locations} 
                   <option selected value={undefined}>Select Location</option>
                    {#each locations as location}
                        <option>{location}</option>
                    {/each}
                   {/await}
                    </select>
                 </div>
              </div>
        </form>
        
       {#if page === LotteryDetails}
        <LotteryDetails id = {params}/>
        {:else}
        <div class="lotteries">
            {#await cars}
                <p>Waiting</p>
            {:then lotteries} 
              {#each lotteries as lottery, i}
                <div class="item">
                    {#if (lottery.bidStatus == undefined)}
                    <Lottery lotNum = {lottery.id} carMake = {lottery.carMake} carModel = {lottery.carModel} carYear = {lottery.year} bidStatus = {"Waiting an admin confirmation."} maxBid = {" Waiting an admin confirmation."} imgSrc = {lottery.image} location = {lottery.location}/>
                    {:else}   
                    <Lottery lotNum = {lottery.id} carMake = {lottery.carMake} carModel = {lottery.carModel} carYear = {lottery.year} bidStatus = {lottery.bidStatus} maxBid = {lottery.maxBid} imgSrc = {lottery.image} location = {lottery.location}/>
                    {/if}
                </div>
              {/each}  
            {/await}
        </div>
       {/if}
  
    </main>
{/if}


   




<style>
.title{
    text-align: center;
    margin: 2em;
}
.lotteries{
    padding: 1em;
    text-align: center;
}
.item{
    display: inline-block;
}
.banner{
    text-align: center;
    /* margin: 5em auto; */
}

.filterBar{
    text-align: center;
    border: solid rgba(128, 128, 128, 0.585);
    padding: 2em;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    width: 88%;
    margin: 0 auto;
}
.input-field{
    display: inline-block;
    margin: 0 1em;
}


</style>