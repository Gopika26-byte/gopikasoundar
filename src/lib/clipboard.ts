export async function copyText(text: string) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    // Fall through to the selection-based fallback.
  }

  const active = document.activeElement as HTMLElement | null
  const field = document.createElement("textarea")
  field.value = text
  field.setAttribute("readonly", "")
  field.style.position = "fixed"
  field.style.opacity = "0"
  document.body.appendChild(field)
  field.select()
  let copied = false
  try {
    copied = document.execCommand("copy")
  } catch {
    copied = false
  }
  field.remove()
  active?.focus()
  return copied
}
