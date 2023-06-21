import React, { FC, PropsWithChildren } from "react";
import Card, { CardTypeMap, CardProps } from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button, { ButtonProps } from "@mui/material/Button";
import { Link } from "react-router-dom";

export interface CardButton extends ButtonProps {
  label: string;
  link?: string;
}

interface CustomCardProps extends PropsWithChildren, CardProps {
  label?: string;
  button?: CardButton;
  fullWidth?: boolean;
}

const CustomCard: FC<CustomCardProps> = ({
  label,
  button,
  fullWidth = false,
  children,
  ...restProps
}) => {
  return (
    <Card {...restProps}>
      <CardContent>{children}</CardContent>
      {button && (
        <CardActions>
          {button.link ? (
            <Link to={button.link}>
              <Button {...button}>{button.label}</Button>
            </Link>
          ) : (
            <Button {...button}>{button.label}</Button>
          )}
        </CardActions>
      )}
    </Card>
  );
};

export default CustomCard;
