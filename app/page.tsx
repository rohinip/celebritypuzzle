"use client"

import { useState } from "react"
import { DifficultySelect } from "@/components/difficulty-select"
import { GameBoard } from "@/components/game-board"
import { GameOver } from "@/components/game-over"
import type { Difficulty } from "@/lib/types"

export default function Home() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [finalScore, setFinalScore] = useState(0)
  const [finalTime, setFinalTime] = useState(0)

  const handleGameOver = (score: number, time: number) => {
    setFinalScore(score)
    setFinalTime(time)
    setGameOver(true)
  }

  const handleRestart = () => {
    setDifficulty(null)
    setGameOver(false)
    setFinalScore(0)
    setFinalTime(0)
  }

  const handleNewGame = (newDifficulty: Difficulty) => {
    setGameOver(false)
    setDifficulty(newDifficulty)
  }

  if (gameOver) {
    return (
      <GameOver 
        score={finalScore} 
        time={finalTime} 
        onRestart={handleRestart}
        onNewGame={handleNewGame}
      />
    )
  }

  if (!difficulty) {
    return <DifficultySelect onSelect={setDifficulty} />
  }

  return <GameBoard difficulty={difficulty} onGameOver={handleGameOver} />
}
