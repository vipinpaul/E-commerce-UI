import "./style.css";
import MenuBar from "./components/MenuBar/MenuBar.jsx";
import LeftContent from "./components/LeftContent/LeftContent.jsx";
import RightContent from "./components/RightContent/RightContent.jsx";
import StoreContextProvider from "./components/context/StoreContextProvider.jsx";
function App() {
  return (
    <div className="main-block">
      <StoreContextProvider>
        <MenuBar />
        <hr />
        <div className="content-page">
          <LeftContent />
          <RightContent />
        </div>
      </StoreContextProvider>
    </div>
  );
}

export default App;
