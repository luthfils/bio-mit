<template>
    <div>
        <div class="body-overlay"></div>

        <!-- Document Wrapper
        ============================================= -->
        <div id="wrapper" class="clearfix">

            <Header/>

            <!-- Slider
            ============================================= -->
            <section id="slider" class="slider-element min-vh-100 bgchanger include-header bg-dark hero">
                <div class="slider-inner">

                    <div class="vertical-middle slider-element-fade">
                        <div class="container text-start py-6">
                            <div class="row align-items-center gx-6 gy-6">
                                <div class="col-lg-6 text-md-start">
                                    <div class="logo mb-3">
                                        <img class="me-2 wow fadeInUp" data-wow-delay="100ms" src="../frontend/assets/logo/biofarma-white.svg" alt="Image">
                                        <img class="wow fadeInUp" data-wow-delay="200ms" src="../frontend/assets/logo/mit.svg" alt="Image">
                                    </div>
                                    <div class="emphasis-title bottommargin-sm">
                                        <h1 class="fw-900 mb-3 wow fadeInUp">
                                            Bio Farma X MIT
                                            Hacking Medicine
                                        </h1>
                                        <p class="opmargin-sm mb-0 fc-muted wow fadeInUp">
                                            The Bio Farma x MIT Hacking Medicine hackathon will bring together people with technology and healthcare backgrounds to work on innovative solutions to real problems in Bali in February 2023.
                                        </p>
                                        <!-- <p data-animate="fadeInUp" data-delay="20" class="topmargin-sm mb-0 fc-muted">Solutions to existing problems, developed through collaborative, intense, and innovative teamwork in a short amount of time.</p> -->
                                    </div>
                                    <div class="mb-5">
                                        
                                        <div class="row gy-4">
                                            <div class="col-xl-6 wow fadeInUp">
                                                <div class="d-flex">
                                                    <div class="me-4 fc-primary">
                                                        <div class="rounded-icon d-flex rounded-14 align-items-center justify-content-center">
                                                            <i class="bi bi-calendar"></i>
                                                        </div>
                                                    </div>
                                                    
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">February 16-19, 2023</h4>
                                                        <span class="fc-muted">Date</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 wow fadeInUp">
                                                <div class="d-flex">
                                                    <div class="me-4 fc-primary">
                                                        <div class="rounded-icon d-flex rounded-14 align-items-center justify-content-center">
                                                            <i class="bi bi-geo-alt"></i>
                                                        </div>
                                                    </div>
                                                    
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Bali, Indonesia</h4>
                                                        <span class="fc-muted">Place</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="register.html">
                                        <button class="button button-large button-circle fw-medium wow fadeInUp">Register Now</button>
                                    </a>
                                    <a href="#" data-scrollto="#section-about" data-easing="easeInOutExpo">
                                        <button class="button button-large button-border button-circle fw-medium wow fadeInUp">Contact Us</button>
                                    </a>
                                    <!-- <a data-animate="fadeInUp" data-delay="50" href="#" class="button button-circle button-large fw-medium ms-2" data-scrollto="#section-works" data-easing="easeInOutExpo" data-speed="1250" data-offset="70">Register Now</a>
                                    <a data-scrollto="#section-about" data-animate="fadeInUp" data-delay="50" href="#" class="button button-circle button-border button-large fw-medium ms-0" data-scrollto="#section-works" data-easing="easeInOutExpo" data-speed="1250" data-offset="70">Learn More</a> -->
                                </div>

                                <div class="col-lg-6 text-center wow fadeInUp">
                                    <img src="../frontend/assets/images/header.svg" alt="Header">
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="#" data-scrollto="#section-about" data-easing="easeInOutExpo" data-speed="1250" data-offset="70" class="one-page-arrow d-none d-md-block">
                        <div class="scroll-inner">
                            <div class="scroll-wheel"></div>
                    </div>
                    </a>

                </div>
            </section><!-- #slider end -->

            <!-- Content
            ============================================= -->
            <section id="content">
                <div class="content-wrap py-0">

                    <div id="section-about" class="page-section about bg-dark pt-6">

                        <div class="container clearfix">
                            <h5 class="text-uppercase ls4 fw-normal mb-3 fc-secondary text-center wow fadeInUp">About</h5>
                            <div class="row gx-6 gy-5">
                                <div class="col-lg-6">
                                    <h2 class="text-capitalize fw-bold font-body wow fadeInUp">Bio Farma, The Pharmaceutical BUMN Holding</h2>
                                    <p class="fc-muted wow fadeInUp">
                                        The Pharmaceutical BUMN Holding was formed on January 31, 2020, consisting of PT Bio Farma (Persero), PT Kimia Farma Tbk, and PT Indofarma Tbk. PT INUKI joined the holding company in 2021. The members of the Pharmaceutical BUMN Holding have different business focuses: PT Bio Farma (Persero) focuses on the life science business, PT Kimia Farma Tbk focuses on the drug business, PT Indofarma Tbk focuses on the herbal and medical device business, and PT INUKI operates in the nuclear technology industry. The purpose of establishing the Pharmaceutical SOE Holding is to strengthen the independence of the national pharmaceutical industry, increase product availability, and create joint innovations in the supply of pharmaceutical products.
                                    </p>
                                </div>

                                <div class="col-lg-6">
                                    <h2 class="text-capitalize fw-bold font-body animate__animated animate__fadeInUp animate__delay-400ms">MIT Hacking Medicine</h2>
                                    <p class="fc-muted animate__animated animate__fadeInUp animate__delay-500ms">
                                        MIT Hacking Medicine has facilitated events in nearly a dozen countries and multiple U.S. states. It aims to energize the healthcare community and accelerate medical innovation.
                                    </p>
                                    <p class="fc-muted animate__animated animate__fadeInUp animate__delay-600ms">
                                        MIT Hacking Medicine routinely collaborates with prominent organizations and corporations, such as The Kauffman Foundation, Massachusetts General Hospital, Emergency Nurses Association, Pfizer, Microsoft, Samsung, GE, Merck, and AthenaHealth. The group has also been featured in outlets such as SXSW, The Wall Street Journal, Slate, and Wired.
                                    </p>
                                </div>
                            </div>
                            <!-- <div data-animate="fadeInUp" data-delay="70" class="center">
                                <a href="#" data-scrollto="#section-event" data-easing="easeInOutExpo" data-speed="1250" data-offset="70" class="fc-primary fw-medium jump d-block d-lg-inline-block">Jump to Event<i class="bi bi-arrow-down ms-1"></i></a>
                            </div> -->
                            
                        </div>

                    </div>

                    <div id="section-event" class="page-section journey pt-6 bg-dark-2">

                        <h5 class="text-uppercase ls4 fw-normal mb-3 fc-secondary text-center wow fadeInUp">Journey</h5>

                        <h2 class="center mb-3 text-capitalize fw-bold font-body wow fadeInUp">Hackathon Journey</h2>

                        <div class="row mt-6 gy-lg-0 gy-4">
                            <div class="col-12 col-sm-4 col-lg">
                                <div class="card-journey p-4 center wow fadeInUp" data-animate="fadeInUp" data-wow-delay="300ms">
                                    <div class="square-icon fw-bold">
                                        1
                                    </div>
                                    <div class="icon my-4">
                                        <img src="../frontend/assets/images/carbon_events-alt.svg" alt="">
                                    </div>
                                    <h4 class="my-3">Collaborate and generate ideas with other participants</h4>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4 col-lg">
                                <div class="card-journey p-4 center wow fadeInUp" data-animate="fadeInUp" data-wow-delay="400ms">
                                    <div class="square-icon fw-bold">
                                        2
                                    </div>
                                    <div class="icon my-4">
                                        <img src="../frontend/assets/images/carbon_idea.svg" alt="">
                                    </div>
                                    <h4 class="my-3">Hack the problem and shape the solution
                                    </h4>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4 col-lg">
                                <div class="card-journey p-4 center wow fadeInUp" data-animate="fadeInUp" data-wow-delay="500ms">
                                    <div class="square-icon fw-bold">
                                        3
                                    </div>
                                    <div class="icon my-4">
                                        <img src="../frontend/assets/images/carbon_collaborate.svg" alt="">
                                    </div>
                                    <h4 class="my-3">Receive feedback from mentors
                                    </h4>
                                </div>
                            </div>
                            <div class="col-12 col-sm">
                                <div class="card-journey p-4 center wow fadeInUp" data-animate="fadeInUp" data-wow-delay="600ms">
                                    <div class="square-icon fw-bold">
                                        4
                                    </div>
                                    <div class="icon my-4">
                                        <img src="../frontend/assets/images/carbon_group-presentation.svg" alt="">
                                    </div>
                                    <h4 class="my-3">Present your solution to the judging panel
                                    </h4>
                                </div>
                            </div>
                            <div class="col-12 col-sm">
                                <div class="card-journey p-4 center wow fadeInUp" data-animate="fadeInUp" data-wow-delay="700ms">
                                    <div class="square-icon fw-bold">
                                        5
                                    </div>
                                    <div class="icon my-4">
                                        <img src="../frontend/assets/images/carbon_trophy.svg" alt="">
                                    </div>
                                    <h4 class="my-3">Announcement of the winners and runners-up</h4>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div id="section-timeline" class="page-section timeline bg-dark pt-6">
                        <div class="container clearfix">

                            <h5 class="text-uppercase ls4 fw-normal mb-3 fc-secondary text-center" data-animate="fadeInUp" data-delay="10">Agenda</h5>

                            <h2 class="center mb-3 text-capitalize fw-bold font-body" data-animate="fadeInUp" data-delay="20">Hackathon Agenda</h2>

                            <!-- Desktop -->
                            <div class="d-none d-md-block">
                                <div id="side-navigation" class="row mt-6 gx-6" data-plugin="tabs">

                                    <div class="col-md-6 sticky-sidebar-wrap">
                                        <div class="sticky-sidebar">
                                            <ul class="sidenav bg-dark mb-0">
                                                <li data-animate="fadeInUp" data-delay="30" class="ui-tabs-active">
                                                    <a href="#snav-content1" class="d-flex">
                                                        <div class="me-4">
                                                            <div class="rounded-icon">
                                                                <i class="bi bi-calendar"></i>
                                                            </div>
                                                        </div>
                                                        
                                                        <div>
                                                            <h4 class="mb-1 fw-bold">Day 1-2 - Intro Hackathon</h4>
                                                            <span class="fc-muted">Thursday, February 16 2023 - Friday, February 17 2023</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li data-animate="fadeInUp" data-delay="40" class="my-4">
                                                    <a href="#snav-content2" class="d-flex">
                                                        <div class="me-4">
                                                            <div class="rounded-icon">
                                                                <i class="bi bi-calendar"></i>
                                                            </div>
                                                        </div>
                                                        
                                                        <div>
                                                            <h4 class="mb-1 fw-bold">Day 3 - Pitching Day</h4>
                                                            <span class="fc-muted">Saturday, February 18 2023</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li data-animate="fadeInUp" data-delay="50">
                                                    <a href="#snav-content3" class="d-flex">
                                                        <div class="me-4">
                                                            <div class="rounded-icon">
                                                                <i class="bi bi-calendar"></i>
                                                            </div>
                                                        </div>
                                                        
                                                        <div>
                                                            <h4 class="mb-1 fw-bold">Day 4 - Conference</h4>
                                                            <span class="fc-muted">Sunday, February 19 2023</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-md-6" data-animate="fadeIn" data-delay="30">
                                        <div id="snav-content1">
                                            <div>
                                                <h4 class="mb-4 fc-muted text-uppercase ls4 fw-normal">Agenda Day 1-2</h4>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>1.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Registers</h4>
                                                        <span class="fc-muted">Registrants will be shortlisted into 100 participants per track, for a total of 200 participants</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>2.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Introducing Bio x MIT Hacking Medicine</h4>
                                                        <span class="fc-muted">Chief of Transformation and Digital, MoH, MoSOE, Founder/C-Level of Start-up</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>3.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Team Formation</h4>
                                                        <span class="fc-muted">4-7 persons per team</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>4.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Starting Hackaton Day 1</h4>
                                                        <span class="fc-muted">48 hrs</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="snav-content2">
                                            <div>
                                                <h4 class="mb-4 fc-muted text-uppercase ls4 fw-normal">Agenda Day 3</h4>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>1.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Judges</h4>
                                                        <span class="fc-muted">Internal, Government and Private Sector</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>2.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Gala Dinner</h4>
                                                        <!-- <span class="fc-muted">IT, Healthcare and Business Exhibition</span> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="snav-content3">
                                            <div>
                                                <h4 class="mb-4 fc-muted text-uppercase ls4 fw-normal">Agenda Day 4</h4>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>1.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Conference</h4>
                                                        <span class="fc-muted">Full day event. The speakers are Stakeholders, SOE’s, Private Sectors</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>2.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Digital Expo</h4>
                                                        <span class="fc-muted">IT, Healthcare and Business Exhibition</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>3.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Workshop</h4>
                                                        <span class="fc-muted">IT, Healthcare and Business Workshop (Parallel)</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>4.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Networking Dinner</h4>
                                                        <span class="fc-muted">Welcoming and entertaining Hackathon participants</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <!-- Mobile -->
                            <div class="d-md-none d-md-block">
                                <div class="accordion mb-0 mt-6">

                                    <div class="accordion-card" data-animate="fadeInUp" data-delay="30">
                                        <div class="accordion-header">
                                            <div class="accordion-title">
                                                <a href="#snav-content1" class="d-flex">
                                                    <div class="me-4">
                                                        <div class="rounded-icon">
                                                            <i class="bi bi-calendar"></i>
                                                        </div>
                                                    </div>
                                                    
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Day 1-2 - Intro Hackathon</h4>
                                                        <span class="fc-muted">Thursday, February 16 2023 - Friday, February 17 2023</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="accordion-icon d-flex">
                                                <i class="accordion-closed bi bi-chevron-down"></i>
                                                <i class="accordion-open bi bi-chevron-up"></i>
                                            </div>
                                        </div>
                                        <div class="accordion-content">
                                            <div class="accordion-title">
                                                <h4 class="mb-4 fc-muted text-uppercase ls4 fw-normal">Agenda Day 1-2</h4>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>1.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Registers</h4>
                                                        <span class="fc-muted">Registrants will be shortlisted into 100 participants per track, for a total of 200 participants</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>2.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Introducing Bio x MIT Hacking Medicine</h4>
                                                        <span class="fc-muted">Chief of Transformation and Digital, MoH, MoSOE, Founder/C-Level of Start-up</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>3.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Team Formation</h4>
                                                        <span class="fc-muted">4-7 persons per team</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>4.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Starting Hackaton Day 1</h4>
                                                        <span class="fc-muted">48 hrs</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-card" data-animate="fadeInUp" data-delay="30">
                                        <div class="accordion-header">
                                            <div class="accordion-title">
                                                <a href="#snav-content1" class="d-flex">
                                                    <div class="me-4">
                                                        <div class="rounded-icon">
                                                            <i class="bi bi-calendar"></i>
                                                        </div>
                                                    </div>
                                                    
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Day 3 - Pitching Day</h4>
                                                        <span class="fc-muted">Saturday, February 18 2023</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="accordion-icon d-flex">
                                                <i class="accordion-closed bi bi-chevron-down"></i>
                                                <i class="accordion-open bi bi-chevron-up"></i>
                                            </div>
                                        </div>
                                        <div class="accordion-content">
                                            <div class="accordion-title">
                                                <h4 class="mb-4 fc-muted text-uppercase ls4 fw-normal">Agenda Day 3</h4>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>1.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Judges</h4>
                                                        <span class="fc-muted">Internal, Government and Private Sector</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>2.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Gala Dinner</h4>
                                                        <!-- <span class="fc-muted">IT, Healthcare and Business Exhibition</span> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-card" data-animate="fadeInUp" data-delay="30">
                                        <div class="accordion-header">
                                            <div class="accordion-title">
                                                <a href="#snav-content1" class="d-flex">
                                                    <div class="me-4">
                                                        <div class="rounded-icon">
                                                            <i class="bi bi-calendar"></i>
                                                        </div>
                                                    </div>
                                                    
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Day 4 - Conference</h4>
                                                        <span class="fc-muted">Sunday, February 19 2023
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="accordion-icon d-flex">
                                                <i class="accordion-closed bi bi-chevron-down"></i>
                                                <i class="accordion-open bi bi-chevron-up"></i>
                                            </div>
                                        </div>
                                        <div class="accordion-content">
                                            <div class="accordion-title">
                                                <h4 class="mb-4 fc-muted text-uppercase ls4 fw-normal">Agenda Day 4</h4>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>1.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Conference</h4>
                                                        <span class="fc-muted">Full day event. The speakers are Stakeholders, SOE’s, Private Sectors</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>2.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Digital Expo</h4>
                                                        <span class="fc-muted">IT, Healthcare and Business Exhibition</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>3.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Workshop</h4>
                                                        <span class="fc-muted">IT, Healthcare and Business Workshop (Parallel)</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex mb-4">
                                                    <div class="me-4">
                                                        <div class="number fw-bold d-flex align-items-center justify-content-center">
                                                            <span>4.</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 class="mb-1 fw-bold">Networking Dinner</h4>
                                                        <span class="fc-muted">Welcoming and entertaining Hackathon participants</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div id="section-track" class="section parallax min-vh-100 dark m-0 border-0 d-flex track" data-bottom-top="background-position:0px 0px;" data-top-bottom="background-position:0px -300px;">
                        <div class="shape-divider" data-shape="wave" data-position="bottom" data-height="100" data-fill="#1F2642"></div>
                        <div class="vertical-middle">
                            <div class="container">
                                <h5 class="text-uppercase ls4 fw-normal mb-5 text-center" data-animate="fadeInUp" data-delay="10">Hackathon Track</h5>

                                <div class="row align-items-center gutter-40">
                                    <div class="col-md-6">
                                        <h2 class="text-capitalize fw-bold font-body mb-2" data-animate="fadeInUp" data-delay="20">Upstream</h2>
                                        <h4 class="mb-4" data-animate="fadeInUp" data-delay="30">Pharmaceutical & Biotechnology</h4>
                                        <p class="pb-0" data-animate="fadeInUp" data-delay="30">
                                            The Bio Farma group (including Kimia Farma and Indofarma) has an overstock of products worth 74 million USD, including vaccines, drugs, and medical devices. Despite the overstock, customers often cannot find the products they want. The group's current supply chain data is not properly streamed or uniformly calculated, making it difficult to identify the root cause of the problem. Any disruption in the supply chain could have a domino effect, leading to the unavailability of products downstream.
                                        </p>
                                    </div>

                                    <div class="col-md-6">
                                        <h2 class="text-capitalize fw-bold font-body mb-2" data-animate="fadeInUp" data-delay="40">Downstream</h2>
                                        <h4 class="mb-4" data-animate="fadeInUp" data-delay="50">Healthcare Providers & Retailers</h4>
                                        <p class="pb-0" data-animate="fadeInUp" data-delay="60">
                                            In Indonesia's e-retailing landscape, no healthcare player has offered a comprehensive end-to-end solution. There are still gaps in the business models of existing players and significant opportunities to optimize sales in existing outlets by improving the supply chain, packaging, and the online-to-offline experience for patients. Most players also do not address the need for continuity of care. Similarly, while Kimia Farma Mobile currently has a strong presence in e-pharmacy retail, it has not addressed the need for continuity of care or strengthened the online-to-offline experience.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id="section-participant" class="page-section participant bg-dark-2 pt-6">

                            <div class="center container">
                                <h5 class="text-uppercase ls4 fw-normal mb-2 fc-secondary" data-animate="fadeInUp" data-delay="10">Participants</h5>
                                <h2 class="text-capitalize fw-bold font-body" data-animate="fadeInUp" data-delay="20">Participant Roles</h2>
                                <p data-animate="fadeInUp" data-delay="30" class="fc-muted mb-4">
                                    200 international participants from G20 countries and ASEAN member states
                                </p>
                            </div>
                            
                            <div class="row clearfix mt-6 bg-dark">

                                <div class="row align-items-stretch">

                                    <div class="col-lg-4 d-none d-md-block participant-image"></div>
                                    <div class="col-lg-8">
                                        <div class="row align-items-stretch grid-border clearfix">
                                            <div class="col-lg-4 col-md-6 col-padding" data-animate="fadeInUp" data-delay="50">
                                                <div class="feature-box fbox-center fbox-dark fbox-plain">
                                                    <div class="fbox-icon">
                                                        <img src="../frontend/assets/images/user.svg" alt="">
                                                    </div>
                                                    <div class="fbox-content fbox-content-sm">
                                                        <h4>Business Strategist</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-padding" data-animate="fadeInUp" data-delay="60">
                                                <div class="feature-box fbox-center fbox-dark fbox-plain">
                                                    <div class="fbox-icon">
                                                        <img src="../frontend/assets/images/pentool.svg" alt="">
                                                    </div>
                                                    <div class="fbox-content fbox-content-sm">
                                                        <h4>Designer</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-padding" data-animate="fadeInUp" data-delay="70">
                                                <div class="feature-box fbox-center fbox-dark fbox-plain">
                                                    <div class="fbox-icon">
                                                        <img src="../frontend/assets/images/user-plus.svg" alt="">
                                                    </div>
                                                    <div class="fbox-content fbox-content-sm">
                                                        <h4>Health Professionals</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-padding" data-animate="fadeInUp" data-delay="80">
                                                <div class="feature-box fbox-center fbox-dark fbox-plain">
                                                    <div class="fbox-icon">
                                                        <img src="../frontend/assets/images/activity.svg" alt="">
                                                    </div>
                                                    <div class="fbox-content fbox-content-sm">
                                                        <h4>Patients</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-padding" data-animate="fadeInUp" data-delay="90">
                                                <div class="feature-box fbox-center fbox-dark fbox-plain">
                                                    <div class="fbox-icon">
                                                        <img src="../frontend/assets/images/briefcase.svg" alt="">
                                                    </div>
                                                    <div class="fbox-content fbox-content-sm">
                                                        <h4>Entrepreneurs</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-padding" data-animate="fadeInUp" data-delay="100">
                                                <div class="feature-box fbox-center fbox-dark fbox-plain">
                                                    <div class="fbox-icon">
                                                        <img src="../frontend/assets/images/code.svg" alt="">
                                                    </div>
                                                    <div class="fbox-content fbox-content-sm">
                                                        <h4>Developers</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                </div>

                            </div>

                    </div>

                    <div id="section-winner" class="page-section winner bg-dark-2 pt-6">
                        <div class="container clearfix">

                            <div class="center">
                                <h5 class="text-uppercase ls4 fw-normal mb-2 fc-secondary" data-animate="fadeInUp" data-delay="10">Winner</h5>
                                <h2 class="text-capitalize fw-bold font-body" data-animate="fadeInUp" data-delay="20">Prize for the Winner</h2>
                            </div>
                            
                            <div class="row clearfix mt-6 gx-6">

                                <div data-animate="fadeInUp" data-delay="30" class="col-lg-6 mb-5">
                                    <img src="../frontend/assets/images/winner.svg" alt="Winner">
                                </div>

                                <div class="col-lg-6">
                                    <div class="mb-5">
                                        <div class="d-flex align-items-center justify-content-center justify-content-lg-start mb-3" data-animate="fadeInUp" data-delay="30">
                                            <div class="prize mb-3 px-5 py-4 text-center">
                                                <h4 class="mb-0 fw-bold">Total Prize 16,000 USD</h4>
                                            </div>
                                        </div>
                                        <div class="mb-5">
                                            <h4 class="mb-3 fw-bold" data-animate="fadeInUp" data-delay="40">The top 3 teams will be rewarded with:</h4>
                                            <div class="d-flex mb-3 align-items-center" data-animate="fadeInUp" data-delay="50">
                                                <div class="me-3 icon d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-check2"></i>
                                                </div>
                                                <span class="fc-muted">Funds and cloud vouchers worth a total of 10,000 USD</span>
                                            </div>
                                            <div class="d-flex mb-3 align-items-center" data-animate="fadeInUp" data-delay="60">
                                                <div class="me-3 icon d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-check2"></i>
                                                </div>
                                                <span class="fc-muted">Implementation of the project as a pilot at sponsor
                                                </span>
                                            </div>
                                            <div class="d-flex align-items-center" data-animate="fadeInUp" data-delay="70">
                                                <div class="me-3 icon d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-check2"></i>
                                                </div>
                                                <span class="fc-muted">Total funding of 6,000 USD for the finalists
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="d-flex align-items-center justify-content-center justify-content-lg-start mb-3" data-animate="fadeInUp" data-delay="30">
                                            <div class="flight mb-3 px-5 py-4 text-center">
                                                <h4 class="mb-0 fw-bold">Flight to Boston</h4>
                                            </div>
                                        </div>
                                        <h4 class="mb-3 fw-bold" data-animate="fadeInUp" data-delay="70">Outstanding Participants</h4>
                                        <div class="d-flex mb-3 align-items-center" data-animate="fadeInUp" data-delay="80">
                                            <div class="me-3 icon d-flex align-items-center justify-content-center">
                                                <i class="bi bi-check2"></i>
                                            </div>
                                            <span class="fc-muted">A golden ticket to Boston including a flight worth 5,000 USD</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div id="section-partner" class="page-section partner bg-dark pt-6">
                        <div class="container clearfix">

                            <div class="center">
                                <h5 class="text-uppercase ls4 fw-normal mb-2 fc-secondary" data-animate="fadeInUp" data-delay="10">Partners</h5>
                                <h2 class="text-capitalize fw-bold font-body" data-animate="fadeInUp" data-delay="20">We partner with the best organizations and companies</h2>
                            </div>
                            
                            <div class="list clearfix mt-6" data-animate="fadeInUp" data-delay="30">
                                <div class="row gy-2">
                                    <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-4 center d-flex align-items-center justify-content-center">
                                        <img src="../frontend/assets/partners/BUMN.png" alt="Image">
                                    </div>
                                    <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-4 center d-flex align-items-center justify-content-center">
                                        <img src="../frontend/assets/partners/biofarma.svg" alt="Image">
                                    </div>
                                    <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-4 center d-flex align-items-center justify-content-center">
                                        <img src="../frontend/assets/partners/kimia-farma.svg" alt="Image">
                                    </div>
                                    <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-4 center d-flex align-items-center justify-content-center">
                                        <img src="../frontend/assets/partners/indofarma.svg" alt="Image">
                                    </div>
                                    <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-4 center d-flex align-items-center justify-content-center">
                                        <img src="../frontend/assets/partners/Mediverse.png" alt="Image">
                                    </div>
                                    <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-4 center d-flex align-items-center justify-content-center">
                                        <img src="../frontend/assets/partners/Medevo.png" alt="Image">
                                    </div>
                                    <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-4 center d-flex align-items-center justify-content-center">
                                        <img src="../frontend/assets/partners/Medwell.png" alt="Image">
                                    </div>
                                    <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-4 center d-flex align-items-center justify-content-center">
                                        <img src="../frontend/assets/partners/Medbiz.png" alt="Image">
                                    </div>
                                    <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-4 center d-flex align-items-center justify-content-center">
                                        <img src="../frontend/assets/partners/Q100.png" alt="Image">
                                    </div>
                                    <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-4 center d-flex align-items-center justify-content-center">
                                        <img src="../frontend/assets/partners/google-cloud.svg" alt="Image">
                                    </div>
                                    <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-4 center d-flex align-items-center justify-content-center">
                                        <img src="../frontend/assets/partners/Hello-Sehat.png" alt="Image">
                                    </div>
                                    <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-4 center d-flex align-items-center justify-content-center">
                                        <img src="../frontend/assets/partners/Pemimpin.id.png" alt="Image">
                                    </div>
                                    <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-4 center d-flex align-items-center justify-content-center">
                                        <img src="../frontend/assets/partners/Jabar-Digital-Service.png" alt="Image">
                                    </div>
                                    <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-4 center d-flex align-items-center justify-content-center">
                                        <img src="../frontend/assets/partners/1001-Startup-Digital.png" alt="Image">
                                    </div>
                                    <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-4 center d-flex align-items-center justify-content-center">
                                        <img src="../frontend/assets/partners/Agility-Transformation.png" alt="Image">
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section><!-- #content end -->

            <Footer/>

        </div><!-- #wrapper end -->
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
// import Header from './Header.vue'
// import Footer from './Footer.vue'
// export default {
//     components: { Header, Footer }
// }
</script>
