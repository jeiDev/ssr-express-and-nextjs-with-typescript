import {useEffect, useState} from "react"
import { useRouter } from 'next/router';
import Layout from "../components/layout"

const Home = () => {
    const [text, setText] = useState("Hello world")
    const { query } = useRouter();
   
    useEffect(() => {
        setTimeout(() => {
            setText(`Change text to ${query?.name}`)
        }, 5000)
    }, [])

    return (
        <Layout>
            <div style={{padding: 25, textAlign: "center"}}>
                <h1>{text}</h1>
            </div>
        </Layout>
    )
}


export default Home;