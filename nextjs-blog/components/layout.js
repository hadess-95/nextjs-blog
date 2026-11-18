import Link from 'next/link';
import styles from './layout.module.css';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <h1>Blog của Tuấn Tài</h1>
        ) : (
          <Link href="/">Blog của Tuấn Tài</Link>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <footer className={styles.footer}>
          <Link href="/">← Về trang chủ</Link>
        </footer>
      )}
    </div>
  );
}