import {
  HomepageOverlay,
  WelcomePageContainer,
  WelcomePagePopup,
  BeigeInput,
  primaryGray,
  GreenButton
} from "../../StyledComponents"


function WelcomePage() {
  return (
    <>
      <HomepageOverlay>
      </HomepageOverlay>
      <WelcomePageContainer>
        <WelcomePagePopup>
          <h3 >Welcome to InGreedients</h3>
          <h3>Get Greedy for Recipes!</h3>
          <h2 style={{ margin: '15px 0', fontStyle: 'italic' }}>Enter your name!</h2>
          <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <BeigeInput label='Name Required' placeholder="Enter your name" variant="outlined" autoFocus={true} />
            <GreenButton variant="contained">Enter</GreenButton>
          </form>
        </WelcomePagePopup>
      </WelcomePageContainer>
    </>

  )
}

export default WelcomePage