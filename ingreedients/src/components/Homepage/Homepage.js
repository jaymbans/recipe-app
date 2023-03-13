import { HomepageContainer } from "../../StyledComponents";
import NavigationBar from "../NavigationBar";
import WelcomePage from "./WelcomePage";
import WelcomeBackPage from "./WelcomeBackPage";

function Homepage({ userName, setUserName, setFirstVisit, firstVisit }) {
  return (
    <>
      <NavigationBar />
      <HomepageContainer>
        {firstVisit ?
          <WelcomePage setUserName={setUserName} setShowHomepagePopup={setFirstVisit} />
          :
          <WelcomeBackPage userName={userName} firstVisit={firstVisit} />
        }
      </HomepageContainer>
    </>
  )
}

export default Homepage;



