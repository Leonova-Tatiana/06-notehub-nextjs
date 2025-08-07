"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Не вдалося завантажити дані 😢</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Спробувати ще раз</button>
    </div>
  );
}
