import {
    Button,
    ButtonGroup,
    Divider,
    Flex,
    IconButton,
    Box,
    Image,
    Link
} from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";


const Layout = ({ children }) => {

    return (
        <Flex id="MenuBarra">
            <Flex paddingLeft="0px" pt="10px">
                <Box boxSize='150px' marginLeft="px">
                    <Image src='https://www.uach.cl/uach/_file/logo_uach-614a369aa9528.png' blockSize="76%" paddingBottom="25px" />
                </Box>
            </Flex>
            <Flex direction="row" padding="30px" paddingLeft="400px">
                <ButtonGroup gap="20">
                    <Link href="/inicio">
                        <Button background="none" >Inicio</Button>
                    </Link>
                    <Link href="/buildings">
                        <Button background="none" >Edificios</Button>
                    </Link>
                    <Link href="/page_map">
                        <Button background="none" >Mapa</Button>
                    </Link>
                    <Link href="/Buscador">
                        <Button background="none" >Buscar</Button>
                    </Link>
                </ButtonGroup>
            </Flex>
            <Divider orientation="vertical" marginLeft="230px" />
            <Link href="https://github.com/Lagartin1/INFO104G6-1" isExternal marginTop="30px" marginLeft="33px">
                <IconButton background="none" icon={<FiGithub />}></IconButton>
            </Link>
        </Flex>
    )
}
export default Layout