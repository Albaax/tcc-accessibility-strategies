import type { Meta } from '@storybook/react'

import { AcessibleImage, InacessibleImage } from './Image'

export default {
  title: 'Cases/Image',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Image>

export const Acessible = () => <AcessibleImage />

export const Inacessible = () => <InacessibleImage />
