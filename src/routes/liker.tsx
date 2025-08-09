import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/liker')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Dette er en liste over ting jeg liker:</div>
}
