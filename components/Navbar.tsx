import {Box, Flex, Text, Stack, useDisclosure, Button} from '@chakra-ui/react'
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import React from 'react'
import Web3Modal from 'web3modal'
import {INFURA_ID} from '../constants'
import { InjectedConnector, FortmaticConnector, PortisConnector, WalletConnectConnector } from 'web3-react/dist/connectors'
import { AuthereumConnector } from '@web3-react/authereum-connector'
import Web3SignIn from './Web3SignIn'


export default function Navbar() {

    const {isOpen, onOpen, onClose} = useDisclosure()

    const handleToggle = () => (isOpen ? onClose() : onOpen())
    
    // let web3Modal : any

    // const providerOptions = {
    //     injected: {
    //         package: null
    //     },
    //     walletconnect: {
    //         package: WalletConnectConnector,
    //         options: {
    //             infuraId: INFURA_ID // required
    //         }
    //     },
    //     portis: {
    //         package: PortisConnector,
    //         options: {
    //             id: '47c91e55-8ecf-45f6-937d-9015bcf65b36'
    //         }
    //     },
    //     fortmatic: { 
    //         package: FortmaticConnector,
    //         options: {
    //           // test api key
    //           key: "pk_test_43C2B609E8D78730"
    //         }
    //     },
    //     authereum: {
    //         package: AuthereumConnector
    //     }
    // }

    // React.useEffect(() => {
    //     web3Modal = new Web3Modal({
    //         network: 'mainnet',
    //         cacheProvider: true,
    //         providerOptions
    //     })
    // })
    
    // const triggerWeb3Modal = (e: any) => {
    //     // let provider = web3Modal.connect()
    //     web3Modal.connect()
        
    //     console.log('web3Modal', web3Modal)

    // }

    // const provider = web3Modal.connect()

    return( 
        <Flex as='nav' h='120px' w='100%' bg='#1E2230' borderRadius='18px'
        align="center"
        justify="space-between"
        wrap="wrap"
        color='white'
        >
            <Flex h='100%' alignItems='center'>
                <Text fontSize='28px' color='white' ml='43px'>Liquity</Text>
            </Flex>
                
            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                { isOpen ? 
                    <CloseIcon color='white' mr='43px' fontSize='15px'/>
                :
                    <HamburgerIcon color='white' mr='43px' fontSize='25px'/>

                }
            </Box>

            <Stack
                direction={{base:'column', md:'row'}}
                display={{base: isOpen ? 'block' : 'none', md:'flex'}}
                width={{ base: "92%", md: "auto" }}
                height={{base: 'full', md:'100px'}}
                alignItems= 'center'
                //this keeps it centered on mobile but allowing "space-between" on Navbar//     
                mr={{ base:'auto', md: '43px' }} 
                ml={{base: 'auto', md: '0px'}}
                bg='#1E2230'
            >
                <Text fontSize='18px' textAlign='center'>Borrow</Text>
                <Text fontSize='18px' textAlign='center'>Deposit</Text>
                <Text fontSize='18px' textAlign='center'>Stake</Text>
                {/* <Button variant="outlined" onClick={triggerWeb3Modal}>Connect Wallet</Button> */}
                <Web3SignIn />
            </Stack>
        </Flex>
    )
}