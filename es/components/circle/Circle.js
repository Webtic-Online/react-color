import React from 'react';
import PropTypes from 'prop-types';
import reactCSS from 'reactcss';
import map from 'lodash-es/map';
import merge from 'lodash-es/merge';

import { ColorWrap } from '../common';
import CircleSwatch from './CircleSwatch';

export var Circle = function Circle(_ref) {
  var width = _ref.width,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      colors = _ref.colors,
      hex = _ref.hex,
      circleSize = _ref.circleSize,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      circleSpacing = _ref.circleSpacing,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = reactCSS(merge({
    'default': {
      card: {
        width: width,
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing
      }
    }
  }, passedStyles));

  var handleChange = function handleChange(hexCode, e) {
    return onChange({ hex: hexCode, source: 'hex' }, e);
  };

  return React.createElement(
    'div',
    { style: styles.card, className: 'circle-picker ' + className },
    map(colors, function (c) {
      return React.createElement(CircleSwatch, {
        key: c.color,
        color: c,
        onClick: handleChange,
        onSwatchHover: onSwatchHover,
        active: hex === c.color.toLowerCase(),
        circleSize: circleSize,
        circleSpacing: circleSpacing
      });
    })
  );
};

Circle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  circleSize: PropTypes.number,
  circleSpacing: PropTypes.number,
  styles: PropTypes.object
};

Circle.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [],
  styles: {}
};

export default ColorWrap(Circle);