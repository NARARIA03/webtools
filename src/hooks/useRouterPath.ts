"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useRouterPath = () => {
  const pathName = usePathname();
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    const url = `${pathName}`;
    if (path !== url) {
      setPath(url);
    }
  }, [pathName]);
  return path;
};
