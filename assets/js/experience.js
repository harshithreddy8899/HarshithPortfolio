AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Graduate Assistant ",
    cardImage: "assets/images/experience-page/stonybrook.jpg",
    place: "Stony Brook University",
    time: "(June 2023 - August 2023)",
    desp: "<ul><li>Leveraged Docker-maven-plugin within Maven’s project object model (POM) to seamlessly orchestrate the construction of Docker images for multiple microservices. Employed Dockerfiles to efficiently package Java JAR files into Docker images, streamlining the deployment process and enhancing application scalability and manageability.</li><li>Designed and developed a microservices-based application for anthropology spatial data optimizing data storage   and retrieval. Utilized React.js for the frontend, Node.js for backend services, and MongoDB for NoSQL data storage. Ensured efficient handling of vast anthropology datasets, maintaining data integrity and high performance.</li></ul>",
  },
  {
    title: "Associate Software Engineer",
    cardImage: "assets/images/experience-page/cognizant.webp",
    place: "Cognizant",
    time: "(July 2021 – July 2022)",
    desp:"<ul><li>Configured Jenkins job with Maven build tool for continuous integration and achieved continuous deployment by seamlessly integrating Ansible and Jenkins using Jenkins plugins. Additionally, optimized Jenkins performance by configuring Jenkins nodes to distribute the workload, enabling parallel builds for improved efficiency</li><li>Managed Kubernetes clusters, overseeing cluster installation, design, and pod deployments, optimizing container orchestration for scalable and resilient applications. Simultaneously, configured and streamlined  Jenkins  for  efficient CI/CD processes, including build automation, distribution, and parameterization, resulting in accelerated development workflows and improved time-to-market. Collaborated with cross-functional teams to establish best practices, enhancing continuous integration and deployment strategies.</li><li>Developed a microservices-based recruiting platform using Node.js and React.js, with HTML and CSS for seamless user  experiences. Implemented data storage with AWS RDS and AWS S3, deployed on AWS Elastic Beanstalk, and established CI/CD pipelines using AWS CodeBuild, resulting in a highly scalable and reliable application that met user needs and improved workflow efficiency.</li></ul>",
  },
  {
    title: "Internship",
    cardImage: "assets/images/experience-page/iitindore.png",
    place: "IIT Indore",
    time: "(June 2021 – July 2021)",
    desp:"<ul><li>Developed a Machine Learning Model for predicting the location of landslides using TensorFlow and Keras. This involved working with a real-time dataset containing over 2,000,000 records, which was meticulously cleaned using OpenRefine. The result was an impressive accuracy rate of 89%, coupled with an F1-score of 0.825.</li><li>•	Deployed a machine learning model within the application, primarily designed for  predicting  landslides.  Integrated Amazon Elasticsearch for efficient data indexing and search capabilities within this microservices-based architecture. Additionally, successfully integrated the Google Maps API to precisely detect locations, achieving an impressive accuracy of 997 meters.</li></ul>"
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
