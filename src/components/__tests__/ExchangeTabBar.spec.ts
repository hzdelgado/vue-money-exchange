import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ExchangeTabBar from '../exchange/ExchangeTabBar.vue'

describe('ExchangeTabBar', () => {
  it('renders exchange rate properly', () => {
    const wrapper = mount(ExchangeTabBar, { props: { buyPrice: '2.222', sellPrice: '3.333' } })
    const buyButton = wrapper.get('[data-test="buy-button"]');
    const sellButton = wrapper.get('[data-test="sell-button"]');
    expect(buyButton.text()).toContain('2.222')
    expect(sellButton.text()).toContain('3.333')
  })

  it('click() highlights button ', async () => {
    const wrapper = mount(ExchangeTabBar, { props: { buyPrice: '2.222', sellPrice: '3.333' } })
    const buyButton = wrapper.get('[data-test="buy-button"]');
    const sellButton = wrapper.get('[data-test="sell-button"]');
    await buyButton.trigger('click');
    expect(buyButton.classes()).toContain('text-alt-blue')
    expect(sellButton.classes()).toContain('text-purplish')
  })
})
