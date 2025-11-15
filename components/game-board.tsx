"use client"

import { useState, useEffect, useCallback } from "react"
import { GridCell } from "@/components/grid-cell"
import { GuessInput } from "@/components/guess-input"
import { GameStats } from "@/components/game-stats"
import { AnswerRevealModal } from "@/components/answer-reveal-modal"
import { celebrities } from "@/lib/celebrities"
import type { Difficulty, Celebrity } from "@/lib/types"

interface GameBoardProps {
  difficulty: Difficulty
  onGameOver: (score: number, time: number) => void
}

export function GameBoard({ difficulty, onGameOver }: GameBoardProps) {
  const gridSize = difficulty === "easy" ? 3 : difficulty === "medium" ? 4 : 5
  const totalCells = gridSize * gridSize
  
  const [currentCelebrity, setCurrentCelebrity] = useState<Celebrity | null>(null)
  const [revealedCells, setRevealedCells] = useState<number[]>([])
  const [score, setScore] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [showAnswerModal, setShowAnswerModal] = useState(false)
  const [guessedCorrectly, setGuessedCorrectly] = useState(false)
  const [roundKey, setRoundKey] = useState(0)

  const initializeRound = useCallback(() => {
    const celebs = celebrities[difficulty]
    const randomCeleb = celebs[Math.floor(Math.random() * celebs.length)]
    setCurrentCelebrity(randomCeleb)
    
    // Reveal first cell immediately (random position)
    const firstCell = Math.floor(Math.random() * totalCells)
    setRevealedCells([firstCell])
    setGameStarted(true)
    setShowAnswerModal(false)
    setGuessedCorrectly(false)
    setTimeElapsed(0)
    setRoundKey((prev) => prev + 1)
  }, [difficulty, totalCells])

  useEffect(() => {
    initializeRound()
  }, [initializeRound])

  useEffect(() => {
    if (!gameStarted || guessedCorrectly) return
    
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1)
    }, 1000)
    
    return () => clearInterval(timer)
  }, [gameStarted, guessedCorrectly])

  useEffect(() => {
    if (!gameStarted || revealedCells.length >= totalCells || guessedCorrectly) return
    
    const revealTimer = setInterval(() => {
      setRevealedCells((prev) => {
        if (prev.length >= totalCells) return prev
        
        const unrevealedCells = Array.from({ length: totalCells }, (_, i) => i)
          .filter((i) => !prev.includes(i))
        
        if (unrevealedCells.length === 0) return prev
        
        const randomIndex = Math.floor(Math.random() * unrevealedCells.length)
        const nextCell = unrevealedCells[randomIndex]
        
        return [...prev, nextCell]
      })
    }, 3000)
    
    return () => clearInterval(revealTimer)
  }, [gameStarted, totalCells, revealedCells.length, guessedCorrectly])

  useEffect(() => {
    if (revealedCells.length === totalCells && !guessedCorrectly) {
      const modalTimer = setTimeout(() => {
        setShowAnswerModal(true)
      }, 3000)
      
      return () => clearTimeout(modalTimer)
    }
  }, [revealedCells.length, totalCells, guessedCorrectly])

  const handleCorrectGuess = useCallback(() => {
    const baseScore = 1000
    const timeBonus = Math.max(0, 500 - (timeElapsed * 10))
    const cellBonus = Math.max(0, (totalCells - revealedCells.length) * 50)
    const finalScore = Math.round(baseScore + timeBonus + cellBonus)
    
    setScore((prev) => prev + finalScore)
    setGuessedCorrectly(true)
    setShowAnswerModal(true)
  }, [timeElapsed, revealedCells.length, totalCells])

  const handleNextCelebrity = useCallback(() => {
    initializeRound()
  }, [initializeRound])

  if (!currentCelebrity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl font-bold">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 bg-background">
      <GameStats 
        difficulty={difficulty}
        timeElapsed={timeElapsed}
        revealedCells={revealedCells.length}
        totalCells={totalCells}
      />
      
      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <div 
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
            maxWidth: gridSize === 3 ? '450px' : gridSize === 4 ? '600px' : '750px',
            width: '100%',
          }}
        >
          {Array.from({ length: totalCells }).map((_, index) => (
            <GridCell
              key={`${roundKey}-${index}`}
              imageUrl={currentCelebrity.imageUrl}
              isRevealed={revealedCells.includes(index)}
              position={index}
              gridSize={gridSize}
            />
          ))}
        </div>
        
        {!showAnswerModal && (
          <GuessInput 
            correctAnswer={currentCelebrity.name}
            alternativeNames={currentCelebrity.alternativeNames}
            onCorrectGuess={handleCorrectGuess}
          />
        )}
      </div>

      {showAnswerModal && (
        <AnswerRevealModal
          celebrityName={currentCelebrity.name}
          imageUrl={currentCelebrity.imageUrl}
          onNext={handleNextCelebrity}
        />
      )}
    </div>
  )
}
