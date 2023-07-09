import { Suspense, useState } from "react"
import { Routes, Route } from "react-router-dom"

import { PageLogin } from "./Login"
import { PageMap } from "./Map"

export const RouterProvider = () => {
	const [__, setPassword] = useState("")

	const isAuthenticated = window.localStorage.getItem("auth") === "true"

	return (
		<Routes>
			<Route path="/" element={<PageLogin props={setPassword} />} />
			<Route path="/login" element={<PageLogin props={setPassword} />} />
			<Route
				path="/map"
				element={
					isAuthenticated ? (
						<Suspense>
							<PageMap />
						</Suspense>
					) : (
						<PageLogin props={setPassword} />
					)
				}
			/>{" "}
		</Routes>
	)
}
