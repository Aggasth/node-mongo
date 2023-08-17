pipeline {
  agent any
  tools {
    nodejs 'node'
  }
  stages{
    stage('CheckOut') {
      steps {
        git clone 'https://github.com/Aggasth/node-mongo.git'
        checkout scm
      }
    }

    stage('Dependencies') {
      steps {
        script{
          sh 'npm init -y'
          sh 'npm install express ejs mongoose'
        }
      }
    }

    stage('Run App') {
      steps {
        sh 'node app.js'
      }
    }
  }

  post {
        always {
            sh 'node -e "require(\"mongoose\").disconnect();"'
        }
    }
}
