import Header from "../components/Header"
import SkillIcon from "../components/SkillIcon"

// Icons

import {DiJsBadge, DiMongodb, DiHtml5, DiCss3, DiGithubBadge, DiMaterializecss, DiJqueryLogo} from "react-icons/di"
import {GrMysql, GrHeroku, GrNode, GrReactjs, GrGraphQl} from "react-icons/gr"
import {SiMongodb, SiAmazonaws, SiExpress, SiBootstrap, SiSequelize, SiApollographql, SiAdobephotoshop, SiTailwindcss, SiSass} from "react-icons/si"

export default function Skills() {
    return (
        <div className="my-5 container mx-auto rounded-lg shadow-lg bg-theme-light">
            <div id="skills">
                <Header text="Skills" />
                <div className="p-5">
                    <h2 className="text-2xl underline pt-5 pb-7 text-theme-pink font-bold">Languages</h2>
                    <div className="bg-theme-main p-5 justify-evenly rounded-sm flex flex-wrap">
                        <SkillIcon text="Javascript" link="https://www.javascript.com/" icon={<DiJsBadge />} />
                        <SkillIcon text="HTML5" link="https://html.com/" icon={<DiHtml5 />} />
                        <SkillIcon text="CSS3" link="https://developer.mozilla.org/en-US/docs/Web/CSS" icon={<DiCss3 />} />
                        <SkillIcon text="MySQL" link="https://www.mysql.com/" icon={<GrMysql />} />
                        <SkillIcon text="MongoDB" link="https://www.mongodb.com/" icon={<DiMongodb />} />
                    </div>
                    <h2 className="text-2xl underline pt-5 pb-7 text-theme-pink font-bold">Applications</h2>
                    <div className="bg-theme-main p-5 justify-evenly rounded-sm flex flex-wrap">
                        <SkillIcon text="Github" link="https://github.com/" icon={<DiGithubBadge />} />
                        <SkillIcon text="Heroku" link="https://www.heroku.com/" icon={<GrHeroku />} />
                        <SkillIcon text="MongoAtlas" link="https://www.mongodb.com/atlas/database" icon={<SiMongodb />} />
                        <SkillIcon text="AWS" link="https://aws.amazon.com/console/" icon={<SiAmazonaws />} />
                    </div>
                    <h2 className="text-2xl underline pt-5 pb-7 text-theme-pink font-bold">Tools</h2>
                    <div className="bg-theme-main p-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 rounded-sm">
                        <SkillIcon text="ReactJS" link="https://reactjs.org/" icon={<GrReactjs />} />
                        <SkillIcon text="NodeJS" link="https://nodejs.dev/" icon={<GrNode />} />
                        <SkillIcon text="ExpressJS" link="https://expressjs.com/" icon={<SiExpress />} />
                        <SkillIcon text="Bootstrap" link="https://getbootstrap.com/" icon={<SiBootstrap />} />
                        <SkillIcon text="MaterializeCSS" link="https://materializecss.com/" icon={<DiMaterializecss />} />
                        <SkillIcon text="TailwindCSS" link="https://tailwindcss.com/" icon={<SiTailwindcss />} />
                        <SkillIcon text="SASS" link="https://sass-lang.com/" icon={<SiSass />} />
                        <SkillIcon text="jQuery" link="https://jquery.com/" icon={<DiJqueryLogo />} />
                        <SkillIcon text="Sequelize" link="https://sequelize.org/" icon={<SiSequelize />} />
                        <SkillIcon text="GraphQL" link="https://graphql.org/" icon={<GrGraphQl />} />
                        <SkillIcon text="Apollo" link="https://www.apollographql.com/" icon={<SiApollographql />} />
                        <SkillIcon text="Photoshop" link="https://www.adobe.com/products/photoshop.html" icon={<SiAdobephotoshop />} />
                    </div>
                </div>
            </div>
        </div>
    )
}