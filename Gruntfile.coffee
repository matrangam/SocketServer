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
          "server.js": "scripts/server.coffee"

    watch:
      options:
        spawn: false

      coffee:
        files: [
          "scripts/server.coffee"
        ]
        tasks: ["coffee_src", "express:dev"]

    express:
      dev:
        options:
          port: 5000
          script: "server.js"

  )
