<?php
/**
 * Plugin Name:       Anant Team Member
 * Description:       We have provides innovative Team Member Gutenberg block to take websites to an advanced level.
 * plugin URL:        
 * Version:           0.0.2
 * Author:            Anantsites
 * Author URI:        https://anantsites.com/
 * License:           GPLv3
 * License URI:       https://opensource.org/licenses/GPL-3.0
 * Text Domain:       anant-team-member
 **/

 if (!defined('ABSPATH') ) : exit(); endif; // no direct access allowed

 define('ANTM_VERSION', '0.0.2');
 define('ANTM_FILE', __FILE__);
 define('ANTM_DIR_PATH', plugin_dir_path(ANTM_FILE));
 define('ANTM_DIR_URL', plugin_dir_url(ANTM_FILE));
 define('ANTM_MIN_PHP_VERSION', '5.4');

 /**
 * Add custom block category
 */
function antm_blocks_categories($categories)
{
    // Add your custom category at the beginning
    $custom_category = array(
        'slug'  => 'anant-team-member',
        'title' => __('Anant Blocks', 'anant-team-member'),
    );

    // Check if the category already exists and remove it
    $categories = array_filter(
        $categories,
        function ($category) {
            return 'anant-team-member' !== $category['slug'];
        }
    );

    // Merge the custom category at the beginning
    array_unshift($categories, $custom_category);

    return $categories;
}

// Block Categories
if (version_compare(get_bloginfo('version'), '5.8', '>=')) {
    add_filter('block_categories_all', 'antm_blocks_categories', PHP_INT_MAX );
} else {
    add_filter('block_categories', 'antm_blocks_categories', PHP_INT_MAX );
}
/**regidter block scripts*/
add_action( 'enqueue_block_editor_assets', function(){
	wp_enqueue_script(
		'antm-editor-script',
		ANTM_DIR_URL .('build/index.js'),
		[
			'wp-i18n', 
			'wp-element', 
			'wp-blocks', 
			'wp-components', 
			'wp-editor', 
			'wp-data', 
			'wp-plugins',
		],
		ANTM_VERSION,
		true 
	); 
	wp_localize_script(
		'antm-editor-script',
		'js_data',
		array(
			'placeholder_url' => ANTM_DIR_URL . 'assets/images/placeholder.png',
		)
	);
} );

add_action( 'init', function(){
	wp_enqueue_style(
		'antm-editor-style',
		ANTM_DIR_URL .('assets/css/style.css'),
		array(), 
		ANTM_VERSION
	); 
} );

add_action( 'init', function () {
	register_block_type(
		'antm/team',
		[
			'style' => 'antm-editor-style',
			'editor-script' => 'antm-editor-script',
		]
	);
} );

function ANTM_block_assets(){
    // Styles.
	wp_enqueue_style(
		'anant-team-member-font-awesome-6',
		ANTM_DIR_URL .('assets/css/all.min.css'), 
        array(), 
        ANTM_VERSION
	);
	wp_enqueue_style(
		'antm-fonticonpicker-base',
		ANTM_DIR_URL .('assets/css/fonticonpicker.base-theme.react.css'),
		array(), 
		ANTM_VERSION
	); 
	wp_enqueue_style(
		'antm-fonticonpicker-material',
		ANTM_DIR_URL .('assets/css/fonticonpicker.material-theme.react.css'),
		array(), 
		ANTM_VERSION
	);  
}

// Hook: Frontend assets.
add_action('enqueue_block_assets', 'ANTM_block_assets');