import Title from "./Title";
import './ComponentsStyle/SectionBest.scss'


export default function SectionBest () {
    return(
        <section className="wrapper section-best">
            <Title text1={"Best"} text2={"Selling"} showLink={true} />
        </section>
    )
}