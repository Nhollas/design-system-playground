import { ColourSwatch } from "./colour-swatch"
import Text from "../primitives/text"

const colourPalettes = {
  neutral: {
    title: "Neutral",
    description:
      "The base colours are used for non stylised elements within the kit, this can be things such as the background colour or basic card fills.",
    colors: [
      { name: "neutral-0", class: "bg-neutral-0" },
      { name: "neutral-50", class: "bg-neutral-50" },
      { name: "neutral-100", class: "bg-neutral-100" },
      { name: "neutral-200", class: "bg-neutral-200" },
      { name: "neutral-300", class: "bg-neutral-300" },
      { name: "neutral-400", class: "bg-neutral-400" },
      { name: "neutral-500", class: "bg-neutral-500" },
      { name: "neutral-600", class: "bg-neutral-600" },
      { name: "neutral-700", class: "bg-neutral-700" },
      { name: "neutral-800", class: "bg-neutral-800" },
      { name: "neutral-850", class: "bg-neutral-850" },
      { name: "neutral-900", class: "bg-neutral-900" },
    ],
  },
  secondary: {
    title: "Secondary",
    description:
      "Actions are applied to any item you can interact with and click on. Its a simple way to unify states across buttons and other CTAs.",
    colors: [
      { name: "secondary-50", class: "bg-secondary-50" },
      { name: "secondary-100", class: "bg-secondary-100" },
      { name: "secondary-200", class: "bg-secondary-200" },
      { name: "secondary-300", class: "bg-secondary-300" },
      { name: "secondary-400", class: "bg-secondary-400" },
      { name: "secondary-500", class: "bg-secondary-500" },
      { name: "secondary-600", class: "bg-secondary-600" },
      { name: "secondary-700", class: "bg-secondary-700" },
      { name: "secondary-800", class: "bg-secondary-800" },
    ],
  },
  primary: {
    title: "Primary",
    description:
      "Actions are applied to any item you can interact with and click on. Its a simple way to unify states across buttons and other CTAs.",
    colors: [
      { name: "primary-50", class: "bg-primary-50" },
      { name: "primary-100", class: "bg-primary-100" },
      { name: "primary-200", class: "bg-primary-200" },
      { name: "primary-300", class: "bg-primary-300" },
      { name: "primary-400", class: "bg-primary-400" },
      { name: "primary-500", class: "bg-primary-500" },
      { name: "primary-600", class: "bg-primary-600" },
      { name: "primary-700", class: "bg-primary-700" },
      { name: "primary-800", class: "bg-primary-800" },
    ],
  },
  success: {
    title: "Success",
    description:
      "Success as its name indicates demonstrates success or a confirmation of actions. Success can be see in badges, toggles, messages, and illustrations.",
    colors: [
      { name: "success-50", class: "bg-success-50" },
      { name: "success-100", class: "bg-success-100" },
      { name: "success-200", class: "bg-success-200" },
      { name: "success-300", class: "bg-success-300" },
      { name: "success-400", class: "bg-success-400" },
      { name: "success-500", class: "bg-success-500" },
      { name: "success-600", class: "bg-success-600" },
      { name: "success-700", class: "bg-success-700" },
      { name: "success-800", class: "bg-success-800" },
      { name: "success-900", class: "bg-success-900" },
    ],
  },
  error: {
    title: "Error",
    description:
      "Error is used for backgrounds in messages and in states to draw attention to important information or actions that are destructive or block workflow.",
    colors: [
      { name: "error-50", class: "bg-error-50" },
      { name: "error-100", class: "bg-error-100" },
      { name: "error-200", class: "bg-error-200" },
      { name: "error-300", class: "bg-error-300" },
      { name: "error-400", class: "bg-error-400" },
      { name: "error-500", class: "bg-error-500" },
      { name: "error-600", class: "bg-error-600" },
      { name: "error-700", class: "bg-error-700" },
      { name: "error-800", class: "bg-error-800" },
      { name: "error-900", class: "bg-error-900" },
    ],
  },
}

export function ColourPalette() {
  return (
    <section className="flex gap-32 desktop:gap-40 flex-col">
      {Object.entries(colourPalettes).map(([key, palette]) => (
        <div key={key} className="flex flex-col gap-y-12">
          <Text.HeadingM>{palette.title}</Text.HeadingM>
          <Text.Paragraph>{palette.description}</Text.Paragraph>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-12 desktop:gap-20">
            {palette.colors.map((color) => (
              <ColourSwatch
                key={color.name}
                name={color.name}
                colorClass={color.class}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
