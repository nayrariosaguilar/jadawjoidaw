export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14">
      <div className="mb-8 space-y-3">
        <div className="h-9 w-40 animate-pulse rounded bg-surface" />
        <div className="h-4 w-56 animate-pulse rounded bg-surface" />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <div className="h-9 w-20 animate-pulse rounded-full bg-surface" />
        <div className="h-9 w-24 animate-pulse rounded-full bg-surface" />
        <div className="h-9 w-24 animate-pulse rounded-full bg-surface" />
        <div className="h-9 w-24 animate-pulse rounded-full bg-surface" />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div className="aspect-square w-full animate-pulse bg-border/50" />
            <div className="flex flex-col gap-2 p-4">
              <div className="h-4 w-3/4 animate-pulse rounded bg-border/60" />
              <div className="h-3 w-full animate-pulse rounded bg-border/60" />
              <div className="mt-1 h-4 w-16 animate-pulse rounded bg-border/60" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
