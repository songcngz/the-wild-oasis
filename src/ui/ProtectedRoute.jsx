import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate} from "react-router-dom";

const FullPageSpinner = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
   
  const navigate = useNavigate();

  //   1.Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 3. If there is NO authenticated user, redirect to the "/login" page
  useEffect(() => {
    if (!isAuthenticated && !isLoading ) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 2. While loadConfigFromFile, show a spinner
  if (isLoading)
    return (
      <FullPageSpinner>
        <Spinner />
      </FullPageSpinner>
    );

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
