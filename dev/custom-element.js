import { LitElement, css , html } from 'https://unpkg.com/lit-element/lit-element.js?module';

class MyElement extends LitElement {
    static get properties() {
        return { name: { type: String } };
      }
    
      constructor() {
        super();
        this.name = 'name';
      }
    static get styles() {
        return css`
        /*======== page title Styles ===========*/
#page-title {
  background-size: cover;
  background-position: center center;
  padding: 135px 0 90px 0;
}
#page-title h2 {
  color: #fff;
  text-transform: uppercase;
  font-size: 24px;
  background: #2A2A2A;
  border-bottom: 4px solid  #ECAC48;
  display: inline-block;
  font-weight: bold;
  padding: 9px 45px;
}
/*======== about page content Styles ===========*/
        `;
    }
  render() {
    return html`
    <section id="page-title" style="background-image: url('img/page-title/bg.jpg');">
	<div class="container">
		<div class="row">
			<div class="col-lg-12" style="margin-left:180px;">
				<h2>${this.name}</h2>
			</div>
		</div>
	</div>
</section>
`;
  }
}
customElements.define('my-element', MyElement);

class MyElement1 extends LitElement {
  static get properties() {
      return { name: { type: String } };
    }
    static get styles() {
      return css`
        .side-bar{
            position: relative;
            padding-bottom: 65px;
          
        }
        .side-bar:before{
          content: '';
          position: absolute;
          top: 5px;
          left: 5px;
          right: 5px;
          bottom: 5px;
          border: 1px solid #4B4A48;
          border-radius: 5px;
        }
        .address p {
          font-size: 16px;
          line-height: 26px;
          color: #FFFFFF;
          font-size: 20px;
          font-weight: 600;
          word-wrap: break-word;
          text-align: left;
        }
        .options ul li {
          font-size: 16px;
          line-height: 44px;
          color: #fff;
          text-transform: uppercase;
          font-size: 20px;
          font-weight: bold;
          text-align: left;
        }
        .address {
          padding: 45px 0px 25px;
          margin: 0 32px;
          border-top: 1px solid #1C1919;
          border-bottom: 1px solid #1C1919;
        }
        .address p {
          font-size: 16px;
          line-height: 26px;
          color: #FFFFFF;
          font-size: 20px;
          font-weight: 600;
          margin: 0;
        }
        .options {
          padding: 22px 0px;
          margin: 0 32px;
          border-bottom: 1px solid #1C1919;
        }
        .options ul li {
          font-size: 16px;
          line-height: 44px;
          color: #fff;
          text-transform: uppercase;
          font-size: 20px;
          font-weight: bold;
        }
        .price {
          padding: 17px 0px;
          margin: 0 32px;
          text-align: left;
        }
        .number {
          font-family: 'PT Serif', sans-serif !important;
          font-style: italic;
      }
      .price label {
        display: block;
        color: #fff;
        font-size: 25px;
        line-height: 45px;
        font-weight: 600;
      }
      .price b {
        font-weight: bold;
        font-size: 38px;
        line-height: 45px;
        color: #E8A20C;
        color: #E8A20C;
        font-size: 46px;
        font-weight: normal;
      }
      a.schedule-visit {
        font-size: 16px;
        line-height: 26px;
        color: #000000;
        font-weight: bold;
        display: inline-block;
        background: #E8A20C;
        border-radius: 5px;
        padding: 13px 30px;
        margin-top: 58px;
        text-transform: uppercase;
        transition: all .3s ease;
        position: relative;
        left:30px;
      }
      a.schedule-visit i {
        font-size: 18px;
        color: #000000; 
        margin-left: 50px;
        
      }
      a.schedule-visit:hover {
        background: #1bc3f3;
        color: #fff;
      }
      a.schedule-visit:hover i {
        color: #fff;
      }
      `;
    }
    render(){
      return html `
              <div class="side-bar">
							<!-- .address -->
							<div class="address">
								<p>NAMO HOMES <br>Jhansi -UP</p>
							</div><!-- /.address -->
							<!-- .options -->
							<div class="options">
								<ul>
									<li><span class="number">2</span> Bathrom</li>
									<li><span class="number">2</span> Drawingroom</li>
									<li><span class="number">3150</span> Sq.ft</li>
								</ul>
							</div><!-- /.options -->
							<!-- .price -->
							<div class="price">
								<label class="number">Price: </label>
								<b class="number price-number">5,00,000,Rs</b>
							</div><!-- /.price -->
							<a href="#" class="schedule-visit anim-5" data-toggle="modal" data-target="#contact-agent-modal">Schedule Visit <i class="fa fa-arrow-circle-right"></i></a>
						</div>
          </div>
          </div>
      `;
    }
  }
  customElements.define('my-element1', MyElement1);
