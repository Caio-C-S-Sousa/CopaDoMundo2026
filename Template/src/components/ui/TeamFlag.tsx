import { getTeamById } from '../../data/teams'

interface Props {
  teamId: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  showName?: boolean
  namePosition?: 'right' | 'bottom'
  className?: string
}

const sizes = {
  xs: 'text-base',
  sm: 'text-xl',
  md: 'text-3xl',
  lg: 'text-4xl',
  xl: 'text-6xl',
}

export default function TeamFlag({ teamId, size = 'md', showName = false, namePosition = 'right', className = '' }: Props) {
  const team = getTeamById(teamId)
  if (!team) return <span className="text-gray-400 text-sm">?</span>

  if (!showName) {
    return <span className={`${sizes[size]} leading-none ${className}`} title={team.name}>{team.flag}</span>
  }

  if (namePosition === 'bottom') {
    return (
      <div className={`flex flex-col items-center gap-1 ${className}`}>
        <span className={`${sizes[size]} leading-none`}>{team.flag}</span>
        <span className="text-xs font-medium text-gray-700">{team.shortName}</span>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`${sizes[size]} leading-none`}>{team.flag}</span>
      <span className="font-medium text-gray-900">{team.name}</span>
    </div>
  )
}
