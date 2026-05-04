import IconButton from "@mui/material/IconButton";
import SvgIconLocal from "../resume/svgIconLocal";
import { ICONS } from "@/src/types/types";

export default function GithubButton() {
  return (
    <a
      href="https://github.com/ilyabelegradek/personal-website"
      target="_blank"
    >
      <IconButton size="large" edge="start" color="inherit" aria-label="github">
        <SvgIconLocal
          id={ICONS.GITHUB}
          fill="currentColor"
          width={35}
          height={35}
        />
      </IconButton>
    </a>
  );
}
