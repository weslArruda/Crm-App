
import ColorSchemeToggle from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { BackgroundImage, Badge, Box, Button, Center, Fieldset, Group, NavLink, PasswordInput, TextInput } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconCircleOff } from '@tabler/icons-react';
import Link from 'next/link';

export default function AuthPage() {
  return (
        <>
            <Group justify='center'>
                <ColorSchemeToggle />
            </Group>    
        
            <Group justify='center' m='25vh' >
                
                <Fieldset legend='' radius='lg' mih='30vh' w='30vw' maw='40vh'>
                    <h1>Login</h1>
                    <TextInput label='Email' placeholder='Email' mt='2vw' maw='40vh' required />

                    <PasswordInput label='Senha' placeholder='Sua senha' mt='2vw' maw='40vh' required/>

                    <Group justify='center' mt='3.5vh'>
                        <Link href='/Dash'>
                            <Button>Login</Button>                
                        </Link>
                    </Group>
                </Fieldset>
            </Group>
        </>
     

  );
}
