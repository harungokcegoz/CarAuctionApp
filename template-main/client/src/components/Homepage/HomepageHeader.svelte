<script>
    import Logo from "../Logo.svelte";
    import Button from "../Button.svelte";
    import {tokenStore} from "../store.js"
   
   function signOut(){
    tokenStore.set("");
    location.href = "/";
   }
</script>
<header>
    <div class="logo">
        <Logo/>
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