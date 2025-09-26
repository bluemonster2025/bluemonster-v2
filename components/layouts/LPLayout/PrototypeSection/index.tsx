"use client";

import React from "react";

export default function PrototypeScreen() {
  return (
    <section className="flex justify-center items-center py-16 bg-gray-50">
      <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl">
        {/* Barra superior */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        {/* Tela com iframe */}

        <div className="flex justify-center items-start w-full h-[718px] bg-black">
          <div className="w-full h-screen">
            <div className="origin-top scale-[1.0]">
              <iframe
                src="https://embed.figma.com/proto/iH5oeW0SEeOK5DVdjanMlJ/Anny-Cookies?node-id=66-3416&m=dev&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=66%3A3416&embed-host=share"
                className="aspect-[1.33/1] shadow-lg"
                style={{ border: "0" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
