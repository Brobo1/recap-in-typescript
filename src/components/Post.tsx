const names: string[] = ["Alice", "Bob", "Charlie", "Dave", "Eve"];

export function Post() {
  const chosenName: number = Math.floor(Math.random() * names.length);

  return (
    <div>
      <p>{names[chosenName]}</p>
      <p>Reacccttooo is Coolllio</p>
      <p>{chosenName}</p>
    </div>
  );
}
