import ScrollspyNav from "react-scrollspy-nav";
import ActionSection from "./ActionSection";
const Hero = () => {
    return (
        <>
        <section className="hero-section">
            <h1 className="hero-text">Welcome to the Admin Portal</h1>
            <ScrollspyNav scrollTargetIds={["section_1"]} offset={100} activeNavClass="is-active" scrollDuration={700}
            headerBackground="true">
                <span className="hero-btn">
                    <a href="#section_1" className="btn-txt">Let's Get Started!</a>
                </span>
            </ScrollspyNav>
        </section>
        <ActionSection/>
        </>
    ) 
}

export default Hero;