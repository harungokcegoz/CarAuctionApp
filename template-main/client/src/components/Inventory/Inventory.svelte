<script>
   import Lottery from "./LotteryCards.svelte"
   import {getAllLotteries} from "../../utils/network-utils"
   import LotteryDetails from "./LotteryDetails.svelte"
   import Button from "../Button.svelte"
   import Navigator from "../Navigator.svelte"
import { tokenStore } from "../store";
  
    let arrayLotteries = getAllLotteries();
    console.log(arrayLotteries);
    import router from "page";
    let page;
    let params;
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
</script>
{#if ([undefined, null, ''].includes($tokenStore))}
<div class="banner">
    <h1>You need to login firstly!</h1>
</div>

    {:else}
    <Navigator/>
    <main>
       
        <div class="title">
           <h1 style="text-align: center; border-bottom: solid rgba(128, 128, 128, 0.585);
           padding: 8px 1em">Lotteries Inventory</h1>
        </div>
       {#if page === LotteryDetails}
        <LotteryDetails id = {params}/>
        {:else}
        <div class="lotteries">
            {#await arrayLotteries}
                <p>Waiting</p>
            {:then lotteries} 
              {#each lotteries as lottery, i}
             
                <div class="item">
                    {#if (lottery.bidStatus == undefined)}
                    <Lottery lotNum = {lottery.id} carMake = {lottery.carMake} carModel = {lottery.carModel} carYear = {lottery.year} bidStatus = {"Waiting an admin confirmation."} maxBid = {" Waiting an admin confirmation."} imgSrc = {lottery.image} location = {lottery.location}/>
                    {:else}   
                    <Lottery lotNum = {lottery.id} carMake = {lottery.carMake} carModel = {lottery.carModel} carYear = {lottery.year} bidStatus = {lottery.bidStatus} maxBid = {lottery.maxBid} imgSrc = {lottery.image} location = {lottery.location}/>
                    {/if}
                    
                    <div class="but">
                    <a href="/inventory/lotteries/{i+1}" on:click={() => {page = LotteryDetails; params = i + 1 ;}}><Button name= "View Details" href = "#"/></a>
                    </div>
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
    margin: 2em 1em;
    display: inline-block;
}
.but{
    margin-top: 1em;
}
.banner{
    text-align: center;
    margin: 5em auto;
}

</style>