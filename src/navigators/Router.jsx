import { Route, Routes } from "react-router"

import HomePage from "../pages/Home/HomePage"
import LoginPage from "../pages/auth/Loginpage"

import GeneralLayout from "../layouts/GeneralLayout"
import AuthLayout from "../layouts/AuthLayout"

export default function Router() {
    return (
        <>
        <Routes>
            <Route element={<GeneralLayout />}>
                <Route path="/" element={<HomePage />} />
            </Route>

            <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            </Route>
        </Routes>
        </>
    )
}