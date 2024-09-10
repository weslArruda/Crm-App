'use client'

import ColorSchemeToggle from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { NavLink, Badge, Group, Anchor, Breadcrumbs, Avatar, Menu, rem, UnstyledButton } from '@mantine/core';
import { IconCircleOff, IconLayoutDashboard, IconArrowsLeftRight, IconMessageCircle, IconPhoto, IconSettings, IconTrash, IconArchive, IconUserCode } from '@tabler/icons-react';
import Image from 'next/image'


const items = [
    { title: 'Dashboard', href: '#' },
    { title: 'Proposals', href: '#' }
].map((item, index) => (
    <Anchor href={item.href} key={index}>
        {item.title}
    </Anchor>
));

export default function DashboardPage() {
    return (
        <>
            {/* header */}
            <Group justify='space-between' p={10}>
                <Group justify='flex-end'>
                    <Image src={'/icons8-toucan-48.png'} alt='tes' width={48} height={48} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </Group>
                <Group>
                    <Breadcrumbs>{items}</Breadcrumbs>
                    {/* <Breadcrumbs separator="→" separatorMargin="md" mt="xs">
                        {items}
                    </Breadcrumbs> */}
                </Group>

                <Group>
                    <ColorSchemeToggle />

                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <UnstyledButton>
                                <Avatar radius="xl" />
                            </UnstyledButton>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Label>Application</Menu.Label>
                            <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                                Settings
                            </Menu.Item>
                            <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
                                Messages
                            </Menu.Item>
                            <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
                                Gallery
                            </Menu.Item>

                            <Menu.Divider />

                            <Menu.Label>Danger zone</Menu.Label>
                            <Menu.Item
                                leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}
                            >
                                Transfer my data
                            </Menu.Item>
                            <Menu.Item
                                color="red"
                                leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                            >
                                Delete my account
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>

            </Group>
            {/* Sidebar left */}
            <Group maw={200}>
                
                <NavLink
                    href="#"
                    label="Dashboard"
                    leftSection={<IconLayoutDashboard size="1rem" stroke={1.5} />}
                    variant='filled'
                    opened
                    active>

                    <NavLink label="Geral" href="/Dashboard/Geral" />
                    <NavLink label="Proposals" href="/Dashboard/Proposals" active/>
                    <NavLink label="Sellers" href="/Dashboard/Sellers" />
                </NavLink>

               <NavLink
                    href="#required-for-focus"
                    label="Sales"
                    leftSection={<IconArchive size="1rem" stroke={1.5} />}
                    childrenOffset={18}>

                    <NavLink label="Register a new proposal" href="/Sales/Create" />
                    <NavLink label="Proposal progress" href="/Sales/Progress" />
                    <NavLink label="View proposals" href="/Sales/View" />
                </NavLink>

                <NavLink
                    href="/Users"
                    label="Users"
                    leftSection={<IconUserCode size="1rem" stroke={1.5} />}
                    childrenOffset={18}>
                </NavLink>

                <NavLink
                    href="#required-for-focus"
                    label="Disabled"
                    leftSection={<IconCircleOff size="1rem" stroke={1.5} />}
                    disabled/>

                <NavLink
                    href="#required-for-focus"
                    label="Notifications"
                    description="Additional information"
                    leftSection={
                        <Badge size="xs" color="red" circle>
                            9
                        </Badge>
                    }
                />
            </Group>

            <Group> {/* Page content */}

            </Group>
        </>

    );
}