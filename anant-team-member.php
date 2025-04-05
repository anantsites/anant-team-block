<?php
/**
 * Plugin Name:       Anant Team Member
 * Description:       We have provides innovative Team Member Gutenberg block to take websites to an advanced level.
 * plugin URL:        
 * Version:           0.0.1
 * Author:            Anantsites
 * Author URI:        https://anantsites.com/
 * License:           GPLv3
 * License URI:       https://opensource.org/licenses/GPL-3.0
 * Text Domain:       anant-team-member
 **/

 if (!defined('ABSPATH') ) : exit(); endif; // no direct access allowed

 define('ATM_VERSION', '0.0.1');
 define('ATM_FILE', __FILE__);
 define('ATM_DIR_PATH', plugin_dir_path(ATM_FILE));
 define('ATM_DIR_URL', plugin_dir_url(ATM_FILE));
 define('ATM_MIN_PHP_VERSION', '5.4');

 /**
 * Add custom block category
 */
function atm_blocks_categories($categories)
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
    add_filter('block_categories_all', 'atm_blocks_categories', PHP_INT_MAX );
} else {
    add_filter('block_categories', 'atm_blocks_categories', PHP_INT_MAX );
}
/**regidter block scripts*/
add_action( 'enqueue_block_editor_assets', function(){
	wp_enqueue_script(
		'atm-editor-script',
		ATM_DIR_URL .('build/index.js'),
		[
			'wp-i18n', 
			'wp-element', 
			'wp-blocks', 
			'wp-components', 
			'wp-editor', 
			'wp-data', 
			'wp-plugins',
		],
		ATM_VERSION,
		true 
	); 
	wp_localize_script(
		'atm-editor-script',
		'js_data',
		array(
			'placeholder_url' => ATM_DIR_URL . 'assets/images/placeholder.png',
		)
	);
} );

add_action( 'init', function(){
	wp_enqueue_style(
		'atm-editor-style',
		ATM_DIR_URL .('assets/css/style.css'),
		array(), 
		ATM_VERSION
	); 
} );

add_action( 'init', function () {
	register_block_type(
		'atm/team',
		[
			'style' => 'atm-editor-style',
			'editor-script' => 'atm-editor-script',
		]
	);
} );

function ATM_block_assets(){
    // Styles.
	wp_enqueue_style(
		'anant-team-member-font-awesome-6',
		ATM_DIR_URL .('assets/css/all.min.css'), 
        array(), 
        ATM_VERSION
	);
	wp_enqueue_style(
		'atm-fonticonpicker-base',
		ATM_DIR_URL .('assets/css/fonticonpicker.base-theme.react.css'),
		array(), 
		ATM_VERSION
	); 
	wp_enqueue_style(
		'atm-fonticonpicker-material',
		ATM_DIR_URL .('assets/css/fonticonpicker.material-theme.react.css'),
		array(), 
		ATM_VERSION
	);  
}

// Hook: Frontend assets.
add_action('enqueue_block_assets', 'ATM_block_assets');