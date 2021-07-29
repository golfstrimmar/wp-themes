<?php
/*
Template Name: Home
*/
get_header();
?>



<section class="slider-cards" id="slider-cards">
  <div class="slider-cards__body">
    <div class="slider__slider slider-cards__content slider">
      <ul class="slider-cards__slider slider__body slider-js-1">


       <?php  
      global $post;
      $args = array(       
         'post_type'=>'slider-bunner',
         'publish' => true,
         'numberposts' => 20,
        );
        
      $projects = get_posts($args);  
      $reversed = array_reverse($projects);
     
     if ($projects ) {
     
      foreach($reversed as $post){
        setup_postdata( $post );
        $post_id = $post->ID;
        $post_text=$post->post_content; 
        $image=get_the_post_thumbnail_url($post_id, 'projects'); 
  ?>
      <li class="slider-cards__item slider-card">
          <img class="slider-card__img" data-lazy="<?php echo $image ?>" />
          <div class="slider-card__title main-title container">
            <h2>
              <?php echo $post_text ?>
            </h2>
         <a class="slider-card__order" href="/katalogas">
              <span>Katalogas</span>
            </a>
          </div>
        </li>
<?php 
  	}
  } else {
    ?>
<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php  
    }
              ?>
        <?php 
                   ?>
       
      </ul>
    </div>
  </div>
</section>
<section class="cards" id="cards">
  <div class="cards__wrapper">
    <div class="container">
       <div class="cards__title">
        <h2>Kodėl verta siūti mokyklinę uniformą su mumis?</h2>
      </div>
      <div class="cards__body">
        <div class="cards__item cards-item">
          <div class="card">
            <img class="card__img card__img--normal"
              src="<?php echo get_template_directory_uri()?>/assets/img/svg/Needle.svg" alt="img" /><img
              class="card__img card__img--hover" src="<?php echo get_template_directory_uri()?>/assets/img/svg/needle-white.svg" alt="img" />
            <h5 class="card__title">
              Atsparūs dilimui ir lengvai prižiūrimi audiniai
            </h5>
          </div>
        </div>
        <div class="cards__item cards-item">
          <div class="card">
            <img class="card__img card__img--normal"
              src="<?php echo get_template_directory_uri()?>/assets/img/svg/kimono.svg" alt="img" /><img
              class="card__img card__img--normal"
              src="<?php echo get_template_directory_uri()?>/assets/img/svg/shert.svg" alt="img" /><img
              class="card__img card__img--hover"
              src="<?php echo get_template_directory_uri()?>/assets/img/svg/kimono-white.svg" alt="img" /><img
              class="card__img card__img--hover"
              src="<?php echo get_template_directory_uri()?>/assets/img/svg/shert-white.svg" alt="img" />
            <h5 class="card__title">
              Platus asortimentas ir modernūs modeliai
            </h5>
          </div>
        </div>
        <div class="cards__item cards-item">
          <div class="card">
            <img class="card__img card__img--normal"
              src="<?php echo get_template_directory_uri()?>/assets/img/svg/school.svg" alt="img" /><img
              class="card__img card__img--hover"
              src="<?php echo get_template_directory_uri()?>/assets/img/svg/school-white.svg" alt="img" />
            <h5 class="card__title">
              Emblemų su mokyklos logotipu gaminimas
            </h5>
          </div>
        </div>
        <div class="cards__item cards-item">
          <div class="card">
            <img class="card__img card__img card__img--normal"
              src="<?php echo get_template_directory_uri()?>/assets/img/svg/swing.svg" alt="img" /><img
              class="card__img card__img card__img--hover"
              src="<?php echo get_template_directory_uri()?>/assets/img/svg/swing-white.svg" alt="img" />
            <h5 class="card__title">Didelis dydžių pasirinkimas</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="models" id="models">
  <div class="container">
    <div class="models__body">
      <div class="models__item models-item">
        <div class="models-item__column">
          <div class="models-item__title title-1">
            <h2>Mokyklinės uniformos</h2>
            <span class="_big-number">1</span>
          </div>
          <div class="models-item__description">
          Mokyklos vizitinė kortelė. Ji turi būti patogi, praktiška ir kokybiška, atitikti mados tendencijas, o svarbiausia – patikti mokiniams. 
          </div>
         <a class="btn btn--light models-item__button" type="button"  href="http://uniformos1.skarzinskas.lt/product-category/pradiniu-klasiu-uniformos/" target="_blank">
            Katalogas
          </a>
        </div>
        <div class="models-item__column">
          <div class="models-item__img"
            style="background-image: url('<?php echo get_template_directory_uri()?>/assets/img/png/img-2.png')"></div>
        </div>
      </div>
      <div class="models__item models-item">
        <div class="models-item__column">
          <div class="models-item__title title-1">
            <h2>Apranga organizacijoms</h2>
            <span class="_big-number">2</span>
          </div>
          <div class="models-item__description">
           Mūsų tikslas – prisidėti prie įvaizdžio formavimo, sukuriant uniformas įmonių aptarnaujančiam personalui. 
          </div>
        <a class="btn btn--light models-item__button" type="button"  href="http://uniformos1.skarzinskas.lt/product-category/apranga/" target="_blank">
            Katalogas
          </a>
        </div>
        <div class="models-item__column">
          <div class="models-item__img"
            style="background-image: url('<?php echo get_template_directory_uri()?>/assets/img/png/img-4.png')"></div>
        </div>
      </div>
      <div class="models__item models-item">
        <div class="models-item__column">
          <div class="models-item__title title-1">
            <h2>Koncertinė apranga</h2>
            <span class="_big-number">3</span>
          </div>
          <div class="models-item__description">
           Koncertinė apranga
          </div>
        <a class="btn btn--light models-item__button" type="button"  href="http://uniformos1.skarzinskas.lt/product-category/koncertine/" target="_blank">
            Katalogas
          </a>
        </div>
        <div class="models-item__column">
          <div class="models-item__img"
            style="background-image: url('<?php echo get_template_directory_uri()?>/assets/img/png/img-3.png')"></div>
        </div>
      </div>
    </div>
  </div>
</section>
				
<section class="slider-models" id="slider-model">
    <div class="slider-models__body container">

    	<?php					echo do_shortcode('[woo_product_slider id="149"]');					?>
    
    
    
 
   </div> 
</section>
<section class="insta" id="insta">
  <div class="container">
    <div class="insta__title cards__title">
      <h2>Sekite mus Instagram</h2>
      <img src="<?php echo get_template_directory_uri()?>/assets/img/svg/Instagram.svg" alt="img" />
    </div>
    <div class="insta__body ">
   
  
       <?php					echo do_shortcode('[instagram-feed]');					?>

    
    </div>
  </div>
</section>


<?php
// get_sidebar();
get_footer();