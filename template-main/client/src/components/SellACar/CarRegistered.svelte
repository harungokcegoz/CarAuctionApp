<script>
    import Button from "../Button.svelte";
</script>
    <div class="container">
        <div class="title">
            <h2>CONGRATS!</h2>
        </div>
        <div class="info" style="text-align: center;">
            <p>Your car is registered successfully!.</p>
            <br>
            <p>Now you check your lottery on Inventory page!</p>
            <br>
            <p>Good Luck!</p>
        </div>
        <div class="buttonGroup">
            <Button name = "Continue" href= "/inventory"/>
        </div>
    </div>

    <style>
        .container{
    border: 1px solid rgba(0, 0, 0, 0.371);
    margin: 2em auto;
    padding: 2em;
    border-radius: 5px;
    box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.3);
}
.title{
    text-align: center;
    margin: 2em auto;
}
.info{
    padding: 2em;
    margin-top: 2em;
    font-size: large;
}
.buttonGroup{
    text-align: center;
    margin: 3em;
}
    </style>