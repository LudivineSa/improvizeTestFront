import { CardSection } from "../components/Home/CardSection/CardSection"
import { Hero } from "../components/Home/Hero/Hero"
import { Navbar } from "../components/Navbar/Navbar"

export const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <CardSection />
        </>
    )
}