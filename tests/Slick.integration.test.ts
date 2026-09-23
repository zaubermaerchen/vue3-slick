import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import Slick from '../src/components/Slick.vue'

it('initializes and destroys the installed slick-carousel version', () => {
  const wrapper = mount(Slick, {
    props: { options: { infinite: false, speed: 0 } },
    slots: { default: '<div>One</div><div>Two</div>' },
  })

  expect(wrapper.classes()).toContain('slick-initialized')
  const slider = wrapper.vm as unknown as {
    currentSlide: () => number | undefined
    goTo: (slide: number, dontAnimate?: boolean) => void
    prev: () => void
  }
  expect(slider.currentSlide()).toBe(0)
  slider.goTo(1, true)
  expect(slider.currentSlide()).toBe(1)
  slider.prev()
  expect(slider.currentSlide()).toBe(0)
  wrapper.unmount()
  expect(wrapper.classes()).not.toContain('slick-initialized')
})
