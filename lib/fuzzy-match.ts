// Calculate Levenshtein distance between two strings
function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length
  const len2 = str2.length
  const matrix: number[][] = []

  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      )
    }
  }

  return matrix[len1][len2]
}

// Normalize string for comparison
function normalizeString(str: string): string {
  return str.toLowerCase().trim().replace(/[^a-z0-9\s]/g, '')
}

// Check if a guess matches the answer with fuzzy logic
export function fuzzyMatch(guess: string, answer: string, alternativeNames: string[] = []): boolean {
  const normalizedGuess = normalizeString(guess)
  const normalizedAnswer = normalizeString(answer)
  
  // Check exact match
  if (normalizedGuess === normalizedAnswer) {
    return true
  }
  
  // Check alternative names
  const allNames = [answer, ...alternativeNames]
  for (const name of allNames) {
    const normalizedName = normalizeString(name)
    if (normalizedGuess === normalizedName) {
      return true
    }
  }
  
  // Check fuzzy match with Levenshtein distance
  // Allow 1-2 character differences depending on length
  const maxDistance = normalizedAnswer.length <= 5 ? 1 : 2
  const distance = levenshteinDistance(normalizedGuess, normalizedAnswer)
  
  if (distance <= maxDistance) {
    return true
  }
  
  // Check fuzzy match against alternative names
  for (const name of alternativeNames) {
    const normalizedName = normalizeString(name)
    const altMaxDistance = normalizedName.length <= 5 ? 1 : 2
    const altDistance = levenshteinDistance(normalizedGuess, normalizedName)
    
    if (altDistance <= altMaxDistance) {
      return true
    }
  }
  
  // Check if guess is contained in answer or vice versa (for partial matches)
  if (normalizedGuess.length >= 4 && normalizedAnswer.includes(normalizedGuess)) {
    return true
  }
  
  if (normalizedAnswer.length >= 4 && normalizedGuess.includes(normalizedAnswer)) {
    return true
  }
  
  return false
}
