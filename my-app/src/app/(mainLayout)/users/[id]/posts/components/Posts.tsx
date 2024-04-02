import {PropsWithChildren} from "react";
import {IPost} from "@/interfaces/postInterface";

interface IProps extends PropsWithChildren {
    posts: IPost[]
}

const Posts = () => {
    return (
        <div>
            Posts
        </div>
    );
};

export {Posts};
