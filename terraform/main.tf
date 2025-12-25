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