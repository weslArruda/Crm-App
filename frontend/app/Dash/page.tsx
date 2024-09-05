'use client'

import ColorSchemeToggle from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { NavLink, Badge, Group, Anchor, Breadcrumbs, Avatar, Button, Menu, rem, UnstyledButton } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconCircleOff, IconDashboard, IconLayoutDashboard, IconArrowsLeftRight, IconMessageCircle, IconPhoto, IconSearch, IconSettings, IconTrash } from '@tabler/icons-react';
import Image from 'next/image'


const items = [
    { title: 'Home', href: '#' },
    { title: 'Dashboard', href: '#' },
].map((item, index) => (
    <Anchor href={item.href} key={index}>
        {item.title}
    </Anchor>
));

export default function DashPage() {
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
                                <Avatar radius="xl"/>    
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
                    href="#required-for-focus"
                    label="Dashboard"
                    leftSection={<IconLayoutDashboard size="1rem" stroke={1.5} />} />
                <NavLink
                    href="#required-for-focus"
                    label="With right section"
                    leftSection={<IconGauge size="1rem" stroke={1.5} />}
                    rightSection={
                        <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
                    }
                />
                <NavLink
                    href="#required-for-focus"
                    label="Disabled"
                    leftSection={<IconCircleOff size="1rem" stroke={1.5} />}
                    disabled
                />
                <NavLink
                    href="#required-for-focus"
                    label="With description"
                    description="Additional information"
                    leftSection={
                        <Badge size="xs" color="red" circle>
                            3
                        </Badge>
                    }
                />
            </Group>

            <Group> {/* Page content */}

            </Group>
        </>

    );
}