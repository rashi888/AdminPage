import "./sidebar.scss";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="" style={{ textDecoration: "none" }}>
          <img
            src="images/logo/brandLogo.png"
            alt="icon"
            className="logo_main"
          />
          <span className="logo">Linnseed</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-dashboard-fill"></i>
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">User Details</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-phone-fill"></i>
              <span>Mobile Users</span>
            </li>
          </Link>

          <Link to="/employees" class="btn-group" style={{ textDecoration: "none" }} data-bs-toggle="dropdown">
            <li>
              <i class="ri-user-line"></i>
              <span>Sellers</span>
              <i class="ri-arrow-drop-right-line"></i>
              <ul style={{ fontSize: 13 }} class="dropdown-menu">
                <Link to="/ViewSellers"> <li> <span>View Seller</span> </li></Link>
                <li> <span>Add Seller</span> </li>
              </ul>
            </li>
          </Link>


          <Link class="btn-group" to="/orders" style={{ textDecoration: "none" }} data-bs-toggle="dropdown">
            <li>
              <i class="ri-file-user-fill"></i>
              <span>Buyers</span>
              <i class="ri-arrow-drop-right-line"></i>
              <ul style={{ fontSize: 13 }} class="dropdown-menu">
                <li>View Buyer</li>
                <li>Add Buyer</li>
              </ul>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link to="/profilesApproval" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-profile-line"></i>
              <span>Profiles Approval</span>
            </li>
          </Link>
          <Link class="btn-group" to="/orders" style={{ textDecoration: "none" }} data-bs-toggle="dropdown">
            <li>
              <i class="ri-phone-fill"></i>
              <span>Enquiry</span>
              <i class="ri-arrow-drop-right-line"></i>
              <ul style={{ fontSize: 13 }} class="dropdown-menu">
                <li>View seller</li>
                <li>Add seller</li>
              </ul>
            </li>
          </Link>

          <Link to="/delivery" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-book-read-fill"></i>
              <span>Business Deals</span>
            </li>
          </Link>
          <Link to="/businessHistory" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-book-2-fill"></i>
              <span>Business History</span>
            </li>
          </Link>

          <Link to="/billing" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-bill-line"></i>
              <span>Billing</span>
            </li>
          </Link>
          <Link to="/reports" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-file-chart-fill"></i>
              <span>Reports</span>
            </li>
          </Link>

          <Link to="/manageMaster" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-user-6-fill"></i>
              <span>Manage Masters</span>
            </li>
          </Link>
          <Link to="/companyDetails" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-booklet-line"></i>
              <span>Company Detail</span>
            </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to="/logs" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-profile-line"></i>
              <span>Front</span>
            </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-file-fill"></i>
              <span>Blog</span>
            </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-video-line"></i>
              <span>Video</span>
            </li>
          </Link>

          <Link to="/statistics" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-bar-chart-fill"></i>
              <span>Statistics</span>
            </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-notification-4-fill"></i>
              <span>Offer</span>
            </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-todo-fill"></i>
              <span>Cotton Bales Spot Price</span>
            </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-map-pin-user-line"></i>
              <span>Yarn Spot Price</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-user-smile-line"></i>
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/logout" style={{ textDecoration: "none" }}>
            <li>
              <i class="ri-logout-box-r-line"></i>
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>


      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
