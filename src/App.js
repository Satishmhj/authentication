import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import CreateRole from "./components/Dashboard/Role/CreateRole";
import RoleList from "./components/Dashboard/Role/RoleList";
import CreateScreen from "./components/Dashboard/Screen/CreateScreen";
import ScreenList from "./components/Dashboard/Screen/ScreenList";
import UserForm from "./components/Dashboard/User/UserForm";
import UserList from "./components/Dashboard/User/UserList";
import LoginForm from "./components/Login/LoginForm";
import AddProducts from "./components/Products/AddProducts";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/addProducts" element={<AddProducts />} />
          {/* <Route path="addProduct" element={<AddProducts />} />
          </Route> */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="user/create" index element={<UserForm />}></Route>
            <Route path="user/list" element={<UserList />}></Route>
            <Route path="role/create" element={<CreateRole />}></Route>
            <Route path="role/list" element={<RoleList />}></Route>
            <Route path="screen/create" element={<CreateScreen />}></Route>
            <Route path="screen/list" element={<ScreenList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
