import type { ReactNode } from 'react'

const sizes = {
  full: 'min-h-svh',
  tall: 'min-h-[85vh]',
  banner: 'min-h-[55vh]',
}

// Background colour while the photo loads, plus a tint over it so white text stays readable
const themes = {
  black: 'bg-black before:bg-black/25',
  dark: 'bg-dark-accent before:bg-dark-accent/25',
}

type Props = {
  image: string
  /** CSS background-position, used to keep the subject in frame. */
  focus?: string
  size?: keyof typeof sizes
  theme?: keyof typeof themes
  children: ReactNode
}

function ImageSection({
  image,
  focus = 'center',
  size = 'tall',
  theme = 'black',
  children,
}: Props) {
  return (
    <section
      className={`relative flex items-center justify-center bg-cover px-gutter pt-[calc(var(--spacing-header)+2rem)] pb-16 text-center text-white before:absolute before:inset-0 ${sizes[size]} ${themes[theme]}`}
      style={{ backgroundImage: `url(${image})`, backgroundPosition: focus }}
    >
      <div className="relative flex flex-col items-center gap-4">
        {children}
      </div>
    </section>
  )
}

export default ImageSection
