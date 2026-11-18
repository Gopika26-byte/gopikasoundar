export function OpenToWorkPill() {
  return (
    <p className="open-to-work" role="status">
      <span>Open to Work</span>
      <span className="open-to-work-indicator" aria-hidden="true">
        <span className="open-to-work-pulse" />
        <span className="open-to-work-ring" />
        <span className="open-to-work-dot" />
      </span>
    </p>
  )
}
