import styles from './Icon.module.scss';

export type IconProps = {
  icon: string;
};

export default function Icon({ icon }: IconProps) {
  return (
    <div className={`${styles.icon} ${icon === 'suitsupply_logo' ? styles['width-auto'] : ''}`}>
      <i>{icon}</i>
    </div>
  );
}
