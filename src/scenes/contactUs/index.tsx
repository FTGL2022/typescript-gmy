import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import contact_us from "@/assets/contact_us.jpg";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

  
    const onSubmit = async (data: any) => {
        console.log(data);
    };

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* HEADER */}
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>
                        <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                    </HText>
                    <p className="my-5">
                        Start your fitness journey today! 
                        Sign up now to access personalized workouts, expert guidance, and a supportive community dedicated to helping you reach your goals. 
                        Transform your health and get in shape with us!
                    </p>
                </motion.div>

                {/* FORM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <form
                            onSubmit={handleSubmit(onSubmit)} 
                        >
                            <input
                                className="mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: "This field is required.",
                                    maxLength: {
                                        value: 100,
                                        message: "Max length is 100 characters.",
                                    },
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">{errors.name.message as string}</p>
                            )}

                            <input
                                className="mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: "This field is required.",
                                    maxLength: {
                                        value: 100,
                                        message: "Max length is 100 characters.",
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address.",
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">{errors.email.message as string}</p>
                            )}

                            <textarea
                                className="mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                                placeholder="MESSAGE"
                                rows={4}
                                {...register("message", {
                                    required: "This field is required.",
                                    maxLength: {
                                        value: 2000,
                                        message: "Max length is 2000 characters.",
                                    },
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">{errors.message.message as string}</p>
                            )}

                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:bg-primary-500 hover:text-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    >
                        <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">

                            <img
                            className="-full max-w-full h-auto" 
                            alt="contact us page" src={contact_us}  />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactUs;
