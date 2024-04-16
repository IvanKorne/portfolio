"use server";
import { Resend } from "resend";
import React from "react";
import contactFormEmail from "../email/contactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateMessage = (value: unknown, maxLen: number) => {
  if (!value || typeof value !== "string" || value.length > maxLen) {
    return false;
  }
  return true;
};

const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = <string>error.message;
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }
  return message;
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  if (!validateMessage(senderEmail, 500)) {
    return {
      error: "Email Error",
    };
  }

  if (!validateMessage(message, 5000)) {
    return {
      error: "Message Error",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      reply_to: senderEmail,
      to: "ikorneyc@uwaterloo.ca",
      subject: "Message from Portfolio",
      text: message,
      react: React.createElement(contactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
