import { useRouter } from '@tanstack/react-router'
import { useCallback } from 'react'

export function useViewTransition() {
  const router = useRouter()

  const navigateWithTransition = useCallback(
    (to: string, options?: { replace?: boolean }) => {
      // Check if browser supports View Transitions
      if (!('startViewTransition' in document)) {
        // Fallback to normal navigation
        router.navigate({ to, replace: options?.replace })
        return
      }

      // Start the view transition
      ;(document as any).startViewTransition(() => {
        router.navigate({ to, replace: options?.replace })
      })
    },
    [router],
  )

  const isSupported = useCallback(() => {
    return 'startViewTransition' in document
  }, [])

  return {
    navigateWithTransition,
    isSupported: isSupported(),
  }
}

// Utility function to apply view transition to any callback
export function withViewTransition(callback: () => void) {
  if (!('startViewTransition' in document)) {
    callback()
    return
  }

  ;(document as any).startViewTransition(callback)
}
