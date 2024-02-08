import type { Meta } from '@storybook/react'

import { AccessibleStructure, InaccessibleStructure } from './Structure'

export default {
  title: 'Cases/Structure',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export const Accessible = () => <AccessibleStructure />

export const Inaccessible = () => <InaccessibleStructure />
