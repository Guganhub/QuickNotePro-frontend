import { Box, Button, Grid, Input, Textarea, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNotes, getNotes } from "../redux/notes/noteActions";
import NotesCards from "../components/NotesPage/Cards/NotesCard";
import { FaPlus } from "react-icons/fa6";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react";
export default function NotesPage(){
    const dispatch = useDispatch()

    const {loading,error,data} = useSelector((state)=>state.noteReducers)
    console.log(data)
    const [notes,setNotes] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    

    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    useEffect(()=>{
        dispatch(getNotes())
    },[])

    useEffect(()=>{
        setNotes(data)
    },[data])

    const createNote = ()=>{
        dispatch(createNotes({title,body}))
        onClose()
        
    }


    return <Box mt={10} padding={8}>
        <Grid gap={10} w={'100%'} gridTemplateColumns={'repeat(4, 1fr)'}>
        {notes?.map((element)=><NotesCards {...element}/>)}
        </Grid>
        <>
      
        <Button position={'fixed'} w={'60px'}h={'60px'} bottom={0} right={0} margin={16} borderRadius={50} bg={'blue'} color={'black'}onClick={onOpen} ><FaPlus size={25}/></Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input value={title} placeholder="Title" onChange={(e)=>setTitle(e.target.value)}></Input>
            <Textarea mt={8}value={body}placeholder="Note" onChange={(e)=>setBody(e.target.value)}></Textarea>

            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={createNote}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    </Box>
}