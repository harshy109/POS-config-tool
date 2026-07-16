export function highlightText(text, searchTerm) {
  if (!searchTerm) return text;

  const index = text.toLowerCase().indexOf(searchTerm.toLowerCase());

  if (index === -1) return text;

  return (
    <>
      {text.substring(0, index)}
      <mark>
        {text.substring(index, index + searchTerm.length)}
      </mark>
      {text.substring(index + searchTerm.length)}
    </>
  );
}