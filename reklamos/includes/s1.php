<section class="s1" id="s1">
  <div class="container">
    <div class="s1__item s1-item">
      <div class="s1-item__column">
        <span class="_big-number">01</span>
        <div class="s1-item__title title-1">
          <h2>
          
          
          <?php
     if (get_page_by_path("websites" )->ID  == get_the_ID()) { 
    ?>
Mes tai suprantame
          <?php
    }
    else{
    
    if (get_page_by_path("teachings" )->ID  == get_the_ID()){
    ?>
          Kam skirti  mokymai? 

            <?php
    }
    else{
    ?>
       Mes tai suprantame
              <?php
    }
    }
    ?>

          
          
           <span>—</span></h2>
        </div>

        <!-- текст на страницах websites и home -->

   <?php
     if (get_page_by_path("websites" )->ID  == get_the_ID()) { 
    ?>
 <div class="s1-item__description">
          Suprantame, kas yra verslas ir kaip jis veikia. Investicijos turi atsipirkti. Todėl savo klientams visuomet sakome tiesą, jeigu jų investicija neturi potencialo, nesiimame vykdyti tokio užsakymo ir visuomet paaiškiname kodėl.
        </div>
          <?php
    }
    else{
    
    if (get_page_by_path("teachings" )->ID  == get_the_ID()){
    ?>
        <div class="s1-item__description">
        Šie mokymai yra skirti visiems, norintiems išmokti kurti Facebook reklamos kampanijas. Mokymų tikslas - suteikti bazines Facebook mokamos reklamos žinias, jog žmogus galėtų įsidarbinti arba atlikti praktiką (su galimybe įsidarbinti) įmonėje, kuri teikia internetinės rinkodaros paslaugas.
        </div>
 <div class="s1-item__description">
Taip pat mokymai puikiai tinka tiems žmonėms, kurie nori patys pradėti kurti mokamą reklamą per Facebook savo darbovietėje arba kaip laisvai samdomas darbuotojas (freelancer'is).
        </div>

            <?php
    }
    else{
    ?>
         <div class="s1-item__description">
          Jūsų verslui reikalingi klientai, o ne marketingas. Todėl savo klientams už atliekamus darbus taikome nedidelį
          abonentinį mokestį, o visas kitas uždarbis priklauso nuo rezultatų. Kitaip tariant, jeigu jūsų verslas negauna
          pajamų, užmokesčio negauname
          ir mes. Ir atvirkščiai: uždirbate jūs – uždirbame ir mes. Manome, kad tai pats sąžiningiausias būdas
          bendradarbiauti.
        </div>
              <?php
    }
    }
    ?>
      



        <img class="s1-item__img s1-item__img--big"
          src="<?php echo get_template_directory_uri()?>/assets/img/svg/cross.svg" alt="img" /><img
          class="s1-item__img s1-item__img--small"
          src="<?php echo get_template_directory_uri()?>/assets/img/svg/croses.svg" alt="img" />
      </div>
      <div class="s1-item__column s1-item__column--form">
       
      
     
     
      <div class="s1-item__form">
          <div class="s1-item__title--form">

          <?php
     if (get_page_by_path("websites" )->ID  == get_the_ID()) { 
    ?>
            <p>Sužinokite,</p>
            <p>kiek gali kainuoti</p>
            <p>Jūsų tinklapis</p>
          <?php
    }
    else{
    
    if (get_page_by_path("teachings" )->ID  == get_the_ID()){
    ?>
            <p>Sužinokite,</p>
            <p>kiek gali kainuoti</p>
            <p>Jūsų potencialus klientas</p>

            <?php
    }
    else{
    ?>
      <p>Sužinokite,</p>
            <p>kiek gali kainuoti</p>
            <p>Jūsų potencialus klientas</p>
              <?php
    }
    }
    ?>

          </div>
        
        
          <div class="con-form connect connect--s1">
           
          <?php
     if (get_page_by_path("websites" )->ID  == get_the_ID()) { 
    ?>  
          <div class="connect__form connect__form--contacts">

<?php echo do_shortcode('[contact-form-7 id="353" title="WEB s-1"]'); ?>

  </div>
  <?php
    }
    else{
    
    if (get_page_by_path("teachings" )->ID  == get_the_ID()){
    ?>       
    <div class="connect__form connect__form--contacts">

<?php echo do_shortcode('[contact-form-7 id="81" title="form-s-1"]'); ?>

  </div>
  <?php
    }
    else{
    ?>
  <div class="connect__form connect__form--contacts">

<?php echo do_shortcode('[contact-form-7 id="81" title="form-s-1"]'); ?>

</div>
<?php
    }
    }
    ?>

          </div>
        </div>
      </div>




    </div>
  </div>
</section>
