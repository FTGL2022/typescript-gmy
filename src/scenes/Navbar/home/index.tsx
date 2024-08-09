import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton'
import gym_home from '@/assets/gym_home.png'
import Aura_Logo from '@/assets/Aura_logo.jpg'
import red_bull from '@/assets/red_bull.jpg'
import fortune_logo from '@/assets/fortune_logo.png'
import forbes_logo from '@/assets/forbes_logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};    

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
    id="home"
    className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div 
      className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
            {/* HEADINGS */}
            <motion.div 
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
                <div className='relative'>
                  <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>  
                  <img alt="Aura_logo" src={Aura_Logo} height={"150px"} width={"150px"} />
                  </div>  
                </div>
                  <p className='mt-8 text-sm  md:text-start'>
                    Welcome to  Aura Gym. Where your best begins!
                    Transform your fitness journey with our state-of-the-art facility and diverse activities.
                    From personalized workouts to dynamic group classes, Aura Gym offers everything you need to stay motivated and achieve your goals. 
                    Join our vibrant community and embrace a healthier, more active lifestyle today!
                  </p>
            </motion.div>
            {/* ACTIONS */}
            <motion.div 
            className='mt-8 flex items-center gap-8 md:justify-start'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
                </ActionButton>
                <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href= {`#${SelectedPage.ContactUs}`}
                >
                  <p>Lear More</p>
                </AnchorLink>

                
            </motion.div>
        </div>


        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 
            md:ml-40 md:mt-16 md:justify-items-end">

          <img alt="gym_home" src={gym_home} height={"200px"} width={"200px"} style={{ borderRadius: '30px' }} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens}  
      <div className="h-[150px] w-full bg-primary-100 py-10">
        <div className="mx-auto w-5/6">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-8">
          <img alt="red_bull" src={red_bull} height={"100px"} width={"100px"} />
          <img alt="fortune_logo" src={fortune_logo} height={"100px"} width={"100px"} />
          <img alt="forbes_logo" src={forbes_logo} height={"100px"} width={"100px"} />
          </div>
          </div>
        </div>
      
    </section>
  )
}

export default Home
