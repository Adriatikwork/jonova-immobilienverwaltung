'use client'

import { useCallback, useRef, type PointerEvent, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SpotlightCardProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'li'
}

/**
 * Hover panel with a cursor-tracked highlight, in the spirit of React Bits
 * Spotlight Card but without the dependency.
 *
 * The pointer position is written straight to CSS custom properties instead of
 * React state: this fires on every mouse move and must not re-render the tree.
 */
export function SpotlightCard({
  children,
  className,
  as: Tag = 'div',
}: SpotlightCardProps) {
  const ref = useRef<HTMLElement | null>(null)

  const handlePointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') return
    const node = ref.current
    if (!node) return

    const rect = node.getBoundingClientRect()
    node.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    node.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }, [])

  return (
    <Tag
      ref={ref as never}
      onPointerMove={handlePointerMove}
      className={cn('spotlight-card', className)}
    >
      {children}
    </Tag>
  )
}
