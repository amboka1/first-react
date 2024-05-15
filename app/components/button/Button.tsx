import Link from "next/link";
import styles from "./button.module.scss"
type Props = {
    title: string;
    className?: string;
    disabled?: boolean;
    mode?: 'fill' | 'outline';
    icon?: boolean;
}
export default (props: Props) => {

    const classes = [styles.container, props.className]

    if(props.mode == 'outline') {
        classes.push(styles.outline)
    } 
    else {
        classes.push(styles.fill)
    }

    return (
        <Link href="/amboka">
            <button disabled={props.disabled} className={classes.join(' ')}>
                {props.icon && 'X'}
                {props.title}
            </button>
        </Link>
    )
}