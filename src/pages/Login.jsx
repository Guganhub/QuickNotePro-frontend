import { useEffect, useState } from 'react';
import login from '../assets/login.jpg';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
    VStack
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/users/userActions';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate()

    const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
    console.log(auth,token)
    if(auth){
        navigate('/notes')
    }
   
    const [email,setEmail] = useState('');
    const[password,setPassword] = useState('')
    const dispatch = useDispatch()

    const handleLogin = ()=>{
        dispatch(getUser({email,password}))
    }
    return <Flex padding={4}>
        <Image mt={'30px'} w={'50%'} h={'50%'} src={login}/>
        <VStack w={'50%'}>
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy your thoughts in<Text color={'blue.400'}>QuickNotePro</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
               
              </Stack>
              <Button
              onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </VStack>
    </Flex>
}