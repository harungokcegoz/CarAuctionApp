<script>
import {getUserLotteries, deleteALottery} from "../../utils/network-utils.js"
import {userStore} from "../store.js"
import Navigator from "../Navigator.svelte";
import EditPage from "./EditPage.svelte";
let profileData = getUserLotteries($userStore.user_id);
let page = "profile";
let lot_id, carMake, carModel, year, mileage, startDate, saleDate, gearbox, fueltype, bodytype, estValue, condition, location, image;

</script>
<div class="container">
    <div class="lottery">
        {#await profileData}
        <p>Waiting</p>
        {:then lotteries} 
       
        {#if page == "profile"}
        <div class="header">
            <h1 style="text-align: center; border-bottom: solid rgba(128, 128, 128, 0.585);
            padding: 8px 1em">Profile</h1>
            <br>
            <h3>Welcome {$userStore.username}!</h3>
            <br>
            <br>
            <br>
            <h3>Your Auction(s):</h3>
            <br>
        </div>
            {#each lotteries as lottery, i}
            <div class="detail-page">
                <div class="detail-page-title">
                    <div class="d-inline">
                        <h2><b>Auction: {i+1} </b></h2>
                        <h2>{lottery.year} {lottery.carMake} {lottery.carModel}</h2>
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
                           <li class="detail"><b>Car Estimated Value:</b> {lottery.estValue}</li>
                           <li class="detail"><b>Start Bid:</b> {lottery.startingBid}</li>
                           <li class="detail"><b>Max Bid:</b> {lottery.maxBid}</li>
                           <li class="detail"><b>Bid Status:</b> {lottery.bidStatus}</li>
                        </div>
                        <div class="column-row" style="">
                            <h5 style="text-align: center;"><b>Sale Info</b></h5>
                            <li class="detail"><b>Created on:</b> {lottery.startDate}</li>
                            <li class="detail"><b>Sale Status:</b> {lottery.saleStatus}</li>
                            <li class="detail"><b>Sale Date:</b> {lottery.saleDate}</li>
                        </div>
                    </div>
                   </div>
                </div>
                <div class="buttonGroup">
                    <button type = "button" on:click={() => {lot_id = lottery.id; carMake = lottery.carMake; carModel = lottery.carModel; year = lottery.year; mileage = lottery.mileage; startDate = lottery.startDate; saleDate = lottery.saleDate; gearbox = lottery.gearbox; fueltype = lottery.fueltype; bodytype = lottery.bodytype; estValue = lottery.estValue; condition = lottery.condition; location = lottery.location; image = lottery.image; page = "editpage";}}>Edit</button>
                    <button on:click={() => {lot_id = lottery.id; deleteALottery(lot_id)}}>Delete</button>
                </div>
            </div> 
            {/each}
            {:else}
                <div class="header">
                    <h1>Edit your Auction:</h1>
                </div>
                <EditPage id = {lot_id} carMake = {carMake} carModel = {carModel} year = {year} mileage = {mileage} startDate = {startDate} saleDate = {saleDate} gearbox = {gearbox} fueltype ={fueltype} bodytype = {bodytype} estValue = {estValue} condition ={condition} image = {image} location = {location}/> 
            {/if} 
        {/await}
    </div>
</div>

<style>
.buttonGroup{
    text-align: center;
    margin-bottom: 3em;
}
.detail-page{
    border: solid rgba(128, 128, 128, 0.585);
    margin: 1em;
    padding: 1em;
    border-radius: 5px;
    box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.3);
    background-color: whitesmoke;
    max-width: 1920px;
    margin-bottom: 5em;
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
    margin: 2em auto;
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
button{
        background:    #DFF6FF;
		box-shadow: none;
        border-radius: 11px;
        width:         140px;
        height:        40px;
        color:         #040404;
        display:       inline-block;
        font:          normal bold 15px/30px "Calibri", sans-serif;
        text-align:    center;
    }
button:hover{
	background-color:#256D85;
    color: #DFF6FF;
}
button:active{
    position:relative;
	top:1px;
}
</style>