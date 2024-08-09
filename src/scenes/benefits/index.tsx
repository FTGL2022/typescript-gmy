import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { SelectedPage, BenefitType } from "@/shared/types"
import { motion } from "framer-motion"
import HText from "@/shared/HText";
import Benefit from "./benefit";
import ActionButton from "@/shared/ActionButton";
import More_than_gym from "@/assets/More_than_gym.jpg"





const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: 
        "Our gym features cutting-edge equipment and a clean, modern atmosphere, ensuring a comfortable and safe environment for all members."
    },

    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: 
        "Our diverse range of classes cater to all fitness levels and interests, from high-intensity workouts to relaxing yoga sessions."
    },

    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers ",
        description:
        "Our top trainers offer personalized guidance to help you achieve your fitness goals with confidence and expertise."
    },
]

const container ={
    hidden : {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}




type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }}
        >
            <HText>MORE THAN JUST GYM.</HText>
            <p className="my-5 text-sm">
                At our gym, we prioritize your health and well-being. 
                We offer state-of-the-art equipment, diverse classes, and personalized guidance, all with a focus on your comfort and safety. 
                We're here to support you in reaching your fitness goals with the utmost care and attention.
                </p>
            </motion.div>

            {/*Benefits*/}
                <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={container}
                >
                 {benefits.map((benefit: BenefitType) => (
                    <motion.div 
                    key={benefit.title}
                    className="flex flex-col p4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }} 
                    >
                    <Benefit
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                    </motion.div>

                 ))}
                </motion.div>


                {/*GRAPHICS AND DESCRIPTION */}
                 <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/*Graphic*/}
                    <img
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={More_than_gym} height={"400px"} width={"400px"}
                     />

                    {/*Description*/}
                    <div>

                        {/*TITLE*/}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: 50},
                                visible: {opacity: 1, x: 0},
                            }}
                            
                            >
                                <HText>MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                            </div>

                        </div>

                        {/*DESCRIPT*/}
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 0.2, duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x: 50},
                            visible: {opacity: 1, x: 0},
                        }}
                        >
                            <p className="my-5">
                                Join a global community of success and discover how our support and resources can transform your fitness journey. 
                                Achieve your goals and feel great, today!</p>

                             <p className="mb-5">
                                Get personalized support and join a thriving community dedicated to your success. 
                                Start your fitness journey with us today!</p>
                        </motion.div>

                        {/*BUTTON*/}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    JOIN NOW 

                                </ActionButton>

                            </div>

                        </div>
                    </div>
                 </div>



        </motion.div>
        
      
    </section>
  )
}

export default Benefits
