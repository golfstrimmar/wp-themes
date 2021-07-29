<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package j-uno
 */

?>


<!doctype html>
<html <?php language_attributes(); ?>>
<head>
 <title><?php add_theme_support('title-tag');?></title> 
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>



<body>
  <div class="wrapper">
    <main class="page">
      <header class="header" id="header">
       
       
       
        <div class="header__body container">
             
              <?php the_custom_logo();?>
         
          <div class="header__discription">Надёжные партнеры дизайнеров<p>фабрика производства мебели на заказ</p>
            <p>работаем с 2010 года по Москве и МО 200 км</p>
          </div>
          <div class="header1__burger icon-menu-1"><span></span><span></span><span></span>
         
             <div class="header1__slide header1-slide header__slide">
              <div class="header1-slide__body">
                   <nav  class="header1-slide-list">
                      <ul>
                           <li class="header1-slide__link">
                                 <a href="#calc">
                        Наши проекты
                      </a>
                    </li>
                    <li class="header1-slide__link">
                      <a href="#pro">
                       Наше производство
                      </a>
                    </li>
                    <li class="header1-slide__link">
                      <a href="#invitation">
                        Дизайнерам
                      </a>
                    </li>
                    <li class="header1-slide__link">
                      <a href="#footer">
                        Контакты
                      </a>
                    </li>

                         </ul>
                           </nav> 
              </div>
            </div> 
         


            </div>
          <div class="header1__text">Меню</div>
          <div class="header__icons header-icons">
            
            
            
            <div class="header-icons__body">
              <a class="tel" href="tg://resolve?domain=juno_mebel"><img src="<?php echo get_template_directory_uri()?>/assets/img/header/tg.svg" alt="img"></a>
              <a target="_blank" class="wa" href="https://wa.me/79268444333"><img src="<?php echo get_template_directory_uri()?>/assets/img/header/wa.svg" alt="img"></a>
            </div>
          </div>
          <div class="header__tel header-tel">
            <div class="header-tel__body">
            
              
              <?php wp_nav_menu([
        'theme_location' => 'j-uno-phone',
	'menu'            => 'j-uno-phone', 
	'container_class' => 'header-tel__body', 
	'echo'            => true,
])?>
              
              
            
            
            
            
              <div class="header-tel__text js-button-campaign"><span>Перезвоните мне</span></div>
            </div>
          </div>
       
       
       
       
        </div>
      </header>
   
      <section class="create" id="create">
        <div class="create__wrapper"> 
			 <div class="ibg bg">
		<img src="<?php echo get_template_directory_uri()?>/assets/img/header/header-bg.png" alt="header-bg">
			  </div> 
         <div class="container">
            <div class="create__body">
              <h2 class="create__title">Создадим дизайнерскую мебель,<br><span>для вашего проекта, как на картинке
                  точно</span><br><span>в срок, избавив вас от стресса и хлопот</span></h2>
              <div class="create__text"><img src="<?php echo get_template_directory_uri()?>/assets/img/header/win1.svg" alt="">
                <p>Создали вместе с дизайнерами</p>
                <p>свыше 3250 объектов за последние 8 лет</p>
              </div>
              <div class="create__button js-button-campaign">
                <div class="button-color"><div class="button-color__link " ><span>Обсудить проект</span></div></div>
                <img src="<?php echo get_template_directory_uri()?>/assets/img/header/img-1.png" alt="">
                <div class="create__text1">Подскажем сильные<br><span>и слабые стороны вашего проекта</span><br><span>с
                    технологического процесса</span></div>
              </div>
              <div class="content-create__player player">
                <div class="player__body">
                  <div class="player__text">От звонка до установки мебели. Покажем за 4 мин</div>
                  
                
                
                <!-- открывает плеер в шапке  -->
                  <div   class="player__triangle js-button-high" >
                  <img src="<?php echo get_template_directory_uri()?>/assets/img/header/arrow-color.svg" alt="img">
                  </div>
                <!-- --------- -->



                  <div class="player__arc"><img src="<?php echo get_template_directory_uri()?>/assets/img/header/Mask-Group.png" alt="img"></div>
                  <div class="player__arc player__arc_big"><img src="<?php echo get_template_directory_uri()?>/assets/img/header/Mask-Group-big.png" alt="img">
                  </div>
                </div>
              </div>
            </div>
          </div> 
         </div>
      </section> 


<!-- кнопка возврата на начало страницы -->
 <div class="scrollup">
<span></span>
</div> 