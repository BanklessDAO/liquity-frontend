import { 
Box, Text, Flex, Stack, Spacer
} from "@chakra-ui/react";
import Link from 'next/link'

export default function Footer() {

    return (
        <Box borderRadius='18px' height='150px'  bg='#1E2230' mt='10px' mb='1px' color='white' pt='50' pl='5%' pr='5%'>
            <Flex>
                <Text font='30px' fontWeight='800'>© Bankless Loans</Text>
                <Spacer/>
                {/* TODO: Need to work on those two pages to get links working */}
                <Stack direction={['column', 'row']} spacing='35px'>
                    <Link href='/'>Terms of use</Link>
                    <Link href='/' >Privacy Policy</Link>
                </Stack>
            </Flex>
        </Box>        
    );
}