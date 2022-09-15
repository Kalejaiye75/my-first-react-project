import React from "react"
import "../../App.css"
import Cards from "../Cards"
import { Footer } from "../Footer"
import Mysection from "../Mysection"


const HomePage = () => {
    return (
        <div>
            <Mysection />
            <Cards />
            <Footer />
        </div>
    )
}

export default HomePage;