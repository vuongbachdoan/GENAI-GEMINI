
import { Box, Flex, VStack } from "@chakra-ui/react";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";

export const AppLayout = ({components = []}) => {
    return (
        <VStack
            width='100%'
            height='100%'
        >
            <Flex
                flexDirection='column'
                width='100%'
                height='100vh'
                overflow='hidden'
                position='fixed'
                top={0}
                left={0}
            >
                <AppHeader/>
                {components}
            </Flex>
        </VStack>
    );
}