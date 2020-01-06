export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host": process.env.AWS_RDS_HOST,
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "udagram-dev-aiden",
    "aws_media_bucket": "udagram-aidenyi-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
