#  commands for generating ca certificate.
#  chmod lets_encrypt.sh
#  cp letsencrypt/live/patrickmoore.io/fullchain.pem .
#  cp letsencrypt/live/patrickmoore.io/privkey.pem .
 docker build -t vuejs-cookbook/pmoore-resume-web .
 docker run -it -p 80:80 -p 443:443 --name pmoore-resume-2 vuejs-cookbook/pmoore-resume-web