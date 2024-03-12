import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);
  padding: 1.2rem 4.8rem;

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2.4rem;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
