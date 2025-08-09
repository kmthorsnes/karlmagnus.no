import { createFileRoute, } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <h1>Hei!👋🏼️Jeg lager internett-ting</h1>
        <p className="">
          Send meg en <a href="mailto:hei@karlmagnus.no">epost</a>{' '}
        </p>
        {/* <p>
          Eller les om ting jeg <Link to="/liker">liker</Link>
        </p> */}
      </main>
    </div>
  )
}
