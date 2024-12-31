import * as React from "react"
import {
  Button,
  ButtonProps,
  Select as ReactAriaSelect,
  SelectValue as ReactAriaSelectValue,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const Select = ReactAriaSelect

const SelectValue = ReactAriaSelectValue

const SelectTrigger = ({ className, children, ...props }: ButtonProps) => (
  <Button
    data-slot="control"
    className={cn(
      "flex w-full items-center gap-x-12 whitespace-nowrap rounded-8 border border-neutral-200 bg-transparent p-12 text-16 shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neutral-200 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 active:border-neutral-900 hover:border-neutral-900",
      "data-error:border-error-500 data-error:focus:ring-error-200 data-error:focus:border-error-700  data-error:active:border-error-700 data-error:hover:border-error-700",
      "data-success:border-success-500 data-success:focus:ring-success-200 data-success:focus:border-success-700 data-success:active:border-success-700 data-success:hover:border-success-700",
      className,
    )}
    {...props}
  >
    {children}
  </Button>
)

export { Select, SelectValue, SelectTrigger }
