import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Layout from './Layout.vue';

describe('Layout component', () => {
  it('wraps an element within a div with a class of container', () => {
    const wrapper = mount(Layout, {
      slots: {
        default: '<div>Test</div>',
      },
    });

    expect(wrapper.getComponent('.container').html()).toContain(
      '<div>Test</div>'
    );
  });
});
