import type { PointerEventHandler } from "react"

type Props = {
  name: string
  src: string
  onPointerDown?: PointerEventHandler<HTMLDivElement>
  onPointerUp?: PointerEventHandler<HTMLDivElement>
  onPointerCancel?: PointerEventHandler<HTMLDivElement>
  onLostPointerCapture?: PointerEventHandler<HTMLDivElement>
}

export function ToolPill({
  name,
  src,
  onPointerDown,
  onPointerUp,
  onPointerCancel,
  onLostPointerCapture,
}: Props) {
  return (
    <div
      className="tool-pill"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onLostPointerCapture={onLostPointerCapture}
      onContextMenu={(event) => event.preventDefault()}
      onDragStart={(event) => event.preventDefault()}
    >
      <img src={src} alt="" width={28} height={28} draggable={false} decoding="async" />
      <span>{name}</span>
    </div>
  )
}
