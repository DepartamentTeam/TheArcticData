"use client"
import { LoginFormData } from "@/shared/models"
import { InputComponent } from "@/shared/ui/InputComponent"
//import { signIn } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { UseFormRegister, useForm } from "react-hook-form"

export const RestoreForm = () => {
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
        <h3 className="form-title">Восстановить доступ</h3>
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
      
        <div className="form-buttons">
          <button type="submit" className="btn btn--primary">
            Сбросить пароль
          </button>
        </div>
      </form>
    </div>
  )
}

