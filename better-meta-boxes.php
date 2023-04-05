<?php
/*
 * Plugin Name: Better Meta Boxes
 */

add_action(
    'enqueue_block_editor_assets',
    function () {
        $assets = require_once plugin_dir_path(__FILE__) . 'components/CustomMetaBox.asset.php';
	    wp_enqueue_script(
		    'better-meta-boxes',
		    plugin_dir_url(__FILE__) . 'components/CustomMetaBox.js',
		    $assets['dependencies'],
		    $assets['version'],
            true
	    );
    }
);

function better_meta_box_auth_callback() {
	return current_user_can('edit_posts');
}

add_action(
    'init',
    function () {
	    register_post_meta(
		    '',
		    '_better_meta_box_value',
		    array(
			    'show_in_rest' => true,
			    'type' => 'boolean',
			    'single' => true,
			    'default' => false,
                'auth_callback' => 'better_meta_box_auth_callback'
		    )
	    );
    }
);

function better_meta_box_callback() {
	?>
	<div id="better-meta-box-element">
		Requires Javascript ?!
	</div>
	<?php
}

add_action( 'add_meta_boxes', function() {
	add_meta_box(
		'better-meta-boxes',
		'BMB',
		'better_meta_box_callback',
		null,
		'side'
	);
} );