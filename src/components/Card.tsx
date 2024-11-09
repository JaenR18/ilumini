import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Stack,
  Typography,
  Chip,
  Rating,
  Switch,
  Box,
} from "@mui/material";

export const CardComponent = () => {
  const[active, setActive] = useState(false);

  // Cambia el estado cuando el switch es activado/desactivado
  const handleToggle = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      <Card>
        <CardMedia
          component="img"
          alt="Yosemite National Park"
          image='../assets/image/logo.png'
        />
        <Stack direction="row" alignItems="center" spacing={3} p={2} useFlexGap>
          <Stack direction="column" spacing={0.5} useFlexGap>
            <Typography>Yosemite National Park, California, USA</Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <Chip
                size="small"
                label={active ? "Active" : "Inactive"}
                color={active ? "success" : "default"}
              />
              <Rating defaultValue={4} size="small" />
            </Stack>
          </Stack>
          <Switch checked={active} onChange={handleToggle} />
        </Stack>
      </Card>
    </>
  );
};