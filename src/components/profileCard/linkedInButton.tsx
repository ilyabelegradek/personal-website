import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function LinkedInButton() {
  return (
    <a href="https://www.linkedin.com/in/ilya-belegradek/" target="_blank">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="linkedIn"
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
    </a>
  );
}
