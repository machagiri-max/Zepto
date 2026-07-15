import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Signup() {

    const navigate = useNavigate();

    const [form,setForm] = useState({

        username:"",
        email:"",
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

            await API.post("/users/signup/", form);

            alert("Account Created Successfully");

            navigate("/login");

        }

        catch(err){

            alert("Signup Failed");

            console.log(err);

        }

    }

    return(

        <div style={{padding:"50px"}}>

            <h1>Signup</h1>

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
                type="email"
                name="email"
                placeholder="Email"
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

                    Signup

                </button>

            </form>

        </div>

    )

}

export default Signup;