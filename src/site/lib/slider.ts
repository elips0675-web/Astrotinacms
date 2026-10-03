import type { ComponentType, ReactNode } from 'react';
import ReactSlick from 'react-slick';

/**
 * react-slick — CommonJS: `exports.default = Slider` + `Object.defineProperty(exports, '__esModule')`.
 * Node/Vite не опознают `__esModule` как named export, поэтому namespace.default
 * приходит как объект `{ default: fn }`, а React падает с
 * "Element type is invalid: expected a string ... but got: object".
 *
 * Вариант с `ssr.noExternal` в astro.config.mjs чинит build, но ломает dev:
 * там Vite отдаёт сырой CJS в ESM-контекст — "exports is not defined".
 * Поэтому interop делаем здесь: берём .default, если модуль обёрнут в объект.
 */
export type SliderComponent = ComponentType<Record<string, unknown> & { children?: ReactNode }>;

const mod = ReactSlick as unknown as SliderComponent & { default?: SliderComponent };

export const Slider: SliderComponent = mod.default ?? mod;

export default Slider;