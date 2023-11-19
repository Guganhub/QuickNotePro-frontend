'use client'

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import logo from '../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../redux/users/userTypes';




export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
  console.log(auth)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  return (
    <>
      <Box bg={"blue"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={'Bold'}color={'white'} cursor={'pointer'} onClick={()=>{navigate('/')}}>QuickNote Pro</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button display={auth?'none' : 'block'} onClick={()=>{navigate('/login')}}>Login</Button>
              <Button display={auth?'none' : 'block'} onClick={()=>{navigate('/register')}}>Register</Button>
              <Button display={auth?'block' : 'none'} onClick={()=>{navigate('/notes')}}>My Notes</Button>
              <Button display={auth? 'block' : 'none'} onClick={()=>dispatch({type:LOGOUT})}>Logout</Button>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

               
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}