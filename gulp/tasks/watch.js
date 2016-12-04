var gulp = require("gulp"),
watch = require("gulp-watch"),
browserSync = require("browser-sync").create();

gulp.task("watch", function() {
    // initialize the browserSync for app folder
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    //This will check for any changes to Index.html
    watch("./app/index.html", function() {
        browserSync.reload();
    });

    //This will watch styles folder and run css Inject function when changes are made
    watch("./app/assets/styles/**/*.css", function() {
        gulp.start("cssInject");
    });

    //This will watch scripts folder and run script refresh function when changes are made
    watch("./app/assets/scripts/**/*.js", function() {
        gulp.start("scriptRefresh");
    });
});

// This will inject css to browser without reloading the site
gulp.task("cssInject",["styles"], function() {
    return gulp.src("./app/temp/styles/styles.css")
        .pipe(browserSync.stream());
});

//This function will reload the browser when script is save
gulp.task("scriptRefresh", ["scripts"], function() {
    browserSync.reload();
});
