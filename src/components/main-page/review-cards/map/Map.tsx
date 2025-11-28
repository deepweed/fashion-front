"use client";

import React, { useEffect, useRef } from "react";

interface YandexMapProps {
  width?: string;
  height?: string;
}

const YandexMap: React.FC<YandexMapProps> = ({
  width = "500px",
  height = "400px",
}) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Удаляем старые скрипты
    const existingScripts = document.querySelectorAll(
      'script[src*="api-maps.yandex.ru/services/constructor"]'
    );
    existingScripts.forEach((script) => script.remove());

    // Создаем контейнер для карты
    const container = mapRef.current;
    container.innerHTML = "";

    // Создаем iframe напрямую - самый надежный способ для Constructor
    const iframe = document.createElement("iframe");
    iframe.src =
      "https://yandex.ru/map-widget/v1/?um=constructor%3Ac26e4e6fe50779a4b05837a2904bddc819d35d73a5c310461f41227d514066d9&lang=ru_RU&scroll=true";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "0";
    iframe.allowFullscreen = true;

    container.appendChild(iframe);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width,
        height,
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    />
  );
};

export default YandexMap;
