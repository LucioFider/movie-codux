import classNames from 'classnames';
import styles from './search.module.scss';

export interface SearchProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-searchs-and-templates
 */
export const Search = ({ className }: SearchProps) => {
    return <div className={classNames(styles.root, className)}>Search</div>;
};
