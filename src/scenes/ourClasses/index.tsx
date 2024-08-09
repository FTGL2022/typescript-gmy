import { SelectedPage, ClassType } from '@/shared/types'
import class_1 from "@/assets/class_1.jpg"
import class_2 from "@/assets/class_2.jpeg"
import class_3 from "@/assets/class_3.jpg"
import class_4 from "@/assets/class_4.jpg"
import class_5 from "@/assets/class_5.jpg"
import class_6 from "@/assets/class_6.jpg"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'


const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        image: class_1,
    },

    {
        name: "Yoga Classes",
        image: class_2,
    },

    {
        name: "Cycling Classes",
        image: class_3,
    },

    {
        name: "Ab Core Classes",
        image: class_4,
    },

    {
        name: "Fitness Classes",
        image: class_5,
    },

    {
        name: "Training Classes",
        image: class_6,
    }
]


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}:Props) => {
  return (
    <section  id="ourclasses" 
    className='w-full bg-primary-100 py-40'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div 
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }}  
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">
                    Explore our wide range of classes tailored to every fitness level. 
                    Whether you're looking for high-energy cardio, strength training, or calming yoga sessions,
                     we offer expertly designed classes to meet your needs and help you achieve your goals.
                    </p>
                </div>

            </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className='w-[2800px] whitespace-nowrap'>
                        {classes.map((item: ClassType, index)=>(
                            <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                            />
                        ))}

                    </ul>

                </div>
        </motion.div>
      
    </section>
  )
}

export default OurClasses
