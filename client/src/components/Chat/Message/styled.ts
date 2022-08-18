import styled from 'styled-components';

export const WrapperMessage = styled.div<{ isLeft: boolean }>`
    position: relative;
    width: fit-content;
    max-width: 65%;
    margin: 0px 18px 8px 16px;
    padding: 8px 8px 4px 8px;
    align-self: ${(props) => (props.isLeft ? 'start' : 'end')};
    background: ${(props) => (props.isLeft ? '#FFFFFF' : '#cbd4e3')};
    border-radius: 10px;
    word-break: break-word;

    &:first-child {
        margin-top: auto;
    }
`;
export const TextWrapper = styled.div`
    display: flex;
`;
export const Text = styled.div`
    font-family: 'Miriam Libre';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;
export const Info = styled.div`
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        margin-top: 2px;
    }
`;
export const Time = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #797979;
    @media (max-width: 768px) {
        font-size: 10px;
    }
`;
export const WrapperLoadingIcon = styled.div`
    position: absolute;
    display: flex;
    right: -16px;
    bottom: 4px;
`;

export const WrapperRebootError = styled.div`
    margin: -4px 16px 6px 0px;
    padding: 3px;
    display: flex;
    justify-content: end;
    align-items: center;
    align-self: flex-end;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        background: #daeddc;
    }
`;
export const TextReboot = styled.div`
    margin-left: 4px;
    padding-top: 2px;
    font-family: 'Macondo';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #4a5875;
`;

export const ImgWrapper = styled.div``;
export const Img = styled.img`
    height: auto;
    max-width: 100%;
`;
