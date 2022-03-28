import React, { useCallback } from 'react'
import { Heading, Box, Flex, Button } from '@chakra-ui/react'
import { InfoMessage } from '../InfoMessage'
import { useStabilityView } from './context/StabilityViewContext'
import { RemainingLQTY } from './RemainingLQTY'
import { Yield } from './Yield'
import { CardBase } from 'components/Layout/CardBase'

export const NoDeposit: React.FC = () => {
    const { dispatchEvent } = useStabilityView()

    const handleOpenTrove = useCallback(() => {
        dispatchEvent('DEPOSIT_PRESSED')
    }, [dispatchEvent])

    return (
        <CardBase>
            <Heading>
                Stability Pool
                <Flex sx={{ justifyContent: 'flex-end' }}>
                    <RemainingLQTY />
                </Flex>
            </Heading>
            <Box sx={{ p: [2, 3] }}>
                <InfoMessage title='You have no LUSD in the Stability Pool.'>
                    You can earn ETH and LQTY rewards by depositing LUSD.
                </InfoMessage>

                <Flex variant='layout.actions'>
                    <Flex
                        sx={{
                            justifyContent: 'flex-start',
                            flex: 1,
                            alignItems: 'center',
                        }}
                    >
                        <Yield />
                    </Flex>
                </Flex>
                <Flex>
                    <Button variant='mainPurple' onClick={handleOpenTrove}>
                        Deposit
                    </Button>
                </Flex>
            </Box>
        </CardBase>
    )
}
