import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const jquery = vi.hoisted(() => {
  const api = {
    on: vi.fn(),
    off: vi.fn(),
    slick: vi.fn(),
  }

  api.on.mockReturnValue(api)
  api.off.mockReturnValue(api)

  return { api, factory: vi.fn(() => api) }
})

vi.mock('jquery', () => ({ default: jquery.factory }))
vi.mock('slick-carousel', () => ({}))

import Slick from '../src/components/Slick.vue'

describe('Slick', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    jquery.api.on.mockReturnValue(jquery.api)
    jquery.api.off.mockReturnValue(jquery.api)
  })

  it('initializes and destroys slick', () => {
    const options = { slidesToShow: 2 }
    const wrapper = mount(Slick, {
      props: { options },
      slots: { default: '<div class="slide">Slide</div>' },
    })

    expect(jquery.factory).toHaveBeenCalledWith(wrapper.element)
    expect(jquery.api.on).toHaveBeenCalledTimes(11)
    expect(jquery.api.slick).toHaveBeenCalledWith(options)
    expect(wrapper.find('.slide').exists()).toBe(true)

    wrapper.unmount()

    expect(jquery.api.off).toHaveBeenCalledTimes(11)
    expect(jquery.api.slick).toHaveBeenLastCalledWith('unslick')
  })

  it('exposes the slick controls', () => {
    jquery.api.slick.mockReturnValueOnce(jquery.api)
    const wrapper = mount(Slick)
    const vm = wrapper.vm as unknown as {
      currentSlide: () => number
      goTo: (slide: number, dontAnimate?: boolean) => void
      next: () => void
      prev: () => void
      pause: () => void
      play: () => void
    }

    jquery.api.slick.mockReturnValueOnce(3)
    expect(vm.currentSlide()).toBe(3)
    vm.goTo(2, true)
    vm.next()
    vm.prev()
    vm.pause()
    vm.play()

    expect(jquery.api.slick.mock.calls.slice(-6)).toEqual([
      ['slickCurrentSlide'],
      ['slickGoTo', 2, true],
      ['slickNext'],
      ['slickPrev'],
      ['slickPause'],
      ['slickPlay'],
    ])
  })

  it('forwards slick events', () => {
    const wrapper = mount(Slick)
    const afterChange = jquery.api.on.mock.calls.find(([event]) => event === 'afterChange')?.[1]
    const event = {}
    const slick = {}

    afterChange(event, slick, 2)

    expect(wrapper.emitted('afterChange')).toEqual([[event, slick, 2]])
  })
})
