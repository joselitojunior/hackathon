import Page from "@/layouts/Page";
import { navbarState } from "@/stores/navbarStore";
import findHire from "./find-hire";
import findWork from "./find-work";
import FilterModal from "@/components/FreelancerFilterModal";
import { useEffect, useState } from "react";
import { getUser } from "@/utils/utils";

export default function Find() {
    const { page } = navbarState();
    const [user, setUser] = useState<any>(undefined);

    function renderPage() {
        if (user) {
            if (user.type == 0) {
                return findHire();
            } else if (user.type == 1) {
                return findWork();
            }
        } else {
            if (page == 0) {
                return findHire();
            } else if (page == 1) {
                return findWork();
            }
        }
    }

    useEffect(() => {
        setUser(getUser());
    }, [])

    return (
        <Page>
            {renderPage()}
        </Page>
    )
}