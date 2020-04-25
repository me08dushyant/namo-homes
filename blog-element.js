import { LitElement, css , html } from 'lit-element';

const blogData = [
  {
    title: "This is a first Title",
    user: "Aman Madaan",
	date: ["09", "Aug"],
    photo: "img/blog-post/1	.jpg",
	html: '<strong>Ut enim </strong> <h1>ad minima </h1> <p>veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid etx ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla <a href="#">pariatur</a>.'
  },
  {
    title: "This is a Second Title",
    user: "Suri",
	date: ["01", "Mar"],
    photo: "img/blog-post/2	.jpg",
	html: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid etx ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.'
  },
  {
    title: "This is a Third Title",
    user: "Nishi Madaan",
	date: ["10", "July"],
    photo: "img/blog-post/3	.jpg",
	html: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid etx ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.'
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
          .single-blog-post .img-holder .overlay {
            background: rgba(255, 174, 0, 0.65);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            text-align: center;
            -webkit-transform: scale(0);
                -ms-transform: scale(0);
                    transform: scale(0);
          }
          .single-blog-post .img-holder .overlay a {
            display: table;
            width: 100%;
            height: 100%;
            color: #fff;
          }
          .single-blog-post .img-holder .overlay a .fa {
            display: table-cell;
            vertical-align: middle;
            font-size: 20px;
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
                          <div class="overlay"><a href="blog-single.html"><i class="fa fa-link"></i></a></div>
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

