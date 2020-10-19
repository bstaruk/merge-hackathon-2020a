/**
 * CSS-related utilities, such as common variables &
 * styled-components helper functions.
 */

// breakpoints (copied from chrome dev tools)
export const breakpoint = {
  mobileSm: '320px',
  mobileMd: '375px',
  mobileLg: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopLg: '1440px',
  desktop: '2560px',
};

// media queries
export const mq = {
  mobileSm: `(min-width: ${breakpoint.mobileSm})`,
  mobileMd: `(min-width: ${breakpoint.mobileMd})`,
  mobileLg: `(min-width: ${breakpoint.mobileLg})`,
  tablet: `(min-width: ${breakpoint.tablet})`,
  laptop: `(min-width: ${breakpoint.laptop})`,
  laptopLg: `(min-width: ${breakpoint.laptopLg})`,
  desktop: `(min-width: ${breakpoint.desktop})`,
  desktopLg: `(min-width: ${breakpoint.desktop})`,
};

/** example media query usage:
 * @media ${mq.tablet} { ... }
 */
