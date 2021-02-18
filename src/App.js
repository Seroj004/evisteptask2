import './App.css';
import Header from "./components/header/header";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/footer/footer";
import Settings from "./components/settings/settings";
import Glxavor from "./components/glxavor/glxavor";


function App() {
  return ( <BrowserRouter>
    <div className="App">

     <Header/>

      <main>

          <Route exact path="/Գlխավոր" render={() =>   <Glxavor/>} />
          <Route path="/Զարդեր" render={() => <Settings/>} />






          <Route path="/" render={() => <Redirect to="/Գlխավոր" />} />


      </main>

      <Footer/>





    </div>
      </BrowserRouter>
  );
}

export default App;
