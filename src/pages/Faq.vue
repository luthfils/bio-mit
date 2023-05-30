<template>
    <div>
        <div class="body-overlay"></div>

        <!-- Document Wrapper
        ============================================= -->
        <div id="wrapper" class="clearfix">

            <Header/>
            <!-- Page Title
            ============================================= -->
            <section id="content">
                <div class="content-wrap py-0">
                    <div id="section-faq" class="page-section page-title  bg-dark">
                        <div class="container clearfix">
                            <div class="wow fadeInUp center" data-wow-delay="100ms">
                                <h1 class="fw-900 mb-2">FAQ</h1>
                                <span class="fc-muted wow fadeInUp" data-wow-delay="200ms">All your questions answered in one place</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section><!-- #page-title end -->

            <!-- Content
            ============================================= -->
            <section id="content">
                <div class="content-wrap py-0">
                    <div id="section-faq" class="page-section py-0 faq bg-dark">
                        <div class="container clearfix pb-6">

                            <h2 class="center mb-3 text-capitalize fw-bold font-body wow fadeInUp" data-wow-delay="300ms">Bio Farma X MIT Hacking Medicine 2023 FAQs</h2>

                            <div class="clearfix gx-6 mt-6">

                                <div class=" wow fadeInUp"  data-wow-delay="300ms">
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                What is a healthcare hackathon?
                                            </button>
                                            </h2>
                                            <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                A Hackathon is an event in which people with different backgrounds and expertise form teams, collaborate within a limited time frame, and focus on a specific problem or idea in healthcare to come up with innovative, disruptive ideas and solutions. By bringing together diverse minds alike in their interest for solving healthcare’s biggest challenges, problems can be diagnosed from multiple different perspectives. Watch 
                                                <a href="https://www.youtube.com/watch?v=9SubjvrEh6U&t=2s">this video </a>
                                                from GrandHack 2023 to feel the passion of MIT Healthcare Grandhack!
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                What is the Bio Farma X MIT Hackathon?
                                            </button>
                                            </h2>
                                            <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Bio Farma, in collaboration with MIT is bringing a healthcare hackathon to Indonesia. We’re hard at work to make this Bio Farma X MIT Hacking Medicine a wonderful experience. Interested in innovating for healthcare’s toughest pain points? This is the weekend to meet, ideate, and hack with hundreds of like-minded entrepreneurs, designers, engineers, and healthcare professionals.
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                How can I get involved?
                                            </button>
                                            </h2>
                                            <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                The application for participating at the MIT Grand Hack is available
                                                <RouterLink to="/register">
                                                    here!
                                                </RouterLink>
                                                Applications will be accepted on a rolling basis. Upon acceptance, we will route you to a confirmation call to RSVP and confirm your participation.
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- <div class="col-lg-6 order-1 order-lg-2 text-lg-end text-center mb-5 sticky-sidebar-wrap">
                                    <div class="sticky-sidebar">
                                        <div>
                                            <h5 class="text-uppercase ls4 fw-normal mb-2 fc-secondary" data-wow-delay="100ms">Faq</h5>
                                            <h2 class="text-capitalize fw-bold font-body wow fadeInUp" data-wow-delay="300ms">Frequently Asked <br class="d-none d-lg-block">Questions</h2>
                                        </div>
                                        <img src="../frontend/assets/images/faq.svg" alt="FAQ" class="wow fadeInUp"  data-wow-delay="400ms">
                                    </div>
                                </div> -->

                            </div>

                            <div class="center mt-6 wow fadeInUp" data-wow-delay="100ms">
                                <h3 class="text-capitalize fw-bold font-body">
                                    Can’t find the answer?
                                </h3>
                                <RouterLink to="/contact">
                                    <button class="button button-large button-circle button-large fw-medium">Contact Us</button>
                                </RouterLink>
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
</script>