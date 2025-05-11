"use server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export interface ContactFormState {
  message: string;
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[];
  };
  timestamp?: number; // To help React re-render on submission
}

export async function submitContactForm(
  prevState: ContactFormState | undefined,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      timestamp: Date.now(),
    };
  }

  try {
    // Simulate sending an email or saving to a database
    console.log("Contact form submitted successfully:", validatedFields.data);
    // await sendEmail(validatedFields.data); // Example: actual email sending logic

    return {
      message: "Thank you for your message! We'll be in touch soon.",
      success: true,
      timestamp: Date.now(),
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      success: false,
      errors: { _form: ["Submission failed due to a server error."] },
      timestamp: Date.now(),
    };
  }
}
