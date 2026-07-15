import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login(){

    const navigate = useNavigate();

    const [form,setForm]=useState({

        username:"",
        password:""

    });

    function handleChange(e){

        setForm({

            ...form,

            [e.target.name]:e.target.value

        })

    }

    async function handleSubmit(e){

        e.preventDefault();

        try{

            const res = await API.post("/users/login/",form);

            localStorage.setItem("username",res.data.username);

            alert("Login Successful");

            navigate("/");

        }

        catch{

            alert("Invalid Credentials");

        }

    }

    return(

        <div style={{padding:"50px"}}>

            <h1>Login</h1>

            <br/>

            <form onSubmit={handleSubmit}>

                <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                />

                <br/><br/>

                <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                />

                <br/><br/>

                <button>

                    Login

                </button>

            </form>

        </div>

    )

}

export default Login;