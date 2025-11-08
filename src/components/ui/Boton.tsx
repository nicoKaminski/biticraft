import Link from 'next/link'
import React from 'react'

interface BotonProps {
  href: string
  children: React.ReactNode
}

export const Boton: React.FC<BotonProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="inline-block rounded-full bg-marca-rosa px-8 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-opacity-80"
    >
      {children}
    </Link>
  )
}