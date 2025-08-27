import { Link, createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { useViewTransition } from '../hooks/useViewTransition'

export const Route = createFileRoute('/liker')({
  component: RouteComponent,
})

function RouteComponent() {
  const { navigateWithTransition } = useViewTransition()

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigateWithTransition('/')
  }

  return (
    <div className="text-center">
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <h1 className="view-transition-fade">Dette er ting jeg liker</h1>
        <ul className="list-disc view-transition-slide">
          <li>Kaffe ☕</li>
          <li>Cola 🥤</li>
          <li>Lister 📃 </li>
        </ul>
        <div className="mt-8 gap-2">
          <p className="flex items-center gap-2">
            <kbd className="min-h-7.5 min-w-7.5 inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
              ←
            </kbd>
            <span>Tilbake til</span>
            <Link
              to="/"
              onClick={handleHomeClick}
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              forsiden
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
