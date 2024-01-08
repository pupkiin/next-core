import clsx from "clsx";
import { InputHTMLAttributes, PropsWithRef, useId } from "react";

export type UiTextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export function UiTextField({
  className,
  error,
  label,
  inputProps,
}: UiTextFieldProps) {
  const id = useId();

  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && <label className="block" htmlFor={id}></label>}
      <input
        {...inputProps}
        id={id}
        className={clsx(
          inputProps?.className,
          "rounded-12px border border-grayBorder hover:border-violet-300 py-9px px-18px transition ease-in-out duration-150",
        )}
      />
      {/*  под ошибки */}
      {error && <div className="text-rose-400 text-13px">{error}</div>}
    </div>
  );
}
