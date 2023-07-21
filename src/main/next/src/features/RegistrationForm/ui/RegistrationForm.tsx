"use client"
import { LoginFormData } from "@/shared/models"
import { InputComponent } from "@/shared/ui/InputComponent"
//import { signIn } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { UseFormRegister, useForm } from "react-hook-form"

export const RegistrationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>()
  const router = useRouter()
  const handleAuth = (data) => {
    //const res = await signIn("credentials", {
    //  login: data.login,
    //  password: data.password,
    //  redirect: false
  //  })
   
   data.password && data.login  === "admin" ? router.push("/dashboard") :  console.log("error")
  }

  return (
    <div className="login-form">
      <form className="form">
        <h3 className="form-title">Новый пользователь</h3>
        <InputComponent
          placeholder=""
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          }
          label="Имя "
          register={register}
          isRequired
          id="login"
          error={errors.login?.message}
        />
        <InputComponent
          type="email"
          placeholder=""
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
             
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                clipRule="evenodd"
              />
            </svg>
          }
          label="E-mail"
          register={register}
          isRequired
          id="e-mail"
          error={errors.login?.message}
        />
      <InputComponent
          type="password"
          placeholder=""
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
             
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                clipRule="evenodd"
              />
            </svg>
          }
          label="Пароль"
          register={register}
          isRequired
          id="password"
          error={errors.login?.message}
        />
        <InputComponent
          type="password"
          placeholder=""
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
             
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                clipRule="evenodd"
              />
            </svg>
          }
          label="Повторите пароль"
          register={register}
          isRequired
          id="password"
          error={errors.login?.message}
        />
        <div className="form-buttons">
          <button type="submit" className="btn btn--primary">
          Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  )
}

