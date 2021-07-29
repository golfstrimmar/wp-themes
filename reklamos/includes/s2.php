<section class="s1 s2" id="s2">
  <div class="container">
    <div class="s1__item s1-item s1-item--s2">
      <div class="s1-item__column">
        <span class="_big-number">02</span>
        <div class="s1-item__title title-1 s1-item__title--s2">







   <?php
     if (get_page_by_path("websites" )->ID  == get_the_ID()) { 
    ?>
 <h2>Iš ko susideda <br> <span>geras</span> tinklapis?</h2>
          <?php
    }
    else{
    
    if (get_page_by_path("teachings" )->ID  == get_the_ID()){
    ?>
 <h2>Ką jūs  <span>išmoksite?</span></h2>

            <?php
    }
    else{
    ?>
        <h2>Ar Jums aktualios <br> <span>šios</span> problemos?</h2>
              <?php
    }
    }
    ?>

      
      
        </div>





  <?php
     if (get_page_by_path("websites" )->ID  == get_the_ID()) { 
    ?>
      <div class="s1-item__description s1-item__description--s2  s1-item__description--s2-websites">
        <span>Akcentai</span>
          <p>Perteikiame Jūsų produkto naudą rašant kokybišką tekstą ir sudedant reikiamus akcentus dizaine. Į tinklapį dedame tik tai, kas iš tikrųjų parduoda.</p>
        <span>Privalumai</span> 
          <p>
            Mums netenka prasimanyti nebūtus Jūsų produkto privalumus, mes juos tiesiog tinkamai parodome.
          </p>
        <span>Pateikimas</span>
          <p>
            Paprastai į mus kreipiasi žmonės turintys gerą produktą, tačiau jie nežino kaip jį tinkamai pateikti.
          </p>
      </div>
          <?php
    }
    else{
    
    if (get_page_by_path("teachings" )->ID  == get_the_ID()){
    ?>
        <div class="s1-item__description s1-item__description--s2 ">
          <p>Savarankiškai sukursite reklamos kampaniją su "Ads manager".</p>
          <p>Sužinosite apie visus Facebook reklamos kampanijos tikslus ir mokėsite parinkti jums labiausiai tinkantį.
</p>
          <p>Sužinosite, kaip segmentuoti auditoriją, išmoksite parinkti savo tikslinę auditoriją, kurti savo ir lookalike auditorijas.
</p>
          <p>Išmoksite kurti parduodančius tekstus ir vizualizacijas.
</p>
          <p>Sužinosite apie geriausias Facebook rinkodaros strategijas, kurios yra taikomos Lietuvoje ir užsienyje.
</p>
          <p>Išmoksite prognozuoti preliminarius Facebook reklamos rezultatus. Pavyzdžiui, kokio rezultato tikėtis investuojant 300 eurų per mėnesį į Facebook reklamą.
</p>

        </div>










            <?php
    }
    else{
    ?>
        <div class="s1-item__description s1-item__description--s2 ">
          <p>Turite tinklapį - bet jis "neparduoda"?</p>
          <p>
            Investuojate daug pinigų į reklamą, bet rezultato taip ir
            nėra?
          </p>
          <p>
            Pasirašėte metinę sutartį, bet po mėnesio supratote, kad
            rezultato nebus, o sutarties nutraukimas brangiai kainuos?
          </p>
          <p>Visą marketingo biudžetą "suryja" agentūros mokestis?</p>
          <p>Marketingo agentūrą lėtai reaguoja į Jūsų užklausas?</p>
          <p>
            Negalite parduoti savo produkto, nors Jūsų konkurentai puikiai
            parduoda?
          </p>
        </div>
              <?php
    }
    }
    ?>

      </div>
      <div class="s1-item__column s1-item__column--s2">
        <div class="s2-item__img" style="background-image: url('<?php echo get_template_directory_uri()?>/assets/img/png/i-3.png')"></div>
      </div>
    </div>
  </div>
</section>