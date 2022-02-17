import { mount } from '@vue/test-utils';
import ButtonVue from './Button.vue';
import { describe, it, expect } from 'vitest';

describe('Button Component', () => {
  it('Renders a button with title "click me"', () => {
    const wrapper = mount(ButtonVue, {
      props: { title: 'click me', clicked: () => {} },
    });
    expect(wrapper.text()).toContain('click me');
  });

  it('Passes a click event and triggers it', async () => {
    const wrapper = mount(ButtonVue);

    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('clicked');
  });

  it('Gets a danger class based on btnType prop', () => {
    const wrapper = mount(ButtonVue, {
      props: {
        btnType: 'danger',
      },
    });
    expect(wrapper.get('button').classes().includes('danger')).toBe(true);
  });

  it('Passes a paragraph element slot', () => {
    const wrapper = mount(ButtonVue, {
      slots: {
        default: '<p>Test</p>',
      },
    });

    expect(wrapper.html()).toContain('<p>Test</p>');
  });
});
