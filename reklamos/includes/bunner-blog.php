          <div class="container">
            <div class="bunner__body-blog">
              <div class="bunner__soc-blog soc">
                <a class="soc__item" href="<?php the_field( 'linkedin', 'options' ); ?>" target="_blank"><img
                    src="<?php echo get_template_directory_uri()?>/assets/img/svg/linkedin.svg" alt="img" /></a>
                <a class="soc__item" href="<?php the_field( 'facebook', 'options' ); ?>" target="_blank"><img
                    src="<?php echo get_template_directory_uri()?>/assets/img/svg/facebook.svg" alt="img" /></a>
                <a class="soc__item" href="<?php the_field( 'instagramm', 'options' ); ?>" target="_blank"><img
                    src="<?php echo get_template_directory_uri()?>/assets/img/svg/i-5.svg" alt="img" /></a>
              </div>
                            <div class="fdc bunner-column">

<form
    class="search-form  bunner__search bunner-search"
    role="search"
    method="get"
    id="searchform"
    action="<?php echo home_url('/') ?>"
>
    <input
        class="search-form__input"
        type="text"
        value="<?php echo get_search_query() ?>"
        name="s" id="s"
        placeholder="ieškoti"
        autocomplete="off"
    />
    <button type="submit" id="searchsubmit">
       <i class="icon-Vector"></i>  
    </button>
    <ul class="ajax-search"></ul>
</form>





                <div class="bunner__chip">#Blog</div>
                <div class="bunner__title-blog"><h1>Tinklaraštis</h1></div>
                <div class="bunner__text-blog">
                 Bėgant metams atradome ir išbandėme šiuos marketingo sprendimus, tad dabar norėtume pasidalinti jais su Jumis.
                </div>
              </div>
            </div>
          </div>