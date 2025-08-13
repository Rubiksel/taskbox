import type { Meta, StoryObj } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';

import { Store, NgxsModule } from '@ngxs/store';
import { TaskState } from '../state/task.state';

import { moduleMetadata, applicationConfig } from '@storybook/angular';

import { fireEvent, within } from '@storybook/test';

import { CommonModule } from '@angular/common';

import PureInboxScreenComponent from './pure-inbox-screen.component';

import { TaskModule } from './task.module';

const meta: Meta<PureInboxScreenComponent> = {
  component: PureInboxScreenComponent,
  title: 'PureInboxScreen',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TaskModule],
    }),
    applicationConfig({
      providers: [Store, importProvidersFrom(NgxsModule.forRoot([TaskState]))],
    }),
  ],
};

export default meta;
type Story = StoryObj<PureInboxScreenComponent>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const WithInteractions: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
  },
};
