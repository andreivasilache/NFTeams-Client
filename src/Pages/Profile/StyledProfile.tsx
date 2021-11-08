import styled from 'styled-components'

const StyledProfile = styled.div`
    padding: 0 30px;
    height: 100%;
    position: relative;
    display: flex;

    .profile{
        height: 100%;
        &__image-container{
            width: 50%;
            background-color: #008EBC;
            height: 100%;
            border-radius: 8px;
        }

        &__image{
            width: 100%;
            height: auto;
            max-width: 100%;
            border-radius: 8px;
        }

        &__name{
            font-weight: bold;
            font-size: 88px;
            line-height: 64px;
            position: absolute;
            top:30px;
            left:30%
        }

        &__detail{
            width: 40%;
            margin-top: 100px;
            padding:10px
        }

        &__badges{
            width: 10%;
            display: flex;
            flex-flow: column;
            align-items: center;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
        }

    }
`
export default StyledProfile