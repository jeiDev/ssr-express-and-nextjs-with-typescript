import { LayoutPropsI } from "../../interfaces/layout"
import Header from "./header"

const Layout = ({children}: LayoutPropsI) => {

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout