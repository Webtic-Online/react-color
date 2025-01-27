import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import merge from 'lodash/merge'

import { ColorWrap } from '../common'
import CircleSwatch from './CircleSwatch'

export const Circle = ({ width, onChange, onSwatchHover, colors, hex, circleSize,
  styles: passedStyles = {}, circleSpacing, className = '' }) => {
  const styles = reactCSS(merge({
    'default': {
      card: {
        width,
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing,
      },
    },
  }, passedStyles))

  const handleChange = (hexCode, e) => onChange({ hex: hexCode, source: 'hex' }, e)

  return (
    <div style={ styles.card } className={ `circle-picker ${ className }` }>
      { map(colors, c => (
        <CircleSwatch
          key={ c.color }
          color={ c }
          onClick={ handleChange }
          onSwatchHover={ onSwatchHover }
          active={ hex === c.color.toLowerCase() }
          circleSize={ circleSize }
          circleSpacing={ circleSpacing }
        />
      )) }
    </div>
  )
}

Circle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  circleSize: PropTypes.number,
  circleSpacing: PropTypes.number,
  styles: PropTypes.object,
}

Circle.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [],
  styles: {},
}

export default ColorWrap(Circle)
