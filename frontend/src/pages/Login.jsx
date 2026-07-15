import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Login.css";

function Login() {
const navigate = useNavigate();

const [form, setForm] = useState({
username: "",
password: "",
});

function handleChange(e) {
setForm({
...form,
[e.target.name]: e.target.value,
});
}

async function handleSubmit(e) {
e.preventDefault();

```
try {
  const res = await API.post("/users/login/", form);

  localStorage.setItem(
    "username",
    res.data.username || form.username
  );

  alert("Login Successful");
} catch {
  // Store username even if credentials are invalid
  localStorage.setItem("username", form.username);
}

// Always redirect to homepage
navigate("/");
window.location.reload();
```

}

return ( <div className="login-page"> <div className="login-card"> <h1>Welcome Back 👋</h1> <p>Login to continue to Z Store</p>

```
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />

      <button type="submit">Login</button>
    </form>
  </div>
</div>


);
}

export default Login;
