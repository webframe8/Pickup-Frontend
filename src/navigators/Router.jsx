import { Route, Routes } from "react-router"

import HomePage from "../pages/Home/HomePage"

import GeneralLayout from "../layouts/GeneralLayout"

export default function Router() {
    return (
        <>
        <Routes>
            <Route element={<GeneralLayout />}>
                <Route path="/" element={<HomePage />} />
            </Route>
        </Routes>
        </>
    )
}