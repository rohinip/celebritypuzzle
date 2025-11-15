"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, XCircle } from 'lucide-react'
import { fuzzyMatch } from "@/lib/fuzzy-match"

interface GuessInputProps {
  correctAnswer: string
  alternativeNames?: string[]
  onCorrectGuess: () => void
}

export function GuessInput({ correctAnswer, alternativeNames = [], onCorrectGuess }: GuessInputProps) {
  const [guess, setGuess] = useState("")
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!guess.trim()) return

    if (fuzzyMatch(guess, correctAnswer, alternativeNames)) {
      setFeedback("correct")
      setTimeout(() => {
        onCorrectGuess()
      }, 1000)
    } else {
      setFeedback("incorrect")
      setTimeout(() => {
        setFeedback(null)
        setGuess("")
      }, 1500)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3 md:space-y-4">
      <div className="text-center space-y-2">
        <label htmlFor="celebrity-guess" className="block text-sm md:text-base font-bold uppercase tracking-wider text-muted-foreground">
          Type the celebrity's name
        </label>
        <div className="relative">
          <Input
            id="celebrity-guess"
            type="text"
            placeholder="Enter name here..."
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="text-center font-bold tracking-wide text-base md:text-lg h-12 md:h-14 pr-12 border-2 focus:border-foreground"
            disabled={feedback === "correct"}
            autoComplete="off"
          />
          {feedback && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {feedback === "correct" ? (
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              ) : (
                <XCircle className="w-5 h-5 md:w-6 md:h-6 text-destructive" />
              )}
            </div>
          )}
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full uppercase tracking-wider font-bold h-12 md:h-14 text-sm md:text-base"
        disabled={!guess.trim() || feedback === "correct"}
      >
        Submit Guess
      </Button>

      {feedback === "incorrect" && (
        <p className="text-center text-destructive font-bold uppercase text-xs md:text-sm tracking-wide">
          Try again!
        </p>
      )}
    </form>
  )
}
