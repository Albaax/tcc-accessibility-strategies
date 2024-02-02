import type { Meta } from '@storybook/react'

import { Image } from './Image'

export default {
  title: 'Inaccessible/Image',
  component: Image,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Image>

export const Default = () => <Image />
