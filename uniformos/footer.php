      <footer class="footer" id="footer">
        <div class="up_down_btn" title="Наверх"></div>
        <div class="container">
          <div class="footer__body">
            <div class="footer__item footer-item">
            <a class="footer__logo" href="#!">
            <img src="<?php the_field( 'main_logo', 'options' ); ?>" alt="img">
            </a>
              <div class="footer-item__title-main">UAB TOMETA</div>
              <p class="footer-item__property footer-item__property--cod1">
                Įmonės kodas: 110559074
              </p>
              <p class="footer-item__property footer-item__property--cod2">
                PVM kodas: LT105590716
              </p>
            </div>
           
           
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




            <div class="footer__item footer-item">
              <div class="footer-item__title">
<?php echo  $address ?>
            </div>
              <div class="footer-item__description">
                <p class="footer-item__line">Įprastas darbo laikas:</p>
                <p class="footer-item__line">
<?php echo   $work_time_1?>
                </p>
                <p class="footer-item__line">
<?php echo   $work_time_2?>
                </p>
                <p class="footer-item__line">
<?php echo   $work_time_3?>
                </p>
              </div>
              <div class="footer-item__description">
                <p class="footer-item__line">Telefono numeris:</p>
                <p class="footer-item__line">
                  <span>Tel.: </span>
                  
                  <a class="footer-item__tel" href="#!"><span>
<?php echo  $phone ?>
                  </span></a>
               
               
                </p>
                <p class="footer-item__line">
                  <span>Fax.: </span><a class="footer-item__fax" href="#!"><span>
<?php echo   $fax?> 
                </span></a>
                </p>
              </div>
            </div>



            <?php endwhile; ?>
            <?php endif; ?>
            
            
            
            
            
            <?php if( have_rows('second_town', 'options') ): 
            while( have_rows('second_town', 'options') ): the_row(); 
            $platforms = get_field('second_town', 'options');
		        $work_time_1 = get_sub_field('work_time_1-5', 'options');
		        $work_time_2 = get_sub_field('work_time_6', 'options');
		        $work_time_3 = get_sub_field('work_time_7', 'options');
		        $phone1 = get_sub_field('phone_1', 'options');
		        $phone2 = get_sub_field('phone_2', 'options');
		        $phone3 = get_sub_field('phone_3', 'options');
		        $address = get_sub_field('address', 'options');
            ?>




            <div class="footer__item footer-item">
              <div class="footer-item__title">
<?php echo  $address ?>
            </div>
              <div class="footer-item__description">
                <p class="footer-item__line">Įprastas darbo laikas:</p>
                <p class="footer-item__line">
<?php echo   $work_time_1?>
                </p>
                <p class="footer-item__line">
<?php echo   $work_time_2?>
                </p>
                <p class="footer-item__line">
<?php echo   $work_time_3?>
                </p>
              </div>
              <div class="footer-item__description">
                <p class="footer-item__line">Telefono numeris:</p>
                <p class="footer-item__line">
                  <a class="footer-item__tel" href="#!">
                    <span>
                        <?php echo  $phone1 ?>
                    </span>
                  </a>
                </p>
                <p class="footer-item__line">
                  <a class="footer-item__tel" href="#!">
                    <span>
                        <?php echo  $phone2 ?>
                    </span>
                  </a>
                </p>
                <p class="footer-item__line">
                  <a class="footer-item__tel" href="#!">
                    <span>
                        <?php echo  $phone3 ?>
                    </span>
                  </a>
                </p>
              </div>
            </div>

            <?php endwhile; ?>
            <?php endif; ?>
          </div>
          <div class="footer__copyright">
            2021 © UNIFORMOS All rights reserved
          </div>
        </div>
      </footer>
    </div>
<?php require get_template_directory() . '/includes/popup.php'; ?>
<?php wp_footer(); ?>

</body>
</html>