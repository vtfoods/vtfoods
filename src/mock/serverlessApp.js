export const faqs = [
    {
        question:"What is serverless computing?",
        answer:
            "Serverless computing is a cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers. Developers focus on writing code in the form of functions that are triggered by events or HTTP requests, paying only for the compute time consumed.",
    },
    {
        question:"What are the advantages of serverless architecture?",
        answer: "Serverless architectures offer benefits such as reduced operational complexity, automatic scaling, built-in high availability, and cost efficiency through pay-per-execution pricing models."
    },
    {
        question:"What are typical use cases for serverless? ",
        answer:
            "Serverless is ideal for event-driven applications (e.g., IoT data processing, real-time file processing), backend services like APIs and microservices, scheduled tasks and batch processing, and applications with unpredictable traffic patterns.",
    },
    {
        question: "Which programming languages are supported by serverless platforms?",
        answer:
            "Major serverless platforms support a variety of programming languages including Node.js, Python, Java, C#, Go, and others. The exact languages supported can vary by provider.",
    },
    {
        question: "What are the challenges of serverless development?",
        answer:
            "Challenges include managing stateful applications, dealing with potential cold start delays, orchestrating and monitoring distributed systems, optimizing function execution times, and navigating vendor-specific limitations or constraints.",
    },
];

export const processCardData = [
  {
    id: 1,
    image: "../assets/serverless/expend.png",
    title: "Flexibility",
    description:"Applications can scale up automatically by adjusting their capacity through horizontal scaling, which involves adding or removing computing resources (such as servers) in response to changes in demand"
  },
  {
    id: 2,
    image: "../assets/serverless/upload.png",
    title: "Accelerated Deployment & Updating",
    description:"This title emphasizes the ability to quickly deploy patches, add new features, or release products by simply making changes to the code and uploading"
  },
  {
    id: 3,
    image: "../assets/serverless/world-grid.png",
    title: "Serverless Infrastructure",
    description:"a serverless infrastructure where the vendor manages the underlying servers, allowing users to concentrate on the runtime environment and service administration without the need for server provisioning or maintenance."
  },
  {
    id: 4,
    image: "../assets/serverless/profits.png",
    title: "Cost-Effective",
    description:"the benefits of reducing computing power and human resources, resulting in cost reduction. By efficiently managing the infrastructure, developers can optimize their workflows and focus on the essential aspects of server-side development"
  },
];
