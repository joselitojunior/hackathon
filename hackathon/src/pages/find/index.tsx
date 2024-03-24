import Page from "@/layouts/Page";
import { navbarState } from "@/stores/navbarStore";
import { useEffect, useState } from "react";
import { getUser } from "@/utils/utils";
import FindHire from "./find-hire";
import FindWork from "./find-work";

export default function Find() {
    const { page } = navbarState();
    const [user, setUser] = useState<any>(undefined);
    const [findPage, setFindPage] = useState('')

    useEffect(() => {
        if (user) {
            if (user.type == 0) {
                setFindPage('hire');
            } else if (user.type == 1) {
                setFindPage('work');
            }
        } else {
            if (page == 0) {
                setFindPage('hire');
            } else if (page == 1) {
                setFindPage('work');
            }
        }
    }, [user])


    useEffect(() => {
        setUser(getUser());
    }, [])

    return (
        <>
            {findPage == 'hire' && < FindHire />}
            {findPage == 'work' && < FindWork />}
        </>
    )
}