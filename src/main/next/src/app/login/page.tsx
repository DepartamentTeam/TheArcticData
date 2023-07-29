
import dynamic from "next/dynamic"

const  LoginFormComponent = dynamic(() => import("@/features/LoginForm/ui/LoginForm"), {
  ssr: false
});
export default function LoginPage() {
  return (
    <main className="pg-login">
     
      <LoginFormComponent />
      
    </main>
  )
}
