'use client'

import { useEffect } from "react";

export default function MusicReactiveBackground() {
  useEffect(() => {
    const body = document.body;

    // Устанавливаем базовые стили для body (можно и в global.css)
    body.style.backgroundColor = "#111";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.transformOrigin = "50% 50%";
    body.style.transition = "background-image 0.3s ease, transform 0.2s ease";
    body.style.backgroundImage = `radial-gradient(circle at center, rgba(138, 43, 226, 0.2), transparent 70%)`;

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const analyser = audioCtx.createAnalyser();
        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyser);

        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        let smoothIntensity = 0;

        const animate = () => {
          requestAnimationFrame(animate);
          analyser.getByteFrequencyData(dataArray);

          const avg = dataArray.reduce((a, b) => a + b, 0) / bufferLength;
          const rawIntensity = Math.max(avg / 255, 0.05);

          // Сглаживание пульсации
          smoothIntensity = smoothIntensity * 0.9 + rawIntensity * 0.1;

          // Обновление фона и масштаба
          body.style.backgroundImage = `radial-gradient(circle at center, rgba(138, 43, 226, ${smoothIntensity}), transparent 70%)`;
          body.style.transform = `scale(${1 + smoothIntensity * 0.3})`;
        };

        animate();
      })
      .catch((err) => {
        console.error("🎙️ Микрофон не доступен:", err);
      });
  }, []);

  return null; // компонент ничего не рендерит, он просто запускает фон
}
