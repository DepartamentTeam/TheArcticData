import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { handleCheckPassword } from "../../shared/auth"
import style from "./login.module.css"


export function PageLogin({ props }: { props: any }) {
	const [error, setError] = useState(false)
	const [passwordInput, setPasswordInput] = useState("")
	const [disabled, setDisabled] = useState(false)

	const maxAttempts = 5
	let attempt = 0

	const navigate = useNavigate()
	useEffect(() => {
		window.localStorage.getItem("auth") === "true" ? navigate("/map") : null
	}, [])
	const handleLogin = () => {
		attempt += 1
		const isPasswordCorrect = handleCheckPassword(passwordInput)
		if (!isPasswordCorrect) {
			setError(true)
		}
		if (isPasswordCorrect) {
			props(passwordInput)
			window.localStorage.setItem("auth", "true")
			navigate("/map")
		}
		if (attempt === maxAttempts) {
			setDisabled(true)
		}
	}
	const hendleChangePassword = (e: any) => {
		setPasswordInput(e.target.value)
	}
	return (
		<section className="layout">
		<div className={style.pgLogin}>
			<span className={style.content}></span>
			<div className={style.container}>
				<h2>Войти</h2>
			<input
				type="password"
				placeholder="Пароль"
				onChange={hendleChangePassword}
			/>
			<button disabled={disabled} onClick={handleLogin}>
				Войти
			</button>
			{!error ? (
				<></>
			) : (
				<label className="error">Пароль не подходит</label>
			)}
			{!disabled ? (
				<></>
			) : (
				<label className="error">Попробуйте пойзже</label>
			)}
			</div>
		</div>
		</section>
	)
}
