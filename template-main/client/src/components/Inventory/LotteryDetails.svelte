<script>
    import Button from "../Button.svelte";
    import {getLotteryById} from "../../utils/network-utils.js"
    let id = location.pathname.replace('/inventory/lotteries/', '');
    import { tokenStore } from "../store.js";
  import LotteryCards from "./LotteryCards.svelte";
    import BidSection from "./BidSection.svelte";

    let arrayLotteries = getLotteryById(id, $tokenStore)

   
</script>
    {#await arrayLotteries}
            <p>Waiting</p>
            {:then lottery} 
                <!-- {#each lotteries as lottery} -->
                <div class="detail-page">
                    <div class="detail-page-title">
                        <div class="d-inline">
                            <h2><b>{lottery.year} {lottery.carMake} {lottery.carModel}</b></h2>
                            <h9> <b>Lot# </b>{lottery.id} | <b>Location:</b> {lottery.location} | <b>Sale Date:</b> {lottery.saleDate}</h9>
                        </div>
                    </div>
                    <div class="container">
                        <div class="column">
                            <img src={lottery.image} alt="" style="height: 400px; width: 500px; object-fit: cover;" class="rounded">
                        </div>
                       <div class="container">
                            <div class="column">
                                <div class="column-row" >
                                    <h5 style="text-align: center;"><b>Car Info</b></h5>
                                    <li class="detail"><b>Make:</b> {lottery.carMake}</li>
                                    <li class="detail"><b>Model:</b> {lottery.carModel}</li>
                                    <li class="detail"><b>Year:</b> {lottery.year}</li>
                                    <li class="detail"><b>Mileage:</b> {lottery.mileage}</li>
                                    <li class="detail"><b>Fuel Type:</b> {lottery.fueltype}</li>
                                    <li class="detail"><b>Body Type:</b> {lottery.bodytype}</li>
                                    <li class="detail"><b>Gear Box:</b> {lottery.gearbox}</li>
                                    <li class="detail"><b>Car Condition:</b> {lottery.condition}</li>
                                    
                                </div>
                            </div>
                            <div class="column">
                                <div class="column-row" style="">
                                    <h5 style="text-align: center;"><b>Bid Info</b></h5>
                                    <li class="detail"><b>Car Estimated Value:</b> ${lottery.estValue}</li>
                                    <li class="detail"><b>Start Bid:</b> ${lottery.startingBid}</li>
                                    <li class="detail"><b>Max Bid:</b> ${lottery.maxBid}</li>
                                    <li class="detail"><b>Bid Status:</b> {lottery.bidStatus}</li>
                                </div>
                                <div class="column-row" style="text-align: center;">
                                   <BidSection/>
                                </div>
                                <div class="column-row" style="">
                                    <h5 style="text-align: center;"><b>Sale Info</b></h5>
                                    <li class="detail"><b>Created on:</b> {lottery.startDate}</li>
                                    <li class="detail"><b>Sale Status:</b> {lottery.sale_status}</li>
                                    <li class="detail"><b>Sale Date:</b> {lottery.saleDate}</li>
                                </div>
                            </div>
                       </div>
                      
                    </div>
                
                </div>
              
            {/await}
      
<style>


.detail-page{
    border: solid rgba(128, 128, 128, 0.585);
    margin: 1em;
    padding: 1em;
    border-radius: 5px;
    box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.3);
    background-color: whitesmoke;
    max-width: 1920px;
    height: 100%;
   
}
.detail-page-title{
    padding: 1em;
    margin-bottom: 1em;
}
.container{
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin: 0;
}

.column-row{
    margin-bottom: 1em;
    padding: 1em;
    border: solid rgba(128, 128, 128, 0.585); border-radius: 5px;
}
.detail{
    list-style-type: none;
    margin-top: 1em;
    border-bottom: 1px solid;
}


</style>