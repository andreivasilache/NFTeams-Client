import { Grid } from '@mui/material';
import styled from 'styled-components';

const StyledQuests = styled.div`
  margin-top: 64px;

  font-family: 'SF Pro Display';
  font-style: normal;
  .questsText,
  .leadboardsText {
    position: absolute;
    height: 64px;
    top: -42px;
    left: 7px;
    right: 625px;

    font-weight: bold;
    font-size: 88px;
    line-height: 64px;
  }
  .questsText {
    color: #7efacd;
  }
  .leadboardsText {
    color: #6979f8;
  }

  .quests {
    &__filters {
      width: 223px;

      display: flex;
      justify-content: space-between;
      padding-bottom: 50px;
    }
    &__filter {
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      color: #686868;
      cursor: pointer;
      &--active {
        color: #7efacd;
        border-bottom: 1px solid #7efacd;
      }
    }
  }
`;

export const ItemGrid = styled(Grid)`
  position: relative;
`;

export const QuestsItem = styled(Grid)`
  overflow: scroll;
  // position: relative;
  padding: 65px 0px 0px 40px;

  border: 1px solid #7efacd;
`;

export const QuestPoints = styled.div`
  width: 165px;
  margin-bottom: 40px;
  margin-left: 35px;

  display: flex;
  justify-content: space-between;

  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
`;

export const QuestButton = styled.div`
  position: absolute;
  top: 17px;
  right: 0px;

  .buttonStyle {
    position: absolute;
    width: 107px;
    height: 26px;
    top: 3px;
    right: 73.15px;

    background: #dd56ff;
    border: 1px solid #dd56ff;
    box-sizing: border-box;
    box-shadow: 0px 3px 4px rgba(3, 46, 232, 0.21);
    cursor: pointer;
  }
`;

export const LeadboardsItem = styled(Grid)`
  overflow: scroll;
  padding: 43px 40px;

  border: 1px solid #6979f8;
`;

export const LeadboardsFilters = styled.div`
  width: 420px;
  margin-bottom: 47px;
  display: flex;
  justify-content: space-between;
`;
export default StyledQuests;
