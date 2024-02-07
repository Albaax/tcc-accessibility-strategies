import type { Meta } from '@storybook/react'

import { AccessibleTab as AccTab, InaccessibleTab as InaccTab } from './Tab'

export default {
  title: 'Cases/Tab',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export const AccessibleTab = () => <AccTab />

export const InaccessibleTab = () => <InaccTab />
