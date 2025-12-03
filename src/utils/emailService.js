const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';
const BREVO_API_KEY = import.meta.env.VITE_SMTP_EMAIL;

// SMTP Configuration (for backend reference)
const SMTP_CONFIG = {
  user: import.meta.env.VITE_SMTP_USER || '85ea36001@smtp-brevo.com',
  pass: import.meta.env.VITE_SMTP_PASS || '',
  host: import.meta.env.VITE_SMTP_HOST || 'smtp-relay.brevo.com',
  port: parseInt(import.meta.env.VITE_SMTP_PORT || '587', 10)
};

// Sender configuration
const SENDER_EMAIL = import.meta.env.VITE_SMTP_SENDER_EMAIL || '';
const FROM_NAME = import.meta.env.VITE_FROM_NAME || 'Portfolio';

/**
 * Send email using Brevo API
 * 
 * @param {Object} emailData - Email data object
 * @param {string} emailData.to - Recipient email address
 * @param {string} emailData.from - Sender email address (must be verified in Brevo)
 * @param {string} emailData.subject - Email subject
 * @param {string} emailData.htmlContent - HTML content of the email
 * @param {string} [emailData.textContent] - Plain text content (optional)
 * @param {string} [emailData.replyTo] - Reply-to email address (optional)
 * @param {Object} [emailData.params] - Additional parameters (optional)
 * 
 * @returns {Promise<Object>} Response from Brevo API
 */
export const sendEmail = async (emailData) => {
  if (!BREVO_API_KEY) {
    throw new Error('Brevo API key is not configured. Please set VITE_SMTP_EMAIL in your environment variables.');
  }

  const {
    to,
    from,
    subject,
    htmlContent,
    textContent,
    replyTo,
    params = {}
  } = emailData;

  // Validate required fields
  if (!to || !from || !subject || !htmlContent) {
    throw new Error('Missing required email fields: to, from, subject, and htmlContent are required.');
  }

  // Prepare the email payload
  const payload = {
    sender: {
      email: from,
      name: params.senderName || FROM_NAME
    },
    to: Array.isArray(to) ? to.map(email => ({ email })) : [{ email: to }],
    subject: subject,
    htmlContent: htmlContent,
    ...(textContent && { textContent }),
    ...(replyTo && { replyTo: { email: replyTo } }),
    ...(params.headers && { headers: params.headers })
  };

  try {
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `Failed to send email: ${response.statusText}`);
    }

    return {
      success: true,
      messageId: data.messageId,
      data: data
    };
  } catch (error) {
    console.error('Error sending email via Brevo:', error);
    throw error;
  }
};

/**
 * Send contact form email
 * 
 * @param {Object} formData - Contact form data
 * @param {string} formData.user_name - User's name
 * @param {string} formData.user_email - User's email
 * @param {string} [formData.phone] - User's phone number (optional)
 * @param {string} formData.message - User's message
 * @param {string} [formData.fileurl] - File URL (optional, can be null)
 * @param {string} [formData.fileUrl] - File URL alternative name (optional, can be null)
 * @param {string} recipientEmail - Email address to receive the contact form submission
 * @param {string} [senderEmail] - Sender email (must be verified in Brevo, defaults to recipientEmail)
 * 
 * @returns {Promise<Object>} Response from Brevo API
 */
export const sendContactFormEmail = async (formData, recipientEmail, senderEmail = null) => {
  const {
    user_name,
    user_email,
    phone,
    message,
    fileurl,
    fileUrl
  } = formData;

  // Use configured sender email, or fallback to recipient email (must be verified in Brevo)
  const fromEmail = senderEmail || SENDER_EMAIL || recipientEmail;

  // Get file URL if available (handle both fileurl and fileUrl, and null values)
  const fileUrlValue = fileurl || fileUrl || null;

  // Format date in IST timezone
  const formatISTDate = () => {
    return new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  // Create HTML content for the email
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #3b82f6 0%, #14b8a6 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background: #f9fafb;
            padding: 20px;
            border: 1px solid #e5e7eb;
            border-top: none;
          }
          .field {
            margin-bottom: 15px;
          }
          .label {
            font-weight: bold;
            color: #374151;
            display: block;
            margin-bottom: 5px;
          }
          .value {
            color: #6b7280;
            padding: 8px;
            background: white;
            border-radius: 4px;
            border: 1px solid #e5e7eb;
          }
          .footer {
            text-align: center;
            padding: 20px;
            color: #9ca3af;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Name:</span>
            <div class="value">${user_name}</div>
          </div>
          <div class="field">
            <span class="label">Email:</span>
            <div class="value">${user_email}</div>
          </div>
          ${phone ? `
          <div class="field">
            <span class="label">Phone:</span>
            <div class="value">${phone}</div>
          </div>
          ` : ''}
          <div class="field">
            <span class="label">Message:</span>
            <div class="value">${message.replace(/\n/g, '<br>')}</div>
          </div>
          ${fileUrlValue ? `
          <div class="field">
            <span class="label">Attached File:</span>
            <div class="value">
              <a href="${fileUrlValue}" target="_blank" style="color: #3b82f6; text-decoration: none;">View File</a>
            </div>
          </div>
          ` : ''}
          <div class="field">
            <span class="label">Submitted At:</span>
            <div class="value">${formatISTDate()}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from your portfolio contact form.</p>
        </div>
      </body>
    </html>
  `;

  // Create plain text version
  const textContent = `
New Contact Form Submission

Name: ${user_name}
Email: ${user_email}
${phone ? `Phone: ${phone}\n` : ''}
Message:
${message}
${fileUrlValue ? `\nAttached File: ${fileUrlValue}` : ''}

Submitted At: ${formatISTDate()}
  `;

  return await sendEmail({
    to: recipientEmail,
    from: fromEmail,
    subject: `New Contact Form Submission from ${user_name}`,
    htmlContent: htmlContent,
    textContent: textContent,
    replyTo: user_email,
    params: {
      senderName: FROM_NAME
    }
  });
};

/**
 * Check if Brevo API is configured
 * 
 * @returns {boolean} True if API key is configured
 */
export const isEmailServiceConfigured = () => {
  return !!BREVO_API_KEY;
};

/**
 * Get SMTP configuration (for backend use)
 * 
 * @returns {Object} SMTP configuration object
 */
export const getSMTPConfig = () => {
  return {
    ...SMTP_CONFIG,
    from: SENDER_EMAIL,
    fromName: FROM_NAME
  };
};

