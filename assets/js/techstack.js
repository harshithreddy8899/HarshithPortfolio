AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
    langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langImage:"assets/images/techstack-page/docker.png",
    langName:"Docker",
    langDesc:"<li>Docker is a platform for developing, shipping, and running applications in lightweight, containerized environments, making it easier to manage and deploy software.</li>",
  },
  {
    langImage:"assets/images/techstack-page/jenkins.png",
    langName:"Jenkins",
    langDesc:"<li>Jenkins is an open-source automation server that facilitates continuous integration and continuous delivery (CI/CD) by automating software development processes, such as building, testing, and deployment.</li>",
  },
  {
    langImage:"assets/images/techstack-page/kubernetes.png",
    langName:"Kubernetes",
    langDesc:"<li>Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications across clusters of servers, simplifying container operations.</li>",
  },
  {
    langImage:"assets/images/techstack-page/maven.svg",
    langName:"Maven",
    langDesc:"<li>Apache Maven is a build automation tool used for managing and building Java projects. It simplifies project configuration and dependencies, making it easier to manage and build Java applications.</li>",
  },
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
  },
  {
    langImage:"assets/images/techstack-page/c.png",
    langName:"C",
    langDesc:"<li>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system</li>"
  },
  {
    langImage:"assets/images/techstack-page/aws.png",
    langName:"AWS",
    langDesc:"<li>Amazon Web Services (AWS) is a comprehensive cloud computing platform offering a wide range of on-demand services for businesses and developers to build and scale applications and infrastructure.</li>",
  },
  {
    langImage:"assets/images/techstack-page/terraform.png",
    langName:"Terraform",
    langDesc:"<li>Terraform is an open-source infrastructure as code (IaC) tool that allows users to define and provision infrastructure resources in a declarative configuration language, simplifying infrastructure management and automation.</li>",
  },
  {
    langImage:"assets/images/techstack-page/ansible.png",
    langName:"Ansible",
    langDesc:"<li>Ansible is an open-source automation tool that simplifies IT tasks by providing a platform for automating application deployment, configuration management, and task automation without the need for agents on target systems.</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
