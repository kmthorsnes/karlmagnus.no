import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/liker')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="text-center">
      <main style={{ viewTransitionName: 'main-content' }} className="min-h-screen flex flex-col items-center justify-center">
        <h1>Kule verktøy jeg liker</h1>
        <ul className="list-disc">
          <li>Alfred</li>
          <li>Finicky</li>
        </ul>
      </main>
    </div>
  )
}