import { motion } from "framer-motion"

const hOneVariant = {
    hidden: {
        y: -40,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .5,
            duration: .2,
            type: "spring",
            stiffness: 200
        }
    }
}

function Header() {
    return(
        <>
        <header className="text-center mb-5">
            <motion.h1
                variants={ hOneVariant }
                initial="hidden"
                animate="show"
                className="text-vdblue text-3xl font-light mb-4">
                Reliable, efficient delivery
                <br />
                <b className="font-bold">Powered by Technology</b>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ delay: .7, duration: .5}}
                className="text-gblue max-w-lg mx-auto px-1">
                Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
            </motion.p>
        </header>
        </>
    )
}

export default Header