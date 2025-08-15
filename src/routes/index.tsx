import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <main
        style={{ viewTransitionName: 'main-content' }}
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <h1>Hei!👋🏼️ Jeg er Kalle og jeg lager internett-ting.</h1>
        <p>
          Send meg en <a href="mailto:hei@karlmagnus.no">epost.</a>{' '}
        </p>
        <p>
          Eller les om ting jeg <Link to="/liker">liker</Link>{' '}
          <kbd className="min-h-7.5 min-w-7.5 inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
            →
          </kbd>
        </p>
      </main>
    </div>
  )
}
