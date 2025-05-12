import Button from "../Components/Button";
import SectionBest from "../Components/SectionBest";
import SectionCategories from "../Components/SectionCategories";
import SectionDeals from "../Components/SectionDeals";
import SectionHot from "../Components/SectionHot";
import SectionTestimonials from "../Components/SectionTestimonials";
import Hero from "../Components/Hero"

export default function HomePage() {

    return (
        <>
            <Hero />
            <Button />
            <SectionCategories />
            <SectionBest />
            <SectionHot />
            <SectionDeals />
            <SectionTestimonials />
        </>
    );
}