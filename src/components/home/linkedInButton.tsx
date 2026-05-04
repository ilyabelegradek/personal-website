import IconButton from "@mui/material/IconButton";
import SvgIconLocal from "../resume/svgIconLocal";
import { ICONS } from "@/src/types/types";

export default function LinkedInButton() {
  return (
    <a href="https://www.linkedin.com/in/ilya-belegradek/" target="_blank">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="linkedIn"
      >
        <SvgIconLocal
          id={ICONS.LINKEDIN}
          fill="currentColor"
          width={35}
          height={35}
        />
      </IconButton>
    </a>
  );
}
