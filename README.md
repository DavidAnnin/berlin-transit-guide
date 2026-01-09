# Berlin Carbon Impact Tracker 🌿

A full-stack serverless application that calculates and tracks carbon savings from using public transport in Berlin compared to driving.

Also a static webiste that tells about how the berlin Transport system works.



## 🚀 The Architecture
- **Frontend**: React (Vite) hosted on AWS.
- **Backend**: AWS Lambda (Python 3.14) providing a RESTful API.
- **Database**: AWS DynamoDB for persistent, atomic storage of global savings.
- **Distribution**: AWS CLOUDFRONT for https access.
- **IaC**: Infrastructure as Code managed via **Terraform**.

## 🛠 Features
- **Real-time Atomic Updates**: Uses DynamoDB `UpdateItem` with `if_not_exists` logic to ensure data integrity during concurrent writes.
- **Infrastructure as Code**: The entire database and security (IAM) layer is version-controlled and deployable via Terraform.
- **Serverless Scaling**: Fully event-driven architecture that scales to zero when not in use.

## 📦 Local Setup

1. **Clone the Repo**
   ```bash
   git clone [https://github.com/your-username/berlin-transit-guide.git](https://github.com/DavidAnnin/berlin-transit-guide)
   cd berlin-transit-guide