import React, { useState } from 'react'
import "./Skills.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop, faBuilding, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

const Skills = () => {

    const [ experience ] = useState(
        [
            {
                title: "Frontend Developer",
                company: "Laika",
                date: "December 2019 - March 2020",
                functions: {
                    description: "",
                    details: "<li>Layout mobile application according to design</li>"+
                    "<li>Connect API to application</li>"
                }
            },
            {
                title: "Development Lead / Frontend",
                company: "SoftArs",
                date: "April 2018 - April 2019",
                functions: {
                    description: "Study and implementation of new web technologies, team management and workflow development.",
                    details: ""
                }
            },
            {
                title: "Development Lead / Frontend",
                company: "Minami Digital",
                date: "October 2017 - April 2018",
                functions: {
                    description: "Develop layout web according to design approved by the client",
                    details: "<li>Use of CMS (WordPress)</li>"+
                    "<li>Use React JS to build a dashboard for Aera</li>"
                }
            },
            {
                title: "Frontend Developer",
                company: "Lear Express",
                date: "October 2014 - August 2015",
                functions: {
                    description: "Redesign of the website and web api, achieving a more friendly design and intuitive for service users of the company. In addition to using analytics tools to optimize load times and improve SEO management",
                    details: "<li>Use of CMS (WordPress) for better handling and modification of content</li>"+
                    "<li>Use and modification of plugins</li>"+
                    "<li> SEO Analysis and Optimization</li>"+
                    "<li>Responsive design implementation</li>"
                }
            },
            {
                title: "Web Developer and Graphic Designer",
                company: "Fundación CENAMEC",
                date: "July 2013 - September 2014",
                functions: {
                    description: "Development of a portal for the dissemination of news about the works, events and achievements of the foundation. Implementation of a distribution system of digital material for national teacher training",
                    details: "<li>Creation of digital platforms using a CMS (Joomla)</li>"+
                    "<li>Use and modification of plugins for managing news and events.</li>"+
                    "<li>Using SEO to position both portals.</li>"+
                    "<li>User system analysis.</li>"+
                    "<li>Content analysis and categorization.</li>"
                }
            },
            {
                title: "Web Developer",
                company: "Tecnología Venova, C.A.",
                date: "August 2010 - September 2011",
                functions: {
                    description: "Design and development of the company website and creation of a catalog for offer the products and services thereof",
                    details: "<li>Layout in HTML and layout in CSS and JavaScript</li>"+
                    "<li>Implementation of a CMS (Joomla) to create a catalog of products and services.</li>"+
                    "<li>Use and modification of plugins.</li>"
                }
            }
    ])

    const [ skills ] = useState(
        [
            {
                title: "Tools",
                skills: "Visual Studio Code, Sublime Text, Git (Github, Bitbucket, Gitlab), Jira, Trello, Slack."
            },
            {
                title: "Languajes",
                skills: "Javascript, PHP, HTML/5, CSS/3, Bash."
            },
            {
                title: "Frameworks And Libraries",
                skills: "React, Redux, React Native, SASS, LESS, MaterialUI for React, Bootstrap, Materialize CSS, JQuery."
            },
            {
                title: "Other skills",
                skills: "Wordpress, Design UI/UX, Responsive design, API manipulation."
            }
    ])

    return (
        <div className="container">
            <div className="skills content">
                <div className="skills-box">
                    <section>
                        <div className="experience-section">
                            <h1>Experience</h1>
                            <div className="experience">
                                {
                                    experience.map((experience, key) =>
                                        <div className="experience-data" key={key}>
                                            <div className="data box">
                                                <div className="experience-data-info title">
                                                    <FontAwesomeIcon icon={faDesktop} /><h2>{experience.title}</h2>
                                                </div>
                                                <div className="experience-data-info place">
                                                    <FontAwesomeIcon icon={faBuilding} /><span>{experience.company}</span>
                                                </div>
                                                <div className="experience-data-info date">
                                                    <FontAwesomeIcon icon={faCalendarAlt} /><p>{experience.date}</p>
                                                </div>
                                            </div>
                                            <div className="list">
                                                    <p>{experience.functions.description}</p>
                                                <ul dangerouslySetInnerHTML={{
                                                    __html: experience.functions.details
                                                }}>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="skills-section">
                            <h1>Skills</h1>
                            {
                                skills.map((skills, key) =>
                                    <div id={skills.id} className="skills-data" key={key}>
                                        <h2>{skills.title}</h2>
                                        <p>{skills.skills}</p>
                                    </div>
                                )
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Skills
