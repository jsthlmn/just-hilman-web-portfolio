import { BRAIN_WORKOUT } from '../constants'
import { motion } from 'framer-motion'

const Exercise = () => {
    return (
        <div className='mb-8 mt-20'>
            <h2 className="mb-12 text-center text-4xl font-semibold">Brain Workout</h2>
            <div className='flex items-center justify-center gap-8'>
                {BRAIN_WORKOUT.map((link, index) => (
                    <motion.div
                        key={index}
                        className="mb-8 flex items-center justify-between">
                        <motion.a
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.5 * index }}
                            key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
                            <div className="flex flex-col items-center justify-center">
                                {link.icon}
                                <h3 className="mt-2 text-xl lg:text-3xl">{link.name}</h3>
                            </div>
                        </motion.a>
                    </motion.div>
                    
                ))}
            </div>
        </div>
    )
}

export default Exercise
