const HighlightedText = ({ text, highlight }) => {
  if (!highlight) return <span>{text}</span>;

  const regex = new RegExp(`(${highlight})`, "gi"); // case-insensitive match
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="text-[#7480FF] font-bold">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

export default HighlightedText;
