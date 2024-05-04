
interface IInfoCard{
    title: string;
    bodyText: string;
    imgSrc: string;
    id:number;
}

const infoCards: IInfoCard[] = [
{
    title: "Roadmapping", 
    bodyText: "Our typical initial offering, this engagement offers you a deep-dive into assumptions and requirements, and gives you a solid understanding of your product, delivering both a roadmap and an estimate.",
    imgSrc:"/roadmapping.jpeg",
    id:1
},




{
    title: "Visual & UX Design",
    bodyText: "Turn specs and requirements into elegant, intuitive designs. Save money by ironing out the user experience before building it out in code. Our tech-minded designers strike the right balance of beautiful and pragmatic UIs.  ",
    imgSrc:"/visual_uxdesign.png",
    id:2
},
{
    title: "Web & Mobile App Development", 
    bodyText: "Using proven, industry-standard technologies, we develop your product into a website and mobile application. With periodic demos from our team, we incorporate your feedback and iterate quickly.",
    imgSrc:"/mobwebdev.png",
    id:3
},

{
    title: "Project Management & Infrastructure", 
    bodyText: "We make sure the project is on track and on budget with monthly updates, efficient prioritization, and tracking using quality tools.",
    imgSrc:"/iasspass.png",
    id:4
},
{
    title: "Ongoing Support", 
    bodyText: "With your product in use, we maintain it for you. This includes security updates, uptime monitoring, scaling and performance improvements as the product grows.",
    imgSrc:"/support.png",
    id:5
},
{
    title: "Team Building & Hiring", 
    bodyText: "Our products are documented and built to grow. Feel the joy of easy onboarding. We help you hire your own staff, and are there to facilitate a smooth process.",
    imgSrc:"/teambuilding.jpeg",
    id:6
},
];

export default infoCards;