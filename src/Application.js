import $ from 'jquery';

class Application {

    constructor(){
        this.firstContent = `
<div class="content">
  This is my first content injected with jquery.
</div>`;

        this.secondContent = `
<div class="second-content">
  This is my second content with italic style.
</div>
`;
    }

    renderFirstContent() {
        $("#main-container").append(this.firstContent);
    }

    renderSecondContent() {
        $("#main-container").append(this.secondContent);
    }
}

export default Application;
