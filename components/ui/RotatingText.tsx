export default function RotatingText({ text }: { text: string }) {
  const separator = text.lastIndexOf(" ");
  const prefix = separator === -1 ? "" : text.slice(0, separator + 1);
  const word = separator === -1 ? text : text.slice(separator + 1);

  return (
    <span className="rotating-text">
      <span className="sr-only">{text}</span>
      {prefix && <span aria-hidden="true">{prefix}</span>}
      <span className="rotation-word">
        <span aria-hidden="true" className="rotation-word-sizer">
          {word}
        </span>
        <span aria-hidden="true" className="rotation-word-track">
          <span className="rotation-word-face">{word}</span>
          <span className="rotation-word-face">{word}</span>
          <span className="rotation-word-face">{word}</span>
        </span>
      </span>
    </span>
  );
}
