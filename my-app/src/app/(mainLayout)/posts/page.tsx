import {FC, PropsWithChildren} from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Posts",
};


interface IProps extends PropsWithChildren {

}

const PostPage: FC<IProps> = () => {
    return (
        <div>
            PostPage
        </div>
    );
};

export default PostPage;
            