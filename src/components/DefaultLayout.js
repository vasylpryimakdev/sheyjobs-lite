import { Badge } from "antd";

function DefaultLayout({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="layout">
      <div className="sidebar justify-content-between flex">
        <span className="logo">SHEYJOBS - LITE</span>
      </div>
      <div className="content">
        <div className="header justify-content-between d-flex">
          <span className="logo">SHEYJOBS-LITE</span>

          <div className="d-flex gap-1 align-items-center">
            <Badge className="mx-5">
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
