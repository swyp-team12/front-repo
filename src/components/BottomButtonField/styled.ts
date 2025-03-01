import styled from "styled-components"

export const FixedBottomContainer = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: white;
  z-index: 10;
  margin-bottom: -16px;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.03);
`

// import styled from "styled-components"

// export const FixedBottomContainer = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 399px;
//   background-color: white;
//   z-index: 100;
//   box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.03);
// `
