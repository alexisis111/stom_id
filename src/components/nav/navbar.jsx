import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './nav.css'
import SvgComponent from '../../assets/logoComponent'


const navigation = [
    { name: 'Главная', href: '#', current: true },
    { name: 'О нас', href: '#', current: false },
    { name: 'Прайс', href: '#', current: false }
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export function Navbar() {
    return (
        <>

            <div className="min-h-full ">
                <Disclosure as="nav" className=" bg-neutral-800">
                    {({ open }) => (
                        <>
                            <div className="container mx-auto px-4">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 ">
                                            <SvgComponent className="h-10 w-13" />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-my text-white'
                                                                : 'text-gray-300 hover:bg-my hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <span class="hidden md:block px-3 py-2 ">
                                        <a target="blank" href="https://wa.me/+79995127310"><i
                                            class="text-green-500 fa fa-whatsapp fa-2x green-text text-darken-2"></i></a>
                                        <a href="https://vk.com/stom_id_clinic" target="blank"><i
                                            class="ml-6 text-blue-500 fa fa-vk fa-2x blue-text text-darken-2"></i></a>
                                        <a href="tel:+79995127310" target="blank"><i
                                            class="ml-6 text-my fa fa-mobile fa-2x green-text text-darken-2"></i></a>
                                    </span>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-my p-2 text-gray-400 hover:bg-my hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-my text-white' : 'text-gray-300 hover:bg-my hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                    <span class="flex flex-row justify-evenly">
                                        <a target="blank" href="https://wa.me/+79995127310"><i
                                            class="text-green-500 fa fa-whatsapp fa-2x green-text text-darken-2"></i></a>
                                        <a href="https://vk.com/stom_id_clinic" target="blank"><i
                                            class="ml-3 text-blue-500 fa fa-vk fa-2x blue-text text-darken-2"></i></a>
                                        <a href="tel:+79995127310" target="blank"><i
                                            class="ml-3 text-my fa fa-mobile fa-2x green-text text-darken-2"></i></a>
                                    </span>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}
