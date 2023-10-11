import {
  Autocomplete,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridCol,
  Space,
} from '@mantine/core';
import GoogleMapComp from './components/GoogleMap';

//* just sample location for this code test, production should use real life location
//* location also should be in async
const sampleLocation = [
  'Innocenter',
  'Hong Kong Science Park',
  'Hong Kong International Airport Terminal 1',
];

export default function Home() {
  return (
    <Container size={'xl'} py={16}>
      <Grid>
        <GridCol span={4}>
          <Flex direction={'column'} py={24} px={16}>
            <Autocomplete label='Starting location' data={sampleLocation} />
            <Space h={'xl'} />
            <Autocomplete label='Starting location' data={sampleLocation} />
            <Flex mt={32}>
              <Button mr={16}>Submit</Button>
              <Button variant='default'>Reset</Button>
            </Flex>
          </Flex>
        </GridCol>
        <GridCol span={8}>
          <Box w={'100%'} h={512}>
            <GoogleMapComp />
          </Box>
        </GridCol>
      </Grid>
    </Container>
  );
}
