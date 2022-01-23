import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../stores/AuthStore";

export function VerifyToken(props: any) {
  const navigate = useNavigate();
  const authStore = useContext(authContext);
  useEffect(() => {
    authStore.verifyToken().catch(() => {
      navigate("/login");
    });
  }, [authStore, navigate]);
  return <></>;
}
