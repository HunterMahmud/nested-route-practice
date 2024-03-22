import { Outlet, useNavigation } from "react-router-dom";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import { InfinitySpin } from "react-loader-spinner";

const Home = () => {
  const navigate = useNavigation();
  return (
    <div>
      <Header />
      {navigate.state === "loading" ? (
      <div className="flex justify-center items-center h-screen">
        <InfinitySpin
          visible={true}
          width="200"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default Home;
