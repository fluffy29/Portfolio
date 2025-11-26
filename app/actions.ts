"use server";

export async function submitContactForm(formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Here you would typically send an email using a service like Resend, SendGrid, etc.
  console.log("Form submitted:", { name, email, message });

  return {
    success: true,
    message: "Thanks for reaching out! I'll get back to you soon.",
  };
}
