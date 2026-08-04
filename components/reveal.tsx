'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
  as?: 'div' | 'section' | 'article' | 'li' | 'header'
}

/**
 * Quiet scroll reveal, inspired by React Bits Scroll Reveal / Fade Content, 
 * implemented without extra deps for a lean GitHub Pages static export.
 */
export function Reveal({
  children, 
  className, 
  delayMs = 0, 
  as: Tag = 'div', 
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      }, 
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={cn(
        'reveal-base', 
        visible && 'reveal-visible', 
        className
      )}
      style={{ transitionDelay: visible ? `${delayMs}ms` : undefined }}
    >
      {children}
    </Tag>
  )
}
