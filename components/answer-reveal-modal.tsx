"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from 'lucide-react'

interface AnswerRevealModalProps {
  celebrityName: string
  imageUrl: string
  onNext: () => void
}

export function AnswerRevealModal({ celebrityName, imageUrl, onNext }: AnswerRevealModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="flex flex-col items-center gap-6">
          <div className="bg-primary/10 rounded-full p-3">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">The Answer Is</h2>
            <p className="text-4xl font-bold text-primary">{celebrityName}</p>
          </div>
          
          <div className="w-full aspect-square rounded-xl overflow-hidden border-2 border-border">
            <img 
              src={imageUrl || "/placeholder.svg"} 
              alt={celebrityName}
              className="w-full h-full object-cover"
            />
          </div>
          
          <Button 
            onClick={onNext}
            size="lg"
            className="w-full text-lg font-bold"
          >
            Next Celebrity
          </Button>
        </div>
      </div>
    </div>
  )
}
