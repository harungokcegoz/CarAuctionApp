<script>
import Button from "../Button.svelte";
    export let title, lotNum, curBid, location, imgSrc;
</script>

<div class="car-container">
    <div class="car-card">
        <div class="car-card-info">
            <div class="car-card-img">
                <img src="{imgSrc}" alt="">
            </div>
            <div class="car-card-description">
                <div class="car-card-title">
                    <h3>{title}</h3>
                </div>
                <div class="car-card-lotNumber">
                    <p><b>Lot#: </b> {lotNum}</p>
                </div>
                <div class="car-card-bid">
                    <p><b>Bid: </b>${curBid}</p>
                </div>
                <div class="car-card-location">
                    <p><b>Location: </b> {location}</p>
                </div>
            </div>
        </div>
        <div class="car-card-button">
            
        </div>
    </div>
</div>

<style>
    .car-container{
        display: inline-block;
        height: 450px;
        width: 250px;
    }
    .car-card{
        display: inline-block;
        border: solid rgba(0, 0, 0, 0.3);
        border-radius: 2px;
        box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.3);

    }
    .car-card-description{
        padding: 1em;
        margin-bottom: 2em;
        text-align: left;
        height: 250px;
        width: 210px;
    }
    
    .car-card-img img{
        width: 260px;
        height: 180px;
        object-fit: cover;
        
    }
    .car-card-button{
        text-align: center;
        margin-bottom: 1em;
    }
</style>
