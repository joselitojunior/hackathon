import Page from "@/layouts/Page";
import { navbarState } from "@/stores/navbarStore";
import findHire from "./find-hire";
import findWork from "./find-work";
import FilterModal from "@/components/FreelancerFilterModal";

export default function Find() {
    const { page } = navbarState();

    return (
        <Page>
            {page == 0 &&
                findHire()
            }
            {page == 1 &&
                findWork()
            }
        </Page>
    )
}