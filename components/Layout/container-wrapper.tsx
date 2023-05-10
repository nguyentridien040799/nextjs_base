import { FC, ReactNode } from 'react';
import { HeaderHomePage } from './Header/HeaderHomePage'
import { FooterHomePage } from './Footer/Footer'

interface Props {
    children: ReactNode;
}

const ContainerWrapper: FC<Props> = ({ children }) => {
    return (
        <div>
            <HeaderHomePage/>
            <p>Đã được wrapper</p>
            {children}
            <FooterHomePage/>
        </div>
    )
};

export default ContainerWrapper;
