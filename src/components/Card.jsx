import { motion } from "framer-motion"

function Card({ border, title, desc, img }) {
    return(
        <>
        <motion.div 
            // initial={{ y: 150 }}
            // animate={{ y: 0}}
            // transition={{ duration: .5, type: "tween"}}
            className={`card rounded-md shadow-xl p-5 border-t-4 ${border}`}>
            <h2 className="text-vdblue text-xl font-bold">{ title }</h2>
            <p className="text-gblue text-lg py-4">{ desc }</p>
            <div className="text-right">
                <img className="inline-block" src={ img } alt="right" />
            </div>
        </motion.div>
        </>
    )
}

export default Card