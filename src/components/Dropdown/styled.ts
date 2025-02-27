import styled from "styled-components";

interface SelectContainerstyledProps {
    width?: string
    height?: string
}

export const SelectContainer = styled.select<SelectContainerstyledProps>`
    color: #AEAEAE;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    border-color: white;
    text-wrap-mode: wrap;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`