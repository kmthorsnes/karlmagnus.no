import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useEffect } from 'react'

import TanStackQueryLayout from '../integrations/tanstack-query/layout.tsx'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

function RootComponent() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Bare håndter piltaster hvis ikke i et input-felt
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      switch (event.key) {
        case 'ArrowRight': {
          event.preventDefault()
          // Naviger til neste side (fra / til /liker, fra /liker til /demo/table)
          const currentPath = router.state.location.pathname
          if (currentPath === '/') {
            router.navigate({ to: '/liker' })
          } else if (currentPath === '/liker') {
            router.navigate({ to: '/demo/table' })
          }
          break
        }
        case 'ArrowLeft': {
          event.preventDefault()
          // Naviger til forrige side (fra /demo/table til /liker, fra /liker til /)
          const currentPathLeft = router.state.location.pathname
          if (currentPathLeft === '/demo/table') {
            router.navigate({ to: '/liker' })
          } else if (currentPathLeft === '/liker') {
            router.navigate({ to: '/' })
          }
          break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [router])

  return (
    <div className="min-h-screen bg-[#282c34] text-white text-[calc(10px+2vmin)]">
      <Outlet />
      <TanStackRouterDevtools />
      <TanStackQueryLayout />
    </div>
  )
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
})
