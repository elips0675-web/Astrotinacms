import React from 'react';
import { SiteRouterProvider } from './router';

export type RouteProps = {
  params?: Record<string, string>;
  search?: string;
};

/**
 * Оборачивает страницу сайта в SiteRouterProvider.
 *
 * Провайдер обязан быть ВНУТРИ того же React-острова, что и страница:
 * Astro гидратирует каждый остров отдельным React-root, и React-контекст
 * через границу островов не проходит. Поэтому HOC, а не обёртка в .astro.
 *
 * Результат обязан быть статическим импортом в .astro — Astro не умеет
 * гидрировать компонент, полученный вызовом функции прямо в шаблоне.
 */
export function withRouter<P extends object>(Component: React.ComponentType<P>) {
  // Всё, что кроме params/search, — пропсы самой страницы (например, items из контента),
  // их нужно пробросить внутрь острова, иначе данные не дойдут до компонента.
  function WithRouter({ params = {}, search = '', ...rest }: RouteProps & Partial<P>) {
    return (
      <SiteRouterProvider value={{ params, search }}>
        <Component {...(rest as P)} />
      </SiteRouterProvider>
    );
  }
  WithRouter.displayName = `withRouter(${Component.displayName ?? Component.name ?? 'Page'})`;
  return WithRouter;
}

export default withRouter;
