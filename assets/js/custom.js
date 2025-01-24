const navbar = (document.getElementById("navbar").innerHTML = `<div class="row">
                <div class="col-lg-12">
                    <div class="header-two-content-main">
                        <a href="index.html" class="logo-area">
                            <img class="light" src="assets/images/eralogo.png" alt="logo" style='width:150px'>
                            <img class="dark" src="assets/images/darklogo.png" alt="logo" style='width:150px'>
                        </a>
                        <nav class="main-nav-area">
                            <ul class="list-unstyled fluxi-desktop-menu">
                                <li class="menu-item fluxi-has-dropdown">
                                    <a href="index" class="fluxi-dropdown-main-element">Home</a>
                                    
                                </li>
                               
                                <li class="menu-item fluxi-has-dropdown">
                                    <a href="service" class="fluxi-dropdown-main-element">Services</a>
                                    
                                </li>
                                <li class="menu-item fluxi-has-dropdown">
                                    <a href="about" class="fluxi-dropdown-main-element">About Us</a>
                                  
                                </li>
                                <li class="menu-item fluxi-has-dropdown">
                                    <a href="portfolio" class="fluxi-dropdown-main-element">Portfolio</a>
                                  
                                </li>
                               

                                <li class="menu-item"><a class="main-element fluxi-dropdown-main-element" href="contact">Contact</a></li>
                            </ul>
                        </nav>
                        <div class="header-end-area">
                            <a href="#" class="rts-btn btn-primary-4">Contact sales</a>
                            <div class="menu-btn" id="menu-btn">

                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                                    <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                                    <rect width="20" height="2" fill="#1F1F25"></rect>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);

const mobilemenu = (document.getElementById(
  "mobilemenu"
).innerHTML = `<nav class="nav-main mainmenu-nav mt--30">
                <ul class="mainmenu metismenu" id="mobile-menu-active">
                    <li class="">
                        <a href="index.html" class="main">Home</a>
                    </li>
                    <li class="">
                        <a href="service.html" class="main">Services</a>
                    </li>
                    <li class="">
                        <a href="work.html" class="main">Work</a>
                        
                    </li>
                    <li>
                      <a href="about.html" class="main">About Us</a>
                  </li>
                    <li>
                        <a href="contact.html" class="main">Contact Us</a>
                    </li>
                </ul>
            </nav>

            <ul class="social-area-one pl--20 mt--100">
                <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            </ul>`);

const footer = (document.getElementById(
  "dynamicFooter"
).innerHTML = `<div class="container mb--65">
            <div class="row g-48 g-lg-0">
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <!-- single footer four wized -->
                    <div class="single-footer-four-wized">
                        <h5 class="title">Company</h5>
                        <ul>
                            <li><a href="about">About us</a></li>
                            <li><a href="contact">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <!-- single footer four wized end -->
                </div>
                
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <!-- single footer four wized -->
                    <div class="single-footer-four-wized">
                        <h5 class="title">Social</h5>
                        <ul>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="https://www.linkedin.com/company/eraham-tech-pvt-ltd/" target="_blank">Linkedin</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                    <!-- single footer four wized end -->
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <!-- single footer four wized -->
                    <div class="single-footer-four-wized">
                        <h5 class="title">Legal</h5>
                        <ul>
                            <li><a href="terms.html">Terms of service</a></li>
                            <li><a href="privacy-policy.html">Privacy policy</a></li>
                        </ul>
                    </div>
                    <!-- single footer four wized end -->
                </div>
               
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="copyright-area-four pt--65 mt-65 border-top">
                        <a href="#" class="logo">
                            <img class="light" src="assets/images/eralogo.png" alt="logo" style='width:150px'> 
                            <img class="dark" src="assets/images/darklogo.png" alt="logo" style='width:150px'> 
                        </a>
                        <p>© 2024 EraHam Tech, All right reserved.</p>
                    </div>
                </div>
            </div>
        </div>`);

const testimonial = (document.getElementById(
  "testimonials"
).innerHTML = `<div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title-style-one-center">
                        <span class="pre skew-up">Clients feedback</span>
                        <h2 class="title skew-up">What clients said</h2>
                    </div>
                </div>
            </div>
            <div class="row g-48 mt--0 justify-content-sm-center">
                <div class="col-lg-4 col-md-6 col-sm-10">
                    <!-- testimonials area start -->
                    <div class="single-testimonials-4">
                        <div class="icon">
                            <img src="assets/images/testimonials/shape/03.png" alt="testimonials">
                        </div>
                        <p class="disc">
                            “EraHamTech is our reliable IT partner. From web development to custom software and digital marketing, their holistic approach has been instrumental in our success. Responsive and committed to quality solutions.”
                        </p>
                        <div class="author">
                            <h6 class="title">Parvez Khan</h6>
                            <p>Founder of Doctor Time</p>
                            <img src="assets/images/testimonials/test-1.png" alt="testimonials">
                        </div>
                    </div>
                    <!-- testimonials area end -->
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                    <!-- testimonials area start -->
                    <div class="single-testimonials-4">
                        <div class="icon">
                            <img src="assets/images/testimonials/shape/03.png" alt="testimonials">
                        </div>
                        <p class="disc">
                          EraHamTech elevated our digital marketing efforts, significantly increasing online visibility and engagement. Their dedication and industry understanding set them apart. Grateful for the positive impact on our brand.
                        </p>
                        <div class="author">
                            <h6 class="title">Mohd  Zaid</h6>
                            <p>Business Development Executive</p>
                            <img src="assets/images/testimonials/zaid.jpeg"  alt="testimonials" style="width: 66px; height: 66px; border-radius: 50%;" >
                        </div>
                    </div>
                    <!-- testimonials area end -->
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                    <!-- testimonials area start -->
                    <div class="single-testimonials-4">
                        <div class="icon">
                            <img src="assets/images/testimonials/shape/03.png" alt="testimonials">
                        </div>
                        <p class="disc">
                          EraHamTech transformed our online presence with SEO expertise. Increased rankings and transparent communication make them trustworthy partners for boosting SEO.
                        </p>
                        <div class="author">
                            <h6 class="title">Irshad Saifi</h6>
                            <p>Owned an EV Agency</p>
                            <img src="assets/images/testimonials/avatars/02.png" alt="testimonials" style="width: 66px; height: 66px; border-radius: 50%;">
                        </div>
                    </div>
                    <!-- testimonials area end -->
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                    <!-- testimonials area start -->
                    <div class="single-testimonials-4">
                        <div class="icon">
                            <img src="assets/images/testimonials/shape/03.png" alt="testimonials">
                        </div>
                        <p class="disc">
                          Phenomenal custom software solution by EraHamTech. They understood our needs, delivering a solution that streamlined our operations. Professionalism and expertise at its best.
                        </p>
                        <div class="author">
                            <h6 class="title">Mousin Khan</h6>
                            <p>Real State Contractor</p>
                            <img src="assets/images/testimonials/mousin.png" alt="testimonials" style="width: 66px; height: 66px; border-radius: 50%;">
                        </div>
                    </div>
                    <!-- testimonials area end -->
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                    <!-- testimonials area start -->
                    <div class="single-testimonials-4">
                        <div class="icon">
                            <img src="assets/images/testimonials/shape/03.png" alt="testimonials">
                        </div>
                        <p class="disc">
                          Exceptional web development by EraHamTech! Our site is now sleek and user-friendly, reflecting our brand perfectly. Their attention to detail and commitment to excellence exceeded our expectations. Highly recommended!
                        </p>
                        <div class="author">
                            <h6 class="title">Farman Haseeb</h6>
                            <!-- <p>Founder/CEO at Fluxi Digital</p> -->
                            <img src="assets/images/testimonials/farru.png" style="width: 66px; height: 66px; border-radius: 50%;" alt="testimonials">
                        </div>
                    </div>
                    <!-- testimonials area end -->
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                    <!-- testimonials area start -->
                    <div class="single-testimonials-4">
                        <div class="icon">
                            <img src="assets/images/testimonials/shape/03.png" alt="testimonials">
                        </div>
                        <p class="disc">
                            It’s like having a superpower! I’ve tried almost every alternative and competitor and haven’t found anything quite as EraHam Tech.
                        </p>
                        <div class="author">
                            <h6 class="title">Marry Jane</h6>
                            <p>Writer at FPA Magzines</p>
                            <img src="assets/images/testimonials/shape/08.png" alt="testimonials">
                        </div>
                    </div>
                    <!-- testimonials area end -->
                </div>
            </div>
            
        </div>
        <div class="shape-area">
            <img class="one" src="assets/images/testimonials/shape/01.png" alt="">
            <img class="two" src="assets/images/testimonials/shape/02.png" alt="">
            <img class="three" src="assets/images/testimonials/shape/01.png" alt="">
            <img class="four" src="assets/images/testimonials/shape/02.png" alt="">
        </div>`);

const projectCardList = [
  {
    name: "Shubh Super Speciality Center ",
    image: "../assets/images/Projects/hms.jpeg",
    link: "https://sscalg.com",
    shortDiscription: "Hospital Management System",
  },
  {
    name: "Doctor Time",
    image: "../assets/images/Projects/dt-4.png",
    // link: "/project-details.html",
    shortDiscription: "Real Time Apppointemt Management System",
  },
  {
    name: "Doctor Time App",
    image: "./../assets/images/Projects/dtApp1.png",
    // link: "/project-details.html",
    shortDiscription: "Real Time Apppointemt Management System",
  },

  {
    name: "Lodge Booking System",
    image: "../assets/images/Projects/marriage.png",
    // link: "/project-details.html",
    shortDiscription: "Event Orginaser",
  },
];

const projectCard = projectCardList?.map(
  (project, i) =>
    ` <div class="swiper-slide" >
    <div class="siongle-portfolio-box-style style-four">
      <a href="#" class="thumbnail">
        <img src="${project.image}" alt="product" style='width:390px; height:300px; object-fit:cover;' />
      </a>
      <div class="inner-content">
        <div class="left-content">
          <span class="pre">${project.shortDiscription}</span>
          <a href="#">
            <h3 class="title animated fadeIn">${project.name}</h3>
          </a>
        </div>
        <div class="right">
          <a href=${project?.link} target="_blank">
            <i class="fa-regular fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>`
);

const projects = (document.getElementById("project").innerHTML = projectCard);



const FloatICon = document.getElementById("floatIcon").innerHTML = `<div class="floatIcon-inner">
            <div class="call">
                <a href="tel:+919557897890" class="d-flex align-items-center">
                    <i class="fa-solid fa-phone callIcon text-primary"></i>    <span class="mx-4 callText">Call Us</span>     
                </a>
            </div>
            <div class="chat">
                <a href="https://wa.me/919557897890?text=Hello%20there!%20I%20have%20a%20question." target="_blank">
                    <i class="fa-brands fa-whatsapp chatIcon text-success"></i>
                </a>
    
            </div>

        </div>`