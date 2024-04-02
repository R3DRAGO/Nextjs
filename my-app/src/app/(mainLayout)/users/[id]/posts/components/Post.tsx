import {FC, PropsWithChildren} from "react";
import {IPost} from "@/interfaces/postInterface";

interface IProps extends PropsWithChildren {
    post: IPost
}

const Post: FC<IProps> = ({post}) => {
    let {id,userId,title,body} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Post};
