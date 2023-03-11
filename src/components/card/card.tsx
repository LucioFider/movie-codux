import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
    movie: {
        id: string;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className, movie }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={movie.poster_path} className={styles.cardimg} />
            <div className={styles.detail}>
                <h1>{movie.title}</h1>
                <span className={styles.rating}>{movie.vote_average}</span>
                <p className={styles.desc}>{movie.overview.substring(0,120)}</p>
                <button className={styles.button}>+</button>
            </div>
        </div>
    );
};
