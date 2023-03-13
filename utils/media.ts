const customMediaQuery = (maxWidth: number) => `@media (min-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  xs: customMediaQuery(576),
  md: customMediaQuery(768),
  sm: customMediaQuery(992),
  lg: customMediaQuery(1200),
};