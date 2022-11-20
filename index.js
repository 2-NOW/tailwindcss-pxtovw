const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function (options = {}) {
  return function ({ addVariant, theme }) {
    for (const [key, viewport] of Object.entries(options)) {
      const screen = theme('screens', {})[key]?.replace('px', '');
      const prefix = screen ? key : '';
      addVariant(`${prefix}@pv`, ({ container }) => {
        container.walkRules((rule) => {
          rule.walkDecls((decl) => {
            if (decl.value.includes('px')) {
              decl.value = `${(
                (Number(decl.value.split('px')[0]) / viewport) *
                100
              ).toFixed(4)}vw`;
            }
          });
        });
        if (screen) return `@media (min-width: ${screen}px)`;
      });
    }
  };
});

/**
 * @param {object} options
 * @param {string} key screen name
 * @param {number} value calculate width of viewport
 *
 * @example
 * <div class="pc@pv:h-[14px]">test</div>
 */
