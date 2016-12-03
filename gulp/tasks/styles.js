var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssimport = require("postcss-import"),
mixins = require("postcss-mixins"),
hexrgba = require("postcss-hexrgba");

//This function compile the postcss style sheet
gulp.task("styles", function() {
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer]))
        //on error function will keep running
        .on("error",function(info) {
            console.log(info.toString());
            this.emit("end");
        })
        .pipe(gulp.dest("./app/temp/styles"));
});
