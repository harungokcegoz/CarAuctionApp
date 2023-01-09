<script>
    import {getBidsOfAuction, makingBid, verifyBiggerBid} from "../../utils/network-utils.js";
    import {tokenStore, userStore} from "../store.js";
    let bidAmount;
    let userId = $userStore.userId;
    let lotId = parseInt(location.pathname.replace('/inventory/lotteries/', ''));
    let bidsData = getBidsOfAuction(lotId, $tokenStore);
    let amounts = [];


     function submit(){
        bidAmount = parseInt(bidAmount);
         if (verifyBiggerBid(amounts, bidAmount)){
             let postData = {bidAmount,lotId, userId};
             makingBid(postData, $tokenStore);
             location.href = "/inventory/lotteries/" + lotId;
         } else {
             alert("Your bid must be bigger than last bid!")
         }
    }

</script>
<div class="bids">
    <h5><b>Bids</b></h5>
    <br>
    {#await bidsData}
        <p>Waiting...</p>
        {:then bids}
        {#each bids as bid, i}
            <li class="bidItems"><b>Bid {i + 1}: </b>${bid.bidAmount} User: {bid.userId}</li>
            {amounts.push(bid.bidAmount)}
        {/each}
    {/await}
    <br>
</div>
<h5 style="text-align: center;"><b>Make Offer</b></h5>
<div class="numInput" style="margin: 1em;">
    <input type="text" placeholder="Your Bid" style="padding: 5px;" required bind:value = {bidAmount}>
</div>
<div class="offerButton" style="margin: 5px;">
    <button on:click = {submit} >Make Offer</button>
</div>
<style>
    .bids{
        margin: 1em;
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
    }
    button:active{
        position:relative;
        top:1px;
    }
</style>