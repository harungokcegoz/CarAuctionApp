<script>
   import Lottery from "./LotteryCards.svelte"
   import {getAllLotteries} from "/Users/harungokcegoz/Library/CloudStorage/OneDrive-Saxion/Saxion/Year 2/2.1 WebTech/template-main/client/src/utils/network-utils.js"
   import LotteryDetails from "./LotteryDetails.svelte"
   import Button from "../Button.svelte"
  
    let arrayLotteries = getAllLotteries();
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

    <main>
       
        <div class="title">
           <h1>Lotteries Inventory</h1>
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
                    <Lottery lotNum = {lottery.lot_id} carMake = {lottery.car_make} carModel = {lottery.car_model} carYear = {lottery.car_year} bidStatus = {lottery.bid_status} maxBid = {lottery.max_bid} imgSrc = {lottery.car_image} location = {lottery.location}/>
                    <div class="but">
                    <a href="/inventory/lotteries/{i+1}" on:click={() => {page = LotteryDetails; params = i + 1;}}><Button name= "View Details"/></a>
                    </div>
                </div>
              {/each}  
            {/await}
        </div>
       {/if}
  
    </main>




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
</style>