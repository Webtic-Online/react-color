import React from 'react';
import reactCSS, { handleHover } from 'reactcss';

import { Swatch } from '../common';

export var CircleSwatch = function CircleSwatch(_ref) {
  var color = _ref.color,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover,
      hover = _ref.hover,
      active = _ref.active,
      circleSize = _ref.circleSize,
      circleSpacing = _ref.circleSpacing;

  var styles = reactCSS({
    'default': {
      swatch: {
        width: circleSize,
        height: circleSize,
        marginRight: circleSpacing,
        marginBottom: circleSpacing,
        transform: 'scale(1)',
        transition: '100ms transform ease'
      },
      Swatch: {
        borderRadius: '50%',
        background: 'linear-gradient(90deg, ' + color.color + ' 50%, ' + color.colorSecondary + ' 50%)',
        transition: '100ms box-shadow ease'
      }
    },
    'hover': {
      swatch: {
        transform: 'scale(1.2)'
      }
    },
    'active': {
      Swatch: {
        border: 'black 0 0 0 2px inset'
      }
    }
  }, { hover: hover, active: active });

  return React.createElement(
    'div',
    { style: styles.swatch },
    React.createElement(Swatch, {
      style: styles.Swatch,
      color: color.color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: { border: 'black 0 0 0 2px inset' },
      title: color.title ? color.title : color.color
    })
  );
};

CircleSwatch.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
};

export default handleHover(CircleSwatch);