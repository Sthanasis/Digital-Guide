import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Header from './Header.vue';
import { routes } from '../../router';

describe('Header Component', () => {
  it('renders a component of total routes based on the route list length', async () => {
    const wrapper = mount(Header, {
      props: {
        routes,
      },
    });

    const elementList = wrapper.findAll('li');
    expect(elementList.length === routes.length).toBe(true);
  });
});
