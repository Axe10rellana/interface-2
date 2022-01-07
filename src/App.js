import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="grid">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
