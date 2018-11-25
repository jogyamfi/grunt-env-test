pipeline {
    agent any
          tools {
                  nodejs 'nodejs'
          }
    environment {
        
		scmVars = checkout scm
        gitBranch = sh(
                script: "echo ${scmVars.GIT_BRANCH} | cut -d '/' -f2",
                returnStdout: true).trim()
    }

    stages {
       /* stage('Git Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'develop']], userRemoteConfigs: [[credentialsId: 'jchao-github', url: 'https://github.com/genomicsengland/pedigree-ui.git']]])
            }
        }*/
        stage('Build jar file') {
            steps {
                sh "npm install -g grunt-cli"
                sh "npm install grunt"
                sh "npm install jshint-stylish"
                sh "npm install grunt-contrib-concat"
                sh "npm install grunt-contrib-cssmin"
                sh "npm install grunt-contrib-jshint"
                sh "npm install grunt-contrib-uglify"
                sh "npm install grunt-contrib-watch"
                sh "npm install grunt-war"
                sh "npm install clean-css"

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
                sh "grunt build"
                
            }
        }
        
        
    }
    
}
