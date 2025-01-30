'use client'

import { Box, Flex } from '@chakra-ui/react'
import AboutMe from './components/AboutMeSection/aboutMe'
import { useColorMode } from '@/components/ui/color-mode'
import { useEffect } from 'react'

export default function LandingPage() {
  const { setColorMode } = useColorMode()

  useEffect(() => {
    setColorMode('light')
  }, [setColorMode])

  return (
    <Flex justifyContent="space-between" flexDir="row">
      <Box width="20%"></Box>
      <AboutMe />
      <Box width="20%"></Box>
    </Flex>
  )
}
