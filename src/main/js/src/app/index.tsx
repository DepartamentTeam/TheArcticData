import { RouterProvider } from "../pages"
import {BrowserRouter} from "react-router-dom"
export function App() {
  return (
    <BrowserRouter>
      <RouterProvider />
    </BrowserRouter>
  )
}
