import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function GithubButton() {
  return (
    <a
      href="https://github.com/ilyabelegradek/personal-website"
      target="_blank"
    >
      <IconButton size="large" edge="start" color="inherit" aria-label="github">
        <GitHubIcon fontSize="large" />
      </IconButton>
    </a>
  );
}
