import clsx from "clsx";
import { PropsWithChildren, useId } from "react";
import { Link } from "react-router-dom";
import IconExample from "@heroicons/react/16/solid/PlusCircleIcon";
import { AnimatePresence, motion } from "framer-motion";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

export interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  href?: string;
  isPending?: boolean;
  Icon?: typeof IconExample;
  disabled?: boolean;
}

function getButtonVariantClass(variant: ButtonVariant) {
  switch (variant) {
    case "primary":
      return "bg-white text-primary-700 hover:bg-primary-700 hover:text-white disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed";
    case "secondary":
      return "bg-primary-200 text-primary-700 hover:bg-primary-300 disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed";
    case "tertiary":
      return "bg-transparent text-white hover:bg-primary-700 disabled:bg-transparent disabled:text-gray-300 disabled:cursor-not-allowed";
  }
}

export function Button(props: PropsWithChildren<ButtonProps>) {
  const {
    onClick,
    children,
    href,
    variant = "primary",
    className,
    isPending,
    disabled,
    Icon,
  } = props;

  const combinedClassName = clsx(
    "flex items-center uppercase text-xs font-bold tracking-wide px-4 py-2 rounded-full transition-colors duration-200 ease-in-out",
    getButtonVariantClass(variant),
    className
  );

  const id = useId();

  const buttonContents = (
    <>
      {children}
      <AnimatePresence>
        {(Icon || isPending) && (
          <motion.span
            key={`button-end-icon-${id}`}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            className={"ml-2 -mr-2"}
          >
            {Icon && !isPending && <Icon className={"w-4 h-4"} />}
            {isPending && (
              <div
                className={
                  "w-4 h-4 border-t animate-spin duration-500 rounded-full border-current"
                }
              />
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );

  if (href) {
    return (
      <Link to={href} className={combinedClassName}>
        {buttonContents}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled || isPending}
    >
      {buttonContents}
    </button>
  );
}
