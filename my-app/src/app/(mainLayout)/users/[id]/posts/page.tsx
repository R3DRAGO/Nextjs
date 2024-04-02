import {FC, PropsWithChildren} from "react";
import {userService} from "@/services/userService";
import {Posts} from "@/app/(mainLayout)/users/[id]/posts/components/Posts";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "UserPosts",
};

interface IProps extends PropsWithChildren {
params:{id:string}
}

const PostPageById: FC<IProps> = async ({params:{id}}) => {
    let {data} = await userService.getPosts(id);
    return (
        <div>
            <Posts posts={data}/>
        </div>
    );
};

export default PostPageById;
