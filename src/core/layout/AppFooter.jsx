import { Flex, Text } from "@chakra-ui/react";

export const AppFooter = () => {
    return (
        <>
            <Flex height='80px' justifyContent='center' alignItems='center' backgroundColor='#212121'>
                <Text color='white' fontSize='small'>Copyright @2024 Rapify Cloud</Text>
            </Flex>
        </>
    );
}