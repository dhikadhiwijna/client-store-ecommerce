"use client";

import React, { useEffect } from "react";

const Currency = ({ value }: { value: string }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;

export const formatter = new Intl.NumberFormat("en-ID", {
  style: "currency",
  currency: "IDR",
});
