import { HomepageContainer } from "../../StyledComponents";
import NavigationBar from "../NavigationBar";
import WelcomePage from "./WelcomePage";
import WelcomeBackPage from "./WelcomeBackPage";

function Homepage({ userName }) {
  return (
    <>
      <NavigationBar />
      <HomepageContainer>
        {/* <WelcomePage /> */}
        <WelcomeBackPage />
      </HomepageContainer>
    </>
  )
}

export default Homepage;



