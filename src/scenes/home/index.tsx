import type { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton"
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import useMediaQuery from "@/hooks/useMediaQuery"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
        <>
            <section
                id="home"
                className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
            >
                {/* IMAGE AND MAIN HEADER */}
                <div>
                    {/*MAIN HEADER*/}
                    <div>
                        {/*HEADINGS*/}
                        <div>
                            <div>
                                <div>
                                    <img src={HomePageText} alt="home-page-text" />
                                </div>
                            </div>
                            <p>
                                Univaled Gym. Unparalleled Training Fitness Classes.
                                Studios to get the best fitness plan, equipment and support.
                                Body now
                            </p>
                        </div>
                        {/*ACTIONS*/}
                        <div>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                    {/* IMAGE */}
                    <div></div>
                </div>
            </section>
        </>
    )
}

export default Home