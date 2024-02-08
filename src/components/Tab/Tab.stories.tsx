import type { Meta } from '@storybook/react'

import { AccessibleTab, InaccessibleTab } from './Tab'

export default {
  title: 'Cases/Tab',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export const Accessible = () => <AccessibleTab />

export const Inaccessible = () => <InaccessibleTab />
