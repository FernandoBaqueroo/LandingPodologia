/**
 * Calcula los años de experiencia desde un año de inicio hasta el año actual.
 */
export const getYearsOfExperience = (startYear: number): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};
