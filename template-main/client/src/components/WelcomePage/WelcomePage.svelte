<script>
  import Button from "../Button.svelte";

    
</script>


    <div class="container">
        <div class="title">
            <h2>Welcome to HG Cars Online Auction Website!</h2>
        </div>
        <div class="info">
            <p>Hey there! We are so happy to see you here. Before to start, you need to register our website or if you are already registered the website you need to sign in to access the website fully. In addition, if you register the website, you can make a bid for existing auctions and you can start a auction your car. </p>
            <br>
            <p>We will be waiting for you other side of the website. </p>
            <br>
            <p>Hurry up!</p>
        </div>
        <div class="buttonGroup">
            <Button name = "Register" href = "/register"/>
            <Button name = "Login" href = "/login"/>
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