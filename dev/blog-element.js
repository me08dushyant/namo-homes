import { LitElement, css , html } from 'https://unpkg.com/lit-element/lit-element.js?module';

const blogData = [
  {
    title: "Rera Registration Certificate",
    user: "Admin",
	date: ["09", "May"],
    photo: "img/blog-post/1	.jpg",
	html: 'We present you RERA Registration Ceritificate.  <a href="img/blog-post/rera-certificate.pdf">Download PDF</a> for more details'
  },
  {
    title: "JDA Approved Certificate",
    user: "Admin",
	date: ["10", "May"],
    photo: "img/blog-post/2.png",
	html: 'We here announce that Namo Homes is now JDA Approved Project. <a href="img/blog-post/jda-approved-certificate.pdf">Download PDf</a> for more Details'
  },
  
  
];

		const query=window.location.search;
		const urlParams = new URLSearchParams(query);
		const blogNum = urlParams.get('path'); 


class myblog extends LitElement {
    static get properties() {
        return { title: { type: String } };
		return { bloging: { type: Object } };
		return { blogIndex:{type: Number}};
		return { blogRange:{type: Number}};
		return {blogArray:{type: Array}};
      }
    
      constructor() {

		
        super();
		

		
		this.blogIndex = Number(blogNum);
		this.blogRange =  this.blogIndex + 3;
        this.title = 'tile comes here';
		this.myArray = blogData;
		
		
		
		

		  
      }
    static get styles() {
        return css`
        *{
            margin:0;
        }
          .single-blog-post:hover h2.title {
            color: #FFAE00;
          }
          .single-blog-post .img-holder {
            position: relative;
          }
          .single-blog-post .img-holder img {
            width: 100%;
          }
          .single-blog-post .img-holder .date {
            position: absolute;
            bottom: 0;
            right: 0;
            display: inline-block;
            background: #FFAE00;
            color: #2A2D34;
            font-size: 14px;
            line-height: 21px;
            padding-top: 15px;
            padding-bottom: 43px;
            padding-right: 15px;
            padding-left: 20px;
            z-index: 9;
          }
          .single-blog-post .img-holder .date b {
            font-size: 25px;
            font-weight: bold;
            display: block;
          }
          
          .single-blog-post ul {
            padding: 19px 0 26px;
          }
          .single-blog-post ul li {
            display: inline;
          }
          .single-blog-post ul li a,
          .single-blog-post ul li span {
            display: inline-block;
            font-family: 'PT Serif', sans-serif;
            font-style: italic;
            color: #B5B5B5;
            font-size: 16px;
            line-height: 26px;
            font-weight: normal;
            text-decoration:none;
          }
          .single-blog-post ul li span:after {
            content: '|';
            color: #B5B5B5;
            font-size: 16px;
            line-height: 26px;
            display: inline-block;
            margin-left: 15px;
            margin-right: 10px;
          }
          .single-blog-post h2.title {
            font-size: 22px;
            font-weight: bold;
            text-transform: uppercase;
            color: #000000;
            margin-bottom:0px;
          }
          .single-blog-post p {
            font-size: 14px;
            line-height: 26px;
            font-weight: 500;
            color: #8E8D8D;
            margin: 0;
            margin-bottom: 13px;
          }
          .single-blog-post > a {
            font-size: 14px;
            color: #1BC3F3;
            text-transform: uppercase;
            font-weight: bold;
          }
          .single-blog-post a:hover {
            color: #FFAE00;
          }
          .anim-5-all * {
            transition: all 0.5s ease;
            -moz-transition: all 0.5s ease;
            -webkit-transition: all 0.5s ease;
            -ms-transition: all 0.5s ease;
            -o-transition: all 0.5s ease;
          }
           .post-meta .title-holder ul {
            padding: 0;
          }
           .post-meta h2 {
            font-size: 22px;
            line-height: 26px;
            margin: 0;
          }
           .single-blog-post .img-holder {
            display: inline-block;
          }
           .single-blog-post .post-meta {
            margin: 40px 0 32px;
          }
           .single-blog-post .post-meta .date-holder,
           .single-blog-post .post-meta .title-holder {
            display: table-cell;
          }
           .single-blog-post .post-meta .date-holder {
            text-align: center;
            background: #2A2A2A;
            color: #fff;
            border-bottom: 4px solid  #E8A20C;
            font-size: 14px;
            line-height: 21px;
            padding: 10px 15px;
          }
           .single-blog-post .post-meta .date-holder b {
            font-size: 25px;
            font-weight: bold;
            display: block;
          }
           .single-blog-post .post-meta .title-holder {
            padding-left: 30px;
            vertical-align: top;
          }
           .single-blog-post .post-meta .title-holder ul {
            padding-top: 5px;
          }
           .single-blog-post .post-meta .title-holder ul li:last-child a:after {
            display: none;
          }
           .single-blog-post .post-meta .title-holder ul li a:after {
            content: '|';
            display: inline-block;
            padding: 0 13px;
            color: #B5B5B5;
          }
            .single-blog-post a.read-more {
            text-transform: capitalize;
            display: inline-block;
            color: #2A2A2A;
            font-size: 15px;
            line-height: 20px;
            padding: 7px 28px;
            border: 1px solid #2A2A2A;
            font-family: 'PT Serif', sans-serif;
            font-style: italic;
            margin-top: 10px;
            text-decoration:none;
            margin-bottom:50px;
          }
           .single-blog-post a.read-more:hover {
            color: #fff;
            background: #FFAE00;
            border-color: #FFAE00;
          }
        `;
    }
	
	

	
  render() {
 /*   return html`
		Here some text comes ${2+2} ${blogData.length} ${blogData.map(function(bloging) {
			
			return `					
				Hi <h1> asas </h1> ${bloging.title}  
			
			`
			
		})}
		<h3>${blogData.title}</h3>

		
		`; 
		
		        ${this.myArray.map(i => html`  <li>${i.title}</li>` )}
				
				
							  
       ${this.myArray.slice(1,2).map(i => html`  <li>${i.title}</li>` )}
	   ${this.myArray.slice(1,2).map(i => html`  <h3>${i.species}</h3>` )}
	   
	   ${this.myArray.slice(1,4).map(i => html`  <li>${i.title}</li>` )}
	   ${this.myArray.slice(1,4).map(i => html`  <h3>${i.species}</h3>` )}
	   
		*/
		
	 return html`  
 ${this.myArray.slice(this.blogIndex, this.blogRange).map(i => html`
 
      <!-- .single-blog-post -->
                  <div class="single-blog-post anim-5-all">
                      <!-- .img-holder -->
                      <div class="img-holder">
                          <img src=${i.photo} alt="">
                          
                      </div><!-- /.img-holder -->
                      <!-- .post-meta -->
                      <div class="post-meta">
                          <div class="date-holder">
                              <b>${i.date[0]}</b>${i.date[1]}
                          </div>
                          <div class="title-holder">
                              <h2 class="title">${i.title}</h2>
                              <ul>
                                  <li><a href="#">By ${i.user}</a></li>
                               <!--   <li><a href="#">Home made pizza</a></li>
                                   <li><a href="#">Comments: 5</a></li> -->
                              </ul>
                          </div>
                      </div><!-- /.post-meta -->
                      <!-- .content -->
                      <div class="content">
                       ${document.createRange().createContextualFragment(i.html)}
  
                         <!--  <a href="blog-single.html" class="read-more">Read More</a> --> <br/><br/>
                      </div><!-- /.content -->
                  </div>
                  <!-- .single-blog-post -->
				  
				  ` )}
 
 
    `;
  }
}
customElements.define('my-blog', myblog);

