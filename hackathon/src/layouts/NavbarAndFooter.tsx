import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function NavbarAndFooter({ children }: { children?: any }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}