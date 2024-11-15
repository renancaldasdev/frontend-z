"use client"

import {Logo} from "@/app/components/ui/logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {HomeMenu} from "@/app/components/home/home-menu";

export const HomeHeader = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="flex justify-between p-6 border-b-2 border-gray-900">
            <div className="lg:hidden">
                <Logo size={24}/>
            </div>
            <div className="hidden lg:block text-2xl">
                Página inicial
            </div>
            <div className="cursor-pointer lg:hidden" onClick={() => setShowMenu(!showMenu)}>
                <FontAwesomeIcon icon={faBars}/>
            </div>

            {showMenu &&
                <HomeMenu closeAction={() => setShowMenu(false)}/>
            }
        </header>
    )
}