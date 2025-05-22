"use client";

import React, { useState, useRef, useEffect } from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeToggleButton from "./ThemeToggleButton";
import { IconButton, Popover, Box } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const DraggableFloatingMenu: React.FC = () => {
  // lưu vị trí bằng bottom, right
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const draggingRef = useRef(false);
  const draggedRef = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const onMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    draggingRef.current = true;
    draggedRef.current = false;

    // Tính offset dựa trên tọa độ client và vị trí hiện tại
    offset.current = {
      x: e.clientX - position.left,
      y: e.clientY - position.top,
    };
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (draggingRef.current) {
        draggedRef.current = true;

        // Tính tọa độ right và bottom mới dựa trên vị trí chuột
        let newLeft = e.clientX - offset.current.x;
        let newTop = e.clientY - offset.current.y;

        // Giới hạn trong viewport (button size 60x60)
        const minTop = 0;
        const minLeft = 0;
        const maxTop = window.innerHeight - 60;
        const maxLeft = window.innerWidth - 60;

        if (newTop < minTop) newTop = minTop;
        if (newTop > maxTop) newTop = maxTop;
        if (newLeft < minLeft) newLeft = minLeft;
        if (newLeft > maxLeft) newLeft = maxLeft;

        setPosition({ top: newTop, left: newLeft });
      }
    };

    const onMouseUp = () => {
      draggingRef.current = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (draggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <Box>
      <IconButton
        aria-label="Settings"
        onClick={handleClick}
        onMouseDown={onMouseDown}
        className="z-1250"
        style={{ top: position.top, left: position.left }}
        sx={{ borderRadius: "50%", width: 60, height: 60, position: "fixed", color: "black", ".dark &": {color: "white"}  }}
      >
        <SettingsIcon sx={{ fontSize: 30 }} />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        sx={{
          "& .MuiPaper-root": { ".dark &": { backgroundColor: "#242533" } },
        }}
      >
        <Box className="p-4 flex flex-col gap-4 dark:bg-[#242533]">
          <LocaleSwitcher />
          <ThemeToggleButton />
        </Box>
      </Popover>
    </Box>
  );
};

export default DraggableFloatingMenu;
