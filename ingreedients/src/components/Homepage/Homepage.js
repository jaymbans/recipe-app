import { HomepageContainer } from "../../StyledComponents";
import NavigationBar from "../NavigationBar";
import WelcomePage from "./WelcomePage";
import WelcomeBackPage from "./WelcomeBackPage";
import useLocalStorage from '../../useLocalStorage'

function Homepage({ userName, setUserName, setFirstVisit, firstVisit }) {

  return (
    <>
      <NavigationBar />
      <HomepageContainer>
        {firstVisit ?
          <WelcomePage setUserName={setUserName} setShowHomepagePopup={setFirstVisit} userName={userName} />
          :
          <WelcomeBackPage userName={userName} firstVisit={firstVisit} />
        }
      </HomepageContainer>
    </>
  )
}

export default Homepage;



