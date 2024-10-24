const projectCardLis = [
    {
      name: "Shubh Super Speciality Center ",
      image: "../assets/images/Projects/hms.jpeg",
      // link: "/project-details.html",
      shortDiscription: "Hospital Management System",
      type :"Hospital Management System"
    },
    {
      name: "Doctor Time",
      image: "../assets/images/Projects/dt-4.png",
      // link: "/project-details.html",
      shortDiscription: "Real Time Apppointemt Management System",
      type:"CRM"
    },
    {
      name: "Doctor Time App",
      image: "./../assets/images/Projects/dtApp1.png",
      // link: "/project-details.html",
      shortDiscription: "Real Time Apppointemt Management System",
      type:"Mobile Application"
    },
  
    {
      name: "Lodge Booking System",
      image: "../assets/images/Projects/marriage.png",
      // link: "/project-details.html",
      shortDiscription: "Event Orginaser",
      type:"Website"
    },
  ];

  let test = ''
for(let project of projectCardLis ) {
    test += `<div class="col-lg-4 col-md-6 col-sm-10 ">
                      <div class="siongle-portfolio-box-style " >
                          <a href="#" class="thumbnail border border-1 shadow-sm">
                              <img src="${project?.image}" alt="product" style='width:395px; height:295px'>
                          </a>
                          <div class="inner-content">
                              <div class="left-content">
                                  <span class="pre">${project.type}</span>
                                  <a href="#">
                                      <h3 class="title animated fadeIn">${project?.name}</h3>
                                  </a>
                              </div>
                              <div class="right">
                                  <a href="#">
                                      <i class="fa-regular fa-arrow-right"></i>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>`
}
// let ourWorkCards = projectCardLis?.forEach(
//     (project, i) => 
//         `<div class="col-lg-4 col-md-6 col-sm-10 ">
//                       <div class="siongle-portfolio-box-style" >
//                           <a href="single-case-studies.html" class="thumbnail">
//                               <img src="${project?.image}" alt="product" style='width:385px; height:385px'>
//                           </a>
//                           <div class="inner-content">
//                               <div class="left-content">
//                                   <span class="pre">Website, B2B, SaaS, 3D</span>
//                                   <a href="single-case-studies.html">
//                                       <h3 class="title animated fadeIn">${project?.name}</h3>
//                                   </a>
//                                   <p>${project?.shortDiscription}</p>
//                               </div>
//                               <div class="right">
//                                   <a href="single-case-studies.html">
//                                       <i class="fa-regular fa-arrow-right"></i>
//                                   </a>
//                               </div>
//                           </div>
//                       </div>
//                   </div>`
//   );

const ourWorks = document.getElementById("workCards").innerHTML = test;