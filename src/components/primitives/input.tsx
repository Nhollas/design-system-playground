import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Input as AriaInput,
  InputProps as AriaInputProps,
} from "react-aria-components"

export interface InputProps extends AriaInputProps {
  isSuccess?: boolean
  isError?: boolean
}

export function Input({ className, isSuccess, isError, ...props }: InputProps) {
  return (
    <AriaInput
      data-slot="control"
      data-success={isSuccess}
      data-error={isError}
      className={cn(
        "block w-full rounded-8 p-12 border border-neutral-200 text-16 leading-150 hover:border-neutral-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-neutral-200 focus-within:border-neutral-200 has-active:border-neutral-900 data-success:border-success-600 data-success:focus-within:ring-success-200 data-success:focus-within:border-success-500 data-success:pl-12 data-success:has-active:border-success-600 data-success:hover:border-success-600 data-error:border-error-600 data-error:focus-within:ring-error-200 data-error:focus-within:border-error-500 data-error:has-active:border-error-600 data-error:hover:border-error-600 data-disabled:pointer-events-none data-disabled:bg-neutral-50 data-disabled:text-neutral-700",
        className,
      )}
      {...props}
    />
  )
}
