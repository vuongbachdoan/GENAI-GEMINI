import React from 'react';
import { Avatar, Box, Button, Flex, Image, Input, Link, List, ListItem, Text, Textarea, VStack, useColorModeValue } from '@chakra-ui/react';
import { AppLayout } from '../../core/layout/AppLayout';
import { AppSidebar } from '../../core/layout/AppSidebar';
import { RiSendPlaneFill } from "react-icons/ri";
import Bard from '../../assets/images/logo-bard.png';
import { runChat } from '../../core/services/apiGenAI';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import Markdown from 'react-markdown';

export const Home = () => {
    const bg = useColorModeValue('#FFF', 'gray.700');
    const [question, setQuestion] = React.useState('');
    const [historyMessages, setHistoryMessages] = React.useState([])
    const messageContainerRef = React.useRef(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isShiftPressed, setIsShiftPressed] = React.useState(false);
    const [isEnterPressed, setIsEnterPressed] = React.useState(false);

    React.useEffect(() => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [historyMessages]);


    const askQuestion = () => {
        setQuestion('');
        setIsLoading(true);
        setHistoryMessages([
            ...historyMessages,
            {
                owner: 'Bach Doan Vuong',
                content: question
            }
        ]);
        runChat(question)
            .then(
                (result) => {
                    const response = result.response;
                    console.log(response)
                    setHistoryMessages([
                        ...historyMessages,
                        {
                            owner: 'Bach Doan Vuong',
                            content: question
                        },
                        {
                            owner: 'Bard',
                            content: response.text(),
                            refs: response.candidates[0].citationMetadata?.citationSources ?? []
                        }
                    ]);
                    setIsLoading(false);
                }
            )
            .catch(() => {
                setIsLoading(false);
            })
    }

    return (
        <AppLayout
            components={
                <Flex
                    flex={1}
                    flexDirection='row'
                    columnGap={{ base: 0, lg: 3 }}
                    backgroundColor='#212121'
                >
                    <VStack
                        style={{
                            height: 'calc(100vh - 80px)',
                            overflowY: 'scroll',
                            overflowX: 'hidden',
                        }}
                        display={{ base: 'none', md: 'block' }}
                        className='scrollbar-hide'
                    >
                        <AppSidebar />
                    </VStack>

                    <VStack
                        flex={1}
                        style={{
                            height: 'calc(100vh - 80px)',
                            overflowY: 'scroll',
                            overflowX: 'hidden'
                        }}
                        className='scrollbar-hide'
                    >
                        <Flex
                            flexDirection='column'
                            backgroundColor='#101010'
                            margin={15}
                            borderRadius={15}
                            width='calc(100% - 30px)'
                            height='calc(100% - 30px)'
                            padding={15}
                            rowGap={15}
                        >
                            <Flex
                                ref={messageContainerRef}
                                flex={1}
                                flexDirection='column'
                                rowGap={5}
                                overflowY='scroll'
                                scrollBehavior='smooth'
                            >
                                {
                                    historyMessages.map((message) => {
                                        if (message?.owner === 'Bard') {
                                            return (
                                                <Flex columnGap={3}>
                                                    <Image src={Bard} width={35} height={35} />
                                                    <Text textAlign='left' fontSize='small' color='#e3e3e3'>
                                                        <Markdown components={ChakraUIRenderer()} children={message.content} skipHtml />
                                                        <List>
                                                            {
                                                                message.refs.map((ref) => (
                                                                    <ListItem>
                                                                        <Link color='palegreen' href={ref.uri}>{ref.uri} {ref.license ? `[${ref.license}]` : ''}</Link>
                                                                    </ListItem>
                                                                ))
                                                            }
                                                        </List>
                                                    </Text>
                                                </Flex>
                                            );
                                        }
                                        return (
                                            <Flex columnGap={3}>
                                                <Avatar width='35px' height='35px' />
                                                <Text textAlign='left' fontSize='small' color='#e3e3e3'>
                                                    <Markdown components={ChakraUIRenderer()} children={message.content} skipHtml />
                                                </Text>
                                            </Flex>
                                        );
                                    })
                                }
                            </Flex>

                            <Flex>
                                <Textarea
                                    value={question}
                                    onKeyDown={(e) => {
                                        if(e.key === 'Enter') {
                                            setIsEnterPressed(true)
                                        }
                                        if(e.key === 'Shift') {
                                            setIsShiftPressed(true)
                                        }
                                    }}
                                    onKeyUp={(e) => {
                                        if(e.key === 'Enter') {
                                            setIsEnterPressed(false)
                                        }
                                        if(e.key === 'Shift') {
                                            setIsShiftPressed(false)
                                        }
                                    }}
                                    onChange={(e) => {
                                        if(isEnterPressed && isShiftPressed) {
                                            setQuestion(question + '\n')
                                        } else if (isEnterPressed && !isShiftPressed) {
                                            askQuestion()
                                        } else {
                                            setQuestion(e.target.value)
                                        }
                                    }}
                                    placeholder="Enter content here"
                                    color="#e3e3e3"
                                    borderRadius={8}
                                    fontSize="small"
                                />

                                <Flex
                                    alignItems='center'
                                    justifyContent='center'
                                    width='40px'
                                    height='40px'
                                    cursor='pointer'
                                >
                                    <RiSendPlaneFill color='#e3e3e3' onClick={askQuestion} />
                                </Flex>
                            </Flex>
                        </Flex>
                    </VStack>
                </Flex>
            }
        />
    );
}