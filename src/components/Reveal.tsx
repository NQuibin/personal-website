import React from 'react'
import { Fade, Zoom } from 'react-awesome-reveal'

interface Props {
  direction?: 'top' | 'right' | 'bottom' | 'left' | undefined
}

export const RevealFade: React.FC<Props> = ({
  children,
  direction = undefined,
}) => {
  return (
    <Fade triggerOnce cascade duration={600} direction={direction}>
      {children}
    </Fade>
  )
}

export const RevealZoom: React.FC<Props> = ({
  children,
  direction = undefined,
}) => {
  return (
    <Zoom triggerOnce cascade duration={600} direction={direction}>
      {children}
    </Zoom>
  )
}
