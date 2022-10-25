<script>
    import Button from "../Button.svelte";
    export let id;
    import {getLotteryById} from "/Users/harungokcegoz/Library/CloudStorage/OneDrive-Saxion/Saxion/Year 2/2.1 WebTech/template-main/client/src/utils/network-utils.js"
    let arrayLotteries = getLotteryById(id);
</script>
    {#await arrayLotteries}
            <p>Waiting</p>
            {:then lotteries} 
                {#each lotteries as lottery}
                <div class="detail-page">
                    <div class="detail-page-title">
                        <div class="d-inline">
                            <h2><b>{lottery.car_year} {lottery.car_make} {lottery.car_model}</b></h2>
                            <h9> <b>Lot# </b>{lottery.lot_id} | <b>Location:</b> {lottery.location} | <b>Sale Date:</b> {lottery.sale_date}</h9>
                        </div>
                        <div class="d-inline" style="float: right;">
                             <button type="button" name="favButton"><i class="fa fa-star-o fa-2x" aria-hidden="true"></i> Add a Favorite </button> 
                        </div>
                    </div>
                    <div class="container">
                        <div class="column">
                            <img src={lottery.car_image} alt="" style="height: 400px; width: 500px; object-fit: cover;" class="rounded">
                       </div>
                       <div class="container">
                        <div class="column">
                            <div class="column-row" >
                                <h5 style="text-align: center;"><b>Car Info</b></h5>
                                <li class="detail"><b>Make:</b> {lottery.car_make}</li>
                                <li class="detail"><b>Model:</b> {lottery.car_model}</li>
                                <li class="detail"><b>Year:</b> {lottery.car_year}</li>
                                <li class="detail"><b>Milage:</b> {lottery.car_milage}</li>
                                <li class="detail"><b>Fuel Type:</b> {lottery.car_fuel_type}</li>
                                <li class="detail"><b>Body Type:</b> {lottery.car_body_type}</li>
                                <li class="detail"><b>Gear Box:</b> {lottery.car_gearbox}</li>
                                <li class="detail"><b>Car Condition:</b> {lottery.car_condition}</li>
                                
                            </div>
                        </div>
                        <div class="column">
                            <div class="column-row" style="">
                               <h5 style="text-align: center;"><b>Bid Info</b></h5>
                               <li class="detail"><b>Car Estimated Value:</b> {lottery.car_est_value}</li>
                               <li class="detail"><b>Start Bid:</b> {lottery.starting_bid}</li>
                               <li class="detail"><b>Max Bid:</b> {lottery.max_bid}</li>
                               <li class="detail"><b>Bid Status:</b> {lottery.bid_status}</li>
                            </div>
                            <div class="column-row" style="text-align: center;">
                                <h5 style="text-align: center;"><b>Make Offer</b></h5>
                                <div class="numInput" style="margin: 1em;">
                                    <input type="text" name="bid" id="" placeholder="Your Bid" style="padding: 5px;">
                                </div>
                                <div class="offerButton" style="margin: 5px;">
                                    <Button name="Make a Offer"/>
                                </div>
                              
                            </div>
                            <div class="column-row" style="">
                                <h5 style="text-align: center;"><b>Sale Info</b></h5>
                                <li class="detail"><b>Created on:</b> {lottery.start_date}</li>
                                <li class="detail"><b>Sale Status:</b> {lottery.sale_status}</li>
                                <li class="detail"><b>Sale Date:</b> {lottery.sale_date}</li>
                            </div>
                        </div>
                       </div>
                      
                    </div>
                
                </div>
                {/each}  
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
button {
	color: black;
	background: transparent;
	font-size: 15px;
	cursor: pointer;
    border: none;
    border-radius: 10px;
    padding: 0.5em 1em;
}
button:hover {
	color: white;
	background-color: #06283D;
}

</style>