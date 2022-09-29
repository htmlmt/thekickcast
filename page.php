<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

get_header();
?>

<style media="screen">
    .content__review {
        padding-top: 30px !important;
    }
</style>

<main class="body__popup" id="dynamicContent">
    <div class="popup__episode">
        <div class="episode__content">
            <?php while ( have_posts() ) :
				the_post();
            ?>
            <div class="content__title">
                <h2><?php the_title(); ?></h2>
            </div>
            <div class="content__review">
                <div class="episode__number">
                    <h3><?php the_field('tagline'); ?></h3>
                </div>
                <?php the_content(); ?>
            </div>
            <div class="content__shim">

            </div>
            <?php endwhile; ?>
        </div>
    </div>
</main>
<style media="screen">
    .quadrant--container .quadrant__movie,
    .content__review .movie__title a {
        cursor: default;
    }
</style>

<?php
get_footer();
