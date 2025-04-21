import { useEffect, useRef } from "react";
import styles from "./music-anim.module.scss"
export default function MusicReactiveBackground() {
    const circleRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const circle = circleRef.current;

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
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
        const scale = 1 + avg / 150;
        if (circle) {
          circle.style.transform = `scale(${scale})`;
          circle.style.opacity = `${Math.min(scale / 1.5, 1)}`;
        }
      };

      animate();
    }).catch((err) => {
      console.error("Микрофон не доступен:", err);
    });
  }, []);

  return (
    <div className={styles.musicBg}>
  <div ref={circleRef} className={styles.musicCircle} />
  <div className={styles.musicContent}>
    <h1>Сайт чувствует ритм. Учись под свой бит 🎧</h1>
  </div>
</div>
  );
}
