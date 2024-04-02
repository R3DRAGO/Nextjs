import {FC, PropsWithChildren} from "react";
import {Header} from "@/app/(mainLayout)/components/Header";


interface IProps extends PropsWithChildren {

}

const Layout: FC<IProps> = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;
