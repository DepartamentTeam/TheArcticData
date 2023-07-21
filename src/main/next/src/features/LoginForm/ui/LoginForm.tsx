"use client"
import { LoginFormData } from "@/shared/models"
import { InputComponent } from "@/shared/ui/InputComponent"
import ky from "ky"
import { useState } from "react"
import { useForm } from "react-hook-form"


const LoginForm = () => {

  const {
    register,
    formState: { errors,},
    handleSubmit,
  } = useForm<LoginFormData>()
 
  const [responseError, setResponseError] = useState(false)

  async function handleAuth(data : LoginFormData) {
   const res = await ky.post("/login", 
    {
      headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json'},
      body: data
    }
    )
    if (res.status !== 200) {
      setResponseError(true)
      console.error(res.status, res.body)
    }

   
    
    
    }

  return (
    <div className="login-form">
      <form className="form" action="/login" method="post" onSubmit={handleSubmit(handleAuth)}>
        <h3 className="form-title">Войти в систему</h3>
        <InputComponent
          placeholder=""  
          label="Логин"
          register={register}
          isRequired
          id="username"
          error={errors.username?.message}
        />
        <InputComponent
          type="password"
          placeholder=""
          label="Пароль"
          register={register}
          isRequired
          id="password"
          error={errors.password?.message}
        />

        <div className="form-buttons">
          {!responseError && <button  type="submit"  className="btn btn--primary">
            Войти
          </button>}

          {responseError && <button type="submit" className="btn btn--primary btn--error">
            Не удалось войти
          </button> 
          }
         
        </div>
      </form>
    </div>
  )
}

export default LoginForm
