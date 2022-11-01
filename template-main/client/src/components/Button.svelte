<script>
    export let name, href;
</script>


<button class="button" on:click={() => location.href = href}>{name}</button>



<style>
 .button{
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
.button:hover{
	background-color:#256D85;
}
.button:active{
    position:relative;
	top:1px;
}

</style>


