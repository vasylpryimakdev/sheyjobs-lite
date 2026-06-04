import { Badge } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../apis/users";

function DefaultLayout({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const [collapsed, setCollapsed] = React.useState(false);
  const [menuToRender, setMenuToRender] = React.useState([]);
  const navigate = useNavigate();
  const userMenu = [
    {
      title: "Home",
      onClick: () => navigate("/"),
      icon: <i class="ri-home-7-line"></i>,
      path: "/",
    },
    {
      title: "Applied Jobs",
      onClick: () => navigate("/applied-jobs"),
      icon: <i class="ri-file-list-3-line"></i>,
      path: "/applied-jobs",
    },
    {
      title: "Posted Jobs",
      onClick: () => navigate("/posted-jobs"),
      icon: <i class="ri-file-list-2-line"></i>,
      path: "/posted-jobs",
    },
    {
      title: "Profile",
      onClick: () => navigate(`/profile/${user.id}`),
      icon: <i class="ri-user-2-line"></i>,
      path: "/profile",
    },
    {
      title: "Logout",
      onClick: () => {
        localStorage.removeItem("user");
        navigate("/login");
      },
      icon: <i class="ri-logout-box-r-line"></i>,
      path: "/login",
    },
  ];

  const adminMenu = [
    {
      title: "Home",
      onClick: () => navigate("/"),
      icon: <i class="ri-home-7-line"></i>,
      path: "/",
    },

    {
      title: "Jobs",
      onClick: () => navigate("/admin/jobs"),
      icon: <i class="ri-file-list-2-line"></i>,
      path: "/admin/jobs",
    },
    {
      title: "Users",
      onClick: () => navigate("/admin/users"),
      icon: <i class="ri-user-2-line"></i>,
      path: "/admin/users",
    },
    {
      title: "Logout",
      onClick: () => {
        localStorage.removeItem("user");
        navigate("/login");
      },
      icon: <i class="ri-logout-box-r-line"></i>,
      path: "/login",
    },
  ];

  const getData = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("user")).id;
      const response = await getUserProfile(userId);

      if (response.data?.isAdmin === true) {
        setMenuToRender(adminMenu);
      } else {
        setMenuToRender(userMenu);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="layout">
      <div className="sidebar justify-content-between flex">
        <div
          className="menu"
          style={{
            width: collapsed ? "40px" : "150px",
          }}
        >
          {menuToRender.map((item, index) => {
            const isActive = window.location.pathname === item.path;
            return (
              <div
                className={`menu-item ${isActive && "active-menu-item"}`}
                onClick={item.onClick}
                key={index}
              >
                {item.icon}
                {!collapsed && <span>{item.title}</span>}
              </div>
            );
          })}
        </div>
      </div>
      <div className="content">
        <div className="header justify-content-between d-flex">
          <div className="d-flex items-center gap-2">
            {collapsed && (
              <i
                class="ri-menu-2-fill"
                onClick={() => setCollapsed(!collapsed)}
              ></i>
            )}
            {!collapsed && (
              <i
                class="ri-close-line"
                onClick={() => setCollapsed(!collapsed)}
              ></i>
            )}
            <span className="logo">SHEYJOBS-LITE</span>
          </div>
          <div className="d-flex gap-1 align-items-center">
            <Badge className="mx-5" onClick={() => navigate("/notifications")}>
              <i class="ri-notification-line"></i>
            </Badge>

            <span>{user?.name}</span>
            <i class="ri-shield-user-line"></i>
          </div>
        </div>
        <div className="body">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
