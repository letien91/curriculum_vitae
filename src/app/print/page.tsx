import { Suspense } from "react";
import { PrintCvPage } from "@/components/PrintCvPage";

export const metadata = {
  title: "CV PDF — Lê Đức Tiến",
  robots: { index: false, follow: false },
};

export default function PrintPage() {
  return (
    <Suspense fallback={null}>
      <PrintCvPage />
    </Suspense>
  );
}
