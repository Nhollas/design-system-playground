import { TypographyVariant } from "./typography-variant"
import Text from "@/components/primitives/text"
import { TypographyGroup } from "./typography-group"

export function TypographyDisplay() {
  return (
    <div className="flex flex-col gap-80">
      <TypographyGroup title="Headings">
        <TypographyVariant
          title="Heading XXL"
          subheading="Text size: 56px | Line height: 125% | Spacing: -1%"
        >
          <Text.HeadingXXL>Regular</Text.HeadingXXL>
          <Text.HeadingXXL weight="medium">Medium</Text.HeadingXXL>
        </TypographyVariant>
        <TypographyVariant
          title="Heading XL"
          subheading="Text size: 48px | Line height: 125% | Spacing: -1%"
        >
          <Text.HeadingXL>Regular</Text.HeadingXL>
          <Text.HeadingXL weight="medium">Medium</Text.HeadingXL>
        </TypographyVariant>
        <TypographyVariant
          title="Heading L"
          subheading="Text size: 36px | Line height: 125% | Spacing: -1%"
        >
          <Text.HeadingL>Regular</Text.HeadingL>
          <Text.HeadingL weight="regular-leading-150">
            Regular - 150%
          </Text.HeadingL>
          <Text.HeadingL weight="medium">Medium</Text.HeadingL>
        </TypographyVariant>
        <TypographyVariant
          title="Heading M"
          subheading="Text size: 24px | Line height: 125% | Spacing: -1%"
        >
          <Text.HeadingM>Regular</Text.HeadingM>
          <Text.HeadingM weight="medium">Medium</Text.HeadingM>
        </TypographyVariant>
        <TypographyVariant
          title="Heading S"
          subheading="Text size: 20px | Line height: 125% | Spacing: 0%"
        >
          <Text.HeadingS>Regular</Text.HeadingS>
          <Text.HeadingS weight="medium">Medium</Text.HeadingS>
        </TypographyVariant>
      </TypographyGroup>
      <TypographyGroup title="Paragraphs">
        <TypographyVariant
          title="Text XXL"
          subheading="Text size: 20px | Line height: 150% | Spacing: 0%"
        >
          <Text.Paragraph size="xxl">Regular</Text.Paragraph>
          <Text.Paragraph size="xxl" weight="medium">
            Medium
          </Text.Paragraph>
          <Text.Paragraph size="xxl" weight="semibold">
            Semibold
          </Text.Paragraph>
        </TypographyVariant>
        <TypographyVariant
          title="Text XL"
          subheading="Text size: 18px | Line height: 150% | Spacing: 0%"
        >
          <Text.Paragraph size="xl">Regular</Text.Paragraph>
          <Text.Paragraph size="xl" weight="medium">
            Medium
          </Text.Paragraph>
          <Text.Paragraph size="xl" weight="semibold">
            Semibold
          </Text.Paragraph>
        </TypographyVariant>
        <TypographyVariant
          title="Text L"
          subheading="Text size: 16px | Line height: 150% | Spacing: 0%"
        >
          <Text.Paragraph size="lg">Regular</Text.Paragraph>
          <Text.Paragraph size="lg" weight="medium">
            Medium
          </Text.Paragraph>
          <Text.Paragraph size="lg" weight="semibold">
            Semibold
          </Text.Paragraph>
        </TypographyVariant>
        <TypographyVariant
          title="Text M"
          subheading="Text size: 14px | Line height: 150% | Spacing: 0%"
        >
          <Text.Paragraph size="md">Regular</Text.Paragraph>
          <Text.Paragraph size="md" weight="medium">
            Medium
          </Text.Paragraph>
          <Text.Paragraph size="md" weight="semibold">
            Semibold
          </Text.Paragraph>
        </TypographyVariant>
        <TypographyVariant
          title="Text S"
          subheading="Text size: 12px | Line height: 150% | Spacing: 0%"
        >
          <Text.Paragraph size="sm">Regular</Text.Paragraph>
          <Text.Paragraph size="sm" weight="medium">
            Medium
          </Text.Paragraph>
          <Text.Paragraph size="sm" weight="semibold">
            Semibold
          </Text.Paragraph>
        </TypographyVariant>
      </TypographyGroup>
    </div>
  )
}
