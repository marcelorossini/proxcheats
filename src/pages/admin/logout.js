/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRouter } from "next/router";

import { logout } from "../../services/auth";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    logout();
    router.replace("/");
  }, []);

  return <></>;
};

export default Logout;
