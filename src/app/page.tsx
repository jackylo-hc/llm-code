import { Box, Container, Flex, Grid, GridCol, Space } from '@mantine/core';
import GoogleMapComp from './components/GoogleMap';
import ButtonRow from './components/ButtonRow';
import ErrorMessage from './components/Error';
import PathInfo from './components/PathInfo';
import InputField from './components/InputField';

export default function Home() {
  return (
    <Container size={'xl'} py={16}>
      <Grid>
        <GridCol span={{ xs: 12, md: 4 }}>
          <Flex direction={'column'} py={24} px={16}>
            <InputField />
            <Space h={'xl'} />
            <PathInfo />
            <Space h={'xl'} />
            <ButtonRow />
            <ErrorMessage />
          </Flex>
        </GridCol>
        <GridCol span={{ xs: 12, md: 8 }}>
          <Box w={'100%'} h={512}>
            <GoogleMapComp />
          </Box>
        </GridCol>
      </Grid>
    </Container>
  );
}
