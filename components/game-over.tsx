"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trophy, Clock, RotateCcw } from 'lucide-react'
import type { Difficulty } from "@/lib/types"

interface GameOverProps {
  score: number
  time: number
  onRestart: () => void
  onNewGame: (difficulty: Difficulty) => void
}

export function GameOver({ score, time, onRestart, onNewGame }: GameOverProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getScoreRating = (score: number) => {
    if (score >= 1400) return { text: "LEGENDARY", color: "text-foreground" }
    if (score >= 1200) return { text: "EXCELLENT", color: "text-foreground" }
    if (score >= 1000) return { text: "GREAT", color: "text-muted-foreground" }
    return { text: "GOOD", color: "text-muted-foreground" }
  }

  const rating = getScoreRating(score)

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="max-w-2xl w-full p-8 md:p-12 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            CORRECT!
          </h2>
          <p className={`text-2xl md:text-3xl font-bold uppercase tracking-wide ${rating.color}`}>
            {rating.text}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 p-6 bg-secondary rounded-sm">
            <Trophy className="w-8 h-8 text-foreground" />
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-bold">
                Final Score
              </p>
              <p className="text-4xl font-bold">{score.toLocaleString()}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-secondary rounded-sm">
            <Clock className="w-8 h-8 text-foreground" />
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-bold">
                Time
              </p>
              <p className="text-4xl font-bold font-mono">{formatTime(time)}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Button 
            onClick={onRestart} 
            className="w-full h-14 text-base uppercase tracking-wider font-bold"
            size="lg"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Play Again
          </Button>

          <div className="grid grid-cols-3 gap-3">
            <Button 
              onClick={() => onNewGame("easy")} 
              variant="outline"
              className="h-12 uppercase text-xs font-bold"
            >
              Easy
            </Button>
            <Button 
              onClick={() => onNewGame("medium")} 
              variant="outline"
              className="h-12 uppercase text-xs font-bold"
            >
              Medium
            </Button>
            <Button 
              onClick={() => onNewGame("hard")} 
              variant="outline"
              className="h-12 uppercase text-xs font-bold"
            >
              Hard
            </Button>
          </div>
        </div>

        <div className="text-center space-y-2 pt-6 border-t border-border">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
            Scoring Formula
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            1000 base + time bonus (500 - time×10) + cell bonus (unrevealed×50)
          </p>
        </div>
      </Card>
    </div>
  )
}
