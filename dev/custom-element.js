import { LitElement, css , html } from 'lit-element';

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

