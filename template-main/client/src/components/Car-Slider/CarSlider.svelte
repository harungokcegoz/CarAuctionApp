<script>

    import CarSliderCard from "./CarCard.svelte";



    let arrayTopCars = [
        {
            "title": "2022 Porsche 911 Turbo S",
            "lotNum": "001",
            "curBid": "190.000",
            "location":"Amsterdam",
            "imgSrc":"https://cdn.elferspot.com/wp-content/uploads/2020/09/Porsche-911-992-Turbo-S-for-sale-1024x683.jpg"
        },
        {
            "title": "2022 BMW M5 CS",
            "lotNum": "002",
            "curBid": "185.999",
            "location":"Amsterdam",
            "imgSrc":"https://www.autoblog.nl/files/2021/01/nieuwe-bmw-m5-cs-eindelijk-officieel-2020-970-022-970x546.jpg"
        },
        {
            "title": "2010 458 Italia",
            "lotNum": "003",
            "curBid": "224.950",
            "location":"Deventer",
            "imgSrc":"https://prod.pictures.autoscout24.net/listing-images/37b284d8-8bed-446c-a9e9-a23f8fe49734_cd790cc3-a706-4951-88e1-b58748933f4f.jpg/720x540.webp"
        },
        {
            "title": "2021 Ferrari SF90 4.0 V8",
            "lotNum": "004",
            "curBid": "649.950",
            "location":"Eindhoven",
            "imgSrc":"https://www.thecarexpert.co.uk/wp-content/uploads/2022/07/Ferrari-SF90-Stradale.jpg"
        },
        {
            "title": "2022 Ferrari F8 Spider 3.9 V8",
            "lotNum": "005",
            "curBid": "523.750",
            "location":"Rotterdam",
            "imgSrc":"https://cdn.ebizautos.media/used-2022-ferrari-f8_spider-convertible-6305-21436622-1-1024.jpg"
        },
        {
            "title": "2022 BMW M8 Coupe Competition",
            "lotNum": "006",
            "curBid": "263.106",
            "location":"Groningen",
            "imgSrc":"https://prod.pictures.autoscout24.net/listing-images/c376caa2-794f-42e8-971a-14a943e43462_388018ac-af9c-45b3-9238-99b82acd1b16.jpg/480x360.webp"
        },
        {
            "title": "2017 Aston Martin Vantage 4.0",
            "lotNum": "007",
            "curBid": "1.329.950",
            "location":"Lochem",
            "imgSrc":"https://www.topgear.com/sites/default/files/2021/06/Aston%20Martin%20Vantage%20F1%20Edition%E2%94%AC%C2%AE%20Photo%20Max%20Earey%20320.jpg"
        },
        {
            "title": "2022 Bentley Continental GTC Speed V12",
            "lotNum": "008",
            "curBid": "436.950",
            "location":"Zutphen",
            "imgSrc":"https://i.ytimg.com/vi/kOmuiCkKQGw/maxresdefault.jpg"
        },
        {
            "title": "2020 Lamborghini Aventador 6.5 V12",
            "lotNum": "009",
            "curBid": "950.000",
            "location":"Den Haag",
            "imgSrc":"https://prod.pictures.autoscout24.net/listing-images/6140ceab-3965-405e-87e0-1e110b254272_5db3fb8e-d718-41f0-9be7-c3f199463995.jpg/480x360.webp"
        },
        {
            "title": "2022 Lamborghini Huracan STO 5.2 V10",
            "lotNum": "010",
            "curBid": "499.950",
            "location":"The Hague",
            "imgSrc":"https://prod.pictures.autoscout24.net/listing-images/0112c4dc-8e89-4410-9dcc-c26907560b48_3e704a76-38b2-4158-8845-dd5f2178876e.jpg/480x360.webp"
        }
    ]

    let i = 0;
    function next(){
        console.log(i);
        if(i==6){
            i = 0;
        } else {
            i++;
        }
    }
    function prev(){
        if(i == 0){
            i = 6;
        } else {
            i--;
        }
    }

</script>



<div class="slider-main" id="slider-main">
    <h2>TOP AUCTIONS</h2>
    <button class="pre-btn" id="pre-btn" type="button"> <i class="fa-solid fa-chevron-left" on:click={prev}></i> </button>




    <div class="item" id="item">
        <CarSliderCard title={arrayTopCars[i].title} lotNum ={arrayTopCars[i].lotNum} curBid={arrayTopCars[i].curBid} location={arrayTopCars[i].location} imgSrc={arrayTopCars[i].imgSrc}/>
    </div>
    <div class="item">
        <CarSliderCard title={arrayTopCars[i+1].title} lotNum ={arrayTopCars[i+1].lotNum} curBid={arrayTopCars[i+1].curBid} location={arrayTopCars[i+1].location} imgSrc={arrayTopCars[i+1].imgSrc}/>
    </div>
    <div class="item">
        <CarSliderCard title={arrayTopCars[i+2].title} lotNum ={arrayTopCars[i+2].lotNum} curBid={arrayTopCars[i+2].curBid} location={arrayTopCars[i+2].location} imgSrc={arrayTopCars[i+2].imgSrc}/>
    </div>
    <div class="item">
        <CarSliderCard title={arrayTopCars[i+3].title} lotNum ={arrayTopCars[i+3].lotNum} curBid={arrayTopCars[i+3].curBid} location={arrayTopCars[i+3].location} imgSrc={arrayTopCars[i+3].imgSrc}/>
    </div>
    <button class="nxt-btn" id="nxt-btn" type="button"><i class="fa-solid fa-chevron-right" on:click={next}></i></button>
</div>



<style>
    .slider-main{
        margin-top: 2em;
        display: inline-block;
    }
    .item{
        margin: 1em;
        display: inline-block;
    }
    button{
        display: inline-block;
        margin-top: 8em;
    }
    .pre-btn{
        background:    #47B5FF;
        border-radius: 1000px;
        width:         50px;
        height:        50px;
        color:         #ffffff;
        display:       inline-block;
        font:          normal bold 30px/19px "Calibri", sans-serif;
        text-align:    center;
        float: left;
        margin-right: 1em;

    }
    .nxt-btn{
        background:    #47B5FF;
        border-radius: 1000px;
        width:         50px;
        height:        50px;
        color:         #ffffff;
        display:       inline-block;
        font:          normal bold 30px/19px "Calibri", sans-serif;
        text-align:    center;
        float: right;
        margin-left: 1em;
    }

</style>