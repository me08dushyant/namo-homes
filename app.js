import { html, render } from 'https://unpkg.com/lit-html/lit-html.js';


let headertop = () => html`
<section id="top-bar" class="anim-3-all anim-3">
		<div class="container">
			<div class="row">
				<!-- .call-back -->
				<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 pull-left call-back">
					<a href="#"><i class="fa fa-phone"></i> Request Call Back</a>
				</div><!-- /.call-back -->
				<!-- .contact-info -->
				<div class="col-lg-5 col-md-6 col-sm-6 col-xs-12 pull-right text-right">
					<ul class="contact-info">
						<li><a href="#"><i class="fa fa-envelope"></i> info@namohomes.com</a></li>
						<li><a href="#"><i class="fa fa-phone"></i> 1800 -984-9658</a></li>
					</ul>
				</div><!-- /.contact-info -->
			</div>
		</div>
	</section><!-- /#top-bar -->
`;
render(headertop(),document.getElementById('main-top-bar'));

let hiddenbar =() => html`
<!-- .hidden-bar -->
<section class="hidden-bar anim-5">
	<div class="hidden-bar-closer">
		<button class="btn">
			<i class="fa fa-close"></i>
		</button>
	</div>
	<!-- .hidden-bar-wrapper -->
	<div class="hidden-bar-wrapper">

		<!-- .logo -->
		<div class="logo text-center">
			<a href="index.html">
				<img src="img/resources/header-inner-logo.png" alt="">
			</a>			
		</div><!-- /.logo -->
		<!-- .main-menu -->
		<div class="main-menu text-center">
        	<!-- .navigation -->
            <ul class="navigation clearfix">
                <li>
                	<a href="index.html">Home</a>
                </li>
                <li>
                	<a href="take-a-tour.html">Take a Tour</a>
                </li>
                <li> <a href="about.html">About Us</a>
                </li>
                <li>
                	<a href="gallery1.html">Gallery</a>
                </li>
                <li>
                	<a href="blog-left.html">News</a>
                </li>
                <li> <a href="contact.html">Contact Us</a>
                </li>
                
            </ul><!-- /.navigation -->
		</div><!-- /.main-menu -->
	</div><!-- /.hidden-bar-wrapper -->
</section><!-- /.hidden-bar -->
`
render(hiddenbar(),document.getElementById('hidden-bar'));

let navbar= () => html`
<header class="header-inner header-v2">
		<div class="container">
			<div class="row">
				<!-- .logo -->
				<div class="col-lg-3 col-md-3 col-sm-4 col-xs-6  logo anim-5 anim-5-all">
					<a href="index.html"><img src="img/resources/header-inner-logo.png" alt=""></a>
				</div><!-- /.logo -->
				<!-- .main-menu -->
				<nav class="col-lg-9 col-md-9 col-sm-8 col-xs-6  pull-right text-right anim-5 anim-5-all main-menu">
					<!-- .navbar-collapse -->
		            <div class="navbar-collapse collapse clearfix">
		            	<!-- .navigation -->
			            <ul class="navigation clearfix">
			                <li>
			                	<a href="index.html">Home</a>
			                </li>
			                <li>
			                	<a href="take-a-tour.html">Take a Tour</a>
			                </li>
			                <li> <a href="about.html">About Us</a>
			                </li>

			                <li>
			                	<a href="blog-left.html">News</a>
			                </li>
			                <li> <a href="contact.html">Contact Us</a>
			                </li>
			                
			            </ul><!-- /.navigation -->
		            </div><!-- /.navbar-collapse -->
		            <!-- .navbar-header -->
		            <div class="navbar-header">
		                <!-- .navbar-toggle -->    	
		                <button type="button" class="navbar-toggle hidden-bar-opener">
			                <span class="icon-bar"></span>
			                <span class="icon-bar"></span>
			                <span class="icon-bar"></span>
		                </button><!-- /.navbar-toggle -->    	
		            </div><!-- /.navbar-header -->
				</nav><!-- /.main-menu -->
			</div>
		</div>
	</header><!-- /.header-inner -->

</section>
`
render(navbar(),document.getElementById('nav-bar'));

let footer = () =>html`
<!-- #footer-home -->
<footer id="footer-home" class="anim-5-all text-center-sm text-center-xs">
	<div class="container">
		<div class="row">
			<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 pull-left">
				<a href="#"><img src="img/resources/header-inner-logo.png" alt=""></a>
			</div>
			<div class="col-lg-7 col-md-7 col-sm-12 pull-right text-right text-center-sm text-center-xs">
				<!-- .footer-menu -->
				<div class="footer-menu">
					<ul>
						<li><a href="index.html">Home</a></li>
	                    <li><a href="about.html">About Us</a></li>
	                    <li><a href="gallery1.html">Gallery</a></li>
	                    <li><a href="take-a-tour.html">Take a Tour</a></li>                
	                    <li><a href="blog-left.html">News</a></li>
	                    <li><a href="contact.html">Contact Us</a></li>
					</ul>
				</div><!-- /.footer-menu -->
				<!-- .footer-copyright -->
				<div class="footer-copyright">
					<p>Copyright &copy; NAMO HOMES,2020 All rights reserved.</p>
				</div><!-- /.footer-copyright -->
			</div>
		</div>
	</div>
</footer><!-- /#footer-home -->
`
render(footer(),document.getElementById('footer'));