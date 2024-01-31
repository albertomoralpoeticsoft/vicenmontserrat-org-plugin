<?php 

add_action( 
	'wp_enqueue_scripts', 
	function () {

    wp_enqueue_script(
      'poeticsoft-vicenmontserrat-app-js', 
      plugin_dir_url(__DIR__) . 'poeticsoft-vicenmontserrat/app/main.js',
      array(
        'jquery'
      ), 
      filemtime(plugin_dir_path(__DIR__) . 'app/main.js'),
      true
    );

		wp_enqueue_style( 
			'poeticsoft-vicenmontserrat-app-css',
			plugin_dir_url(__DIR__) . 'poeticsoft-vicenmontserrat/app/main.css',
			array(
        'astra-theme-css'
      ), 
			filemtime(plugin_dir_path(__DIR__) . 'app/main.css'),
			'all' 
		);
  }
);