import { useEffect } from "react";

export default function MusicReactiveBackground() {
  useEffect(() => {
    const body = document.body;

    // Устанавливаем начальный фон
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

        const animate = () => {
          requestAnimationFrame(animate);
          analyser.getByteFrequencyData(dataArray);

          const avg = dataArray.reduce((a, b) => a + b, 0) / bufferLength;
          const intensity = Math.max(avg / 255, 0.05); // не ниже 0.05, чтобы видно было!

          body.style.backgroundImage = `radial-gradient(circle at center, rgba(138, 43, 226, ${intensity}), transparent 70%)`;
        };

        animate();
      })
      .catch((err) => {
        console.error("Микрофон не доступен:", err);
      });
  }, []);

  return null;
}
