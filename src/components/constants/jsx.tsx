import * as React from "react"

type FilterDefTypes = {
  matte?: Element
  key: string
  additionalDefs?: React.ReactNode
}

export const filterDefs = ({ matte, key, additionalDefs }: FilterDefTypes) => (
  <defs>
    <filter id="paintyFilterHeavy">
      <feGaussianBlur
        id="gaussblurrer"
        in="SourceGraphic"
        stdDeviation={4}
        colorInterpolationFilters="sRGB"
        result="blur"
      />
      <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 34 -7"
        result="gooey"
      />
    </filter>
    <filter id="paintyFilterLight">
      <feGaussianBlur
        id="gaussblurrer"
        in="SourceGraphic"
        stdDeviation={2}
        colorInterpolationFilters="sRGB"
        result="blur"
      />
      <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 34 -7"
        result="gooey"
      />
    </filter>
    <clipPath id={`matte-clip-${key}`}>{matte}</clipPath>
    {additionalDefs}
  </defs>
)
