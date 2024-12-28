"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Text from "./primitives/text"

function shapePathname(pathname: string): string {
  // Handle root path
  if (pathname === "/") return "Home"

  // Remove leading and trailing slashes and split by dashes
  const cleanPath = pathname.replace(/^\/+|\/+$/g, "").split("-")

  // Capitalize first letter of each word and join with space
  return cleanPath
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}

export default function Navigation() {
  const pathname = usePathname()
  const formattedPath = shapePathname(pathname)

  return (
    <nav className="bg-neutral-0 rounded-t-12 p-40 tablet:p-64 space-y-32 flex flex-col desktop:flex-row justify-between items-start">
      <section className="space-y-16">
        <Text.Paragraph size="xl">Design System Playground</Text.Paragraph>
        <Text.HeadingL weight="medium">{formattedPath}</Text.HeadingL>
      </section>
      <ul className="flex flex-wrap gap-40 gap-y-16 **:[li]:underline col-span-1 desktop:col-span-2">
        <li>
          <Link
            href="/typography"
            className="text-neutral-700 hover:text-neutral-900"
          >
            Typography
          </Link>
        </li>
        <li>
          <Link
            href="/colours"
            className="text-neutral-700 hover:text-neutral-900"
          >
            Colours
          </Link>
        </li>
        <li>
          <Link
            href="/input"
            className="text-neutral-700 hover:text-neutral-900"
          >
            Input
          </Link>
        </li>
        <li>
          <Link
            href="/select"
            className="text-neutral-700 hover:text-neutral-900"
          >
            Select
          </Link>
        </li>
        <li>
          <Link
            href="/autocomplete-input"
            className="text-neutral-700 hover:text-neutral-900"
          >
            Autocomplete Input
          </Link>
        </li>
      </ul>
    </nav>
  )
}
