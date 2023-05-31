import { Meta, Story } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';

export default {
  title: 'Components/Dropdown',
  component: DropdownComponent,
  parameters: {
    docs: {
      autodocs: true, // Opt-in to autodocs
      description: {
        component: 'This is a dropdown component', // Component description
      },
    },
  },
} as Meta;

// Primary Story
export const Primary: Story<DropdownComponent> = (args) => ({
  component: DropdownComponent,
  props: args,
  parameters: {
    docs: {
      story: { inline: true }, // Render the story in an iframe
      canvas: { sourceState: 'shown' }, // Start with the source open
      source: { type: 'code' }, // Forces the raw source code
    },
  },
});

Primary.args = {
  // Define the default arguments here
  options: ['Item 1', 'Item 2', 'Item 3'],
};

// Add JSDoc for story descriptions
/**
 * This is a primary dropdown story.
 */
Primary.storyName = 'Primary';
