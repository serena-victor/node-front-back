pipeline {
	agent any  

	stages {
		stage('Build Docker') {
			steps {
				bat 'docker-compose down'
				bat 'docker-compose up -d'
                bat 'ls' //test
                bat 'npm --prefix ./frontend run test -- --watchAll=false'
			}
		}
	}
}
