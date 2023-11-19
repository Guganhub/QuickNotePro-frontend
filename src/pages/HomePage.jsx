import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { NavBar } from "../components/HomePage/NavBar";
import note1 from "../assets/note1.png";

export default function HomePage() {
  return (
    <Box padding={8}>
      <Image position={"absolute"} right={0} w={500} src={note1} />
      <Heading
        mt={16}
        // position={"absolute"}
        // right={240}
        textAlign={"start"}
        color={"blue"}
      >
        NoteSync:Your Digital NoteBook
      </Heading>

      <Text mt={10} maxW={"60%"} maxH={'80%'} textAlign={"justify"}>
        Introducing QuickNote Pro, a cutting-edge notes app designed to elevate your
        digital note-taking experience. QuickNotePro seamlessly combines simplicity
        with robust features to empower users in capturing, organizing, and
        accessing information effortlessly. Create and edit notes with intuitive
        ease, while enjoying the flexibility of categorization and tagging for
        personalized organization. Sync your notes across devices with
        QuickNotePro's seamless integration, ensuring your ideas are always at your
        fingertips. From brainstorming sessions to daily to-do lists, QuickNotePro
        adapts to your needs, offering a dynamic platform for both personal and
        professional use. Set reminders to stay on top of tasks, collaborate
        with colleagues in real-time, and enrich your notes with multimedia
        attachments for a comprehensive repository of your thoughts. QuickNotePro’s
        sleek interface ensures an enjoyable user experience, while its advanced
        search functionality simplifies retrieval. Whether you're a student,
        professional, or creative mind, QuickNotePro is your versatile digital
        companion. Elevate your productivity and creativity as QuickNotePro
        streamlines your note-taking journey, providing a centralized hub for
        your ideas, tasks, and inspirations, wherever life takes you
      </Text>
    </Box>
  );
}
