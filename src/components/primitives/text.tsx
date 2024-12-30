import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

export interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p"
  className?: string
  children?: React.ReactNode
  weight?: "regular" | "regular-leading-150" | "medium"
}

export interface TextProps
  extends HTMLAttributes<HTMLElement | HTMLSpanElement> {
  id?: string
  role?: string
  as?: "p" | "span"
  className?: string
  children?: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl" | "xxl"
  weight?: "regular" | "medium" | "semibold"
  ref?: React.Ref<HTMLParagraphElement | HTMLSpanElement>
}

export interface LabelProps {
  as?: "label" | "span" | "h2"
  className?: string
  children?: React.ReactNode
  htmlFor?: string
  size?: "small" | "large"
}

export interface ButtonLabelProps {
  as?: "span"
  className?: string
  children?: React.ReactNode
  variant?: "default" | "tertiary"
}

function HeadingXXL({
  as: Component = "h1",
  className,
  children,
  weight,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "text-40 leading-125 tracking-1 text-neutral-900 desktop:text-56",
        {
          "font-regular": weight === "regular",
          "font-medium": weight === "medium",
        },
        className,
      )}
    >
      {children}
    </Component>
  )
}

function HeadingXL({
  as: Component = "h2",
  className,
  children,
  weight,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "text-32 leading-125 tracking-1 text-neutral-900 desktop:text-48",
        {
          "font-regular": weight === "regular",
          "font-medium": weight === "medium",
        },
        className,
      )}
    >
      {children}
    </Component>
  )
}

function HeadingL({
  as: Component = "h3",
  className,
  children,
  weight,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "text-28 tracking-1 text-neutral-900 desktop:text-36",
        {
          "font-regular leading-125": weight === "regular",
          "font-medium leading-125": weight === "medium",
          "font-regular leading-150": weight === "regular-leading-150",
        },
        className,
      )}
    >
      {children}
    </Component>
  )
}

function HeadingM({
  as: Component = "h4",
  className,
  children,
  weight,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "text-20 tracking-1 text-neutral-900 desktop:text-24",
        {
          "font-regular leading-125": weight === "regular",
          "font-medium leading-125": weight === "medium",
          "font-regular leading-150 desktop:leading-125":
            weight === "regular-leading-150",
        },
        className,
      )}
    >
      {children}
    </Component>
  )
}

function HeadingS({
  as: Component = "h5",
  className,
  children,
  weight,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "text-18 leading-125 tracking-1 text-neutral-900 desktop:text-20",
        {
          "font-regular": weight === "regular",
          "font-medium": weight === "medium",
        },
        className,
      )}
    >
      {children}
    </Component>
  )
}

function Paragraph({
  as: Component = "p",
  className,
  children,
  size = "md",
  weight = "regular",
}: TextProps) {
  return (
    <Component
      className={cn(
        {
          "text-20 desktop:text-24": size === "xxl",
          "text-18 desktop:text-20": size === "xl",
          "text-16 desktop:text-18": size === "lg",
          "text-14 desktop:text-16": size === "md",
          "text-12 desktop:text-14": size === "sm",
          "font-regular": weight === "regular",
          "font-medium": weight === "medium",
          "font-semibold": weight === "semibold",
        },
        "leading-150 text-neutral-700",
        className,
      )}
    >
      {children}
    </Component>
  )
}

function Label({
  as: Component = "span",
  className,
  children,
  size,
  htmlFor,
}: LabelProps) {
  return (
    <Component
      className={cn(
        {
          "text-14": size === "small",
          "text-16": size === "large",
        },
        "font-semibold uppercase leading-150 tracking-5",
        className,
      )}
      htmlFor={htmlFor}
    >
      {children}
    </Component>
  )
}

function ButtonLabel({
  as: Component = "span",
  className,
  children,
  variant,
}: ButtonLabelProps) {
  return (
    <Component
      className={cn(
        {
          underline: variant === "tertiary",
        },
        "font-medium uppercase leading-125 tracking-5",
        className,
      )}
    >
      {children}
    </Component>
  )
}
const text = {
  HeadingXXL,
  HeadingXL,
  HeadingL,
  HeadingM,
  HeadingS,
  Paragraph,
  Label,
  ButtonLabel,
}
export default text
