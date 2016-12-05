var gulp = require("gulp"),
del = require("del"),
usemin = require("gulp-usemin"),
rev = require("gulp-rev"),
cssnano = require("gulp-cssnano"),
uglify = require("gulp-uglify"),
browserSync = require("browser-sync").create();

gulp.task("previewDist", function() {
    // initialize the browserSync for dist folder
    browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });
});


//This will deleted the dist folder
gulp.task("deleteDistFolder", function() {
    return del("./docs");
});

//This will copy genral files and folder to dist
gulp.task("copyFontFiles", ["deleteDistFolder"], function() {
    return gulp.src("./app/assets/fonts/*")
        .pipe(gulp.dest("./docs/assets/fonts"));
});

//This will create new dist folder and move the files
gulp.task("usemin", ["deleteDistFolder", "styles", "scripts"], function() {
    return gulp.src("./app/index.html")
        .pipe(usemin({
            css: [function() {return rev()}, function() {return cssnano()}],
            js: [function() {return rev()}, function() {return uglify()}]
        }))
        .pipe(gulp.dest("./docs"));
});

//This task will run the mention functions
gulp.task("build", ["deleteDistFolder", "copyFontFiles", "usemin"]);
