<?php
get_header(); ?>

<section class="container u-margin-lg-h">

    <?php if ( have_posts() ) : ?>

        <header class="page-header">
            <h1 class="page-title"><?php printf( __( 'Search Results for: %s', 'seb' ), '<span>' . esc_html( get_search_query() ) . '</span>' ); ?></h1>
        </header>

        <?php
        while ( have_posts() ) : the_post();

            get_template_part( 'template-parts/content', 'search' );

        endwhile; ?>

    <div class="pagination">
        <?php echo paginate_links(array(
            'prev_text' => '<',
            'next_text' => '>'
        )); ?>
    </div>
    
<?php

    else :
        get_template_part( 'template-parts/content', 'none' );

    endif;
    ?>

</section>

<?php get_footer(); ?>
