export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10">
      <div className="mb-8 h-4 w-48 animate-pulse rounded bg-surface" />

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="aspect-square w-full animate-pulse rounded-2xl border border-border bg-surface" />

        <div className="flex flex-col gap-4">
          <div className="h-6 w-24 animate-pulse rounded-full bg-surface" />
          <div className="h-9 w-3/4 animate-pulse rounded bg-surface" />
          <div className="h-8 w-24 animate-pulse rounded bg-surface" />
          <div className="mt-2 space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-surface" />
            <div className="h-4 w-11/12 animate-pulse rounded bg-surface" />
            <div className="h-4 w-9/12 animate-pulse rounded bg-surface" />
          </div>

          <div className="my-4 h-px bg-border" />

          <div className="space-y-3">
            <div className="h-4 w-16 animate-pulse rounded bg-surface" />
            <div className="flex gap-2">
              <div className="h-10 w-10 animate-pulse rounded-lg bg-surface" />
              <div className="h-10 w-10 animate-pulse rounded-lg bg-surface" />
              <div className="h-10 w-10 animate-pulse rounded-lg bg-surface" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="h-4 w-16 animate-pulse rounded bg-surface" />
            <div className="flex gap-3">
              <div className="h-9 w-9 animate-pulse rounded-full bg-surface" />
              <div className="h-9 w-9 animate-pulse rounded-full bg-surface" />
            </div>
          </div>

          <div className="h-28 w-full animate-pulse rounded-xl bg-surface" />
          <div className="mt-2 h-12 w-full animate-pulse rounded-full bg-surface" />
        </div>
      </div>
    </div>
  );
}
