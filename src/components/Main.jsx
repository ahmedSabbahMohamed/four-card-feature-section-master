import { motion } from "framer-motion"
import Card from "./Card"
import supervisor from "../assets/images/icon-supervisor.svg"
import team from "../assets/images/icon-team-builder.svg"
import karma from "../assets/images/icon-karma.svg"
import calc from "../assets/images/icon-calculator.svg"

function Main() {
    return(
        <main className="max-w-6xl p-8 mx-auto grid grid-cols-3 gap-8 justify-center items-center">
        <motion.div
            initial={{ x: "-100vw"}}
            animate={{ x: 0 }}
            transition={{ duration: .7, type: "tween" }}
            className="col-span-3 md:col-span-1">
            <Card
                border="border-Cyan"
                title="Supervisor"
                desc="Monitors activity to identify project roadblocks"
                img={ supervisor }
            />
        </motion.div>
        <motion.div
            initial={{ y: "-100vh"}}
            animate={{ y: 0 }}
            transition={{ duration: .7, type: "tween" }}
            className="flex flex-col gap-8 col-span-3 md:col-span-1">
            <Card
                border="border-Red"
                title="Team Builder"
                desc="Scans our talent network to create the optimal team for your project"
                img={ team }
            />
            <Card
                border="border-Orange"
                title="Karma"
                desc="Regularly evaluates our talent to ensure quality"
                img={ karma }
            />
        </motion.div>
        <motion.div
            initial={{ x: "100vw"}}
            animate={{ x: 0 }}
            transition={{ duration: .7, type: "tween" }}
            className="col-span-3 md:col-span-1">
            <Card
                border="border-Blue"
                title=" Calculator"
                desc="Uses data from past projects to provide better delivery estimates"
                img={ calc }
            />
        </motion.div>
        </main>
    )
}

export default Main