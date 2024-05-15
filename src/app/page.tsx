import styles from './page.module.scss';
import { Hero } from './sections';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
