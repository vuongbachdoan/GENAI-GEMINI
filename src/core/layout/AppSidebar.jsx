import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Spacer, Text } from "@chakra-ui/react"
import { BiConversation } from "react-icons/bi";
import { LuTimer } from "react-icons/lu";

export const AppSidebar = () => {
    return (
        <Flex width='266px' flexDirection='column' paddingX={2} paddingTop={3} rowGap={3}>
            <Accordion width='100%' allowMultiple border={0}>
                <AccordionItem border={0}>
                    <h2>
                        <AccordionButton>
                            <Flex alignItems='center' columnGap={2}>
                                <LuTimer size='20' color='#E3E3E3'/>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Text fontSize='small' fontWeight='semibold' color='#E3E3E3'>Today</Text>
                                </Box>
                            </Flex>
                            <Spacer />
                            <AccordionIcon color='#E3E3E3'/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Flex alignItems='center' columnGap={2}>
                            <BiConversation size={20} color='#E3E3E3'/>
                            <Box as="span" flex='1' textAlign='left'>
                                <Text fontSize='small' fontWeight='semibold' color='#E3E3E3'>Tell me about EC2...</Text>
                            </Box>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    );
}