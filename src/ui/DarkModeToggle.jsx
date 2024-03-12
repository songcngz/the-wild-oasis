import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { UseDarkMode } from "../contexts/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = UseDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
