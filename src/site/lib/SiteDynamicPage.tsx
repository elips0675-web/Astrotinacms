import ServiceDetailPage from '../pages/service-detail';
import PrintingServiceDetail from '../pages/printing-service-detail';
import BookDetailPage from '../pages/book-detail';
import { SiteRouterProvider } from './router';

/*
 * Обёртка для динамических маршрутов Astro (/services/:id, /printing-services/:id, /books/:id).
 *
 * Зачем она нужна: страницы из nlb-studio6-main читают параметр через useParams() из
 * react-router-dom, который здесь подменён шимом (см. vite.resolve.alias в astro.config.mjs).
 * В dev-режиме Astro параметры в шим не попадают, поэтому их надо передать вручную.
 *
 * Передавать надо ИМЕННО одним островом, а не как <SiteRouterProvider><Page/></SiteRouterProvider>:
 * вложенные client:load-компоненты Astro монтирует как отдельные React-руты, и контекст
 * через границу рутов не проходит — useParams() вернул бы пустой объект.
 */

const pages = {
  service: ServiceDetailPage,
  printing: PrintingServiceDetail,
  book: BookDetailPage,
};

type Kind = keyof typeof pages;

type Props = {
  kind: Kind;
  params: Record<string, string | undefined>;
  search: string;
};

export default function SiteDynamicPage({ kind, params, search }: Props) {
  const Page = pages[kind];
  const resolved: Record<string, string> = {};
  for (const [key, value] of Object.entries(params)) {
    if (typeof value === 'string') resolved[key] = value;
  }

  return (
    <SiteRouterProvider value={{ params: resolved, search }}>
      <Page />
    </SiteRouterProvider>
  );
}