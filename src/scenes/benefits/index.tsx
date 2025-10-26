import HText from "@/shared/HText";
import { SelectedPage, BenefitType } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State Of The Art Facilities",
        description:
            "Our gym is equipped with state-of-the-art fitness machines, free weights, spacious workout zones, group class studios, personal training areas, and clean, modern locker rooms — all designed to support your health and wellness journey.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100s of Diverse Classes",
        description:
            "From high-intensity interval training and strength-building workouts to yoga, Pilates, and dance-based classes — we offer a wide variety of group sessions to suit every fitness level and goal.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert And Pro Trainers",
        description:
            "Our certified trainers bring years of experience, personalized guidance, and motivational support to help you train smarter, stay safe, and achieve real results — no matter your fitness level.",
    }
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <>
            <section
                id="benefits"
                className="mx-auto min-h-full w-5/6 py-20 md:pt-44"
            >
                <motion.div
                    onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
                >
                    {/*HEADING*/}
                    <motion.div
                        className="md:my-5 md:w--3/5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <HText>MORE THAN JUST A GYM</HText>
                        <p className="my-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Recusandae error magni soluta veritatis aspernatur
                            cumque reprehenderit accusamus voluptatibus dolor consequatur.</p>
                    </motion.div>
                    {/*Benefits*/}
                    <motion.div
                        className="md:flex items-center justify-between gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.5
                        }}
                        variants={container}
                    >
                        {benefits.map((benefit: BenefitType) => (
                            <Benefit
                                key={benefit.title}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                setSelectedPage={setSelectedPage}
                            />
                        ))}
                    </motion.div>
                    {/*GRAPHIC DESCRIPTION*/}
                    <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                        {/*GRAPHIC*/}
                        <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />
                        {/*DESCRIPTION*/}
                        <div>
                            {/*TITLE*/}
                            <div className="relative">
                                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-[var(--content-abstractwaves)]">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5 }}
                                        variants={{
                                            hidden: { opacity: 0, x: 50 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                    >
                                        <HText>
                                            MILLIONS OF HAPPY MEMBERS GETTING {""}
                                            <span className="text-primary-500">FIT</span>
                                        </HText>
                                    </motion.div>
                                </div>
                            </div>

                            {/*DESCRIPTION*/}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >
                                <p className="my-5">
                                    Join millions of happy members who have transformed their lives with us. From beginners to fitness enthusiasts, our community is full of real people achieving real results every day. Whether it’s building strength, improving flexibility, or just feeling more energized, our members are reaching their goals—and loving the journey.
                                </p>
                                <p className="mb-5">
                                    With expert trainers, world-class equipment, and motivating classes, getting fit has never been more fun or rewarding. You're not just joining a gym—you're becoming part of a supportive, inspiring fitness family that cheers you on every step of the way.
                                </p>
                            </motion.div>
                            {/*Button*/}
                            <div className="relative mt-16">
                                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] md:before:content-[var(--content-abstractwaves)]">
                                    <ActionButton setSelectedPage={setSelectedPage}>
                                        Join Now
                                    </ActionButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}

export default Benefits