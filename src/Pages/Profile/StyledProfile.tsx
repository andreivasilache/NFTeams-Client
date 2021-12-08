import { Popup } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledProfile = styled.div`
  position: relative;
  padding: 0 30px;
  height: calc(100% - 10px);

  display: flex;
  justify-content: center;
`;

export const Avatar = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  border-radius: 8px;
  background-color: #07090c;
  display: flex;
  align-items: center;

  .avatar-podium {
    height: 991px;
    margin-top: 58px;
    margin-left: -187px;
    position: absolute;
  }

  .avatar {
    width: 340px;
    height: 600px;
    position: absolute;
    left: 155px;
    bottom: 80px;
  }
`;

export const Info = styled.div`
  height: 100%;
  width: 620px;
  z-index:1;

  font-family: 'SF Pro Display';
`;

export const Name = styled.div`
  margin-top: 6.4vh;
  margin-bottom: 1.1vh;

  font-style: normal;
  font-weight: bold;
  font-size: 65px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 64px;
  max-width: 615px;
  height: 85px;
`;
export const SubName = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 40px;
`;

export const Text = styled.div`
  margin-top: 7.6vh;

  display: flex;
  align-items: flex-start;
`;

export const StyledBlock = styled.div`
  position: relative;
  margin-left: 35px;

  display: block;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
`;

export const Paragraph = styled.div`
  margin-bottom: 7.4vh;
  height: 250px;
  overflow: auto;
  width: 481px;
`;

export const SmallParagraph = styled.div`
  width: 393px;
  text-align: right;
`;

export const StylingElement = styled.img`
  position: absolute;
  right: 0px;
  bottom: -25px;
`;

export const SkilsWrapper = styled.div`
  margin-top: 9.25vh;
  height: 14.81vh;
  width: 115px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Skill = styled.div`
  width: calc(513px + 40px + 35px);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BadgesWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-flow: column;
  justify-content: center;
`;

export const Badges = styled.div`
  height: 700px;
  padding-left: 44px;

  display: flex;
  flex-flow: column-reverse;
  align-items: center;
  justify-content: space-around;
  overflow-y: auto;
  padding-bottom: 90px;

  .badge {
    width: 112px;
    height: 112px;
    border: 1px solid #6979f8;
    border-radius: 8px;
    margin-top: 10px;
  }
`;

export const StyledPopup = styled(Popup)`
  font-family: 'SF Pro Display';
  font-size: 20px;
  background-color: #221e1e;
  color: #7efacd;
  margin-left: 1rem;
  padding: 1rem;
  border-radius: 8px;
`;

export default StyledProfile;
