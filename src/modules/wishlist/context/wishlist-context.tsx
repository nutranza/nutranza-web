"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const WISHLIST_STORAGE_KEY = "nutranza_wishlist_v1";

type StoredWishlist = {
  version: 1;
  productIds: string[];
};

type WishlistContextValue = {
  items: string[];
  count: number;
  isInitialized: boolean;
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  removeItems: (productIds: string[]) => void;
  clearWishlist: () => void;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);

const normalizeProductIds = (value: unknown): string[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return Array.from(
    new Set(
      value.filter(
        (item): item is string =>
          typeof item === "string" && item.trim().length > 0,
      ),
    ),
  );
};

export const parseStoredWishlist = (raw: string | null): string[] => {
  if (!raw) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(raw);

    if (
      typeof parsed !== "object" ||
      parsed === null ||
      !("version" in parsed) ||
      parsed.version !== 1 ||
      !("productIds" in parsed)
    ) {
      return [];
    }

    return normalizeProductIds(parsed.productIds);
  } catch {
    return [];
  }
};

const readWishlist = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    return parseStoredWishlist(window.localStorage.getItem(WISHLIST_STORAGE_KEY));
  } catch {
    return [];
  }
};

const writeWishlist = (productIds: string[]) => {
  try {
    const value: StoredWishlist = { version: 1, productIds };
    window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Storage may be unavailable in privacy mode. The in-memory state still works.
  }
};

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setItems(readWishlist());
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) {
      return;
    }

    writeWishlist(items);
  }, [isInitialized, items]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === WISHLIST_STORAGE_KEY || event.key === null) {
        setItems(
          event.key === WISHLIST_STORAGE_KEY
            ? parseStoredWishlist(event.newValue)
            : readWishlist(),
        );
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const toggleWishlist = useCallback((productId: string) => {
    if (!productId) {
      return;
    }

    setItems((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  }, []);

  const removeFromWishlist = useCallback((productId: string) => {
    setItems((current) => current.filter((id) => id !== productId));
  }, []);

  const removeItems = useCallback((productIds: string[]) => {
    const idsToRemove = new Set(productIds);
    setItems((current) => current.filter((id) => !idsToRemove.has(id)));
  }, []);

  const clearWishlist = useCallback(() => setItems([]), []);

  const value = useMemo<WishlistContextValue>(
    () => ({
      items,
      count: items.length,
      isInitialized,
      isInWishlist: (productId) => items.includes(productId),
      toggleWishlist,
      removeFromWishlist,
      removeItems,
      clearWishlist,
    }),
    [
      clearWishlist,
      isInitialized,
      items,
      removeFromWishlist,
      removeItems,
      toggleWishlist,
    ],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }

  return context;
}
