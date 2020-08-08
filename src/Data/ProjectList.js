// import ProjectImage from '../Assets/TestImage02.png'
import GithubImage from '../Assets/Images/Github.png' 
import AfriImage from '../Assets/Images/Africontinent.png' 
import QuickImage from '../Assets/Images/Quick-Credit.png' 
import WhereImage from '../Assets/Images/Wheresweetsmeet.png' 


const ProjectList = [{
        ProjectImage: GithubImage,
        ProjectName: 'Github User Search',
        ProjectDescription: `After spending sometime learning react, I decided to build this Webapp as a way to practice and solidify what I learnt so far. It consumes Github's open API to display the requested GitHub users and their repositories.`,

        ProjectTechnologies: `Main technologies used: React.js, CSS3, JavaScript(ES6+), Axios, React Router, git and the Github API.`
    },


    {
        ProjectImage: AfriImage,
        ProjectName: 'AfriContinent Forums',
        ProjectDescription: `Seun T needed a way to connect members of his growing YouTube channel. The goal was to create an Africa first forum with a main focus on music.
        The end result was AfriContinent forums.`,

        ProjectTechnologies: `Main technologies used : WordPress, Elementor, BBPress, Yoast SEO and Google Ads`
    },


    {
        ProjectImage: QuickImage,
        ProjectName: 'Quick Credit Frontend',
        ProjectDescription: `Quick Credit was the project I was meant to build during Andela's 2 week bootcamp and final stage of the extremely competitive selection process for Cycle 44 of their fellowship.
        I had the frontend rebuilt after failing to make the final cut. Attendng the bootcamp really gave me a proper insight into the skills I needed to build to become a "world class" developer.`,

        ProjectTechnologies: `Main technologies used: HTML5, CSS3, JavaScript(ES6+) and git.`
    },

    {
        ProjectImage: WhereImage,
        ProjectName: 'WhereSweetsMeet',
        ProjectDescription: `Kofi reached out to me on Fiverr specifying that he needed an online candy store and a place to plug his Amazon affiliate products. The result was WhereSweetsMeet. I ended up integrating the PayPal and Stripe plugins to ensure that his users will have no issues with payment. I also built an android WebView app for the site.
        I went on to work with Kofi on some of his other websites and blogs.`,

        ProjectTechnologies: `Main technologies used: Wordpress, Elementor, WooCommerce, Java for Android, Payment processors (PayPal and Stripe) and Yoast SEO. `
    }

]


// ProjectList.map(project => console.log(project.ProjectName));
export default ProjectList