"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Difficulty } from "@/lib/types"

interface DifficultySelectProps {
  onSelect: (difficulty: Difficulty) => void
}

export function DifficultySelect({ onSelect }: DifficultySelectProps) {
  const difficulties = [
    {
      level: "easy" as Difficulty,
      title: "EASY",
      grid: "3×3",
      celebrities: "A-LIST CELEBRITIES",
      description: "Start with the biggest names",
    },
    {
      level: "medium" as Difficulty,
      title: "MEDIUM",
      grid: "4×4",
      celebrities: "B-LIST CELEBRITIES",
      description: "You might know these faces",
    },
    {
      level: "hard" as Difficulty,
      title: "HARD",
      grid: "5×5",
      celebrities: "NICHE CELEBRITIES",
      description: "For true entertainment experts",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-background">
      <div className="max-w-6xl w-full space-y-6 md:space-y-8">
        <div className="text-center space-y-2 md:space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-foreground">
            CELEBRITY
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-foreground">
            PUZZLE
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground uppercase tracking-wide mt-4 md:mt-6 px-4">
            Identify celebrities from revealed grid images
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {difficulties.map((diff) => (
            <Card 
              key={diff.level}
              className="p-6 md:p-8 hover:border-foreground transition-colors cursor-pointer group"
              onClick={() => onSelect(diff.level)}
            >
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{diff.title}</h3>
                  <p className="text-4xl md:text-5xl font-bold text-muted-foreground">{diff.grid}</p>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    {diff.celebrities}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {diff.description}
                  </p>
                </div>
                <Button 
                  className="w-full uppercase tracking-wider font-bold text-sm md:text-base"
                  size="lg"
                >
                  Play {diff.title}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
