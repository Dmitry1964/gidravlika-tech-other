import { HeaderContacts } from "src/features/header-contacts";
import "./header.module.scss";
import { Navbar } from "src/features/navbar";
import useViewportWidth from "src/hooks/useViewportWidth";
import { TABLET_VIEWPORT } from "src/shared/lib/constans";

const Header = (): React.ReactNode => {
  const screenWidth = useViewportWidth()
  return (
    <header>
      <HeaderContacts />
      {screenWidth >= TABLET_VIEWPORT && <Navbar />}
    </header>
  );
};

export default Header;
