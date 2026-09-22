export type ThemeId = 'default' | 'amoryamistad' | 'halloween' | 'navidad';

/** Clase que se agrega a <html> para activar cada tema ('default' no aplica ninguna). */
export const THEME_CLASS: Record<ThemeId, string> = {
  default: '',
  amoryamistad: 'theme-amoryamistad',
  halloween: 'theme-halloween',
  navidad: 'theme-navidad',
};

export const THEME_LABEL: Record<ThemeId, string> = {
  default: 'Clásico (Azul)',
  amoryamistad: 'Amor y Amistad 2026',
  halloween: 'Halloween 2026',
  navidad: 'Navidad 2026',
};

/**
 * Tema activo de la tienda.
 * Cambia este valor (o pega la clase del tema en <html> dentro de Layout.astro)
 * para activar el tema estacional que quieras sin tocar funcionalidades.
 */
export const ACTIVE_THEME: ThemeId = 'default';