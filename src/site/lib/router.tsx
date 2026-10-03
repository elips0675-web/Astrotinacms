import React, { createContext, useContext } from 'react';

export type SiteRouterState = {
  params: Record<string, string>;
  search: string;
};

const defaultState: SiteRouterState = { params: {}, search: '' };
const SiteRouterContext = createContext<SiteRouterState>(defaultState);

type ProviderProps = {
  value?: SiteRouterState;
  children: React.ReactNode;
};

export function SiteRouterProvider({ value, children }: ProviderProps) {
  return (
    <SiteRouterContext.Provider value={value ?? defaultState}>
      {children}
    </SiteRouterContext.Provider>
  );
}

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  replace?: boolean;
  state?: unknown;
};

export function Link({ to, replace, state, children, ...rest }: LinkProps) {
  return (
    <a href={to} {...rest}>
      {children}
    </a>
  );
}

export function useParams<T extends Record<string, string> = Record<string, string>>(): T {
  return useContext(SiteRouterContext).params as T;
}

export function useLocation() {
  const ctx = useContext(SiteRouterContext);
  const isBrowser = typeof window !== 'undefined';
  return {
    pathname: isBrowser ? window.location.pathname : '/',
    search: isBrowser ? window.location.search : ctx.search,
    hash: isBrowser ? window.location.hash : '',
    state: null,
    key: 'default',
  };
}

export type NavigateFunction = (to: string | number, options?: { replace?: boolean }) => void;

export function useNavigate(): NavigateFunction {
  return (to, options) => {
    if (typeof window === 'undefined') return;
    if (typeof to === 'number') {
      window.history.go(to);
      return;
    }
    if (options?.replace) {
      window.location.replace(to);
    } else {
      window.location.href = to;
    }
  };
}

export const useSearchParams = () => {
  const { search } = useLocation();
  return [new URLSearchParams(search)] as const;
};

export default {
  Link,
  useParams,
  useNavigate,
  useLocation,
  useSearchParams,
  SiteRouterProvider,
};
