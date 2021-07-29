<section class="s1 s3" id="s3">
  <div class="container">
    <div class="s1__item s1-item s1__item--s3">
      <div class="s1-item__column">




        <?php
     if (get_page_by_path("websites" )->ID  == get_the_ID()) { 
    ?>
        <span class="_big-number">03<span>KAIP MES KURIAME GERUS TINKLAPIUS?</span></span>
        <div class="s1-item__title title-1">
          <h2>Bet kurioje mūsų klientų istorijoje<br> mes orientuojamės į rezultatą <span>—</span></h2>
        </div>
        <div class="s1-item__description s1-item__description--s3">
          <p>
            Internetinio projekto sukūrimas panašus į pastato statybą. Kad nesugriūtų, reikalingas tvirtas pamatas. Mūsų
            atveju tai stipri koncepcija ir geras tekstas. Pradedame nuo prototipo ir etapais judame link galutinio
            produkto. Padėsime jums rasti sprendimą, bet kokioje situacijoje.
          </p>
          <div class="s3__buttons">
            <a class="s3__button btn btn--empty" target="_blank"
              href="https://www.facebook.com/pg/bereklamosnegerai.lt/reviews/">ATSILIEPIMAI</a>
              <a
              class="s3__button btn btn--empty  popup-init-js" href="#!" rel="popup-web">
              GAUTI PASIŪLYMĄ</a>
          </div>
        </div>
        <?php
    }
    else{
    
    if (get_page_by_path("teachings" )->ID  == get_the_ID()){
    ?>
        <span class="_big-number">03<span>SUSIPAŽINKITE SU LEKTORIUMI</span></span>
        <div class="s1-item__title title-1">
          <h2>Aurimas Skaržinskas <span>—</span><br>UAB Ateities rinkodara<br> Marketingo vadovas</h2>
        </div>
        <div class="s1-item__description s1-item__description--s3">
          <p>
            Kalbu jums suprantama kalba, nesiekiu perkrauti Jūsų marketingo terminų žiniomis. Bet kurioje savo kliento
            istorijoje orientuojuos į rezultatą. Dirbau su daugiau nei 100 skirtingų verslų Lietuvoje ir užsienyje,
            todėl parodysiu jums labiausiai atsipirkusias reklamas. Taip pat ir tas reklamas, kurios nebuvo sėkmingos.
          </p>
          <div class="s3__buttons">
            <div class="fdc">
              <div class="s3__chip s3__chip--1 s3-chip">
                <img class="s3-chip__img" src="<?php echo get_template_directory_uri()?>/assets/img/svg/chip-1.svg"
                  alt="img" />
                <div class="s3-chip__text">19 394 užklausų</div>
              </div>
              <div class="s3__chip s3__chip--2 s3-chip">
                <img class="s3-chip__img" src="<?php echo get_template_directory_uri()?>/assets/img/svg/chip-2.svg"
                  alt="img" />
                <div class="s3-chip__text"> 6 400 000 € pajamų</div>
              </div>
              <div class="s3__chip s3__chip--3 s3-chip">
                <img class="s3-chip__img" src="<?php echo get_template_directory_uri()?>/assets/img/svg/chip-3.svg"
                  alt="img" />
                <div class="s3-chip__text">ROAS 49,77€</div>
              </div>
            </div>
            <a class="s3__button btn btn--empty" target="_blank"
              href="https://www.facebook.com/pg/bereklamosnegerai.lt/reviews/">ATSILIEPIMAI</a>
              
              
              <a
              class="s3__button btn btn--empty  popup-init-js" href="#!" rel="popup-main">
              GAUTI PASIŪLYMĄ</a>
          </div>
        </div>

        <?php
    }
    else{
    ?>
        <span class="_big-number">03<span>TIEK PAJAMŲ PADĖJOME SUGENERUOTI MŪSŲ KLIENTAMS</span></span>
        <div class="s1-item__title title-1">
          <h2>6 400 000 € <span>—</span></h2>
        </div>
        <div class="s1-item__description s1-item__description--s3">
          <p>
            Kalbame jums suprantama kalba, nesiekiame perkrauti Jūsų
            marketingo, tinklapių kūrimo ar programavimo terminų žiniomis.
            <span>Bet kurioje mūsų klientų istorijoje mes orientuojamės į
              rezultatą.</span>
            Padėsime jums rasti sprendimą, bet kokioje situacijoje.
          </p>
          <div class="s3__buttons">
            <a class="s3__button btn btn--empty" target="_blank"
              href="https://www.facebook.com/pg/bereklamosnegerai.lt/reviews/">ATSILIEPIMAI</a>
            <a class="s3__button btn btn--empty popup-init-js" href="#!" rel="popup-main">
              GAUTI PASIŪLYMĄ</a>
          </div>
        </div>
        <?php
    }
    }
    ?>



      </div>
    </div>





    <!-- ------------------------------------------------- -->

    <?php
     if (get_page_by_path("websites" )->ID  == get_the_ID()) { 
    ?>
    <section class="s3__cards s3-cards s3-cards--websites">
      <ul class="s3-cards__body">
        <li class="s3-cards__item s3-cards-item">
          <div class="s3-cards--websites__img">
            <img src="<?php echo get_template_directory_uri()?>/assets/img/svg/websites-card-1.svg" alt="img" />
          </div>
          <div class="s3-cards--websites__title">
            Neperšame, o kalbame apie naudą
          </div>
          <div class="s3-cards-item__description">
            Kad puslapis ne bruktų, o atvestų klientus, mes ieškome naudos
            užsakovo pasiūlymo viduje, o ne surenkame ją iš
          </div>
        </li>
        <li class="s3-cards__item s3-cards-item">
          <div class="s3-cards--websites__img">
            <img src="<?php echo get_template_directory_uri()?>/assets/img/svg/websites-card-3.svg" alt="img" />
          </div>
          <div class="s3-cards--websites__title">
            Išleidžiame veikiantį gaminį
          </div>
          <div class="s3-cards-item__description">
            Išleidžiame paruoštą instrumentą, su kuriuo galima dirbti ir
            po paleidimo. Mes pajungiame administravimo sistemą, kuris
            padės redaguoti turinį, kai to prireiks
          </div>
        </li>
        <li class="s3-cards__item s3-cards-item">
          <div class="s3-cards--websites__img">
            <img src="<?php echo get_template_directory_uri()?>/assets/img/svg/websites-card-2.svg" alt="img" />
          </div>
          <div class="s3-cards--websites__title">
            Sekame užklausų kainą
          </div>
          <div class="s3-cards-item__description">
            Lankytojų srautą mes gauname iš paieškos variklių ir tikslinės
            reklamos. Stebime galutinės užklausos kainą
          </div>
        </li>
      </ul>
    </section>
    <?php
    }
    else{
    
    if (get_page_by_path("teachings" )->ID  == get_the_ID()){
    ?>
    <?php
    }
    else{
    ?>
    <section class="s3__cards s3-cards">
      <ul class="s3-cards__body">
        <li class="s3-cards__item s3-cards-item">
          <div class="s3-cards-item__img">
            <img src="<?php echo get_template_directory_uri()?>/assets/img/png/vilius.png" alt="img" />
          </div>
          <div class="s3-cards-item__content">
            <div class="s3-cards-item__title">19 394 užklausų</div>
            <div class="s3-cards-item__description">
              Vilius Baranauskas
              <p>Google Ads specialistas</p>
            </div>
          </div>
        </li>
        <li class="s3-cards__item s3-cards-item">
          <div class="s3-cards-item__img">
            <img src="<?php echo get_template_directory_uri()?>/assets/img/png/justas.png" alt="img" />
          </div>
          <div class="s3-cards-item__content">
            <div class="s3-cards-item__title">60+ tinklapių</div>
            <div class="s3-cards-item__description">
              Justas Skaržinskas
              <p>Web projektų vadovas</p>
            </div>
          </div>
        </li>
        <li class="s3-cards__item s3-cards-item">
          <div class="s3-cards-item__img">
            <img src="<?php echo get_template_directory_uri()?>/assets/img/png/aurimas.png" alt="img" />
          </div>
          <div class="s3-cards-item__content">
            <div class="s3-cards-item__title">ROAS 49,77€</div>
            <div class="s3-cards-item__description">
              Aurimas Skaržinskas
              <p>Marketingo vadovas</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <?php
    }
    }
    ?>


    <!-- ------------------------------------------------------------- -->



  </div>
</section>