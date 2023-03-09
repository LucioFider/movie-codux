import classNames from 'classnames';
import styles from './menu.module.scss';

export interface MenuProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    className={styles.logoimg}
                />
                <span className={styles.logotext}>SelloMovie</span>
            </div>
        </div>
    );
};
