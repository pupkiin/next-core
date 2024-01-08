import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type UiButtonVariants = "primary" | "secondary" | "additional";
export type UiButtonProps = {
  variant: UiButtonVariants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UiButton({ className, variant, ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "px-18px py-9px font-medium transition ease-in-out duration-150 rounded-12px",
        {
          primary:
            "text-white bg-violet-500 hover:bg-violet-600 disabled:bg-violet-300 shadow shadow-violet-500/30",
          secondary:
            "text-white bg-rose-500 hover:bg-rose-600 disabled:bg-rose-300 shadow shadow-rose-500/30",
          additional:
            "text-white bg-green-600 hover:bg-green-700 disabled:bg-green-300 shadow shadow-green-500/30",
        }[variant],
      )}
    />
  );
}
