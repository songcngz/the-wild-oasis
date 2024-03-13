import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const SignupLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 68rem;
  align-content: center;
  justify-content: center;
  gap: 1.7rem;
  background-color: var(--color-grey-50);
`;

function Signup() {
  return (
    <SignupLayout>
      <Logo />
      <Heading as="h4" >Create your account</Heading>
      <Heading as="h5">
        Do you have an account already?{" "}
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={"/login"}
        >
          Login
        </Button>
      </Heading>
      <SignupForm/>
    </SignupLayout>
  );
}

export default Signup;
