pipeline {

    agent {
        label 'docker_agent'
    }
stages {
        stage ('Git fetch') {
            steps {
                git branch: 'main', url: 'https://github.com/C1-80468/Project-CDAC.git'
            }
        }
        stage ('docker login') {
            steps {
                sh 'echo dckr_pat_ex-3KWtYTiPCwStp28GaNQiyyFo | /usr/bin/docker login -u c180468 --password-stdin'
            }
        }
        stage ('docker build image') {
            steps {
                sh '/usr/bin/docker image build -t c180468/mywebsite .'
            }
        }
        stage ('docker push image') {
            steps {
                sh '/usr/bin/docker image push c180468/mywebsite'
            }
        }
	stage ('docker remove service') {
            steps {
                sh '/usr/bin/docker service rm myservice'
            }
        }

        stage ('docker create service') {
            steps {
                sh '/usr/bin/docker service create --name myservice -p 9090:80 --replicas 5 c180468/mywebsite'
            }
        }
    }
}
