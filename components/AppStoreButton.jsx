import styled from 'styled-components'

const AppStoreButton = (props) => <a href={props.url} rel="noreferrer" target="_blank"><ScAppStoreButton isMacAppStore={props.isMacAppStore} /></a>
export default AppStoreButton

const ScAppStoreButton = styled.div`
    --appStoreButton: url(/images/App_store-black.svg) no-repeat;
    --macAppStoreButton: url(/images/Mac_app_store-black.svg) no-repeat;
    
    @media (prefers-color-scheme: dark) {
        --appStoreButton: url(/images/App_store-white.svg) no-repeat;
        --macAppStoreButton: url(/images/Mac_app_store-white.svg) no-repeat;
    }

    display: block;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: var(${(props) => props.isMacAppStore ? '--macAppStoreButton' : '--appStoreButton'});
    height: 40px;
`