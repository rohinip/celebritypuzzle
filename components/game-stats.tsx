"use client"

import { Card } from "@/components/ui/card"
import { Timer, Grid3x3, Trophy } from 'lucide-react'
import type { Difficulty } from "@/lib/types"

interface GameStatsProps {
  difficulty: Difficulty
  timeElapsed: number
  revealedCells: number
  totalCells: number
}

export function GameStats({ difficulty, timeElapsed, revealedCells, totalCells }: GameStatsProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="w-full max-w-6xl mx-auto mb-6 md:mb-8 px-4">
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        <Card className="p-2 md:p-4 flex flex-col md:flex-row items-center gap-1 md:gap-3">
          <Trophy className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
          <div className="text-center md:text-left">
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground font-bold">
              Level
            </p>
            <p className="text-sm md:text-lg font-bold uppercase">{difficulty}</p>
          </div>
        </Card>

        <Card className="p-2 md:p-4 flex flex-col md:flex-row items-center gap-1 md:gap-3">
          <Timer className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
          <div className="text-center md:text-left">
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground font-bold">
              Time
            </p>
            <p className="text-sm md:text-lg font-bold font-mono">{formatTime(timeElapsed)}</p>
          </div>
        </Card>

        <Card className="p-2 md:p-4 flex flex-col md:flex-row items-center gap-1 md:gap-3">
          <Grid3x3 className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
          <div className="text-center md:text-left">
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground font-bold">
              Cells
            </p>
            <p className="text-sm md:text-lg font-bold font-mono">
              {revealedCells}/{totalCells}
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
