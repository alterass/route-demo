import { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          marginBottom: 40,
          padding: 20,
          borderBottom: "1px solid #f0f0f0",
          display: "flex",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <button onClick={() => navigate("/")}>home</button>
        <button onClick={() => navigate("/other")}>other</button>
      </div>

      <div>
        {/* 这里相当于vue的router-view */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
