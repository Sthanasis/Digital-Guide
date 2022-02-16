import { mount } from '@vue/test-utils';
import ButtonVue from './Button.vue';
import { describe, it, expect } from 'vitest';

describe('Button Component', () => {
  it('renders a button with title "click me"', () => {
    const wrapper = mount(ButtonVue, {
      props: { title: 'click me', clicked: () => {} },
    });
    expect(wrapper.text()).toContain('click me');
  });
  it('passes a click event and triggers it', async () => {
    const wrapper = mount(ButtonVue);

    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('clicked');
  });
  it('passes a paragraph element slot', () => {
    const wrapper = mount(ButtonVue, {
      slots: {
        children: '<p>Test</p>',
      },
    });

    expect(wrapper.html()).toContain('<p>Test</p>');
  });
});
