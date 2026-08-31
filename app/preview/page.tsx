import React from 'react';
import { Header } from '@/components/preview/Header';
import { UniverseStage } from '@/components/preview/UniverseStage';
import { Footer } from '@/components/preview/Footer';

export default function PreviewPage() {
  return (
    <div className="bg-[#051424] text-[#d4e4fa] font-sans min-h-screen flex flex-col overflow-x-hidden selection:bg-[#00e3fd] selection:text-[#001f24]">
      {/* Existing Header */}
      <Header />

      {/* Main Preview Body */}
      <main className="flex-grow flex flex-col pt-[72px] relative z-10 w-full overflow-hidden">
        <UniverseStage />
      </main>

      {/* Existing Footer */}
      <Footer />
    </div>
  );
}
