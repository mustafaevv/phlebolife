import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import Header from "./Components/Header";
import Routers from "./router/Routers";

const CallButton = styled.button`
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: #97d7ee;
  border: none;
  font-size: 20px;
  color: linear-gradient(90deg, #052d81 0%, #00bcff 100%);
  cursor: pointer;
  z-index: 100;
  opacity: 0;

  @media (max-width: 992px) {
    opacity: 0.7;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routers />
          <CallButton>
            <FontAwesomeIcon icon={faPhone} />
          </CallButton>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
