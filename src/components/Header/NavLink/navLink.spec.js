import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NavLink from './NavLink.vue';

describe('NavLink Component', () => {
  it('triggers navigate on click', async () => {
    const wrapper = mount(NavLink);
    const el = wrapper.find('a');
    await el.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('navigate');
  });
  it('has an "active" class if isActive prop is true', () => {
    const wrapper = mount(NavLink, {
      props: {
        isActive: true,
      },
    });
    expect(wrapper.get('li').classes().includes('active')).toBe(true);
  });
});
