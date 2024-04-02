import {FC, PropsWithChildren} from "react";
import {IUser} from "@/interfaces/userInterface";
import User from "@/app/(mainLayout)/users/components/User";


interface IProps extends PropsWithChildren {
    users: IUser[]
}

const Users: FC<IProps> =  ({users}) => {
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;
