import "./index.css";
import ForgetPass from "./components/PassWord/ForgetPass";
import Login from "./components/Register/Login";
import Tongquan from "./components/Admin/Tongquan";
import Thongke from "./components/Admin/thongke";
import Lichlam from "./components/Admin/lichlam";
import Nhansu from "./components/Admin/nhansu";
// import QuanLy from "./components/Admin/quanlynhansu";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Demo from "./components/Admin/demo"
import Chitiet from "./components/Admin/chitiet";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Tongquan />} />
        <Route path="/chitiet" element={<Chitiet />} />
        {/* <Route path="/quanly" element={<QuanLy />} /> */}
        <Route path="/demo" element={<Demo />} />
        <Route path="/lich" element={<Lichlam />} />
        <Route path="/nhansu" element={<Nhansu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/thongke" element={<Thongke />} />
        <Route path="/forget-pass" element={<ForgetPass />} />
      </Routes>
    </>
  );
}

export default App;
