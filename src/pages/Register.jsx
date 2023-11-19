import { useState } from 'react';
import signup from '../assets/signup.jpg';
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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../constants/config';

export default function Register(){
    const navigate = useNavigate()

    
    const [name,setName]= useState('')
    const [email,setEmail] = useState('');
    const[password,setPassword] = useState('')

    const handleRegister = async()=>{
        let data = await axios.post(`${BASE_URL}/user/register`,{
            name,email,password
        })
        let {message,status} =data.data
        if(status===1){
            alert(message)
            navigate('/notes')
        }
        else{
            alert(message)
        }
    }
    return <Flex padding={4}>
        <Image mt={'30px'} w={'50%'} h={'50%'} src={signup}/>
        <VStack w={'50%'}>
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Register your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to note your thoughts in<Text color={'blue.400'}>QuickNotePro</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
            </FormControl>
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
              onClick={handleRegister}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Register
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </VStack>
    </Flex>
}