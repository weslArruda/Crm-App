
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
                
                <Fieldset legend='' radius='lg' mih='450px' miw='300px' maw='50vw' mah='300px' w='20vw' h='30vh'>

                    <Group justify='center'>
                        <h1>Login</h1>
                    </Group>
                    
                    <TextInput label='Email' placeholder='Email' mt='1vw' required />

                    <PasswordInput label='Senha' placeholder='Sua senha' mt='2vw' required/>

                    <Group justify='center' mt='3.5vh'>
                        <Link href='/Dashboard/Geral'>
                            <Button>Login</Button>                
                        </Link>
                    </Group>
                </Fieldset>
            </Group>
        </>
     

  );
}
