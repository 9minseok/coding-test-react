import styles from './UserProfile.module.css';

interface User {
  id: number;
  name: string;
  username: string;
  bio: string;
  avatarUrl: string;
}

interface Props {
  user: User;
}

export const UserInfo = ({user} : Props) => {
  return (
    <section className={styles.userInfoSection}>
      <h1 className={styles.name}>{user.name}</h1>
      <p className={styles.bio}>{user.bio}</p>
    </section>
  )
}