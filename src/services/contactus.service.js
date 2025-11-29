const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
const CONTACT_API_ENDPOINT = `${API_BASE_URL}/api/portfolio-contact/send`;

export const sendContactForm = async (formData) => {
  const { name, email, phone, message, file } = formData;

  // Validate required fields
  if (!name || !name.trim()) {
    throw new Error('Name is required');
  }
  if (!email || !email.trim()) {
    throw new Error('Email is required');
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    throw new Error('Email is invalid');
  }
  if (!message || !message.trim()) {
    throw new Error('Message is required');
  }

  try {
    let response;

    // If file is provided, use FormData (multipart/form-data)
    if (file) {
      const formDataToSend = new FormData();
      formDataToSend.append('name', name.trim());
      formDataToSend.append('email', email.trim());
      if (phone && phone.trim()) {
        formDataToSend.append('phone', phone.trim());
      }
      formDataToSend.append('message', message.trim());
      formDataToSend.append('file', file);

      response = await fetch(CONTACT_API_ENDPOINT, {
        method: 'POST',
        body: formDataToSend
        // Don't set Content-Type header - browser will set it automatically with boundary for FormData
      });
    } else {
      // If no file, use JSON
      const jsonData = {
        name: name.trim(),
        email: email.trim(),
        ...(phone && phone.trim() && { phone: phone.trim() }),
        message: message.trim()
      };

      response = await fetch(CONTACT_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      });
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || data.error || `Failed to send contact form: ${response.statusText}`);
    }

    return {
      success: true,
      data: data
    };
  } catch (error) {
    console.error('Error sending contact form:', error);
    
    // If error is already a string, throw it as is
    if (typeof error === 'string') {
      throw new Error(error);
    }
    
    // If error has a message, use it
    if (error.message) {
      throw error;
    }
    
    // Default error message
    throw new Error('Failed to send contact form. Please try again later.');
  }
};
