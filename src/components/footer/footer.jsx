import React from 'react';

const Footer = () => {
    return (
        <footer class="text-white body-font ">
            <div class="bg-neutral-800">
                <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <p class="text-sm text-white sm:ml-6 sm:mt-0 mt-4">© 2023 Cтоматологическая клиника — Stom_id</p>

                    <span class="px-3 py-2 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a target="blank" href="https://wa.me/+79995127310"><i
                            class=" text-gray-500 hover:text-green-500 fa fa-whatsapp fa-2x green-text text-darken-2"></i></a>
                        <a href="https://vk.com/stom_id_clinic" target="blank"><i
                            class="ml-6 text-gray-500 hover:text-blue-500 fa fa-vk fa-2x blue-text text-darken-2"></i></a>
                        <a href="tel:+79995127310" target="blank"><i
                            class="ml-6 text-gray-500 hover:text-my fa fa-mobile fa-2x green-text text-darken-2"></i></a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
