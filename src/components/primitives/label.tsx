"use client"

import * as React from "react"
import {
  Label as AriaLabel,
  LabelProps as AriaLabelProps,
} from "react-aria-components"
import Text from "./text"

import { cn } from "@/lib/utils"

export interface LabelProps extends AriaLabelProps {
  optional?: boolean
}

function Label({ className, optional = false, ...props }: LabelProps) {
  return (
    <AriaLabel
      data-slot="label"
      className={cn("flex items-center", className)}
      {...props}
    >
      <span data-slot="label-text" className="flex gap-x-4 items-center">
        {props.children}
        {optional && (
          <Text.Paragraph as="span" size="sm" weight="medium">
            (optional)
          </Text.Paragraph>
        )}
      </span>
    </AriaLabel>
  )
}

export { Label }
