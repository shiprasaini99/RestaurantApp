import Header from "../app/components/Header";
import Hero from "../app/components/Hero";

type Props = {
    children : React.ReactNode;
}

const Layout = ({children} : Props) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
           <Header/>
           <Hero/>
           <div className="container mx-auto flex-1 py-10">{children}</div>
        </div>
    )
}

export default Layout;