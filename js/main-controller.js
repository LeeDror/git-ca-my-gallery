'use strickt'

function onInit() {
    init();
    renderProjs();
}

function renderProjs() {
    var projs = getProjs();
    var strHtmls = projs.map(function (proj) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.id}" onclick="renderModal('${proj.id}')">
                        <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.jpg" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${proj.name}</h4>
                        <p class="text-muted">Photography</p>
                    </div>
                </div>`
    })
    $('.projects').html(strHtmls.join(''));
    //console.log(strHtmls);
}

function renderModal(projId) {
    var proj = getProjByID(projId);
    strHtml = `<div class="portfolio-modal modal fade" id="portfolioModal${projId}" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="close-modal" data-dismiss="modal">
                                <div class="lr">
                                    <div class="rl"></div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-8 mx-auto">
                                        <div class="modal-body">
                                            
                                            <h2>${proj.name}</h2>
                                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                            <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}-full.jpg" alt="">
                                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
                                            dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                                            maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                            <ul class="list-inline">
                                            <li>Date: ${proj.publishedAt}</li>
                                            <li>Client: ${proj.client}</li>
                                            <li>Category: ${proj.category}</li>
                                            </ul>
                                            <button class="btn btn-primary" data-dismiss="modal" type="button">
                                                <i class="fa fa-times"></i>
                                                Close Project</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    $('.portfolio-modals').html(strHtml);
}



function sumbit() {
    var email = $('.contact-email').val();
    var subject = $('.contact-subject').val();
    var body = $('.contact-body').val();

    $('.contact-email').val('');
    $('.contact-subject').val('');
    $('.contact-body').val('');

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, "_blank");
}
