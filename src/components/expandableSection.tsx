"use client";

import {
  Card,
  DialogContent,
  DialogTitle,
  Icon,
  Typography,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ExpandableSection(props: {
  title: string;
  children: React.ReactNode;
}) {
  const { title, children } = props;
  const [isExpanded, setIsExpanded] = useState(true);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  return (
    <Card className={`flex flex-col sm:w-[30%] ${!isExpanded ? "h-fit" : ""}`}>
      <div className="flex items-center border-b pb-5" onClick={toggleExpanded}>
        <Icon fontSize="large">
          {isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </Icon>
        <Typography variant="titleFont" className="flex text-xl pt-5">
          {title}
        </Typography>
      </div>
      {isExpanded && <div className="p-2.5">{children}</div>}
    </Card>
  );
}
