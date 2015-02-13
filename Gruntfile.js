module.exports = function(grunt){

	grunt.initConfig({
 
	autoprefixer: {
		single_file: {
		src: 'css/style.css',
	    dest: 'build/css/style.css'
	    },
	},
	sass: {                              // Task
	    dist: {                            // Target
	      files: {                         // Dictionary of files
	        'css/style.css': 'css/style.sass',       // 'destination': 'source'

	      }
	    }
	  },
	watch: {
	  	css: {
		    files: ['**/*.css'],
		    tasks: ['autoprefixer'],

	    },
	    // js: {
		   //  files: ['**/*.js'],
		   //  tasks: ['autoprefixer'],
		   //  options: {
		   //    livereload: true,
		   //  },
	    // },
		sass: {
		    files: '**/*.sass',
		    tasks: ['sass'],
		},
	},
	
	 
});


	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
};
