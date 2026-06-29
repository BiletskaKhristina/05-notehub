interface Props {
  onSearch: (value: string) => void;
}

export default function SearchBox({ onSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Search notes"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}