import { DEFAULT_PATH, DEFAULT_URL } from "../../Constant";

function BackButton({ section }: { section?: string }) {
  const onSubRoute = window.location.pathname !== DEFAULT_PATH;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onSubRoute) {
      window.location.href = section ? DEFAULT_URL + "#" + section : DEFAULT_URL + "#tabla-de-contenido";
    } else {
      window.dispatchEvent(new CustomEvent('sectionChange', { detail: { section: section ?? "tabla-de-contenido" } }));
    }
  };
  return (
    <button className="fixed z-20 p-2 rounded-lg cursor-pointer top-2 right-5 bg-white/50 hover:scale-105" onClick={handleClick}>Volver</button>
  );
}

export default BackButton;