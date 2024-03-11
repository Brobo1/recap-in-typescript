import styles from "./Post.module.css";

type PostProps = {
  author: string[];
  body: string[];
};

export function Post({ author, body }: PostProps) {
  const chosenName: number = Math.floor(Math.random() * author.length);

  return (
    <div className={styles.post}>
      <p className={styles.author}>{author[chosenName]}</p>
      <p className={styles.text}>{body[chosenName]}</p>
    </div>
  );
}
