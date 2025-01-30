'use client'

import { Box, Container, Image, Text, VStack } from '@chakra-ui/react'

export default function AboutMe() {
  return (
    <Box
      position="relative"
      height="100vh"
      backgroundImage="url('/background.jpg')" // Update with your background image
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container centerContent>
        <VStack>
          {/* Profile Picture */}
          <Image
            src="/profile.jpg" // Update with your profile picture
            alt="Profile"
            borderRadius="full"
            boxSize="150px"
            border="4px solid white"
            shadow="lg"
          />

          {/* Name */}
          <Text fontSize="3xl" fontWeight="bold" color="white">
            Noah Libeskind
          </Text>

          {/* Bio */}
          <Text fontSize="lg" textAlign="center" color="white" maxW="500px">
            Full-stack engineer passionate about building impactful products.
            Based in San Francisco, always exploring new technologies,
            restaurants, and trails.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
