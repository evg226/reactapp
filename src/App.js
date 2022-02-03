// import logo from './logo.svg';
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./AppRouter";
import {AppNavbar} from "./components/AppNavbar";
import {Container} from "react-bootstrap";
import {Footer} from "./components/Footer";
import { shallowEqual, useSelector} from "react-redux";
import {getAlert} from "./AppStore/selectors";
import {AlertShow} from "./components/AlertShow";

export const  App=()=> {
    const alert=useSelector(getAlert,shallowEqual);
  return (
      <BrowserRouter>
          <div className={"app"}>
              <AppNavbar />
              {alert.visible&&<AlertShow />}
              <div className={"app__content"}>
                  <Container>
                      <AppRouter />
                  </Container>
              </div>
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;
