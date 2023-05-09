import styles from './VideoList.module.css';

const VideoList = ({title , children}) => (
    <div className={`${styles.wrapper} ${styles.margin}`}>
        <h2>{title}</h2>
        {children || <p>No hay videos</p>}
    </div>
);

export default VideoList;