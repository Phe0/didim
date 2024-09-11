import { PropsWithChildren } from "react";

namespace Button {
  export type Props = {
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    styleType?: "primary" | "secondary";
    onClick?: () => void;
  };
}

export function Button({
  type = "button",
  disabled = false,
  styleType = "primary",
  onClick,
  children,
}: PropsWithChildren<Button.Props>) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        hover:scale-105 transition-all
        font-bold p-2 rounded-md disabled:opacity-50 w-full
        ${styleType === "primary" ? "bg-black text-white" : ""}
        ${
          styleType === "secondary"
            ? "bg-white text-black border-2 border-black"
            : ""
        }
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
