import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getOrderedProjects(
  projects: any[],
  featuredIds: string[]
): any[] {
  const featured = featuredIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean)

  const others = projects
    .filter((p) => !featuredIds.includes(p.id))
    .sort((a, b) => a.priority - b.priority)

  return [...featured, ...others]
}

export function getRelevantExperiences(
  experiences: any[],
  roleType: string
): any[] {
  return experiences
    .map((exp) => ({
      ...exp,
      achievements: exp.achievements.filter((ach: any) =>
        ach.relevantFor.includes(roleType)
      ),
    }))
    .filter((exp) => exp.achievements.length > 0)
}

export function getOrderedSkills(
  skills: any[],
  highlightedSkills: string[]
): any[] {
  return skills.map((skillCategory) => {
    const items = [...skillCategory.items]

    // Sort items to put highlighted skills first
    items.sort((a, b) => {
      const aHighlighted = highlightedSkills.includes(a)
      const bHighlighted = highlightedSkills.includes(b)

      if (aHighlighted && !bHighlighted) return -1
      if (!aHighlighted && bHighlighted) return 1
      return 0
    })

    return {
      ...skillCategory,
      items,
    }
  })
}

export function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text)
  }

  // Fallback for older browsers
  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.style.position = 'fixed'
  textArea.style.left = '-999999px'
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    document.execCommand('copy')
    textArea.remove()
    return Promise.resolve()
  } catch (err) {
    textArea.remove()
    return Promise.reject(err)
  }
}

export function formatDate(dateString: string): string {
  if (dateString === 'Present') return 'Present'

  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

export function calculateDuration(startDate: string, endDate: string): string {
  const start = new Date(startDate)
  const end = endDate === 'Present' ? new Date() : new Date(endDate)

  const months = (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())

  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  if (years === 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
  }

  if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`
  }

  return `${years} year${years !== 1 ? 's' : ''}, ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
