import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface CheckboxProps {}

export const Checkbox = ({}: CheckboxProps) => {
  return (
    <RadixCheckbox.Root className="w-6 h-6 p-0.5 bg-grey-800 rounded">
      <RadixCheckbox.Indicator>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};
