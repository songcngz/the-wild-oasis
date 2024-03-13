import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <Heading as="h5">
        Don&apos;t have an account yet?{" "}
        <Button size="small" variation="danger" as={Link} to={"/signup"}>
          Signup
        </Button>
      </Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
