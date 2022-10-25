<script>
    import Logo from "../Logo.svelte";
    import Button from "../Button.svelte";
   
</script>
<header>
    <div class="logo">
        <Logo/>
    </div>
    <div class="searcher">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
         </div>
    </div>
    <div class="buttons">
        <Button name = "Register" />
        <Button name = "Sign In" />
    </div>
</header>


<style>
header{
    background: #06283D;
    
}
.logo{
    margin: 2em;
    display: inline-block;
}
.searcher{
    display: inline-block;
    margin-left: 6em;
    width: 25%;
}
.buttons{
    float: right;
    margin: 3em 1.5em;
}

</style>