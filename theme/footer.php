<?php
/**
* The template for displaying the footer
*
* Contains the closing of the #content div and all content after.
*
* @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
*
* @package WordPress
* @subpackage Twenty_Nineteen
* @since 1.0.0
*/

?>

	<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="https://unpkg.com/loading-attribute-polyfill@1.5.4/loading-attribute-polyfill.min.js"></script>
	<script type="text/javascript">
		var narrowerEpisodes = false;
	</script>
	<?php
	global $post;
	$post_id = $post->ID;

	$args = array(
		'posts_per_page' => -1
	);
	$query = new WP_Query( $args );
	$post_count = $query->post_count;
	?>

	<div class="episodes--heading" style="background-color: #1a1a1a; color: white;" id="heading">
		<h3>All Episodes</h3>
	</div>
	<div class="episodes--container show-left" id="episodes">
		<div class="before--hanger">
		</div>
		<nav class="body__episodes" style="width: <?php echo $query->post_count * 260 ?>px">
			<?php $index = 0; ?>
			<?php
			if ( $query->have_posts() ) {
				while ( $query->have_posts() ) {
					$query->the_post();
					?>

					<?php if ($post_id != get_the_ID()): ?>
					<div class="episodes__episode">
						<a href="<?php the_permalink(); ?>"></a>
						<div class="episode__image">
							<noscript class="loading-lazy">
								<img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'large'); ?>" alt="" loading="lazy" style="height: 250px; object-fit: cover; width: 250px;">
							</noscript>
							<?php if( have_rows('guests') ): ?>
								<div class="image__guests">
									<div class="guests__guest">
										feat.
										<?php $guest_index = 0; ?>
										<?php while ( have_rows('guests') ) : the_row(); ?>
											<?php if ($guest_index != 0): ?>&<?php endif; ?> <?php the_sub_field('name'); ?>
											<?php $guest_index = $guest_index + 1; ?>
										<?php endwhile; ?>
									</div>
								</div>
							<?php endif; ?>
						</div>
						<div class="episode__title">
							<a href="<?php the_permalink(); ?>"><h2><?php echo get_the_title(); ?></h2></a>
						</div>
						<?php $episode_number = get_field('episode_number'); ?>
						<?php if ($episode_number): ?>
						<?php if (has_category(4) && has_category(3) == false && has_category(2) == false): ?>
							<?php $episode_number_title = "written review" ?>
						<?php else: ?>
							<?php $episode_number_title = "episode " . $episode_number ?>
						<?php endif; ?>
						<?php else: ?>
							<?php $episode_number_title = "read more"; ?>
						<?php endif; ?>
						<div class="episode__link">
							<strong><a href="<?php the_permalink(); ?>"><?php echo $episode_number_title; ?></a></strong>
						</div>
					</div>
					<?php $index = $index + 1; ?>
					<?php else: ?>
					<script type="text/javascript">
						narrowerEpisodes = true;
					</script>
					<?php endif; ?>
				<?php } ?>
			<?php } ?>
		</nav>
		<div class="after--shadow">
		</div>
	</div>
	<script type="text/javascript">
		if (narrowerEpisodes) {
			var episodesWidth = $('.body__episodes').width();
			$('.body__episodes').width(episodesWidth - 270);
		}
	</script>
	<?php $last_letter = false; ?>
    <div class="body__movies" id="movies">
        <div class="movies--toggle">
            <h2 class="show-favorites">our favorite movies</h2>
            <h2 class="show-all inactive">all movies</h2>
        </div>
        <div class="movies__quadrant">
            <div class="quadrant--container">
				<?php $movies_index = 0; ?>
				<?php
				$args = array(
					'posts_per_page' => -1,
					'meta_key' => 'movies',
					'meta_compare' => 'EXISTS'
				);
				$query = new WP_Query( $args );

				$movies = [];

				if ( $query->have_posts() ) {
				    while ( $query->have_posts() ) {
				        $query->the_post(); ?>
						<?php if( have_rows('movies') ): ?>
							<?php while( have_rows('movies') ) : the_row(); ?>
								<?php $movie = (object) array(
									'movie_title' => get_sub_field('movie_title'),
									'chance_review' => get_sub_field('chance_review'),
									'noah_review' => get_sub_field('noah_review'),
									'audio_link' => get_field('audio_link'),
									'permalink' => get_the_permalink(),
									'id' => get_the_ID(),
									'month' => get_the_date('M Y')
								); ?>
								<?php array_push($movies, $movie); ?>
							<?php endwhile; ?>
						<?php endif; ?>
					<?php } ?>
                <?php } ?>

				<?php $last_month = false; ?>

				<div class="quadrant__letter" style="display: none; margin-top: 0; margin-bottom: 0;">
					<hr>
				</div>

				<div class="quadrant__letter" style="display: none; margin-bottom: 10px;">
					<h4 style="margin: 0;">RATINGS KEY:</h4>
				</div>

				<div class="quadrant__movie other-movies" style="cursor: default; display: none;">
					<div class="movie__title" style="background-color: #f2f251;">
						<span><a style="pointer-events: none;" href="#">Must See</a></span>
					</div>
				</div>

				<div class="quadrant__movie other-movies" style="cursor: default; display: none;">
					<div class="movie__title" style="background-color: #98b6e2;">
						<span><a style="pointer-events: none;" href="#">Brainy But Boring</a></span>
					</div>
				</div>

				<div class="quadrant__movie other-movies" style="cursor: default; display: none;">
					<div class="movie__title" style="background-color: #cbdbf2;">
						<span><a style="pointer-events: none;" href="#">Fun But Silly</a></span>
					</div>
				</div>

				<div class="quadrant__movie other-movies" style="cursor: default; display: none;">
					<div class="movie__title" style="background-color: #eaeaea;">
						<span><a style="pointer-events: none;" href="#">Mixed Reviews</a></span>
					</div>
				</div>

				<div class="quadrant__movie other-movies" style="cursor: default; display: none;">
					<div class="movie__title" style="border: 2px solid #eaeaea; background-color: white;">
						<span><a style="pointer-events: none;" href="#">Stay Away</a></span>
					</div>
				</div>

				<div class="quadrant__letter" style="display: none; margin-top: 0; margin-bottom: 0;">
					<hr>
				</div>

				<style media="screen">
					hr {
						display: block;
						width: 100%;
						margin: 20px 0 0;
						background-color: #eaeaea;
					}
				</style>

                <?php foreach ($movies as $movie) { ?>
					<?php if ($last_month != $movie->month): ?>
	                    <div class="quadrant__letter" style="display: none;">
	                        <strong><?php echo strtoupper($movie->month); ?></strong>
	                    </div>
	                <?php endif; ?>
	                <?php $last_month = $movie->month ?>
					<?php if ($movie->chance_review == "good_good" && $movie->noah_review == "good_good"): ?>
						<div class="quadrant__movie" data-episode="<?php echo $movie->id; ?>" data-audio="<?php echo $movie->audio_link; ?>">
							<div class="movie__title">
		                        <span><a href="<?php echo $movie->permalink; ?>"><?php echo $movie->movie_title; ?></a></span>
		                    </div>
		                </div>
	                <?php elseif ($movie->chance_review == "good_bad" && $movie->noah_review == "good_bad"): ?>
		                <div class="quadrant__movie other-movies" data-episode="<?php echo $movie->id; ?>" data-audio="<?php echo $movie->audio_link; ?>" style="display: none;">
							<div class="movie__title" style="background-color: #98b6e2;">
		                        <span><a href="<?php echo $movie->permalink; ?>"><?php echo $movie->movie_title; ?></a></span>
		                    </div>
		                </div>
					<?php elseif ($movie->chance_review == "bad_good" && $movie->noah_review == "bad_good"): ?>
		                <div class="quadrant__movie other-movies" data-episode="<?php echo $movie->id; ?>" data-audio="<?php echo $movie->audio_link; ?>" style="display: none;">
							<div class="movie__title" style="background-color: #cbdbf2;">
		                        <span><a href="<?php echo $movie->permalink; ?>"><?php echo $movie->movie_title; ?></a></span>
		                    </div>
		                </div>
					<?php elseif ($movie->chance_review == "bad_bad" && $movie->noah_review == "bad_bad"): ?>
		                <div class="quadrant__movie other-movies" data-episode="<?php echo $movie->id; ?>" data-audio="<?php echo $movie->audio_link; ?>" style="display: none;">
							<div class="movie__title" style="border: 2px solid #eaeaea; background-color: white;">
		                        <span><a href="<?php echo $movie->permalink; ?>"><?php echo $movie->movie_title; ?></a></span>
		                    </div>
		                </div>
					<?php else: ?>
		                <div class="quadrant__movie other-movies" data-episode="<?php echo $movie->id; ?>" data-audio="<?php echo $movie->audio_link; ?>" style="display: none;">
							<div class="movie__title" style="background-color: #eaeaea;">
		                        <span><a href="<?php echo $movie->permalink; ?>"><?php echo $movie->movie_title; ?></a></span>
		                    </div>
		                </div>
					<?php endif; ?>
				<?php } ?>
				<style>
				.quadrant--container .quadrant__movie .movie__title {
					z-index: 99999;
				}
				</style>
            </div>
        </div>
    </div>
	<div class="body__about" id="about">
		<div class="about__content">
			<div class="content__graph">

			</div>
			<div class="content__text">
				<header class="text__header">
					<h2><?php echo get_the_title(4062); ?></h2>
					<div class="header__tagline">
						<h3><?php the_field('tagline', 4062); ?></h3>
					</div>
				</header>
				<div class="text__explanation">
					<?php
					$queried_post = get_post(4062);
					$content = $queried_post->post_content;
					$content = apply_filters('the_content', $content);
					$content = str_replace(']]>', ']]&gt;', $content);
					echo $content;
					?>
				</div>
			</div>
		</div>
	</div>
</div>

<?php
$args = array(
	'p' => $post_id,
	'post_type' => 'post'
);
$query = new WP_Query( $args );
?>

<?php if ( $query->have_posts() ) {
    while ( $query->have_posts() ) {
        $query->the_post(); ?>

		<?php if (get_field('audio_link')): ?>
		<div id="player" class="player">
		    <div id="audioContainer">
		        <audio id="nowPlaying" src="<?php the_field('audio_link'); ?>">

		        </audio>
		    </div>
		    <div class="player--container">
		        <div class="player__share-progress">
		            <div class="share-progress__share">
		                <a href="https://facebook.com/sharer.php?u=<?php the_permalink(); ?>" target="_blank"></a>
		                <object type="image/svg+xml" data="<?php echo get_template_directory_uri(); ?>/assets/images/SVG/share.svg ?>">

		                </object>
		            </div>
		        </div>
		        <div class="player__track">
		            <div class="track__time">
		                <p><span id="progress">00:00:00</span> <span style="color: #939393;" id="left">00:00:00</span></p>
		            </div>
		            <div class="track__title">
		                <h2><?php the_title(); ?></h2>
		            </div>
		            <div class="track__progress">

		            </div>
		            <div class="track__duration">

		            </div>
		            <div class="track__seek">

		            </div>
		        </div>
		        <div class="player__play" data-episode="<?php the_field('audio_link'); ?>">
		            <div id="playerPlay" class="play__play">

		            </div>
		        </div>
		    </div>
		</div>
		<?php endif; ?>
<script type="text/javascript">
var navigating = false;
var draggableEpisodes;

// $(document).ready(function() {
// 	var draggableBounds = (<?php echo $post_count * 260 ?> - $('.wrapper').width()) * -1;
//
//     draggableEpisodes = Draggable.create('.body__episodes', {
//         type: "x",
//         throwProps: true,
//         edgeResistance: .75,
//         dragClickables: true,
//         bounds: { minX: draggableBounds + 10, maxX: 0},
//         onDrag: function() {
//             var percentage = (this.pointerY - this.target.offsetParent.offsetTop) / this.target.offsetParent.offsetHeight;
//             var center = 260 / this.target.offsetParent.offsetHeight;
//             if (percentage > center) {
//                 var difference = (percentage - center) * -1;
//             } else {
//                 var difference = center - percentage;
//             }
//             var episodesRotation = (ThrowPropsPlugin.getVelocity(this.target, "x") * difference) / 150;
//             TweenMax.to('.episodes__episode', 0, {x: episodesRotation, rotation: episodesRotation});
//             move = this.x;
//             for (var i = 3, l = Math.round(this.x / -260) + 3; i <= l; i++) {
//                 var episodeImage = $('.episodes__episode').eq(i).find('.episode__image');
//                 if (episodeImage.data('image')) {
//                     episodeImage.css('background-image', 'url(' + episodeImage.data('image') + ')');
//                     episodeImage.data('image', '');
//                 }
//             }
//             bodyScrollLock.disableBodyScroll($('body')[0]);
//         },
//         onDragEnd: function() {
//             bodyScrollLock.clearAllBodyScrollLocks();
//         },
//         onThrowComplete: function() {
//             bodyScrollLock.clearAllBodyScrollLocks();
//         },
//         onThrowUpdate: function() {
//             var percentage = (this.pointerY - this.target.offsetParent.offsetTop) / this.target.offsetParent.offsetHeight;
//             var center = 135 / this.target.offsetParent.offsetHeight;
//             if (percentage > center) {
//                 var difference = (percentage - center) * -1;
//             } else {
//                 var difference = center - percentage;
//             }
//             var episodesRotation = (ThrowPropsPlugin.getVelocity(this.target, "x") * difference) / 150;
//             TweenMax.to('.episodes__episode', 0, {x: episodesRotation, rotation: episodesRotation});
//             move = this.x;
//             for (var i = 3, l = Math.round(this.x / -260) + 3; i <= l; i++) {
//                 var episodeImage = $('.episodes__episode').eq(i).find('.episode__image');
//                 if (episodeImage.data('image')) {
//                     episodeImage.css('background-image', 'url(' + episodeImage.data('image') + ')');
//                     episodeImage.data('image', '');
//                 }
//             }
//             bodyScrollLock.disableBodyScroll($('body')[0]);
//         },
//         throwResistance: 3000,
//         cursor: 'default',
//         minimumMovement: 6,
//         snap: function(value) {
//             return Math.round(value / 260) * 260;
//         }
//     });
// });

// $('.episodes--container').on('scroll', function(e) {
// 	var x = $('.episodes--container').first().offset().left - $('.episodes__episode').first().offset().left;
// 	console.log(x);
// 	TweenMax.set($('.episodes--container'),{x: x});
// 	var episodesContainer = document.querySelector('.episodes--container');
// 	episodesContainer.scrollLeft = 0;
// 	draggableEpisodes[0].update();
// });
</script>
<?php } ?>
<?php } ?>
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-69399593-1', 'auto');
    ga('send', 'pageview');
</script>

<?php wp_footer(); ?>

</body>
</html>
