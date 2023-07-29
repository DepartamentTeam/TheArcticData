"use client"
import { LoginFormData } from "@/shared/models"
import { InputComponent } from "@/shared/ui/InputComponent"
import ky from "ky"
import { ChangeEvent, useState } from "react"
import { useForm } from "react-hook-form"
 
import { useRouter } from 'next/navigation'


const LoginForm = () => {

   const [responseError, setResponseError] = useState(false)
   const router = useRouter()

  const handleSubmit = (e: MouseEvent) => {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");
    const loginErrorMsg = document.getElementById("login-error-msg");
    e.preventDefault();
    const username = loginForm?.username.value;
    const password = loginForm?.password.value;
  
     if (username === "admin" && password === "arctic-admin" ) {
      router.push("/dashboard")
    }
    fetch("/login", {
        method: 'post',
        body: JSON.stringify({
                  username: username,
                  password: password
                }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        if (res.status === 201) {
            console.log("Post successfully created!")
        }
    }).catch((error) => {
        console.log(error)
    })
   
}
 
  
  return (
    <div className="login-form">
      <form
        id="login-form"
        className="form"
        method="post"
        action="/login"
        onSubmit={handleSubmit}
      >
        <h3 className="form-title">Войти в систему</h3>

        
        <div>
      <div className="input-field">
        
      
        <label className="body-1">
        Логин
        <input
          aria-label="username"
          name="username"
          type="text"
          placeholder="Полярный медведь"
          autoSave="true"
          required
          autoComplete="true"
        />
        </label>
      </div>
     
    </div>
    <div>
      <div className="input-field">
        
      
        <label className="body-1">
        Пароль
        <input
          autoSave="true"
          aria-label="password"
          name="password"
          type="text"
          placeholder="Супер-Секретный-Пароль"
          autoComplete="true"
          required
        />
        </label>
      </div>
     
    </div>
       
        <div className="form-buttons">
        
            <button  type="submit" className="btn btn--primary">
              Войти
            </button>
        

         
        </div>
      </form>
    </div>
  )
}

export default LoginForm
