"use client"

import { useEffect, useState } from "react"

interface GridCellProps {
  imageUrl: string
  isRevealed: boolean
  position: number
  gridSize: number
}

export function GridCell({ imageUrl, isRevealed, position, gridSize }: GridCellProps) {
  const [shouldFlip, setShouldFlip] = useState(false)

  useEffect(() => {
    if (isRevealed && !shouldFlip) {
      // Small delay for staggered animation effect
      const timeout = setTimeout(() => {
        setShouldFlip(true)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [isRevealed, shouldFlip])

  const row = Math.floor(position / gridSize)
  const col = position % gridSize

  return (
    <div className="flip-card aspect-square">
      <div className={`flip-card-inner ${shouldFlip ? 'flipped' : ''}`}>
        {/* Front - Hidden side */}
        <div className="flip-card-front bg-card border border-border/30 flex items-center justify-center">
          <div className="w-12 h-12 bg-muted rounded-sm" />
        </div>
        
        {/* Back - Revealed image */}
        <div className="flip-card-back overflow-hidden bg-card border border-border/30">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
              backgroundPosition: `${(col / (gridSize - 1)) * 100}% ${(row / (gridSize - 1)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
