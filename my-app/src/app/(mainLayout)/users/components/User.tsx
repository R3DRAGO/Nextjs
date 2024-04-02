'use client'
import {FC, PropsWithChildren, useState} from "react";
import {IUser} from "@/interfaces/userInterface";
import Link from "next/link";



interface IProps extends PropsWithChildren {
user:IUser
}

const User: FC<IProps> = ({user}) => {
    let {id,name,username,email} = user;
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <Link href={`{users/${id}/posts`}>Posts</Link>
        </div>
    );
};

export default User;
