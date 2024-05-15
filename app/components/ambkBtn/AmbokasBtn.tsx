import styles from './amboka.module.scss'
type Props = {
    title: string;
    icon?: boolean;
    size?: 'big' | 'small';
    disabled?: boolean;
    mode?: 'fill' | 'outline';
    userIsRegistred?: string;
}
export default (props: Props) => {

        const classes = [styles.container]

    if(props.size == 'big') {
        classes.push(styles.bigFont)
    } else if(props.size == 'small') {
        classes.push(styles.smallFont)
    } else {
        classes.push(styles.mediumFont)
    }



    if(props.userIsRegistred) {
        classes.push('withNickname')
    } 
    return (
        <button 
            disabled={props.disabled} 
            className={classes.join(' ')}>
                {props.icon && 'X'}
             {props.userIsRegistred ? props.userIsRegistred : props.title}
        </button>
    )
}