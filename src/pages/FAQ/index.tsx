import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FAQsTabs from "./FAQsTabs";
import useStaffStatus from "hooks/useStaffStatus";

const FAQ = () => {
  const isStaff = useStaffStatus();

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <Typography align="center" variant="h3">
        База знаний
      </Typography>
      {isStaff && (
        <Link to={"/create-frequently-asked-questions"}>
          <Button variant="contained">Создать</Button>
        </Link>
      )}
      <FAQsTabs />
    </div>
  );
};

export default FAQ;
