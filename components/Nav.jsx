import styled from 'styled-components'
import Link from 'next/link'

const Nav = (props) => {
    return (
        <ScNav>
            <ScNavItem>
                <Link href="/">
                <a>Home</a>
                </Link>
            </ScNavItem>
            <ScNavItem>
                <Link href="/blog">
                <a>Blog</a>
                </Link>
            </ScNavItem>
        </ScNav>
    )};

export default Nav;

const ScNav = styled.nav`
  display: flex;
`;

const ScNavItem = styled.div`
    margin-left: 8px;
    :first-child {
        margin-left:0;
    }

    a {
        border-bottom: 1px dotted var(--color-link);
        box-shadow: none;
        transition-duration: 0.5s;
        
        color: var(--color-link);
        text-decoration: none;
        cursor: pointer;

        :visited, :focus {
            color: var(--color-link);
        }

        :hover {
            box-shadow: none;
            border-bottom: 1px dotted var(--color-link-hover);
            transition-duration: 0.1s;

            color: var(--color-link-hover);
            text-decoration: none;
        }
    }
    
`;

