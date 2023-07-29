import { capitalize } from 'lodash'

interface User {
  firstName?: string | null
  lastName?: string | null
}

export function formatFullName(user: User): string {
  return `${capitalize(user.firstName || '')} ${capitalize(user.lastName || '')}`.trim()
}
