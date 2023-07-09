export function handleCheckPassword(password: string) {
	return password === import.meta.env.VITE_SECRET_PASS
}
