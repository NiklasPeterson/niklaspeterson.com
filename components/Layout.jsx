import styled from 'styled-components';
import Aside from './Aside';

export default function Layout(props) {
    return (
        <>
        <ScLayout>
            <ScInnerContainer>
                {props.children}
            </ScInnerContainer>
        </ScLayout>
        <Aside image={"/images/niklas-peterson.jpg"} />
        </>
    )
}

const ScLayout = styled.main`
width: 50vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
overflow: auto;
padding-left: env(safe-area-inset-left);
padding-right: env(safe-area-inset-right);

@media (max-width: 812px) {
width: 100vw;
height: auto;
z-index: 1;
}
`;

const ScInnerContainer = styled.div`
padding: 48px;
max-width: 680px;
margin-top: auto;
margin-bottom: auto;
`;