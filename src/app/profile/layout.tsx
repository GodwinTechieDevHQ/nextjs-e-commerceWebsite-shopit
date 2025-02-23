import React from "react";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>

      <main className="min-h-screen">{children}</main>

    </div>
  );
}
