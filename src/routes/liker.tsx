import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/liker')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="text-center [view-transition-name:main-content]">
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <h1>Kule verktøy jeg liker</h1>
        <ul className="list-disc">
          <li>Alfred</li>
          <li>Finicky</li>
        </ul>
      </main>
    </div>
  )
}