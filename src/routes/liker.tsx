import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/liker')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="text-center">
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <h1>Dette er ting jeg liker</h1>
        <ul className="list-disc">
          <li>Kaffe</li>
        </ul>
      </main>
    </div>
  )
}
