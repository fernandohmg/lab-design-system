import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface InputRootProps {
  children: ReactNode;
}

const Root = ({ children }: InputRootProps) => {
  return (
    <div className="flex items-center gap-3 h-12 px-4 py-3 rounded bg-grey-800 w-full focus-within:ring-2 ring-cyan-300 ">
      {children}
    </div>
  );
};

Root.displayName = "TextInput.Root";

export interface InputIconProps {
  children: ReactNode;
}

const Icon = ({ children }: InputIconProps) => {
  return <Slot className="w-6 h-6 text-grey-400">{children}</Slot>;
};

Icon.displayName = "TextInput.Icon";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      className={clsx(
        "bg-transparent flex-1 text-grey-100 text-xs placeholder:text-grey-400 outline-none"
      )}
      {...props}
    />
  );
};

Input.displayName = "TextInput.Input";

export const TextInput = {
  Root: Root,
  Icon: Icon,
  Input: Input,
};
