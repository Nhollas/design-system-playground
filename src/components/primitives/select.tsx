"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/lib/utils"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { IconSlot } from "./icon-slot"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
  isSuccess?: boolean
  isError?: boolean
}) => (
  <SelectPrimitive.Trigger
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
  </SelectPrimitive.Trigger>
)

const SelectScrollUpButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) => (
  <SelectPrimitive.ScrollUpButton
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className,
    )}
    {...props}
  >
    <IconSlot>
      <ChevronUpIcon />
    </IconSlot>
  </SelectPrimitive.ScrollUpButton>
)

const SelectScrollDownButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) => {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn(
        "flex cursor-default items-center justify-center py-4",
        className,
      )}
      {...props}
    >
      <IconSlot>
        <ChevronDownIcon />
      </IconSlot>
    </SelectPrimitive.ScrollDownButton>
  )
}

const SelectContent = ({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn(
        "relative z-50 max-h-256 min-w-[8rem] overflow-hidden rounded-8 border border-neutral-200 bg-neutral-0 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-8 data-[side=left]:-translate-x-8 data-[side=right]:translate-x-8 data-[side=top]:-translate-y-8",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-4",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
)

const SelectItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) => (
  <SelectPrimitive.Item
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-8 p-8 text-16 outline-none focus:bg-neutral-50 data-[state=checked]:text-neutral-900 focus:text-neutral-900 text-neutral-700 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute right-12 flex items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <IconSlot>
          <CheckIcon />
        </IconSlot>
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
)

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
