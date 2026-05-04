import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavList from "./navList";
import NavSettings from "./navSettings";

export default function NavBar() {
  return (
    <AppBar
      position="sticky"
      className="text-center"
      enableColorOnDark
      sx={{ backgroundImage: "none", top: 0 }}
    >
      <Toolbar className="flex justify-between w-full">
        <NavList />
        <div className="sm:flex-1" />
        <NavSettings />
      </Toolbar>
    </AppBar>
  );
}
