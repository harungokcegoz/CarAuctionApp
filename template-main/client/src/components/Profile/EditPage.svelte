<script>
 
    import {tokenStore } from "../store.js"
  import Profile from "./Profile.svelte";
   
    export let id;
    let page = "edit";
    
    
    export let carMake, carModel, year, mileage, startDate, saleDate, gearbox, fueltype, bodytype, estValue, condition, location, image;
     
    async function submit(){
     
        const data = { carMake, carModel, year, mileage, startDate, saleDate, gearbox, fueltype, bodytype, estValue, condition, location, image }
        try {
            const res = await fetch("http://localhost:3000/lotteries/edit/" +id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method : "PATCH",
                body: JSON.stringify(data)
        })
        if (res.status >= 200 && res.status <= 299) {
            alert("The car is edited successfully!")
           page = "profile";
        } else{
            alert("Something went wrong")
        }
        } catch (error) {
            console.log(error)
        }  
    }
    
    
    </script>
    
    {#if ([undefined, null, ''].includes($tokenStore))}
        <div class="banner">
            <h1>You need to login firstly!</h1>
        </div>
    {:else}
    {#if page == "edit"}
    <body>  
        <div class="container">
            <header>Edit the Lottery</header>
        
            <form on:submit|preventDefault={submit}>
                <div class="form first">
                
                    <div class="details-car">
                        <span class="title">Car Details</span>
        
                        <div class="fields">
                            <div class="input-field">
                                <label>Car Make</label>
                                <input type="text" placeholder="Enter Car Make" required bind:value={carMake}>
                            </div>
        
                            <div class="input-field">
                                <label>Car Model</label>
                                <input type="text" placeholder="Enter Car Model" required bind:value={carModel}>
                            </div>
        
                            <div class="input-field">
                                <label>Year</label>
                                <input type="number" min="1800" max="2023" placeholder="Enter build year" required bind:value={year}>
                            </div>
        
                            <div class="input-field">
                                <label>Mileage</label>
                                <input type="number"  min="0" placeholder="Enter mileage of the car" required bind:value={mileage}>
                            </div>
        
                            <div class="input-field">
                                <label>Auction Start Date</label>
                                <input type="text" placeholder="Enter your start date" required bind:value={startDate}>
                            </div>
        
                            <div class="input-field">
                                <label>Sale Date</label>
                                <input type="text" placeholder="Enter sale date" required bind:value={saleDate}>
                            </div>
                            <div class="input-field">
                                <label>Gearbox</label>
                                <select required bind:value={gearbox}>
                                    <option disabled selected>Select gearbox type</option>
                                    <option>Automatic</option>
                                    <option>Manual</option>
                                    <option>Semi-automatic</option>
                                </select>
                            </div>
        
                            <div class="input-field">
                                <label>Fueltype</label>
                                <select required bind:value={fueltype}>
                                    <option disabled selected>Select fuel type</option>
                                    <option>Gasoline</option>
                                    <option>Electric</option>
                                    <option>Diesel</option>
                                    <option>LPG</option>
                                </select>
                            </div>
        
                            <div class="input-field">
                                <label>Bodytype</label>
                                <select required bind:value={bodytype}>
                                    <option disabled selected>Select bodytype</option>
                                    <option>Sedan</option>
                                    <option>Cabrio</option>
                                    <option>Hatchback</option>
                                    <option>Coupe</option>
                                    <option>SUV</option>
                                    <option>Pick-up</option>
                                    <option>Minibus</option>
                                </select>
                            </div>
        
                            <div class="input-field">
                                <label>Estimated Value</label>
                                <input type="number"  min="0" placeholder="Enter estimated value" required bind:value={estValue}>
                            </div>
        
                            <div class="input-field">
                                <label>Condition</label>
                                <select required bind:value={condition}>
                                    <option disabled selected>Select condition</option>
                                    <option>Brand New</option>
                                    <option>Used</option>
                                    <option>Oldtimer</option>
                                </select>
                            </div>
        
                            <div class="input-field"> 
                                <label>Location</label>
                                <input type="text" placeholder="Enter location" required bind:value={location}>
                            </div>
        
                            <div class="input-field" style="width: 100%;">
                                <label>Image</label>
                                <input type="text" placeholder="Put the link of the image" required bind:value={image}>
                            </div>
                        </div>
        
                
                        <div class="buttons">
                            <button class="submitButton" type="submit">Submit</button>
                        </div>
                    </div> 
                </div>
            </form>
        </div>
    </body>
    {:else}
    <Profile/>
    {/if}
        
    {/if}
    
    <style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body{
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .container{
        position: relative;
        border: 1px solid rgba(0, 0, 0, 0.177);
        max-width: 1000px;
        width: 100%;
        border-radius: 6px;
        padding: 30px;
        margin: 2em 15px;
        background-color: #fff;
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    }
    .container header{
        position: relative;
        font-size: 20px;
        font-weight: 600;
        color: #333;
    }
    .container header::before{
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        height: 3px;
        width: 27px;
        border-radius: 8px;
        background-color: #4070f4;
    }
    .container form{
        position: relative;
        margin-top: 16px;
        min-height: 600px;
        background-color: #fff;
        overflow: hidden;
    }
    .container form .form{
        position: absolute;
        background-color: #fff;
        transition: 0.3s ease;
    }
    .container form .title{
        display: block;
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: 500;
        margin: 6px 0;
        color: #333;
    }
    .container form .fields{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    form .fields .input-field{
        display: flex;
        width: calc(100% / 3 - 15px);
        flex-direction: column;
        margin: 4px 0;
    }
    .input-field label{
        font-size: 12px;
        font-weight: 500;
        color: #2e2e2e;
    }
    .input-field input, select{
        outline: none;
        font-size: 14px;
        font-weight: 400;
        color: #333;
        border-radius: 5px;
        border: 1px solid #aaa;
        padding: 0 15px;
        height: 42px;
        margin: 8px 0;
    }
    .input-field input :focus,
    .input-field select:focus{
        box-shadow: 0 3px 6px rgba(0,0,0,0.13);
    }
    .input-field select,
    .input-field input[type="date"]{
        color: #707070;
    }
    .input-field input[type="date"]:valid{
        color: #333;
    }
    .container form button, .submitButton{
        background:    #DFF6FF;
		box-shadow: none;
        border-radius: 11px;
        width:         140px;
        height:        40px;
        color:         #040404;
        display:       inline-block;
        font:          normal bold 15px/30px "Calibri", sans-serif;
        text-align:    center;
        margin-top: 2em;
    }
    form button:hover{
        background-color:#256D85;
        color: #DFF6FF;
    }
    form button:active{
        position:relative;
        top:1px;
    }
    .buttons{
        text-align: center;
    }
    button{
      
    }
    button:hover{
     
    }
    button:active{
        
    }
    .banner{
        text-align: center;
        margin: 5em auto;
    }
    
    
    @media (max-width: 750px) {
        .container form{
            overflow-y: scroll;
        }
        .container form::-webkit-scrollbar{
           display: none;
        }
        form .fields .input-field{
            width: calc(100% / 2 - 15px);
        }
    }
    
    @media (max-width: 550px) {
        form .fields .input-field{
            width: 100%;
        }
    }
    
    </style>