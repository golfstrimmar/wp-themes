<?php
/**
 * Template Name: Contacts
 */
get_header( 'white' );
?>

      <section class="about-bunner contacts-bunner" id="contacts-bunner">
        <div class="contacts-bunner__body">
          <div class="container">
            <div class="contacts-bunner__title">
              <h2>Susisiekite su mumis</h2>
            </div>
            <div class="contacts-bunner__form">
              <div class="con-form">
               
	 <?php echo do_shortcode( ' [contact-form-7 id="121" title="Primary"]' ); ?> 
	
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="conpro" id="conpro">
        <div class="container">
          <div class="conpro__body">
            <div class="conpro__title"><h2>UAB TOMETA</h2></div>
            <div class="conpro__item">
              <p>įmonės kodas: 110559074</p>
              <p>pvm kodas: lt105590716</p>
            </div>
            <span class="conpro__devider"></span>
            <div class="conpro__item">
              <div class="conpro__property conpro__property--location">
                <?php the_field('first_address','options'); ?>
              </div>
              <div class="conpro__property conpro__property--work">
                <?php the_field('work_time','options'); ?>
              </div>
              <div class="conpro__property conpro__property--email">
                <?php the_field('e-mail','options'); ?>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="address" id="address">
        <div class="container">
          <div class="address__title"><h2>Mūsų parduotuvės:</h2></div>
   <div class="address__body">
      <div class="address__item address-item">
        <div class="address-item__title">
          <h3>Kaunas</h3>
        </div>
        <div class="address-item__blocks">

          <!-- ======Каунас========= -->

          <?php if( have_rows('first_town', 'options') ): 
            while( have_rows('first_town', 'options') ): the_row(); 
            $platforms = get_field('first_town', 'options');
		        $work_time_1 = get_sub_field('work_time_1-5', 'options');
		        $work_time_2 = get_sub_field('work_time_6', 'options');
		        $work_time_3 = get_sub_field('work_time_7', 'options');
		        $phone = get_sub_field('phone', 'options');
		        $fax = get_sub_field('fax', 'options');
		        $mail = get_sub_field('e-mail', 'options');
		        $address = get_sub_field('address', 'options');
            ?>



          <div class="address-item__block item-block">
            <div class="item-block__title">
              <h4>Darbo laikas:</h4>
            </div>
            <div class="item-block__text">
              <p>
                <?php echo $work_time_1  ?>
              </p>
              <p>
                <?php echo $work_time_2 ?>
              </p>
              <p>
                <?php echo $work_time_3 ?>
              </p>
            </div>
          </div>



          <div class="address-item__block item-block">
            <div class="item-block__title">
              <h4>Telefono numeris:</h4>
            </div>
            <div class="item-block__text">
              <p>Tel.:

                <?php echo $phone  ?>

              </p>
              <p>Fax.:

                <?php echo $fax  ?>

              </p>
            </div>
          </div>
          <div class="address-item__block item-block">
            <div class="item-block__title">
              <h4>Adresas:</h4>
            </div>
            <div class="item-block__text">
              <p>

                <?php echo $address  ?>

              </p>
            </div>
          </div>
          <div class="address-item__block item-block">
            <div class="item-block__title">
              <h4>El. paštas:</h4>
            </div>
            <div class="item-block__text">
              <p>

                
<?php echo $mail  ?>
              </p>
            </div>
          </div>

          <?php endwhile; ?>
          <?php endif; ?>

          <!-- ================================= -->



        </div>
      </div>
      
      <div class=" address__body">
<img class="fasadas" src="http://uniformos1.skarzinskas.lt/wp-content/uploads/2021/06/20210521_153159-1-e1622787142660.jpg" alt="">      </div>

      <div class="address__item papildomas">
        <div class="address-map">
          <?php dynamic_sidebar( 'Map-Kaunas' ); ?>
        </div>
      </div>
    </div>
         
       <div class="address__body">
      <div class="address__item address-item">
        <div class="address-item__title">
          <h3>Klaipėda</h3>
        </div>
        <div class="address-item__blocks">
          
        
           <!-- ======Клайпеда========= -->

          <?php if( have_rows('second_town', 'options') ): 
            while( have_rows('second_town', 'options') ): the_row(); 
            $platforms = get_field('second_town', 'options');
		        $work_time_1 = get_sub_field('work_time_1-5', 'options');
		        $work_time_6 = get_sub_field('work_time_6', 'options');
		        $work_time_7 = get_sub_field('work_time_7', 'options');
		        $phone1 = get_sub_field('phone_1', 'options');
		        $phone2 = get_sub_field('phone_2', 'options');
		        $phone3 = get_sub_field('phone_3', 'options');
		        $mail = get_sub_field('e-mail', 'options');
		        $address = get_sub_field('address', 'options');
          ?>
        
        <div class="address-item__block item-block">
            <div class="item-block__title">
              <h4>Darbo laikas:</h4>
            </div>
            <div class="item-block__text">
              <p><?php echo $work_time_1 ?></p>
              <p><?php echo $work_time_6 ?></p>
              <p><?php echo $work_time_7 ?></p>
            </div>
          </div>
          <div class="address-item__block item-block">
            <div class="item-block__title">
              <h4>Telefono numeris:</h4>
            </div>
            <div class="item-block__text">
              <p><?php echo $phone1 ?></p>
              <p><?php echo $phone2 ?></p>
              <p><?php echo $phone3 ?></p>
            </div>
          </div>
          <div class="address-item__block item-block">
            <div class="item-block__title">
              <h4>Adresas:</h4>
            </div>
            <div class="item-block__text">
              <p><?php echo $address ?></p>
            </div>
          </div>
          <div class="address-item__block item-block">
            <div class="item-block__title">
              <h4>El. paštas:</h4>
            </div>
            <div class="item-block__text">
              <p><?php echo  $mail?></p>
            </div>
          </div>
      
          <?php endwhile; ?>
          <?php endif; ?>
      
      
      
        </div>
      </div>

      <div class="address__body">
      <img class="fasadas" src="http://uniformos1.skarzinskas.lt/wp-content/uploads/2021/06/IMG_20210526_161027-1.jpg" alt="">
      </div>

      <div class="address__item papildomas">
            <div class="address-map">
                 <?php dynamic_sidebar( 'Map-Klaipėda' ); ?>
            </div></div>
          </div>
        </div>
      </section>





<?php
get_footer();