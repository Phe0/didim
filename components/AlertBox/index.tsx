import { PropsWithChildren } from "react";
import { FaCircleXmark, FaTriangleExclamation } from "react-icons/fa6";

namespace AlertBox {
  export type Props = {
    type?: "error" | "warning";
  };
}

export function AlertBox({
  type = "error",
  children,
}: PropsWithChildren<AlertBox.Props>) {
  return (
    <div
      className={`
        w-full border-2 font-bold p-2 rounded-md flex gap-2 items-center
        ${type === "error" ? "border-red-800 bg-red-100 text-red-800" : ""}
        ${
          type === "warning"
            ? "border-yellow-700 bg-yellow-100 text-yellow-700"
            : ""
        }
      `}
    >
      {type === "error" && <FaCircleXmark />}
      {type === "warning" && <FaTriangleExclamation />}
      {children}
    </div>
  );
}
