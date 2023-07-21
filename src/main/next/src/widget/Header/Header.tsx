

import Link from "next/link"
import { Button } from "@/shared/ui/Button/Button"

const Header = () => {
  
  return (
    <header className="sc-header">
      <Link href="/" className="sc-header__logo">
        Департамент
    </Link>
    <Button  link="/account/sign-in" title="Войти" variant="primary"/>
    </header>
  )
}

export default Header
