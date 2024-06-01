import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'

function LoadingTable({ rows }: { rows?: number }) {
  const tableRows = Array.from({ length: rows || 5 }, (_, i) => {
    return (
      <div
        className='mb-4'
        key={i}
      >
        <Skeleton className='h-8 w-full rounded' />
      </div>
    )
  })
  return <>{tableRows}</>
}
export default LoadingTable
