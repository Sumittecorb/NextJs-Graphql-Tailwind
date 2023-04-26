import React, { ReactNode } from "react";

// components

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"
            style={{
              backgroundColor:"#93ae99"
            }}
          ></div>
          {children}
        </section>
      </main>
    </>
  );
}
