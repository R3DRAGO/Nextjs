import Link from "next/link";
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <Link href={'/posts'}>Posts</Link>
            <Link href={'/users'}>Users</Link>
        </div>
    );
};

export {Header};