import { Box, Flex } from "@chakra-ui/react";
import {
    Image,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from '@chakra-ui/react'


const MapUI = () => {
    return (
        <div class="mapUi">
            <Flex>
                <Box >
                    <Image src='https://www.acusticauach.cl/wp-content/uploads/2012/10/Campus_Miraflores.jpg'
                        paddingTop="70px"
                        paddingBottom="150px"
                        paddingLeft="70px"
                    />
                </Box>
                <Flex px="200px" py="100px">
                    <div>
                        <h2>Edificios</h2>
                        <div>
                            <Box paddingTop="20px">
                                <Accordion allowToggle border="1px" w="300px" borderColor="green">
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    Edificio 10000
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            aqui se muestran las Salas
                                            del edicios
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    Edificio 9000
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            aqui se muestran las Salas
                                            del edicios
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    Edificio 8000
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            aqui se muestran las Salas
                                            del edicios
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Box>
                        </div>
                    </div>
                </Flex>
            </Flex>
        </div>
    );
}
export default MapUI;