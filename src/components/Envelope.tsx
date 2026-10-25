import { useState, type ReactNode } from 'react'

type Props = {
  /** Text on the wax seal, e.g. initials. */
  seal: string
  /** Screen reader labels for the open/close button. */
  openLabel: string
  closeLabel: string
  /** Contents of the letter inside. */
  children: ReactNode
}

/**
 * An envelope that opens on hover (devices with a mouse) or on tap/click.
 * The shapes and open/close animation live in index.css under `.envelope`.
 */
function Envelope({ seal, openLabel, closeLabel, children }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-auto w-full max-w-110">
      <div className="envelope" data-open={open || undefined}>
        <div className="envelope-back" />
        <div className="envelope-letter flex flex-col items-center gap-[0.35rem] rounded bg-paper px-4 py-[1.1rem] text-center text-[0.95rem] leading-[1.4] shadow-[0_0_0_1px_rgb(0_0_0/0.04)]">
          {children}
        </div>
        <div className="envelope-pocket" />
        <div className="envelope-flap" />
        <span
          className="envelope-seal pointer-events-none absolute top-[58%] left-1/2 z-5 grid size-[3.4rem] -translate-1/2 place-items-center rounded-full bg-dark-accent font-heading text-[1.1rem] text-white shadow-[inset_0_0_0_3px_rgb(255_255_255/0.12),0_2px_6px_rgb(0_0_0/0.3)]"
          aria-hidden="true"
        >
          {seal}
        </span>
        <button
          type="button"
          className="absolute inset-0 z-6 cursor-pointer rounded-md focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-black"
          aria-expanded={open}
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <span className="sr-only">{open ? closeLabel : openLabel}</span>
        </button>
      </div>
    </div>
  )
}

export default Envelope
