resource "aws_dynamodb_table" "carbon_table" {
  name         = "BerlinCarbonImpact"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "ID"

  attribute {
    name = "ID"
    type = "S"
  }

  tags = {
    Project = "BerlinTransit"
  }
}

# 1. Create the IAM Role for the Lambda
resource "aws_iam_role" "lambda_exec_role" {
  name = "berlin_transit_lambda_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

# 2. Create the Policy that allows access to your specific DynamoDB table
resource "aws_iam_role_policy" "dynamodb_lambda_policy" {
  name = "berlin_transit_dynamo_access"
  role = aws_iam_role.lambda_exec_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "dynamodb:PutItem",
          "dynamodb:GetItem",
          "dynamodb:UpdateItem",
          "dynamodb:Query",
          "dynamodb:Scan"
        ]
        # This automatically links to the table you defined earlier in the file!
        Resource = aws_dynamodb_table.carbon_table.arn
      },
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "arn:aws:logs:*:*:*"
      }
    ]
  })
}