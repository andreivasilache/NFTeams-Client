import styled from 'styled-components';

const StyledQuest = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 60px;
  .coins {
    width: 111px;

    font-weight: bold;
    font-size: 20px;
    line-height: 16px;
    margin-left: 20px;
    display: flex;
    align-items: baseline;
  }
  .questCheck {
    margin-left: 53.23px;
    display: flex;
    align-items: center;
  }
  .questCheck > img {
    cursor: pointer;
  }

  .join-quest {
    position: absolute;
    left: 232px;
    top: 36px;
    padding: 0px;

    color: #5f47d4;
    margin-top: 2rem;
    background-color: #7efacd;
  }

  .join-quest:hover {
    background-color: #7efacd;
  }
`;

export const QuestTitile = styled.div`
  position: absolute;
  top: 25px;
  left: 0px;

  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
`;

export const QuestDescription = styled.div`
  height: 42px;
  width: 300px;

  font-weight: bold;
  font-size: 12px;
  line-height: 16px;

  color: #e4e4e4;
`;

export const QuestParticipants = styled.div`
  position: absolute;
  top: -12px;
  left: 200px;

  font-weight: bold;
  font-size: 9px;
  line-height: 16px;

  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #586e89;
`;

export const QuestLog2 = styled.img`
  position: absolute;
  top: 49px;
  left: 302px;
`;

export const QuestText = styled.div`
  position: absolute;
  left: 473px;
  bottom: 0px;
  width: 200px;

  font-weight: bold;
  font-size: 18px;
  line-height: 16px;

  display: flex;
  justify-content: space-between;

  .buttonContainter {
    width: 55px;
    justify-content: space-between;
    display: flex;
  }
`;
export const StyledPrize = styled.div`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;

    color: #7efacd;
    width: 76.78px;
    margin-left: 82px;
  }
`;
export const QuestButton = styled.div`
  cursor: pointer;
`;
export default StyledQuest;
