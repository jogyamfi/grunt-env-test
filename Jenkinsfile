pipeline {
    agent any
          tools {
                  nodejs 'nodejs'
          }
    

    stages {
       /* stage('Git Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'develop']], userRemoteConfigs: [[credentialsId: 'jchao-github', url: 'https://github.com/genomicsengland/pedigree-ui.git']]])
            }
        }*/
        stage('Build jar file') {
            steps {
                bat "npm install -g grunt-cli"
                bat "npm install grunt"
                bat "npm install jshint-stylish"
                bat "npm install grunt-contrib-concat"
                bat "npm install grunt-contrib-cssmin"
                bat "npm install grunt-contrib-jshint"
                bat "npm install grunt-contrib-uglify"
                bat "npm install grunt-contrib-watch"
                bat "npm install grunt-war"
                bat "npm install clean-css"

            }
        }

        stage('Display Results') {
            steps {
                //junit '**/target/surefire-reports/TEST-*.xml'
                //archive 'target/sonar/*'
                //archive 'target/*.jar'
                //step([$class: 'JacocoPublisher', execPattern: '**/target/jacoco.exec'])
                archive 'Jenkinsfile'
            }
        }
        stage('Build and Push Docker Image'){
            steps {
                bat "grunt updateSettings"
                
            }
        }
        
        
    }
    
}
