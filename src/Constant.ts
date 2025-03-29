const defaultUrl = 'https://rodandoejecafetero.github.io';
const defaultPath = '/';
const defaultImage = 'assets/images/static_img.png';
export const DEFAULT_IMAGE = `${import.meta.env.VITE_APP_URL || defaultUrl}${import.meta.env.VITE_BASE_PATH || defaultPath}${import.meta.env.VITE_STATIC_IMAGE_URL || defaultImage}`;
export const DEFAULT_URL = `${import.meta.env.VITE_APP_URL || defaultUrl}${import.meta.env.VITE_BASE_PATH || defaultPath}`;
export const DEFAULT_PATH = `${import.meta.env.VITE_BASE_PATH || defaultPath}`;
export const DEFAULT_TITLE = 'Rodando por el eje cafetero';
export const DEFAULT_DESCRIPTION =
  'Guía de turismo cinematográfico y audiovisual del eje cafetero en Colombia.';
export const DEFAULT_ROBOTS = 'index, follow';
export const DEFAULT_TWITTER_CARD = 'summary_large_image';
export const DEFAULT_OG_TYPE = 'website';
export const CULTURE_IMG_DESCRIPTION =
  'Logotipo de Gobierno de Colombia - Ministerio de Culturas';
