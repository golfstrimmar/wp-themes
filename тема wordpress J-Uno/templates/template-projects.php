<?php
/**
 * Template Name: страница 'Проекты'
 */
get_header('one');
?>


<section class="projects" id="projects">
  <div class="projects__wrapper">
    <div class="container">
      <div class="projects__body">
        <h2 class="projects__title">Посмотрите наши проекты</h2>
      
        <div class="projects__nav projects-nav">
          <div class="projects-nav__body">

            <div class="projects-nav__item  filter" data-filter="all">
                <img class="projects-nav__img-normal" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-grey.png" alt="img">
                <img class="projects-nav__img-active" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-color.png" alt="img">
                <span>Все проекты</span>
            </div>

            <!-- <div class="projects-nav__item  filter" data-filter=".category-1">  -->
            <div class="projects-nav__item  filter" data-filter=".cupboard"> 
                <img class="projects-nav__img-normal" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-grey.png" alt="img">
                <img class="projects-nav__img-active" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-color.png" alt="img">
                <span>Шкафы Купе</span>
            </div>

            <div class="projects-nav__item filter" data-filter=".kitchen">
               <img class="projects-nav__img-normal" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-grey.png" alt="img">
                <img class="projects-nav__img-active" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-color.png" alt="img">
                <span>Кухня</span>
            </div>


            <div class="projects-nav__item filter" data-filter=".wardrobe">
             <img class="projects-nav__img-normal" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-grey.png" alt="img">
             <img class="projects-nav__img-active" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-color.png" alt="img">
                <span>Гардеробная</span>
            </div>


            <div class="projects-nav__item filter" data-filter=".bedroom">
             <img class="projects-nav__img-normal" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-grey.png" alt="img">
             <img class="projects-nav__img-active" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-color.png" alt="img">
             <span>Спальня</span>
            </div>


            <div class="projects-nav__item filter" data-filter=".kid-room">
              <img class="projects-nav__img-normal" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-grey.png" alt="img">
              <img class="projects-nav__img-active" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-color.png" alt="img">
              <span>Детская</span>
            </div>


            <div class="projects-nav__item filter" data-filter=".living-room">
              <img class="projects-nav__img-normal" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-grey.png" alt="img">
              <img class="projects-nav__img-active" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-color.png" alt="img">
              <span>Гостиная</span>
            </div>


            <div class="projects-nav__item filter" data-filter=".entrance">
                <img class="projects-nav__img-normal" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-grey.png" alt="img">
               <img class="projects-nav__img-active" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-color.png" alt="img">
                <span>Прихожая</span>
            </div>


            <div class="projects-nav__item filter" data-filter=".bathroom"> 
                <img class="projects-nav__img-normal" src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-grey.png" alt="img">
                <img class="projects-nav__img-active"  src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-color.png" alt="img">
               <span>Ванная</span>
            </div>

            
          </div>
        </div>



        <div id="Container">

          <div class="projects__galery projects-galery">
            <div class="projects-galery__body">

                 
<!-- ---------шкафы------------------- -->
            
     <?php  
      global $post;
      $myposts = get_posts(
        array(       
         'post_type'=>'products',
         'publish' => true,
         'numberposts' => -1,
          'category' => 6, 
        )
      );
        
      $reversed = array_reverse($myposts);
	  $reversed = $myposts;

     if ($reversed ) {
      foreach($reversed as $post){
        setup_postdata( $post );
        $post_id = $post->ID;
        $post_title = $post->post_title; 
        $post_text=$post->post_content; 
        $image = get_the_post_thumbnail_url($post_id, 'products');  
        $link =  esc_url( get_permalink( $post_id ) );
        ?>

                   <div class="projects-galery__item mix cupboard">
                      <a  href="<?php echo $link?>" class="projects-galery__mask"></a>
                      <div class="projects-galery__mask"></div>
                          <div class="projects-galery__link"><span>Подробнее</span>
                             <a href="<?php echo $link?>"  class="projects-galery__object"></a> 
                          </div>
                          <div class="ibg bg">
                              <img src="<?php echo $image ?>" alt="img">
                          </div>
                          <div class="projects-galery__discr">
                              <img src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-plaha-big.png" alt="img">
                              <span><?php echo $post_title ?></span>
                          </div>
                    </div>

<?php 
  	}
  } else {
    ?>
<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php  
    }
     wp_reset_postdata(); 
                  
              ?>        
<!-- -------------------кухни------------------------------ -->

     <?php  
      global $post;
      $args = array(       
         'post_type'=>'products',
         'publish' => true,
         'numberposts' => -1,
          'category' => 7, 
        );
        
      $projects = get_posts($args);  
      //$reversed = array_reverse($projects);
	  $reversed = $projects;
     
     if ($reversed ) {
      foreach($reversed as $post){
        setup_postdata( $post );
        $post_id = $post->ID;
        $post_title = $post->post_title; 
        $post_text=$post->post_content; 
        $image=get_the_post_thumbnail_url($post_id, 'products');  
        $link =  esc_url( get_permalink( $post_id ) );
        ?>

                   <div class="projects-galery__item mix kitchen">
                      <a  href="<?php echo $link ?>" class="projects-galery__mask"></a>
                         <div class="projects-galery__mask"></div>
                          <div class="projects-galery__link"><span>Подробнее</span>
                             <a href="<?php echo $link ?>"  class="projects-galery__object"></a> 
                          </div>
                          <div class="ibg bg">
                              <img src="<?php echo $image ?>" alt="img">
                          </div>
                          <div class="projects-galery__discr">
                              <img src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-plaha-big.png" alt="img">
                              <span><?php echo $post_title ?></span>
                          </div>
                    </div>

<?php 
  	}
  } else {
    ?>
<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php  
    }
     wp_reset_postdata(); 
                  
              ?>  

<!-- ------------------------------------------------------- -->
<!-- -------------------wardrobe------------------------------ -->

     <?php  
      global $post;
      $args = array(       
         'post_type'=>'products',
         'publish' => true,
         'numberposts' => -1,
          'category' => 8, 
        );
        
      $projects = get_posts($args);  
      //$reversed = array_reverse($projects);
	  $reversed = $projects;
     
     if ($reversed ) {
      foreach($reversed as $post){
        setup_postdata( $post );
        $post_id = $post->ID;
        $post_title = $post->post_title; 
        $post_text=$post->post_content; 
        $image=get_the_post_thumbnail_url($post_id, 'products');  
        $link =  esc_url( get_permalink( $post_id ) );
        ?>

                   <div class="projects-galery__item mix wardrobe">
                      <a  href="<?php echo $link ?>" class="projects-galery__mask"></a>
                         <div class="projects-galery__mask"></div>
                          <div class="projects-galery__link"><span>Подробнее</span>
                             <a href="<?php echo $link ?>"  class="projects-galery__object"></a> 
                          </div>
                          <div class="ibg bg">
                              <img src="<?php echo $image ?>" alt="img">
                          </div>
                          <div class="projects-galery__discr">
                              <img src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-plaha-big.png" alt="img">
                              <span><?php echo $post_title ?></span>
                          </div>
                    </div>

<?php 
  	}
  } else {
    ?>
<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php  
    }
     wp_reset_postdata(); 
                  
              ?>  

<!-- ------------------------------------------------------- -->
<!-- -------------------bedroom----------------------------- -->

     <?php  
      global $post;
      $args = array(       
         'post_type'=>'products',
         'publish' => true,
         'numberposts' => -1,
          'category' => 9, 
        );
        
      $projects = get_posts($args);  
      //$reversed = array_reverse($projects);
	  $reversed = $projects;
     
     if ($reversed ) {
      foreach($reversed as $post){
        setup_postdata( $post );
        $post_id = $post->ID;
        $post_title = $post->post_title; 
        $post_text=$post->post_content; 
        $image=get_the_post_thumbnail_url($post_id, 'products');  
        $link =  esc_url( get_permalink( $post_id ) );
        ?>

                   <div class="projects-galery__item mix bedroom">
                      <a  href="<?php echo $link ?>" class="projects-galery__mask"></a>
<div class="projects-galery__mask"></div>
<div class="projects-galery__link"><span>Подробнее</span>
                             <a href="<?php echo $link ?>"  class="projects-galery__object"></a> 
                          </div>
                          <div class="ibg bg">
                              <img src="<?php echo $image ?>" alt="img">
                          </div>
                          <div class="projects-galery__discr">
                              <img src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-plaha-big.png" alt="img">
                              <span><?php echo $post_title ?></span>
                          </div>
                    </div>

<?php 
  	}
  } else {
    ?>
<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php  
    }
     wp_reset_postdata(); 
                  
              ?>  

<!-- ------------------------------------------------------- -->
<!-- -------------------kid-room----------------------------- -->

     <?php  
      global $post;
      $args = array(       
         'post_type'=>'products',
         'publish' => true,
         'numberposts' => -1,
          'category' => 10, 
        );
        
      $projects = get_posts($args);  
      //$reversed = array_reverse($projects);
	  $reversed = $projects;
     
     if ($reversed ) {
      foreach($reversed as $post){
        setup_postdata( $post );
        $post_id = $post->ID;
        $post_title = $post->post_title; 
        $post_text=$post->post_content; 
        $image=get_the_post_thumbnail_url($post_id, 'products');  
        $link =  esc_url( get_permalink( $post_id ) );
        ?>

                   <div class="projects-galery__item mix kid-room">
                      <a  href="<?php echo $link ?>" class="projects-galery__mask"></a>
                         <div class="projects-galery__mask"></div>
                          <div class="projects-galery__link"><span>Подробнее</span>
                             <a href="<?php echo $link ?>"  class="projects-galery__object"></a> 
                          </div>
                          <div class="ibg bg">
                              <img src="<?php echo $image ?>" alt="img">
                          </div>
                          <div class="projects-galery__discr">
                              <img src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-plaha-big.png" alt="img">
                              <span><?php echo $post_title ?></span>
                          </div>
                    </div>

<?php 
  	}
  } else {
    ?>
<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php  
    }
     wp_reset_postdata(); 
                  
              ?>  

<!-- ------------------------------------------------------- -->
<!-- -------------------living-room---------------------------- -->

     <?php  
      global $post;
      $args = array(       
         'post_type'=>'products',
         'publish' => true,
         'numberposts' => -1,
          'category' => 11, 
        );
        
      $projects = get_posts($args);  
      //$reversed = array_reverse($projects);
	  $reversed = $projects;
     
     if ($reversed ) {
      foreach($reversed as $post){
        setup_postdata( $post );
        $post_id = $post->ID;
        $post_title = $post->post_title; 
        $post_text=$post->post_content; 
        $image=get_the_post_thumbnail_url($post_id, 'products');  
        $link =  esc_url( get_permalink( $post_id ) );
        ?>

                   <div class="projects-galery__item mix living-room">
                      <a  href="<?php echo $link ?>" class="projects-galery__mask"></a>
                          <div class="projects-galery__mask"></div>
                          <div class="projects-galery__link"><span>Подробнее</span>
                             <a href="<?php echo $link ?>"  class="projects-galery__object"></a> 
                          </div>
                          <div class="ibg bg">
                              <img src="<?php echo $image ?>" alt="img">
                          </div>
                          <div class="projects-galery__discr">
                              <img src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-plaha-big.png" alt="img">
                              <span><?php echo $post_title ?></span>
                          </div>
                    </div>

<?php 
  	}
  } else {
    ?>
<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php  
    }
     wp_reset_postdata(); 
                  
              ?>  

<!-- ------------------------------------------------------- -->
<!-- -------------------entrance---------------------------- -->

     <?php  
      global $post;
      $args = array(       
         'post_type'=>'products',
         'publish' => true,
         'numberposts' => -1,
          'category' => 12, 
        );
        
      $projects = get_posts($args);  
      //$reversed = array_reverse($projects);
	  $reversed = $projects;
     
     if ($reversed ) {
      foreach($reversed as $post){
        setup_postdata( $post );
        $post_id = $post->ID;
        $post_title = $post->post_title; 
        $post_text=$post->post_content; 
        $image=get_the_post_thumbnail_url($post_id, 'products');  
 $link =  esc_url( get_permalink( $post_id ) );        ?>

                   <div class="projects-galery__item mix entrance">
                      <a  href="<?php echo $link ?>" class="projects-galery__mask"></a>
                          <div class="projects-galery__mask"></div>
                          <div class="projects-galery__link"><span>Подробнее</span>
                             <a href="<?php echo $link ?>"  class="projects-galery__object"></a> 
                          </div>
                          <div class="ibg bg">
                              <img src="<?php echo $image ?>" alt="img">
                          </div>
                          <div class="projects-galery__discr">
                              <img src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-plaha-big.png" alt="img">
                              <span><?php echo $post_title ?></span>
                          </div>
                    </div>

<?php 
  	}
  } else {
    ?>
<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php  
    }
     wp_reset_postdata(); 
                  
              ?>  

<!-- ------------------------------------------------------- -->
<!-- -------------------bathroom---------------------------- -->

     <?php  
      global $post;
      $args = array(       
         'post_type'=>'products',
         'publish' => true,
         'numberposts' => -1,
          'category' => 13, 
        );
        
      $projects = get_posts($args);  
      //$reversed = array_reverse($projects);
	  $reversed = $projects;
     
     if ($reversed ) {
      foreach($reversed as $post){
        setup_postdata( $post );
        $post_id = $post->ID;
        $post_title = $post->post_title; 
        $post_text=$post->post_content; 
        $image=get_the_post_thumbnail_url($post_id, 'products');  
 $link =  esc_url( get_permalink( $post_id ) );        ?>

                   <div class="projects-galery__item mix bathroom">
                      <a  href="<?php echo $link ?>" class="projects-galery__mask"></a>
                          <div class="projects-galery__mask"></div>
                          <div class="projects-galery__link"><span>Подробнее</span>
                             <a href="<?php echo $link ?>"  class="projects-galery__object"></a> 
                          </div>
                          <div class="ibg bg">
                              <img src="<?php echo $image ?>" alt="img">
                          </div>
                          <div class="projects-galery__discr">
                              <img src="<?php echo get_template_directory_uri()?>/assets/img/projects/projects-plaha-big.png" alt="img">
                              <span><?php echo $post_title ?></span>
                          </div>
                    </div>

<?php 
  	}
  } else {
    ?>
<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php  
    }
     wp_reset_postdata(); 
                  
              ?>  

<!-- ------------------------------------------------------- -->
      </div>
    </div>
  </div>

      </div><!-- projects__body -->

    </div><!-- container -->

  </div><!-- wrapper -->

  <!-- ------------------------------------------- -->
</section>

 </div>
</div>
<!-- ------------------------------------------- -->
<?php //the_my_js_scripts()?>
<script>

    var targetSelector = '.mix';

    function getSelectorFromHash() {
      var hash = window.location.hash.replace(/^#/g, '');

      var selector = hash ? '.' + hash : targetSelector;

      return selector;
    }

    function setHash(state) {
      var selector = state.activeFilter.selector;
      var newHash = '#' + selector.replace(/^\./g, '');

      if (selector === targetSelector && window.location.hash) {
        // Equivalent to filter "all", remove the hash

        history.pushState(null, document.title, window.location.pathname); // or history.replaceState()
      } else if (newHash !== window.location.hash && selector !== targetSelector) {
        // Change the hash

        history.pushState(null, document.title, window.location.pathname + newHash); // or history.replaceState()
      }
    }

    // Instantiate and configure the mixer

    var mixer = mixitup('.projects__body', {
      selectors: {
        target: targetSelector
      },
      load: {
        filter: getSelectorFromHash() // Ensure that the mixer's initial filter matches the URL on startup
      },
      callbacks: {
        onMixEnd: setHash // Call the setHash() method at the end of each operation
      }
    });

    window.onhashchange = function () {
      var selector = getSelectorFromHash();

      if (selector === mixer.getState().activeFilter.selector) return; // no change

      mixer.filter(selector);
    };

</script>

<!-- ---------------- -->
<!-- кнопка возврата на начало страницы -->
 <div class="scrollup">
<span></span>
</div> 

</body>
</html>