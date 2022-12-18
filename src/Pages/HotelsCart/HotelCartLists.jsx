import { Box, Card, Heading, Icon ,Text } from '@chakra-ui/react';
import { MdNetworkWifi,} from "react-icons/md";

export const HotelCartLists = ({icon,head,list}) => {
    return <Card padding='20px' border='' marginLeft='40px' marginTop='20px' display='flex' gap='40px'>
            <Icon as={icon} boxSize={6} />
            <div>
                <Heading size='xs' textTransform='uppercase'>
                {head}
                </Heading>
                    <ul style={{listStyleType:'none'}}>
                        {
                            list.map((el,i)=>{
                                return <li key={i}>{el}</li>
                            })
                        }
                    </ul>
            </div>
        </Card>
}