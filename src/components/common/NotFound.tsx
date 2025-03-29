export default function NotFound({name}: {name?: string}) {
  return <div id={name}><h1>Page Not Found - {name}</h1></div>;
}