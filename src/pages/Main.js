import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup,StyledFormButton } from "../components/Styles";

//logo
import Logo from './../assets/favicon.ico'



const Main = () => {
    return(
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display:"flex",
                justifyContent:"flex-start"
            }}>
                <Avatar image={Logo} />              
            </div>
            <StyledTitle size={65}>
               Welcome to Fithub - HealthiFy
            </StyledTitle>
            <StyledSubTitle size={27}>
               Feel free to explore our page
            </StyledSubTitle>

            <ButtonGroup>
               <StyledButton to="/login">Login</StyledButton>
               <StyledButton to="/signup">SignUp</StyledButton>
            </ButtonGroup>   
        </div>
    );
};

export default Main;