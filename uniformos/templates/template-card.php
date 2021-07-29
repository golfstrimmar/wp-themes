<?php
/**
 * Template Name: Card
 */
get_header( 'revers' );
?>


  <section class="product" id="product">
        <div class="product__body">
          <div class="product__column">
            <div class="product__cat-links product-cat-links">
              <span>Kategorijos: &nbsp;</span
              ><a class="product-cat-links__link" href="#!"
                >mokyklinės uniformos<span> &nbsp;, &nbsp;</span></a
              ><a class="product-cat-links__link" href="#!"
                >pradinių klasių uniformos</a
              >
            </div>
            <div class="product__slider product-slider">
              <div class="slider">
                <ul class="slider__body slider-js-3">
                  <li
                    class="slider__item"
                    style="
                      background-image: url(<?php echo get_template_directory_uri()?>/assets/img/png/card/img-1.png);
                    "
                  ></li>
                  <li
                    class="slider__item"
                    style="background-image: url(<?php echo get_template_directory_uri()?>/assets/img/png/card/img-1.png)"
                  ></li>
                  <li
                    class="slider__item"
                    style="background-image: url(<?php echo get_template_directory_uri()?>/assets/img/png/card/img-1.png)"
                  ></li>
                  <li
                    class="slider__item"
                    style="background-image: url(<?php echo get_template_directory_uri()?>/assets/img/png/card/img-1.png)"
                  ></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="product__column product-description">
            <div class="product-description__title">Komplektas P21</div>
            <div class="product-description__links">
              <a href="#!">Mergaitės uniforma</a><span>&nbsp;/&nbsp;</span
              ><a href="#!"> Berniuko uniforma</a>
            </div>
            <div class="product-description__text">
              <p>
                Mergaitės sarafanas su pamušalu, užsegamas keturiomis sagutėmis
                petnešėlėse, šone – užtrauktuku. Durtas ties klubais, o nuo
                klubų puskliošis. Gali būti mokyklos logo. Gaminio siuvimui
                naudojamas laiko patikrintas audinys, kuris puikiai atrodo bei
                nešiojasi.
              </p>
              <p>
                <strong>Audinio sudėtis:</strong> vilna – 45 % poliesteris – 53
                % elastinas – 2 %
              </p>
              <p>
                <strong>Trikotažo sudėtis:</strong> vilna – 25 % akrilanas – 60
                % medvilnė – 15 %
              </p>
            </div>
            <button
              class="product-description__button btn--empty-white _20-24 btn-popup popup-init-js"
              type="button"
            >
              Pasiteirauti
            </button>
          </div>
        </div>
      </section>
      <div class="popup popup--card">
        <div class="popup__overlay">
          <div class="popup__inner">
            <section class="con-form" id="con-form">
              <form class="connect__form">
                <div class="connect__form-item">
                  <input
                    id="name"
                    required=""
                    placeholder=" Denzel Washington"
                  /><label for="name">What is your name?<span>*</span></label>
                </div>
                <div class="connect__form-item">
                  <input
                    id="email"
                    type="address"
                    required=""
                    placeholder=" thebestmail@mail.com"
                  /><label for="email"
                    >What is your address?<span>*</span></label
                  >
                </div>
                <div class="connect__form-item">
                  <input
                    id="phone"
                    type="phone"
                    required=""
                    placeholder=" thebestmail@mail.com"
                  /><label for="phone"
                    >What is your phone number?<span>*</span></label
                  >
                </div>
                <div class="connect__form-item">
                  <textarea
                    id="message"
                    type="text"
                    required=""
                    placeholder=" Your awesome message"
                    cols="40"
                    rows="6"
                  ></textarea
                  ><label for="message">Žinutė<span>*</span></label>
                </div>
                <div class="form__submit-button">
                  <button class="btn--success" id="submit-button" type="submit">
                    Siųsti
                  </button>
                </div>
              </form>
            </section>
            <i class="icon-x popup__close popup__close"></i>
          </div>
        </div>
      </div>
      <section
        class="slider-models slider-models--card"
        id="slider-same-products-card"
      >
        <div class="slider-models__body container">
          <div class="slider-models--card__title">
            <h3>Panašūs produktai</h3>
          </div>
          <div class="slider__slider slider-models__content slider">
            <ul class="slider-models__slider slider__body slider-js-4">
              <li class="slider-models__item slider-card">
                <a class="slider-card__link" href="#!"></a>
                <div
                  class="slider-card__img"
                  style="background-image: url('<?php echo get_template_directory_uri()?>/assets/img/png/card/img-2.png')"
                ></div>
              </li>
              <li class="slider-models__item slider-card">
                <a class="slider-card__link" href="#!"></a>
                <div
                  class="slider-card__img"
                  style="background-image: url('<?php echo get_template_directory_uri()?>/assets/img/png/card/img-3.png')"
                ></div>
              </li>
              <li class="slider-models__item slider-card">
                <a class="slider-card__link" href="#!"></a>
                <div
                  class="slider-card__img"
                  style="background-image: url('<?php echo get_template_directory_uri()?>/assets/img/png/card/img-4.png')"
                ></div>
              </li>
              <li class="slider-models__item slider-card">
                <a class="slider-card__link" href="#!"></a>
                <div
                  class="slider-card__img"
                  style="background-image: url('<?php echo get_template_directory_uri()?>/assets/img/png/card/img-5.png')"
                ></div>
              </li>
              <li class="slider-models__item slider-card">
                <a class="slider-card__link" href="#!"></a>
                <div
                  class="slider-card__img"
                  style="background-image: url('<?php echo get_template_directory_uri()?>/assets/img/png/card/img-2.png')"
                ></div>
              </li>
              <li class="slider-models__item slider-card">
                <a class="slider-card__link" href="#!"></a>
                <div
                  class="slider-card__img"
                  style="background-image: url('<?php echo get_template_directory_uri()?>/assets/img/png/card/img-3.png')"
                ></div>
              </li>
            </ul>
          </div>
        </div>
      </section>



<?php
get_footer();