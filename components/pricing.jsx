"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { PricingTable } from "@clerk/nextjs";

const Pricing = () => {
  return (
    <Card className="
  relative overflow-hidden
  border border-emerald-900/40
  bg-gradient-to-br from-emerald-950/60 via-emerald-950/40 to-black
  shadow-[0_0_60px_-15px_rgba(16,185,129,0.25)]
  backdrop-blur-xl
">
  {/* Glow accent */}
  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_60%)]" />

  <CardContent className="relative p-6 md:p-10">
    <PricingTable
      checkoutProps={{
        appearance: {
          elements: {
            drawerRoot: {
              zIndex: 2000,
            },
          },
        },
      }}
    />
  </CardContent>
</Card>
  );
};

export default Pricing;