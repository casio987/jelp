import { UserEntity } from "../entities/user";
import { InterviewReviewEntity } from "../entities/interviewReview";
import { CompanyReviewEntity } from "../entities/companyReview";
import { hash } from "./crypt";
import { EntityManager } from "typeorm";
import { getLogger } from "../components/Logger";

const logger = getLogger();

export const seed = async (manager: EntityManager) => {
  logger.info("Attempting to seed DB.");
  // if (process.env.NODE_ENV === "development")

  const bob = new UserEntity();
  bob.email = "bob@gmail.com";
  bob.password = hash("belmont");

  const bobInterviewReview = new InterviewReviewEntity();
  bobInterviewReview.user = bob;
  bobInterviewReview.jobTitle = "Frontend Engineer";
  bobInterviewReview.atCompany = "Canva";
  bobInterviewReview.experience = "Extremely smooth process, with a total of 3 rounds of interviews - with the final round  being 3 45minute interviews."
  bobInterviewReview.questionsAsked = "Asked for a time where I resolved a conflict during my behavioural. Create a few designs with HTML, CSS and vanilla JS."
  bobInterviewReview.rating = 5;
  bobInterviewReview.offerReceived = true;

  const bobCompanyReview = new CompanyReviewEntity();
  bobCompanyReview.user = bob;
  bobCompanyReview.jobTitle = "Frontend Engineer";
  bobCompanyReview.atCompany = "Canva";
  bobCompanyReview.experience = "Great company to work for - with amazing perks, great people and free food!";
  bobCompanyReview.rating = 5;
  bobCompanyReview.isCurrentEmployee = true;

  bob.companyExperiences = [bobCompanyReview];
  bob.interviewExperiences = [bobInterviewReview];

  await manager.save(bob);

  const bill = new UserEntity();
  bill.email = "bill@hotmail.com";
  bill.password = hash("alucard");

  const billInterviewReview1 = new InterviewReviewEntity();
  billInterviewReview1.user = bill;
  billInterviewReview1.jobTitle = "Devops Intern";
  billInterviewReview1.atCompany = "Optus";
  billInterviewReview1.experience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billInterviewReview1.questionsAsked = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billInterviewReview1.rating = 3;
  billInterviewReview1.offerReceived = true;

  const billInterviewReview2 = new InterviewReviewEntity();
  billInterviewReview2.user = bill;
  billInterviewReview2.jobTitle = "Quantitative Trader";
  billInterviewReview2.atCompany = "Jane Street";
  billInterviewReview2.experience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billInterviewReview2.questionsAsked = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billInterviewReview2.rating = 4;
  billInterviewReview2.offerReceived = false;

  const billInterviewReview3 = new InterviewReviewEntity();
  billInterviewReview3.user = bill;
  billInterviewReview3.jobTitle = "Backend Engineering Intern";
  billInterviewReview3.atCompany = "Atlassian";
  billInterviewReview3.experience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billInterviewReview3.questionsAsked = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billInterviewReview3.rating = 2;
  billInterviewReview3.offerReceived = false;

  const billInterviewReview4 = new InterviewReviewEntity();
  billInterviewReview4.user = bill;
  billInterviewReview4.jobTitle = "Full stack Engineer";
  billInterviewReview4.atCompany = "Pearler";
  billInterviewReview4.experience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billInterviewReview4.questionsAsked = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billInterviewReview4.rating = 5;
  billInterviewReview4.offerReceived = false;

  const billInterviewReview5 = new InterviewReviewEntity();
  billInterviewReview5.user = bill;
  billInterviewReview5.jobTitle = "Quantitative Researcher";
  billInterviewReview5.atCompany = "Optiver";
  billInterviewReview5.experience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billInterviewReview5.questionsAsked = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billInterviewReview5.rating = 1;
  billInterviewReview5.offerReceived = false;

  const billInterviewReview6 = new InterviewReviewEntity();
  billInterviewReview6.user = bill;
  billInterviewReview6.jobTitle = "Software Engineering Intern";
  billInterviewReview6.atCompany = "Google";
  billInterviewReview6.experience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billInterviewReview6.questionsAsked = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billInterviewReview6.rating = 0;
  billInterviewReview6.offerReceived = false;

  const billInterviewReview7 = new InterviewReviewEntity();
  billInterviewReview7.user = bill;
  billInterviewReview7.jobTitle = "Site Reliability Engineer";
  billInterviewReview7.atCompany = "Google";
  billInterviewReview7.experience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billInterviewReview7.questionsAsked = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billInterviewReview7.rating = 5;
  billInterviewReview7.offerReceived = false;

  const billCompanyReview1 = new CompanyReviewEntity();
  billCompanyReview1.user = bill
  billCompanyReview1.jobTitle = "Devops Intern";
  billCompanyReview1.atCompany = "Optus";
  billCompanyReview1.experience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billCompanyReview1.rating = 3;
  billCompanyReview1.isCurrentEmployee = true;

  const billCompanyReview2 = new CompanyReviewEntity();
  billCompanyReview2.user = bill
  billCompanyReview2.jobTitle = "Quantitative Trade";
  billCompanyReview2.atCompany = "Jane Street";
  billCompanyReview2.experience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billCompanyReview2.rating = 5;
  billCompanyReview2.isCurrentEmployee = false;

  const billCompanyReview3 = new CompanyReviewEntity();
  billCompanyReview3.user = bill
  billCompanyReview3.jobTitle = "Backend Engineering Intern";
  billCompanyReview3.atCompany = "Atlassian";
  billCompanyReview3.experience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billCompanyReview3.rating = 4;
  billCompanyReview3.isCurrentEmployee = false;

  const billCompanyReview4 = new CompanyReviewEntity();
  billCompanyReview4.user = bill
  billCompanyReview4.jobTitle = "Full stack Engineer";
  billCompanyReview4.atCompany = "Pearler";
  billCompanyReview4.experience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billCompanyReview4.rating = 5;
  billCompanyReview4.isCurrentEmployee = false;

  const billCompanyReview5 = new CompanyReviewEntity();
  billCompanyReview5.user = bill
  billCompanyReview5.jobTitle = "Quantitative Researcher";
  billCompanyReview5.atCompany = "Optiver";
  billCompanyReview5.experience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billCompanyReview5.rating = 0;
  billCompanyReview5.isCurrentEmployee = false;

  const billCompanyReview6 = new CompanyReviewEntity();
  billCompanyReview6.user = bill
  billCompanyReview6.jobTitle = "Software Engineering Intern";
  billCompanyReview6.atCompany = "Google";
  billCompanyReview6.experience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billCompanyReview6.rating = 1;
  billCompanyReview6.isCurrentEmployee = false;

  const billCompanyReview7 = new CompanyReviewEntity();
  billCompanyReview7.user = bill
  billCompanyReview7.jobTitle = "Site Reliability Engineer";
  billCompanyReview7.atCompany = "Google";
  billCompanyReview7.experience = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in fringilla urna. Mauris elementum vel massa eget vulputate. Aliquam fermentum."
  billCompanyReview7.rating = 5;
  billCompanyReview7.isCurrentEmployee = false;

  bill.interviewExperiences = [
    billInterviewReview1,
    billInterviewReview2,
    billInterviewReview3,
    billInterviewReview4,
    billInterviewReview5,
    billInterviewReview6,
  ];

  bill.companyExperiences = [
    billCompanyReview1,
    billCompanyReview2,
    billCompanyReview3,
    billCompanyReview4,
    billCompanyReview5,
    billCompanyReview6,
    billCompanyReview7
  ];

  await manager.save(bill);
  logger.info("Finished seeding DB.");  
};