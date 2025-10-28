export default function ButtonSection(onClick, activeSection) {
  return (
    <button
      onClick={onClick}
      className={`w-2 h-9 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer group ${
        activeSection === "about" ? "bg-primary" : "bg-secondary hover:opacity-80"
      }`}
      aria-label="Go to About section"
    />
  );
}
