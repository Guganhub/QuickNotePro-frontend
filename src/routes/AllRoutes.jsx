import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotesPage from "../pages/NotesPage";
import PrivateRoutes from "./PrivateRoutes";

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/notes" element={<PrivateRoutes><NotesPage/></PrivateRoutes>}/>
    </Routes>
}