export function Mark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3.4" fill="#F07868" />
      <path
        d="M12 2.4v3.3M12 18.3v3.3M2.4 12h3.3M18.3 12h3.3"
        stroke="#F07868"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}
