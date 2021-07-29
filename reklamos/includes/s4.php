<section class="s1 s3 s4" id="s4">
  <div class="container">
    <div class="s1__item s1-item s1__item--s3">
      <div class="s1-item__column">
        <span class="_big-number">04</span>
        
        <?php 
$id=37;
if( is_page($id) ) {
?>
     <div class="s1-item__title title-1">
          <h2>
            Kiek kainuoja interneto
            <p> svetainė</p>
          </h2>
        </div>
        
        
        <div class="s1-item__description s1-item__description--s4">
          <p>
Jūs turite gerą produktą ar paslaugą, tačiau yra viena problema - jos niekas neperka. Dažniausiai taip nutinka dėl neefektyvaus tinklapio dizaino ar netinkamo pasiūlymo. Kad taip nenutiktų, mes rūpinamės bendra dizaino estetika, bei jeigu reikia padedame Jums sugalvoti efektyvų pasiūlymą klientui.
          </p>
        </div>
      
<?php
}
else{
?>
   
   
   
   <?php 
$id=8;
if( is_page($id) ) {
?>
    
     <div class="s1-item__title title-1">
          <h2>
            Marketingo paslaugos
            <p>orientuotos į rezultatą</p>
          </h2>
        </div>
        
        
        <div class="s1-item__description s1-item__description--s4">
          <p>
            Mes pasiruošę tapti Jūsų komandos dalimi ir dirbti tam, kad
            kartu pasiektume keliamus tikslus ir juos viršytume.
          </p>
          <p>
            Kartu su Jumis nustatome tikslus, planus ir biudžetą, kurie
            leis Jums atpirkti reklamos sąnaudas ir uždirbti pinigų. Taip
            pat sutariame dėl bonuso už rezultatus, kurie viršys keliamus
            tikslus.
          </p>
          <p>
            Žemiau nurodytos bazinės paslaugų kainos ir neįtrauktas
            biudžetas reklamai. Priedą už rezultatus deriname su kiekvienu
            klientu individualiai.
          </p>
        </div>
      
<?php
}
wp_reset_postdata();
?>


<?php 
$id=40;
if( is_page($id) ) {
?>
      <div class="s1-item__title title-1">
          <h2>
           Mokymo  <span>programa</span>  
          </h2>
        </div>

<?php get_template_part('./includes/slider-cards') ?>  
      
<?php
}
?>
   
   
   
        
<?php
}
?>
   
      
      
      </div>




    </div>
  </div>
</section>




<?php 
$id=37;
if( is_page($id) ) {
?>
         <section class="pac" id="pac">
        <div class="container">
          <ul class="pac__body">
            <li class="pac__item pac-item slider-card">
              <div class="slider-card__number">
                <span>01</span>
                <div class="slider-card__price">nuo 800 € + PVM</div>
              </div>
              <div class="slider-card__title">
                Greitas
                <p>startas</p>
              </div>
              <div class="slider-card__text">
                <p>Pagaminimo trukmė iki 3 d.d.</p>
                <p>Turintiems 1-3 paslaugas</p>
                <p>Savarankiškai dirbantiems žmonėms</p>
                <p>Norintiems reklamuoti renginius/kursus</p>
                <p>Greitam nišos testavimui</p>
                <p>El. parduotuvei iki 100 prekių</p>
                <p>Itin lengvas turinio valdymas</p>
              </div>
              <div class="slider-card__data">
                Labiausiai rekomenduojama pirmą kartą susidūrusiems su tinklapio
                kūrimu, norintiems greito rezultato ir mažiausio gilinimosi į
                techninius dalykus.
              </div>
              <a class="slider-card__description btn btn--success popup-init-js" href="#!"  rel="popup-web-greitas"
                >Gauti tikslią kainą</a
              >
            </li>
            <li class="pac__item pac-item slider-card">
              <div class="slider-card__number">
                <span>02</span>
                <div class="slider-card__price">nuo 1500 € + PVM</div>
              </div>
              <div class="slider-card__title">
                Pritaikytas
                <p>šablonas</p>
              </div>
              <div class="slider-card__text">
                <p>Pagaminimo trukmė iki 2 sav.</p>
                <p>Smulkioms ir vidutinėms įmonėms</p>
                <p>Suformavusiems aiškią verslo viziją</p>
                <p>Norintiems taikyti sudėtingą rinkodarą</p>
                <p>Siekiantiems ilgalaikio sprendimo</p>
                <p>El. parduotuvei iki 500 prekių</p>
                <p>Turinio valdymas be programavimo</p>
              </div>
              <div class="slider-card__data">
                Rekomenduojama jau susipažinusiems su tinklapių kūrimu,
                siekiantiems ateity diegti sudėtingus papildomus patobulinimus,
                pripratusiems naudotis wordpress.
              </div>
              <a class="slider-card__description btn btn--success popup-init-js" href="#!"  rel="popup-web-pritaikytas"
                >Gauti tikslią kainą</a
              >
            </li>
            <li class="pac__item pac-item slider-card">
              <div class="slider-card__number">
                <span>03</span>
                <div class="slider-card__price">nuo 2000 € + PVM</div>
              </div>
              <div class="slider-card__title">Individualus <p>dizainas</p></div>
              <div class="slider-card__text">
                <p>Pagaminimo trukmė nuo 20 d.d.</p>
                <p>Kai svarbus organizacijos įvaizdis</p>
                <p>Siekiantiems plačios kūrybinės saviraiškos</p>
                <p>Prognozuojantiems didelį tinklapio srautą</p>
                <p>Orientuotas į vartotojo naršymo patirtį</p>
                <p>El. parduotuvėms nuo 500 prekių</p>
                <p>Redagavimas su programuotojo pagalba</p>
              </div>
              <div class="slider-card__data">
                Rekomenduojama norintiems išskirtinai įmonės poreikiams
                pritaikyto dizaino, siekiantiems maksimaliai tiksliai
                reprezentuoti savo vardą.
              </div>
              <a class="slider-card__description btn btn--success popup-init-js" href="#!"  rel="popup-web-individualus"
                >gauti tikslią kainą</a
              >
            </li>
          </ul>
        </div>
      </section>
      
<?php
}
wp_reset_postdata();
?>
 


