import { HomepageContainer } from "../../StyledComponents";
import NavigationBar from "../NavigationBar";
import WelcomePage from "./WelcomePage";

function Homepage() {
  return (
    <>
      <NavigationBar />
      <HomepageContainer>
        <WelcomePage />
      </HomepageContainer>
    </>
  )
}

export default Homepage;



