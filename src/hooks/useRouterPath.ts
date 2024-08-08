"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const useRouterPath = () => {
  const pathName = usePathname();
  const params = useSearchParams();
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    const url = `${pathName}?${params}`;
    if (path !== url) {
      setPath(url);
    }
  }, [pathName, params]);
  return path;
};
