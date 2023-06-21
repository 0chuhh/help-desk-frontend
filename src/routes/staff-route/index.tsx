import React, { FC, PropsWithChildren } from "react";
import useStaffStatus from "hooks/useStaffStatus";
import { Navigate } from "react-router";

const StaffRoute: FC<PropsWithChildren> = ({ children }) => {
  const isStaff = useStaffStatus();

  if (isStaff) return <>{children}</>;
  return <Navigate to="/404" replace />;
};

export default StaffRoute;

