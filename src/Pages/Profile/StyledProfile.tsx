import styled from 'styled-components';

const StyledProfile = styled.div`
  position: relative;
  padding: 0 30px;
  height: 100%;
  
  display: flex;
  justify-content: center;
`;

export const Avatar = styled.div`
    width: 50%;
    height: 100%;

    border-radius: 8px;
`

export const Info = styled.div`
    height: 100%;

    font-family: "SF Pro Display";
`

export const Name = styled.div`

    margin-top:8.42vh ;
    margin-bottom: 1.1vh;

    font-style: normal;
    font-weight: bold;
    font-size: 88px;
    line-height: 64px;
    
`
export const SubName = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;
`

export const Text = styled.div`
    margin-top: 7.6vh;

    display: flex;
    align-items: flex-start;
`

export const StyledBlock = styled.div`
    position: relative;
    margin-left: 35px;

    display: block;

    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
`

export const Paragraph = styled.div`
    margin-bottom: 7.4vh;
    width: 481px;
`

export const SmallParagraph = styled.div`
    width: 393px;
    text-align: right;
`

export const StylingElement = styled.img`
    position: absolute;
    right: 0px;
    bottom: -25px;
`

export const SkilsWrapper = styled.div`
    margin-top: 9.25vh;
    height: 14.81vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Skill = styled.div`
    width: calc(513px + 40px + 35px);

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BadgesWrapper = styled.div`
    height: 100%;

    display: flex;
    flex-flow: column;
    justify-content: center;
`

export const Badges = styled.div`
    height: calc(6*112.14px + 6 * 8.86px);
    padding-left: 44px;

    display: flex;
    flex-flow: column-reverse;
    align-items: center;
    justify-content: space-around;
`

export default StyledProfile;
