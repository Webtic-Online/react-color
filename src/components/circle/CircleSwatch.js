import React from 'react'
import reactCSS, { handleHover } from 'reactcss'

import { Swatch } from '../common'

export const CircleSwatch = ({ color, onClick, onSwatchHover, hover, active,
  circleSize, circleSpacing }) => {
  const styles = reactCSS({
    'default': {
      swatch: {
        width: circleSize,
        height: circleSize,
        marginRight: circleSpacing,
        marginBottom: circleSpacing,
        transform: 'scale(1)',
        transition: '100ms transform ease',
      },
      Swatch: {
        borderRadius: '50%',
        background: `linear-gradient(90deg, ${ color.color } 50%, ${ color.colorSecondary } 50%)`,
        transition: '100ms box-shadow ease',
      },
    },
    'hover': {
      swatch: {
        transform: 'scale(1.2)',
      },
    },
    'active': {
      Swatch: {
        border: "2px solid #00000099"
      },
    },
  }, { hover, active })

  return (
    <div style={ styles.swatch }>
      <Swatch
        style={ styles.Swatch }
        color={ color.color }
        onClick={ onClick }
        onHover={ onSwatchHover }
        focusStyle={{ border: `black 0 0 0 2px inset` }}
      />
    </div>
  )
}

CircleSwatch.defaultProps = {
  circleSize: 28,
  circleSpacing: 14,
}

export default handleHover(CircleSwatch)
