module.exports = (grunt) ->
  grunt.loadNpmTasks("grunt-contrib-coffee")
  grunt.loadNpmTasks("grunt-contrib-watch")
  grunt.loadNpmTasks("grunt-express-server")

  grunt.registerTask("coffee_src", ["coffee:compile"])
  grunt.registerTask("server", ["coffee_src", "express:dev", "watch"])
  grunt.registerTask("default", ["server"])

  grunt.initConfig(
    pkg: grunt.file.readJSON("package.json")

    coffee:
      compile:
        files:
          "bin/server.js": "scripts/server.coffee"
          "bin/public/js/site.js": "scripts/site.coffee"

    watch:
      options:
        spawn: false

      coffee:
        files: ["scripts/*.coffee"]
        tasks: ["coffee_src", "express:dev"]

    express:
      dev:
        options:
          port: 5000
          script: "bin/server.js"

  )
