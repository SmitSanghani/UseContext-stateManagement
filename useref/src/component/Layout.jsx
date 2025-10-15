import Sidebar from "./Sidebar";

export const Layout = (Component) => {
  const Newcomponent = () => {
    return (
      <>
        <div className="container-layout">
          <Sidebar />
          <div className="content-body">
            <Component />
          </div>
        </div>
      </>
    );
  };
  return Newcomponent;
};
