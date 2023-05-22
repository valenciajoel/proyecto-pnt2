
<script setup>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

</script>
<script>
</script>

<template>
    <div class="container">
        <div class="row">
            <div id="carouselProducts" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselProducts" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselProducts" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselProducts" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://th.bing.com/th/id/OIP.gmU2B0cv8ztB53Q-4ebMvQHaLH?pid=ImgDet&rs=1"
                            class="d-block w-100" style="width: 300px; height: 600px;">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdna.lystit.com/photos/saksfifthavenue/0400088573611-camelia-7663d5ab-.jpeg"
                            class="d-block w-100" style="width: 300px; height: 600px;">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.sBNBkLGHyeVD1fyADMFLkQHaFS?pid=ImgDet&rs=1"
                            class="d-block w-100" style="width: 300px; height: 600px;">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselProducts" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselProducts" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div class="row">
            <div id="carouselCards" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselCards" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselCards" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselCards" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="card-group">
                            <div class="card">
                                <img src="https://cdna.lystit.com/photos/saksfifthavenue/0400088573611-camelia-7663d5ab-.jpeg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://cdna.lystit.com/photos/saksfifthavenue/0400088573611-camelia-7663d5ab-.jpeg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://cdna.lystit.com/photos/saksfifthavenue/0400088573611-camelia-7663d5ab-.jpeg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This card has even longer content than the first to
                                        show that equal height action.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card-group">
                            <div class="card">
                                <img src="https://cdna.lystit.com/photos/saksfifthavenue/0400088573611-camelia-7663d5ab-.jpeg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://cdna.lystit.com/photos/saksfifthavenue/0400088573611-camelia-7663d5ab-.jpeg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://cdna.lystit.com/photos/saksfifthavenue/0400088573611-camelia-7663d5ab-.jpeg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This card has even longer content than the first to
                                        show that equal height action.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="card-group">
                            <div class="card">
                                <img src="https://cdna.lystit.com/photos/saksfifthavenue/0400088573611-camelia-7663d5ab-.jpeg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://cdna.lystit.com/photos/saksfifthavenue/0400088573611-camelia-7663d5ab-.jpeg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://cdna.lystit.com/photos/saksfifthavenue/0400088573611-camelia-7663d5ab-.jpeg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This card has even longer content than the first to
                                        show that equal height action.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselCards" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselCards" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>


    </div>
</template>

  

<style lang="">

</style>
