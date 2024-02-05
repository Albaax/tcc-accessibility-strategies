import type { Meta } from '@storybook/react'

import { Tab } from './Tab'

export default {
  title: 'Inaccessible/Tab',
  component: Tab,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Tab>

export const Default = () => <Tab />