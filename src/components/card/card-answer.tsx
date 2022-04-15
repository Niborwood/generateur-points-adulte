interface Answer {
  children: any, 
  checked?: boolean
}

export default function Answer({ children, checked }:Answer) {
  return (
    <button className="px-6 py-4 border-4 rounded-full border-stone-200">
      <p>{checked && '✅'} {children}</p>
    </button>
  );
}
