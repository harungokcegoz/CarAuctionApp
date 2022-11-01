<script>
    export let carMake, carModel, carYear, lotNum, location, imgSrc, bidStatus, maxBid;  
</script>

    <div class="lottery-container">
        <div class="lottery-card">
            <div class="lottery-card-info">
                <div class="lottery-card-img">
                    <img src="{imgSrc}" alt="">
                </div>
                <div class="lottery-card-description">
                    <div class="lottery-card-title">
                        <h5><b>{carMake} {carModel} {carYear}</b></h5>
                    </div>
                    <br>
                    <div class="lottery-card-lotNumber">
                        <p><b>Lot#: </b> {lotNum}</p>
                    </div>
                    <div class="lottery-card-bidStatus">
                        <p><b>Bid Status: </b>{bidStatus}</p>
                    </div>
                    <div class="lottery-card-maxBid">
                        <p><b>Bid: </b>${maxBid}</p>
                    </div>
                    <div class="lottery-card-location">
                        <p><b>Location: </b> {location}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


<style>
    .lottery-container{
        display: inline-block;
        height: 450px;
        width: 250px; 
    }
    .lottery-card{
        display: inline-block;
        border: solid rgba(0, 0, 0, 0.3);
        border-radius: 2px;
        box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.3);

    }
    .lottery-card-info{
        margin-bottom: 5em;
    }
    .lottery-card-description{
        padding: 1em;
        margin-bottom: 2em;
        text-align: left;
        height: 280px;
        width: 210px;
    }
    
    .lottery-card-img img{
        width: 260px;
        height: 180px;
        object-fit: cover;
        
    }


</style>