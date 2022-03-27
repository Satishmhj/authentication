import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import AddProducts from "./components/Dashboard/Products/AddProducts";
import Products from "./components/Dashboard/Products/Products";
import CreateRole from "./components/Dashboard/Role/CreateRole";
import Privilege from "./components/Dashboard/Role/Privilege";
import RoleList from "./components/Dashboard/Role/RoleList";
import CreateScreen from "./components/Dashboard/Screen/CreateScreen";
import ScreenList from "./components/Dashboard/Screen/ScreenList";
import UserForm from "./components/Dashboard/User/UserForm";
import UserList from "./components/Dashboard/User/UserList";
import UserRoleMapping from "./components/Dashboard/User/UserRoleMapping";
import LoginForm from "./components/Login/LoginForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="user/create" index element={<UserForm />}></Route>
            <Route path="user/list" element={<UserList />}></Route>
            <Route
              path="user/userRoleMapping"
              element={<UserRoleMapping />}
            ></Route>
            <Route path="role/create" element={<CreateRole />}></Route>
            <Route path="role/privilege" element={<Privilege />}></Route>
            <Route path="role/list" element={<RoleList />}></Route>
            <Route path="screen/create" element={<CreateScreen />}></Route>
            <Route path="screen/list" element={<ScreenList />}></Route>
            <Route path="products/add" element={<AddProducts />}></Route>
            <Route path="products/list" element={<Products />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
