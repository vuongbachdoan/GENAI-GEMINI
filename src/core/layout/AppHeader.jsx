import { Avatar, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import Logo from '../../assets/images/logo-gemini.jpeg';
import Bard from '../../assets/images/logo-bard.png';

export const AppHeader = () => {
    return (
        <>
            <Flex paddingX={3} height='80px' background='#212121' alignItems='center'>
                <Image src={Logo} height='40px' borderRadius={15}/>
                <Spacer />
                <Flex
                    columnGap={5}
                    alignItems='center'
                >
                    <Flex columnGap={3} padding={3} backgroundColor='#0B2136' borderRadius='30px' height='30px' flexDirection='row' alignItems='center'>
                        <Image src={Bard} height='20px' borderRadius={15}/>
                        <Text fontSize='small' color='white'>10 tokens</Text>
                    </Flex>

                    <Flex
                        alignItems='center'
                        flexDirection='row'
                        columnGap={3}
                    >
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' width='35px' height='35px'/>
                        <Flex
                            flexDirection='column'
                            justifyContent='flex-start'
                        >
                            <Text color='white' textAlign='left' fontSize='small' fontWeight='semibold'>Warior Tran</Text>
                            <Text color='white' textAlign='left' fontSize='small'>Logout</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}