import type { Meta } from '@storybook/react'

import { AcessibleImage as AccImg, InacessibleImage as InaccImg } from './Image'

export default {
  title: 'Cases/Image',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Image>

export const AcessibleImage = () => <AccImg />

export const InacessibleImage = () => <InaccImg />
