import {
    Box,
    Image,
} from '@chakra-ui/react';


const buildingsList = ({ item }) => {
    return (
        <div class="Container_grid">
            <div >
                <div class="card">
                    <Box boxSize='250px'>
                        <Image
                            boxSize='250px'
                            height='250px'
                            objectFit='cover'
                            objectPosition="center"
                            src={item.imagen}
                        />
                    </Box>
                    <div class="card-content">
                        <div class="card-info">
                            <h2> {item.title}</h2>
                            <p > {item.id} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default buildingsList