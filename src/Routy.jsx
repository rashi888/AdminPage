import React from 'react';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Products from "./pages/products";
import Profile from './pages/profile';
import Logout from './pages/logout';
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Employees from './pages/Employees';
import ViewSellers from './pages/Dropdowns/view_sellers';
import AddSellers from './pages/Dropdowns/add_sellers';
import Statistics from './pages/NoDropdown/statistics';
import CompanyDetails from './pages/NoDropdown/companyDetails';
import ManageMaster from './pages/NoDropdown/manageMaster';
import BusinessHistory from './pages/NoDropdown/businessHistory';
import Reports from './pages/NoDropdown/reports';
import ProfilesApproval from './pages/NoDropdown/profilesApproval';
import Billing from './pages/NoDropdown/billing';



function App() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="users">
                            <Route index element={<List />} />
                            <Route path=":userId" element={<Single />} />
                            <Route
                                path="new"
                                element={<New inputs={userInputs} title="Add New User" />}
                            />
                        </Route>
                        <Route path="employees">
                            <Route index element={<Employees />} />
                        </Route>
                        <Route path="products">
                            <Route index element={<Products />} />
                            {/* <Route path="login" element={<Login />} /> */}
                            {/* <Route index element={<List />} /> */}
                            {/* <Route path=":productId" element={<Single />} /> */}
                            <Route
                                path="new"
                                element={<New inputs={productInputs} title="Add New Product" />}
                            />
                        </Route>
                        <Route path="addSellers"><Route index element={<AddSellers />} /></Route>
                        <Route path="businessHistory"><Route index element={<BusinessHistory />} /></Route>
                        <Route path="reports"><Route index element={<Reports />} /></Route>
                        <Route path="manageMaster"><Route index element={<ManageMaster />} /></Route>
                        <Route path="profilesApproval"><Route index element={<ProfilesApproval />} /></Route>
                        <Route path="billing"><Route index element={<Billing />} /></Route>
                        <Route path="statistics"><Route index element={<Statistics />} /></Route>
                        <Route path="companyDetails"><Route index element={<CompanyDetails />} /></Route>
                        <Route path="ViewSellers"><Route index element={<ViewSellers />} /></Route>
                        <Route path="profile"><Route index element={<Profile />} /></Route>
                        <Route path="logout"><Route index element={<Logout />} /></Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
