'use client'

import { Box, Image, Text, VStack } from '@chakra-ui/react'

export default function AboutMe() {
  return (
    <Box position="relative" height="100vh" alignItems="center">
      <Image
        src="/iceland.jpg"
        alt="iceland"
        objectFit="cover" // Ensures the image covers the entire container
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-1}
      />
      <VStack>
        {/* Profile Picture */}
        <Image
          src="/profile.jpg" // Update with your profile picture
          transform="scale(1.5)"
          alt="Profile"
          objectFit="cover" // Ensures the image stays cropped and centered
          width="100%"
          height="100%"
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
          Insert bio
        </Text>
      </VStack>
    </Box>
  )
}
