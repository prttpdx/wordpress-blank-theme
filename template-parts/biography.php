<div class="author-info">
	<div class="author-avatar">
		<?php
		echo get_avatar( get_the_author_meta( 'user_email' ) );
		?>
	</div>

	<div class="author-description">
		<h2 class="author-title"><span class="author-heading"><?php _e( 'Author:', 'seb' ); ?></span> <?php echo get_the_author(); ?></h2>

		<p class="author-bio">
			<?php the_author_meta( 'description' ); ?>
			<a class="author-link" href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>" rel="author">
				<?php printf( __( 'View all posts by %s', 'seb' ), get_the_author() ); ?>
			</a>
		</p>
	</div>
</div>
