<script>
    import Logo from "../Logo.svelte";
    import Button from "../Button.svelte";
    import {tokenStore} from "../store.js"
   
   function signOut(){
    tokenStore.set("")
   }
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
        {#if ([undefined, null, ''].includes($tokenStore))}
        <Button name = "Register" href = "/register"/>
        <Button name = "Login" href = "/login"/>
        {:else}
        <button class="signOut" on:click={signOut}>Sign Out</button>
        {/if}
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
.signOut{
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
.signOut:hover{
	background-color:#256D85;
}
.signOut:active{
    position:relative;
	top:1px;
}

</style>