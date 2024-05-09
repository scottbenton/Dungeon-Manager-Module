import { PropsWithChildren } from "react";

export function Container(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className={"max-w-screen-md mx-auto flex flex-col"}>{children}</div>
  );
}
