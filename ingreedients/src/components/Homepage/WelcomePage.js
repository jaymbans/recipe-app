import {
  HomepageOverlay,
  WelcomePageContainer,
  WelcomePagePopup,
  BeigeInput,
  primaryGray,
  GreenButton
} from "../../StyledComponents"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WelcomePage({ setUserName, setShowHomepagePopup }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('user-name-input');

    if (!nameInput.value) {
      toast.error('Your name cannot be blank!');
      toast.error('Please enter a name!');
      return;
    }

    setUserName(nameInput.value);
    setShowHomepagePopup(false);
  }

  return (
    <>
      <HomepageOverlay>
      </HomepageOverlay>
      <WelcomePageContainer>
        <WelcomePagePopup>
          <ToastContainer />
          <h3 >Welcome to InGreedients</h3>
          <h3>Get Greedy for Recipes!</h3>
          <h2 style={{ margin: '15px 0', fontStyle: 'italic' }}>Enter your name!</h2>
          <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onSubmit={handleSubmit}>
            <BeigeInput label='Name Required' placeholder="Enter your name" variant="outlined" id='user-name-input' autoFocus={true} />
            <GreenButton type="submit" variant="contained">Enter</GreenButton>
          </form>
        </WelcomePagePopup>
      </WelcomePageContainer>
    </>

  )
}

export default WelcomePage