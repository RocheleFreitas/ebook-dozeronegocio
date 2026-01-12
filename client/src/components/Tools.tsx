import React from 'react';
import AIPrompts from './AIPrompts';

const Tools = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-12">
      {/* Seção de IA - Foco Total */}
      <section>
        <AIPrompts />
      </section>
    </div>
  );
};

export default Tools;
