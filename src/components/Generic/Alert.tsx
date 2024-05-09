import clsx from "clsx";
import { PropsWithChildren } from "react";

type AlertType = "success" | "error" | "warning" | "info";
export interface AlertProps {
  type: AlertType;
  className?: string;
}

function getAlertStyle(type: AlertType) {
  switch (type) {
    case "success":
      return "bg-green-100 text-green-800 border-green-500";
    case "error":
      return "bg-red-100 text-red-800 border-red-500";
    case "warning":
      return "bg-yellow-100 text-yellow-800 border-yellow-500";
    case "info":
      return "bg-blue-100 text-blue-800 border-blue-500";
  }
}

function getAlertTypeLabel(type: AlertType) {
  switch (type) {
    case "success":
      return "Success";
    case "error":
      return "Error";
    case "warning":
      return "Warning";
    case "info":
      return "Info";
  }
}

export function Alert(props: PropsWithChildren<AlertProps>) {
  const { type, className, children } = props;
  return (
    <div
      className={clsx(className, "p-2 border rounded-sm", getAlertStyle(type))}
    >
      <p className={"font-bold text-lg"}>{getAlertTypeLabel(type)}</p>
      <p>{children}</p>
    </div>
  );
}
