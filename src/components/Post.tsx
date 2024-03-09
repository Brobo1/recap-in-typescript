const names: string[] = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
const posts: string[] = [
  "Just had a great workout! Feeling energized and ready for the day.",
  "Enjoying a beautiful sunset. The colors are just breathtaking.",
  "Cooked a delicious meal today. It was a new recipe and it turned out great.",
  "Spending quality time with family. These moments are precious.",
  "Working on an exciting new project. Can't wait to share more details soon.",
];

export function Post() {
  const chosenName: number = Math.floor(Math.random() * names.length);

  return (
    <div>
      <p>{names[chosenName]}</p>
      <p>{posts[chosenName]}</p>
    </div>
  );
}
