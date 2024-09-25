import { highlightedText } from "./highlight-util.css";

export const highlightText = (
  text: string,
  query: string
): JSX.Element | string => {
  if (!text || !query) return text || "";

  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={index} className={highlightedText}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};
