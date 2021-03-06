import styled from 'styled-components'
import { colors } from '../../utilits/Colors'
import { device } from '../../utilits/MediaQuery'

interface Props {
  color?: string;
}

export const ScDaoHeader = styled.div<Props>`
  background: ${(props) => props.color};
  position: relative;
  padding-bottom: 40px;
  margin: -152px calc(-100vw / 2 + 920px / 2) 40px;
  padding-top: 150px;
  @media (${device.tablet}) {
    padding-left: 20px;
    margin-left: -20px;
    margin-right: -40px;
    padding-right: 40px;
    padding-top: 183px;
    margin-top: -185px;
  }

  .container {
    position: relative;
    width: 920px;
    margin: 0 auto;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 100px;

    &.social {
      justify-content: space-between;
      align-items: center;
    }

    @media (${device.tablet}) {
      width: 100%;
    }

    .info {
      width: 50%;

      .top {
        flex-wrap: nowrap;
        align-items: flex-start;
        @media (${device.tablet}) {
          flex-wrap: wrap;
        }
      }

      @media (${device.tablet}) {
        width: 100%;
      }
      position: relative;

      img {
        margin-right: 20px;
        height: 120px;
        width: 120px;
        border-radius: 60px;

        @media (${device.tablet}) {
          width: 60vw;
          height: 60vw;
          border-radius: 260px;
          margin-bottom: 20px;
        }
      }

      h3 {
        font-weight: 800;
        font-size: 54px;
        line-height: 60px;
      }

      span {
        font-size: 16px;
        font-family: "JetBrains Mono", monospace;
        line-height: 20px;
      }

      ul {
        list-style: none;

        li {
          display: inline-block;
          font-weight: 300;
          font-size: 16px;
          line-height: 20px;
          color: rgba(255, 255, 255, 0.5);
          margin-right: 20px;
        }
      }

    }

    .buttons {
      order: 2;
      margin-left: 140px;
      margin-top: 30px;
      @media (${device.tablet}) {
        order: 3;
        margin: 0 auto;
      }

      button {
        margin-right: 10px;

        &:hover {
          border-color: ${colors.activeColor} !important;
        }
      }
    }

    .statistics {
      order: 3;
      @media (${device.tablet}) {
        width: 100%;
        order: 2;
      }

      .tab {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        @media (${device.tablet}) {
          justify-content: flex-end;
        }
        gap: 46px;

        > div {
          width: 88px;
          position: relative;
          text-align: right;

          span {
            font-weight: 200;
            font-size: 18px;
            text-align: right;
          }

          p {
            font-weight: 200;
            font-size: 24px;
            text-align: right;
          }

          img {
            border: 1px solid #f78318;
            border-radius: 30px;
            height: 30px;
            width: 30px;
            margin-left: -10px;

            &:first-child {
              margin-left: 0;
            }
          }

          i {
            background-color: white;
            display: inline-block;
            text-align: center;
            border-radius: 30px;
            margin-left: -10px;
            vertical-align: 11px;
            height: 30px;
            width: 30px;
            color: ${colors.dark};
            font-size: 10px;
            font-weight: bold;
            cursor: pointer;
          }
        }
      }
    }
  }
`
