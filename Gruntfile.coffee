module.exports = (grunt) ->
  grunt.loadNpmTasks("grunt-contrib-coffee")
  grunt.loadNpmTasks("grunt-contrib-watch")

  grunt.registerTask("xxx", ["coffee:compile"])

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
        tasks: ["xxx"]
  )
