import { Outlet, Navigate } from "react-router";
import '../assets/styles/pages/Auth.scss'
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export default function AuthLayout() {
    const { IsAuthenticated } = useContext(AuthContext)

    if (IsAuthenticated) {
        return <Navigate to="/" />;
    }
    return <Outlet />
}