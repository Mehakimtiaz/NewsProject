import { describe, it, expect, vi } from 'vitest'
import { useNewsApi } from '../../../composables/useNewsApi'


global.$fetch = vi.fn() as any

describe('useNewsApi', () => {
  it('fetchNews calls the correct local API endpoint', async () => {
    const { fetchNews } = useNewsApi()
    await fetchNews('test-token-123')

    expect(global.$fetch).toHaveBeenCalledWith('/api/news', {
      params: { page: 'test-token-123' }
    })
  })

  it('fetchNewsById calls the endpoint with an ID', async () => {
    const { fetchNewsById } = useNewsApi()
    await fetchNewsById('article-55')

    expect(global.$fetch).toHaveBeenCalledWith('/api/news', {
      params: { id: 'article-55' }
    })
  })
})