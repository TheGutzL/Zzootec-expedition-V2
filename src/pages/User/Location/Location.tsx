import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { TimerIcon } from "lucide-react";

function Location() {
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Container
      maxW="container.lg"
      py={8}
      px={4}
      bg={bgColor}
      borderRadius="xl"
      boxShadow="2xl"
    >
      <VStack spacing={5} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" color="teal.400">
          Ubícanos
        </Heading>
        <Box bg="teal.50" p={5} borderRadius="lg" boxShadow="md">
  <Text fontSize="2xl" fontWeight="bold" letterSpacing="wider" textAlign="center" color={textColor} textShadow="1px 1px 2px rgba(0,0,0,0.5)">
    Encuentra nuestra ubicación en el mapa a continuación.
  </Text>
</Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius={"2xl"}
          height="10vh"
          width="52vw"
        >
          <TimerIcon>  </TimerIcon>
          <Text marginLeft={"2"} fontSize="2xl" fontWeight="bold" color="#4A5568">
          Horario de Atencion
          </Text>
        </Box>
        <Box
          display="flex"
          fontSize="2xl"
          fontWeight="semibold"
          letterSpacing="wide"
          justifyContent="center"
          alignItems="center"
          color={textColor}
          textShadow="1px 1px 2px gray"
          marginBottom={"5"}
        >
          Peru-Ica, Av Ayabaca 777, Zzootec.Ica
        </Box>
        <Box
          display="flex"
          fontSize="2xl"
          fontWeight="semibold"
          letterSpacing="wide"
          justifyContent="center"
          alignItems="center"
          color={textColor}
          textShadow="1px 1px 2px gray"
          marginBottom={"5"}
        >
          L-S 7:00 am a 9:00 pm | Dom 8:00 am a 8:00 pm
        </Box>{" "}
        <Box
          as="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627.1835803061936!2d-75.72839269116074!3d-14.070292374676631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e3e947ae07b5%3A0xeb1efbf00881df9a!2sZzootec!5e0!3m2!1ses-419!2spe!4v1719795325266!5m2!1ses-419!2spe"
          width="100%"
          height="450"
          frameBorder="0"
          borderRadius="md"
          boxShadow="base"
          border="none"
          marginBottom={"5"}
          _hover={{
            boxShadow: "2xl",
          }}
        />
      </VStack>
      <div className="flex justify-center items-center my-12 "><Button bg="teal.50"><Text fontSize={"xl"} fontWeight="bold" letterSpacing="wider" textAlign="center" color={textColor} textShadow="1px 1px 2px rgba(0,0,0,0.5)">VISUALIZANOS EN GOOGLE MAPS</Text></Button></div>
    </Container>
  );
}

export default Location;
