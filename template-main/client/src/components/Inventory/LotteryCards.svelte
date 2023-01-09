<script>
  import Button from "../Button.svelte";
  import Inventory from "./Inventory.svelte"; 
  import {userStore, tokenStore} from "../store.js"
  import { deleteALottery } from "../../utils/network-utils.js";
  import AdminEditPage from "../AdminDashboard/AdminEditPage.svelte";

   export let card;
</script>

    <div class="lottery-container">
        <div class="lottery-card">
            <div class="lottery-card-info">
                <div class="lottery-card-img">
                    <img src="{card.image}" alt="">
                </div>
                <div class="lottery-card-description">
                    <div class="lottery-card-title">
                        <h5><b>{card.carMake} {card.carModel} {card.year}</b></h5>
                    </div>
                    <br>
                    <div class="lottery-card-lotNumber">
                        <p><b>Lot#: </b> {card.id}</p>
                    </div>
                    <div class="lottery-card-bidStatus">
                        <p><b>Bid Status: </b>{card.bidStatus}</p>
                    </div>
                    <div class="lottery-card-maxBid">
                        <p><b>Bid: </b>${card.maxBid}</p>
                    </div>
                    <div class="lottery-card-location">
                        <p><b>Location: </b> {card.location}</p>
                    </div>
                </div>
            </div>
            <div class="but">
                <Button name= "View Details" href ={`/inventory/lotteries/${card.id}`}/>
                {#if $userStore.role === "admin" }
                <Button name= "Edit" href ={`/inventory/lotteries/admin/edit/${card.id}`}/>

                <!-- sorry for this :( -->
                <button on:click={() => {deleteALottery(card.id, $tokenStore)}}>Delete</button>
                {/if}
            </div>
        </div>
    </div>


<style>
    .lottery-container{
        display: inline-block;
        height: 450px;
        width: 250px; 
        margin: 4em 1em;
    }
    .lottery-card{
        display: inline-block;
        border: solid rgba(0, 0, 0, 0.3);
        border-radius: 2px;
        box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.3);

    }
    .lottery-card-info{
        margin-bottom: 3em;
    }
    .lottery-card-description{
        padding: 1em;
        margin-bottom: 1em;
        text-align: left;
        height: 230px;
        width: 210px;
    }
    
    .lottery-card-img img{
        width: 260px;
        height: 180px;
        object-fit: cover;
        
    }
    .but{
        margin-bottom: 2em;
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



</style>