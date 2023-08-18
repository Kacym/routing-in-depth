import SideBar from "./components/side-bar/SideBar";
import styled from "styled-components";
import AppRouters from "./routers/AppRouters";


function App() {
  return (
    <StyledApp>
      <SideBar/>
      <AppRouters/>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
`

export default App;
