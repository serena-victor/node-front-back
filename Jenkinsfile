pipeline {
	agent any  
    
    tools {nodejs "node"}

	stages {
		stage('Build Docker') {
			steps {
				bat 'docker-compose down'
				bat 'docker-compose up -d'
                bat 'npm --prefix ./frontend run test -- --watchAll=false'
			}
		}
	}
}
