import { Post } from "./components/Post.tsx";

const names: string[] = ["Alice", "Bob", "Charlie", "Dave", "Eve"];

const posts: string[] = [
  "Just had a great workout! Feeling energized and ready for the day.",
  "Enjoying a beautiful sunset. The colors are just breathtaking.",
  "Cooked a delicious meal today. It was a new recipe and it turned out great.",
  "Spending quality time with family. These moments are precious.",
  "Working on an exciting new project. Can't wait to share more details soon.",
];

function App() {
  return (
    <main>
      <Post author={names} body={posts} />
      <Post author={names} body={posts} />
      <Post author={names} body={posts} />
      <Post author={names} body={posts} />
    </main>
  );
}

export default App;
