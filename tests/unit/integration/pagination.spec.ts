import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Pagination from '@/components/Pagination.vue'

describe('Pagination Component', () => {
  it('emits "next" event when Next button is clicked', async () => {
    const component = await mountSuspended(Pagination, {
      props: {
        hasNext: true,
        hasPrev: false
      }
    })

    const nextButton = component.find('button:last-child')
    await nextButton.trigger('click')
    expect(component.emitted()).toHaveProperty('next')
  })

  it('disables the Prev button when hasPrev is false', async () => {
    const component = await mountSuspended(Pagination, {
        props: { hasPrev: false }
    })
    const prevButton = component.find('button:first-child')
    const buttonElement = prevButton.element as HTMLButtonElement
    expect(buttonElement.disabled).toBe(true)
    })
})