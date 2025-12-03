import { sendEmail } from './emailService';

const BREVO_API_KEY = import.meta.env.VITE_SMTP_EMAIL;
const SENDER_EMAIL = import.meta.env.VITE_SMTP_SENDER_EMAIL || '';
const FROM_NAME = import.meta.env.VITE_FROM_NAME || 'Portfolio';

/**
 * Escape HTML to prevent XSS attacks
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
const escapeHtml = (text) => {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(text).replace(/[&<>"']/g, (m) => map[m]);
};

/**
 * Send thank you email to the contact form sender
 * 
 * @param {Object} formData - Contact form data
 * @param {string} formData.user_name - User's name (or 'name' as alternative)
 * @param {string} formData.user_email - User's email (or 'email' as alternative)
 * @param {string} [formData.phone] - User's phone number (optional)
 * @param {string} [formData.message] - User's message (optional)
 * @param {string} [senderEmail] - Sender email (must be verified in Brevo, defaults to SENDER_EMAIL)
 * 
 * @returns {Promise<Object>} Response from Brevo API
 */
export const sendThankYouEmail = async (formData, senderEmail = null) => {
  // Handle both naming conventions: user_name/user_email or name/email
  const user_name = formData.user_name || formData.name || null;
  const user_email = formData.user_email || formData.email || null;
  const phone = formData.phone || null;
  const message = formData.message || null;

  if (!BREVO_API_KEY) {
    throw new Error('Brevo API key is not configured. Please set VITE_SMTP_EMAIL in your environment variables.');
  }

  if (!user_email || !user_name) {
    throw new Error('User email and name are required to send thank you email.');
  }

  // Validate email format
  if (!/\S+@\S+\.\S+/.test(user_email)) {
    throw new Error('Invalid email address format.');
  }

  // Use configured sender email
  const fromEmail = senderEmail || SENDER_EMAIL;
  if (!fromEmail) {
    throw new Error('Sender email is not configured. Please set VITE_SMTP_SENDER_EMAIL in your environment variables.');
  }

  // Format date in IST timezone
  const formatISTDate = () => {
    return new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  // Create HTML content for the thank you email
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .email-container {
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
          }
          .header p {
            margin: 10px 0 0 0;
            font-size: 16px;
            opacity: 0.95;
          }
          .content {
            padding: 40px 30px;
            background: #ffffff;
          }
          .greeting {
            font-size: 18px;
            color: #1f2937;
            margin-bottom: 20px;
            font-weight: 500;
          }
          .message {
            font-size: 16px;
            color: #4b5563;
            line-height: 1.8;
            margin-bottom: 30px;
          }
          .details-section {
            background: #f9fafb;
            border-left: 4px solid #667eea;
            padding: 20px;
            margin: 30px 0;
            border-radius: 4px;
          }
          .details-title {
            font-size: 16px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 15px;
          }
          .detail-item {
            margin-bottom: 12px;
            font-size: 14px;
            color: #6b7280;
          }
          .detail-label {
            font-weight: 600;
            color: #374151;
            display: inline-block;
            min-width: 100px;
          }
          .cta-section {
            text-align: center;
            margin: 40px 0;
            padding: 30px;
            background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
            border-radius: 8px;
          }
          .cta-title {
            font-size: 18px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 15px;
          }
          .cta-text {
            font-size: 15px;
            color: #4b5563;
            line-height: 1.7;
          }
          .footer {
            background: #f9fafb;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
          }
          .footer-text {
            font-size: 14px;
            color: #6b7280;
            margin-bottom: 10px;
          }
          .footer-links {
            margin-top: 20px;
          }
          .footer-link {
            color: #667eea;
            text-decoration: none;
            margin: 0 10px;
            font-size: 14px;
          }
          .footer-link:hover {
            text-decoration: underline;
          }
          .divider {
            height: 1px;
            background: #e5e7eb;
            margin: 30px 0;
          }
          @media only screen and (max-width: 600px) {
            body {
              padding: 10px;
            }
            .header, .content, .footer {
              padding: 25px 20px;
            }
            .header h1 {
              font-size: 24px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>Thank You for Contacting Us!</h1>
            <p>We've received your message and will get back to you soon.</p>
          </div>
          
          <div class="content">
            <div class="greeting">
              Dear ${escapeHtml(user_name)},
            </div>
            
            <div class="message">
              Thank you for reaching out to us through our contact form. We truly appreciate you taking the time to get in touch with us.
            </div>

            <div class="message">
              We have successfully received your message and our team will review it shortly. We aim to respond to all inquiries within 24-48 hours during business days.
            </div>

            ${message && message.trim() ? `
            <div class="details-section">
              <div class="details-title">Your Message Summary:</div>
              <div class="detail-item">
                <span class="detail-label">Message:</span>
                <span>${escapeHtml(message.length > 100 ? message.substring(0, 100) + '...' : message)}</span>
              </div>
            </div>
            ` : ''}

            <div class="details-section">
              <div class="details-title">Submission Details:</div>
              <div class="detail-item">
                <span class="detail-label">Name:</span>
                <span>${escapeHtml(user_name)}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Email:</span>
                <span>${escapeHtml(user_email)}</span>
              </div>
              ${phone && phone.trim() ? `
              <div class="detail-item">
                <span class="detail-label">Phone:</span>
                <span>${escapeHtml(phone)}</span>
              </div>
              ` : ''}
              <div class="detail-item">
                <span class="detail-label">Submitted At:</span>
                <span>${formatISTDate()}</span>
              </div>
            </div>

            <div class="cta-section">
              <div class="cta-title">What Happens Next?</div>
              <div class="cta-text">
                Our team will carefully review your message and respond to you at <strong>${escapeHtml(user_email)}</strong>. 
                If you have any urgent inquiries, please don't hesitate to reach out to us directly.
              </div>
            </div>

            <div class="divider"></div>

            <div class="message" style="font-size: 14px; color: #6b7280;">
              <strong>Important:</strong> If you have any additional information or questions, please feel free to reply to this email. 
              We're here to help and look forward to assisting you.
            </div>
          </div>

          <div class="footer">
            <div class="footer-text">
              Best regards,<br>
              <strong>${FROM_NAME} Team</strong>
            </div>
            <div class="footer-text" style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
              This is an automated confirmation email. Please do not reply directly to this message.
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  // Create plain text version
  const textContent = `
Thank You for Contacting Us!

Dear ${user_name},

Thank you for reaching out to us through our contact form. We truly appreciate you taking the time to get in touch with us.

We have successfully received your message and our team will review it shortly. We aim to respond to all inquiries within 24-48 hours during business days.

${message && message.trim() ? `Your Message Summary:\n${message.length > 100 ? message.substring(0, 100) + '...' : message}\n\n` : ''}Submission Details:
Name: ${user_name}
Email: ${user_email}
${phone && phone.trim() ? `Phone: ${phone}\n` : ''}Submitted At: ${formatISTDate()}

What Happens Next?
Our team will carefully review your message and respond to you at ${user_email}. 
If you have any urgent inquiries, please don't hesitate to reach out to us directly.

Important: If you have any additional information or questions, please feel free to reply to this email. 
We're here to help and look forward to assisting you.

Best regards,
${FROM_NAME} Team

---
This is an automated confirmation email. Please do not reply directly to this message.
  `;

  return await sendEmail({
    to: user_email,
    from: fromEmail,
    subject: `Thank You for Contacting ${FROM_NAME} - We've Received Your Message`,
    htmlContent: htmlContent,
    textContent: textContent,
    replyTo: fromEmail,
    params: {
      senderName: FROM_NAME
    }
  });
};

/**
 * Check if reply email service is configured
 * 
 * @returns {boolean} True if API key and sender email are configured
 */
export const isReplyEmailServiceConfigured = () => {
  return !!(BREVO_API_KEY && SENDER_EMAIL);
};

