import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer based in Japan!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jonathan Hernandez
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Jonathan.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Jonathan is a DevOps and a Full-Stack Developer based in Dallas with a
          passion for building digital services and websites. He has a knack
          for all things SDLC, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          traveling in Mexico. Currently, he is searching for new opportunities 
          in both DevOps Engineering or Full-Stack Development. {' '}
          <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
            Inkdrop
          </Link>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/devaslife"
            passHref
            target="_blank"
          >
            Dev as Life
          </Link>
          &quot; has more than 100k subscribers.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>May 2021 - August 2021</BioYear>
          Served as a Research Assistant at the University of Alabama, conducting research on hearing and healthcare accessibility.
        </BioSection>
        <BioSection>
          <BioYear>August 2021 - February 2022</BioYear>
          Worked as a Space Instrumentation Student Engineer at Southwest Research Institute, contributing to design and hardware assembly.
        </BioSection>
        <BioSection>
          <BioYear>November 2021 - November 2022</BioYear>
          Joined Elbit Systems of America as a Software Systems Engineer, focusing on system requirements specifications and software configuration.
        </BioSection>
        <BioSection>
          <BioYear>December 2022 - Present</BioYear>
          Became a DevOps Engineer at Options Clearing Company, enhancing third-party tool support and streamlining automation processes.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Graduated with a Bachelor's degree in Mechanical Engineering and Spanish.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Began a Master's program.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/jhernandez165" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
