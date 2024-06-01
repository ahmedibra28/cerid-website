'use client'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ChevronRightIcon, MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

export default function Navigation() {
  return (
    <header className='flex h-20 w-full shrink-0 items-center px-4 md:px-6'>
      <Link className='mr-6 hidden lg:flex' href='/#home'>
        <Avatar>
          <AvatarImage src='/logo.webp' />
          <AvatarFallback>CeRID</AvatarFallback>
        </Avatar>

        <span className='sr-only'>CeRID</span>
      </Link>

      <NavigationMenu className='hidden lg:flex'>
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
              href='/#home'
            >
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Who We Are</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='grid w-48 p-2'>
                <NavigationMenuLink asChild>
                  <Link
                    className='group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
                    href='/about-us'
                  >
                    <div className='text-sm font-medium leading-none group-hover:underline'>
                      About Us
                    </div>
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link
                    className='group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
                    href='/mission-vision'
                  >
                    <div className='text-sm font-medium leading-none group-hover:underline'>
                      Mission & Vision
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className='group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
                    href='/#key-achievements'
                  >
                    <div className='text-sm font-medium leading-none group-hover:underline'>
                      Key Achievements
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className='group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
                    href='/governance'
                  >
                    <div className='text-sm font-medium leading-none group-hover:underline'>
                      Governance
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className='group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
                    href='/#partners'
                  >
                    <div className='text-sm font-medium leading-none group-hover:underline'>
                      Partners
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
              href='/core-values'
            >
              Core Values
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
              href='/#projects'
            >
              Projects
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
              href='/thematic-areas'
            >
              Thematic Areas
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
              href='/careers'
            >
              Careers
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
              href='/#contact-us'
            >
              Contact Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>

      <Sheet>
        <SheetTrigger asChild>
          <Button className='lg:hidden' size='icon' variant='outline'>
            <MenuIcon className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <Link href='/#home'>
            <Avatar>
              <AvatarImage src='/logo.webp' />
              <AvatarFallback>CeRID</AvatarFallback>
            </Avatar>
            <span className='sr-only'>CeRID</span>
          </Link>

          <div className='grid gap-2 py-6'>
            <Link
              className='flex w-full items-center py-2 text-lg font-semibold'
              href='/#home'
            >
              Home
            </Link>
            <Collapsible className='grid gap-4'>
              <CollapsibleTrigger className='flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90'>
                Who We Are
                <ChevronRightIcon className='ml-auto h-5 w-5 transition-all' />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className='-mx-6 grid gap-6 bg-gray-100 p-6 dark:bg-gray-800'>
                  <Link
                    className='group grid h-auto w-full justify-start gap-1'
                    href='/about-us'
                  >
                    <div className='text-sm font-medium leading-none group-hover:underline'>
                      About Us
                    </div>
                  </Link>
                  <Link
                    className='group grid h-auto w-full justify-start gap-1'
                    href='/mission-vision'
                  >
                    <div className='text-sm font-medium leading-none group-hover:underline'>
                      Mission & Vision
                    </div>
                  </Link>
                  <Link
                    className='group grid h-auto w-full justify-start gap-1'
                    href='/#key-achievements'
                  >
                    <div className='text-sm font-medium leading-none group-hover:underline'>
                      Key Achievements
                    </div>
                  </Link>
                  <Link
                    className='group grid h-auto w-full justify-start gap-1'
                    href='/governance'
                  >
                    <div className='text-sm font-medium leading-none group-hover:underline'>
                      Governance
                    </div>
                  </Link>
                  <Link
                    className='group grid h-auto w-full justify-start gap-1'
                    href='/#partners'
                  >
                    <div className='text-sm font-medium leading-none group-hover:underline'>
                      Partners
                    </div>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Link
              className='flex w-full items-center py-2 text-lg font-semibold'
              href='/core-values'
            >
              Core Values
            </Link>
            <Link
              className='flex w-full items-center py-2 text-lg font-semibold'
              href='/#projects'
            >
              Projects
            </Link>
            <Link
              className='flex w-full items-center py-2 text-lg font-semibold'
              href='/thematic-areas'
            >
              Thematic Areas
            </Link>
            <Link
              className='flex w-full items-center py-2 text-lg font-semibold'
              href='/careers'
            >
              Careers
            </Link>
            <Link
              className='flex w-full items-center py-2 text-lg font-semibold'
              href='/#contact-us'
            >
              Contact Us
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
