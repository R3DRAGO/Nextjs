import {PropsWithChildren} from "react";
import {IPost} from "@/interfaces/postInterface";

interface IProps extends PropsWithChildren {
    post: IPost
}

const Post = () => {
    return (
        <div>
            Post
        </div>
    );
};

export {Post};
