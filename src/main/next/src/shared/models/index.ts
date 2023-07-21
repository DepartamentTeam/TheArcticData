import { ReactNode } from "react"
import { UseFormRegister } from "react-hook-form"

export interface propsSidebarItem {
  title: string
  icon: ReactNode
  path: string
}

export interface propsButon {
  title: string
  link: string
  isDisabled?: boolean
  variant: "containded" | "outlined" | "text"
  color: "primary" | "secondary"
}

export interface LoginFormData {
  username: string
  password: string
}

export interface UserData {
  name: string
}

export interface propsInput {
  label: string
  id: string
  register: UseFormRegister<LoginFormData>
  error: any
  isRequired: boolean
  icon?: ReactNode | string
  placeholder?: string
  type: React.HTMLInputTypeAttribute
}

export interface propsChip {
  text: string
  icon: ReactNode
}
