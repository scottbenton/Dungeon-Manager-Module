import { useCurrentUser } from "auth_ui/useCurrentUser";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

export interface AuthBlockerProps {
  requireAuth?: boolean;
}

export function AuthBlocker(props: PropsWithChildren<AuthBlockerProps>) {
  const { requireAuth, children } = props;

  const { user, loading } = useCurrentUser();

  const navigate = useNavigate();

  if (loading) {
    return null;
  }

  if (!loading && !user && requireAuth) {
    navigate("/dungeon-manager");
    return null;
  }

  return <>{children}</>;
}
