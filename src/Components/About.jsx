import React from 'react'
import './About.css';
import  Image  from '../img/about us.jpg';
import img from '../img/laptop-3850222_640.png'
import './About.css';
function About() {
  return (
       <div>
       <div class="container banner_area" id='main_menu_top'>
                <div class="banner_inner_test">
                    <h1>About Us</h1>
                    <p>Get to know us</p>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 challange_img">
                        <div class="challange_img_inner">
                        <img src={Image} alt="not found" width={500}/>
                        </div>
                    </div>  
                    <div class="col-lg-6">
                        <div class="challange_text_inner">
                            <div class="l_title">
                           
                                <h3>About Fact</h3>
                                <h2>About Company</h2>
                            </div>
                            <p>We proudly introduce ourselves that we have started our manpower supply service business during August, 2009 as a proprietary concern. Later on we have registered under the registration of companies Act, during the year 2011 in the name of IFS India Mercantile Pvt.Ltd., Our company is a well-established and one of the top most manpower service providers in the Pune area. Our company is operating actively from its base location/office in Pune. We exclusively undertake Manpower, Labour Contract and related activities in and around Pune. We have young, energetic, experienced and result oriented teams alone, in the vein of integrated Manpower follow-up teams. </p>
                          
                        </div>
                    </div>
                </div>
            </div>
      
        {/* <!--================End Banner Area =================-->
        
        <!--================Challange Area =================--> */}
       
       
        {/* <!--================End Challange Area =================-->
        
        <!--================Testimonials Slider Area =================--> */}
     
        <section class="best_3d_area">
            <div class="left_3d">
                <div class="shap_slider_inner owl-carousel">
                    <div class="item">
                        <h3>“Goal definition”</h3>
                            <p>When you choose IFS Technology as your IT services, consulting and business solutions partner, you will discover what so many global enterprises have already discovered the power of certainty. Our continued rapid growth is a testament to the certainty our clients experience every day.</p>

                    </div>
                    <div class="item">
                        <h3>“Analyse”</h3>
                            <p>Our experience ranges from development of complex website functionality to web applications tailored to your individual business requirements. A company analysis also allows corporate bosses to determine where there are efficiencies or wastes. </p>                        
                    </div>
                </div>
            </div>


            <div class="right_text">
                <div class="right_text_inner">
                    <div class="text_3d">
                        <div class="l_title">
                            <h2>“Implementation”</h2>
                        </div>

                            <p>The Next Stage. Business environment which prioritizes flexibility, speed, and efficiency, a robust IT strategy is critical. We help you achieve these qualities in your IT strategy by providing you system integration, testing, application development and management services and solutions.</p>
                        
                    </div>
                    <div class="shap_mobile"><br />
                    <br /><br /><br />
                    <img src={img} height="300px" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--================End Testimonials Slider Area =================-->
        
        <!--================We Are Company Area =================--> */}
        <div class="we_company_area p_100">
            <div class="Container">
                <div class="row company_inner">
                    <div class="col-lg-6">
                        <div class="left_company_text">
                            <div class="l_title">
                              
                                <h2>About <span>Us</span></h2>
                                <h6>Winning clients Satisfaction</h6>
                            </div>
                            {/* <h4>Web Development</h4>
                            <p style="font-size: 14px;">We help you to identify, plan and implement critical web applications that become a competitive resource to your business operations and process.</p>
                            <br/>
                            <h4>It Services Software System</h4>
                            <p style="font-size: 14px;">We develop and support all Information technology relative software systems including prioritizes flexibility, speed, and efficiency, a robust IT strategy.</p>
                            <br/>
                            <h4>Man Power</h4>
                            <p style="font-size: 14px;">IFS India is a world leader in innovative workforce solutions. IFS India provides end to end Human Resource Management to organizations and helps them address their critical talent needs by providing comprehensive Workforce Management from Recruitment Process Outsourcing (RPO) to Staffing Solutions.</p>
                 */}
                        
                    </div>
                    <div class="col-lg-6">
                        <div class="company_skill">
                            <h4>Out Sourcing</h4>
                                   <div class="our_skill_inner">
                                <div class="single_skill">
                                    <h3>Web Development</h3>
                                    <div class="progress" data-value="90">
                                        <div class="progress-bar">
                                            <div class="progress_parcent"><span class="counter">90</span>%</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single_skill">
                                    <h3>It Services Software Syatem</h3>
                                    <div class="progress" data-value="90">
                                        <div class="progress-bar">
                                            <div class="progress_parcent"><span class="counter">90</span>%</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single_skill">
                                    <h3>Man Power</h3>
                                    <div class="progress" data-value="100">
                                        <div class="progress-bar">
                                            <div class="progress_parcent"><span class="counter">100</span>%</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single_skill">
                                    <h3>Out Sourcing</h3>
                                    <div class="progress" data-value="100">
                                        <div class="progress-bar">
                                            <div class="progress_parcent"><span class="counter">100</span>%</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single_skill">
                                    <h3>Design</h3>
                                    <div class="progress" data-value="90">
                                        <div class="progress-bar">
                                            <div class="progress_parcent"><span class="counter">90</span>%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
         <section class="talk_area">
            <div class="Container">
                <div class="talk_text">
                    <h4>Are you ready to talk?</h4>
                    <a href="admin@ifsindia.org">admin@ifsindia.org</a>
                </div>
            </div>
        </section>

        <footer class="footr_area">
            <div class="footer_widget_area">
                <div class="container">
                    <div class="row footer_widget_inner">
                        <div class="col-lg-4 col-sm-6">
                            <aside class="f_widget f_about_widget">
                                <img src="img/logo (2).png" alt=""/>
                                <p>IFS is a leading IT solutions provider, offering Applications, you will discover what so many global enterprises have already discovered the power of certainty. Over the years we have left an indelible impression in the IT solutions domain with an impressive clientele and an extensive global presence.</p>
                            </aside>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <aside class="f_widget f_insta_widget">
                                <div class="f_title">
                                    <h3>Social Site</h3>
                                </div>
                                <ul>
                                    {/* <li><a href="#"><img src="img/instagram/ins-1.jpg" alt=""></a></li>
                                    <li><a href="#"><img src="img/instagram/ins-2.jpg" alt=""></a></li>
                                    <li><a href="#"><img src="img/instagram/ins-3.jpg" alt=""></a></li>
                                    <li><a href="#"><img src="img/instagram/ins-4.jpg" alt=""></a></li>
                                    <li><a href="#"><img src="img/instagram/ins-5.jpg" alt=""></a></li>
                                    <li><a href="#"><img src="img/instagram/ins-6.jpg" alt=""></a></li>
                                    <li><a href="#"><img src="img/instagram/ins-7.jpg" alt=""></a></li>
                                    <li><a href="#"><img src="img/instagram/ins-8.jpg" alt=""></a></li> */}
                                </ul>
                            </aside>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <aside class="f_widget f_subs_widget">
                                <div class="f_title">
                                    <h3>Subscribe to newsletter</h3>
                                </div>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Your e-mail address here" aria-label="Your e-mail address here"/>
                                    <span class="input-group-btn">
                                        <button class="btn btn-secondary submit_btn" type="button">Subscribe</button>
                                    </span>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer_copyright">
                <div class="container">
                    <div class="float-sm-left">
                        <h5>
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved by <a href="ifsindia.org" target="_blank">IFS India Mercantile Pvt.Ltd.</a>
</h5>
                    </div>
                    <div class="float-sm-right">
                        <ul>
                            <li><a href="https://www.facebook.com/pg/IFS-India-Mercantile-Pvt-Ltd-106903187334846"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/IfsPvt"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="www.linkedin.com/in/IFS-India"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
      
    </div>
           </div>
  )
}

export default About