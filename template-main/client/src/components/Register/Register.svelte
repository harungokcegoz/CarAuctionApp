<script>

import { tokenStore, userStore } from "../store";
    let username = "";
    let password = "";
    let e = "";
    
   

async function register(){
    const data = { username, password }
    console.log(data);
    try {
        const res = await fetch("http://localhost:3000/users/register", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method : "POST",
            body: JSON.stringify(data)
    })
    if (res.ok) {
       const response =  await fetch("http://localhost:3000/users/login", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method : "POST",
            body: JSON.stringify(data)
         })
         const retrievedData = await response.json()
            const token = retrievedData.accessToken
            tokenStore.set(token)
            userStore.set(retrievedData.user)
            location.href = '/home'
    } else{
        if(res.status == 400){
            e = "This username is already taken. Please try again!"
        }
    }
} catch (error) {
        //TODO
        //if the username is already taken it sends the message but i couldnt to print on frontend
        console.log(error)
    }
   
}






</script>
<body>
    <div class="container">
        <header>Registration</header>
        <form id="form" on:submit|preventDefault={register}>
            <div class="form-first">
                <div class="details personal">
                    <span class="title">Personal Details</span>
        
                    <div class="fields">
                        <div class="input-field">
                            <label>Username</label>
                            <input type="text" placeholder="Enter your username" bind:value={username} required>
                        </div>

                        <div class="input-field">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" bind:value={password} required>
                        </div>   
                        <div class="input-field">
                            <label style="color: red;">{e}</label>
                        </div>
                    </div>
                   
                </div>
                
            </div>
            <div class="buttonGroup">
                <button type="submit">Register</button>
            </div>
        </form>
     
    </div>
</body>



<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body{
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
    margin: 5em auto;
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
    min-height: 300px;
    background-color: #fff;
    overflow: hidden;
   
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
    width: 600px;
}
form .fields .input-field{
    margin: 4px 1em;
}
.input-field label{
    display: block;
    font-size: 12px;
    font-weight: 500;
    color: #2e2e2e;
}
.input-field input{
    outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    border-radius: 5px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;
    width: 100%;
}
.form-first{
    display: block;
}

.buttonGroup{
    text-align: center;
    margin: 2em auto;
}
button{
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
button:hover{
	background-color:#256D85;
    color: #DFF6FF;
}
button:active{
    position:relative;
	top:1px;
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