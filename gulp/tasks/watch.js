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
});

// This will inject css to browser without reloading the site
gulp.task("cssInject",["styles"], function() {
    return gulp.src("./app/temp/styles/styles.css")
        .pipe(browserSync.stream());
});
