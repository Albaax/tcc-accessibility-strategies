import type { Meta } from '@storybook/react'
import { AccessibleForm, InaccessibleForm } from './Form'

export default {
  title: 'Cases/Form',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export const Accessible = () => <AccessibleForm />

export const Inaccessible = () => <InaccessibleForm />
