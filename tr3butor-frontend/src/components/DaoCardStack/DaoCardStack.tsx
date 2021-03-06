import React from 'react'
import { ScDaoCardAdd, ScDaoCardStack } from './styled'
import { DaoCard } from '../DaoCard/DaoCard'
import ScrollContainer from 'react-indiana-drag-scroll'
import { DaoParams } from '../../types/dao'
import { randomItemFromArray } from '../../utilits/common'
import { DecorBlocks } from '../DecorBlocks/DecorBlocks'

interface DaoCardStackProps {
  type?: 'vertical' | 'horizontal';
  data: DaoParams[];
}

export const DaoCardStack: React.FC<DaoCardStackProps> = ({
                                                            type = 'vertical',
                                                            data,
                                                            ...props
                                                          }) => {
  if (!data) return <></>
  return (
    <ScDaoCardStack className={type}>
      <ScrollContainer
        vertical={false}
        className={[
          'container',
          type === 'horizontal' ? 'scroll-container' : ''
        ].join(' ')}
      >
        {data.map(({ name, description, avatar, color, id }, key) => (
          <DaoCard
            link={`/dao/${id}`}
            key={key}
            title={name}
            text={description}
            imageUrl={avatar}
            backgroundColor={color}
            scenario={randomItemFromArray(['first', 'second', 'third'])}
          />
        ))}
        <ScDaoCardAdd>
          <DecorBlocks color={'#1A241F'} zIndex={1} scenario={'first'} />
          <a target={'_blank'} href={'https://tr3butor.com/dao.html'} rel="noreferrer">
            <i>+</i>
            <h4>Add your DAO</h4>
            <p>Fill the typeform to adding your DAO at tr3butor</p>
          </a>
        </ScDaoCardAdd>
      </ScrollContainer>
    </ScDaoCardStack>
  )
}
