---
title: "5 Tips For Getting AWS Cloud Certified"
date: "2020-06-03"
description: "guide"
image:
  {
    location: "https://res.cloudinary.com/mtninja/image/upload/v1591222910/code-conveyor/server-2160321_1280.jpg",
    alt: "server room",
  }
---

Getting cloud certified is relatively easy, but there are a few things you can do to make sure you pass on your first try. This is for anyone looking to specialize in cloud computing or to become more knowledgeable as an IT professional, engineer, or even a software developer. In this post, I'll outline 5 things I felt were most important in passing my exam, including the most important topics to learn and resources to read through.

The rise of cloud computing has meant that becoming knowledgeable at least on a high level could give you a leg up. In brief, cloud computing is just IT in the 'cloud'. Meaning, the physical servers and infrastructure is located somewhere else and delivered remotely over the internet to companies. Even if you don't want to pursue a career as a DevOps engineer, you can no doubt gain a lot of advantages from knowing the fundamentals of cloud computing. This market is expected to exceed \$330 billion in 2020 (<a href="https://hostingtribunal.com/blog/cloud-computing-statistics/" target="_blank">source</a>).

### 1. Know the difference between different types of cloud computing

**SaaS**
: _Software as a Service_ is an application that is provided over the cloud. Think Gmail.

**PaaS**
: _Platform as a Service_ is something that mainly helps developers to deploy and manage their applications.

**IaaS**
: AWS, Microsoft Azure, and Google Cloud all fall under this category. They allow you to control your cloud computing resources and they take care of the underlying cloud computing system.

**Hybrid**
: A hybrid solution is for companies that utilize both cloud and on-premise resources. Think banks that have very old legacy systems that aren't easily 100% transferable to the cloud.

### 2. Be able to describe each AWS service in one sentence

You don't have to know everything there is to know about every service, or even have used it before – you just need to be able to know what kind of service it is and what it's primary purpose is. For example, Amazon S3 storage buckets are for storing stuff, AWS RDS is the go-to Relational Database Service, EC2 instances are the main component of cloud computing that can scale up or down as needed, etc.

### 3. Memorize the financial aspect of AWS

Pretend you're a salesman for AWS and get to know all the different support plans, the overall benefits of switching to AWS from an on-premise setup, and the different pricing options for EC2 instances (On-Demand vs Reserved vs Dedicated vs Spot Instances).

![aws logo](https://res.cloudinary.com/mtninja/image/upload/v1591222910/code-conveyor/500px-Amazon_Web_Services_Logo.png)

### 4. Understand the lingo

AWS has a philosophy behind their system they call the 'Well-Architected Framework', and there are 5 design pillars involved. Knowing what those are is useful, but I think more importantly is just understanding the lingo they use and what these words and concepts refer to. This is a very important thing to understand before taking the exam:

**Reliability** _aka. Fault Tolerance_
: This concept refers to having your services and spread out over multiple Availability Zones (regional data centers) and backed up so that if something goes down you have some kind of backup to take over. This is a pretty common thing to understand in IT in general, but it's good to know for AWS as well.

**High Availability**
: This concept goes along with reliability but from a slightly different perspective. High availability ensures that your services are available and running for customers at all times, and that downtime is minimized. That's about it!

**Elasticity** _aka Scalability_
: This is the cornerstone of cloud computing in general, and it refers to the idea that you only use what you need. So during your peak traffic times, you have more servers available, and during slow times you are using less server power, and so the AWS system scales up and down based on your needs. Whereas in the past with on-premises setups, you had to 'guess capacity' and go from there, and probably waste a lot of time and resources running stuff that didn't need to be running.

**Cost Optimization**
: Again this goes with scalability, but it points to the fact that cloud computing helps businesses save money by only having you pay for what you need and what you end up using. There's also the idea that certain costs attributed to the physical maintenance, storage, and security of servers are taken care of for you so you don't have to factor that into your costs either.

**Security**
: This concept is pretty self-explanatory, in that it refers to securing your systems from attacks and unwanted breaches using fairly standard IT tactics like permissions and authentication in your software. But one thing to understand for the exam is what aspects of security are the responsibility of AWS and which are the responsibility of the customer. To sum it up in one sentence, the customer (the business using AWS) is responsible for security in the cloud, whereas AWS is responsible for the security of the cloud.

### 5. Resource recommendations

AWS offers its training tutorials, but beware – they aren't going to cut it for your exam. You need to go deeper, so make sure to read the official AWS Whitepaper, as well as maybe check out a third-party study guide. I'd also recommend taking some sort of third-party practice exams, such as those offered by Jon Bonso on Udemy, or WhizLabs. These are way closer to the actual exam than what AWS provides.

Here is a complete list of all the resources I used to pass my exam.

**For study**

- <a href="https://www.aws.training/Details/Curriculum?id=27076" target="_blank">AWS Cloud Practitioner Essentials</a>
- <a href="https://d1.awsstatic.com/whitepapers/aws-overview.pdf" target="_blank">Official AWS Whitepaper</a>
- <a href="https://youtu.be/3hLmDS179YE" target="_blank">freeCodeCamp AWS Certified Cloud Practitioner Training</a>

**For practice**

- <a href="https://www.examtopics.com/exams/amazon/aws-certified-cloud-practitioner/" target="_blank">ExamTopics Practice Questions</a>
- <a href="https://www.udemy.com/course/aws-certified-cloud-practitioner-practice-exams-amazon/" target="_blank">Jon Bonso's Practice Exams</a>

**Other resources** _(Disclaimer: These were recommended to me, but I never took them)_

- <a href="https://acloud.guru/" target="_blank">A Cloud Guru</a>
- <a href="https://www.whizlabs.com/aws-certified-cloud-practitioner/" target="_blank">WhizLabs</a>

### Conclusion

The foundational AWS certification exam is admittedly pretty easy, but \$100 bucks is a lot of money, and the way I see it – you want to pass that exam the first time, even if it means coming in overprepared. So don't even give yourself the chance to fail this exam, and enjoy becoming certified for the cloud and hopefully boosting your skills as a developer!

Finally, if you would like to add your ideas or recommendations for studying, please leave a comment below. Good luck!

<sub>_Image by_ <a href="https://pixabay.com/users/EliasSch-3372715/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2160321" target="_blank">EliasSch</a></sub>
