import styled from 'styled-components'

const StyledCardHeader = styled.div`
      display: flex;
      justify-content: space-between;
      font-size: 14px;

    .header{
        &__title {
          font-weight: 700;
          color: var(--theming-font-color);
          letter-spacing: 0.0075em;
          text-transform: uppercase;
        }
    
        &__view-more {
          font-weight: 600;
          color: var(--theming-font-color-secondary);
          letter-spacing: 0.5px;
        }
    }
`

export default StyledCardHeader