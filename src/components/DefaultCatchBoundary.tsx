
import {ErrorComponent, ErrorComponentProps, rootRouteId, useMatch, useRouter} from "@tanstack/react-router";

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId
  })
  console.error('DefaultCatchBoundary Error', error)
  return (
    <>
      <ErrorComponent error={error} />
      <div>
        <button onClick={() => router.invalidate()} >Try again</button>
      </div>
    </>
  )
}
